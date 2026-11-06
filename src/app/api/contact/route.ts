import { NextRequest, NextResponse } from "next/server";
import { validateContact } from "@/lib/contact-validation";
import { MailUnavailableError, sendContactInquiry } from "@/lib/buildcrest-mail";

const maxBodyBytes = 16 * 1024;
const windowMs = 60_000;
const maxRequests = 5;

const attempts = new Map<
  string,
  { count: number; expires: number }
>();

function json(
  message: string,
  status: number,
  headers: Record<string, string> = {},
) {
  return NextResponse.json(
    { success: false, message },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        ...headers,
      },
    },
  );
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") ?? "";

  if (!/^application\/json(?:\s*;|$)/i.test(contentType)) {
    return json("Content type must be application/json.", 415);
  }

  const contentLength = request.headers.get("content-length");

  if (contentLength !== null) {
    const length = Number(contentLength);

    if (!Number.isFinite(length) || length > maxBodyBytes) {
      return json("Request body is too large.", 413);
    }
  }

  const now = Date.now();

  for (const [key, value] of attempts) {
    if (value.expires <= now) attempts.delete(key);
  }

  // A shared limit is intentional until a trusted proxy
  // and production-grade rate limiter are configured.
  const clientKey = "unverified-clients";

  const previous = attempts.get(clientKey);

  const current =
    previous && previous.expires > now
      ? previous
      : { count: 0, expires: now + windowMs };

  current.count += 1;
  attempts.set(clientKey, current);

  if (current.count > maxRequests) {
    return json("Too many requests. Please try again shortly.", 429, {
      "Retry-After": String(
        Math.max(1, Math.ceil((current.expires - now) / 1000)),
      ),
    });
  }

  let body: unknown;

  try {
    const reader = request.body?.getReader();

    if (!reader) {
      return json("Request body is required.", 400);
    }

    const chunks: Uint8Array[] = [];
    let size = 0;

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      size += value.byteLength;

      if (size > maxBodyBytes) {
        await reader.cancel();
        return json("Request body is too large.", 413);
      }

      chunks.push(value);
    }

    const bytes = new Uint8Array(size);
    let offset = 0;

    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }

    body = JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return json("Invalid JSON request.", 400);
  }

  if (
    body &&
    typeof body === "object" &&
    "website" in body &&
    typeof body.website === "string" &&
    body.website.trim() !== ""
  ) {
    return json("Request could not be processed.", 400);
  }

  const result = validateContact(body);

  if (!result.ok) {
    return json(result.error, 400);
  }

  try {
    await sendContactInquiry(result.data);

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been submitted successfully.",
      },
      {
        status: 200,
        headers: { "Cache-Control": "no-store" },
      },
    );
  } catch (error) {
    if (error instanceof MailUnavailableError) {
      return json(
        "Online inquiries are not available yet. Please try again later.",
        503,
        { "Retry-After": "3600" },
      );
    }

    console.error("BuildCrest contact mail delivery failed.");

    return json(
      "Unable to deliver your inquiry. Please try again later.",
      503,
    );
  }
}

export async function GET() {
  return json("Method not allowed.", 405, {
    Allow: "POST",
  });
}
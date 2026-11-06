import { NextRequest, NextResponse } from "next/server";
import {
  MAX_REQUEST_SIZE,
  validateQuote,
} from "@/lib/quote-validation";
import { MailUnavailableError, sendQuoteInquiry } from "@/lib/buildcrest-mail";

const windowMs = 60_000;
const maxRequests = 3;

const attempts = new Map<
  string,
  { count: number; expires: number }
>();

function respond(message: string, status: number) {
  return NextResponse.json(
    { success: false, message },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}

export async function POST(request: NextRequest) {
  const type = request.headers.get("content-type") ?? "";

  if (!/^multipart\/form-data\s*;/i.test(type)) {
    return respond("Multipart form data is required.", 415);
  }

  const lengthHeader = request.headers.get("content-length");

  if (lengthHeader !== null) {
    const length = Number(lengthHeader);

    if (
      !Number.isFinite(length) ||
      length > MAX_REQUEST_SIZE
    ) {
      return respond("Request exceeds the upload limit.", 413);
    }
  }

  const now = Date.now();
  const key = "unverified-clients";

  for (const [client, value] of attempts) {
    if (value.expires <= now) attempts.delete(client);
  }

  const previous = attempts.get(key);

  const current =
    previous && previous.expires > now
      ? previous
      : { count: 0, expires: now + windowMs };

  current.count++;
  attempts.set(key, current);

  if (current.count > maxRequests) {
    return respond("Too many requests. Please try again later.", 429);
  }

  let form: FormData;

  try {
    const reader = request.body?.getReader();

    if (!reader) {
      return respond("Request body is required.", 400);
    }

    const chunks: Uint8Array[] = [];
    let size = 0;

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      size += value.byteLength;

      if (size > MAX_REQUEST_SIZE) {
        await reader.cancel();
        return respond("Request exceeds the upload limit.", 413);
      }

      chunks.push(value);
    }

    const body = new Uint8Array(size);
    let offset = 0;

    for (const chunk of chunks) {
      body.set(chunk, offset);
      offset += chunk.byteLength;
    }

    const boundedRequest = new Request(request.url, {
      method: "POST",
      headers: {
        "Content-Type": type,
      },
      body,
    });

    form = await boundedRequest.formData();
  } catch {
    return respond("Invalid multipart request.", 400);
  }

  const website = form.get("website");

  if (typeof website === "string" && website.trim() !== "") {
    return respond("Request could not be processed.", 400);
  }

  const result = await validateQuote(form);

  if (!result.ok) {
    return respond(result.error, 400);
  }

  try {
    await sendQuoteInquiry(form);

    return NextResponse.json(
      {
        success: true,
        message: "Your quote request has been submitted successfully.",
      },
      {
        status: 200,
        headers: { "Cache-Control": "no-store" },
      },
    );
  } catch (error) {
    if (error instanceof MailUnavailableError) {
      return respond(
        "Quote submissions are not available yet.",
        503,
      );
    }

    console.error("BuildCrest quote mail delivery failed.");

    return respond(
      "Unable to deliver your quote request. Please try again later.",
      503,
    );
  }
}

export async function GET() {
  return respond("Method not allowed.", 405);
}
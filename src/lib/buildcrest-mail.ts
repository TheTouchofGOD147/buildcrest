import nodemailer from "nodemailer";
import type { ContactInput } from "@/lib/contact-validation";

type MailConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
  from: string;
  to: string;
};

function config(): MailConfig | null {
  const host = process.env.BUILDCREST_SMTP_HOST?.trim();
  const portText = process.env.BUILDCREST_SMTP_PORT?.trim();
  const user = process.env.BUILDCREST_SMTP_USER?.trim();
  const password = process.env.BUILDCREST_SMTP_PASSWORD;
  const from = process.env.BUILDCREST_MAIL_FROM?.trim();
  const to = process.env.BUILDCREST_MAIL_TO?.trim();

  const port = Number(portText);

  if (
    !host ||
    !portText ||
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535 ||
    !user ||
    !password ||
    !from ||
    !to
  ) {
    return null;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from)) {
    return null;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
    return null;
  }

  return {
    host,
    port,
    secure: port === 465,
    user,
    password,
    from,
    to,
  };
}

export class MailUnavailableError extends Error {
  constructor() {
    super("Mail delivery is not configured.");
    this.name = "MailUnavailableError";
  }
}

function transport(settings: MailConfig) {
  return nodemailer.createTransport({
    host: settings.host,
    port: settings.port,
    secure: settings.secure,
    requireTLS: !settings.secure,
    auth: {
      user: settings.user,
      pass: settings.password,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
    tls: {
      minVersion: "TLSv1.2",
    },
  });
}

async function deliver(options: {
  subject: string;
  text: string;
  replyTo: string;
  attachments?: {
    filename: string;
    content: Buffer;
    contentType: string;
  }[];
}) {
  const settings = config();

  if (!settings) {
    throw new MailUnavailableError();
  }

  const client = transport(settings);

  try {
    const result = await client.sendMail({
      from: settings.from,
      to: settings.to,
      replyTo: options.replyTo,
      subject: options.subject,
      text: options.text,
      attachments: options.attachments,
      disableFileAccess: true,
      disableUrlAccess: true,
    });

    if (!result.accepted.includes(settings.to)) {
      throw new Error("SMTP recipient was not accepted.");
    }
  } finally {
    client.close();
  }
}

export async function sendContactInquiry(data: ContactInput) {
  await deliver({
    subject: "BuildCrest - New Contact Inquiry",
    replyTo: data.email,
    text: [
      "NEW BUILDCREST CONTACT INQUIRY",
      "",
      `Full Name: ${data.fullName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "Not provided"}`,
      `Inquiry Type: ${data.inquiryType}`,
      "",
      "MESSAGE",
      data.message,
    ].join("\n"),
  });
}

export async function sendQuoteInquiry(form: FormData) {
  const field = (name: string) =>
    String(form.get(name) ?? "").trim();

  const names: [string, string][] = [
    ["Full Name", "fullName"],
    ["Email", "email"],
    ["Phone", "phone"],
    ["Company", "company"],
    ["Project Name", "projectName"],
    ["Construction Type", "constructionType"],
    ["City", "city"],
    ["State", "state"],
    ["Site Address", "siteAddress"],
    ["Budget", "budget"],
    ["Start Date", "startDate"],
    ["Timeline", "timeline"],
    ["Description", "description"],
  ];

  const attachments: {
    filename: string;
    content: Buffer;
    contentType: string;
  }[] = [];

  for (const item of form.getAll("attachments")) {
    if (!(item instanceof File)) {
      throw new Error("Unexpected attachment.");
    }

    const bytes = await item.arrayBuffer();

    attachments.push({
      filename: item.name.replace(/[\r\n\\/]/g, "_"),
      content: Buffer.from(bytes),
      contentType: item.type,
    });
  }

  await deliver({
    subject: "BuildCrest - New Quote Request",
    replyTo: field("email"),
    text: [
      "NEW BUILDCREST QUOTE REQUEST",
      "",
      ...names.map(([label, name]) =>
        `${label}: ${field(name) || "Not provided"}`
      ),
      "",
      `Attachments: ${attachments.length}`,
    ].join("\n"),
    attachments,
  });
}
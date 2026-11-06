export const MAX_FILES = 5;
export const MAX_FILE_SIZE = 10 * 1024 * 1024;
export const MAX_TOTAL_SIZE = 25 * 1024 * 1024;
export const MAX_REQUEST_SIZE = 27 * 1024 * 1024;

const constructionTypes = [
  "Commercial Construction",
  "Residential Construction",
  "Civil & Infrastructure",
  "Renovation & Remodeling",
  "Site Development",
  "Other",
];

const budgets = [
  "",
  "Under $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000 - $500,000",
  "$500,000 - $1 million",
  "$1 million - $5 million",
  "Over $5 million",
  "To be determined",
];

const timelines = [
  "",
  "Less than 3 months",
  "3 - 6 months",
  "6 - 12 months",
  "12 - 24 months",
  "Over 24 months",
  "Not yet determined",
];

type Result =
  | { ok: true }
  | { ok: false; error: string };

function reject(error: string): Result {
  return { ok: false, error };
}

function hasSignature(
  bytes: Uint8Array,
  signature: number[],
): boolean {
  return bytes.length >= signature.length &&
    signature.every((value, index) => bytes[index] === value);
}

function isPdf(bytes: Uint8Array): boolean {
  return hasSignature(bytes, [37, 80, 68, 70, 45]);
}

function isJpeg(bytes: Uint8Array): boolean {
  return bytes.length >= 4 &&
    bytes[0] === 255 &&
    bytes[1] === 216 &&
    bytes[2] === 255 &&
    bytes[3] >= 224 &&
    bytes[3] <= 239;
}

function isPng(bytes: Uint8Array): boolean {
  return hasSignature(bytes, [137, 80, 78, 71, 13, 10, 26, 10]);
}

function isWebp(bytes: Uint8Array): boolean {
  if (bytes.length < 12) return false;

  const text = (start: number, end: number) =>
    String.fromCharCode(...bytes.slice(start, end));

  return text(0, 4) === "RIFF" &&
    text(8, 12) === "WEBP";
}

const allowedTypes: Record<
  string,
  { extensions: string[]; check: (bytes: Uint8Array) => boolean }
> = {
  "application/pdf": {
    extensions: [".pdf"],
    check: isPdf,
  },
  "image/jpeg": {
    extensions: [".jpg", ".jpeg"],
    check: isJpeg,
  },
  "image/png": {
    extensions: [".png"],
    check: isPng,
  },
  "image/webp": {
    extensions: [".webp"],
    check: isWebp,
  },
};

export async function validateQuote(form: FormData): Promise<Result> {
  const text = (name: string): string | null => {
    const values = form.getAll(name);

    if (values.length !== 1 || typeof values[0] !== "string") {
      return null;
    }

    return values[0].trim();
  };

  const required = (name: string, min: number, max: number) => {
    const value = text(name);
    return value !== null &&
      value.length >= min &&
      value.length <= max;
  };

  const optional = (name: string, max: number) => {
    const value = text(name);
    return value !== null && value.length <= max;
  };

  if (!required("fullName", 2, 120)) {
    return reject("Enter a valid full name.");
  }

  const email = text("email");

  if (
    !email ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return reject("Enter a valid email address.");
  }

  if (!required("phone", 5, 40)) {
    return reject("Enter a valid phone number.");
  }

  if (
    !optional("company", 160) ||
    !optional("projectName", 160) ||
    !optional("siteAddress", 250)
  ) {
    return reject("One or more optional fields are invalid.");
  }

  if (!constructionTypes.includes(text("constructionType") ?? "")) {
    return reject("Select a valid construction type.");
  }

  if (
    !required("city", 2, 120) ||
    !required("state", 2, 100)
  ) {
    return reject("Enter a valid project city and state.");
  }

  if (!budgets.includes(text("budget") ?? "__invalid__")) {
    return reject("Select a valid budget.");
  }

  if (!timelines.includes(text("timeline") ?? "__invalid__")) {
    return reject("Select a valid project timeline.");
  }

  const startDate = text("startDate");

  if (
    startDate === null ||
    (
      startDate !== "" &&
      (
        !/^\d{4}-\d{2}-\d{2}$/.test(startDate) ||
        Number.isNaN(Date.parse(`${startDate}T00:00:00Z`))
      )
    )
  ) {
    return reject("Enter a valid preferred start date.");
  }

  if (!required("description", 20, 10000)) {
    return reject(
      "Project description must contain 20 to 10,000 characters.",
    );
  }

  const attachments = form.getAll("attachments");

  if (attachments.length > MAX_FILES) {
    return reject("Maximum 5 attachments allowed.");
  }

  let total = 0;

  for (const attachment of attachments) {
    if (!(attachment instanceof File)) {
      return reject("Invalid attachment.");
    }

    if (
      attachment.size === 0 ||
      attachment.size > MAX_FILE_SIZE
    ) {
      return reject("Each file must be between 1 byte and 10 MB.");
    }

    total += attachment.size;

    if (total > MAX_TOTAL_SIZE) {
      return reject("Attachments exceed the 25 MB combined limit.");
    }

    const allowed = allowedTypes[attachment.type];

    if (!allowed) {
      return reject("Unsupported attachment type.");
    }

    if (
      !allowed.extensions.some(extension =>
        attachment.name.toLowerCase().endsWith(extension)
      )
    ) {
      return reject("Attachment extension does not match its type.");
    }

    const bytes = new Uint8Array(
      await attachment.slice(0, 16).arrayBuffer(),
    );

    if (!allowed.check(bytes)) {
      return reject("Attachment signature is invalid.");
    }
  }

  return { ok: true };
}
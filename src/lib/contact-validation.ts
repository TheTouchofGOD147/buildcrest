export type ContactInput = {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
};

export const inquiryTypes = [
  "General Inquiry",
  "Construction Services",
  "Project Inquiry",
  "Partnership Opportunity",
  "Career Inquiry",
  "Other",
] as const;

export function validateContact(
  value: unknown,
): { ok: true; data: ContactInput } | { ok: false; error: string } {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { ok: false, error: "Invalid request body." };
  }

  const body = value as Record<string, unknown>;

  const field = (name: string): string | null => {
    const item = body[name];
    return typeof item === "string" ? item.trim() : null;
  };

  const fullName = field("fullName");
  const email = field("email");
  const phone = field("phone");
  const inquiryType = field("inquiryType");
  const message = field("message");

  if (!fullName || fullName.length > 120) {
    return { ok: false, error: "Enter a valid full name." };
  }

  if (
    !email ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return { ok: false, error: "Enter a valid email address." };
  }

  if (phone === null || phone.length > 40) {
    return { ok: false, error: "Invalid phone number." };
  }

  if (
    !inquiryType ||
    !inquiryTypes.some(
      item => item.toLowerCase() === inquiryType.toLowerCase()
    )
  ) {
    return { ok: false, error: "Select a valid inquiry type." };
  }

  if (!message || message.length < 10 || message.length > 5000) {
    return {
      ok: false,
      error: "Your message must contain 10 to 5,000 characters.",
    };
  }

  return {
    ok: true,
    data: {
      fullName,
      email,
      phone,
      inquiryType,
      message,
    },
  };
}
"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-sm text-[#061e38] outline-none transition focus:border-[#c49300] focus:ring-2 focus:ring-[#ffc20a]/30";

const deliveryEnabled = true;

export default function ContactInquiryForm() {
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!deliveryEnabled || submitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    setSubmitting(true);
    setFeedback("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: String(data.get("fullName") ?? ""),
          email: String(data.get("email") ?? ""),
          phone: String(data.get("phone") ?? ""),
          inquiryType: String(data.get("inquiryType") ?? ""),
          message: String(data.get("message") ?? ""),
          website: String(data.get("website") ?? ""),
        }),
      });

      const result: {
        success?: boolean;
        message?: string;
      } = await response.json();

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.message ?? "Unable to submit your inquiry.",
        );
      }

      setSuccess(true);
      setFeedback("Your inquiry has been submitted successfully.");
      form.reset();
    } catch (error) {
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-bold">
          Full Name *
          <input
            type="text"
            name="fullName"
            autoComplete="name"
            placeholder="Your full name"
            required
            maxLength={120}
            className={inputClass}
          />
        </label>

        <label className="block text-sm font-bold">
          Email Address *
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            maxLength={254}
            className={inputClass}
          />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-bold">
          Phone Number
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="Your phone number"
            maxLength={40}
            className={inputClass}
          />
        </label>

        <label className="block text-sm font-bold">
          Inquiry Type *
          <select
            name="inquiryType"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select an inquiry type
            </option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Project Inquiry">Project Consultation</option>
            <option value="Partnership Opportunity">
              Business Partnership
            </option>
            <option value="Career Inquiry">Career Question</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>

      <label className="block text-sm font-bold">
        Your Message *
        <textarea
          name="message"
          rows={7}
          required
          minLength={10}
          maxLength={5000}
          placeholder="Tell us how we can help..."
          className={`${inputClass} resize-y`}
        />
      </label>

      <div
        className="absolute -left-[10000px]"
        aria-hidden="true"
      >
        <label htmlFor="contact-website">
          Leave this field empty
        </label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {!deliveryEnabled && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          Online inquiry delivery is being configured.
          Form submissions are not available yet.
        </div>
      )}

      {feedback && (
        <p
          role="status"
          aria-live="polite"
          className={`rounded-lg p-4 text-sm font-bold ${
            success
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {feedback}
        </p>
      )}

      <button
        type="submit"
        disabled={!deliveryEnabled || submitting}
        className={`w-full rounded-lg bg-[#061e38] px-7 py-4 text-sm font-black text-white ${
          !deliveryEnabled || submitting
            ? "cursor-not-allowed opacity-60"
            : "transition hover:bg-[#123a61]"
        }`}
      >
        {submitting
          ? "Sending Inquiry..."
          : deliveryEnabled
            ? "Send Inquiry"
            : "Send Inquiry - Coming Soon"}
      </button>

      <p className="text-xs leading-6 text-slate-500">
        Please do not enter sensitive personal or financial
        information in this form.
      </p>
    </form>
  );
}
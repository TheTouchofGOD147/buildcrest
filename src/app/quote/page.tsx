"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import BuildCrestHeader from "@/components/BuildCrestHeader";

const inputClass =
  "mt-2 w-full rounded-none border border-slate-300 bg-white px-4 py-3.5 text-sm text-[#252b30] outline-none transition focus:border-[#c49300] focus:ring-2 focus:ring-[#ffc20a]/30";

const allowedTypes = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
];

const quoteEnabled = true;

const maxFiles = 5;
const maxFileSize = 10 * 1024 * 1024;
const maxTotalSize = 25 * 1024 * 1024;

const steps = [
  {
    number: "01",
    title: "Share Your Project",
    description:
      "Provide the project location, construction type, requirements, and any available supporting information.",
  },
  {
    number: "02",
    title: "Project Review",
    description:
      "Your inquiry can be reviewed for scope, feasibility, and the information needed for further discussion.",
  },
  {
    number: "03",
    title: "Next Steps",
    description:
      "Once the inquiry service is activated, the team can follow up to discuss project requirements and next steps.",
  },
];

export default function QuotePage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!quoteEnabled || submitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    for (const file of files) {
      data.append("attachments", file, file.name);
    }

    setSubmitting(true);
    setFeedback("");
    setSuccess(false);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: data,
      });

      const result: {
        success?: boolean;
        message?: string;
      } = await response.json();

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.message ?? "Unable to submit quote request.",
        );
      }

      setSuccess(true);
      setFeedback("Your quote request was submitted successfully.");
      form.reset();
      setFiles([]);
      setFileError("");
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

  function handleFiles(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files ?? []);
    const combined = [...files, ...selected];

    if (combined.length > maxFiles) {
      setFileError("You can attach a maximum of 5 files.");
      event.target.value = "";
      return;
    }

    if (combined.some(file => !allowedTypes.includes(file.type))) {
      setFileError("Only PDF, JPG, PNG, and WEBP files are supported.");
      event.target.value = "";
      return;
    }

    if (combined.some(file => file.size > maxFileSize)) {
      setFileError("Each attachment must be 10 MB or smaller.");
      event.target.value = "";
      return;
    }

    const totalSize = combined.reduce((sum, file) => sum + file.size, 0);

    if (totalSize > maxTotalSize) {
      setFileError("Combined attachments must not exceed 25 MB.");
      event.target.value = "";
      return;
    }

    setFiles(combined);
    setFileError("");
    event.target.value = "";
  }

  function removeFile(index: number) {
    setFiles(current => current.filter((_, i) => i !== index));
    setFileError("");
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#252b30]">
      <BuildCrestHeader />

      <section
        className="flex min-h-[430px] items-center bg-[#263238] text-white md:min-h-[510px]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(0,20,38,.97), rgba(0,27,51,.74)), url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1900&q=85")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-8">
          <div className="mb-7 h-1 w-16 bg-[#e3aa19]" />

          <p className="mb-5 text-xs font-black tracking-[0.22em] text-[#d0a12a]">
            START YOUR PROJECT
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Request a
            <span className="block text-[#d0a12a]">Construction Quote.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            Tell us about your construction plans, project requirements,
            location, and anticipated timeline.
          </p>
        </div>
      </section>

      <section className="bg-[#f4f4f1] px-6 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-black tracking-[0.2em] text-[#806317]">
              OUR QUOTATION PROCESS
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              From Initial Idea to Project Discussion.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A detailed project inquiry helps establish the scope,
              priorities, and information needed for a productive discussion.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map(step => (
              <article
                key={step.number}
                className="rounded-none border border-slate-200 bg-white p-8"
              >
                <span className="text-4xl font-black text-[#a47b16]">
                  {step.number}
                </span>

                <div className="my-6 h-px bg-slate-200" />

                <h3 className="text-xl font-black">{step.title}</h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <aside>
            <p className="mb-4 text-xs font-black tracking-[0.2em] text-[#806317]">
              PROJECT INQUIRY
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Every Great Project Starts With a Plan.
            </h2>

            <div className="mt-7 h-1 w-16 bg-[#e3aa19]" />

            <p className="mt-8 leading-8 text-slate-600">
              Share as much information as you currently have.
              Project drawings, photographs, and other documents can
              help communicate your construction requirements.
            </p>

            <div className="mt-10 rounded-none bg-[#263238] p-8 text-white">
              <p className="text-xs font-black tracking-[0.2em] text-[#d0a12a]">
                PROJECT TYPES
              </p>

              <div className="mt-6 space-y-4 text-sm font-bold">
                <p>Commercial Construction</p>
                <p>Residential Construction</p>
                <p>Civil & Infrastructure</p>
                <p>Renovation & Remodeling</p>
                <p>Site Development</p>
              </div>

              <Link
                href="/services"
                className="mt-8 inline-block text-sm font-black text-[#d0a12a]"
              >
                Explore Our Services →
              </Link>
            </div>

            <div className="mt-8 rounded-none border border-slate-200 bg-[#f4f4f1] p-7">
              <h3 className="text-lg font-black">
                Need General Assistance?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                For questions unrelated to a specific construction quote,
                visit our Contact page.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-block text-sm font-black text-[#806317]"
              >
                Contact Grandeur BuildCrest →
              </Link>
            </div>
          </aside>

          <div className="rounded-none border border-slate-200 bg-white p-6 sm:p-9 md:p-11">
            <p className="text-xs font-black tracking-[0.2em] text-[#806317]">
              CONSTRUCTION QUOTATION
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Tell Us About Your Project
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Complete the details below to prepare your project inquiry.
              Fields marked * are required.
            </p>

            <form className="mt-10 space-y-10" onSubmit={handleSubmit}>
              <fieldset>
                <legend className="mb-6 border-b border-slate-200 pb-4 text-xl font-black">
                  01. Contact Information
                </legend>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block text-sm font-bold">
                    Full Name *
                    <input
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={120}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </label>

                  <label className="block text-sm font-bold">
                    Email Address *
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </label>

                  <label className="block text-sm font-bold">
                    Phone Number *
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      maxLength={40}
                      placeholder="Your phone number"
                      className={inputClass}
                    />
                  </label>

                  <label className="block text-sm font-bold">
                    Company / Organization
                    <input
                      name="company"
                      type="text"
                      maxLength={160}
                      placeholder="Optional"
                      className={inputClass}
                    />
                  </label>
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-6 border-b border-slate-200 pb-4 text-xl font-black">
                  02. Project Details
                </legend>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block text-sm font-bold">
                    Project Name
                    <input
                      name="projectName"
                      type="text"
                      maxLength={160}
                      placeholder="Project title or reference"
                      className={inputClass}
                    />
                  </label>

                  <label className="block text-sm font-bold">
                    Construction Type *
                    <select
                      name="constructionType"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select project type
                      </option>
                      <option>Commercial Construction</option>
                      <option>Residential Construction</option>
                      <option>Civil & Infrastructure</option>
                      <option>Renovation & Remodeling</option>
                      <option>Site Development</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label className="block text-sm font-bold">
                    Project City *
                    <input
                      name="city"
                      type="text"
                      required
                      maxLength={120}
                      placeholder="City"
                      className={inputClass}
                    />
                  </label>

                  <label className="block text-sm font-bold">
                    State *
                    <input
                      name="state"
                      type="text"
                      required
                      maxLength={100}
                      placeholder="State"
                      className={inputClass}
                    />
                  </label>
                </div>

                <label className="mt-6 block text-sm font-bold">
                  Project Site Address
                  <input
                    name="siteAddress"
                    type="text"
                    maxLength={250}
                    placeholder="Street address, if available"
                    className={inputClass}
                  />
                </label>
              </fieldset>

              <fieldset>
                <legend className="mb-6 border-b border-slate-200 pb-4 text-xl font-black">
                  03. Budget & Timeline
                </legend>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block text-sm font-bold">
                    Estimated Budget
                    <select
                      name="budget"
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="">Select budget range</option>
                      <option>Under $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>$100,000 - $250,000</option>
                      <option>$250,000 - $500,000</option>
                      <option>$500,000 - $1 million</option>
                      <option>$1 million - $5 million</option>
                      <option>Over $5 million</option>
                      <option>To be determined</option>
                    </select>
                  </label>

                  <label className="block text-sm font-bold">
                    Preferred Start Date
                    <input
                      name="startDate"
                      type="date"
                      className={inputClass}
                    />
                  </label>

                  <label className="block text-sm font-bold sm:col-span-2">
                    Expected Project Timeline
                    <select
                      name="timeline"
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="">Select expected duration</option>
                      <option>Less than 3 months</option>
                      <option>3 - 6 months</option>
                      <option>6 - 12 months</option>
                      <option>12 - 24 months</option>
                      <option>Over 24 months</option>
                      <option>Not yet determined</option>
                    </select>
                  </label>
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-6 border-b border-slate-200 pb-4 text-xl font-black">
                  04. Project Description
                </legend>

                <label className="block text-sm font-bold">
                  Tell Us About Your Project *
                  <textarea
                    name="description"
                    rows={8}
                    required
                    minLength={20}
                    maxLength={10000}
                    placeholder="Describe the scope, intended use, construction requirements, and any important project considerations..."
                    className={`${inputClass} resize-y`}
                  />
                </label>
              </fieldset>

              <fieldset>
                <legend className="mb-6 border-b border-slate-200 pb-4 text-xl font-black">
                  05. Supporting Documents
                </legend>

                <p className="mb-5 text-sm leading-7 text-slate-600">
                  Attach available drawings, plans, project photographs,
                  or supporting PDF documents.
                </p>

                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.webp"
                  onChange={handleFiles}
                  className="sr-only"
                  aria-label="Choose project attachments"
                />

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full rounded-none border-2 border-dashed border-[#b9c5d2] bg-[#f7f9fb] px-6 py-10 text-center transition hover:border-[#d9a400] hover:bg-[#fffbee]"
                >
                  <span className="block text-3xl font-black text-[#a47b16]">
                    +
                  </span>

                  <span className="mt-3 block text-sm font-black">
                    Choose Project Files
                  </span>

                  <span className="mt-2 block text-xs text-slate-500">
                    PDF, JPG, PNG, WEBP — up to 5 files
                  </span>
                </button>

                <p className="mt-3 text-xs text-slate-500">
                  Maximum 10 MB per file and 25 MB combined.
                </p>

                {fileError && (
                  <p role="alert" className="mt-4 text-sm font-bold text-red-700">
                    {fileError}
                  </p>
                )}

                {files.length > 0 && (
                  <div className="mt-6 space-y-3">
                    <p className="text-sm font-black">
                      Selected Attachments
                    </p>

                    {files.map((file, index) => (
                      <div
                        key={`${file.name}-${index}`}
                        className="flex items-center justify-between gap-4 rounded-none border border-slate-200 bg-white px-4 py-3"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold">
                            {file.name}
                          </p>

                          <p className="text-xs text-slate-500">
                            {(file.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          aria-label={`Remove ${file.name}`}
                          className="shrink-0 rounded-none bg-red-50 px-3 py-2 text-xs font-bold text-red-700 hover:bg-red-100"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </fieldset>

              <div
                className="absolute -left-[10000px]"
                aria-hidden="true"
              >
                <label htmlFor="quote-website">
                  Leave this field empty
                </label>
                <input
                  id="quote-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {!quoteEnabled && (
                <div className="rounded-none border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
                  The online quotation submission service is being configured.
                  You can review the form and select files, but inquiries
                  cannot be submitted until the service is activated.
                </div>
              )}

              {feedback && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-none p-4 text-sm font-bold ${
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
                disabled={!quoteEnabled || submitting}
                className={`w-full rounded-none bg-[#263238] px-7 py-4 text-sm font-black text-white ${
                  !quoteEnabled || submitting
                    ? "cursor-not-allowed opacity-60"
                    : "transition hover:bg-[#123a61]"
                }`}
              >
                {submitting
                  ? "Submitting Quote Request..."
                  : quoteEnabled
                    ? "Submit Quote Request"
                    : "Submit Quote Request"}
              </button>
              <p className="text-xs leading-6 text-slate-500">
                Please do not include passwords, financial account
                information, or other sensitive personal details.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#f1f2f0] px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#6d571e]">
              QUESTIONS BEFORE YOU BEGIN?
            </p>

            <h2 className="text-3xl font-black text-[#252b30] md:text-4xl">
              Connect With Grandeur BuildCrest.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-[#5f686e]">
              Have questions about construction services or
              the project inquiry process?
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 rounded-none bg-[#263238] px-8 py-4 text-sm font-black text-white"
          >
            Contact Us →
          </Link>
        </div>
      </section>

      <footer className="bg-[#111b21] px-6 py-8 text-center text-sm text-slate-300">
        © Grandeur BuildCrest Construction Group. All rights reserved.
      </footer>
    </main>
  );
}
import Link from "next/link";
import BuildCrestHeader from "@/components/BuildCrestHeader";
import ContactInquiryForm from "@/components/ContactInquiryForm";

const inquiries = [
  {
    number: "01",
    title: "General Inquiries",
    description:
      "Questions about Grandeur BuildCrest Construction Group, our services, or how to get in touch.",
  },
  {
    number: "02",
    title: "Project Consultation",
    description:
      "Discuss a potential construction project, project requirements, or early planning needs.",
  },
  {
    number: "03",
    title: "Business Partnerships",
    description:
      "Connect regarding construction partnerships, supplier relationships, and collaboration.",
  },
  {
    number: "04",
    title: "Career Questions",
    description:
      "Learn more about career opportunities and the Grandeur BuildCrest recruitment process.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#252b30]">
      <BuildCrestHeader />

      <section
        className="flex min-h-[390px] items-center bg-[#263238] text-white md:min-h-[470px]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(0,20,38,.96), rgba(0,27,51,.72)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1900&q=85")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-8">
          <div className="mb-7 h-1 w-16 bg-[#e3aa19]" />

          <p className="mb-5 text-xs font-black tracking-[0.22em] text-[#d0a12a]">
            CONTACT BUILDCREST
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">
            Start the
            <span className="block text-[#d0a12a]">Conversation.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            Have a construction question, project idea, or business inquiry?
            Connect with Grandeur BuildCrest Construction Group.
          </p>
        </div>
      </section>

      <section className="bg-[#f4f4f1] px-6 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-black tracking-[0.2em] text-[#806317]">
              HOW CAN WE HELP?
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Connect With the Right Team.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Whether you are exploring a project or simply have a question,
              choose the inquiry category that best fits your needs.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {inquiries.map((inquiry) => (
              <article
                key={inquiry.number}
                className="rounded-none border border-slate-200 bg-white p-7"
              >
                <span className="text-3xl font-black text-[#a47b16]">
                  {inquiry.number}
                </span>

                <div className="my-6 h-px bg-slate-200" />

                <h3 className="text-xl font-black">{inquiry.title}</h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {inquiry.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-black tracking-[0.2em] text-[#806317]">
              GET IN TOUCH
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Tell Us What You Have in Mind.
            </h2>

            <div className="mt-7 h-1 w-16 bg-[#e3aa19]" />

            <p className="mt-8 leading-8 text-slate-600">
              Use our inquiry form to share your questions or introduce
              a potential construction opportunity.
            </p>

            <div className="mt-10 rounded-none bg-[#263238] p-8 text-white">
              <p className="text-xs font-black tracking-[0.2em] text-[#d0a12a]">
                PLANNING A PROJECT?
              </p>

              <h3 className="mt-4 text-2xl font-black">
                Need a Construction Quote?
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-200">
                For project-specific requirements, use our dedicated
                quotation page to provide more detailed information.
              </p>

              <Link
                href="/quote"
                className="mt-7 inline-block rounded-none bg-[#e3aa19] px-6 py-3.5 text-sm font-black text-[#252b30]"
              >
                Request a Quote
              </Link>
            </div>

            <div className="mt-8 border-l-4 border-[#ffc20a] bg-[#f4f4f1] p-6">
              <h3 className="font-black">Career Opportunities</h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Interested in working with Grandeur BuildCrest? Explore
                available career profiles on our Careers page.
              </p>

              <Link
                href="/careers"
                className="mt-4 inline-block text-sm font-black text-[#806317]"
              >
                Explore Careers →
              </Link>
            </div>
          </div>

          <div className="rounded-none border border-slate-200 bg-white p-6 sm:p-9 md:p-11">
            <div className="mb-8">
              <p className="text-xs font-black tracking-[0.2em] text-[#806317]">
                CONTACT FORM
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Send an Inquiry
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Complete the form below to prepare your inquiry.
              </p>
            </div>

            <ContactInquiryForm />
          </div>
        </div>
      </section>

      <section className="bg-[#f1f2f0] px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#6d571e]">
              LET&apos;S BUILD TOGETHER
            </p>

            <h2 className="text-3xl font-black text-[#252b30] md:text-4xl">
              Have a Project Ready to Discuss?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-[#5f686e]">
              Share your project requirements through our dedicated
              construction quotation process.
            </p>
          </div>

          <Link
            href="/quote"
            className="shrink-0 rounded-none bg-[#263238] px-8 py-4 text-sm font-black text-white"
          >
            Request a Quote →
          </Link>
        </div>
      </section>

      <footer className="bg-[#111b21] px-6 py-8 text-center text-sm text-slate-300">
        © Grandeur BuildCrest Construction Group. All rights reserved.
      </footer>
    </main>
  );
}
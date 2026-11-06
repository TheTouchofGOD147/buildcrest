import Link from "next/link";
import BuildCrestHeader from "@/components/BuildCrestHeader";

const values = [
  {
    number: "01",
    title: "Integrity",
    description:
      "We believe strong partnerships begin with honest communication, responsible decisions, and clear expectations.",
  },
  {
    number: "02",
    title: "Craftsmanship",
    description:
      "Every detail matters. We approach construction with care, technical discipline, and respect for quality.",
  },
  {
    number: "03",
    title: "Collaboration",
    description:
      "Successful projects depend on alignment between clients, designers, contractors, and project teams.",
  },
  {
    number: "04",
    title: "Accountability",
    description:
      "We value clear responsibilities, practical planning, and consistent communication throughout the construction process.",
  },
];

const capabilities = [
  "Commercial Construction",
  "Residential Construction",
  "Civil & Infrastructure",
  "Construction Planning",
  "Project Coordination",
  "Site Development",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#061e38]">
      <BuildCrestHeader />

      <section
        className="relative isolate flex min-h-[490px] items-center bg-[#061e38] text-white md:min-h-[570px]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(0,20,38,.96) 0%, rgba(0,27,51,.86) 46%, rgba(0,27,51,.36) 100%), url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8">
          <div className="mb-7 h-1 w-16 bg-[#ffc20a]" />

          <p className="mb-5 text-xs font-extrabold tracking-[0.24em] text-[#ffc20a] md:text-sm">
            ABOUT BUILDCREST
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.08] tracking-tight md:text-7xl">
            Building With
            <span className="block text-[#ffc20a]">Purpose & Precision.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            Thoughtful planning. Responsible execution. A commitment to
            construction that serves people, businesses, and communities.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-lg bg-[#ffc20a] px-7 py-4 text-sm font-black text-[#061e38] transition hover:bg-yellow-300"
            >
              Explore Our Services
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-white/60 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-black tracking-[0.2em] text-[#a77b00]">
              WHO WE ARE
            </p>

            <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
              A Construction Company Focused on What Matters.
            </h2>

            <div className="mt-7 h-1 w-16 bg-[#ffc20a]" />

            <p className="mt-8 text-base leading-8 text-slate-600">
              Grandeur BuildCrest Construction Group is focused on delivering a
              thoughtful approach to commercial, residential, and
              infrastructure construction. We recognize that every project
              represents an investment, a responsibility, and a vision
              for the future.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Our approach emphasizes careful preparation, clear communication,
              collaboration, and attention to detail. From early project
              discussions through construction planning and execution,
              our priorities are quality, safety, and accountability.
            </p>

            <Link
              href="/ongoing-projects"
              className="mt-8 inline-flex items-center gap-3 font-extrabold text-[#061e38] hover:text-[#a77b00]"
            >
              Explore Our Project Directory
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative">
            <div
              role="img"
              aria-label="Construction site with cranes and structural work"
              className="min-h-[390px] rounded-xl bg-cover bg-center shadow-xl md:min-h-[520px]"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1100&q=85")',
              }}
            />

            <div className="absolute -bottom-6 left-5 max-w-[290px] rounded-lg bg-[#061e38] p-7 text-white shadow-xl md:-left-6">
              <div className="mb-4 h-1 w-12 bg-[#ffc20a]" />
              <p className="text-xl font-black leading-snug">
                Built on planning.
                <span className="block text-[#ffc20a]">Driven by purpose.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f6f9] px-6 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2">
          <article className="rounded-xl bg-white p-9 shadow-sm md:p-12">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-[#fff4ca] text-2xl font-black text-[#a77b00]">
              01
            </div>

            <p className="text-xs font-black tracking-[0.18em] text-[#a77b00]">
              OUR MISSION
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight">
              Constructing With Responsibility.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              To approach every construction opportunity with sound planning,
              transparent communication, quality-minded execution, and
              respect for the people and communities involved.
            </p>
          </article>

          <article className="rounded-xl bg-[#061e38] p-9 text-white shadow-sm md:p-12">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-[#ffc20a] text-2xl font-black text-[#061e38]">
              02
            </div>

            <p className="text-xs font-black tracking-[0.18em] text-[#ffc20a]">
              OUR VISION
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight">
              Building a Stronger Tomorrow.
            </h2>

            <p className="mt-6 leading-8 text-slate-200">
              To contribute to thoughtfully developed spaces and
              infrastructure through an approach that values long-term
              usefulness, responsible construction, and lasting relationships.
            </p>
          </article>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-black tracking-[0.2em] text-[#a77b00]">
              OUR PRINCIPLES
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              The Values Behind Every Decision.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Our principles guide how we communicate, plan, collaborate,
              and approach construction responsibilities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.number}
                className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-4xl font-black text-[#e5ad00]">
                  {value.number}
                </span>

                <div className="my-6 h-px bg-slate-200" />

                <h3 className="text-xl font-black">{value.title}</h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061e38] px-6 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-black tracking-[0.2em] text-[#ffc20a]">
              WHAT WE DO
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Construction Expertise Across Essential Sectors.
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-slate-200">
              Our service areas reflect the different needs of property
              owners, businesses, and communities, with planning and
              coordination at the center of our approach.
            </p>

            <Link
              href="/services"
              className="mt-9 inline-block rounded-lg bg-[#ffc20a] px-7 py-4 text-sm font-black text-[#061e38]"
            >
              View All Services
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className="flex min-h-28 items-center gap-4 rounded-lg border border-white/20 bg-white/5 p-5"
              >
                <span className="text-xl font-black text-[#ffc20a]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-bold">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div
            role="img"
            aria-label="Construction workers discussing project planning"
            className="min-h-[370px] rounded-xl bg-cover bg-center shadow-lg md:min-h-[490px]"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1100&q=85")',
            }}
          />

          <div>
            <p className="mb-4 text-xs font-black tracking-[0.2em] text-[#a77b00]">
              SAFETY & QUALITY
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
              A Responsible Approach to Every Project.
            </h2>

            <div className="mt-7 h-1 w-16 bg-[#ffc20a]" />

            <p className="mt-8 leading-8 text-slate-600">
              Safety and quality are essential considerations in construction.
              We believe they should be addressed through thoughtful
              planning, clear expectations, appropriate procedures,
              and attention throughout each stage of work.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              We value open communication, careful coordination,
              and a proactive approach to identifying project needs
              and potential challenges.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 font-black text-[#061e38] hover:text-[#a77b00]"
            >
              Start a Conversation
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#ffc20a] px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#604800]">
              LET&apos;S BUILD SOMETHING MEANINGFUL
            </p>

            <h2 className="max-w-2xl text-3xl font-black leading-tight text-[#061e38] md:text-4xl">
              Have a Construction Project in Mind?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-[#25384b]">
              Tell us about your plans and start the conversation
              about your construction needs.
            </p>
          </div>

          <Link
            href="/quote"
            className="shrink-0 rounded-lg bg-[#061e38] px-8 py-4 text-sm font-black text-white transition hover:bg-[#123b62]"
          >
            Request a Quote →
          </Link>
        </div>
      </section>

      <footer className="bg-[#001426] px-6 py-8 text-center text-sm text-slate-300">
        © Grandeur BuildCrest Construction Group. All rights reserved.
      </footer>
    </main>
  );
}
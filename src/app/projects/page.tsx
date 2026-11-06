import BuildCrestHeader from "@/components/BuildCrestHeader";
import Link from "next/link";

const title = "Construction Projects";
const description = "Explore our construction project categories and capabilities.";

const items = [
  "Commercial Projects",
  "Residential Developments",
  "Infrastructure Projects",
  "Industrial Facilities",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <BuildCrestHeader />

      <section className="bg-[#061e38] px-6 py-20 text-center text-white">
        <p className="mb-4 font-bold text-[#ffc20a]">
          BUILDCREST CONSTRUCTION GROUP
        </p>

        <h1 className="mx-auto max-w-4xl text-4xl font-black md:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
          {description}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item}
              className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-5 h-2 w-14 rounded bg-[#ffc20a]" />

              <h2 className="text-xl font-extrabold">
                {item}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Explore Grandeur BuildCrest&apos;s approach to {item.toLowerCase()}.
                Additional details will be available soon.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#061e38] px-6 py-12 text-center text-white">
        <h2 className="text-2xl font-black">
          Ready to Get Started?
        </h2>

        <p className="mt-3 text-slate-200">
          Explore our construction services and career opportunities.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <Link
            href="/quote"
            className="rounded-lg bg-[#ffc20a] px-6 py-3 font-bold text-[#061e38]"
          >
            Request a Quote
          </Link>

          <Link
            href="/careers"
            className="rounded-lg border border-white px-6 py-3 font-bold"
          >
            Explore Careers
          </Link>
        </div>
      </section>

      <footer className="bg-[#001426] px-6 py-7 text-center text-sm text-white">
        Grandeur BuildCrest Construction Group
      </footer>
    </main>
  );
}
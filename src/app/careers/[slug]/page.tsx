import BuildCrestHeader from "@/components/BuildCrestHeader";
import Link from "next/link";
import { notFound } from "next/navigation";
import { careers } from "@/data/careers";

export function generateStaticParams() {
  return careers.map(career => ({ slug: career.slug }));
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const career = careers.find(item => item.slug === slug);

  if (!career) notFound();

  const hiringBaseUrl = "https://hiring.grandeurproperties.online";
  const applyUrl = hiringBaseUrl
    ? `${hiringBaseUrl.replace(/\/$/, "")}/?position=${encodeURIComponent(career.title)}`
    : null;

  return (
    <main className="min-h-screen bg-[#f4f6f9] text-[#061e38]">
      <BuildCrestHeader />

      <section className="bg-[#061e38] px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          <Link href="/careers" className="text-sm font-bold text-[#ffc20a]">
            &larr; Back to All Careers
          </Link>
          <p className="mt-9 text-xs font-black tracking-widest text-[#ffc20a]">
            {career.category.toUpperCase()}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black md:text-6xl">
            {career.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            {career.summary}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-2">
        <article className="rounded-2xl bg-white p-7 shadow-sm md:p-9">
          <h2 className="text-2xl font-black">Typical Responsibilities</h2>
          <ul className="mt-6 space-y-4">
            {career.responsibilities.map(item => (
              <li key={item} className="flex items-start gap-3 leading-7 text-slate-600">
                <span aria-hidden="true" className="font-black text-amber-600">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl bg-white p-7 shadow-sm md:p-9">
          <h2 className="text-2xl font-black">Typical Qualifications</h2>
          <ul className="mt-6 space-y-4">
            {career.qualifications.map(item => (
              <li key={item} className="flex items-start gap-3 leading-7 text-slate-600">
                <span aria-hidden="true" className="font-black text-amber-600">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="bg-white px-5 py-14">
        <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 p-8">
          <h2 className="text-2xl font-black">Explore Your Career</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            Discover the responsibilities, qualifications, and skills
            associated with this construction career path.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {applyUrl ? (
              <a
                href={applyUrl}
                className="inline-flex rounded-lg bg-[#ffc20a] px-6 py-3 font-black text-[#061e38] transition hover:bg-amber-400"
              >
                Apply Now
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="The application portal is being prepared."
                className="inline-flex cursor-not-allowed rounded-lg bg-[#ffc20a] px-6 py-3 font-black text-[#061e38] opacity-60"
              >
                Apply Now
              </button>
            )}

            <Link
              href="/careers"
              className="inline-flex rounded-lg border border-slate-300 px-6 py-3 font-black text-[#061e38]"
            >
              Explore More Careers
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#001426] px-5 py-8 text-center text-sm text-white">
        Grandeur BuildCrest Construction Group
      </footer>
    </main>
  );
}
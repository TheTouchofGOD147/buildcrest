import Link from "next/link";
import { notFound } from "next/navigation";
import { services, serviceImage } from "@/data/services";

export function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-[#f4f6f9] text-[#061e38]">
      <header className="bg-white px-5 py-5 shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5">
          <Link href="/" className="text-2xl font-black">
            <span className="text-[#e9ae00]">▥ </span>Grandeur BuildCrest
            <small className="block text-xs font-bold">Construction Group</small>
          </Link>
          <nav className="flex flex-wrap gap-5 text-sm font-bold">
            <Link href="/">Home</Link>
            <Link href="/services">All Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/ongoing-projects">Ongoing Projects</Link>
            <Link href="/quote">Request a Quote</Link>
          </nav>
        </div>
      </header>

      <section className="bg-[#061e38] px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          <Link href="/services" className="text-sm font-bold text-[#ffc20a]">
            &larr; Back to All Services
          </Link>
          <p className="mt-9 text-xs font-black tracking-[0.2em] text-[#ffc20a]">
            CONSTRUCTION SERVICES
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-xl text-slate-200">
            {service.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2">
        <div
          role="img"
          aria-label={`Illustrative photograph for ${service.title}`}
          className="min-h-80 rounded-2xl bg-slate-200 bg-cover bg-center shadow-lg"
          style={{ backgroundImage: `url("${serviceImage(service.image, 1400)}")` }}
        />

        <div className="flex flex-col justify-center">
          <p className="text-xs font-black tracking-widest text-amber-700">
            SERVICE OVERVIEW
          </p>
          <h2 className="mt-3 text-3xl font-black">About This Service</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {service.description}
          </p>
          <p className="mt-5 text-sm leading-7 text-slate-500">
            The information on this page describes typical construction
            activities and does not represent a specific completed contract.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black tracking-widest text-amber-700">
            PROJECT SCOPE
          </p>
          <h2 className="mt-3 text-3xl font-black">Typical Areas of Work</h2>

          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.scope.map(item => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <span aria-hidden="true" className="mt-1 text-lg font-black text-amber-600">
                  &#10003;
                </span>
                <p className="font-semibold leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061e38] px-5 py-16 text-center text-white">
        <h2 className="text-3xl font-black">Discuss Your Project</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-200">
          Share your project requirements through our quote request page.
        </p>
        <Link
          href="/quote"
          className="mt-7 inline-flex rounded-lg bg-[#ffc20a] px-7 py-4 font-black text-[#061e38]"
        >
          Request a Quote
        </Link>
      </section>

      <footer className="bg-[#001426] px-5 py-8 text-center text-sm text-white">
        Grandeur BuildCrest Construction Group
      </footer>
    </main>
  );
}
import BuildCrestHeader from "@/components/BuildCrestHeader";
import Link from "next/link";
import { services, serviceImage } from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f1] text-[#252b30]">
      <BuildCrestHeader />

      <section className="bg-[#263238] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-black tracking-[0.2em] text-[#d0a12a]">
            WHAT WE DO
          </p>
          <h1 className="max-w-4xl text-4xl font-black md:text-6xl">
            Construction <span className="text-[#d0a12a]">Services</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Explore six core areas of construction, from residential and
            commercial buildings to infrastructure, industrial facilities,
            renovations, and site development.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10">
          <p className="text-xs font-black tracking-widest text-[#806317]">
            EXPLORE OUR SERVICES
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Built for Different Project Needs
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Each construction category has its own planning, technical,
            and coordination requirements. Explore the details below.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className="flex flex-col overflow-hidden rounded-none bg-white transition"
            >
              <div
                role="img"
                aria-label={`Illustrative photograph for ${service.title}`}
                className="h-60 bg-slate-200 bg-cover bg-center"
                style={{ backgroundImage: `url("${serviceImage(service.image)}")` }}
              />

              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs font-black tracking-widest text-[#806317]">
                  SERVICE {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-2xl font-black">{service.title}</h3>
                <p className="mt-2 font-bold text-slate-500">{service.subtitle}</p>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-none bg-[#e3aa19] px-5 py-3 text-sm font-black hover:bg-[#c99417]"
                >
                  Explore Service <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#263238] px-5 py-16 text-center text-white">
        <h2 className="text-3xl font-black">Planning a Construction Project?</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-200">
          Tell us about your proposed project and the construction services
          you are interested in.
        </p>
        <Link
          href="/quote"
          className="mt-7 inline-flex rounded-none bg-[#e3aa19] px-7 py-4 font-black text-[#252b30]"
        >
          Request a Quote
        </Link>
      </section>

      <footer className="bg-[#111b21] px-5 py-8 text-center text-sm text-white">
        Grandeur BuildCrest Construction Group
      </footer>
    </main>
  );
}
import BuildCrestHeader from "@/components/BuildCrestHeader";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, projectImage } from "@/data/projects";

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <BuildCrestHeader />

      <section
        className="flex min-h-96 items-end bg-cover bg-center px-5 py-12 text-white"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(0,22,44,.95),rgba(0,22,44,.45)),url("${projectImage(project.image, 1600)}")`
        }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <span className="rounded-none bg-[#e3aa19] px-3 py-2 text-xs font-black text-[#252b30]">
            ONGOING PROJECT
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-black md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg">{project.city}, {project.state} · {project.type}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-9">
          <article className="rounded-none bg-white p-7">
            <h2 className="text-2xl font-black">Project Overview</h2>
            <p className="mt-5 leading-8 text-slate-600">{project.summary}</p>
            <p className="mt-4 text-sm text-[#6d571e]">
              This is an illustrative project profile, not a confirmed Grandeur BuildCrest contract.
            </p>
          </article>

          <article className="rounded-none bg-white p-7">
            <h2 className="text-2xl font-black">Construction Scope</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.scope.map(item => (
                <li key={item} className="rounded-none bg-slate-100 p-4 font-semibold">
                  <span className="mr-2 text-amber-600">✓</span>{item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-none bg-white p-7">
            <h2 className="text-2xl font-black">Construction Roles</h2>
            <p className="mt-3 text-sm text-slate-600">
              Examples of trades commonly involved in this type of project.
              These are not advertised vacancies.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.roles.map(role => (
                <div key={role} className="rounded-none border border-slate-200 p-4 font-bold">
                  {role}
                </div>
              ))}
            </div>
          </article>
        </div>

        <aside className="h-fit rounded-none bg-[#263238] p-7 text-white lg:sticky lg:top-6">
          <h2 className="text-2xl font-black">Project Information</h2>
          <dl className="mt-7 space-y-5">
            <div><dt className="text-sm text-slate-300">Location</dt><dd className="font-bold">{project.city}, {project.state}</dd></div>
            <div><dt className="text-sm text-slate-300">Construction Type</dt><dd className="font-bold">{project.type}</dd></div>
            <div><dt className="text-sm text-slate-300">Project Status</dt><dd className="font-bold text-[#d0a12a]">In Progress</dd></div>
            <div><dt className="text-sm text-slate-300">Hiring Status</dt><dd className="font-bold">Not verified</dd></div>
          </dl>
          <Link
            href="/careers"
            className="mt-8 block rounded-none bg-[#e3aa19] px-5 py-4 text-center font-black text-[#252b30]"
          >
            Explore Careers →
          </Link>
          <Link
            href="/ongoing-projects"
            className="mt-4 block text-center text-sm font-bold text-white"
          >
            View Other Projects
          </Link>
        </aside>
      </section>

      <footer className="bg-[#111b21] px-5 py-8 text-center text-sm text-white">
        Grandeur BuildCrest Construction Group
      </footer>
    </main>
  );
}
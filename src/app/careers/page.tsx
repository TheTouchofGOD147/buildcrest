"use client";

import BuildCrestHeader from "@/components/BuildCrestHeader";

import Link from "next/link";
import { useMemo, useState } from "react";
import { careers, careerCategories } from "@/data/careers";

export default function CareersPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Careers");

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();

    return careers.filter(career => {
      const matchesSearch =
        `${career.title} ${career.category} ${career.summary}`
          .toLowerCase()
          .includes(term);

      return matchesSearch &&
        (category === "All Careers" || career.category === category);
    });
  }, [search, category]);

  return (
    <main className="min-h-screen bg-[#f4f4f1] text-[#252b30]">
      <BuildCrestHeader />

      <section className="bg-[#263238] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-black tracking-[0.2em] text-[#d0a12a]">
            BUILD YOUR FUTURE
          </p>
          <h1 className="max-w-4xl text-4xl font-black md:text-6xl">
            Explore Construction <span className="text-[#d0a12a]">Careers</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Discover career paths across construction management,
            engineering, field operations, skilled trades, safety,
            and office support.
          </p>
          <p className="mt-5 max-w-2xl text-sm text-amber-200">
            These are informational career profiles, not confirmed open vacancies.
            Explore construction career paths, typical responsibilities, and professional qualifications.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-none border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-black">Find Your Career Path</h2>
          <p className="mt-2 text-sm text-slate-500">
            Search by role or filter by career category.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-bold">Search Careers</span>
              <input
                type="search"
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder="Search job titles or skills"
                className="w-full rounded-none border border-slate-300 bg-slate-50 px-4 py-4 outline-none focus:border-slate-500"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold">Career Category</span>
              <select
                value={category}
                onChange={event => setCategory(event.target.value)}
                className="w-full rounded-none border border-slate-300 bg-slate-50 px-4 py-4 outline-none focus:border-slate-500"
              >
                {careerCategories.map(item => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>

          <p aria-live="polite" className="mt-5 text-sm font-semibold text-slate-500">
            Showing {filtered.length} of {careers.length} career paths
          </p>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map(career => (
            <article
              key={career.slug}
              className="flex flex-col rounded-none bg-white p-7"
            >
              <p className="text-xs font-black tracking-widest text-[#806317]">
                {career.category.toUpperCase()}
              </p>
              <h3 className="mt-4 text-2xl font-black">{career.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                {career.summary}
              </p>
              <Link
                href={`/careers/${career.slug}`}
                className="mt-7 inline-flex w-fit rounded-none bg-[#e3aa19] px-5 py-3 text-sm font-black hover:bg-[#c99417]"
              >
                View Career Details &rarr;
              </Link>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-8 rounded-none bg-white p-12 text-center">
            <h3 className="text-xl font-black">No matching career paths</h3>
            <p className="mt-2 text-slate-500">Try another search or category.</p>
            <button
              type="button"
              onClick={() => { setSearch(""); setCategory("All Careers"); }}
              className="mt-5 rounded-none bg-[#e3aa19] px-5 py-3 font-black"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      <footer className="bg-[#263238] px-5 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-2xl font-black">
              <span className="text-[#d0a12a]">Build</span>Crest
            </h2>
            <p className="mt-2 text-sm font-bold text-slate-300">
              Construction Group
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Explore construction services, project information,
              and professional career paths.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-black">Company</h3>
            <nav className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">Our Services</Link>
              <Link href="/ongoing-projects">Ongoing Projects</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-black">Careers</h3>
            <nav className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
              <Link href="/careers">Explore Careers</Link>
              <Link href="/careers/construction-project-manager">Project Management</Link>
              <Link href="/careers/civil-engineer">Engineering</Link>
              <Link href="/careers/construction-laborer">Field Operations</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-black">Contact</h3>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Learn more about Grandeur BuildCrest Construction Group.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-none bg-[#e3aa19] px-5 py-3 text-sm font-black text-[#252b30]"
            >
              Contact Grandeur BuildCrest
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/20 pt-6 text-center text-xs text-slate-400">
          Grandeur BuildCrest Construction Group. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
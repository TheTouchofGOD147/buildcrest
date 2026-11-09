"use client";

import BuildCrestHeader from "@/components/BuildCrestHeader";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects, projectImage, usStates } from "@/data/projects";

const categories = [...new Set(projects.map(project => project.type))].sort();

export default function OngoingProjects() {
  const [search, setSearch] = useState("");
  const [state, setState] = useState("");
  const [stateSearch, setStateSearch] = useState("");
  const [stateOpen, setStateOpen] = useState(false);
  const [category, setCategory] = useState("");

  const statePickerRef = useRef<HTMLDivElement>(null);
  const stateInputRef = useRef<HTMLInputElement>(null);

  const matchingStates = useMemo(() => {
    const term = stateSearch.trim().toLowerCase();

    return usStates.filter(([code, name]) =>
      name.toLowerCase().includes(term) ||
      code.toLowerCase().includes(term)
    );
  }, [stateSearch]);

  const selectedStateName =
    usStates.find(([code]) => code === state)?.[1] ?? "All States";

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();

    return projects.filter(project => {
      const matchesSearch =
        `${project.title} ${project.city} ${project.state} ${project.type}`
          .toLowerCase()
          .includes(term);

      return matchesSearch &&
        (!state || project.state === state) &&
        (!category || project.type === category);
    });
  }, [search, state, category]);

  const filtersActive = Boolean(search || state || category);

  function clearFilters() {
    setSearch("");
    setState("");
    setStateSearch("");
    setCategory("");
    setStateOpen(false);
  }

  function chooseState(code: string) {
    setState(code);
    setStateSearch("");
    setStateOpen(false);
  }

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        statePickerRef.current &&
        !statePickerRef.current.contains(event.target as Node)
      ) {
        setStateOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setStateOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f4f4f1] text-[#252b30]">
      <BuildCrestHeader />

      <section className="bg-[#263238] px-5 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-black tracking-[0.22em] text-[#d0a12a]">
            BUILDCREST PROJECT DIRECTORY
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Explore Our <span className="text-[#d0a12a]">Ongoing Projects</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
            Search construction project examples by location, name,
            and construction category. Select a project to explore its details.
          </p>

          <p className="mt-5 max-w-2xl text-sm text-amber-200">
            Explore current construction work across our project portfolio,
            not verified active contracts or confirmed job vacancies.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:py-14">
        <div className="rounded-none border border-slate-200 bg-white p-5 md:p-7">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black tracking-widest text-[#806317]">
                PROJECT FINDER
              </p>
              <h2 className="mt-2 text-2xl font-black md:text-3xl">
                Find a Construction Project
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Narrow down the directory using the filters below.
              </p>
            </div>

            {filtersActive && (
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-none border border-slate-200 px-4 py-2 text-sm font-bold text-[#252b30] transition hover:bg-slate-100"
              >
                Clear Filters
              </button>
            )}
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr_1fr]">
            <label className="block min-w-0">
              <span className="mb-2 block text-sm font-bold">
                Search Projects
              </span>

              <span className="flex min-h-13 items-center gap-3 rounded-none border border-slate-300 bg-white px-4 focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-100">
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-slate-400">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m16 16 5 5" />
                </svg>
                <input
                  type="search"
                  value={search}
                  onChange={event => setSearch(event.target.value)}
                  placeholder="Project name, city, or category"
                  className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
                />
              </span>
            </label>

            <div className="relative min-w-0" ref={statePickerRef}>
              <span id="bc-state-label" className="mb-2 block text-sm font-bold">
                Select State
              </span>

              <button
                type="button"
                aria-labelledby="bc-state-label"
                aria-expanded={stateOpen}
                aria-controls="bc-state-options"
                aria-haspopup="listbox"
                onClick={() => {
                  setStateOpen(!stateOpen);
                  setStateSearch("");
                  if (!stateOpen) {
                    requestAnimationFrame(() => stateInputRef.current?.focus());
                  }
                }}
                className="flex min-h-13 w-full items-center justify-between gap-3 rounded-none border border-slate-300 bg-white px-4 text-left text-sm font-semibold hover:border-slate-500"
              >
                <span className="truncate">{selectedStateName}</span>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-slate-500">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {stateOpen && (
                <div className="absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden rounded-none border border-slate-200 bg-white">
                  <div className="border-b border-slate-100 p-3">
                    <input
                      ref={stateInputRef}
                      type="search"
                      aria-label="Search U.S. states"
                      value={stateSearch}
                      onChange={event => setStateSearch(event.target.value)}
                      placeholder="Type a state name..."
                      className="w-full rounded-none border border-slate-300 px-3 py-3 text-sm outline-none focus:border-slate-500"
                    />
                  </div>

                  <div
                    id="bc-state-options"
                    role="listbox"
                    aria-labelledby="bc-state-label"
                    className="max-h-64 overflow-y-auto p-2"
                  >
                    {!stateSearch && (
                      <button
                        type="button"
                        role="option"
                        aria-selected={!state}
                        onClick={() => chooseState("")}
                        className="block w-full rounded-none px-3 py-3 text-left text-sm font-bold hover:bg-slate-100"
                      >
                        All States
                      </button>
                    )}

                    {matchingStates.map(([code, name]) => (
                      <button
                        key={code}
                        type="button"
                        role="option"
                        aria-selected={state === code}
                        onClick={() => chooseState(code)}
                        className={`flex w-full items-center justify-between rounded-none px-3 py-3 text-left text-sm hover:bg-slate-100 ${
                          state === code ? "bg-amber-50 font-black" : "font-medium"
                        }`}
                      >
                        <span>{name}</span>
                        <span className="text-xs text-slate-400">{code}</span>
                      </button>
                    ))}

                    {matchingStates.length === 0 && (
                      <p className="px-3 py-5 text-center text-sm text-slate-500">
                        No matching states.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <label className="block min-w-0">
              <span className="mb-2 block text-sm font-bold">
                Construction Category
              </span>

              <span className="relative block">
                <select
                  value={category}
                  onChange={event => setCategory(event.target.value)}
                  className="min-h-13 w-full appearance-none rounded-none border border-slate-300 bg-white px-4 py-3 pr-10 text-sm font-semibold outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                >
                  <option value="">All Categories</option>
                  {categories.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>

                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </label>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
            <p aria-live="polite" className="text-sm font-semibold text-slate-600">
              Showing <strong className="text-[#252b30]">{filtered.length}</strong> of{" "}
              <strong className="text-[#252b30]">{projects.length}</strong> project examples
            </p>

            {filtersActive && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm font-bold text-[#6d571e] underline underline-offset-4"
              >
                Reset Search
              </button>
            )}
          </div>
        </div>

        <div className="mb-7 mt-12 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black tracking-widest text-[#806317]">
              EXPLORE PROJECTS
            </p>
            <h2 className="mt-2 text-3xl font-black">Project Directory</h2>
          </div>

          <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600">
            {filtered.length} results
          </span>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map(project => (
            <article
              key={project.slug}
              className="flex flex-col overflow-hidden rounded-none bg-white transition"
            >
              <div
                role="img"
                aria-label={`${project.type} illustrative photograph`}
                className="relative h-56 bg-cover bg-center"
                style={{ backgroundImage: `url("${projectImage(project.image)}")` }}
              >
                <span className="absolute left-4 top-4 rounded-none bg-[#e3aa19] px-3 py-2 text-xs font-black text-[#252b30]">
                  ONGOING PROJECT
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-bold text-slate-500">
                  {project.city}, {project.state}
                </p>

                <h3 className="mt-2 text-2xl font-black">{project.title}</h3>

                <p className="mt-2 text-sm font-bold text-[#806317]">
                  {project.type}
                </p>

                <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                  {project.summary}
                </p>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <Link
                    href={`/ongoing-projects/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-none bg-[#e3aa19] px-5 py-3 text-sm font-black text-[#252b30] hover:bg-[#c99417]"
                  >
                    View Project Details
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-7 rounded-none border border-slate-200 bg-white px-6 py-16 text-center">
            <h3 className="text-2xl font-black">No matching projects</h3>
            <p className="mx-auto mt-3 max-w-md text-slate-500">
              There are no ongoing projects matching these filters.
              Try another state, category, or search term.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-none bg-[#e3aa19] px-6 py-3 font-black text-[#252b30]"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </section>

      <footer className="bg-[#111b21] px-5 py-8 text-center text-sm text-white">
        Grandeur BuildCrest Construction Group &middot; Ongoing project directory
      </footer>
    </main>
  );
}
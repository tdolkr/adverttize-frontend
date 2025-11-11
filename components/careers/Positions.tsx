"use client";

import { useMemo, useState } from "react";
import { jobOpenings } from "@/lib/contentCareers";
import { Search } from "lucide-react";

export function OpenPositions() {
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("All");
  const [location, setLocation] = useState("All");

  const filteredJobs = useMemo(() => {
    return jobOpenings.filter((job) => {
      const matchesRole = role ? job.title.toLowerCase().includes(role.toLowerCase()) : true;
      const matchesDept = department === "All" || job.department === department;
      const matchesLocation = location === "All" || job.location.includes(location) || job.mode === location;
      return matchesRole && matchesDept && matchesLocation;
    });
  }, [role, department, location]);

  const departments = ["All", ...new Set(jobOpenings.map((job) => job.department))];
  const locations = ["All", ...new Set(jobOpenings.map((job) => job.mode))];

  return (
    <section id="positions" className="py-20 fade-up" data-animate>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:px-12">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#93c5fd]">Opportunities</p>
          <h2 className="text-3xl font-semibold text-white">Open Positions</h2>
          <p className="text-white/70">Ready to join our team? Explore current opportunities at Adverttize Technologies.</p>
        </div>
        <div className="fade-up grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner sm:grid-cols-4" data-animate>
          <label className="col-span-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/70">
            <Search className="h-4 w-4" />
            <input
              type="text"
              placeholder="Search role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              className="w-full bg-transparent text-white placeholder:text-white/50 focus:outline-none"
            />
          </label>
          <select
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 focus:outline-none"
          >
            {departments.map((dept) => (
              <option key={dept} value={dept} className="bg-black text-white">
                {dept}
              </option>
            ))}
          </select>
          <select
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 focus:outline-none"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc} className="bg-black text-white">
                {loc}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {filteredJobs.map((job) => (
            <article
              key={job.title}
              className="fade-up flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg"
              data-animate
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
                <span>{job.department}</span>
                <span>{job.location}</span>
                <span>{job.experience}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{job.title}</h3>
              <p className="mt-2 text-sm text-white/70">{job.description}</p>
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                <button className="rounded-full bg-[#2563EB] px-5 py-2 text-sm font-semibold text-white transition hover:scale-[1.01]">Apply Now</button>
                <button className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:border-[#93c5fd]">
                  Learn More
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="fade-up rounded-3xl border border-dashed border-white/20 bg-black/30 p-6 text-center text-white" data-animate>
          <p>Don&rsquo;t see the perfect role? We&rsquo;re always looking for talented people.</p>
          <button className="mt-4 rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:border-[#60a5fa]">
            Send Open Application
          </button>
        </div>
      </div>
    </section>
  );
}

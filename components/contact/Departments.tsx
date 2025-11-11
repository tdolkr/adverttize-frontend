import { departments } from "@/lib/contentContact";
import { getInvestIcon } from "@/lib/icons";

export function ContactDepartments() {
  return (
    <section id="departments" className="py-20 fade-up" data-animate>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 sm:px-8 lg:px-12">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#93c5fd]">Contact by Department</p>
          <h2 className="text-3xl font-semibold text-white">Get in touch with the right team directly.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {departments.map((dept) => {
            const Icon = getInvestIcon(dept.icon);
            return (
              <article key={dept.title} className="fade-up rounded-3xl border border-white/10 bg-white/5 p-5 text-center shadow-lg transition hover:-translate-y-1" data-animate>
                <Icon className="mx-auto h-6 w-6 text-[#93c5fd]" aria-hidden />
                <h3 className="mt-3 text-lg font-semibold text-white">{dept.title}</h3>
                <p className="text-sm text-white/70">{dept.description}</p>
                <p className="mt-2 text-sm text-white">{dept.email}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

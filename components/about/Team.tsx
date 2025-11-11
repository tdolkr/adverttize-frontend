import { teamMembers } from "@/lib/contentAbout";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-20 fade-up" data-animate>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:px-12">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#93c5fd]">Our Team</p>
          <h2 className="text-3xl font-semibold text-white">
            Passionate individuals driving innovation and delivering excellence.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="fade-up rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              data-animate
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#7dd3fc] text-xl font-semibold text-white"
                  aria-hidden
                >
                  {getInitials(member.name)}
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">{member.name}</p>
                  <p className="text-sm text-white/60">{member.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/70">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

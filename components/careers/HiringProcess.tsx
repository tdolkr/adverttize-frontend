import { hiringSteps } from "@/lib/contentCareers";

export function HiringProcess() {
  return (
    <section id="process" className="py-20 fade-up" data-animate>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:px-12">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#93c5fd]">Join Our Team</p>
          <h2 className="text-3xl font-semibold text-white">Our Hiring Process</h2>
          <p className="text-white/70">Simple, transparent, and designed to find the right fit for both of us.</p>
        </div>
        <div className="process-grid">
          {hiringSteps.map((step, index) => (
            <div key={step.title} className="process-step fade-up" data-animate>
              <div className="step-badge">{index + 1}</div>
              <div className="step-body">
                <div className="flex items-center justify-between text-white">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">{step.duration}</span>
                </div>
                <p className="mt-2 text-sm text-white/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .process-grid {
          display: grid;
          gap: 20px;
        }
        @media (min-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(${hiringSteps.length}, minmax(0, 1fr));
          }
        }
        .process-step {
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
          padding-top: 20px;
        }
        .process-step::before {
          content: "";
          position: absolute;
          top: 0;
          left: 20px;
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, rgba(147, 197, 253, 0.2), rgba(147, 197, 253, 0.5));
        }
        @media (min-width: 1024px) {
          .process-step::before {
            left: 0;
            top: 32px;
            width: 100%;
            height: 2px;
          }
        }
        .step-badge {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(59, 130, 246, 0.15);
          color: #93c5fd;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          z-index: 1;
        }
        .step-body {
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(5, 7, 15, 0.75);
          padding: 20px;
          box-shadow: 0 20px 50px rgba(8, 8, 12, 0.45);
        }
      `}</style>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { journey } from "@/lib/contentAbout";
import { getInvestIcon } from "@/lib/icons";

export function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const nodes = sectionRef.current?.querySelectorAll(".timeline-item");
    if (!nodes?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.4 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const node = sectionRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const total = rect.height + viewport;
      const offset = viewport - rect.top;
      const next = Math.min(Math.max(offset / total, 0), 1);
      setProgress((prev) => (Math.abs(prev - next) > 0.01 ? next : prev));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="journey" className="relative py-20 fade-up" data-animate>
      <div className="journey-parallax journey-parallax--one" style={{ transform: `translate3d(0, ${progress * 80}px, 0)` }} aria-hidden />
      <div className="journey-parallax journey-parallax--two" style={{ transform: `translate3d(0, ${progress * -60}px, 0)` }} aria-hidden />
      <div className="journey-parallax journey-parallax--grid" style={{ transform: `translate3d(0, ${progress * 30}px, 0)` }} aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#93c5fd]">Our Journey</p>
          <h2 className="text-3xl font-semibold text-white">Milestones That Shaped Us.</h2>
        </div>
        <div className="mt-14">
          <div className="timeline">
            <div className="timeline-line" aria-hidden />
            {journey.map((milestone, index) => {
              const Icon = getInvestIcon(milestone.icon);
              const side = index % 2 === 0 ? "left" : "right";
              return (
                <div key={milestone.year} className={`timeline-item ${side}`}>
                  <div className="timeline-card">
                    <div className="timeline-card-head">
                      <span className="timeline-year">{milestone.year}</span>
                      <span className="timeline-icon">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{milestone.description}</p>
                  </div>
                  <div className="timeline-node">
                    <div className="node-core" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .journey-parallax {
          position: absolute;
          pointer-events: none;
          z-index: 0;
        }
        .journey-parallax--one {
          width: 360px;
          height: 360px;
          left: -120px;
          top: 0;
          border-radius: 9999px;
          background: radial-gradient(circle at 30% 30%, rgba(147, 197, 253, 0.4), transparent 70%);
          filter: blur(80px);
          opacity: 0.35;
        }
        .journey-parallax--two {
          width: 420px;
          height: 420px;
          right: -160px;
          bottom: 0;
          border-radius: 9999px;
          background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3), transparent 65%);
          filter: blur(120px);
          opacity: 0.3;
        }
        .journey-parallax--grid {
          inset: 8% 6%;
          border-radius: 48px;
          border: 1px solid rgba(148, 163, 184, 0.08);
          background-image:
            linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px);
          background-size: 100% 80px, 80px 100%;
          opacity: 0.15;
        }
        .timeline {
          position: relative;
          margin: 0 auto;
          max-width: 900px;
        }
        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          transform: translateX(-50%);
          background: linear-gradient(180deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.5), rgba(59, 130, 246, 0.1));
        }
        .timeline-item {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 48px;
        }
        .timeline-item.left {
          justify-content: flex-end;
        }
        .timeline-item.right {
          justify-content: flex-start;
        }
        .timeline-card {
          width: 100%;
          max-width: 360px;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(5, 7, 15, 0.8);
          padding: 24px 28px;
          box-shadow: 0 30px 70px rgba(8, 8, 12, 0.5);
        }
        .timeline-item.left .timeline-card {
          margin-right: 80px;
          text-align: right;
        }
        .timeline-item.right .timeline-card {
          margin-left: 80px;
          text-align: left;
        }
        .timeline-node {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 16px;
          height: 16px;
          border-radius: 9999px;
          background: #60a5fa;
          box-shadow: 0 0 20px rgba(96, 165, 250, 0.6);
        }
        .timeline-card-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .timeline-icon {
          width: 32px;
          height: 32px;
          border-radius: 12px;
          background: rgba(147, 197, 253, 0.15);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #93c5fd;
        }
        .timeline-year {
          font-size: 0.85rem;
          font-weight: 600;
          color: #60a5fa;
        }
        @media (max-width: 1024px) {
          .timeline-line {
            left: 28px;
          }
          .timeline-item {
            flex-direction: column;
            align-items: flex-start;
          }
          .timeline-item.left .timeline-card,
          .timeline-item.right .timeline-card {
            text-align: left;
            margin: 0 0 0 60px;
          }
          .timeline-node {
            left: 28px;
            margin-top: 20px;
          }
        }
      `}</style>
    </section>
  );
}

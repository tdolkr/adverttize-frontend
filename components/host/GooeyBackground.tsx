"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  velocity: number;
  hue: number;
  life: number;
};

type GooeyBackgroundProps = {
  hueRange?: [number, number];
};

export function GooeyBackground({ hueRange = [260, 320] }: GooeyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const [hueStart, hueEnd] = hueRange;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.parentElement?.clientWidth ?? window.innerWidth;
    let height = canvas.parentElement?.clientHeight ?? 400;

    const initParticles = () => {
      const count = Math.round((width * height) / 8000);
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        velocity: Math.random() * 0.6 + 0.2,
        hue: hueStart + Math.random() * (hueEnd - hueStart || 1),
        life: Math.random()
      }));
    };

    const resize = () => {
      width = canvas.parentElement?.clientWidth ?? window.innerWidth;
      height = canvas.parentElement?.clientHeight ?? 400;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      particlesRef.current.forEach((particle) => {
        particle.y -= particle.velocity;
        particle.life += 0.002;

        if (particle.y < -10 || particle.life > 1) {
          particle.y = height + 10;
          particle.life = 0;
        }

        if (pointerRef.current.active) {
          const dx = pointerRef.current.x - particle.x;
          const dy = pointerRef.current.y - particle.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 160) {
            particle.x -= dx * 0.02;
            particle.y -= dy * 0.02;
          }
        }

        particlesRef.current.forEach((other) => {
          if (other === particle) return;
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.1;
            ctx.strokeStyle = `hsla(${(particle.hue + other.hue) / 2}, 80%, 60%, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 5
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 85%, 60%, 0.6)`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 85%, 60%, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 5, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";
      animationRef.current = requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current.x = event.clientX;
      pointerRef.current.y = event.clientY;
      pointerRef.current.active = true;
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [hueStart, hueEnd]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
      aria-hidden
    />
  );
}

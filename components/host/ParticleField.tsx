"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  seed: number;
};

type Ripple = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
};

type ParticleFieldProps = {
  variant?: "purple" | "green" | "blue";
};

export function ParticleField({ variant = "purple" }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    active: false,
    offsetX: 0,
    offsetY: 0
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    let lastTime = 0;
    let isVisible = true;
    const maxDistance = width < 768 ? 90 : 130;

    const palette =
      variant === "green"
        ? {
            particle: "rgba(34,197,94,0.32)",
            line: (strength: number) => `rgba(34,197,94,${strength})`,
            ripple: (alpha: number) => `rgba(16,185,129,${alpha})`
          }
        : variant === "blue"
          ? {
              particle: "rgba(59,130,246,0.3)",
              line: (strength: number) => `rgba(59,130,246,${strength})`,
              ripple: (alpha: number) => `rgba(14,165,233,${alpha})`
            }
          : {
              particle: "rgba(168,85,247,0.35)",
              line: (strength: number) => `rgba(168,85,247,${strength})`,
              ripple: (alpha: number) => `rgba(168,85,247,${alpha})`
            };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      const density = Math.max(120, Math.min(240, Math.round((width * height) / 12000)));
      particlesRef.current = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.4 + 0.4,
        speed: Math.random() * 0.6 + 0.2,
        seed: Math.random() * 1000
      }));
    };

    const draw = (time: number) => {
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }

      const delta = Math.min(60, time - lastTime);
      lastTime = time;
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const ripples = ripplesRef.current;
      const pointer = pointerRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const noise =
          Math.sin((time * 0.0003 + p.seed) * 2) + Math.cos((time * 0.0002 + p.seed) * 1.5);
        p.x += Math.cos(noise) * p.speed * (delta / 16);
        p.y += Math.sin(noise) * p.speed * (delta / 16);

        if (pointer.active) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 160) {
            const force = (160 - dist) / 160;
            p.x -= dx * 0.002 * force;
            p.y -= dy * 0.002 * force;
          }
        }

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.beginPath();
        ctx.fillStyle = palette.particle;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = palette.line(0.2 * (1 - dist / maxDistance));
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      if (pointer.x || pointer.y) {
        canvas.style.transform = `translate3d(${pointer.offsetX}px, ${pointer.offsetY}px, 0)`;
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.radius += 2;
        ripple.alpha -= 0.01;
        if (ripple.alpha <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = palette.ripple(ripple.alpha);
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    const handlePointerMove = (e: PointerEvent) => {
      pointerRef.current.x = e.clientX;
      pointerRef.current.y = e.clientY;
      pointerRef.current.active = true;
      pointerRef.current.offsetX = ((e.clientX / width) - 0.5) * 10;
      pointerRef.current.offsetY = ((e.clientY / height) - 0.5) * 10;
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
      pointerRef.current.offsetX = 0;
      pointerRef.current.offsetY = 0;
    };

    const handleClick = (e: PointerEvent) => {
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        alpha: 0.35
      });
    };

    const handleVisibility = () => {
      isVisible = document.visibilityState === "visible";
      if (isVisible) {
        lastTime = performance.now();
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("click", handleClick);
    document.addEventListener("visibilitychange", handleVisibility);

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
      aria-hidden
    />
  );
}

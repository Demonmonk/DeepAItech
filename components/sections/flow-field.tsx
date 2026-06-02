"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Generative "data as art" — particles drift through a flowing noise field,
 * leaving faint lime trails on black. Canvas + rAF, no dependencies.
 * Respects reduced-motion (renders a single calm frame instead of animating).
 */
export function FlowField() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let particles: { x: number; y: number; life: number }[] = [];

    const spawn = () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      life: Math.random() * 200,
    });

    function resize() {
      const parent = canvas!.parentElement;
      w = parent ? parent.clientWidth : window.innerWidth;
      h = parent ? parent.clientHeight : window.innerHeight;
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(1100, Math.floor((w * h) / 1500));
      particles = new Array(count).fill(0).map(spawn);
      ctx!.fillStyle = "#050506";
      ctx!.fillRect(0, 0, w, h);
    }

    // Smooth flowing angle field (cheap layered trig instead of Perlin).
    const field = (x: number, y: number, t: number) =>
      (Math.sin(x * 0.0022 + t * 0.00016) +
        Math.cos(y * 0.0027 - t * 0.00011) +
        Math.sin((x + y) * 0.0015 + t * 0.00007)) *
      1.5;

    function frame(t: number) {
      // gentle fade for trails
      ctx!.fillStyle = "rgba(5,5,6,0.055)";
      ctx!.fillRect(0, 0, w, h);
      ctx!.lineWidth = 1.2;
      for (const p of particles) {
        const a = field(p.x, p.y, t);
        const nx = p.x + Math.cos(a) * 1.6;
        const ny = p.y + Math.sin(a) * 1.6;
        // brighter where the field is steeper → subtle depth
        const alpha = 0.22 + (Math.abs(Math.sin(a)) * 0.45);
        ctx!.strokeStyle = `rgba(204,255,0,${alpha.toFixed(3)})`;
        ctx!.beginPath();
        ctx!.moveTo(p.x, p.y);
        ctx!.lineTo(nx, ny);
        ctx!.stroke();
        p.x = nx;
        p.y = ny;
        p.life -= 1;
        if (
          p.life < 0 ||
          p.x < -10 ||
          p.x > w + 10 ||
          p.y < -10 ||
          p.y > h + 10
        ) {
          Object.assign(p, spawn());
        }
      }
      raf = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);

    if (reduce) {
      // one calm static frame — faint scattered points
      ctx.fillStyle = "rgba(204,255,0,0.28)";
      for (const p of particles) ctx.fillRect(p.x, p.y, 1.2, 1.2);
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduce]);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}

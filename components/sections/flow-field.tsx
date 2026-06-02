"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Generative "data as art" — particles drift through a flowing noise field,
 * leaving glowing cyan-green trails on black. Additive blending for bloom;
 * the field parts and swirls around the cursor. Canvas + rAF, no deps.
 * Respects reduced-motion (renders one calm static frame).
 */
export function FlowField() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const c = el.getContext("2d", { alpha: false });
    if (!c) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let particles: { x: number; y: number; life: number }[] = [];
    const mouse = { x: -9999, y: -9999, active: false };

    const spawn = () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      life: 60 + Math.random() * 240,
    });

    function resize() {
      const parent = el!.parentElement;
      w = parent ? parent.clientWidth : window.innerWidth;
      h = parent ? parent.clientHeight : window.innerHeight;
      el!.width = Math.floor(w * dpr);
      el!.height = Math.floor(h * dpr);
      el!.style.width = `${w}px`;
      el!.style.height = `${h}px`;
      c!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(1700, Math.floor((w * h) / 1000));
      particles = new Array(count).fill(0).map(spawn);
      c!.fillStyle = "#050506";
      c!.fillRect(0, 0, w, h);
    }

    // Smooth flowing angle field (layered trig ≈ curl noise).
    const field = (x: number, y: number, t: number) =>
      (Math.sin(x * 0.0021 + t * 0.00015) +
        Math.cos(y * 0.0026 - t * 0.0001) +
        Math.sin((x + y) * 0.0014 + t * 0.00006)) *
      1.5;

    const R = 160;
    const R2 = R * R;

    function frame(t: number) {
      // fade previous frame (trails)
      c!.globalCompositeOperation = "source-over";
      c!.fillStyle = "rgba(5,6,7,0.045)";
      c!.fillRect(0, 0, w, h);
      // additive glow for the strokes
      c!.globalCompositeOperation = "lighter";
      c!.lineWidth = 1.25;
      for (const p of particles) {
        const a = field(p.x, p.y, t);
        let vx = Math.cos(a) * 1.6;
        let vy = Math.sin(a) * 1.6;
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < R2) {
            const d = Math.sqrt(d2) || 1;
            const f = (1 - d / R) * 3.4; // push away from cursor
            vx += (dx / d) * f;
            vy += (dy / d) * f;
          }
        }
        const nx = p.x + vx;
        const ny = p.y + vy;
        const speed = Math.min(1, (Math.abs(vx) + Math.abs(vy)) / 4.5);
        c!.strokeStyle = `rgba(31,240,192,${(0.13 + speed * 0.42).toFixed(3)})`;
        c!.beginPath();
        c!.moveTo(p.x, p.y);
        c!.lineTo(nx, ny);
        c!.stroke();
        p.x = nx;
        p.y = ny;
        p.life -= 1;
        if (p.life < 0 || nx < -10 || nx > w + 10 || ny < -10 || ny > h + 10) {
          Object.assign(p, spawn());
        }
      }
      raf = requestAnimationFrame(frame);
    }

    function onMove(e: PointerEvent) {
      const r = el!.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = mouse.x > 0 && mouse.x < w && mouse.y > 0 && mouse.y < h;
    }

    resize();
    window.addEventListener("resize", resize);

    if (reduce) {
      c.globalCompositeOperation = "lighter";
      c.fillStyle = "rgba(31,240,192,0.26)";
      for (const p of particles) c.fillRect(p.x, p.y, 1.2, 1.2);
    } else {
      window.addEventListener("pointermove", onMove);
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reduce]);

  return (
    <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden />
  );
}

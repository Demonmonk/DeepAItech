"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * A live "connections" graph: your systems wired to an AI core, with data
 * pulses travelling the edges in real time and nodes lighting up as packets
 * arrive. Canvas + rAF, reduced-motion safe.
 */
type NodeDef = { id: string; label: string; x: number; y: number; core?: boolean };

const NODES: NodeDef[] = [
  { id: "core", label: "AI Core", x: 0.5, y: 0.5, core: true },
  { id: "crm", label: "CRM", x: 0.16, y: 0.2 },
  { id: "dw", label: "Data Warehouse", x: 0.1, y: 0.52 },
  { id: "docs", label: "Documents", x: 0.18, y: 0.84 },
  { id: "slack", label: "Slack", x: 0.84, y: 0.18 },
  { id: "api", label: "APIs", x: 0.9, y: 0.5 },
  { id: "app", label: "Your App", x: 0.82, y: 0.84 },
  { id: "cloud", label: "Cloud", x: 0.5, y: 0.12 },
  { id: "agents", label: "Agents", x: 0.5, y: 0.9 },
];

export function LiveNetwork() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const c = el.getContext("2d");
    if (!c) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;

    const nodes = NODES.map((n) => ({
      ...n,
      px: 0,
      py: 0,
      pulse: n.core ? 1 : 0,
      phase: Math.random() * Math.PI * 2,
    }));
    const core = nodes.find((n) => n.core)!;
    const outer = nodes.filter((n) => !n.core);

    type Packet = { node: (typeof nodes)[number]; fromCore: boolean; p: number; speed: number };
    let packets: Packet[] = [];

    function layout() {
      const parent = el!.parentElement!;
      w = parent.clientWidth;
      h = parent.clientHeight;
      el!.width = Math.floor(w * dpr);
      el!.height = Math.floor(h * dpr);
      el!.style.width = `${w}px`;
      el!.style.height = `${h}px`;
      c!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function place(n: (typeof nodes)[number], t: number) {
      const bob = reduce ? 0 : Math.sin(t * 0.0006 + n.phase) * 4;
      n.px = n.x * w;
      n.py = n.y * h + bob;
    }

    function spawn() {
      const node = outer[(Math.random() * outer.length) | 0];
      packets.push({
        node,
        fromCore: Math.random() < 0.5,
        p: 0,
        speed: 0.005 + Math.random() * 0.006,
      });
    }

    function frame(t: number) {
      c!.clearRect(0, 0, w, h);
      for (const n of nodes) place(n, t);

      // edges
      c!.lineWidth = 1;
      for (const n of outer) {
        c!.strokeStyle = "rgba(255,255,255,0.09)";
        c!.beginPath();
        c!.moveTo(core.px, core.py);
        c!.lineTo(n.px, n.py);
        c!.stroke();
      }

      // packets
      if (!reduce && packets.length < 22 && Math.random() < 0.5) spawn();
      packets = packets.filter((pk) => {
        pk.p += pk.speed;
        const a = pk.fromCore ? core : pk.node;
        const b = pk.fromCore ? pk.node : core;
        const x = a.px + (b.px - a.px) * pk.p;
        const y = a.py + (b.py - a.py) * pk.p;
        c!.beginPath();
        c!.arc(x, y, 2.4, 0, Math.PI * 2);
        c!.fillStyle = "rgba(31,240,192,0.95)";
        c!.fill();
        // soft trail
        c!.beginPath();
        c!.arc(x, y, 5, 0, Math.PI * 2);
        c!.fillStyle = "rgba(31,240,192,0.12)";
        c!.fill();
        if (pk.p >= 1) {
          b.pulse = 1;
          return false;
        }
        return true;
      });

      // nodes
      for (const n of nodes) {
        const r = n.core ? 9 : 5;
        if (n.pulse > 0.02) {
          c!.beginPath();
          c!.arc(n.px, n.py, r + 6 + n.pulse * 14, 0, Math.PI * 2);
          c!.fillStyle = `rgba(31,240,192,${(n.pulse * 0.18).toFixed(3)})`;
          c!.fill();
        }
        c!.beginPath();
        c!.arc(n.px, n.py, r, 0, Math.PI * 2);
        c!.fillStyle = "#0d0d10";
        c!.fill();
        c!.lineWidth = n.core ? 2 : 1.4;
        c!.strokeStyle = n.core
          ? "rgba(31,240,192,0.9)"
          : `rgba(134,255,224,${(0.35 + n.pulse * 0.6).toFixed(3)})`;
        c!.stroke();
        if (n.core) {
          c!.beginPath();
          c!.arc(n.px, n.py, 3, 0, Math.PI * 2);
          c!.fillStyle = "#86ffe0";
          c!.fill();
        }
        // label
        c!.font = '500 12px Inter, system-ui, sans-serif';
        c!.textAlign = "center";
        c!.fillStyle = n.core ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.55)";
        c!.fillText(n.label, n.px, n.py + r + 16);
        n.pulse *= n.core ? 1 : 0.94;
        if (n.core) n.pulse = 0.5 + Math.sin(t * 0.002) * 0.3;
      }

      raf = requestAnimationFrame(frame);
    }

    layout();
    window.addEventListener("resize", layout);
    // a few packets to start lively
    for (let i = 0; i < 8; i++) spawn();
    if (reduce) {
      // static frame
      frame(0);
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", layout);
    };
  }, [reduce]);

  return (
    <div className="relative h-[26rem] w-full md:h-[32rem]">
      <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden />
    </div>
  );
}

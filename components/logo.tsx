import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative flex h-8 w-8 items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#ccff00" />
              <stop offset="100%" stopColor="#aef03a" />
            </linearGradient>
          </defs>
          <rect
            x="1"
            y="1"
            width="30"
            height="30"
            rx="9"
            stroke="url(#logo-grad)"
            strokeWidth="1.5"
            className="opacity-80"
          />
          <circle cx="16" cy="16" r="3.2" fill="url(#logo-grad)" />
          <circle cx="9" cy="9" r="1.8" fill="#fff" className="opacity-90" />
          <circle cx="23" cy="9" r="1.8" fill="#fff" className="opacity-60" />
          <circle cx="9" cy="23" r="1.8" fill="#fff" className="opacity-60" />
          <circle cx="23" cy="23" r="1.8" fill="#fff" className="opacity-90" />
          <path
            d="M16 16 L9 9 M16 16 L23 9 M16 16 L9 23 M16 16 L23 23"
            stroke="url(#logo-grad)"
            strokeWidth="1.1"
            className="opacity-50"
          />
        </svg>
        <span className="absolute inset-0 -z-10 rounded-[9px] bg-accent-cyan/30 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <span className="font-display text-[15px] font-semibold tracking-tight text-white">
        Deep<span className="text-white/55">AI</span>Tech
      </span>
    </Link>
  );
}

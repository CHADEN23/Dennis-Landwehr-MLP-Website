"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Verzögerung in ms, z. B. für gestaffelte Karten */
  delay?: number;
  className?: string;
};

/**
 * Blendet Inhalte sanft ein, sobald sie in den Viewport scrollen.
 * Server-seitig wird der Inhalt sichtbar gerendert (SEO, kein JS nötig);
 * erst nach der Hydration werden Elemente unterhalb des Viewports
 * ausgeblendet und per IntersectionObserver wieder eingeblendet.
 */
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    // Bereits (fast) sichtbare Elemente nicht verstecken – kein Flackern beim Laden
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return;

    setHidden(true);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHidden(false);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        hidden ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

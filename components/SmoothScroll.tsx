"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Momentum smooth scrolling (Lenis) + smooth anchor scrolling.
 * Disabled entirely under prefers-reduced-motion, where native scrolling and
 * the CSS scroll-behavior fallback take over. Touch scrolling stays native.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      // gentle exponential ease-out — settles rather than springs
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // land on the right section when arriving with a hash (e.g. /#services
    // followed from a sub-page), since Lenis starts the page at the top
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        window.setTimeout(
          () => lenis.scrollTo(el as HTMLElement, { offset: -72, immediate: true }),
          0
        );
      }
    }

    // Smoothly scroll same-page anchors, accounting for the sticky nav.
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.(
        'a[href^="#"], a[href^="/#"]'
      ) as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const hash = href.slice(href.indexOf("#"));
      if (hash.length < 2) return;
      // cross-page anchor (e.g. /#services from a sub-page) — let the browser navigate
      if (href.startsWith("/#") && window.location.pathname !== "/") return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -72 });
      history.pushState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}

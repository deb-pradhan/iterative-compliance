"use client";

import { useEffect } from "react";

/**
 * Mounts once. Flags the document as JS-ready (so .reveal elements become
 * animatable — they stay visible for no-JS users) and wires a single
 * IntersectionObserver that adds `.in` as each .reveal scrolls into view.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-ready");

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          // stagger siblings within the same container, then clear the delay
          // so it never slows later hover transitions
          const parent = el.parentElement;
          let idx = 0;
          if (parent) {
            const sibs = Array.from(parent.children).filter((c) =>
              c.classList.contains("reveal")
            );
            idx = Math.min(sibs.indexOf(el), 6);
          }
          if (idx > 0) {
            el.style.transitionDelay = `${idx * 0.07}s`;
            window.setTimeout(() => {
              el.style.transitionDelay = "";
            }, idx * 70 + 800);
          }
          el.classList.add("in");
          io.unobserve(el);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}

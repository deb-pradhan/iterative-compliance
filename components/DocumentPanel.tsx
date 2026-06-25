"use client";

import { useEffect, useRef, useState } from "react";

type Claim = {
  txt: string;
  gap?: boolean;
  status: "ok" | "flag";
  cite: string;
};

const CLAIMS: Claim[] = [
  {
    txt: "Personal data is processed under legitimate interest, Art. 6(1)(f) GDPR.",
    status: "ok",
    cite: "Verified · Regulation 2016/679",
  },
  {
    txt: "Standard Contractual Clauses govern international data transfers.",
    status: "ok",
    cite: "Verified · Decision 2021/914",
  },
  {
    txt: "Record of Processing Activities (Art. 30), required, not found.",
    gap: true,
    status: "flag",
    cite: "Gap · mandatory document missing",
  },
  {
    txt: "Data subject access requests answered within one month.",
    status: "ok",
    cite: "Verified · Art. 12(3)",
  },
];

export default function DocumentPanel() {
  const [litCount, setLitCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const run = () => {
      if (started.current) return;
      started.current = true;

      if (reduce || !("IntersectionObserver" in window)) {
        setLitCount(CLAIMS.length);
        setDone(true);
        return;
      }

      CLAIMS.forEach((_, i) => {
        window.setTimeout(() => setLitCount((n) => Math.max(n, i + 1)), 650 + i * 620);
      });
      window.setTimeout(() => setDone(true), 650 + CLAIMS.length * 620 + 200);
    };

    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      run();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            window.setTimeout(run, 500);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="doc" ref={ref} aria-hidden="true">
      <div className="doc-bar">
        <span className="doc-file">
          <span className="fsq" /> privacy_policy.pdf
        </span>
        <span className={done ? "chip done" : "chip scanning"}>
          {done ? (
            "3 verified · 1 gap"
          ) : (
            <>
              <span className="spin" /> Scanning…
            </>
          )}
        </span>
      </div>
      <div className="doc-body">
        <div className="doc-title">Privacy Policy · Acme AI Ltd</div>
        <div className="doc-meta">
          CHECKED AGAINST · GDPR (2016/679) · EU AI ACT (2024/1689)
        </div>

        {CLAIMS.map((c, i) => (
          <div
            key={i}
            className={`claim${c.gap ? " gap" : ""}${
              i < litCount ? " lit" : ""
            }`}
          >
            <div className="claim-txt">{c.txt}</div>
            <div className="anno">
              <span className={c.status === "ok" ? "tag tag-ok" : "tag tag-flag"}>
                <span className="sq" /> {c.cite}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

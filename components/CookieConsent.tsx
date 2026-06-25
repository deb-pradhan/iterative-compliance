"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), 1400);
    return () => window.clearTimeout(t);
  }, []);

  if (!mounted) return null;

  const close = () => {
    setClosing(true);
    setVisible(false);
    window.setTimeout(() => setMounted(false), 500);
  };

  return (
    <aside
      className={`consent${visible && !closing ? " in" : ""}`}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <span className="ch">
        <span className="sq" aria-hidden="true" /> We practice what we sell
      </span>
      <p>
        We use only essential cookies to run this site. Analytics stay off until
        you say yes — that&apos;s what GDPR actually requires.
      </p>
      <div className="row">
        <button className="btn btn-primary" onClick={close}>
          Accept analytics
        </button>
        <button className="btn btn-outline" onClick={close}>
          Essential only
        </button>
      </div>
    </aside>
  );
}

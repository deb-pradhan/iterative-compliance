"use client";

import { useRef, useState } from "react";

const QA = [
  {
    q: "Is this legal advice?",
    a: "No. We provide compliance operations and document preparation — we help you produce and verify the documents your business needs. We are not a law firm and this is not legal advice. When a question genuinely calls for a lawyer, we'll tell you, and we can connect you with counsel in the relevant jurisdiction.",
  },
  {
    q: "How is this different from a template generator?",
    a: "Templates hand you a generic document and leave the risk with you. We tailor to your actual data flows, then independently verify every legal reference against official sources. The difference shows up the moment a buyer's legal team reviews it.",
  },
  {
    q: "How fast is it?",
    a: "The scan takes minutes. A Remediation Pack typically turns around in days, not weeks.",
  },
  {
    q: "What if my documents fail my customer's review?",
    a: "They're built to pass enterprise legal review — that's the entire point of the verification layer. If something is queried, we work with you to resolve it.",
  },
  {
    q: "Do you cover the US too?",
    a: "Our core focus is EU entry — GDPR and the AI Act — where the pain is sharpest for incoming founders. US frameworks are available on request as we expand coverage.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const inner = useRef<HTMLDivElement>(null);

  return (
    <div className={`faq${open ? " open" : ""}`}>
      <button
        className="faq-q"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {q}
        <span className="pm" aria-hidden="true">
          +
        </span>
      </button>
      <div
        className="faq-a"
        style={{ maxHeight: open ? inner.current?.scrollHeight : 0 }}
      >
        <div className="faq-a-inner" ref={inner}>
          {a}
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            <span className="accent">Questions</span>
          </span>
          <h2>The things buyers ask first.</h2>
        </div>
        <div className="faq-list reveal">
          {QA.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

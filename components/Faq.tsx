"use client";

import { useRef, useState } from "react";

const QA = [
  {
    q: "Is this legal advice?",
    a: "No. We run compliance operations and prepare documents, helping you produce and verify the paperwork your business needs. We're not a law firm and this isn't legal advice. When a question really needs a lawyer, we'll say so, and we can put you in touch with counsel in the right jurisdiction.",
  },
  {
    q: "How is this different from a template generator?",
    a: "Templates hand you a generic document and leave the risk with you. We shape each document around your actual data flows, then independently check every legal reference against official sources. The difference shows up the moment a buyer's legal team starts reading.",
  },
  {
    q: "How fast is it?",
    a: "The scan takes minutes. A Remediation Pack usually turns around in days, not weeks.",
  },
  {
    q: "What if my documents fail my customer's review?",
    a: "They're built to pass enterprise legal review. That's the whole point of the verification layer. If something gets questioned, we work with you to sort it out.",
  },
  {
    q: "Do you cover the US too?",
    a: "Our focus is EU entry, GDPR and the AI Act, where the pain is sharpest for founders coming in. US frameworks are available on request as we widen coverage.",
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

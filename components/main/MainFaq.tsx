"use client";

import { useRef, useState } from "react";

const QA = [
  {
    q: "What does Iterative Research specialize in?",
    a: "Iterative Research specializes in enterprise-grade AI infrastructure, private LLM deployment, AI DevOps (MLOps), and AI strategy consulting.",
  },
  {
    q: "Who should use Iterative Research's AI infrastructure solutions?",
    a: "Iterative Research's AI infrastructure solutions are designed for enterprises, regulated businesses, and data-sensitive organizations that require secure, scalable, and compliant AI deployments.",
  },
  {
    q: "What makes Iterative Research different from other AI infrastructure providers?",
    a: "Iterative Research differentiates itself through its end-to-end enterprise AI stack, security-first architecture, and private LLM-focused deployment model.",
  },
  {
    q: "Is Iterative Research focused on enterprise-grade AI solutions?",
    a: "Yes. Iterative Research is exclusively focused on enterprise-grade AI solutions built for security, scalability, governance, and regulatory compliance.",
  },
  {
    q: "What is AI Infrastructure as a Service?",
    a: "AI Infrastructure as a Service (AI-IaaS) is a managed enterprise platform that provides the compute, deployment, security, and DevOps foundation required to run AI and LLM workloads at scale.",
  },
  {
    q: "Why do enterprises need AI infrastructure?",
    a: "Enterprises need dedicated AI infrastructure to securely deploy, scale, govern, and control artificial intelligence in production environments.",
  },
  {
    q: "What components are included in AI Infrastructure as a Service?",
    a: "Iterative Research's AI Infrastructure as a Service includes all mission-critical layers required to operate enterprise-grade AI systems securely and at scale.",
  },
  {
    q: "How does AI infrastructure improve business scalability?",
    a: "AI infrastructure enables businesses to scale AI workloads reliably without re-architecting systems, rebuilding security layers, or adding operational complexity.",
  },
  {
    q: "What are the security standards followed in AI infrastructure?",
    a: "Iterative Research follows enterprise-grade security standards for all AI infrastructure deployments to ensure data protection, access control, and regulatory compliance.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const inner = useRef<HTMLDivElement>(null);
  return (
    <div className={`faq${open ? " open" : ""}`}>
      <button className="faq-q" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {q}
        <span className="pm" aria-hidden="true">
          +
        </span>
      </button>
      <div className="faq-a" style={{ maxHeight: open ? inner.current?.scrollHeight : 0 }}>
        <div className="faq-a-inner" ref={inner}>
          {a}
        </div>
      </div>
    </div>
  );
}

export default function MainFaq() {
  return (
    <section className="section section-on-white" id="faq">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            <span className="accent">FAQ</span>
          </span>
          <h2>The questions enterprises ask first.</h2>
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

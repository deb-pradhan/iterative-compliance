import type { ReactNode } from "react";

function IconServer() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  );
}
function IconPipeline() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="5" cy="6" r="2.4" />
      <circle cx="19" cy="18" r="2.4" />
      <path d="M5 8.5v4a3 3 0 0 0 3 3h8.5" />
    </svg>
  );
}
function IconLock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
function IconStrategy() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 20h18" />
      <path d="M6 20V11M11 20V5M16 20v-6M21 20V8" />
    </svg>
  );
}

type Svc = { icon: ReactNode; title: string; body: string; featured?: boolean };

const SERVICES: Svc[] = [
  {
    icon: <IconServer />,
    title: "AI Infrastructure as a Service",
    body: "Secure, scalable compute environments for training, hosting, and deployment.",
    featured: true,
  },
  {
    icon: <IconPipeline />,
    title: "DevOps for AI",
    body: "CI/CD pipelines tailored for ML workflows. Reduce drift and increase uptime.",
  },
  {
    icon: <IconLock />,
    title: "Private LLM Hosting",
    body: "Run language models on dedicated infrastructure, with full data control and regional compliance.",
  },
  {
    icon: <IconStrategy />,
    title: "AI Strategy & Consulting",
    body: "Leverage our deep AI expertise to develop actionable, growth-focused AI strategies that align with your business goals.",
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            <span className="accent">Services</span>
          </span>
          <h2>Solutions Built for High-Stakes AI</h2>
          <p className="lead">
            Infrastructure and services engineered for compliance, speed, and
            enterprise-scale transformation.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s) => (
            <div className="svc reveal" key={s.title}>
              <span className={`icon-chip${s.featured ? " featured" : ""}`}>
                {s.icon}
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

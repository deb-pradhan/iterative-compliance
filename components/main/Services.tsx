import type { ReactNode } from "react";

// One coherent outline family: 24-grid, 1.75 stroke, round caps/joins.
const ICON = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function IconServer() {
  return (
    <svg {...ICON}>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01" />
      <path d="M7 16.5h.01" />
    </svg>
  );
}
function IconBranch() {
  return (
    <svg {...ICON}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M6 8.5v7" />
      <path d="M18 8.5a9 9 0 0 1-9 9" />
    </svg>
  );
}
function IconLock() {
  return (
    <svg {...ICON}>
      <rect x="4.5" y="10.5" width="15" height="9.5" rx="2.2" />
      <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
      <path d="M12 14.5v2" />
    </svg>
  );
}
function IconTrend() {
  return (
    <svg {...ICON}>
      <path d="M3 16.5 9.5 10l4 4L21 6.5" />
      <path d="M15 6.5h6v6" />
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
    icon: <IconBranch />,
    title: "DevOps for AI",
    body: "CI/CD pipelines tailored for ML workflows. Reduce drift and increase uptime.",
  },
  {
    icon: <IconLock />,
    title: "Private LLM Hosting",
    body: "Run language models on dedicated infrastructure, with full data control and regional compliance.",
  },
  {
    icon: <IconTrend />,
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

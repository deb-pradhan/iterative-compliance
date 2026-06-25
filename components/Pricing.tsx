function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path
        d="M2 7l3.5 3.5L12 3"
        stroke="var(--pos-text)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Plan = {
  ribbon?: string;
  name: string;
  price: string;
  unit?: string;
  who: string;
  features: string[];
  cta: string;
  ctaPrimary?: boolean;
  feature?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Free Scan",
    price: "€0",
    who: "For anyone who wants to know where they stand.",
    features: [
      "Automated gap report",
      "GDPR + AI Act check",
      "No card required",
    ],
    cta: "Run free scan",
  },
  {
    name: "Remediation Pack",
    price: "€1,000",
    unit: "from",
    who: "For early founders who just got asked for docs.",
    features: [
      "Privacy policy, DPA, ToS, RoPA",
      "Tailored to your business",
      "Fully source-verified",
    ],
    cta: "Start the pack",
  },
  {
    ribbon: "★ Most popular",
    name: "Market-Entry Kit",
    price: "€3,500",
    unit: "from",
    who: "For funded teams closing EU enterprise deals.",
    features: [
      "Everything in Remediation",
      "AI Act assessment + DPIA",
      "Vendor DPA review, board-ready",
    ],
    cta: "Book a call",
    ctaPrimary: true,
    feature: true,
  },
  {
    name: "Continuous",
    price: "€300",
    unit: "/mo from",
    who: "For anyone who wants to set it and stop worrying.",
    features: [
      "Ongoing monitoring",
      "Quarterly re-scans",
      "Updates as rules phase in",
    ],
    cta: "See plans",
  },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            <span className="accent">Pricing</span>
          </span>
          <h2>Start free. Pay only when you decide to fix it.</h2>
          <p className="lead">
            See exactly where you stand at no cost, then move up the moment a deal
            — or a regulator — demands it.
          </p>
        </div>

        <div className="price-grid">
          {PLANS.map((p) => (
            <div
              className={`card reveal${p.feature ? " feature" : ""}`}
              key={p.name}
            >
              <div className="ribbon">{p.ribbon ?? " "}</div>
              <h3>{p.name}</h3>
              <div className="price">
                {p.price} {p.unit && <small>{p.unit}</small>}
              </div>
              <p className="who">{p.who}</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <Check /> {f}
                  </li>
                ))}
              </ul>
              <a
                className={`btn btn-block ${
                  p.ctaPrimary ? "btn-primary" : "btn-outline"
                }`}
                href="#scan"
              >
                {p.cta}
                {p.ctaPrimary && (
                  <span className="chev" aria-hidden="true">
                    ›
                  </span>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import DotMatrix from "@/components/DotMatrix";

const POINTS = [
  {
    n: "01",
    title: "End-to-End Capability",
    body: "Infrastructure + Consulting + Engineering in one place.",
  },
  {
    n: "02",
    title: "Scalability by Design",
    body: "From POCs to full production deployments.",
  },
  {
    n: "03",
    title: "Security First",
    body: "Encryption, MFA, and audit logs for AI workloads.",
  },
];

export default function WhyPartner() {
  return (
    <section className="section m-dark">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow eyebrow--ondark">
            <span className="dot" aria-hidden="true" />
            Why partner <span className="accent">with us</span>
          </span>
          <h2>Built for Security, Scale, and Compliance</h2>
          <p className="lead">
            We understand the demands of enterprise AI, and we build for them
            from day one.
          </p>
        </div>

        <div className="why-grid reveal">
          {POINTS.map((p) => (
            <div className="why-item" key={p.n}>
              <span className="wn">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

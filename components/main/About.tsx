const STATS = [
  { v: "50+", l: "Regular clients" },
  { v: "6.2%", l: "Yearly growth rate" },
  { v: "4.5", l: "Average client rating" },
  { v: "21+", l: "Team members" },
];

const VALUES = [
  {
    k: "01",
    title: "Security is a Standard",
    body: "We build with trust by design, applying rigorous safeguards across infrastructure, data handling, and compliance.",
  },
  {
    k: "02",
    title: "United for Success",
    body: "A collaborative approach across engineering, consulting, and operations to fuel sustained growth.",
  },
  {
    k: "03",
    title: "Smart Work, Better Results",
    body: "Automated workflows and continuous integration keep delivery fast and dependable.",
  },
  {
    k: "04",
    title: "Dedicated to Excellence",
    body: "Delivering reliable, scalable results in highly regulated sectors.",
  },
  {
    k: "05",
    title: "Trust Through Accountability",
    body: "Transparent communication and secure data handling at every step.",
  },
  {
    k: "06",
    title: "Strategic Effort, Superior Results",
    body: "Combining sharp insight with practical execution to move the work forward.",
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            <span className="accent">About us</span>
          </span>
          <h2>A UAE-based AI infrastructure company.</h2>
          <p className="lead">
            Founded in 2022 and operating from Dubai, we deliver secure, scalable
            solutions for enterprise and government.
          </p>
        </div>

        <div className="stats reveal">
          {STATS.map((s) => (
            <div className="stat" key={s.l}>
              <div className="v">{s.v}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="about-grid">
          <div className="about-mission reveal">
            <p>
              <b>
                Our team of infrastructure engineers, AI consultants, and DevOps
                specialists build mission-ready systems
              </b>{" "}
              where security, compliance, and performance are non-negotiable.
            </p>
            <p>
              From private LLM deployment to DevOps and MLOps integration, we
              build compliant AI systems that are ready for production.
            </p>
          </div>
          <div className="values reveal">
            {VALUES.map((v) => (
              <div className="value" key={v.k}>
                <h4>
                  <span className="vk">{v.k}</span>
                  {v.title}
                </h4>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

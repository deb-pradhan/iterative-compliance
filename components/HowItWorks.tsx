const STEPS = [
  {
    num: "01 / Assess",
    title: "Scan",
    body: "Upload your documents. We check them against the frameworks that actually apply to your business and hand back a gap report in plain language.",
    tag: "gap report",
  },
  {
    num: "02 / Remediate",
    title: "Fix",
    body: "We draft or rewrite each document to close the gaps. Everything is shaped around your real data flows and product, not boilerplate.",
    tag: "tailored docs",
  },
  {
    num: "03 / Verify",
    title: "Verify",
    body: "We check every claim, date and citation against official sources before it reaches you. It's the part nobody else bothers with.",
    tag: "checked at source",
  },
  {
    num: "04 / Monitor",
    title: "Stay current",
    body: "Regulations change. We flag it when a rule shifts and your documents go stale, so you're never quietly out of compliance.",
    tag: "always current",
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            The <span className="accent">loop</span>
          </span>
          <h2>Assess. Fix. Verify. Stay current.</h2>
          <p className="lead">
            One loop runs the whole life of your compliance documents, so
            &ldquo;compliant today&rdquo; still means compliant a year from now.
          </p>
        </div>

        <div className="loop">
          {STEPS.map((s) => (
            <div className="step reveal" key={s.num}>
              <span className="num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <span className="ic tag tag-ok">
                <span className="sq" aria-hidden="true" /> {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

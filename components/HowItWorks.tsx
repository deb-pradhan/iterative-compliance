const STEPS = [
  {
    num: "01 / Assess",
    title: "Scan",
    body: "Upload your docs. Our engine checks them against the frameworks that actually apply to your business and returns a plain-English gap report.",
    tag: "gap report",
  },
  {
    num: "02 / Remediate",
    title: "Fix",
    body: "We draft or rewrite every document to close the gaps — tailored to your real data flows and product, never boilerplate.",
    tag: "tailored docs",
  },
  {
    num: "03 / Verify",
    title: "Verify",
    body: "Every claim, date and citation is fact-checked against official sources before it reaches you. The part nobody else does.",
    tag: "source-checked",
  },
  {
    num: "04 / Monitor",
    title: "Stay current",
    body: "Regulations change. We flag when a rule shifts and your documents go stale, so you're never quietly out of compliance.",
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
            One closed loop runs the whole lifecycle of your compliance documents
            — so &ldquo;compliant today&rdquo; stays compliant.
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

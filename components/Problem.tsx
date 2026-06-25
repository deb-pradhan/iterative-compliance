const REQS = [
  {
    name: "A privacy policy that holds up under GDPR",
    sub: "Matched to how your product actually handles data",
    label: "Asked for",
  },
  {
    name: "Data Processing Agreement",
    sub: "The one your customer's legal team won't bounce",
    label: "Asked for",
  },
  {
    name: "Record of Processing Activities",
    sub: "Legally required, and most founders don't keep one",
    label: "Required",
  },
  {
    name: "EU AI Act readiness assessment",
    sub: "Obligations that phase in through 2026 and 2027",
    label: "Required",
  },
];

export default function Problem() {
  return (
    <section className="section section-on-white" id="problem">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            The <span className="accent">wall</span>
          </span>
          <h2>It hits exactly when you&apos;re winning.</h2>
          <p className="lead">
            You found a European customer. They love the product. Then procurement
            sends over the data questionnaire, and the deal stalls until you
            produce documents you didn&apos;t know you needed.
          </p>
        </div>

        <div className="req-list reveal">
          {REQS.map((r) => (
            <div className="req" key={r.name}>
              <div className="req-name">
                {r.name}
                <small>{r.sub}</small>
              </div>
              <span className="tag tag-flag">
                <span className="sq" aria-hidden="true" /> {r.label}
              </span>
            </div>
          ))}
        </div>

        <p className="stakes reveal">
          Get it wrong and the deal dies. Sometimes it gets worse than that. GDPR
          fines reach <b>up to 4% of global annual revenue.</b> Get your documents
          from a template generator and the buyer&apos;s lawyers will spot it in
          about five minutes.{" "}
          <b>You don&apos;t have a compliance team. You have a deadline.</b>
        </p>
      </div>
    </section>
  );
}

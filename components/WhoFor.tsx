const ITEMS = [
  {
    k: "A",
    lead: "Founders selling across borders",
    rest: ". From MENA, India, SEA or the US, they hit GDPR and AI Act walls the moment they sell to European customers.",
  },
  {
    k: "B",
    lead: "Solopreneurs",
    rest: " who need real, defensible documents without keeping a lawyer on retainer at 400 euros an hour.",
  },
  {
    k: "C",
    lead: "Funded startups",
    rest: " whose first enterprise deal just turned into a security and data questionnaire.",
  },
  {
    k: "D",
    lead: "Teams shipping AI",
    rest: " who need to know what the AI Act actually asks of them, before a regulator tells them.",
  },
];

export default function WhoFor() {
  return (
    <section className="section section-on-white">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Who it&apos;s <span className="accent">for</span>
          </span>
          <h2>Built for founders entering the EU from outside it.</h2>
        </div>
        <div className="who-grid">
          {ITEMS.map((it) => (
            <div className="who-item reveal" key={it.k}>
              <span className="k">{it.k}</span>
              <p>
                <b>{it.lead}</b>
                {it.rest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

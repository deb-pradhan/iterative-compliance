const ITEMS = [
  "EUR-Lex official text",
  "European Commission",
  "EDPB & national regulators",
  "No AI-hallucinated law",
];

export default function TrustStrip() {
  return (
    <div className="strip">
      <div className="wrap strip-in">
        <span className="strip-label">Verified against</span>
        <div className="strip-items">
          {ITEMS.map((t) => (
            <span key={t}>
              <span className="sq" aria-hidden="true" /> {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const ROWS = [
  {
    claim: (
      <>
        Rules on prohibited uses apply under <s>AI Act Art. 42(5)</s>{" "}
        <ins>Art. 5</ins>.
      </>
    ),
    note: "Caught · Art. 42(5) does not exist in the AI Act",
    tone: "neg" as const,
  },
  {
    claim: (
      <>
        NIS2 applies from <s>October 2024</s> <ins>17 October 2024</ins>.
      </>
    ),
    note: "Corrected · exact enforcement date verified",
    tone: "pos" as const,
  },
  {
    claim: (
      <>
        ENISA guidance treated as a <s>binding obligation</s>{" "}
        <ins>recommendation you don&apos;t have to follow</ins>.
      </>
    ),
    note: "Reclassified · guidance ≠ legal requirement",
    tone: "pos" as const,
  },
];

export default function Differentiator() {
  return (
    <section className="section diff" id="why">
      <div className="wrap diff-grid">
        <div className="reveal">
          <span className="eyebrow eyebrow--ondark">
            <span className="dot" aria-hidden="true" />
            Why <span className="accent">us</span>
          </span>
          <h2>Other tools generate documents. We verify them.</h2>
          <p className="lead">
            Here&apos;s the dirty secret of legal documents written by AI. The
            models make things up. They invent article numbers, get enforcement
            dates wrong, and quote guidance as if it were binding law. In
            compliance that&apos;s not a typo. It&apos;s the liability you carry.
          </p>
          <p className="pull">
            Every document goes through an adversarial check. We assume the draft
            is wrong until it proves itself right against the official text.{" "}
            <b>No invented law. Nothing reaches you unverified.</b>
          </p>
        </div>

        <div className="redline reveal">
          <div className="rl-top">
            <span className="live" aria-hidden="true" /> Adversarial verification ·
            live
          </div>
          {ROWS.map((r, i) => (
            <div className="rl-row" key={i}>
              <div className="rl-claim">{r.claim}</div>
              <div className="rl-note">
                <span
                  className="sq"
                  style={{
                    background:
                      r.tone === "neg"
                        ? "var(--dark-neg)"
                        : "var(--dark-pos)",
                  }}
                  aria-hidden="true"
                />
                {r.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import DocumentPanel from "./DocumentPanel";
import DotMatrix from "./DotMatrix";

export default function Hero() {
  return (
    <section className="hero" id="scan">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            GDPR &amp; EU AI Act · <span className="accent">Compliance ops</span>
          </span>
          <h1 className="display">
            Close your first EU deal without the compliance questionnaire{" "}
            <span className="display--soft">killing it.</span>
          </h1>
          <p className="hero-sub">
            You&apos;re selling into Europe from outside it. We read the documents
            you&apos;ve already got and fix what&apos;s missing. Then we check every
            line against the real law, before any of it reaches your
            buyer&apos;s lawyers.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#pricing">
              Run my free compliance scan{" "}
              <span className="chev" aria-hidden="true">
                ›
              </span>
            </a>
            <a className="btn btn-bracket" href="#how">
              See how it works
              <i />
            </a>
          </div>
          <p className="hero-micro">
            <span className="sq" aria-hidden="true" /> No signup wall. Upload your
            documents and get a gap report in minutes.
          </p>
        </div>

        <div className="hero-visual">
          <div className="hero-matrix">
            <DotMatrix rows={22} cols={40} seed={7} base={0.08} growth={0.66} />
          </div>
          <DocumentPanel />
        </div>
      </div>
    </section>
  );
}

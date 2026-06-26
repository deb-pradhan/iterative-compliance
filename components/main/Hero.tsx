import DotMatrix from "@/components/DotMatrix";

export default function Hero() {
  return (
    <section className="m-hero" id="scan">
      <div className="wrap m-hero-grid">
        <div>
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Enterprise AI <span className="accent">infrastructure</span>
          </span>
          <h1 className="display">
            Transform Your Enterprise with AI Infrastructure{" "}
            <span className="display--soft">That Actually Works</span>
          </h1>
          <p className="m-hero-sub">
            Scalable AI Infrastructure. Expert Guidance. Real Business Impact. We
            build compliant, high-performance AI platforms for mission-critical
            sectors like healthcare, finance, and defense.
          </p>
          <div className="m-hero-actions">
            <a className="btn btn-primary" href="#products">
              Our Products <span className="chev" aria-hidden="true">›</span>
            </a>
            <a className="btn btn-bracket" href="#services">
              Our Services
              <i />
            </a>
          </div>
          <p className="m-hero-micro">
            <span className="sq" aria-hidden="true" /> Security-first ·
            Compliance-ready · Built for production
          </p>
        </div>

        <div className="m-hero-visual">
          <div className="m-hero-matrix">
            <DotMatrix rows={22} cols={40} seed={11} base={0.08} growth={0.66} />
          </div>
          <div className="window">
            <div className="window-bar">
              <span className="wd" />
              <span className="wd" />
              <span className="wd" />
              <span className="wurl">analyzir · compliance dashboard</span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="window-img"
              src="/assets/product-analyzir.png"
              alt="AnalyzIR compliance dashboard showing control type analysis and instance status overview"
              width={2528}
              height={2000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

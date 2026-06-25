import DotMatrix from "./DotMatrix";

export default function FinalCta() {
  return (
    <section className="section final">
      <div className="final-matrix">
        <DotMatrix rows={26} cols={70} seed={42} base={0.05} growth={0.7} />
      </div>
      <div className="wrap">
        <span
          className="eyebrow eyebrow--ondark"
          style={{ justifyContent: "center" }}
        >
          <span className="dot" aria-hidden="true" />
          Find out where you <span className="accent">stand</span>
        </span>
        <h2>
          You can&apos;t fix what <span className="soft">you can&apos;t see.</span>
        </h2>
        <p className="lead">
          Run the scan, get your gap report, and decide from there. Free, in
          minutes.
        </p>
        <a className="btn btn-light" href="#scan">
          Run my free compliance scan{" "}
          <span className="chev" aria-hidden="true">
            ›
          </span>
        </a>
        <p className="sub">No card · No signup wall · GDPR + EU AI Act</p>
      </div>
    </section>
  );
}

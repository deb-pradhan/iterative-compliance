import DotMatrix from "@/components/DotMatrix";

const CAL = "https://cal.com/iterative-research";

export default function FinalCta() {
  return (
    <section className="section final">
      <div className="final-matrix">
        <DotMatrix rows={26} cols={70} seed={23} base={0.05} growth={0.7} />
      </div>
      <div className="wrap">
        <span className="eyebrow eyebrow--ondark" style={{ justifyContent: "center" }}>
          <span className="dot" aria-hidden="true" />
          Let&apos;s <span className="accent">talk</span>
        </span>
        <h2>
          Let&apos;s Build Responsible,{" "}
          <span className="soft">Scalable AI Together</span>
        </h2>
        <p className="lead">
          Whether you&apos;re exploring private LLMs or scaling enterprise AI, our
          team is ready to help.
        </p>
        <a className="btn btn-light" href={CAL} target="_blank" rel="noopener noreferrer">
          Schedule a Quick call <span className="chev" aria-hidden="true">›</span>
        </a>
        <p className="sub">Enterprise AI infrastructure · Private LLMs · DevOps for AI</p>
      </div>
    </section>
  );
}

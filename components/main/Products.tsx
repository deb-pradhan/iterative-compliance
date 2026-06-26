type Product = {
  num: string;
  name: string;
  category: string;
  desc: string;
  benefit: string;
  img: string;
  url: string;
  link?: { href: string; label: string };
};

const PRODUCTS: Product[] = [
  {
    num: "01",
    name: "AnalyzIR",
    category: "Compliance Analyzer",
    desc: "Automate your regulatory compliance processes with Compliance Analyzer, which uses LLMs to review policy documents and ensure they align with regulations.",
    benefit: "Automate 90% of compliance document reviews",
    img: "/assets/product-analyzir.png",
    url: "analyzir · compliance analyzer",
    link: { href: "/compliance", label: "Explore the compliance product" },
  },
  {
    num: "02",
    name: "DreamIR",
    category: "AI Agentic Orchestrator",
    desc: "A no-code platform for managing multi-agent AI workflows, designed to automate complex business processes. Integrates seamlessly with third-party tools and APIs.",
    benefit: "Reduce development time by 75% with no-code AI workflow creation",
    img: "/assets/product-dreamir.png",
    url: "dreamir · agentic orchestrator",
  },
  {
    num: "03",
    name: "StringIR",
    category: "AI Data Query Agent",
    desc: "Simplify querying structured data with natural language, enabling non-technical users to get instant insights without writing SQL queries.",
    benefit: "Query any database using plain English in seconds",
    img: "/assets/product-stringir.png",
    url: "stringir · data query agent",
  },
  {
    num: "04",
    name: "ScripIR",
    category: "AI Meeting Master",
    desc: "Automate meeting workflows with AI-powered transcription and task extraction. Capture meeting outcomes in real-time and ensure actionable follow-ups.",
    benefit: "Transform meetings into actionable insights automatically",
    img: "/assets/product-scripir.png",
    url: "scripir · meeting master",
  },
];

export default function Products() {
  return (
    <section className="section section-on-white" id="products">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            <span className="accent">Products</span>
          </span>
          <h2>Purpose-Built AI Tools for Enterprise Deployment</h2>
          <p className="lead">
            Streamline compliance, orchestration, and insights with our
            specialized AI applications.
          </p>
        </div>

        <div className="prod-grid">
          {PRODUCTS.map((p) => (
            <article className="prod-card reveal" key={p.name}>
              <div className="prod-shot">
                <div className="window-bar" style={{ borderRadius: "8px 8px 0 0" }}>
                  <span className="wd" />
                  <span className="wd" />
                  <span className="wd" />
                  <span className="wurl">{p.url}</span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={`${p.name} — ${p.category}`} loading="lazy" />
              </div>
              <div className="prod-body">
                <div className="prod-head">
                  <span className="prod-num">{p.num}</span>
                  <span className="badge badge--accent">{p.category}</span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="prod-foot">
                  <span className="tag tag-ok">
                    <span className="sq" aria-hidden="true" /> {p.benefit}
                  </span>
                  {p.link && (
                    <a className="prod-link" href={p.link.href}>
                      {p.link.label}{" "}
                      <span className="arr" aria-hidden="true">
                        →
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

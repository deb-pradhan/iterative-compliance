const CAL = "https://cal.com/iterative-research";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a className="brand" href="#top" aria-label="Iterative Research home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-orb" src="/assets/logo-orb.png" alt="" aria-hidden="true" />
          Iterative Research
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <a href="/compliance">Compliance</a>
        </nav>
        <div className="nav-cta">
          <a className="nav-signin" href="/compliance">
            Compliance
          </a>
          <a className="btn btn-primary" href={CAL} target="_blank" rel="noopener noreferrer">
            Get in touch <span className="chev" aria-hidden="true">›</span>
          </a>
        </div>
      </div>
    </header>
  );
}

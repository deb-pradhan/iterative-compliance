export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a
          className="brand brand--product"
          href="#top"
          aria-label="Verified, an Iterative Research product"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-orb" src="/assets/logo-orb.png" alt="" aria-hidden="true" />
          <span className="brand-stack">
            <span className="brand-name">Verified</span>
            <span className="brand-by">by Iterative Research</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#how">How it works</a>
          <a href="#why">Why us</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-cta">
          <a
            className="nav-back"
            href="/"
            aria-label="Back to the Iterative Research main site"
          >
            <span className="chev-back" aria-hidden="true">
              ←
            </span>
            <span className="nav-back-label">Iterative Research</span>
          </a>
          <a className="btn btn-primary" href="#scan">
            Run free scan <span className="chev" aria-hidden="true">›</span>
          </a>
        </div>
      </div>
    </header>
  );
}

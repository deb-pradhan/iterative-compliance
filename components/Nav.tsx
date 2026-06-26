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
          <a href="#how">How it works</a>
          <a href="#why">Why us</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-cta">
          <a className="nav-signin" href="#pricing">
            See pricing
          </a>
          <a className="btn btn-primary" href="#scan">
            Run free scan <span className="chev" aria-hidden="true">›</span>
          </a>
        </div>
      </div>
    </header>
  );
}

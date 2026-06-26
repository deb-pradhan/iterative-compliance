export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <a className="brand brand--product" href="#top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-orb" src="/assets/logo-orb.png" alt="" aria-hidden="true" />
            <span className="brand-stack">
              <span className="brand-name">Verified</span>
              <span className="brand-by">by Iterative Research</span>
            </span>
          </a>
          <div className="foot-links">
            <div className="foot-col">
              <h4>Product</h4>
              <a href="#how">How it works</a>
              <a href="#why">Verification</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div className="foot-col">
              <h4>Frameworks</h4>
              <a href="#">GDPR</a>
              <a href="#">EU AI Act</a>
              <a href="#">
                NIS2 · DORA <span className="soon">(soon)</span>
              </a>
            </div>
            <div className="foot-col">
              <h4>Company</h4>
              <a href="#faq">FAQ</a>
              <a href="https://cal.com/iterative-research" target="_blank" rel="noopener noreferrer">
                Contact
              </a>
              <a href="/privacypolicy">Privacy Policy</a>
              <a href="/termsconditions">Terms &amp; Conditions</a>
              <a href="/">Iterative Research ↗</a>
            </div>
          </div>
        </div>
        <p className="disclaimer">
          Iterative Research provides compliance operations and document preparation
          services. We&apos;re not a law firm and we don&apos;t provide legal
          advice. Documents are verified against publicly available official
          sources at the time of delivery. Regulations change, and staying
          compliant means watching them over time. For legal advice specific to
          your situation, talk to a qualified attorney in the relevant
          jurisdiction.
        </p>
        <p className="copyr">© 2026 Iterative Research Tech Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}

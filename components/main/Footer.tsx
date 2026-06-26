const SOCIAL = {
  x: "https://x.com/iriterative?s=11",
  linkedin:
    "https://www.linkedin.com/company/iterative-research/posts/?feedView=all",
  instagram:
    "https://www.instagram.com/iterativeresearch?igsh=MWZ2enAwMGYzZWRoNg==",
};
const ORIGIN = "https://iterativeresearch.xyz";

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13M7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand-col">
            <a className="brand" href="#top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="brand-orb" src="/assets/logo-orb.png" alt="" aria-hidden="true" />
              Iterative Research
            </a>
            <p className="foot-tagline">
              Compliant, high-performance AI platforms for mission-critical
              sectors. Dubai, UAE · Founded 2022.
            </p>
            <div className="foot-social">
              <a href={SOCIAL.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <IconX />
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <IconLinkedIn />
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <IconInstagram />
              </a>
            </div>
          </div>
          <div className="foot-links">
            <div className="foot-col">
              <h4>Explore</h4>
              <a href="#services">Services</a>
              <a href="#products">Products</a>
              <a href="#about">About us</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="foot-col">
              <h4>Products</h4>
              <a href="#products">AnalyzIR</a>
              <a href="#products">DreamIR</a>
              <a href="#products">StringIR</a>
              <a href="#products">ScripIR</a>
            </div>
            <div className="foot-col">
              <h4>Company</h4>
              <a href="/compliance">Compliance (Verified)</a>
              <a href="https://cal.com/iterative-research" target="_blank" rel="noopener noreferrer">
                Get in touch
              </a>
              <a href={`${ORIGIN}/termsconditions`} target="_blank" rel="noopener noreferrer">
                Terms &amp; Conditions
              </a>
              <a href={`${ORIGIN}/privacypolicy`} target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <p className="copyr">© 2026 Iterative Research. All rights reserved.</p>
      </div>
    </footer>
  );
}

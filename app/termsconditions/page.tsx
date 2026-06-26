import type { Metadata } from "next";
import Nav from "@/components/main/Nav";
import Footer from "@/components/main/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions · Iterative Research",
  description:
    "The Terms of Service governing access to and use of the Iterative Research platform and services.",
};

export default function TermsPage() {
  return (
    <div className="frame" id="top">
      <Nav />
      <main>
        <header className="page-head">
          <div className="wrap">
            <span className="eyebrow">
              <span className="dot" aria-hidden="true" />
              <span className="accent">Legal</span>
            </span>
            <h1>Terms &amp; Conditions</h1>
            <p className="lead">
              The agreement that governs access to and use of the Iterative
              Research platform and services.
            </p>
            <p className="page-meta">Effective February 2026</p>
          </div>
        </header>

        <section className="legal">
          <div className="wrap">
            <div className="legal-doc">
              <h2>Iterative Research Terms of Service</h2>
              <p>
                This Terms of Service (the &ldquo;Agreement&rdquo;) is entered
                into by and between Iterative Research (the
                &ldquo;Provider&rdquo;) and the entity or person accessing or
                using the Services (the &ldquo;Customer&rdquo;). The Agreement
                governs use of the Services and any Order Forms. The effective
                date is whichever comes first: the Customer&rsquo;s initial
                access, or the effective date of the first Order Form.
              </p>
              <p>
                This Agreement applies to the Customer&rsquo;s initial
                subscription and to all subsequent subscriptions or purchases
                that reference this Agreement. Iterative Research reserves the
                right to modify this Agreement as described in the Amendments
                section. Capitalized terms are defined below or where first used
                in this Agreement.
              </p>

              <h2>1. Definitions</h2>
              <p>
                <span className="defn">1.1 Authorized Devices.</span> Devices
                such as desktops, laptops, and other compatible hardware used to
                access the Services.
              </p>
              <p>
                <span className="defn">1.2 Content.</span> Research outputs,
                data, designs, analyses, or materials created by the Customer or
                Users using the Services, or imported into the platform.
              </p>
              <p>
                <span className="defn">1.3 Documentation.</span> Technical and
                instructional materials provided by Iterative Research that
                describe the features, usage, and functionality of the Services.
              </p>
              <p>
                <span className="defn">1.4 Services.</span> Iterative
                Research&rsquo;s proprietary online tools, platforms, and
                applications for collaborative research workflows,
                experimentation, and analysis. Details appear in the applicable
                Order Forms.
              </p>
              <p>
                <span className="defn">1.5 Order Form.</span> The document signed
                by both parties that specifies the details of the
                Customer&rsquo;s subscription to the Services.
              </p>
              <p>
                <span className="defn">1.6 Modules.</span> Extensions or
                components within the platform that add functionality. Modules
                may be created by Iterative Research, by Customers, or by third
                parties. Modules provided by Iterative Research receive support.
              </p>
              <p>
                <span className="defn">1.7 User.</span> Any individual, such as
                an employee or contractor, affiliated with the Customer who is
                authorized to access the Services.
              </p>

              <h2>2. License and Use Rights</h2>

              <h3>2.1 Services License</h3>
              <p>
                The Provider grants the Customer a nonexclusive,
                nontransferable, revocable license during the Term to use the
                Services, including platform workflows and analysis tools, for
                internal research and operational purposes, and to download and
                install any applicable desktop or mobile applications. The
                Services are provided electronically.
              </p>

              <h3>2.2 Access Management</h3>
              <p>
                The Provider will supply the credentials and protocols (the
                &ldquo;Access Credentials&rdquo;) that the Customer and its Users
                need to access the Services. The Customer manages User accounts
                and designates administrators for configuration oversight.
              </p>

              <h3>2.3 User Accounts</h3>
              <p>
                Users must register with valid credentials, including names and
                email addresses. User credentials are strictly personal and may
                not be transferred. Automated or shared accounts are prohibited.
              </p>

              <h3>2.4 Restrictions</h3>
              <p>The Customer and its Users agree not to:</p>
              <ul>
                <li>Reverse engineer, decompile, or modify the Services.</li>
                <li>
                  Interfere with or disrupt the Services, including any
                  unauthorized access to accounts or data.
                </li>
                <li>
                  Use the Services to process or analyze sensitive or prohibited
                  data.
                </li>
                <li>Use the Services to develop competing products.</li>
                <li>
                  Violate any applicable laws or the rights of third parties
                  while using the Services.
                </li>
              </ul>

              <h3>2.5 Content Restrictions</h3>
              <p>The Customer shall ensure that uploaded or generated Content:</p>
              <ul>
                <li>
                  Does not violate applicable laws or rights, such as
                  intellectual property or privacy rights.
                </li>
                <li>Is not defamatory, offensive, or harmful.</li>
                <li>
                  Is used solely within the intended context of research and
                  analysis.
                </li>
              </ul>
              <p>
                Iterative Research reserves the right to remove Content that
                violates this Agreement.
              </p>

              <h3>2.6 Publicity Rights</h3>
              <p>
                Iterative Research may refer to the Customer as a client and use
                the Customer&rsquo;s logo in promotional materials, unless
                otherwise agreed in writing.
              </p>

              <h3>2.7 Support</h3>
              <p>
                Iterative Research will provide standard support services,
                including email support during standard business hours for
                assistance and error resolution, and software updates and
                improvements as determined by the Provider.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about these Terms can be sent to{" "}
                <a className="prod-link" href="mailto:support@iterativeresearch.xyz">
                  support@iterativeresearch.xyz
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

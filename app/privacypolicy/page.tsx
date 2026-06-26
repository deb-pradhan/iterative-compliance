import type { Metadata } from "next";
import Nav from "@/components/main/Nav";
import Footer from "@/components/main/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy · Iterative Research",
  description:
    "How Iterative Research collects, uses, and protects personal information across its websites, tools, and services.",
};

export default function PrivacyPage() {
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
            <h1>Privacy Policy</h1>
            <p className="lead">
              How we collect, use, and protect personal information across our
              websites, tools, and services.
            </p>
            <p className="page-meta">Effective February 2026</p>
          </div>
        </header>

        <section className="legal">
          <div className="wrap">
            <div className="legal-doc">
              <h2>Privacy Statement for Iterative Research</h2>
              <p>
                This Privacy Statement explains how personal information about
                our potential customers and other individuals using our services
                is collected, used, and disclosed by Iterative Research and its
                respective affiliates (&ldquo;us,&rdquo; &ldquo;we,&rdquo;
                &ldquo;our,&rdquo; or &ldquo;Iterative Research&rdquo;).
              </p>
              <p>
                This statement covers our privacy practices across our websites,
                software, tools, applications, and services. By signing up for
                our Services and agreeing to our General Terms and Conditions,
                you consent to the collection, use, storage, and disclosure of
                information as described here. The privacy practices of third
                party websites are governed separately. We may update this
                Privacy Statement from time to time.
              </p>

              <h2>Personal Information We Collect</h2>
              <p>
                We collect personal information solely to provide you with the
                Iterative Research Services or to communicate with you about
                these services. We share information only when necessary to
                fulfill a request, enforce our terms, comply with the law,
                detect fraud or security issues, or protect rights. We do not
                process personal information for purposes beyond those outlined
                in this Privacy Statement.
              </p>

              <h2>Personal Information You Provide</h2>
              <p>
                When using our Services, we may ask you to provide certain
                personal details, such as your name, email address, social media
                avatar, company information, and any other information you choose
                to share. We do not collect financial information such as payment
                card details. Payments are processed through a third party
                provider.
              </p>

              <h2>Information We Collect Automatically</h2>
              <p>
                <span className="defn">Log information.</span> Browser type and
                version, device details, access times, pages viewed, IP address,
                and usage statistics.
              </p>
              <p>
                <span className="defn">Cookies and tracking technologies.</span>{" "}
                Cookies help us enhance the user experience and analyze usage
                patterns.
              </p>
              <p>
                <span className="defn">Web beacons.</span> With your consent, we
                may use web beacons, also known as tracking pixels, to measure
                campaign effectiveness and email engagement.
              </p>

              <h2>Social Sharing Features</h2>
              <p>
                Our Services may offer social sharing features that allow you to
                share content from our platform with other media, and vice
                versa. We may collect, store, and use personal information from
                these interactions, in accordance with this Privacy Statement.
              </p>

              <h2>Third Party Information</h2>
              <p>
                We may receive personal information about you from third party
                sources, including but not limited to LinkedIn, Facebook,
                Twitter, and other publicly accessible sources.
              </p>

              <h2>Support and Service Requests</h2>
              <p>
                When you contact us for support or customer service, we may
                maintain records of your requests, including any information you
                provide related to the request.
              </p>

              <h2>Access to Your Content</h2>
              <p>
                Where permitted by law, we will only access, view, or listen to
                your content in limited ways, such as when responding to feedback
                or support requests, detecting or preventing fraud, security, or
                technical issues, or enforcing our Terms.
              </p>

              <h2>Marketing and Promotional Communications</h2>
              <p>
                If you have subscribed to our newsletter, we may use your
                personal information to send you marketing or promotional
                materials related to Iterative Research. You can opt out at any
                time using the unsubscribe link. We will process your request
                promptly, within two business days.
              </p>

              <h2>Data Security</h2>
              <p>
                We take the security of your personal information seriously and
                employ appropriate measures to protect it against unauthorized
                access, alteration, disclosure, or destruction.
              </p>

              <h2>Your Data Protection Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding
                your personal information, including the right to access,
                correct, delete, or restrict the processing of your data.
              </p>

              <h2>Contact Information</h2>
              <p>
                For any questions about this Privacy Statement, contact us at{" "}
                <a className="prod-link" href="mailto:support@iterativeresearch.xyz">
                  support@iterativeresearch.xyz
                </a>
                . You can also visit{" "}
                <a className="prod-link" href="https://iterativeresearch.xyz" target="_blank" rel="noopener noreferrer">
                  iterativeresearch.xyz
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

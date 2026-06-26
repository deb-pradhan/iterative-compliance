export type Office = {
  label: string;
  name: string;
  lines: string[];
  phone?: string;
};

// Addresses in the order provided.
export const OFFICES: Office[] = [
  {
    label: "Dubai · One Offices",
    name: "Iterative Research Tech Limited",
    lines: ["613, One Offices", "2nd Street, Za'abeel First, Za'abeel", "Dubai, UAE"],
    phone: "+971 4 545 3491",
  },
  {
    label: "Dubai · DIFC",
    name: "Iterative Research Tech Limited",
    lines: ["Level 2, Innovation One", "DIFC, PO Box 74777", "Dubai, UAE"],
  },
  {
    label: "Chennai · India",
    name: "Iterative Research Tech Limited",
    lines: [
      "Simpcon Homes",
      "9/5 Mannar Street, T. Nagar",
      "Chennai 600017, Tamil Nadu, India",
    ],
  },
];

export default function Offices() {
  return (
    <section className="section section-on-white" id="offices">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Our <span className="accent">offices</span>
          </span>
          <h2>Where to find us.</h2>
          <p className="lead">
            Three offices across the UAE and India, supporting enterprise and
            government clients.
          </p>
        </div>
        <div className="offices">
          {OFFICES.map((o) => (
            <div className="office reveal" key={o.label}>
              <div className="olabel">{o.label}</div>
              <address>
                <span className="oname">{o.name}</span>
                {o.lines.map((l) => (
                  <span key={l}>
                    {l}
                    <br />
                  </span>
                ))}
              </address>
              {o.phone && <div className="ophone">{o.phone}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

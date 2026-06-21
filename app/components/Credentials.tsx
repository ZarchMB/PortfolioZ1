import { SectionHeading } from "./SectionHeading";

const certifications = [
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "May 2025",
  },
  {
    name: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "Jan 2024",
  },
  {
    name: "AI Learning Modules Certificate (12 hrs)",
    issuer: "AI Ready ASEAN — ASEAN Foundation & Google.org",
    date: "Oct 2025",
  },
];

export function Credentials() {
  return (
    <section id="credentials" className="mx-auto max-w-5xl px-6 md:px-10 py-16 md:py-20">
      <SectionHeading index="04" title="Education & credentials" />

      <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16">
        <div>
          <span className="eyebrow text-slate">Degree</span>
          <h3 className="mt-3 font-display text-xl text-ink">
            University of Cebu — Banilad Campus
          </h3>
          <p className="mt-1 text-[14.5px] text-ink-soft">
            Bachelor of Science in Information Technology
          </p>
          <p className="mt-4 text-[14.5px] text-ink-soft leading-relaxed">
            Graduated Cum Laude with a GWA of 1.6 (1.2 scale), and named
            Dean&rsquo;s Lister in every year of the program. Capstone:
            ReForest, an IoT-based soil analysis and tree recommendation
            system for reforestation.
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-4 max-w-xs">
            <div>
              <dt className="eyebrow text-slate">Standing</dt>
              <dd className="mt-1 font-mono text-sm text-ink">Cum Laude</dd>
            </div>
            <div>
              <dt className="eyebrow text-slate">Conferred</dt>
              <dd className="mt-1 font-mono text-sm text-ink">June 2026</dd>
            </div>
          </dl>
        </div>

        <div>
          <span className="eyebrow text-slate">Certifications</span>
          <ul className="mt-3 divide-y divide-rule border-t border-rule">
            {certifications.map((cert) => (
              <li key={cert.name} className="py-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[14.5px] text-ink leading-snug">{cert.name}</p>
                  <p className="mt-1 text-[13px] text-slate">{cert.issuer}</p>
                </div>
                <span className="font-mono text-xs text-slate whitespace-nowrap pt-0.5">
                  {cert.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import { VisitorCount } from "./VisitorCount";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 md:px-10 py-16 md:py-24">
      <div className="flex items-baseline gap-4 mb-12">
        <span className="font-mono text-sm text-brass">05</span>
        <span className="hairline-full flex-1" />
      </div>

      <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-end">
        <div>
          <h2 className="font-display text-3xl md:text-[2.5rem] leading-[1.1] text-ink tracking-tight">
            Open to entry-level and junior developer roles —
            <span className="italic text-steel"> frontend-focused.</span>
          </h2>
          <p className="mt-5 max-w-md text-[15px] text-ink-soft leading-relaxed">
            Based in Mandaue City, Cebu. Happy to talk about ReForest, the
            ServiceNow program, or anything on the stack above.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="mailto:adrianeracaza23@gmail.com"
            className="link-underline font-mono text-[14px] text-ink hover:text-steel"
          >
            adrianeracaza23@gmail.com
          </a>
          <a
            href="tel:+639052362928"
            className="link-underline font-mono text-[14px] text-ink-soft hover:text-steel"
          >
            +63 905 236 2928
          </a>
          <a
            href="https://linkedin.com/in/adrianeracaza23"
            target="_blank"
            rel="noreferrer"
            className="link-underline font-mono text-[14px] text-ink-soft hover:text-steel"
          >
            linkedin.com/in/adrianeracaza23
          </a>
        </div>
      </div>

      <div className="mt-20 pt-6 border-t border-rule flex flex-col sm:flex-row justify-between gap-2">
        <span className="font-mono text-[11px] tracking-wide text-slate">
          ADRIANE LORENZ RACAZA — H. ABELLANA ST., BASAK, MANDAUE CITY, CEBU
        </span>
          <VisitorCount />
        <span className="font-mono text-[11px] tracking-wide text-slate">
          EST. 2024
        </span>
      </div>
    </section>
  );
}

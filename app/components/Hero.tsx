export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-5xl px-6 md:px-10 pt-16 md:pt-24 pb-20">
      <div className="flex flex-col gap-10">
        <div className="flex items-baseline gap-4">
          <span className="eyebrow text-brass">PORTFOLIO — REV. 2026</span>
          <span className="hairline-full flex-1" />
        </div>

        <div>
          <h1 className="font-display text-[2.6rem] leading-[1.08] md:text-[4.2rem] md:leading-[1.04] tracking-tight text-ink">
            Adriane Lorenz Racaza
          </h1>
          <p className="mt-5 max-w-2xl font-display italic text-xl md:text-2xl text-ink-soft leading-snug">
            Builds the interface between people and the systems that watch
            the world for them.
          </p>
        </div>

        <p className="max-w-xl text-[15px] md:text-base leading-relaxed text-ink-soft">
          Front-end leaning full-stack developer, Cum Laude graduate of the
          BSIT program at University of Cebu. Most recently shipped the
          mobile application layer for an IoT reforestation system —
          translating live soil-sensor data into planting decisions a
          field worker can act on in seconds.
        </p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
          <a
            href="#work"
            className="font-mono text-[13px] tracking-[0.06em] bg-steel text-paper px-5 py-2.5 hover:bg-steel-deep transition-colors"
          >
            View the work →
          </a>
          <a
            href="mailto:adrianeracaza23@gmail.com"
            className="link-underline font-mono text-[13px] tracking-[0.06em] text-ink-soft hover:text-steel"
          >
            adrianeracaza23@gmail.com
          </a>
        </div>
      </div>

      <dl className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-rule border border-rule">
        {[
          { dt: "Standing", dd: "Cum Laude" },
          { dt: "GWA", dd: "1.6 / 1.2 scale" },
          { dt: "Dean's Lister", dd: "Yr 1 – Yr 4" },
          { dt: "Graduated", dd: "June 2026" },
        ].map((item) => (
          <div key={item.dt} className="bg-paper px-5 py-4">
            <dt className="eyebrow text-slate">{item.dt}</dt>
            <dd className="mt-1.5 font-display text-lg text-ink">{item.dd}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

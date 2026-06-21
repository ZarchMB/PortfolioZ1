import { SectionHeading } from "./SectionHeading";

const items = [
  {
    title: "Business Rules & Script Includes",
    detail:
      "Server-side scripting to enforce data integrity and encapsulate logic reused across modules.",
  },
  {
    title: "Client Scripts & UI Policies",
    detail:
      "Client-side behavior and field-level controls that respond to what a user is doing in the moment.",
  },
  {
    title: "Platform configuration",
    detail:
      "Access logic and business rules configured directly on the platform, low-code first.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 md:px-10 py-16 md:py-20">
      <SectionHeading index="02" title="Experience" />

      <div className="border border-rule">
        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
            <div>
              <h3 className="font-display text-xl md:text-2xl text-ink">
                ServiceNow Jumpstart Program
              </h3>
              <p className="mt-1 text-[14.5px] text-slate">
                Rococo Global Technologies Co.
              </p>
            </div>
            <span className="font-mono text-xs text-slate whitespace-nowrap pt-1">
              2024 — 2025
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            A structured training program inside ServiceNow&rsquo;s
            Personal Development Interface, built around a Task
            Management System used as the working example for enterprise
            platform patterns — the same patterns that run production
            ServiceNow instances, practiced in a sandboxed environment.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-px bg-rule border border-rule">
            {items.map((item) => (
              <div key={item.title} className="bg-paper-raised p-5">
                <h4 className="font-mono text-[12px] tracking-wide text-steel">
                  {item.title}
                </h4>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-soft">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { FlowDiagram } from "./FlowDiagram";
import { SectionHeading } from "./SectionHeading";

const stack = ["Firebase Realtime DB", "JavaScript", "Arduino C++", "React"];

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 md:px-10 py-16 md:py-20">
      <SectionHeading
        index="01"
        title="Selected work"
        description="Two projects, two different problems: one about getting live sensor data in front of a decision-maker, one about getting a records workflow off paper."
      />

      {/* Lead case study — ReForest */}
      <article className="border border-rule bg-paper-raised">
        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <span className="eyebrow text-steel">Capstone Project · Reforestation</span>
              <h3 className="mt-2 font-display text-2xl md:text-[1.75rem] text-ink">
                ReForest
              </h3>
              <p className="mt-1 text-[15px] text-ink-soft max-w-md">
                IoT-based soil analysis and tree recommendation system
              </p>
            </div>
            <span className="font-mono text-xs text-slate whitespace-nowrap pt-1">
              2025 — 2026
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            Soil sensors in the field are only useful if someone standing
            in the field can read them. ReForest pipes live moisture,
            temperature, and pH data from Arduino-based sensors into a
            Firebase-backed application, then converts that reading into a
            plain-language tree species recommendation — built as a
            web app wrapped for mobile, so it works on whatever a field
            worker is already carrying.
          </p>

          <div className="mt-8 -mx-2 overflow-x-auto no-scrollbar">
            <FlowDiagram className="min-w-[640px] w-full h-auto px-2" />
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div>
              <span className="eyebrow text-slate">My scope</span>
              <ul className="mt-3 space-y-2.5">
                <li className="text-[14.5px] text-ink-soft leading-relaxed pl-4 border-l border-rule-strong">
                  Built the user-facing application: live soil readings
                  rendered from a real-time Firebase sync, no manual
                  refresh required.
                </li>
                <li className="text-[14.5px] text-ink-soft leading-relaxed pl-4 border-l border-rule-strong">
                  Designed and implemented the recommendation feature —
                  the layer that turns a soil reading into a planting
                  decision.
                </li>
                <li className="text-[14.5px] text-ink-soft leading-relaxed pl-4 border-l border-rule-strong">
                  Coordinated with teammates on the Arduino sensor layer
                  and the ML model to keep the data contract consistent
                  end to end.
                </li>
              </ul>
            </div>
            <div>
              <span className="eyebrow text-slate">Stack</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11.5px] tracking-wide text-ink-soft border border-rule-strong px-2.5 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-[14.5px] text-ink-soft leading-relaxed">
                A team capstone — sensor hardware and the ML model were
                built alongside teammates; the application layer above
                was mine.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Secondary project — Student Enrollment System */}
      <article className="mt-8 border border-rule">
        <div className="p-6 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-start">
          <div>
            <span className="eyebrow text-steel">Academic Project</span>
            <h3 className="mt-2 font-display text-xl md:text-2xl text-ink">
              Student Enrollment System
            </h3>
            <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-ink-soft">
              A CRUD application for managing enrollment records and course
              data, built on ASP.NET Core MVC with a SQL Server backend.
              The brief was ordinary; the goal was a clean MVC structure
              and an interface that didn&rsquo;t make registrars think
              about the database underneath it.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["ASP.NET Core MVC", "Microsoft SQL Server", "C#"].map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] tracking-wide text-ink-soft border border-rule-strong px-2 py-1"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <span className="font-mono text-xs text-slate whitespace-nowrap md:text-right">
            2024 — 2025
          </span>
        </div>
      </article>
    </section>
  );
}

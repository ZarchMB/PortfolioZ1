import { SectionHeading } from "./SectionHeading";

const groups = [
  {
    label: "Languages",
    items: ["Java", "Kotlin", "Python", "PHP", "C++", "C#", "JavaScript", "SQL"],
  },
  {
    label: "Frameworks & Web",
    items: ["React.js", "Tailwind CSS", "Bootstrap", "ASP.NET Core MVC"],
  },
  {
    label: "Data",
    items: ["Firebase Realtime DB", "MongoDB", "MySQL", "MSSQL"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "Google Cloud Platform", "Arduino"],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto max-w-5xl px-6 md:px-10 py-16 md:py-20">
      <SectionHeading index="03" title="Capabilities" />

      <div className="divide-y divide-rule border-t border-b border-rule">
        {groups.map((group) => (
          <div
            key={group.label}
            className="grid sm:grid-cols-[180px_1fr] gap-3 sm:gap-8 py-5"
          >
            <span className="eyebrow text-slate pt-0.5">{group.label}</span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-display text-[16px] text-ink-soft"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

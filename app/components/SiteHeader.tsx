"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Capabilities" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-paper/90 backdrop-blur-sm border-b border-rule"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-[13px] tracking-[0.12em] text-ink-soft hover:text-steel transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          A.L.&nbsp;RACAZA
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="eyebrow link-underline text-ink-soft hover:text-steel"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/Racaza_Resume.pdf"
            className="hidden sm:inline font-mono text-[12px] tracking-[0.06em] border border-rule-strong px-3 py-1.5 text-ink-soft hover:border-steel hover:text-steel transition-colors"
            download
          >
            Résumé ↓
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          >
            <span
              className={`block h-px w-5 bg-ink-soft transition-transform ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink-soft transition-transform ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-rule bg-paper px-6 py-6 flex flex-col gap-5">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setMenuOpen(false)}
              className="eyebrow text-ink-soft"
            >
              {s.label}
            </a>
          ))}
          <a
            href="/Racaza_Resume.pdf"
            download
            className="font-mono text-[12px] tracking-[0.06em] border border-rule-strong px-3 py-2 text-ink-soft w-fit"
          >
            Résumé ↓
          </a>
        </nav>
      )}
    </header>
  );
}

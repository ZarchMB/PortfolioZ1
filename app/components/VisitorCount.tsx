"use client";

import { useEffect, useState } from "react";

export function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/visits", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setCount(data.count);
      })
      .catch(() => {
        if (!cancelled) setCount(null);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <span className="font-mono text-[11px] tracking-wide text-slate">
      {count.toLocaleString()} {count === 1 ? "visit" : "visits"}
    </span>
  );
}
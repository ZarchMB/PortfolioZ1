"use client";

import { useEffect, useState } from "react";

const API_URL = "https://api.countapi.xyz/hit/adrianeracaza.dev/visits";

export function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch(() => setCount(null)); // Fail silently
  }, []);

  if (count === null) return null; // Don't render anything if it fails

  return (
    <span className="font-mono text-[11px] tracking-wide text-slate">
      {count} views
    </span>
  );
}
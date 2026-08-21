"use client";

import { useState } from "react";

export default function CRTEffect() {
  const [enabled, setEnabled] = useState(true);

  if (!enabled) return null;

  return (
    <>
      <div className="crt-overlay" aria-hidden="true" />
      <button
        onClick={() => setEnabled(false)}
        className="fixed bottom-4 right-4 z-[10000] px-2 py-1 text-[10px] font-mono text-text-muted bg-surface border border-border hover:border-green hover:text-green transition-colors"
        aria-label="Disable CRT effect"
        title="Disable CRT scanline effect"
      >
        CRT
      </button>
    </>
  );
}

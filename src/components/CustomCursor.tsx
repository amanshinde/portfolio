"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [label, setLabel] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    // Only show on devices with fine pointer (mouse)
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const interactive = el.closest("a, button, [data-cursor]");
      if (interactive) {
        setIsHovered(true);
        const dataLabel = (interactive as HTMLElement).dataset.cursor;
        setLabel(dataLabel || "");
      } else {
        setIsHovered(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", checkHover, { passive: true });
    document.addEventListener("mouseleave", () => setIsVisible(false));

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  if (typeof window !== "undefined" && !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{ willChange: "transform" }}
    >
      <motion.div
        animate={{
          width: isHovered ? (label ? 64 : 32) : 6,
          height: isHovered ? (label ? 64 : 32) : 6,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="relative flex items-center justify-center"
        style={{
          background: isHovered ? "var(--accent)" : "var(--foreground)",
          mixBlendMode: isHovered ? "normal" : "difference",
        }}
      >
        {label && (
          <span
            className="text-[8px] font-mono font-bold text-black uppercase leading-tight tracking-wider text-center"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {label}
          </span>
        )}
      </motion.div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const raf = useRef<number>(0);

  useEffect(() => {
    // Only show on devices with fine pointer (mouse)
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setMounted(true);

    // Fallback: if any touch event fires, this is a touch device — hide cursor
    const onTouch = () => setMounted(false);
    window.addEventListener("touchstart", onTouch, { once: true, passive: true });

    const move = (e: MouseEvent) => {
      setIsVisible(true);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const interactive = el.closest("a, button, [data-cursor]");
      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", checkHover, { passive: true });
    document.addEventListener("mouseleave", () => setIsVisible(false));

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
      window.removeEventListener("touchstart", onTouch);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{ willChange: "transform" }}
    >
      <motion.div
        animate={{
          opacity: isVisible ? 1 : 0,
          background: isHovered ? "var(--accent)" : "var(--foreground)",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        style={{
          width: 6,
          height: 6,
          mixBlendMode: isHovered ? "normal" : "difference",
        }}
      />
    </div>
  );
}

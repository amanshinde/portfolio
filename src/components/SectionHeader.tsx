"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  label: string;
  className?: string;
}

export default function SectionHeader({
  number,
  label,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${className}`}
    >
      <div className="flex items-center gap-4">
        <span
          className="font-[family-name:var(--font-pixel)] text-[10px] text-green tracking-wider"
          style={{ fontFamily: "var(--font-pixel)" }}
        >
          {number}
        </span>
        <span className="text-text-muted font-mono text-sm">{"//"}</span>
        <span
          className="font-mono text-sm md:text-base tracking-widest text-text-primary uppercase"
        >
          {label}
        </span>
        <div className="flex-1 h-px bg-border ml-4" />
      </div>
    </motion.div>
  );
}

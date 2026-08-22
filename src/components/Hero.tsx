"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const codeLines = [
  { content: "const developer = {", color: "var(--muted)" },
  { content: '  name: "Aman Shinde",', color: "var(--foreground)" },
  { content: '  role: "Full Stack Developer",', color: "var(--foreground)" },
  { content: '  stack: ["React", "Node.js", "Python"],', color: "var(--foreground)" },
  { content: '  focus: ["MERN", "CV", "UI/UX"],', color: "var(--foreground)" },
  { content: '  status: "Available",', color: "var(--accent)" },
  { content: "}", color: "var(--muted)" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col"
      style={{ paddingTop: "72px" }}
    >
      <div className="container-full flex-1 flex flex-col justify-center py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start">

          {/* Left: Text — 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-12">
            {/* Meta label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3">
                <span className="label-mono">01 / Introduction</span>
                <span className="block h-px w-12" style={{ background: "var(--border)" }} />
                <span className="label-mono">Software Developer</span>
              </div>
            </motion.div>

            {/* Headline */}
            <div>
              <motion.h1
                className="heading-xl text-foreground leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I Build
                <br />
                <span style={{ color: "var(--muted)" }}>Digital</span>
                <br />
                Products.
              </motion.h1>

              <motion.p
                className="mt-8 text-base md:text-lg max-w-md leading-relaxed"
                style={{ color: "var(--muted)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                Full Stack Developer & CS Engineer. I build interfaces,
                backend systems and AI-powered applications with a focus
                on performance and clean design.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <Link href="/work" className="btn-primary" data-cursor="VIEW">
                  View Work →
                </Link>
                <a
                  href="mailto:shindeaman31@gmail.com"
                  className="btn-outline"
                  data-cursor="EMAIL"
                >
                  Let&apos;s Talk ↗
                </a>
              </motion.div>
            </div>

            {/* Bottom meta */}
            <motion.div
              className="flex flex-wrap gap-8 pt-8 border-t"
              style={{ borderColor: "var(--border)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              {[
                ["Location", "Belagavi, India"],
                ["Education", "B.E. Computer Science"],
                ["Focused on", "MERN · AI · UI/UX"],
              ].map(([label, val]) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="label-mono" style={{ fontSize: "9px" }}>{label}</span>
                  <span className="font-mono text-xs text-foreground">{val}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Code window — 5 cols */}
          <motion.div
            className="lg:col-span-5 lg:pl-16"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div
              className="w-full border"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              {/* Window chrome */}
              <div
                className="flex items-center justify-between px-4 py-3 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <span className="label-mono" style={{ fontSize: "10px" }}>developer.ts</span>
                <div className="flex gap-2">
                  {["bg-[#3a3a3a]", "bg-[#3a3a3a]", "bg-[var(--accent)]"].map((c, i) => (
                    <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                  ))}
                </div>
              </div>

              {/* Code content */}
              <div className="p-5 md:p-6">
                <pre className="font-mono text-xs md:text-sm leading-loose overflow-x-auto">
                  <code>
                    {codeLines.map((line, i) => (
                      <motion.div
                        key={i}
                        className="flex"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: 0.4 + i * 0.08 }}
                      >
                        <span
                          className="select-none w-6 mr-4 text-right"
                          style={{ color: "var(--border)", fontSize: "10px" }}
                        >
                          {i + 1}
                        </span>
                        <span style={{ color: line.color }}>{line.content}</span>
                      </motion.div>
                    ))}
                    {/* Blinking cursor */}
                    <motion.div
                      className="flex mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <span className="select-none w-6 mr-4" style={{ color: "var(--border)", fontSize: "10px" }}>8</span>
                      <span className="inline-block w-2 h-4 animate-blink" style={{ background: "var(--accent)" }} />
                    </motion.div>
                  </code>
                </pre>
              </div>

              {/* Status bar */}
              <div
                className="flex items-center justify-between px-4 py-2 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <span className="label-mono" style={{ fontSize: "9px" }}>TypeScript</span>
                <span className="label-mono" style={{ fontSize: "9px", color: "var(--accent)" }}>
                  ● Available
                </span>
              </div>
            </div>

            {/* Decorative large text */}
            <div
              className="hidden lg:block mt-8 select-none"
              style={{ color: "var(--border)", fontSize: "7rem", fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 1 }}
              aria-hidden
            >
              {"</>"}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="container-full pb-8 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="label-mono" style={{ fontSize: "9px" }}>Scroll to explore</span>
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="label-mono"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}

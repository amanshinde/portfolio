"use client";

import { motion } from "framer-motion";

const capabilities = [
  { number: "01", label: "Frontend", detail: "React · JS · HTML/CSS" },
  { number: "02", label: "Full Stack", detail: "Node · Express · MongoDB" },
  { number: "03", label: "UI / UX", detail: "Figma · Design Systems" },
  { number: "04", label: "AI / ML", detail: "Python · OpenCV · CV" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-full">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <span className="label-mono">01</span>
          <span className="block flex-1 h-px" style={{ background: "var(--border)" }} />
          <span className="label-mono">About</span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">
          {/* Left: Large paragraph — 7 cols */}
          <motion.div
            className="lg:col-span-7 lg:pr-20 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex flex-col gap-6">
              <p
                className="font-sans text-2xl md:text-3xl xl:text-4xl leading-tight font-medium"
                style={{ letterSpacing: "-0.02em", color: "var(--foreground)" }}
              >
                I&apos;m a Computer Science engineer who works across
                development, design, and AI.
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                I build software that prioritizes usability and clean architecture.
                My background spans full-stack web development, computer vision,
                and UI/UX design — I&apos;m comfortable working across the entire stack.
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Currently pursuing a B.E. in Computer Science. Previously interned
                at SS Inphinite LLP building MERN-stack applications, and at Dlithe
                Consultancy developing Python-based systems.
              </p>
            </div>

            <div className="mt-10 md:mt-14 flex flex-wrap gap-6">
              <a
                href="/resume1.pdf"
                download="Aman_Shinde_Resume.pdf"
                className="btn-outline"
                data-cursor="OPEN"
              >
                Download CV ↗
              </a>
            </div>
          </motion.div>

          {/* Right: Capabilities — 5 cols */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="label-mono text-xs md:text-sm mb-8 tracking-wider" style={{ color: "var(--accent)" }}>Technical Interests</p>
            <div className="flex flex-col">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.number}
                  className="group flex items-start gap-6 py-7 md:py-8 border-b transition-colors duration-200"
                  style={{ borderColor: "var(--border)" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.25 + i * 0.07 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="label-mono pt-1 text-xs md:text-sm">{cap.number}</span>
                  <div className="flex-1">
                    <div
                      className="font-sans font-black uppercase tracking-tight text-lg md:text-xl group-hover:text-[var(--accent)] transition-colors"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {cap.label}
                    </div>
                    <div className="label-mono mt-2" style={{ fontSize: "11px" }}>{cap.detail}</div>
                  </div>
                  <span className="label-mono text-base opacity-0 group-hover:opacity-100 transition-opacity pt-1">→</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

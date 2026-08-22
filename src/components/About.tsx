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
          <span className="label-mono">02</span>
          <span className="block flex-1 h-px" style={{ background: "var(--border)" }} />
          <span className="label-mono">About</span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">
          {/* Left: Large paragraph — 7 cols */}
          <motion.div
            className="lg:col-span-7 lg:pr-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p
              className="font-sans text-2xl md:text-3xl xl:text-4xl leading-tight font-medium"
              style={{ letterSpacing: "-0.02em", color: "var(--foreground)" }}
            >
              I&apos;m a Computer Science engineer who works across
              development, design, and AI.
            </p>
            <p
              className="mt-8 text-base md:text-lg leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              I build software that prioritizes usability and clean architecture.
              My background spans full-stack web development, computer vision,
              and UI/UX design — I&apos;m comfortable working across the entire stack.
            </p>
            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Currently pursuing a B.E. in Computer Science. Previously interned
              at SS Inphinite LLP building MERN-stack applications, and at Dlithe
              Consultancy developing Python-based systems.
            </p>

            <div className="mt-12 flex flex-wrap gap-6">
              <a
                href="/resume.pdf"
                download
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
            <p className="label-mono mb-8">Technical Interests</p>
            <div className="flex flex-col">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.number}
                  className="group flex items-start gap-6 py-5 border-b transition-colors duration-200"
                  style={{ borderColor: "var(--border)" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.25 + i * 0.07 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="label-mono pt-0.5">{cap.number}</span>
                  <div className="flex-1">
                    <div
                      className="font-sans font-bold uppercase tracking-tight text-base group-hover:text-[var(--accent)] transition-colors"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {cap.label}
                    </div>
                    <div className="label-mono mt-1" style={{ fontSize: "10px" }}>{cap.detail}</div>
                  </div>
                  <span className="label-mono opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

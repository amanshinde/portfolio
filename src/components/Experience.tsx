"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-full">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="label-mono">04</span>
          <span className="block flex-1 h-px" style={{ background: "var(--border)" }} />
          <span className="label-mono">Experience</span>
        </motion.div>

        <motion.h2
          className="heading-lg mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Where I&apos;ve Worked.
        </motion.h2>

        {/* Timeline list */}
        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 py-12 border-t"
              style={{ borderColor: "var(--border)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Date range — 2 cols */}
              <div className="md:col-span-2">
                <span className="label-mono" style={{ fontSize: "10px" }}>
                  {exp.startDate}—{exp.endDate}
                </span>
              </div>

              {/* Company + role — 5 cols */}
              <div className="md:col-span-5 md:px-8">
                <h3
                  className="font-sans font-black text-xl uppercase"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {exp.company}
                </h3>
                <p
                  className="label-mono mt-1"
                  style={{ color: "var(--accent)", fontSize: "10px" }}
                >
                  {exp.role}
                </p>
                <p className="label-mono mt-1" style={{ fontSize: "10px" }}>
                  {exp.location}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="label-mono border px-2 py-1"
                      style={{ borderColor: "var(--border)", fontSize: "9px" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contributions — 5 cols */}
              <div className="md:col-span-5">
                <ul className="flex flex-col gap-3">
                  {exp.contributions.map((c, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      <span style={{ color: "var(--border)" }}>—</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

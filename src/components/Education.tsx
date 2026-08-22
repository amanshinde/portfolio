"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-full">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="label-mono">07</span>
          <span className="block flex-1 h-px" style={{ background: "var(--border)" }} />
          <span className="label-mono">Education</span>
        </motion.div>

        <motion.h2
          className="heading-lg mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Academic Background.
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-t"
          style={{ borderColor: "var(--border)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {/* Date */}
          <div className="lg:col-span-2 py-8 lg:pr-8 border-b" style={{ borderColor: "var(--border)" }}>
            <span className="label-mono" style={{ fontSize: "10px" }}>Dec. 2022 — May 2026</span>
          </div>

          {/* Content */}
          <div className="lg:col-span-10 py-8 lg:pl-12 border-b" style={{ borderColor: "var(--border)" }}>
            <h3
              className="font-sans font-black text-xl md:text-2xl uppercase"
              style={{ letterSpacing: "-0.03em" }}
            >
              Jain College of Engineering and Research
            </h3>
            <p className="label-mono mt-2" style={{ color: "var(--accent)", fontSize: "10px" }}>
              Bachelor of Engineering — Computer Science and Engineering
            </p>
            <p className="label-mono mt-1" style={{ fontSize: "10px" }}>
              Belagavi, Karnataka
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

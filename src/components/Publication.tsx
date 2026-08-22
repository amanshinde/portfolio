"use client";

import { motion } from "framer-motion";

export default function Publication() {
  return (
    <section id="publication" className="section">
      <div className="container-full">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="label-mono">06</span>
          <span className="block flex-1 h-px" style={{ background: "var(--border)" }} />
          <span className="label-mono">Research</span>
        </motion.div>

        <motion.h2
          className="heading-lg mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Published Work.
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-t"
          style={{ borderColor: "var(--border)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {/* Label */}
          <div className="lg:col-span-2 py-8 lg:pr-8 border-b" style={{ borderColor: "var(--border)" }}>
            <span className="label-mono" style={{ color: "var(--accent)" }}>IEEE INCET 2025</span>
            <p className="label-mono mt-1" style={{ fontSize: "10px" }}>Sept. 2025</p>
          </div>

          {/* Content */}
          <div className="lg:col-span-10 py-8 lg:pl-12 border-b" style={{ borderColor: "var(--border)" }}>
            <h3
              className="font-sans font-black text-xl md:text-2xl uppercase"
              style={{ letterSpacing: "-0.03em" }}
            >
              Smart Vision for Silent Voices
            </h3>
            <p className="label-mono mt-2 mb-6">
              A Review of Sign Language Recognition Technologies
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)", maxWidth: "48rem" }}>
              Published at the International Conference on Emerging Trends 2025.
              Reviews state-of-the-art approaches to Indian Sign Language recognition,
              covering computer vision, deep learning, and real-time gesture systems.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <span className="label-mono" style={{ fontSize: "10px" }}>
                DOI: 10.1109/INCET64471.2025.11139951
              </span>
              <a
                href="https://doi.org/10.1109/INCET64471.2025.11139951"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ padding: "8px 16px", fontSize: "10px" }}
                data-cursor="OPEN"
              >
                View Publication ↗
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

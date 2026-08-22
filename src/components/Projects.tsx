"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectRow from "./ProjectRow";

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="container-full">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="label-mono">03</span>
          <span className="block flex-1 h-px" style={{ background: "var(--border)" }} />
          <span className="label-mono">Selected Work</span>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="heading-lg" style={{ color: "var(--foreground)" }}>
            Projects.
          </h2>
        </motion.div>

        {/* Border top */}
        <div className="border-t" style={{ borderColor: "var(--border)" }}>
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

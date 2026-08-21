"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader number="03" label="SELECTED_WORK" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-text-secondary text-sm md:text-base leading-relaxed mb-12 max-w-2xl"
        >
          Projects built across web development, computer vision, automation,
          and intelligent systems.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Decorative element */}
        <div className="mt-12 text-center font-mono text-xs text-text-muted/30" aria-hidden="true">
          git commit -m &quot;build something meaningful&quot;
        </div>
      </div>
    </section>
  );
}

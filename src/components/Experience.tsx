"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader number="02" label="EXPERIENCE" />

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border"
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[11px] md:left-[27px] top-1 w-3 h-3 border-2 border-green bg-background z-10"
                  aria-hidden="true"
                />

                {/* Card */}
                <div className="pixel-border bg-surface p-5 md:p-7 group hover:border-border-hover transition-colors duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-mono text-base md:text-lg text-text-primary mb-1">
                        {exp.company}
                      </h3>
                      <p className="font-mono text-xs text-green tracking-wider">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 sm:text-right text-xs font-mono text-text-muted shrink-0">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={11} />
                        {exp.startDate} — {exp.endDate}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Contributions */}
                  <ul className="space-y-2 mb-5">
                    {exp.contributions.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-text-secondary text-xs md:text-sm leading-relaxed"
                      >
                        <span className="text-green mt-0.5 shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[10px] font-mono tracking-wider border border-border text-text-muted hover:text-green hover:border-green/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

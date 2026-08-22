"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectRowProps {
  project: Project;
  index: number;
}

export default function ProjectRow({ project, index }: ProjectRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={rowRef}
      className="relative group border-b overflow-hidden"
      style={{ borderColor: "var(--border)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      data-cursor="VIEW"
    >
      {/* Hover background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ background: "var(--surface)" }}
      />

      {/* Row content */}
      <div className="relative z-10 grid grid-cols-12 gap-4 items-start px-0 py-8 md:py-10">
        {/* Number */}
        <div className="col-span-1 flex items-start pt-1">
          <span
            className="label-mono"
            style={{ color: isHovered ? "var(--accent)" : "var(--border)", fontSize: "10px", transition: "color 0.2s" }}
          >
            {project.number}
          </span>
        </div>

        {/* Title + stack */}
        <div className="col-span-11 md:col-span-5">
          <h3
            className="heading-md transition-colors duration-200"
            style={{ color: isHovered ? "var(--accent)" : "var(--foreground)" }}
          >
            {project.title}
          </h3>
          <p className="label-mono mt-2">{project.subtitle}</p>
        </div>

        {/* Description */}
        <div className="col-span-11 col-start-2 md:col-span-4 md:col-start-auto">
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech) => (
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

        {/* CTA */}
        <div className="col-span-11 col-start-2 md:col-span-2 md:col-start-auto flex flex-col items-start md:items-end gap-2 pt-1">
          <span className="label-mono" style={{ fontSize: "10px" }}>2026</span>
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono transition-colors"
              style={{ color: isHovered ? "var(--accent)" : "var(--muted)", fontSize: "10px" }}
            >
              GitHub ↗
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono transition-colors"
              style={{ color: isHovered ? "var(--accent)" : "var(--muted)", fontSize: "10px" }}
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

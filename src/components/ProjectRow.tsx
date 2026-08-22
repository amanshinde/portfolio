"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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

          {/* Project Screenshot Preview if available */}
          {project.image && (
            <div className="mt-6 border border-border overflow-hidden bg-[#0d0d0d] group-hover:border-[var(--accent)]/40 transition-colors duration-300">
              <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-surface text-[10px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#333]" />
                  <span className="w-2 h-2 rounded-full bg-[#333]" />
                  <span className="w-2 h-2 rounded-full bg-[#333]" />
                  <span className="ml-2 text-muted truncate max-w-[180px] sm:max-w-[260px]">
                    {project.liveUrl || project.title}
                  </span>
                </div>
                {project.liveUrl && (
                  <span className="text-[9px] text-[var(--accent)] flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                    LIVE
                  </span>
                )}
              </div>
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="col-span-11 col-start-2 md:col-span-4 md:col-start-auto">
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {project.description}
          </p>

          {/* Features highlight */}
          {project.features && project.features.length > 0 && (
            <div className="mt-4 space-y-1.5 border-t border-border/50 pt-3">
              {project.features.slice(0, 3).map((feat, fi) => (
                <div key={fi} className="flex items-start gap-2 text-xs text-muted font-mono">
                  <span className="text-[var(--accent)]">›</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          )}

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
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs px-3 py-1.5 mt-2"
              style={{ fontSize: "10px" }}
              data-cursor="OPEN"
            >
              Visit Live ↗
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono transition-colors mt-1"
              style={{ color: isHovered ? "var(--accent)" : "var(--muted)", fontSize: "10px" }}
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

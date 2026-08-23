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
      style={{
        borderColor: "var(--border)",
        paddingTop: "clamp(32px, 5vw, 64px)",
        paddingBottom: "clamp(32px, 5vw, 64px)",
      }}
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

      {/* Row content - Left flush with page heading */}
      <div className="relative z-10 grid grid-cols-12 gap-8 lg:gap-16 items-start px-0">
        {/* Left Column: Number, Title, Subtitle, Preview */}
        <div className="col-span-12 md:col-span-6">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="label-mono font-bold"
              style={{ color: isHovered ? "var(--accent)" : "var(--border)", fontSize: "11px", transition: "color 0.2s" }}
            >
              {project.number}
            </span>
            <span className="block h-px w-6" style={{ background: "var(--border)" }} />
            <span className="label-mono" style={{ fontSize: "10px" }}>{project.subtitle}</span>
          </div>

          <h3
            className="heading-md transition-colors duration-200"
            style={{ color: isHovered ? "var(--accent)" : "var(--foreground)" }}
          >
            {project.title}
          </h3>

          {/* Project Screenshot Preview */}
          {project.image && (
            <div className="mt-6 border border-border overflow-hidden bg-[#0d0d0d] group-hover:border-[var(--accent)]/40 transition-colors duration-300">
              <div className="flex items-center justify-between px-3 py-1.5 border-b border-border bg-surface text-[10px] font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#333]" />
                  <span className="w-2 h-2 rounded-full bg-[#333]" />
                  <span className="w-2 h-2 rounded-full bg-[#333]" />
                  <span className="ml-2 text-muted truncate max-w-[180px] sm:max-w-[240px]">
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
              <div className="relative w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1536}
                  height={730}
                  loading="eager"
                  priority={index < 3}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 600px"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Description, Features, Tech Stack, CTA */}
        <div className="col-span-12 md:col-span-6 md:self-center flex flex-col gap-6">
          {/* Paragraph */}
          <p
            className="text-base md:text-[17px] leading-relaxed font-normal"
            style={{ color: "var(--foreground)", opacity: 0.9 }}
          >
            {project.description}
          </p>

          {/* Features highlight with clean gap between each item */}
          {project.features && project.features.length > 0 && (
            <div className="border-t border-border/50 pt-4 flex flex-col gap-2.5">
              {project.features.slice(0, 3).map((feat, fi) => (
                <div key={fi} className="flex items-start gap-2.5 text-xs md:text-sm text-muted font-mono leading-relaxed">
                  <span className="text-[var(--accent)] text-sm shrink-0">›</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="label-mono border px-3 py-1.5 font-medium tracking-normal text-xs transition-colors"
                style={{ borderColor: "var(--border)", fontSize: "11px" }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          {(project.liveUrl || (project.githubUrl && project.githubUrl !== "#")) && (
            <div className="flex items-center gap-4 pt-2 border-t border-border/50">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs px-4 py-2"
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
                  className="label-mono transition-colors hover:text-[var(--accent)]"
                  style={{ color: isHovered ? "var(--accent)" : "var(--muted)", fontSize: "11px" }}
                >
                  GitHub Repository ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

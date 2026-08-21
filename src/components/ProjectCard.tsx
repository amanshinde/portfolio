"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const colSpanClass = index % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5";

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`group relative pixel-border bg-surface overflow-hidden cursor-pointer hover:border-border-hover transition-all duration-300 ${colSpanClass}`}
        onClick={() => setExpanded(true)}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${project.title}`}
        onKeyDown={(e) => e.key === "Enter" && setExpanded(true)}
      >
        {/* Terminal Visual */}
        <div className="p-4 md:p-5 bg-surface-light border-b border-border overflow-x-auto shadow-inner">
          <div className="flex items-center gap-2 mb-3 text-text-muted text-[10px] font-mono">
            <span className="w-2 h-2 rounded-full bg-yellow" />
            <span>project/{project.id}</span>
          </div>
          <pre className="font-mono text-[10px] md:text-xs leading-relaxed text-text-muted">
            {project.terminalVisual.map((line, i) => (
              <div key={i} className="whitespace-pre">
                {highlightTerminalLine(line)}
              </div>
            ))}
          </pre>
        </div>

        {/* Card Content */}
        <div className="p-5 md:p-6">
          {/* Number + Title */}
          <div className="flex items-start gap-4 mb-3">
            <span
              className="text-[10px] text-text-muted/40 mt-1"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              {project.number}
            </span>
            <div>
              <h3 className="font-mono text-lg md:text-xl text-text-primary group-hover:text-yellow transition-colors">
                {project.title}
              </h3>
              <p
                className="text-[9px] tracking-[0.2em] text-text-muted mt-1"
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-text-secondary text-xs md:text-sm leading-relaxed mb-4 ml-9 md:ml-10">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 ml-9 md:ml-10">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] font-mono tracking-wider border border-border text-text-muted group-hover:text-yellow group-hover:border-yellow/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover indicator */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-text-muted text-[10px] font-mono">
            CLICK TO EXPAND ▸
          </span>
        </div>
      </motion.article>

      {/* Detail Modal */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setExpanded(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="pixel-border bg-surface max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b border-border">
                <div className="flex items-center gap-3">
                  <span
                    className="text-[10px] text-yellow"
                    style={{ fontFamily: "var(--font-pixel)" }}
                  >
                    {project.number}
                  </span>
                  <span className="font-mono text-sm text-text-muted">
                    PROJECT_DETAILS
                  </span>
                </div>
                <button
                  onClick={() => setExpanded(false)}
                  className="p-1 text-text-muted hover:text-text-primary transition-colors"
                  aria-label="Close project details"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 md:p-7 space-y-6">
                {/* Title */}
                <div>
                  <h3 className="font-mono text-2xl text-text-primary mb-1">
                    {project.title}
                  </h3>
                  <p
                    className="text-[9px] tracking-[0.2em] text-yellow"
                    style={{ fontFamily: "var(--font-pixel)" }}
                  >
                    {project.subtitle}
                  </p>
                </div>

                {/* Overview */}
                <div>
                  <h4 className="font-mono text-xs text-text-muted mb-2 tracking-wider">
                    01 / OVERVIEW
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-mono text-xs text-text-muted mb-3 tracking-wider">
                    02 / TECHNOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[10px] font-mono tracking-wider border border-yellow/30 text-yellow bg-yellow/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-mono text-xs text-text-muted mb-3 tracking-wider">
                    03 / FEATURES
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-text-secondary text-sm"
                      >
                        <span className="text-yellow shrink-0">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Terminal */}
                <div>
                  <h4 className="font-mono text-xs text-text-muted mb-3 tracking-wider">
                    04 / IMPLEMENTATION
                  </h4>
                  <div className="bg-[#0a0a0a] pixel-border p-4 overflow-x-auto">
                    <pre className="font-mono text-[10px] md:text-xs leading-relaxed text-text-muted">
                      {project.terminalVisual.map((line, i) => (
                        <div key={i} className="whitespace-pre">
                          {highlightTerminalLine(line)}
                        </div>
                      ))}
                    </pre>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border text-text-secondary font-mono text-xs tracking-wider hover:border-green hover:text-green transition-colors"
                    >
                      <GithubIcon size={14} />
                      GITHUB
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-green/30 text-green font-mono text-xs tracking-wider hover:bg-green/10 transition-colors"
                    >
                      <ExternalLink size={14} />
                      LIVE DEMO
                    </a>
                  )}
                  <button
                    onClick={() => setExpanded(false)}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border text-text-muted font-mono text-xs tracking-wider hover:text-text-primary transition-colors ml-auto"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/** Highlight terminal visual lines */
function highlightTerminalLine(line: string): React.ReactNode {
  // Highlight status indicators
  if (line.includes("● LIVE") || line.includes("● MONITORING") || line.includes("● Connected") || line.includes("● Running") || line.includes("● Presenting")) {
    return <span className="text-green">{line}</span>;
  }
  if (line.includes("✓") || line.includes("STATUS:") || line.includes("COMPLETE")) {
    return <span className="text-green/80">{line}</span>;
  }
  if (line.includes("$")) {
    const parts = line.split("$");
    return (
      <>
        <span className="text-cyan">{parts[0]}$</span>
        <span className="text-text-primary">{parts.slice(1).join("$")}</span>
      </>
    );
  }
  return <span>{line}</span>;
}

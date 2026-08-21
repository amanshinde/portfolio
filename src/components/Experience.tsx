"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/data/experience";

// Helper to generate a fake git commit hash
const generateHash = (id: string) => {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    const char = id.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).substring(0, 7).padStart(7, '0');
};

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader number="02" label="EXPERIENCE" />

        <div className="mb-8 font-mono text-xs text-text-muted">
          <span className="text-yellow">aman@portfolio</span>
          <span className="text-text-secondary">~/experience</span>
          <br />
          $ git log --oneline --graph --experience
        </div>

        <div className="relative font-mono text-sm">
          {/* Main Git branch line */}
          <div className="absolute left-[11px] top-4 bottom-8 w-px bg-border z-0" />

          <div className="space-y-2">
            {experiences.map((exp, i) => {
              const isExpanded = expandedId === exp.id;
              const hash = generateHash(exp.id + exp.company);

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="relative group z-10"
                >
                  {/* Git Commit Header Row */}
                  <div 
                    className={`flex items-start gap-4 p-2 -ml-2 rounded hover:bg-surface/50 cursor-pointer transition-colors ${isExpanded ? 'bg-surface/30' : ''}`}
                    onClick={() => toggleExpand(exp.id)}
                  >
                    {/* Branch node */}
                    <div className="relative pt-1 z-10 shrink-0">
                      <div className={`w-3 h-3 rounded-full border-2 border-surface flex items-center justify-center ${isExpanded ? 'bg-yellow' : 'bg-border group-hover:bg-text-muted'}`}>
                        {isExpanded && <div className="w-1 h-1 bg-black rounded-full" />}
                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span className="text-yellow font-bold">{hash}</span>
                      <span className="text-text-primary whitespace-nowrap">{exp.role} <span className="text-text-muted">at</span> {exp.company}</span>
                      <span className="text-text-muted text-xs ml-auto whitespace-nowrap hidden sm:block">({exp.startDate} - {exp.endDate})</span>
                      {isExpanded ? 
                        <ChevronDown size={14} className="text-text-muted ml-auto sm:ml-0" /> : 
                        <ChevronRight size={14} className="text-text-muted ml-auto sm:ml-0" />
                      }
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 py-4 pr-4 border-l-2 border-yellow/20 ml-[10px] my-1 space-y-6 bg-gradient-to-r from-yellow/5 to-transparent">
                          
                          {/* Metadata */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-text-muted">
                            <div>
                              <span className="text-text-secondary">Author:</span> Aman Shinde
                            </div>
                            <div>
                              <span className="text-text-secondary">Date:</span> {exp.startDate} - {exp.endDate}
                            </div>
                            <div className="sm:col-span-2">
                              <span className="text-text-secondary">Location:</span> {exp.location}
                            </div>
                          </div>

                          {/* Contributions */}
                          <div>
                            <div className="text-text-secondary mb-3 text-xs tracking-widest border-b border-border/50 pb-2 inline-block">CONTRIBUTIONS</div>
                            <ul className="space-y-3">
                              {exp.contributions.map((item, j) => (
                                <li key={j} className="flex gap-3 text-text-primary text-xs leading-relaxed">
                                  <span className="text-yellow shrink-0 mt-0.5">{"+"}</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech Stack */}
                          <div>
                            <div className="text-text-secondary mb-3 text-xs tracking-widest border-b border-border/50 pb-2 inline-block">TECH_STACK</div>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-surface border border-border text-[10px] text-cyan"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

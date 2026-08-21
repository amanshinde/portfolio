"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Publication() {
  return (
    <section id="publication" className="relative py-24 md:py-32">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader number="05" label="RESEARCH" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="pixel-border bg-surface p-6 md:p-8 group hover:border-border-hover transition-colors duration-300">
            {/* Research icon and venue */}
            <div className="flex items-center gap-3 mb-6">
              <BookOpen size={16} className="text-purple" />
              <span className="font-mono text-xs text-purple tracking-wider">
                IEEE INCET 2025
              </span>
              <span className="text-text-muted text-xs font-mono">•</span>
              <span className="font-mono text-xs text-text-muted">
                September 2025
              </span>
            </div>

            {/* Title */}
            <h3 className="font-mono text-lg md:text-xl text-text-primary mb-2 leading-snug">
              Smart Vision for Silent Voices
            </h3>
            <p className="text-text-secondary text-sm md:text-base mb-6">
              A Review of Sign Language Recognition Technologies
            </p>

            {/* DOI */}
            <div className="flex items-center gap-2 mb-6 p-3 bg-surface-light border border-border font-mono text-xs">
              <span className="text-text-muted">DOI:</span>
              <a
                href="https://doi.org/10.1109/INCET64471.2025.11139951"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:text-green transition-colors break-all"
              >
                10.1109/INCET64471.2025.11139951
              </a>
            </div>

            {/* CTA */}
            <a
              href="https://doi.org/10.1109/INCET64471.2025.11139951"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-purple/40 text-purple font-mono text-xs tracking-wider hover:bg-purple/10 transition-colors"
            >
              <ExternalLink size={13} />
              VIEW PUBLICATION
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

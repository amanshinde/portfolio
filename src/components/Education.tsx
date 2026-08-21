"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 bg-surface/30">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader number="06" label="EDUCATION" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="pixel-border bg-surface p-5 md:p-7">
            <div className="flex items-start gap-4">
              <div className="p-2 border border-green/30 bg-green/5 shrink-0 mt-1">
                <GraduationCap size={18} className="text-green" />
              </div>
              <div>
                <h3 className="font-mono text-base md:text-lg text-text-primary mb-1">
                  Jain College of Engineering and Research
                </h3>
                <p className="font-mono text-xs text-green tracking-wider mb-3">
                  Bachelor of Engineering — Computer Science and Engineering
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 text-xs font-mono text-text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={11} />
                    Dec. 2022 — May 2026
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={11} />
                    Belagavi, Karnataka
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

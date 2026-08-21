"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skillCategories } from "@/data/skills";

const accentMap = {
  green: {
    text: "text-green",
    bar: "bg-green",
    barDim: "bg-green/20",
    border: "border-green/20",
    icon: "text-green",
  },
  cyan: {
    text: "text-cyan",
    bar: "bg-cyan",
    barDim: "bg-cyan/20",
    border: "border-cyan/20",
    icon: "text-cyan",
  },
  purple: {
    text: "text-purple",
    bar: "bg-purple",
    barDim: "bg-purple/20",
    border: "border-purple/20",
    icon: "text-purple",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader number="04" label="TECH_STACK" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category, i) => {
            const colors = accentMap[category.accent];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`pixel-border bg-surface p-5 hover:border-border-hover transition-colors duration-300`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`font-mono text-xs ${colors.icon}`}
                  >
                    {category.icon}
                  </span>
                  <h3
                    className="text-[9px] tracking-[0.2em] text-text-primary"
                    style={{ fontFamily: "var(--font-pixel)" }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs text-text-secondary">
                          {skill.name}
                        </span>
                      </div>
                      <div className={`w-full h-1.5 ${colors.barDim} overflow-hidden`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${skill.level * 20}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut",
                          }}
                          className={`h-full ${colors.bar}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <p className="mt-8 text-center font-mono text-[10px] text-text-muted/50">
          Bars indicate relative familiarity across categories, not absolute proficiency metrics.
        </p>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skillCategories } from "@/data/skills";

const accentMap: Record<string, string> = {
  green: "text-yellow",
  cyan: "text-cyan",
  purple: "text-green",
};

export default function Skills() {
  // Split into two columns for better layout on desktop
  const leftCol = skillCategories.slice(0, 3);
  const rightCol = skillCategories.slice(3, 6);

  const renderTree = (categories: typeof skillCategories) => (
    <div className="font-mono text-sm leading-7">
      <div className="text-text-primary mb-2">.</div>
      {categories.map((category, i) => {
        const isLastCategory = i === categories.length - 1;
        const colorClass = accentMap[category.accent] || "text-yellow";

        return (
          <div key={category.id}>
            <div className="flex">
              <span className="text-border-hover whitespace-pre">{isLastCategory ? '└── ' : '├── '}</span>
              <span className={`${colorClass} font-bold tracking-wider`}>{category.title}</span>
            </div>
            {category.skills.map((skill, j) => {
              const isLastSkill = j === category.skills.length - 1;
              return (
                <div key={skill.name} className="flex hover:bg-surface/50 transition-colors">
                  <span className="text-border-hover whitespace-pre">{isLastCategory ? '    ' : '│   '}</span>
                  <span className="text-border-hover whitespace-pre">{isLastSkill ? '└── ' : '├── '}</span>
                  <span className="text-text-secondary hover:text-text-primary transition-colors">{skill.name}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );

  return (
    <section id="skills" className="relative py-24 md:py-10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader number="04" label="TECH_STACK" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="pixel-border bg-surface shadow-2xl overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-surface-light border-b border-border px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow/80" />
            <div className="w-3 h-3 rounded-full bg-green/80" />
            <div className="text-text-muted text-[10px] font-mono ml-4 select-none">
              ~/skills/dependency-tree
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-8 overflow-x-auto">
            <div className="mb-6 font-mono text-xs text-text-muted">
              <span className="text-yellow">aman@portfolio</span>
              <span className="text-text-secondary">~/skills</span>
              <br />
              $ tree -L 2 ./tech_stack
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              {renderTree(leftCol)}
              {renderTree(rightCol)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

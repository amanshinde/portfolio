"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const skillColumns = [
  {
    category: "Frontend",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Python"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL", "SQL"],
  },
  {
    category: "Design",
    skills: ["Figma", "UI / UX", "Prototyping", "Adobe Illustrator", "Photoshop"],
  },
  {
    category: "AI / CV",
    skills: ["OpenCV", "dlib", "MediaPipe", "Computer Vision", "Generative AI"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "PyCharm", "C", "C++"],
  },
];

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="section">
      <div className="container-full">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="label-mono">05</span>
          <span className="block flex-1 h-px" style={{ background: "var(--border)" }} />
          <span className="label-mono">Capabilities</span>
        </motion.div>

        <motion.h2
          className="heading-lg mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Tech Stack.
        </motion.h2>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l"
          style={{ borderColor: "var(--border)" }}>
          {skillColumns.map((col, ci) => (
            <motion.div
              key={col.category}
              className="border-r border-b p-6 flex flex-col gap-4"
              style={{ borderColor: "var(--border)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.06 }}
            >
              <span className="label-mono" style={{ color: "var(--accent)", fontSize: "10px" }}>
                {col.category}
              </span>
              <ul className="flex flex-col gap-2.5">
                {col.skills.map((skill) => (
                  <li key={skill}>
                    <span
                      className="font-sans font-semibold text-sm transition-colors duration-150"
                      style={{
                        color: hovered === skill ? "var(--accent)" : "var(--foreground)",
                        letterSpacing: "-0.01em",
                      }}
                      onMouseEnter={() => setHovered(skill)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

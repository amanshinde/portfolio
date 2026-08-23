"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SkillItem {
  name: string;
  icon?: string;
}

interface SkillColumn {
  category: string;
  skills: SkillItem[];
}

const skillColumns: SkillColumn[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "/skills/react.svg" },
      { name: "JavaScript", icon: "/skills/javascript.svg" },
      { name: "HTML5", icon: "/skills/html5.svg" },
      { name: "CSS3", icon: "/skills/css3.svg" },
      { name: "JSON", icon: "/skills/json.svg" },
      { name: "REST APIs" },
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "Python", icon: "/skills/python.svg" },
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "Express.js", icon: "/skills/express.svg" },
      { name: "C", icon: "/skills/c.svg" },
      { name: "C++", icon: "/skills/cplusplus.svg" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "MySQL", icon: "/skills/mysql.svg" },
    ],
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git", icon: "/skills/git.svg" },
      { name: "GitHub", icon: "/skills/github.svg" },
      { name: "VS Code", icon: "/skills/vscode.svg" },
      { name: "PyCharm", icon: "/skills/pycharm.svg" },
    ],
  },
  {
    category: "Design Tools",
    skills: [
      { name: "Figma", icon: "/skills/figma.svg" },
      { name: "Illustrator", icon: "/skills/illustrator.svg" },
      { name: "Photoshop", icon: "/skills/photoshop.svg" },
      { name: "Canva", icon: "/skills/canva.svg" },
      { name: "SketchBook", icon: "/skills/sketchbook.svg" },
    ],
  },
];

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="pt-6 md:pt-10 pb-32">
      <div className="container-full">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="label-mono">04</span>
          <span className="block flex-1 h-px" style={{ background: "var(--border)" }} />
          <span className="label-mono">Capabilities</span>
        </motion.div>

        <motion.div
          className="mb-14 md:mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="heading-lg" style={{ color: "var(--foreground)" }}>
            Tech Stack.
          </h2>
        </motion.div>

        {/* Editorial Skills grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l"
          style={{ borderColor: "var(--border)" }}
        >
          {skillColumns.map((col, ci) => (
            <motion.div
              key={col.category}
              className="border-r border-b flex flex-col gap-10 bg-[#0a0a0a]"
              style={{
                borderColor: "var(--border)",
                paddingTop: "clamp(28px, 4vw, 52px)",
                paddingBottom: "clamp(28px, 4vw, 52px)",
                paddingLeft: "clamp(20px, 3vw, 44px)",
                paddingRight: "clamp(12px, 2vw, 28px)",
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.06 }}
            >
              <span className="label-mono font-bold" style={{ color: "var(--accent)", fontSize: "12px" }}>
                {col.category}
              </span>
              <ul className="flex flex-col gap-6 md:gap-7">
                {col.skills.map((skill) => (
                  <li key={skill.name}>
                    <span
                      className="group flex items-center gap-4 font-sans font-semibold text-base md:text-[18px] transition-colors duration-150 cursor-default"
                      style={{
                        color: hovered === skill.name ? "var(--accent)" : "var(--foreground)",
                        letterSpacing: "-0.01em",
                      }}
                      onMouseEnter={() => setHovered(skill.name)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div className="w-8 h-8 shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-115">
                        {skill.icon ? (
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={32}
                            height={32}
                            className="w-7 h-7 object-contain"
                          />
                        ) : (
                          <span className="text-[var(--accent)] font-mono text-base font-bold">›</span>
                        )}
                      </div>
                      <span>{skill.name}</span>
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

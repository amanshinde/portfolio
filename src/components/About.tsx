"use client";

import { motion } from "framer-motion";
import { Code, Eye, Layout } from "lucide-react";
import SectionHeader from "./SectionHeader";

interface Token {
  text: string;
  className?: string;
}

interface CodeLine {
  tokens: Token[];
}

const codeLines: CodeLine[] = [
  {
    tokens: [
      { text: "const ", className: "text-purple" },
      { text: "developer", className: "text-text-primary" },
      { text: " = {", className: "text-text-secondary" },
    ],
  },
  {
    tokens: [
      { text: "  name: ", className: "text-text-secondary" },
      { text: '"Aman Shinde"', className: "text-green" },
      { text: ",", className: "text-text-secondary" },
    ],
  },
  {
    tokens: [
      { text: "  role: ", className: "text-text-secondary" },
      { text: '"Full Stack Developer"', className: "text-green" },
      { text: ",", className: "text-text-secondary" },
    ],
  },
  {
    tokens: [
      { text: "  education: ", className: "text-text-secondary" },
      { text: '"B.E. Computer Science"', className: "text-green" },
      { text: ",", className: "text-text-secondary" },
    ],
  },
  {
    tokens: [
      { text: "  interests: [", className: "text-text-secondary" },
    ],
  },
  {
    tokens: [
      { text: '    "Web Development"', className: "text-green" },
      { text: ",", className: "text-text-secondary" },
    ],
  },
  {
    tokens: [
      { text: '    "Computer Vision"', className: "text-green" },
      { text: ",", className: "text-text-secondary" },
    ],
  },
  {
    tokens: [
      { text: '    "UI/UX Design"', className: "text-green" },
    ],
  },
  {
    tokens: [
      { text: "  ]", className: "text-text-secondary" },
    ],
  },
  {
    tokens: [
      { text: "};", className: "text-text-secondary" },
    ],
  },
];

const approaches = [
  {
    icon: Code,
    title: "Web Applications",
    description:
      "Responsive and scalable applications using React, Node.js, Express, and MongoDB.",
    accent: "green" as const,
  },
  {
    icon: Eye,
    title: "Intelligent Systems",
    description:
      "Computer vision and Python-based applications involving real-time recognition and automation.",
    accent: "cyan" as const,
  },
  {
    icon: Layout,
    title: "User Experiences",
    description:
      "Clean and intuitive interfaces with an emphasis on usability and responsive design.",
    accent: "purple" as const,
  },
];

const accentColors = {
  green: {
    border: "border-green/30",
    hoverBorder: "hover:border-green/60",
    text: "text-green",
    bg: "bg-green/5",
    glow: "group-hover:shadow-[0_0_15px_rgba(57,255,136,0.08)]",
  },
  cyan: {
    border: "border-cyan/30",
    hoverBorder: "hover:border-cyan/60",
    text: "text-cyan",
    bg: "bg-cyan/5",
    glow: "group-hover:shadow-[0_0_15px_rgba(50,215,255,0.08)]",
  },
  purple: {
    border: "border-purple/30",
    hoverBorder: "hover:border-purple/60",
    text: "text-purple",
    bg: "bg-purple/5",
    glow: "group-hover:shadow-[0_0_15px_rgba(167,139,250,0.08)]",
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader number="01" label="ABOUT" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Code Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="pixel-border bg-surface p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4 text-text-muted text-xs font-mono">
                <span className="text-green">{"///"}</span>
                <span>about.ts</span>
              </div>
              <pre className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
                <code>
                  {codeLines.map((line, i) => (
                    <div key={i} className="flex">
                      <span className="text-text-muted/40 w-6 text-right mr-4 select-none">
                        {i + 1}
                      </span>
                      <span>
                        {line.tokens.map((token, j) => (
                          <span key={j} className={token.className}>
                            {token.text}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
              Aman Shinde is a Computer Science engineer with hands-on experience
              in full-stack development and Python application development. He has
              worked with MERN technologies, Python, computer vision, databases,
              REST APIs, and developer tools.
            </p>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8">
              Currently focused on building responsive web applications and
              intelligent software systems that bridge technology and real-world
              utility.
            </p>

            {/* Quick Stats */}
            <div className="flex gap-6 font-mono text-xs">
              <div className="px-3 py-2 border border-border">
                <span className="text-text-muted block mb-1">EDUCATION</span>
                <span className="text-text-primary">B.E. CSE</span>
              </div>
              <div className="px-3 py-2 border border-border">
                <span className="text-text-muted block mb-1">FOCUS</span>
                <span className="text-text-primary">Full Stack</span>
              </div>
              <div className="px-3 py-2 border border-border">
                <span className="text-text-muted block mb-1">ALSO</span>
                <span className="text-text-primary">CV / ML</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I Like to Build */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h3
            className="text-[10px] tracking-[0.3em] text-text-muted mb-8"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            WHAT I LIKE TO BUILD
          </h3>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {approaches.map((item, i) => {
              const colors = accentColors[item.accent];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className={`group p-5 md:p-6 border ${colors.border} ${colors.hoverBorder} ${colors.bg} transition-all duration-300 ${colors.glow}`}
                >
                  <item.icon size={20} className={`${colors.text} mb-4`} />
                  <h4 className={`font-mono text-sm ${colors.text} mb-2`}>
                    {item.title}
                  </h4>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

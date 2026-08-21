"use client";

import { motion } from "framer-motion";
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
      { text: "const ", className: "text-yellow" },
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

const PixelCodeIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} shapeRendering="crispEdges">
    <path d="M9 7h2v2H9V7zm-2 2h2v2H7V9zm-2 2h2v2H5v-2zm2 2h2v2H7v-2zm2 2h2v2H9v-2zm6-8h2v2h-2V7zm2 2h2v2h-2V9zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm-2 2h2v2h-2v-2z" />
  </svg>
);

const PixelEyeIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} shapeRendering="crispEdges">
    <path d="M8 8h8v2h2v4h-2v2H8v-2H6v-4h2V8zm4 3h-2v2h2v-2z" />
  </svg>
);

const PixelLayoutIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} shapeRendering="crispEdges">
    <path d="M4 4h16v16H4V4zm2 2v2h12V6H6zm0 4v8h4v-8H6zm6 0v8h6v-8h-6z" />
  </svg>
);

const approaches = [
  {
    icon: PixelCodeIcon,
    title: "Web Applications",
    description:
      "Responsive and scalable applications using React, Node.js, Express, and MongoDB.",
    accent: "yellow" as const,
  },
  {
    icon: PixelEyeIcon,
    title: "Intelligent Systems",
    description:
      "Computer vision and Python-based applications involving real-time recognition and automation.",
    accent: "cyan" as const,
  },
  {
    icon: PixelLayoutIcon,
    title: "User Experiences",
    description:
      "Clean and intuitive interfaces with an emphasis on usability and responsive design.",
    accent: "green" as const,
  },
];

const accentColors = {
  yellow: {
    border: "border-yellow/30",
    hoverBorder: "hover:border-yellow/60",
    text: "text-yellow",
    bg: "bg-yellow/5",
    glow: "group-hover:shadow-[0_0_15px_rgba(244,230,56,0.08)]",
  },
  cyan: {
    border: "border-cyan/30",
    hoverBorder: "hover:border-cyan/60",
    text: "text-cyan",
    bg: "bg-cyan/5",
    glow: "group-hover:shadow-[0_0_15px_rgba(56,199,217,0.08)]",
  },
  green: {
    border: "border-green/30",
    hoverBorder: "hover:border-green/60",
    text: "text-green",
    bg: "bg-green/5",
    glow: "group-hover:shadow-[0_0_15px_rgba(53,232,121,0.08)]",
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-10 md:py-10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader number="01" label="ABOUT" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-center"
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

            {/* Terminal-Style Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 bg-[#080909] border border-border p-5 shadow-[4px_4px_0_rgba(53,232,121,0.15)] font-mono text-[11px] md:text-xs relative overflow-hidden group"
            >
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-50"></div>

              <div className="flex gap-2 mb-3">
                <span className="text-green">{">"}</span>
                <span className="text-text-primary">cat profile.json</span>
              </div>
              <div className="text-text-muted pl-4 border-l border-border/30 ml-1 space-y-2">
                <div><span className="text-cyan">"education"</span>: <span className="text-yellow">"B.E. Computer Science"</span>,</div>
                <div><span className="text-cyan">"focus"</span>: <span className="text-yellow">"Full Stack / Software Engineering"</span>,</div>
                <div><span className="text-cyan">"interests"</span>: <span className="text-yellow">["CV", "ML", "UI/UX"]</span></div>
              </div>
              <div className="flex gap-2 mt-3 items-center">
                <span className="text-green">{">"}</span>
                <span className="w-2 h-3 bg-green animate-pulse inline-block" />
              </div>
            </motion.div>
          </motion.div>

          {/* Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="pixel-border bg-surface p-5 md:p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4 text-text-muted text-xs font-mono">
                <span className="text-green">{"///"}</span>
                <span>about.ts</span>
              </div>
              <pre className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
                <code>
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      className="flex"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.2, delay: i * 0.1 + 0.3 }}
                    >
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
                    </motion.div>
                  ))}
                </code>
              </pre>
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

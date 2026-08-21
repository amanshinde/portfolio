"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Terminal from "./Terminal";

const heroTerminalLines = [
  "aman@portfolio:~$ npm run build",
  "",
  "> portfolio@1.0.0 build",
  "> next build",
  "",
  "  ✓ Compiled successfully",
  "  ✓ Linting and type-checking passed",
  "  ✓ Generated static pages (7/7)",
  "  ✓ Collecting build traces",
  "  ✓ Optimized production assets",
  "",
  "  BUILD COMPLETE ████████████████ 100%",
  "",
  "aman@portfolio:~$ _",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Decorative code elements */}
      <div className="absolute top-32 right-8 text-text-muted/20 font-mono text-xs hidden xl:block select-none" aria-hidden="true">
        <div>{"const build = () => {"}</div>
        <div>{"  return innovation;"}</div>
        <div>{"};"}</div>
      </div>
      <div className="absolute bottom-32 left-8 text-text-muted/15 font-mono text-xs hidden xl:block select-none" aria-hidden="true">
        <div>{"while (learning) {"}</div>
        <div>{"  build();"}</div>
        <div>{"  improve();"}</div>
        <div>{"}"}</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Small label */}
            <motion.div variants={childVariants} className="mb-6">
              <span
                className="text-[10px] tracking-[0.3em] text-green"
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                {">"} HELLO_WORLD
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={childVariants}
              className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary mb-4"
            >
              AMAN
              <br />
              <span className="text-green terminal-glow">SHINDE</span>
            </motion.h1>

            {/* Roles */}
            <motion.div variants={childVariants} className="mb-6 space-y-1">
              <p className="font-mono text-sm md:text-base tracking-widest text-cyan">
                FULL STACK DEVELOPER
              </p>
              <p className="font-mono text-xs md:text-sm tracking-widest text-text-muted">
                COMPUTER SCIENCE ENGINEER
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={childVariants}
              className="text-text-secondary text-sm md:text-base leading-relaxed max-w-lg mb-8"
            >
              I build responsive web applications and intelligent software using
              modern web technologies, Python, and computer vision.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={childVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green/10 border border-green text-green font-mono text-xs tracking-wider hover:bg-green/20 transition-all duration-200"
              >
                <span>[</span>
                VIEW PROJECTS
                <span>]</span>
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary font-mono text-xs tracking-wider hover:border-text-secondary hover:text-text-primary transition-all duration-200"
              >
                <FileDown size={14} />
                DOWNLOAD RESUME
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={childVariants}
              className="flex gap-5"
            >
              <a
                href="https://github.com/aman"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-text-muted hover:text-green transition-colors duration-200"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://linkedin.com/in/aman"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-text-muted hover:text-cyan transition-colors duration-200"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="mailto:shindeaman31@gmail.com"
                aria-label="Send email"
                className="text-text-muted hover:text-purple transition-colors duration-200"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side — Terminal Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden lg:block"
          >
            <Terminal
              lines={heroTerminalLines}
              title="aman@portfolio — build"
              typingEffect={true}
            />
            {/* Pixel art decorative elements below terminal */}
            <div className="mt-4 flex items-center gap-3 text-text-muted/30 font-mono text-[10px]" aria-hidden="true">
              <span>{"<"}/{">"}</span>
              <span className="w-px h-3 bg-border" />
              <span>{"{ }"}</span>
              <span className="w-px h-3 bg-border" />
              <span>npm</span>
              <span className="w-px h-3 bg-border" />
              <span>git</span>
              <span className="w-px h-3 bg-border" />
              <span>python</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-text-muted font-mono text-[10px] tracking-widest">
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={14} className="text-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

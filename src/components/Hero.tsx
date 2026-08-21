"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "./Icons";
import PixelDeveloper from "./PixelDeveloper";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Layer: Scattered pixel-art code elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ duration: 1 }} className="absolute top-32 right-1/4 text-yellow font-mono text-xs">{"</>"}</motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ duration: 1, delay: 0.2 }} className="absolute top-40 left-12 text-cyan font-mono text-sm font-bold">{"{ }"}</motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.05 }} transition={{ duration: 1, delay: 0.4 }} className="absolute bottom-1/3 left-1/4 text-white font-mono text-xl tracking-widest">{"01"}</motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ duration: 1, delay: 0.3 }} className="absolute top-1/4 left-1/3 text-green font-mono text-xs">npm run dev</motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ duration: 1, delay: 0.5 }} className="absolute bottom-1/4 right-1/3 text-purple font-mono text-xs">const developer</motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.05 }} transition={{ duration: 1, delay: 0.6 }} className="absolute top-1/2 right-12 text-white font-mono text-2xl tracking-widest">{"10"}</motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ duration: 1, delay: 0.7 }} className="absolute bottom-20 right-1/4 text-cyan font-mono text-xs">git commit</motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ duration: 1, delay: 0.8 }} className="absolute top-2/3 left-16 text-yellow font-mono text-xs">import React</motion.div>
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content (5 Columns) */}
          <motion.div
            className="lg:col-span-5 order-2 lg:order-1 lg:pl-12 xl:pl-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Small label */}
            <motion.div variants={childVariants} className="mb-6">
              <span
                className="text-[10px] tracking-[0.3em] text-yellow"
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                {">"} HELLO_WORLD_
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={childVariants}
              className="font-mono text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-primary mb-6 leading-[1.1]"
            >
              AMAN
              <br />
              SHINDE
            </motion.h1>

            {/* Roles */}
            <motion.div variants={childVariants} className="mb-6 space-y-2">
              <p className="font-mono text-sm md:text-base tracking-widest text-cyan font-bold border-l-2 border-yellow pl-3">
                FULL STACK DEVELOPER
              </p>
              <p className="font-mono text-xs md:text-sm tracking-widest text-text-muted pl-4">
                COMPUTER SCIENCE ENGINEER
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={childVariants}
              className="text-text-secondary text-sm md:text-base leading-relaxed max-w-lg mb-10"
            >
              I build responsive web applications and intelligent software systems using modern web technologies, Python, and computer vision.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={childVariants}
              className="flex flex-wrap gap-6 mb-12"
            >
              <Link href="/work" className="pixel-btn pixel-btn-primary group">
                <span className="opacity-0 group-hover:opacity-100 absolute left-2 transition-opacity">
                  {">"}
                </span>
                <span className="group-hover:ml-3 transition-all duration-200">
                  VIEW WORK
                </span>
              </Link>
              <a href="/resume.pdf" download className="pixel-btn pixel-btn-secondary">
                RESUME
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={childVariants}
              className="flex gap-6 items-center"
            >
              <a
                href="https://github.com/aman"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-text-muted hover:text-yellow transition-colors duration-200"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/aman"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-text-muted hover:text-cyan transition-colors duration-200"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:shindeaman31@gmail.com"
                aria-label="Send email"
                className="text-text-muted hover:text-green transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content (7 Columns) - Character */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 50 }}
            className="lg:col-span-7 order-1 lg:order-2 flex justify-center items-center relative"
          >
            {/* Ambient character glow */}
            <div className="absolute inset-0 bg-yellow/5 blur-3xl rounded-full scale-150 z-0 hidden lg:block" />
            
            {/* Interactive Character Component */}
            <PixelDeveloper className="w-full max-w-4xl z-10" />
            
            {/* Small decorative label for the workspace */}
            <div className="absolute bottom-0 right-10 text-[8px] font-pixel text-text-muted/40 tracking-[0.2em] hidden lg:block">
              [ WORKSTATION_01 ]
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
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

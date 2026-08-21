"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import SectionHeader from "./SectionHeader";
import Terminal from "./Terminal";

const contactTerminalLines = [
  "aman@portfolio:~$ ./contact.sh",
  "",
  "  NAME    : Aman Shinde",
  "  ROLE    : Full Stack Developer",
  "  EMAIL   : shindeaman31@gmail.com",
  "  STATUS  : OPEN TO OPPORTUNITIES",
  "",
  "aman@portfolio:~$ _",
];

const contactLinks = [
  {
    label: "EMAIL",
    value: "shindeaman31@gmail.com",
    href: "mailto:shindeaman31@gmail.com",
    icon: Mail,
    accent: "text-green",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/aman",
    href: "https://linkedin.com/in/aman",
    icon: LinkedinIcon,
    accent: "text-cyan",
  },
  {
    label: "GITHUB",
    value: "github.com/aman",
    href: "https://github.com/aman",
    icon: GithubIcon,
    accent: "text-purple",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader number="07" label="CONTACT" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl text-text-primary mb-6 tracking-tight">
              LET&apos;S BUILD
              <br />
              <span className="text-green terminal-glow">SOMETHING.</span>
            </h2>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-10 max-w-lg">
              I&apos;m interested in software development, frontend engineering,
              full-stack applications, and technology-driven products. Feel free
              to reach out.
            </p>

            {/* Contact Links */}
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-center gap-4 p-3 border border-border hover:border-border-hover transition-colors"
                >
                  <link.icon
                    size={16}
                    className={`${link.accent} group-hover:scale-110 transition-transform`}
                  />
                  <div>
                    <span className="text-[10px] font-mono text-text-muted tracking-widest block">
                      {link.label}
                    </span>
                    <span className="text-xs md:text-sm font-mono text-text-secondary group-hover:text-text-primary transition-colors">
                      {link.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center"
          >
            <Terminal
              lines={contactTerminalLines}
              title="contact.sh"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import SectionHeader from "./SectionHeader";

const contactLinks = [
  {
    label: "EMAIL",
    value: "shindeaman31@gmail.com",
    href: "mailto:shindeaman31@gmail.com",
    icon: Mail,
    accent: "text-yellow",
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
    accent: "text-green",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-surface/20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader number="07" label="CONTACT" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="pixel-border bg-surface shadow-2xl overflow-hidden mt-8"
        >
          {/* Terminal Window Header */}
          <div className="bg-surface-light border-b border-border px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-border" />
            <div className="w-3 h-3 rounded-full bg-border" />
            <div className="w-3 h-3 rounded-full bg-border" />
            <div className="text-text-muted text-[10px] font-mono ml-4 select-none">
              ./contact
            </div>
          </div>

          <div className="p-6 md:p-10 font-mono text-sm md:text-base leading-relaxed">
            <div className="mb-8">
              <span className="text-yellow">aman@portfolio</span>
              <span className="text-text-secondary">:~</span>
              <span className="text-text-primary">$</span> ./contact.sh
            </div>
            
            <div className="space-y-6 mb-12">
              <p className="text-text-secondary">
                <span className="text-cyan">{"["}</span> INIT <span className="text-cyan">{"]"}</span> Connection established.
              </p>
              <h2 className="text-3xl md:text-4xl text-text-primary tracking-tight font-bold">
                LET&apos;S BUILD <span className="text-yellow">SOMETHING.</span>
              </h2>
              <p className="text-text-secondary max-w-lg">
                I&apos;m interested in software development, frontend engineering,
                full-stack applications, and technology-driven products. Feel free
                to reach out.
              </p>
            </div>

            <div className="space-y-4 max-w-lg border-l-2 border-border pl-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="group flex items-center justify-between p-3 border border-transparent hover:border-border hover:bg-surface-light transition-all"
                >
                  <div className="flex items-center gap-4">
                    <link.icon
                      size={18}
                      className={`${link.accent} group-hover:scale-110 transition-transform`}
                    />
                    <span className="text-xs font-mono text-text-muted tracking-widest group-hover:text-text-primary transition-colors">
                      {link.label}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm font-mono text-text-secondary group-hover:text-yellow transition-colors">
                    {link.value}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-2">
              <span className="text-yellow">aman@portfolio</span>
              <span className="text-text-secondary">:~</span>
              <span className="text-text-primary">$</span> 
              <span className="animate-blink inline-block w-2 h-4 bg-yellow align-middle ml-1"></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

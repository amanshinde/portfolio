"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { label: "LinkedIn", detail: "Professional Profile", url: "https://www.linkedin.com/in/aman-shinde-29a6a227a", arrow: "↗" },
  { label: "GitHub", detail: "Code & Repositories", url: "https://github.com/amanshinde", arrow: "↗" },
  { label: "Email", detail: "Direct Communication", url: "mailto:shindeaman31@gmail.com", arrow: "→" },
];

export default function Contact() {
  return (
    <section id="contact" className="pt-6 md:pt-10 pb-32">
      <div className="container-full">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="label-mono">05</span>
          <span className="block flex-1 h-px" style={{ background: "var(--border)" }} />
          <span className="label-mono">Contact</span>
        </motion.div>

        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 border border-border px-3 py-1.5 mb-6 bg-[#0e0e0e]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="label-mono text-xs" style={{ color: "var(--accent)" }}>
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>
          </div>
        </motion.div>

        {/* Large CTA Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t pt-8 md:pt-12" style={{ borderColor: "var(--border)" }}>
          {/* Left Main CTA — 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <motion.h2
                className="heading-xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Let&apos;s
                <br />
                Build
                <br />
                <span style={{ color: "var(--muted)" }}>Something.</span>
              </motion.h2>

              <motion.p
                className="mt-8 text-lg md:text-xl leading-relaxed max-w-xl"
                style={{ color: "var(--muted)" }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Have a project, role, or technical challenge in mind?
                I&apos;m available for full-stack engineering roles, internships, and select freelance platforms.
              </motion.p>
            </div>

            {/* Direct Email Action */}
            <motion.div
              className="mt-12 md:mt-16"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <a
                href="mailto:shindeaman31@gmail.com"
                className="group inline-flex items-center gap-4 border-b pb-2 transition-colors duration-200"
                style={{ borderColor: "var(--border)" }}
                data-cursor="EMAIL"
              >
                <span
                  className="font-sans font-black text-2xl md:text-3xl xl:text-4xl transition-colors duration-200 group-hover:text-[var(--accent)]"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  shindeaman31@gmail.com
                </span>
                <span className="text-2xl md:text-3xl text-[var(--accent)] group-hover:translate-x-2 transition-transform duration-200">
                  →
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right Social & Network Links — 5 cols */}
          <motion.div
            className="lg:col-span-5 flex flex-col border-t border-l"
            style={{ borderColor: "var(--border)" }}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between px-8 py-7 md:py-8 border-r border-b transition-all duration-200 hover:bg-[#121212] hover:pl-10"
                style={{ borderColor: "var(--border)" }}
                data-cursor="OPEN"
              >
                <div className="flex flex-col gap-1">
                  <span
                    className="font-sans font-bold text-lg md:text-xl uppercase tracking-tight group-hover:text-[var(--accent)] transition-colors"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {link.label}
                  </span>
                  <span className="label-mono text-xs" style={{ fontSize: "10px" }}>
                    {link.detail}
                  </span>
                </div>
                <span className="label-mono text-base md:text-lg group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                  {link.arrow}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

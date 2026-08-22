"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { label: "LinkedIn", url: "https://linkedin.com/in/aman-shinde", arrow: "↗" },
  { label: "GitHub", url: "https://github.com/aman-shinde", arrow: "↗" },
  { label: "Email", url: "mailto:shindeaman31@gmail.com", arrow: "→" },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-full">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="label-mono">06</span>
          <span className="block flex-1 h-px" style={{ background: "var(--border)" }} />
          <span className="label-mono">Contact</span>
        </motion.div>

        {/* Large CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <motion.h2
              className="heading-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let&apos;s Build
              <br />
              <span style={{ color: "var(--muted)" }}>Something.</span>
            </motion.h2>

            <motion.p
              className="mt-8 text-lg md:text-xl leading-relaxed max-w-lg"
              style={{ color: "var(--muted)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Have a project, idea, or role in mind?
              I&apos;m currently available for internships and freelance work.
            </motion.p>

            <motion.a
              href="mailto:shindeaman31@gmail.com"
              className="group inline-flex items-center gap-4 mt-12"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              data-cursor="EMAIL"
            >
              <span
                className="font-sans font-black text-2xl md:text-3xl transition-colors duration-200 group-hover:text-[var(--accent)]"
                style={{ letterSpacing: "-0.04em" }}
              >
                shindeaman31@gmail.com
              </span>
              <span className="text-2xl group-hover:translate-x-1 transition-transform duration-200">→</span>
            </motion.a>
          </div>

          {/* Social links */}
          <motion.div
            className="lg:col-span-4 flex flex-col justify-end gap-0 border-t border-l"
            style={{ borderColor: "var(--border)" }}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            {socialLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between px-6 py-5 border-b transition-colors duration-150 hover:bg-[var(--surface)]"
                style={{ borderColor: "var(--border)" }}
                data-cursor="OPEN"
              >
                <span className="font-sans font-bold text-base uppercase tracking-tight group-hover:text-[var(--accent)] transition-colors"
                  style={{ letterSpacing: "-0.02em" }}>
                  {link.label}
                </span>
                <span className="label-mono group-hover:text-[var(--accent)] transition-colors">{link.arrow}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="pt-6 md:pt-10 pb-20">
      <div className="container-full">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="label-mono">03</span>
          <span className="block flex-1 h-px" style={{ background: "var(--border)" }} />
          <span className="label-mono">Experience</span>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="heading-lg" style={{ color: "var(--foreground)" }}>
            Where I&apos;ve Worked.
          </h2>
        </motion.div>

        {/* Experience rows list */}
        <div className="border-t" style={{ borderColor: "var(--border)" }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="relative group border-b overflow-hidden"
              style={{
                borderColor: "var(--border)",
                paddingTop: "64px",
                paddingBottom: "64px",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              {/* Row content */}
              <div className="relative z-10 grid grid-cols-12 gap-8 lg:gap-16 items-start px-0">
                {/* Left Column: Period, Logo, Role, Company, Location, Tech Badges */}
                <div className="col-span-12 md:col-span-6">
                  {/* Meta row */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="label-mono font-bold" style={{ fontSize: "11px", color: "var(--accent)" }}>
                      {exp.startDate} — {exp.endDate}
                    </span>
                    <span className="block h-px w-6" style={{ background: "var(--border)" }} />
                    <span className="label-mono" style={{ fontSize: "10px" }}>{exp.location}</span>
                  </div>

                  {/* Company Logo Badge */}
                  {exp.logo && (
                    <div className="mb-6 inline-flex items-center justify-center p-3.5 md:p-4 border border-border bg-[#141414] group-hover:border-[var(--accent)]/40 transition-colors duration-300">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={280}
                        height={90}
                        className="object-contain h-12 md:h-14 w-auto max-w-[240px] filter brightness-105"
                      />
                    </div>
                  )}

                  <h3
                    className="heading-md transition-colors duration-200"
                    style={{ color: "var(--foreground)" }}
                  >
                    {exp.company}
                  </h3>

                  <p
                    className="label-mono mt-2 font-medium tracking-wider"
                    style={{ color: "var(--muted)", fontSize: "12px" }}
                  >
                    {exp.role}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2.5 mt-8">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="label-mono border px-3.5 py-2 font-medium tracking-normal text-xs transition-colors"
                        style={{ borderColor: "var(--border)", fontSize: "11px" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Company website link */}
                  {exp.companyUrl && (
                    <div className="mt-6">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label-mono text-xs hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
                        style={{ fontSize: "11px" }}
                        data-cursor="OPEN"
                      >
                        Visit Website ↗
                      </a>
                    </div>
                  )}
                </div>

                {/* Right Column: Contributions list */}
                <div className="col-span-12 md:col-span-6 md:self-center">
                  <ul className="flex flex-col gap-4">
                    {exp.contributions.map((c, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-base md:text-[17px] leading-relaxed font-normal"
                        style={{ color: "var(--foreground)", opacity: 0.9 }}
                      >
                        <span className="text-[var(--accent)] text-base shrink-0 select-none">›</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

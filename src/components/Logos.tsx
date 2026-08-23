"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { logoDesigns } from "@/data/designs";

export default function Logos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="logos" className="pt-6 md:pt-10 pb-32">
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
          <span className="label-mono">Brand Identity</span>
        </motion.div>

        <motion.div
          className="mb-14 md:mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="heading-lg" style={{ color: "var(--foreground)" }}>
            Logo Design.
          </h2>
        </motion.div>

        {/* Logo Rows List */}
        <div className="border-t" style={{ borderColor: "var(--border)" }}>
          {logoDesigns.map((logo, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={logo.id}
                className="relative group border-b overflow-hidden"
                style={{
                  borderColor: "var(--border)",
                  paddingTop: "64px",
                  paddingBottom: "64px",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                data-cursor="VIEW"
              >
                {/* Hover surface */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ background: "var(--surface)" }}
                />

                {/* Row content */}
                <div className="relative z-10 grid grid-cols-12 gap-8 lg:gap-16 items-start px-0">
                  {/* Left Column: Number, Subtitle, Title, Showcase Canvas */}
                  <div className="col-span-12 md:col-span-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="label-mono font-bold"
                        style={{
                          color: isHovered ? "var(--accent)" : "var(--border)",
                          fontSize: "11px",
                          transition: "color 0.2s",
                        }}
                      >
                        {logo.number}
                      </span>
                      <span className="block h-px w-6" style={{ background: "var(--border)" }} />
                      <span className="label-mono" style={{ fontSize: "10px" }}>
                        {logo.subtitle}
                      </span>
                    </div>

                    <h3
                      className="heading-md transition-colors duration-200"
                      style={{ color: isHovered ? "var(--accent)" : "var(--foreground)" }}
                    >
                      {logo.title}
                    </h3>

                    {/* Logo Showcase Display Box */}
                    <div className="mt-8 border border-border overflow-hidden bg-[#111111] group-hover:border-[var(--accent)]/40 transition-colors duration-300">
                      <div className="relative w-full">
                        <Image
                          src={logo.image}
                          alt={logo.title}
                          width={1200}
                          height={800}
                          loading="eager"
                          priority={index < 2}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 600px"
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Category, Description, Deliverables, Tools */}
                  <div className="col-span-12 md:col-span-6 md:self-center flex flex-col gap-6">
                    <div className="inline-flex items-center gap-2 border border-border px-3 py-1 bg-[#141414] self-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      <span className="label-mono text-xs" style={{ fontSize: "10px", color: "var(--foreground)" }}>
                        {logo.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className="text-base md:text-[17px] leading-relaxed font-normal"
                      style={{ color: "var(--foreground)", opacity: 0.9 }}
                    >
                      {logo.description}
                    </p>

                    {/* Deliverables highlight */}
                    <div className="border-t border-border/50 pt-4 flex flex-col gap-2.5">
                      {logo.deliverables.map((item, fi) => (
                        <div key={fi} className="flex items-start gap-2.5 text-xs md:text-sm text-muted font-mono leading-relaxed">
                          <span className="text-[var(--accent)] text-sm shrink-0">›</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2.5 pt-2 border-t border-border/50">
                      {logo.tools.map((tool) => (
                        <span
                          key={tool}
                          className="label-mono border px-3 py-1.5 font-medium tracking-normal text-xs transition-colors"
                          style={{ borderColor: "var(--border)", fontSize: "11px" }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

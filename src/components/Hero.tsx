"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ paddingTop: "72px" }}
    >
      {/* Full-height photo — pinned to the extreme right, hidden on mobile */}
      <motion.div
        className="hidden lg:block absolute top-0 right-0 bottom-0 w-[32vw] xl:w-[28vw]"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ borderLeft: "1px solid var(--border)" }}
      >
        <Image
          src="/Aman.png"
          alt="Aman Shinde"
          fill
          sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 32vw, 28vw"
          className="object-cover object-center"
          priority
          style={{ filter: "grayscale(10%)" }}
        />

      </motion.div>

      {/* Left: Text content — constrained so it doesn't overlap the photo */}
      <div className="flex-1 flex flex-col justify-center pt-12 md:pt-16 pb-4 md:pb-6 pr-0 lg:pr-[34vw] xl:pr-[30vw]">
        <div className="container-full">
          <div className="flex flex-col gap-4">

            {/* Headline */}
            <div>
              <motion.h1
                className="heading-xl text-foreground leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I Build
                <br />
                <span style={{ color: "var(--muted)" }}>Digital</span>
                <br />
                Products.
              </motion.h1>

              <motion.p
                className="mt-8 text-base md:text-lg max-w-2xl leading-relaxed"
                style={{ color: "var(--muted)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                Full Stack Developer & CS Engineer. I build interfaces,
                backend systems and AI-powered applications with a focus
                on performance and clean design.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <Link href="/work" className="btn-primary" data-cursor="VIEW">
                  View Work →
                </Link>
                <a
                  href="mailto:shindeaman31@gmail.com"
                  className="btn-outline"
                  data-cursor="EMAIL"
                >
                  Let&apos;s Talk ↗
                </a>
              </motion.div>
            </div>

            {/* Bottom meta */}
            <motion.div
              className="flex flex-wrap gap-8 pt-6 border-t mt-6"
              style={{ borderColor: "var(--border)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              {[
                ["Education", "B.E. Computer Science"],
                ["Focused on", "MERN · AI · UI/UX"],
              ].map(([label, val]) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="label-mono" style={{ fontSize: "9px" }}>{label}</span>
                  <span className="font-mono text-xs text-foreground">{val}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="w-full pb-5 pt-1 flex items-center justify-center gap-3 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="label-mono" style={{ fontSize: "9px" }}>Scroll to explore</span>
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="label-mono"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}

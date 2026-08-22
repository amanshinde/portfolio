"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          background: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="container-full">
          <nav
            className="flex items-center justify-between h-[72px]"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Left: Name + Title */}
            <Link href="/" className="group flex flex-col gap-0 leading-none" data-cursor="HOME">
              <span
                className="font-sans font-black text-sm tracking-tight text-foreground uppercase"
                style={{ letterSpacing: "-0.02em" }}
              >
                Aman Shinde
              </span>
              <span className="label-mono" style={{ fontSize: "9px" }}>
                Software Developer
              </span>
            </Link>

            {/* Center: Status */}
            <div className="hidden lg:flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="label-mono" style={{ fontSize: "10px" }}>
                Available for work
              </span>
            </div>

            {/* Right: Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-cursor="OPEN"
                    className="label-mono transition-colors duration-150"
                    style={{
                      color: isActive ? "var(--accent)" : "var(--muted)",
                      fontSize: "11px",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="mailto:shindeaman31@gmail.com"
                className="btn-outline"
                style={{ padding: "8px 16px", fontSize: "10px" }}
                data-cursor="EMAIL"
              >
                Let&apos;s talk ↗
              </a>
            </div>

            {/* Mobile: Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="md:hidden flex flex-col gap-1.5 p-2"
            >
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
                className="block w-6 h-px bg-foreground"
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                className="block w-6 h-px bg-foreground"
              />
              <motion.span
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
                className="block w-6 h-px bg-foreground"
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: "var(--background)", paddingTop: "72px" }}
          >
            <div className="container-full flex flex-col gap-0 mt-8 border-t"
              style={{ borderColor: "var(--border)" }}>
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between py-6 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="font-sans font-black text-3xl uppercase tracking-tight" style={{ letterSpacing: "-0.04em" }}>
                    {link.label}
                  </span>
                  <span className="label-mono">{String(i + 1).padStart(2, "0")}</span>
                </Link>
              ))}
              <a
                href="mailto:shindeaman31@gmail.com"
                className="mt-8 btn-primary self-start"
              >
                Let&apos;s talk ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

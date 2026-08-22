"use client";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6">
          {/* Left */}
          <p className="label-mono" style={{ fontSize: "10px" }}>
            © {new Date().getFullYear()} Aman Shinde
          </p>

          {/* Center */}
          <p className="label-mono hidden md:block" style={{ fontSize: "10px" }}>
            Designed + Built by Aman Shinde
          </p>

          {/* Right */}
          <button
            onClick={scrollToTop}
            className="label-mono transition-colors hover:text-[var(--accent)]"
            style={{ fontSize: "10px" }}
            data-cursor="UP"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

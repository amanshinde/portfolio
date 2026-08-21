export default function Footer() {
  return (
    <footer className="border-t border-border py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Copyright */}
          <p className="font-mono text-xs text-text-muted">
            &copy; 2026 AMAN SHINDE
          </p>

          {/* Built with */}
          <p className="font-mono text-[10px] text-text-muted/60 tracking-wider">
            BUILT WITH NEXT.JS / TYPESCRIPT / TAILWIND
          </p>

          {/* Tagline */}
          <p
            className="text-[9px] text-green/40 tracking-widest"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            {"<CODE IS CRAFT />"}
          </p>
        </div>
      </div>
    </footer>
  );
}

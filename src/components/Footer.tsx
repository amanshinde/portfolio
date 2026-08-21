import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#080909] py-6 relative z-20">
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left side: System status */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-surface border border-border">
            <div className="w-2 h-2 bg-green animate-pulse rounded-full" />
            <span className="font-mono text-[10px] text-green tracking-widest">SYSTEM_ONLINE</span>
          </div>
          <p className="font-mono text-[10px] sm:text-xs text-text-muted">
            &copy; {new Date().getFullYear()} AMAN SHINDE
          </p>
        </div>

        {/* Center: Built with */}
        <p className="font-mono text-[9px] text-text-muted/40 tracking-[0.2em] hidden lg:block">
          BUILT_WITH {"{"} NEXT.JS, TAILWIND, PIXELS {"}"}
        </p>

        {/* Right side: Socials */}
        <div className="flex gap-6 items-center">
          <a href="https://github.com/aman" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-yellow transition-colors" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href="https://linkedin.com/in/aman" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-cyan transition-colors" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href="mailto:shindeaman31@gmail.com" className="text-text-muted hover:text-green transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

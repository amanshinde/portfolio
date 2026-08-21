"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface TerminalProps {
  lines: string[];
  title?: string;
  typingEffect?: boolean;
  className?: string;
}

export default function Terminal({
  lines,
  title = "terminal",
  typingEffect = false,
  className = "",
}: TerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>(
    typingEffect ? [] : lines
  );
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!typingEffect) return;

    if (currentLine >= lines.length) return;

    const line = lines[currentLine];

    if (currentChar <= line.length) {
      intervalRef.current = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLine] = line.substring(0, currentChar);
          return updated;
        });
        setCurrentChar((prev) => prev + 1);
      }, 20 + Math.random() * 30);
    } else {
      setCurrentLine((prev) => prev + 1);
      setCurrentChar(0);
    }

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [typingEffect, currentLine, currentChar, lines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`pixel-border rounded-none overflow-hidden bg-surface ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-surface-light border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28ca42]" />
        </div>
        <span className="text-text-muted text-xs font-mono ml-2">
          {title}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
        {displayedLines.map((line, i) => (
          <div key={i} className="whitespace-pre">
            <span className="text-text-secondary">{line}</span>
            {typingEffect &&
              i === displayedLines.length - 1 &&
              currentLine < lines.length && (
                <span
                  className={`inline-block w-2 h-4 bg-green ml-0.5 align-middle ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
          </div>
        ))}
        {/* Static cursor for non-typing terminals */}
        {!typingEffect && (
          <div className="whitespace-pre mt-1">
            <span
              className={`inline-block w-2 h-4 bg-green align-middle ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

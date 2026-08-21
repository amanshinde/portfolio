"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export type DeveloperMode =
  | "idle"
  | "coding"
  | "looking_left"
  | "looking_right"
  | "contact"
  | "project";

interface PixelDeveloperProps {
  mode?: DeveloperMode;
  className?: string;
}

const COLORS = {
  bg: "#050706",
  panel: "#0C100E",
  panel2: "#111613",
  black: "#080909",
  outline: "#202923",
  outlineLight: "#354039",

  white: "#F3F1E8",
  muted: "#858B87",

  green: "#35E879",
  greenBright: "#7CFFB2",
  cyan: "#38C7D9",
  yellow: "#F4E638",
  amber: "#FFC857",

  skin: "#F2BE91",
  skinShadow: "#D99A72",
  skinDark: "#B97659",

  hair: "#171515",
  hairLight: "#292323",

  hoodie: "#15191A",
  hoodieLight: "#202526",
  hoodieShadow: "#0D1011",

  wood: "#35261C",
  woodLight: "#4B3425",
};

export default function PixelDeveloper({
  mode = "idle",
  className = "",
}: PixelDeveloperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<string | null>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [bootText, setBootText] = useState("");
  const [navMode, setNavMode] = useState<DeveloperMode | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  /* ---------------------------------------------------------
     REDUCED MOTION
  --------------------------------------------------------- */

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => setReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  /* ---------------------------------------------------------
     MOUSE TRACKING
  --------------------------------------------------------- */

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current || reducedMotion) return;

      const rect = containerRef.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = Math.max(
        -1,
        Math.min(
          1,
          (event.clientX - centerX) / (window.innerWidth / 2)
        )
      );

      const y = Math.max(
        -1,
        Math.min(
          1,
          (event.clientY - centerY) / (window.innerHeight / 2)
        )
      );

      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [reducedMotion]);

  /* ---------------------------------------------------------
     BOOT SEQUENCE
  --------------------------------------------------------- */

  useEffect(() => {
    if (!isClicked) return;

    const sequence = [
      "> initializing portfolio...",
      "> loading projects...",
      "> loading experience...",
      "> loading aman.dev...",
      "> system ready.",
    ];

    let step = 0;

    setBootText("");

    const interval = window.setInterval(() => {
      if (step < sequence.length) {
        setBootText((previous) => {
          return previous
            ? `${previous}\n${sequence[step]}`
            : sequence[step];
        });

        step++;
      } else {
        window.clearInterval(interval);

        window.setTimeout(() => {
          setIsClicked(false);
          setBootText("");
        }, 1800);
      }
    }, 420);

    return () => window.clearInterval(interval);
  }, [isClicked]);

  /* ---------------------------------------------------------
     NAVIGATION EVENTS
  --------------------------------------------------------- */

  useEffect(() => {
    const handleNavClick = (event: Event) => {
      const customEvent = event as CustomEvent;
      const section = customEvent.detail?.section;

      let newMode: DeveloperMode = "idle";

      if (section === "about") newMode = "looking_left";
      if (section === "work") newMode = "coding";
      if (section === "experience") newMode = "looking_right";
      if (section === "skills") newMode = "coding";
      if (section === "contact") newMode = "contact";

      setNavMode(newMode);

      window.setTimeout(() => {
        setNavMode(null);
      }, 3000);
    };

    window.addEventListener("nav-click", handleNavClick);

    return () => {
      window.removeEventListener("nav-click", handleNavClick);
    };
  }, []);

  /* ---------------------------------------------------------
     CURRENT MODE
  --------------------------------------------------------- */

  const currentMode: DeveloperMode = isClicked
    ? "coding"
    : navMode || mode;

  /* ---------------------------------------------------------
     CHARACTER TRACKING
  --------------------------------------------------------- */

  const headX =
    currentMode === "looking_left"
      ? -2
      : currentMode === "looking_right"
        ? 2
        : mousePos.x * 1.8;

  const headY = mousePos.y * 0.8;

  const eyesX =
    currentMode === "looking_left"
      ? -2.5
      : currentMode === "looking_right"
        ? 2.5
        : mousePos.x * 2.5;

  const eyesY = mousePos.y * 1.2;

  const isCoding = currentMode === "coding";
  const isContact = currentMode === "contact";
  const isProject = currentMode === "project";

  /* ---------------------------------------------------------
     HELPERS
  --------------------------------------------------------- */

  const hover = (name: string) => {
    // Tooltips removed per user request
  };

  const clearHover = () => { };

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-10xl mx-auto transform hover:scale-105 transition-transform duration-500 ${className}`}
      onClick={() => {
        if (!isClicked) setIsClicked(true);
      }}
    >

      {/* =====================================================
          BOOT TERMINAL
      ===================================================== */}

      {isClicked && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="
            absolute
            right-1/2
            top-4
            -translate-x-1/2
            z-40
            w-[280px]
            sm:w-[340px]
            bg-[#080909]
            border
            border-[#F4E638]
            shadow-[6px_6px_0_rgba(244,230,56,0.25)]
            pointer-events-none
          "
        >
          <div className="flex items-center gap-2 border-b border-[#202923] px-3 py-2">
            <span className="h-2 w-2 bg-[#35E879]" />
            <span className="font-mono text-[9px] text-[#35E879]">
              aman@portfolio:~
            </span>
          </div>

          <pre className="whitespace-pre-wrap px-4 py-4 font-mono text-[9px] leading-5 text-[#35E879]">
            {bootText}
            {bootText.split("\n").length < 5 && (
              <span className="animate-pulse">_</span>
            )}
          </pre>
        </motion.div>
      )}

      {/* =====================================================
          MAIN PIXEL ART
      ===================================================== */}

      <svg
        viewBox="0 0 180 120"
        width="100%"
        height="auto"
        preserveAspectRatio="xMidYMid meet"
        shapeRendering="crispEdges"
        className="w-full h-auto select-none"
        role="img"
        aria-label="Pixel art of Aman working at a coding workstation"
        onMouseLeave={clearHover}
      >
        <defs>
          <style>
            {`
              @keyframes pixelBlink {
                0%, 94%, 100% {
                  opacity: 1;
                }
                97% {
                  opacity: 0;
                }
              }

              @keyframes pixelTyping {
                0% {
                  transform: translateY(0px);
                }
                50% {
                  transform: translateY(1px);
                }
                100% {
                  transform: translateY(0px);
                }
              }

              @keyframes steam {
                0% {
                  transform: translateY(2px);
                  opacity: 0.15;
                }
                50% {
                  opacity: 0.5;
                }
                100% {
                  transform: translateY(-4px);
                  opacity: 0;
                }
              }

              @keyframes monitorGlow {
                0%, 100% {
                  opacity: 0.7;
                }
                50% {
                  opacity: 1;
                }
              }

              @keyframes catSleep {
                0%, 100% {
                  transform: translateY(0px);
                }
                50% {
                  transform: translateY(1px);
                }
              }

              @keyframes ledBlink {
                0%, 80%, 100% {
                  opacity: 1;
                }
                90% {
                  opacity: 0.2;
                }
              }

              .pixel-blink {
                animation: pixelBlink 4s steps(2) infinite;
              }

              .pixel-typing {
                animation: pixelTyping 0.28s steps(2) infinite;
              }

              .pixel-steam {
                animation: steam 2s steps(4) infinite;
              }

              .monitor-glow {
                animation: monitorGlow 2.2s steps(3) infinite;
              }

              .pixel-cat {
                animation: catSleep 2.8s steps(2) infinite;
              }

              .pixel-led {
                animation: ledBlink 1.8s steps(2) infinite;
              }

              @media (prefers-reduced-motion: reduce) {
                .pixel-blink,
                .pixel-typing,
                .pixel-steam,
                .monitor-glow,
                .pixel-cat,
                .pixel-led {
                  animation: none !important;
                }
              }
            `}
          </style>
        </defs>

        {/* Background removed per user request */}

        {/* =================================================
            MONITOR
        ================================================= */}

        <g
          id="monitor"
          onMouseEnter={() => hover("CODE_EDITOR")}
          onMouseLeave={clearHover}
        >
          {/* monitor shadow */}
          <rect
            x="47"
            y="43"
            width="62"
            height="35"
            fill="#020303"
          />

          {/* outer monitor */}
          <rect
            x="45"
            y="39"
            width="66"
            height="37"
            fill="#111514"
            stroke={COLORS.outlineLight}
            strokeWidth="1"
          />

          {/* pixel frame */}
          <rect
            x="48"
            y="42"
            width="60"
            height="31"
            fill={COLORS.black}
            stroke="#29332E"
            strokeWidth="1"
          />

          {/* top monitor bar */}
          <rect
            x="48"
            y="42"
            width="60"
            height="4"
            fill="#151B18"
          />

          <rect
            x="51"
            y="44"
            width="2"
            height="1"
            fill={COLORS.green}
          />

          <rect
            x="103"
            y="43"
            width="2"
            height="2"
            fill={COLORS.yellow}
            className="pixel-led"
          />

          {/* screen */}
          <rect
            x="50"
            y="47"
            width="56"
            height="24"
            fill="#050807"
          />

          {/* screen glow */}
          <rect
            x="51"
            y="48"
            width="54"
            height="22"
            fill={COLORS.green}
            opacity="0.025"
            className="monitor-glow"
          />

          {/* code content */}
          {currentMode === "idle" && (
            <g fontFamily="monospace" fontSize="3">
              <text x="54" y="52" fill={COLORS.green}>
                &gt; aman@portfolio:~
              </text>
              <text x="54" y="57" fill={COLORS.cyan}>
                $ npm run dev
              </text>
              <text x="54" y="62" fill={COLORS.white} opacity="0.6">
                ready on localhost
              </text>
              <rect
                x="54"
                y="66"
                width="2"
                height="3"
                fill={COLORS.green}
                className="pixel-blink"
              />
            </g>
          )}

          {currentMode === "coding" && (
            <g fontFamily="monospace" fontSize="3">
              <text x="54" y="52" fill={COLORS.yellow}>
                &gt; npm run dev
              </text>
              <text x="54" y="57" fill={COLORS.green}>
                ✓ compiling...
              </text>
              <text x="54" y="62" fill={COLORS.cyan}>
                ✓ components loaded
              </text>
              <text x="54" y="67" fill={COLORS.white}>
                ✓ server ready
              </text>
              <rect
                x="75"
                y="66"
                width="2"
                height="3"
                fill={COLORS.green}
                className="pixel-blink"
              />
            </g>
          )}

          {currentMode === "project" && (
            <g fontFamily="monospace" fontSize="3">
              <text x="54" y="52" fill={COLORS.yellow}>
                PROJECT://
              </text>
              <text x="54" y="57" fill={COLORS.green}>
                SPOKENHANDS
              </text>
              <text x="54" y="62" fill={COLORS.cyan}>
                Python / Node
              </text>
              <text x="54" y="67" fill={COLORS.white}>
                computer vision
              </text>
            </g>
          )}

          {currentMode === "contact" && (
            <g fontFamily="monospace" fontSize="3">
              <text x="54" y="52" fill={COLORS.green}>
                &gt; ./contact.sh
              </text>
              <text x="54" y="57" fill={COLORS.yellow}>
                connection ready
              </text>
              <text x="54" y="62" fill={COLORS.white}>
                aman@portfolio
              </text>
              <rect
                x="54"
                y="66"
                width="2"
                height="3"
                fill={COLORS.green}
                className="pixel-blink"
              />
            </g>
          )}

          {(currentMode === "looking_left" ||
            currentMode === "looking_right") && (
              <g fontFamily="monospace" fontSize="3">
                <text x="54" y="53" fill={COLORS.green}>
                  &gt; navigating...
                </text>
                <text x="54" y="59" fill={COLORS.white} opacity="0.7">
                  loading section
                </text>
                <rect
                  x="54"
                  y="65"
                  width="24"
                  height="2"
                  fill={COLORS.outlineLight}
                />
                <rect
                  x="54"
                  y="65"
                  width="12"
                  height="2"
                  fill={COLORS.yellow}
                />
              </g>
            )}

          {/* monitor stand */}
          <rect x="72" y="76" width="12" height="7" fill="#1A201D" />
          <rect x="67" y="82" width="22" height="2" fill="#252C28" />
          <rect x="69" y="84" width="18" height="1" fill="#101311" />
        </g>

        {/* =================================================
            CPU / SERVER
        ================================================= */}

        <g
          id="cpu"
          onMouseEnter={() => hover("SERVER")}
          onMouseLeave={clearHover}
        >
          <rect
            x="106"
            y="56"
            width="13"
            height="28"
            fill="#101311"
            stroke={COLORS.outlineLight}
            strokeWidth="1"
          />

          <rect
            x="109"
            y="60"
            width="7"
            height="1"
            fill="#2A322E"
          />

          <rect
            x="109"
            y="64"
            width="7"
            height="1"
            fill="#2A322E"
          />

          <rect
            x="109"
            y="68"
            width="7"
            height="1"
            fill="#2A322E"
          />

          <rect
            x="110"
            y="75"
            width="2"
            height="2"
            fill={COLORS.green}
            className={isCoding ? "pixel-led" : ""}
          />

          <rect
            x="114"
            y="75"
            width="2"
            height="2"
            fill={COLORS.yellow}
          />
        </g>

        {/* =================================================
            DESK LAMP
        ================================================= */}

        <g
          id="lamp"
          onMouseEnter={() => hover("ILLUMINATION")}
          onMouseLeave={clearHover}
        >
          <rect x="148" y="82" width="14" height="2" fill="#1A1E1C" />

          <rect
            x="154"
            y="54"
            width="2"
            height="28"
            fill="#202522"
          />

          <polygon
            points="154,56 141,47 142,45 157,53"
            fill="#202522"
          />

          <polygon
            points="138,44 151,46 146,54 136,51"
            fill="#171A18"
            stroke="#303833"
            strokeWidth="1"
          />

          <rect
            x="143"
            y="48"
            width="3"
            height="2"
            fill={COLORS.yellow}
          />

          {/* light cone */}
          <polygon
            points="143,52 128,82 165,82 147,52"
            fill={COLORS.yellow}
            opacity={isCoding ? "0.08" : "0.045"}
          />
        </g>

        {/* =================================================
            DESK
        ================================================= */}

        <g
          id="desk"
          onMouseEnter={() => hover("WORKSPACE")}
          onMouseLeave={clearHover}
        >
          <rect
            x="8"
            y="84"
            width="164"
            height="5"
            fill={COLORS.wood}
          />

          <rect
            x="8"
            y="84"
            width="164"
            height="2"
            fill={COLORS.woodLight}
          />

          <rect x="14" y="89" width="6" height="25" fill="#141613" />
          <rect x="160" y="89" width="6" height="25" fill="#141613" />

          <rect x="18" y="90" width="2" height="23" fill="#20231F" />
          <rect x="160" y="90" width="2" height="23" fill="#20231F" />
        </g>

        {/* =================================================
            BOOKS
        ================================================= */}

        <g
          id="books"
          onMouseEnter={() => hover("KNOWLEDGE")}
          onMouseLeave={clearHover}
        >
          <rect
            x="20"
            y="78"
            width="20"
            height="6"
            fill="#101311"
          />

          <rect
            x="22"
            y="76"
            width="17"
            height="3"
            fill="#1C211E"
          />

          <rect
            x="24"
            y="73"
            width="15"
            height="3"
            fill="#252B27"
          />

          <rect x="25" y="74" width="11" height="1" fill={COLORS.green} />

          <rect
            x="29"
            y="70"
            width="12"
            height="3"
            fill="#181D1A"
          />

          <rect
            x="31"
            y="71"
            width="6"
            height="1"
            fill={COLORS.yellow}
          />

          <text
            x="23"
            y="82"
            fill={COLORS.cyan}
            fontFamily="monospace"
            fontSize="2"
          >
            JS
          </text>
        </g>

        {/* =================================================
            COFFEE
        ================================================= */}

        <g
          id="coffee"
          onMouseEnter={() => hover("FUEL")}
          onMouseLeave={clearHover}
        >
          <rect
            x="11"
            y="76"
            width="8"
            height="8"
            fill="#111513"
            stroke="#2D3530"
            strokeWidth="1"
          />

          <rect x="19" y="78" width="3" height="4" fill="#171B18" />

          <rect
            x="13"
            y="79"
            width="4"
            height="2"
            fill={COLORS.green}
          />

          <g
            className="pixel-steam"
            opacity="0.7"
          >
            <rect x="13" y="72" width="1" height="3" fill={COLORS.white} />
            <rect x="16" y="70" width="1" height="4" fill={COLORS.white} />
          </g>
        </g>

        {/* =================================================
            KEYBOARD
        ================================================= */}

        <g
          id="keyboard"
          onMouseEnter={() => hover(isCoding ? "BUILDING..." : "INPUT")}
          onMouseLeave={clearHover}
          className={isCoding ? "pixel-typing" : ""}
        >
          <rect
            x="53"
            y="84"
            width="40"
            height="6"
            fill="#151A17"
            stroke="#303833"
            strokeWidth="1"
          />

          {/* keyboard rows */}
          <g fill="#292F2B">
            {Array.from({ length: 10 }).map((_, i) => (
              <rect
                key={`key-a-${i}`}
                x={56 + i * 3.2}
                y="86"
                width="2"
                height="1"
              />
            ))}

            {Array.from({ length: 9 }).map((_, i) => (
              <rect
                key={`key-b-${i}`}
                x={57 + i * 3.2}
                y="88"
                width="2"
                height="1"
              />
            ))}
          </g>

          <rect
            x="68"
            y="88"
            width="10"
            height="1"
            fill={isCoding ? COLORS.green : "#343B36"}
          />
        </g>

        {/* =================================================
            MOUSE
        ================================================= */}

        <g
          id="mouse"
          onMouseEnter={() => hover("POINTER")}
          onMouseLeave={clearHover}
        >
          <rect
            x="97"
            y="85"
            width="6"
            height="7"
            fill="#181D1A"
            stroke="#303833"
            strokeWidth="1"
          />

          <rect
            x="99"
            y="86"
            width="2"
            height="2"
            fill={COLORS.yellow}
          />
        </g>

        {/* =================================================
            PLANT
        ================================================= */}

        <g
          id="plant"
          onMouseEnter={() => hover("GROWTH")}
          onMouseLeave={clearHover}
        >
          <rect x="126" y="78" width="7" height="6" fill="#191512" />
          <rect x="128" y="75" width="2" height="5" fill="#253A2D" />
          <rect x="125" y="72" width="4" height="4" fill={COLORS.green} />
          <rect x="130" y="70" width="4" height="5" fill="#35A967" />
          <rect x="132" y="74" width="3" height="3" fill={COLORS.green} />
        </g>

        {/* =================================================
            CHARACTER
        ================================================= */}

        <g
          id="character"
          onMouseEnter={() => hover("AMAN_SHINDE")}
          onMouseLeave={clearHover}
        >
          {/* chair back */}
          <rect
            x="34"
            y="55"
            width="19"
            height="27"
            fill="#101412"
            stroke="#2B342F"
            strokeWidth="1"
          />

          <rect
            x="37"
            y="57"
            width="13"
            height="21"
            fill="#151B18"
          />

          <rect
            x="35"
            y="80"
            width="3"
            height="8"
            fill="#202622"
          />

          <rect
            x="50"
            y="80"
            width="3"
            height="8"
            fill="#202622"
          />

          {/* BODY / HOODIE */}
          <path
            d="
              M30 82
              L30 60
              L33 55
              L39 52
              L46 54
              L52 59
              L54 82
              Z
            "
            fill={COLORS.hoodie}
          />

          {/* hoodie highlight */}
          <rect
            x="34"
            y="59"
            width="17"
            height="19"
            fill={COLORS.hoodieLight}
          />

          {/* hoodie shadow */}
          <rect
            x="34"
            y="74"
            width="17"
            height="6"
            fill={COLORS.hoodieShadow}
          />

          {/* hood */}
          <polygon
            points="32,58 39,51 48,54 52,61 48,65 35,64"
            fill="#101414"
            stroke="#2D3631"
            strokeWidth="1"
          />

          {/* hoodie strings */}
          <rect x="39" y="61" width="1" height="8" fill={COLORS.green} />
          <rect x="45" y="61" width="1" height="8" fill={COLORS.green} />

          <rect x="39" y="68" width="2" height="2" fill={COLORS.yellow} />
          <rect x="44" y="68" width="2" height="2" fill={COLORS.yellow} />

          {/* hoodie pocket */}
          <rect
            x="37"
            y="72"
            width="12"
            height="5"
            fill="#111615"
            stroke="#2C3530"
            strokeWidth="1"
          />

          {/* hoodie logo */}
          <text
            x="40"
            y="76"
            fill={COLORS.green}
            fontFamily="monospace"
            fontSize="2"
          >
            {"</>"}
          </text>

          {/* ===========================
              HEAD
          =========================== */}

          <motion.g
            animate={{
              x: reducedMotion ? 0 : headX,
              y: reducedMotion ? 0 : headY,
            }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 18,
            }}
          >
            {/* neck */}
            <rect
              x="38"
              y="49"
              width="9"
              height="7"
              fill={COLORS.skinShadow}
            />

            {/* ears */}
            <rect
              x="31"
              y="34"
              width="4"
              height="8"
              fill={COLORS.skin}
            />

            <rect
              x="48"
              y="34"
              width="4"
              height="8"
              fill={COLORS.skin}
            />

            {/* face */}
            <rect
              x="33"
              y="25"
              width="18"
              height="25"
              fill={COLORS.skin}
            />

            {/* face shadow */}
            <rect
              x="46"
              y="38"
              width="5"
              height="10"
              fill={COLORS.skinShadow}
            />

            {/* jaw pixels */}
            <rect x="36" y="49" width="12" height="3" fill={COLORS.skin} />
            <rect x="39" y="52" width="7" height="2" fill={COLORS.skinDark} />

            {/* hair base */}
            <path
              d="
                M31 34
                L30 27
                L33 27
                L31 22
                L36 24
                L37 18
                L41 22
                L45 17
                L47 23
                L52 20
                L50 28
                L53 31
                L49 37
                L47 30
                L43 34
                L41 28
                L38 33
                L35 29
                L34 36
                Z
              "
              fill={COLORS.hair}
            />

            {/* hair highlights */}
            <rect x="34" y="24" width="4" height="2" fill={COLORS.hairLight} />
            <rect x="40" y="20" width="4" height="2" fill={COLORS.hairLight} />
            <rect x="46" y="23" width="3" height="2" fill={COLORS.hairLight} />

            {/* front hair */}
            <polygon
              points="33,27 38,31 39,26 43,32 46,25 50,29 48,34 34,34"
              fill={COLORS.hair}
            />

            {/* EYES */}
            <motion.g
              animate={{
                x: reducedMotion ? 0 : eyesX,
                y: reducedMotion ? 0 : eyesY,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 16,
              }}
            >
              <rect
                x="37"
                y="36"
                width="3"
                height="4"
                fill={COLORS.black}
                className="pixel-blink"
              />

              <rect
                x="45"
                y="36"
                width="3"
                height="4"
                fill={COLORS.black}
                className="pixel-blink"
              />
            </motion.g>

            {/* nose */}
            <rect
              x="41"
              y="41"
              width="2"
              height="2"
              fill={COLORS.skinDark}
            />

            {/* mouth */}
            <rect
              x="40"
              y="45"
              width="5"
              height="1"
              fill={COLORS.skinDark}
            />

            {/* subtle blush */}
            <rect
              x="34"
              y="42"
              width="2"
              height="1"
              fill={COLORS.skinShadow}
            />

            <rect
              x="48"
              y="42"
              width="2"
              height="1"
              fill={COLORS.skinShadow}
            />
          </motion.g>

          {/* =================================================
              LEFT ARM
          ================================================= */}

          <g
            className={isCoding ? "pixel-typing" : ""}
            style={{
              transformOrigin: "34px 67px",
            }}
          >
            <polygon
              points="32,59 27,62 24,76 31,78 37,67"
              fill={COLORS.hoodie}
            />

            <rect
              x="25"
              y="73"
              width="8"
              height="5"
              fill={COLORS.skin}
            />

            <rect
              x="25"
              y="73"
              width="8"
              height="2"
              fill={COLORS.skinShadow}
            />
          </g>

          {/* =================================================
              RIGHT ARM
          ================================================= */}

          <g
            className={isCoding ? "pixel-typing" : ""}
            style={{
              transformOrigin: "50px 67px",
            }}
          >
            <polygon
              points="48,59 54,62 58,75 51,78 44,67"
              fill={COLORS.hoodie}
            />

            <rect
              x="50"
              y="73"
              width="8"
              height="5"
              fill={COLORS.skin}
            />

            <rect
              x="50"
              y="73"
              width="8"
              height="2"
              fill={COLORS.skinShadow}
            />
          </g>

          {/* coding particles */}
          {isCoding && (
            <g
              fontFamily="monospace"
              fontSize="3"
              fill={COLORS.green}
            >
              <text x="25" y="53">
                {"</>"}
              </text>
              <text x="56" y="57">
                {"{}"}
              </text>
            </g>
          )}
        </g>

        {/* =================================================
            CAT
        ================================================= */}

        <g
          id="cat"
          onMouseEnter={() => hover("DEBUG_ASSISTANT")}
          onMouseLeave={clearHover}
          className="pixel-cat"
          style={{ transformOrigin: "139px 84px" }}
        >
          {/* body */}
          <rect
            x="136"
            y="81"
            width="15"
            height="6"
            fill="#3B302B"
          />

          {/* head */}
          <rect
            x="133"
            y="78"
            width="9"
            height="8"
            fill="#463933"
          />

          {/* ears */}
          <polygon
            points="134,79 135,75 138,79"
            fill="#463933"
          />

          <polygon
            points="139,79 142,75 142,81"
            fill="#463933"
          />

          {/* face */}
          <rect x="135" y="81" width="1" height="1" fill="#F3F1E8" />
          <rect x="139" y="81" width="1" height="1" fill="#F3F1E8" />

          {/* tail */}
          <path
            d="M149 83 L153 81 L155 84 L153 87"
            fill="none"
            stroke="#3B302B"
            strokeWidth="2"
          />

          {/* sleeping Z */}
          <g
            fontFamily="monospace"
            fontSize="3"
            fill={COLORS.cyan}
          >
            <text x="145" y="77">
              Z
            </text>
            <text x="150" y="73">
              Z
            </text>
          </g>
        </g>

        {/* =================================================
            FOREGROUND PIXELS
        ================================================= */}

        <g>
          <rect x="8" y="93" width="2" height="2" fill={COLORS.yellow} />
          <rect x="14" y="100" width="1" height="1" fill={COLORS.green} />
          <rect x="165" y="96" width="2" height="2" fill={COLORS.cyan} />

          <rect x="102" y="101" width="1" height="1" fill={COLORS.yellow} />
          <rect x="123" y="108" width="2" height="2" fill={COLORS.green} />
        </g>

        {/* =================================================
            STATUS LABEL
        ================================================= */}

        <g>
          <rect
            x="7"
            y="106"
            width="46"
            height="7"
            fill="#090C0A"
            stroke={COLORS.outlineLight}
            strokeWidth="1"
          />

          <rect
            x="10"
            y="109"
            width="2"
            height="2"
            fill={COLORS.green}
            className="pixel-led"
          />

          <text
            x="14"
            y="111"
            fill={COLORS.green}
            fontFamily="monospace"
            fontSize="3"
          >
            AVAILABLE_FOR_WORK
          </text>
        </g>
      </svg>
    </div>
  );
}
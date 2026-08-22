export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  terminalVisual: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "hindustan-sales-corporation",
    number: "01",
    title: "Hindustan Sales Corporation",
    subtitle: "END-TO-END COMMERCIAL MERN PLATFORM",
    description:
      "A production commercial web platform engineered end-to-end with the MERN stack for industrial hardware, pumpsets, and plumbing solutions. Features responsive catalogs, quotation workflows, and optimized client performance.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
    ],
    features: [
      "Full-stack product showcase & catalog architecture",
      "Customer enquiry & quote generation workflow",
      "High-performance responsive UI/UX",
      "Dynamic category filtering & industrial equipment specifications",
    ],
    terminalVisual: [
      "aman@dev:~/hsc-platform$ npm run build",
      "",
      "  ✓ MERN Stack Commercial Platform: ACTIVE",
      "  ✓ Live at: https://hindustansalescorporation.in/",
      "  ┌─────────────────────────────────────────┐",
      "  │  STATUS:  ● Production Ready (Online)    │",
      "  │  STACK:   React · Node · Express · Mongo │",
      "  │  DOMAIN:  hindustansalescorporation.in   │",
      "  └─────────────────────────────────────────┘",
      "",
      "aman@dev:~/hsc-platform$ _",
    ],
    githubUrl: undefined,
    liveUrl: "https://hindustansalescorporation.in/",
    image: "/projects/hindustan-sales.png",
  },
  {
    id: "spokenhands",
    number: "02",
    title: "SpokenHands",
    subtitle: "SIGN LANGUAGE RECOGNITION",
    description:
      "An Indian Sign Language recognition system designed to assist communication by translating recognized gestures into multiple languages including English, Hindi, Kannada, and Marathi.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Python",
      "Git",
    ],
    features: [
      "ISL gesture recognition",
      "Multi-language translation (EN / HI / KN / MR)",
      "Real-time camera input",
      "Accessible communication tool",
    ],
    terminalVisual: [
      "aman@dev:~/spokenhands$ python recognize.py",
      "",
      "  CAMERA ──▶ GESTURE ──▶ RECOGNITION ──▶ TRANSLATION",
      "",
      "  ┌─────────────────────────────────────────┐",
      "  │  INPUT:  ✋ Hand Gesture Detected         │",
      "  │  MODEL:  ISL Recognition v2.0            │",
      "  │  OUTPUT: 'Hello' → नमस्ते → ನಮಸ್ಕಾರ       │",
      "  │  STATUS: ✓ Translation Complete          │",
      "  └─────────────────────────────────────────┘",
      "",
      "aman@dev:~/spokenhands$ _",
    ],
    githubUrl: "#",
    liveUrl: undefined,
  },
  {
    id: "sentinel-ai",
    number: "03",
    title: "Sentinel AI",
    subtitle: "FACE RECOGNITION FOR CCTV",
    description:
      "A real-time face recognition system for CCTV surveillance using Python and OpenCV, featuring database matching, security monitoring, instant alerts, and incident logging.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "OpenCV",
      "dlib",
      "Git",
    ],
    features: [
      "Real-time CCTV face recognition",
      "Face identification & database matching",
      "Security monitoring dashboard",
      "Instant alerts & incident logs",
    ],
    terminalVisual: [
      "aman@dev:~/sentinel$ python monitor.py --cam 01",
      "",
      "  CAM_01  [● LIVE]",
      "  ┌───────────────────────────────┐",
      "  │                               │",
      "  │      [ FACE DETECTED ]        │",
      "  │      ID: MATCH_FOUND          │",
      "  │      CONF: 98.7%              │",
      "  │                               │",
      "  └───────────────────────────────┘",
      "",
      "  STATUS:   ● MONITORING",
      "  DATABASE: ● CONNECTED",
      "  ALERTS:   0 pending",
      "",
      "aman@dev:~/sentinel$ _",
    ],
    githubUrl: "#",
    liveUrl: undefined,
  },
  {
    id: "gesture-presentation",
    number: "04",
    title: "Gesture-Controlled Presentation",
    subtitle: "HANDS-FREE SLIDE NAVIGATION",
    description:
      "A hands-free presentation system using hand gestures for slide navigation and multimedia control, powered by computer vision and Raspberry Pi.",
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Raspberry Pi",
      "Computer Vision",
    ],
    features: [
      "Hand gesture recognition",
      "Slide navigation control",
      "Multimedia control",
      "Raspberry Pi integration",
    ],
    terminalVisual: [
      "aman@rpi:~/gesture$ python present.py",
      "",
      "  CAMERA ──▶ HAND ──▶ CV ENGINE ──▶ CONTROL",
      "",
      "  ┌───────────────────────────────┐",
      "  │  GESTURE: ✋ Swipe Right       │",
      "  │  ACTION:  Next Slide →        │",
      "  │  SLIDE:   07 / 24             │",
      "  │  ENGINE:  MediaPipe v0.10     │",
      "  │  DEVICE:  Raspberry Pi 4      │",
      "  └───────────────────────────────┘",
      "",
      "  STATUS: ● Presenting",
      "  LATENCY: 12ms",
      "",
      "aman@rpi:~/gesture$ _",
    ],
    githubUrl: "#",
    liveUrl: undefined,
  },
];

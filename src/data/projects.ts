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
}

export const projects: Project[] = [
  {
    id: "spokenhands",
    number: "01",
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
    number: "02",
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
    id: "school-erp",
    number: "03",
    title: "School ERP",
    subtitle: "MERN EDUCATION MANAGEMENT PLATFORM",
    description:
      "A MERN-stack School ERP platform developed for managing student information, attendance, leave management, and administrative workflows.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Student information management",
      "Attendance tracking system",
      "Leave management workflows",
      "Administrative dashboards",
    ],
    terminalVisual: [
      "aman@dev:~/school-erp$ npm start",
      "",
      "  ┌──────────────────────────────────┐",
      "  │  SCHOOL ERP v1.0                 │",
      "  ├──────────────────────────────────┤",
      "  │  ├─ /students     [214 records]  │",
      "  │  ├─ /attendance   [active]       │",
      "  │  ├─ /leave        [3 pending]    │",
      "  │  └─ /dashboard    [admin]        │",
      "  ├──────────────────────────────────┤",
      "  │  DB: ● Connected                 │",
      "  │  API: ● Running on :5000         │",
      "  └──────────────────────────────────┘",
      "",
      "aman@dev:~/school-erp$ _",
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

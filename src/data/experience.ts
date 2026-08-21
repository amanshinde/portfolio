export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  contributions: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "ss-inphinite",
    company: "SS Inphinite LLP",
    role: "Full Stack Development Intern",
    startDate: "Sept. 2025",
    endDate: "May 2026",
    location: "Bengaluru, Karnataka",
    contributions: [
      "Developed a MERN-stack School ERP platform featuring student management, attendance, leave management, and administrative dashboards.",
      "Built a MERN-based invoice generation system for streamlined billing workflows.",
      "Developed responsive React components optimized for both desktop and mobile experiences.",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "MERN"],
  },
  {
    id: "dlithe",
    company: "Dlithe Consultancy Services Pvt. Ltd.",
    role: "Python Application Development Intern",
    startDate: "June 2024",
    endDate: "Sept. 2024",
    location: "Belagavi, Karnataka",
    contributions: [
      "Developed Python-based applications following software development best practices.",
      "Performed debugging, testing, and deployment across project lifecycles.",
      "Collaborated on code reviews and software documentation.",
    ],
    technologies: ["Python", "Git", "Testing", "Debugging"],
  },
];

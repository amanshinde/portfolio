export interface Skill {
  name: string;
  level: number; // 1-5, decorative category indicator only
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string; // terminal-style icon
  accent: "green" | "cyan" | "purple";
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "LANGUAGES",
    icon: ">_",
    accent: "green",
    skills: [
      { name: "Python", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "C", level: 4 },
      { name: "C++", level: 4 },
      { name: "SQL", level: 4 },
      { name: "HTML5", level: 5 },
      { name: "CSS3", level: 5 },
    ],
  },
  {
    id: "frameworks",
    title: "FRAMEWORKS",
    icon: "{ }",
    accent: "cyan",
    skills: [
      { name: "React.js", level: 5 },
      { name: "Node.js", level: 5 },
      { name: "Express.js", level: 5 },
      { name: "REST APIs", level: 4 },
    ],
  },
  {
    id: "databases",
    title: "DATABASES",
    icon: "DB",
    accent: "green",
    skills: [
      { name: "MongoDB", level: 5 },
      { name: "MySQL", level: 4 },
    ],
  },
  {
    id: "computer-vision",
    title: "COMPUTER VISION",
    icon: "CV",
    accent: "purple",
    skills: [
      { name: "OpenCV", level: 4 },
      { name: "dlib", level: 4 },
      { name: "MediaPipe", level: 4 },
    ],
  },
  {
    id: "dev-tools",
    title: "DEV TOOLS",
    icon: "~/",
    accent: "cyan",
    skills: [
      { name: "Git", level: 5 },
      { name: "GitHub", level: 5 },
      { name: "VS Code", level: 5 },
      { name: "PyCharm", level: 4 },
    ],
  },
  {
    id: "design",
    title: "DESIGN",
    icon: "◆",
    accent: "purple",
    skills: [
      { name: "Figma", level: 5 },
      { name: "Adobe Illustrator", level: 4 },
      { name: "Photoshop", level: 4 },
      { name: "Canva", level: 5 },
      { name: "Sketch", level: 3 },
    ],
  },
];

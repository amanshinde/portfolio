export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Technologies",
    icon: "💻",
    skills: [
      { name: "Python", icon: "/skills/python.svg" },
      { name: "C", icon: "/skills/c.svg" },
      { name: "C++", icon: "/skills/cplusplus.svg" },
      { name: "JavaScript", icon: "/skills/javascript.svg" },
      { name: "SQL", icon: "/skills/sql.svg" },
      { name: "React.js", icon: "/skills/react.svg" },
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "Express.js", icon: "/skills/express.svg" },
      { name: "HTML5", icon: "/skills/html5.svg" },
      { name: "CSS3", icon: "/skills/css3.svg" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "MySQL", icon: "/skills/mysql.svg" },
      { name: "REST APIs", icon: "/skills/restapi.svg" },
      { name: "JSON", icon: "/skills/json.svg" },
    ],
  },
  {
    title: "Developer Tools",
    icon: "🔧",
    skills: [
      { name: "Git", icon: "/skills/git.svg" },
      { name: "GitHub", icon: "/skills/github.svg" },
      { name: "VS Code", icon: "/skills/vscode.svg" },
      { name: "PyCharm", icon: "/skills/pycharm.svg" },
    ],
  },
  {
    title: "Design Tools",
    icon: "🎨",
    skills: [
      { name: "Figma", icon: "/skills/figma.svg" },
      { name: "Illustrator", icon: "/skills/illustrator.svg" },
      { name: "Photoshop", icon: "/skills/photoshop.svg" },
      { name: "Canva", icon: "/skills/canva.svg" },
      { name: "SketchBook", icon: "/skills/sketchbook.svg" },
    ],
  },
];

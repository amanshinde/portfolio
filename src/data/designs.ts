export interface LogoDesign {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tools: string[];
  deliverables: string[];
  image: string;
}

export const logoDesigns: LogoDesign[] = [
  {
    id: "skin-and-hair-solutions",
    number: "01",
    title: "Skin & Hair Solutions",
    subtitle: "SPECIALITY HOSPITAL IDENTITY",
    category: "Healthcare & Clinical Branding",
    description:
      "Comprehensive brand mark and visual identity designed for a premier skin and hair speciality hospital. Synthesizes medical precision, clinical trust, and modern wellness aesthetics into an iconic vector mark.",
    tools: ["Adobe Illustrator", "Figma", "Vector Geometry"],
    deliverables: ["Primary Mark", "Vector System", "Stationery & Signage"],
    image: "https://res.cloudinary.com/dtvkccdmt/image/upload/v1787483323/1_tchyxc.png",
  },
  {
    id: "hindustan-sales-corporation",
    number: "02",
    title: "Hindustan Sales Corporation",
    subtitle: "HARDWARE & PUMPSET ENTERPRISE",
    category: "Industrial & Commercial Identity",
    description:
      "Bold, industrial brand identity engineered for an established hardware and pumpset enterprise. Focuses on structural solidity, durability, and commercial trustworthiness across print and digital mediums.",
    tools: ["Adobe Illustrator", "Photoshop", "Grid Alignment"],
    deliverables: ["Brandmark", "Industrial Packaging", "Commercial Assets"],
    image: "https://res.cloudinary.com/dtvkccdmt/image/upload/v1787483324/2_v5g3w1.png",
  },
  {
    id: "shree-ganesh-arts",
    number: "03",
    title: "Shree Ganesh Arts",
    subtitle: "ARTISAN MURTI MAKING STUDIO",
    category: "Artisan & Cultural Heritage",
    description:
      "Cultural brand emblem and typography crafted for an artisan Ganesh murti sculpture studio. Blends sacred heritage craftsmanship with refined modern vector contours and balanced spiritual symmetry.",
    tools: ["SketchBook", "Adobe Illustrator", "Digital Inking"],
    deliverables: ["Emblem Mark", "Artisan Seal", "Studio Identity"],
    image: "https://res.cloudinary.com/dtvkccdmt/image/upload/v1787483324/3_aavwaf.png",
  },
];

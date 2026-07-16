export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
};

export const projects: Project[] = [
  {
    title: "MotionFX",
    category: "Blender Add-on",
    description:
      "Professional animation toolkit for Blender artists.",
    image: "/images/projects/motionfx.webp",
    url: "#",
  },

  {
    title: "Asset Browser Pro",
    category: "Pipeline Tool",
    description:
      "Production-ready asset management workflow.",
    image: "/images/projects/asset-browser.webp",
    url: "#",
  },

  {
    title: "Beat the Cancer",
    category: "Short Film",
    description:
      "Personal cinematic short inspired by resilience.",
    image: "/images/projects/beat-the-cancer.webp",
    url: "#",
  },

  {
    title: "Dream Canvas",
    category: "AI Workflow",
    description:
      "Experimental AI-assisted creative workflow.",
    image: "/images/projects/dream-canvas.webp",
    url: "#",
  },
];
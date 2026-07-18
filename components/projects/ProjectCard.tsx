import Image from "next/image";
import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#10131A]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500/40
        hover:shadow-2xl
        hover:shadow-blue-500/10
      "
    >
      {/* Project Image */}

      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Category Badge */}
        <div className="absolute bottom-5 left-5">
          <span className="rounded-full bg-black/50 px-3 py-1 text-xs uppercase tracking-widest text-blue-300 backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="p-8">
        <h3 className="text-3xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 leading-8 text-gray-400">
          {project.description}
        </p>

        <button
          className="
            mt-8
            text-blue-400
            transition
            group-hover:translate-x-2
          "
        >
          Discover Project →
        </button>
      </div>
    </article>
  );
}
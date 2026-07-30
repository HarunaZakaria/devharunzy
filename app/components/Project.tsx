import React from "react";
import Image from "next/image";

interface ProjectLink {
  label: string;
  url: string;
}

const Project = (prop: {
  img: string;
  name: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
}) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-900/70 shadow-2xl shadow-slate-950/30">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={prop.img}
          alt={prop.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-white">{prop.name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          {prop.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {prop.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {prop.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-2 text-sm font-medium text-sky-100 transition hover:bg-sky-500/20"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Project;

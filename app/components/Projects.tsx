import React from "react";
import Project from "./Project";
import ProjectData from "../projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-shell px-6 py-8 sm:px-8 lg:px-10 lg:py-12"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
          Selected work
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          A few launches that balance beauty and performance.
        </h2>
        <p className="mt-3 text-lg leading-8 text-slate-300">
          These projects span polished marketing sites, product experiences, and
          conversion-focused interfaces.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {ProjectData.map((project, index) => (
          <Project
            key={project.id || index}
            img={project.image}
            name={project.title}
            description={project.description}
            technologies={project.technologies}
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

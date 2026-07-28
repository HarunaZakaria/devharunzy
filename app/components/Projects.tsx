import React from "react";
import Image from "next/image";
import Project from "./Project";
import ProjectData from "../projectsData";

const Projects = () => {
  return (
    <div>
      <div className="completed-projects">
        <h2 className="text-2xl font-bold mb-4">Selected projects.</h2>
        <p className="text-lg mb-4">
          A curated selection of recent work spanning startups, indie products
          and open source.
        </p>
      </div>
     <div className="flex flex-wrap  gap-4 justify-center flex-wrap items-center align-center">
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
    </div>
  );
};

export default Projects;

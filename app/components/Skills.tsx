import React from "react";
import skillsData from "../skillsData";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div>
      <div className="flex mt-12 mb-24 flex-col">
        <div>
          <h2 className="text-2xl font-bold mb-4">Tools of the trade.</h2>
          <p className="text-lg mb-4">
            I use a variety of tools and technologies to build modern web
            applications.
          </p>
        </div>
        <div>
          <Skill />
        </div>
      </div>
    </div>
  );
};

export default Skills;

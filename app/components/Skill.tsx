import React from "react";
import skillsData from "../skillsData";

const Skill = () => {
  return (
    <div className="flex flex-wrap w-full">
      {skillsData.map((skillData) => (
        <div
          key={skillData.id}
          className="m-4 p-4  bg-gray-200 text-gray-800 rounded text-center shadow-md"
        >
          <h3 className="font-bold">{skillData.name}</h3>
          {skillData.tools.map((tool) => (
            <div>
              <p className="px-4 py-2">
                {tool.name} - {tool.level}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skill;

import React from "react";
import skillsData from "../skillsData";

const Skills = () => {
  // skillsData.forEach((skillData) => {
  //   console.log(skillData);
  // });
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
          <div className="flex flex-wrap w-full">
            {skillsData.map((skillData) => (
              <div
                key={skillData.id}
                className="m-4 p-4  bg-gray-200 text-gray-800 rounded "
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
          {/* <div className="w-1/3 p-4  bg-gray-200 text-gray-800 rounded">
            <h3>Backend</h3>
            <p className=" px-4 py-2">Node.js</p>
            <p className=" px-4 py-2">Express</p>
            <p className=" px-4 py-2 ">MongoDB</p>
            <p className=" px-4 py-2 ">PostgreSQL</p>
          </div>
          <div className="w-1/3 p-4  bg-gray-200 text-gray-800 rounded">
            <h3>Styling</h3>
            <p className="px-4 py-2 ">Tailwind CSS</p>
            <p className="px-4 py-2 ">Bootstrap</p>
            <p className="px-4 py-2 ">Material UI</p>
          </div>
          <div className="w-1/3 p-4  bg-gray-200 text-gray-800 rounded">
            <h3>Version Control</h3>
            <p className="px-4 py-2 ">Git</p>
            <p className="px-4 py-2 ">GitHub</p>
            <p className="px-4 py-2 ">GitLab</p>
          </div>
          <div className="w-1/3 p-4  bg-gray-200 text-gray-800 rounded">
            <h3>Deployment</h3>
            <p className="px-4 py-2 ">Vercel</p>
            <p className="px-4 py-2 ">Netlify</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;

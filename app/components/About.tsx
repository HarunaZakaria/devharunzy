import React from "react";

const About = () => {
  return (
    <div>
      <div className="about-me flex justify-between w-full mt-12 mb-24 flex-wrap items-center align-center gap-4">
        <div className="about-text  flex  justify-between w-full about-me-container ">
          <div className="w-1/2 flex flex-col justify-center items-center align-center gap-4">
            <h2 className="text-2xl font-bold mb-4 about-me-title">
              Crafting interfaces with intent.
            </h2>
            <p className="text-lg mb-4 about-me-description">
              I am a passionate web developer with experience in building modern
              web applications using React, Next.js, and other technologies. I
              love creating user-friendly and responsive websites that provide a
              great user experience.
            </p>
            <p className="text-lg mb-4 about-me-description">
              My mission is simple: make the web faster, more accessible and
              more beautiful — one component at a time. I partner with startups
              and agencies to ship product that users actually enjoy. When I'm
              not coding, you'll find me contributing to open source, mentoring
              juniors, or exploring the intersection of design and engineering.
            </p>
          </div>
          <div className=" flex justify-center items-center align-center gap-4 mb-12 flex-wrap about-me-stats">
            <div>
              <p className="text-lg mb-4 border-2 border-gray-300 rounded-lg p-4 text-center">
                5 +{" "}
                <span className="font-bold text-blue-500">
                  years of experience
                </span>
              </p>
              <p className="text-lg mb-4 border-2 border-gray-300 rounded-lg p-4 text-center">
                30 +{" "}
                <span className="font-bold text-blue-500">
                  projects completed
                </span>
              </p>
            </div>
            <div>
              <p className="text-lg mb-4 border-2 border-gray-300 rounded-lg p-4 text-center">
                40 +{" "}
                <span className="font-bold text-blue-500">happy clients</span>
              </p>
              <p className="text-lg border-2 border-gray-300 rounded-lg p-4 text-center">
                60 +{" "}
                <span className="font-bold text-blue-500">
                  open source contributions
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center align-center gap-24 mb-12 flex-wrap border-2 border-gray-300 rounded-lg w-full p-6">
        <p className="text-lg mb-4 flex flex-col justify-center items-center align-center">
          <span className="font-bold text-blue-500">80 +</span> projects
          completed
        </p>
        <p className="text-lg mb-4 flex flex-col justify-center items-center align-center">
          <span className="font-bold text-blue-500">40 +</span> happy clients
        </p>
        <p className="text-lg mb-4 flex flex-col justify-center items-center align-center">
          <span className="font-bold text-blue-500">5 +</span> years of
          experience
        </p>
        <p className="text-lg mb-4 flex flex-col justify-center items-center align-center">
          <span className="font-bold text-blue-500">1200 +</span> github
          contributions
        </p>
      </div>
    </div>
  );
};

export default About;

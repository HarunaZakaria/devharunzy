import React from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section
      id="skills"
      className="section-shell px-6 py-8 sm:px-8 lg:px-10 lg:py-12"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A toolkit tuned for fast, thoughtful product delivery.
          </h2>
          <p className="mt-3 text-lg leading-8 text-slate-300">
            I use a pragmatic mix of frontend and backend tools so ideas can
            move from prototype to launch without friction.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <Skill />
      </div>
    </section>
  );
};

export default Skills;

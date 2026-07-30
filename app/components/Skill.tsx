import React from "react";
import skillsData from "../skillsData";

const Skill = () => {
  return (
    <div className="grid w-full gap-5 md:grid-cols-2">
      {skillsData.map((skillData) => (
        <div
          key={skillData.id}
          className="rounded-[1.4rem] border border-white/10 bg-slate-950/70 p-6"
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-white">
              {skillData.name}
            </h3>
            <span className="rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sky-200">
              {skillData.subtitle}
            </span>
          </div>

          <div className="mt-5 space-y-4">
            {skillData.tools.map((tool) => (
              <div key={tool.name}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>{tool.name}</span>
                  <span className="text-slate-400">{tool.level}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300"
                    style={{ width: tool.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;

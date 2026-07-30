import React from "react";

const highlights = [
  "Design systems that scale without losing personality.",
  "Performance-minded builds with strong accessibility defaults.",
  "Clear communication from concept through launch.",
];

const stats = [
  { value: "4+", label: "years building for the web" },
  { value: "10+", label: "products shipped" },
  { value: "40+", label: "client collaborations" },
  { value: "100%", label: "focus on thoughtful frontend engineering" },
];

const About = () => {
  return (
    <section
      id="about"
      className="section-shell px-6 py-8 sm:px-8 lg:px-10 lg:py-12"
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
            About me
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Crafting elevated interfaces with intent and care.
          </h2>
          <p className="text-lg leading-8 text-slate-300">
            I help ambitious brands turn rough ideas into polished digital
            experiences. My work sits at the intersection of product thinking,
            visual design, and modern frontend engineering.
          </p>
          <ul className="grid gap-3 pt-2 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card rounded-[1.6rem] p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
              >
                <p className="text-3xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-sky-400/20 bg-sky-500/10 p-5 text-sm leading-7 text-slate-200">
            I&apos;m especially energized by projects that need both strong
            visual direction and a thoughtful engineering foundation.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

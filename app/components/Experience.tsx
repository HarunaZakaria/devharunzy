import React from "react";

const highlights = [
  {
    role: "Senior Frontend Developer",
    company: "Creative startup",
    description:
      "Led the frontend modernization of a multi-product suite, raising perceived quality and improving conversions through better flows and interaction design.",
  },
  {
    role: "UI Engineer",
    company: "Design-led agency",
    description:
      "Delivered polished interfaces for enterprise clients, balancing accessibility, responsiveness, and clear content hierarchy across devices.",
  },
  {
    role: "Open source contributor",
    company: "Community projects",
    description:
      "Built reusable components and documentation improvements that helped teams move quickly without compromising consistency.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="section-shell px-6 py-8 sm:px-8 lg:px-10 lg:py-12"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
          Experience
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Product-minded work that feels sharp from the first click.
        </h2>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.role}
            className="rounded-[1.4rem] border border-white/10 bg-slate-950/70 p-6"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300">
              {item.role}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              {item.company}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;

const skills = [
  {
    id: crypto.randomUUID(),
    name: "Frontend Dev",
    tools: [
      { name: "React", level: "93%" },
      { name: "Next.js", level: "80%" },
      { name: "TypeScript", level: "87%" },
      { name: "JavaScript", level: "97%" },
      { name: "HTML5", level: "99%" },
      { name: "CSS3", level: "99%" },
      { name: "Tailwind CSS", level: "94%" },
      { name: "Bootstrap", level: "96%" },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Backend Dev",

    tools: [
      { name: "Node.js", level: "90%" },
      { name: "Express", level: "80%" },
      { name: "MongoDB", level: "85%" },
      { name: "PostgreSQL", level: "80%" },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Version Control",
    tools: [
      { name: "Git", level: "90%" },
      { name: "Github", level: "99%" },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Deployment",
    tools: [
      { name: "Netlify", level: "97%" },
      { name: "Vercel", level: "95%" },
    ],
  },
];

export default skills;

import React from "react";
import Image from "next/image";

const Project = (prop: {
  img: string;
  name: string;
  description: string;
  technologies: string[];
  links: string[];
}) => {
  return (
    <div>
      <div className="p-4  bg-gray-200 text-gray-800 rounded shadow-md m-4">
        <Image
          src={prop.img}
          alt={prop.name}
          width={200}
          height={200}
          className="rounded-lg"
        />
        <h3>{prop.name}</h3>
        <p className="px-4 py-2">{prop.description}</p>
        <p className="flex gap-2">
          <span>{prop.technologies[0]}</span>{" "}
          <span>{prop.technologies[1]}</span>
        </p>
        <p className="flex gap-2">
          <span>{prop.links[0]}</span> <span>{prop.links[1]} </span>
        </p>
      </div>
    </div>
  );
};

export default Project;

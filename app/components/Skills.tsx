import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="flex justify-between w-full mt-12 mb-24 flex-col">
        <div>
          <h2 className="text-2xl font-bold mb-4">Tools of the trade.</h2>
          <p className="text-lg mb-4">
            I use a variety of tools and technologies to build modern web
            applications.
          </p>
        </div>
        <div className="flex flex-wrap w-full gap-4 justify-around items-center align-center">
          <div className="w-1/3 p-4  bg-gray-200 text-gray-800 rounded">
            <h3>Frontend</h3>
            <p className=" px-4 py-2">React</p>
            <p className="px-4 py-2">Next.js</p>
            <p className=" px-4 py-2 ">TypeScript</p>
            <p className=" px-4 py-2">JavaScript</p>
            <p className=" px-4 py-2">HTML5</p>
            <p className=" px-4 py-2">CSS3</p>
          </div>
          <div className="w-1/3 p-4  bg-gray-200 text-gray-800 rounded">
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
          </div>
          {/* <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded w-1/4">
                    <h3>Testing</h3>
                    <p className="px-4 py-2 ">Jest</p>
                    <p className="px-4 py-2 ">React Testing Library</p>
                    <p className="px-4 py-2 ">Cypress</p>
                  </div>
                  <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded w-1/4">
                    <h3>CI/CD</h3>
                    <p className="px-4 py-2 ">GitHub Actions</p>
                    <p className="px-4 py-2 ">CircleCI</p>
                    <p className="px-4 py-2 ">Travis CI</p>
                  </div>
                  <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded w-1/4">
                    <h3>Cloud Services</h3>
                    <p className="px-4 py-2 ">AWS</p>
                    <p className="px-4 py-2 ">Google Cloud</p>
                    <p className="px-4 py-2 ">Azure</p>
                  </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;

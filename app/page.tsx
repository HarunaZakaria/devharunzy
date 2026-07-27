import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between  pt-24 ">
      {/* Header */}
      <div className="header flex  justify-between w-full">
        <div className="logo">
          <h1 className="text-2xl font-bold">Dev.Harunzy</h1>
        </div>
        <div className="nav">
          <ul className="flex gap-16">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Skills</a>
            </li>
            <li>
              <a href="/contact">Project</a>
            </li>
            <li>
              <a href="/contact">Experience</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <p>Let's talk</p>
        </div>
        {/* hero section */}
      </div>
      <div className="hero flex justify-between w-full mt-12 mb-24">
        <div className="hero-text w-1/2 flex flex-col justify-center">
          <p className="text-xl  mb-4">Available for new opportunities</p>
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Harunzy</h1>
          <p className="text-lg mb-4">
            I am a passionate web developer with experience in building modern
            web applications using React, Next.js, and other technologies. I
            love creating user-friendly and responsive websites that provide a
            great user experience.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              View projects
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
              Download CV / Resume
            </button>
          </div>
          <div className="social-icons flex gap-4 mt-4">
            <a
              href="https://github.com/harunzy"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/harunzy"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com/harunzy"
              className="text-blue-500 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://hashnode.com/@harunzy"
              className="text-blue-500 hover:underline"
            >
              Hashnode
            </a>
          </div>
        </div>
        <div className="hero-image  border-2 border-gray-300 rounded-lg overflow-hidden flex justify-center items-center">
          <Image src="/haruna.jpeg" alt="Hero Image" width={450} height={300} />
        </div>
      </div>
      <div className="about-me flex justify-between w-full mt-12 mb-24">
        <div className="about-text  flex  justify-between w-full">
          <div className="w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">
              Crafting interfaces with intent.
            </h2>
            <p className="text-lg mb-4">
              I am a passionate web developer with experience in building modern
              web applications using React, Next.js, and other technologies. I
              love creating user-friendly and responsive websites that provide a
              great user experience.
            </p>
            <p className="text-lg mb-4">
              My mission is simple: make the web faster, more accessible and
              more beautiful — one component at a time. I partner with startups
              and agencies to ship product that users actually enjoy. When I'm
              not coding, you'll find me contributing to open source, mentoring
              juniors, or exploring the intersection of design and engineering.
            </p>
          </div>
          <div className=" flex justify-center items-center align-center gap-4 mb-12">
            <div>
              <p className="text-lg mb-4 border-2 border-gray-300 rounded-lg p-4">
                5 +{" "}
                <span className="font-bold text-blue-500">
                  years of experience
                </span>
              </p>
              <p className="text-lg mb-4 border-2 border-gray-300 rounded-lg p-4">
                30 +{" "}
                <span className="font-bold text-blue-500">
                  projects completed
                </span>
              </p>
            </div>
            <div>
              <p className="text-lg mb-4 border-2 border-gray-300 rounded-lg p-4">
                40 +{" "}
                <span className="font-bold text-blue-500">happy clients</span>
              </p>
              <p className="text-lg border-2 border-gray-300 rounded-lg p-4">
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
      <div className="completed-projects">
        <h2 className="text-2xl font-bold mb-4">Selected projects.</h2>
        <p className="text-lg mb-4">
          A curated selection of recent work spanning startups, indie products
          and open source.
        </p>
      </div>
      <div className="flex flex-wrap w-full gap-4 justify-center flex-wrap items-center align-center">
        <div className="p-4  bg-gray-200 text-gray-800 rounded">
          <Image
            src="/haruna.jpeg"
            alt="Project 6"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <h3>Project 1</h3>
          <p className="px-4 py-2 ">Description of project 1</p>
          <p className="flex gap-2">
            <span>React</span> <span>Next.js</span>
          </p>
          <p className="flex gap-2">
            <span>GitHub</span> <span>Live</span>
          </p>
        </div>
        <div className="p-4  bg-gray-200 text-gray-800 rounded">
          <Image
            src="/haruna.jpeg"
            alt="Project 6"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <h3>Project 2</h3>
          <p className="px-4 py-2 ">Description of project 2</p>
          <p className="flex gap-2">
            <span>React</span> <span>Next.js</span>
          </p>
          <p className="flex gap-2">
            <span>GitHub</span> <span>Live</span>
          </p>
        </div>
        <div className=" p-4  bg-gray-200 text-gray-800 rounded">
          <Image
            src="/haruna.jpeg"
            alt="Project 6"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <h3>Project 3</h3>
          <p className="px-4 py-2 ">Description of project 3</p>
          <p className="flex gap-2">
            <span>React</span> <span>Next.js</span>
          </p>
          <p className="flex gap-2">
            <span>GitHub</span> <span>Live</span>
          </p>
        </div>
        <div className="p-4  bg-gray-200 text-gray-800 rounded">
          <Image
            src="/haruna.jpeg"
            alt="Project 6"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <h3>Project 4</h3>
          <p className="px-4 py-2 ">Description of project 4</p>
          <p className="flex gap-2">
            <span>React</span> <span>Next.js</span>
          </p>
          <p className="flex gap-2">
            <span>GitHub</span> <span>Live</span>
          </p>
        </div>
        <div className="p-4  bg-gray-200 text-gray-800 rounded">
          <Image
            src="/haruna.jpeg"
            alt="Project 6"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <h3>Project 5</h3>
          <p className="px-4 py-2 ">Description of project 5</p>
          <p className="flex gap-2">
            <span>React</span> <span>Next.js</span>
          </p>
          <p className="flex gap-2">
            <span>GitHub</span> <span>Live</span>
          </p>
        </div>
        <div className="p-4  bg-gray-200 text-gray-800 rounded">
          <Image
            src="/haruna.jpeg"
            alt="Project 6"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <h3>Project 6</h3>
          <p className="px-4 py-2 ">Description of project 6</p>
          <p className="flex gap-2">
            <span>React</span> <span>Next.js</span>
          </p>
          <p className="flex gap-2">
            <span>GitHub</span> <span>Live</span>
          </p>
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-6 w-full mt-12 flex justify-center items-center align-center">
        <div className="flex justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

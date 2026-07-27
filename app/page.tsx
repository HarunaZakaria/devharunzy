import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-12">
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
          <div className=" flex justify-center items-center align-center gap-4">
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
    </div>
  );
}

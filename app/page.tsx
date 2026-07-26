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
      <div className="hero flex justify-between w-full mt-12">
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
        </div>
        <div className="hero-image  border-2 border-gray-300 rounded-lg overflow-hidden flex justify-center items-center">
          <Image src="/haruna.jpeg" alt="Hero Image" width={500} height={300} />
        </div>
      </div>
    </div>
  );
}

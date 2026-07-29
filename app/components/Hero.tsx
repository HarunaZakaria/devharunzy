import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="hero flex justify-between w-full pt-12 pb-24 flex-wrap items-center align-center gap-4">
        
        <div className="hero-text w-1/2 flex flex-col justify-center items-center align-center gap-4">
          <p className="text-xl  mb-4 new-opportunities">
            {" "}
            Available for new opportunities
          </p>
          <h1 className="text-4xl font-bold mb-4 hi">Hi, I'm Harunzy</h1>
          <p className="text-lg mb-4 about-me">
            I am a passionate web developer with experience in building modern
            web applications using React, Next.js, and other technologies. I
            love creating user-friendly and responsive websites that provide a
            great user experience.
          </p>
          <div className="flex gap-4 mb-4 flex-wrap justify-center items-center align-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              View projects
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
              Download CV
            </button>
          </div>
          <div className="social-icons flex gap-4 mt-4 flex-wrap justify-center items-center align-center">
            <a
              href="https://github.com/harunzy"
              className="text-blue-500 hover:underline"
            >
              <i className="ph ph-github-logo"></i>
            </a>
            <a
              href="https://linkedin.com/in/harunzy"
              className="text-blue-500 hover:underline"
            >
              <i className="ph ph-linkedin-logo"></i>
            </a>
            <a
              href="https://facebook.com/harunzy"
              className="text-blue-500 hover:underline"
            >
              <i className="ph ph-facebook-logo"></i>
            </a>
            <a
              href="https://hashnode.com/@harunzy"
              className="text-blue-500 hover:underline"
            >
              <i className="ph ph-hashnode-logo"></i>
            </a>
          </div>
        </div>
        <div className="hero-image   overflow-hidden flex justify-center items-center">
          <Image src="/haruna.jpeg" alt="Hero Image" width={300} height={300} className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

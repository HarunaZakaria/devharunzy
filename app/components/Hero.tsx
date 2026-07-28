import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
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
    </div>
  )
}

export default Hero
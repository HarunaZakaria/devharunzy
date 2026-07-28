import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div>
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
    </div>
  )
}

export default Projects
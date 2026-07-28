import React from "react";

const Navbar = () => {
  return (
    <div>
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
    </div>
  );
};

export default Navbar;

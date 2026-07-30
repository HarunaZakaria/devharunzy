import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
        <p>
          &copy; {new Date().getFullYear()} Harunzy. Crafted for modern digital
          experiences.
        </p>
        <div className="flex gap-4">
          <a href="#home" className="transition hover:text-white">
            Home
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

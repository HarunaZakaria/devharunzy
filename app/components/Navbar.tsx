"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#home", label: "Home", id: "home" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#skills", label: "Skills", id: "skills" },
  { href: "/#projects", label: "Projects", id: "projects" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

interface NavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navbar = ({ isOpen, onClose }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      let currentSection = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderLink = (link: typeof navLinks[number]) => {
    const isActive = activeSection === link.id;
    const baseClasses =
      "inline-flex items-center rounded-full px-3 py-1 text-lg font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400";
    const activeClasses = isActive
      ? "bg-sky-500/15 text-sky-300"
      : "text-white/80 hover:text-white hover:bg-white/5";

    return (
      <Link key={link.href} href={link.href} onClick={onClose} className={`${baseClasses} ${activeClasses}`}>
        {link.label}
      </Link>
    );
  };

  return (
    <div>
      <nav aria-label="Primary navigation" className="nav hidden md:block">
        <ul className="flex gap-8 items-center">{navLinks.map((link) => <li key={link.href}>{renderLink(link)}</li>)}</ul>
      </nav>

      <div className={`mobile-nav fixed inset-x-0 top-20 z-50 rounded-b-3xl bg-slate-950/95 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="space-y-4">{navLinks.map((link) => (
            <li key={link.href}>{renderLink(link)}</li>
          ))}</ul>
      </div>
    </div>
  );
};

export default Navbar;

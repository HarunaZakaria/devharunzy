"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-8 lg:px-10">
        <a
          href="#home"
          className="text-lg font-semibold tracking-[0.2em] text-white uppercase"
        >
          Dev.Harunzy
        </a>

        <Navbar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        <a
          href="#contact"
          className="hidden rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-200 transition hover:bg-sky-500/20 md:inline-flex"
        >
          Let&apos;s talk
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-full border border-white/15 bg-white/5 p-2.5 text-white transition hover:border-sky-400/40 hover:bg-white/10 md:hidden"
        >
          <i className={`ph ${menuOpen ? "ph-x" : "ph-list"} text-xl`} />
        </button>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="section-shell animate-fade-in mt-6 overflow-hidden px-6 py-8 sm:px-8 lg:px-10 lg:py-12"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-200">
            <span className="mr-2 h-2.5 w-2.5 rounded-full bg-sky-400" />
            Available for select freelance and product work
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building modern digital products with clarity and momentum.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              I design and build polished web experiences for startups and teams
              that want fast, elegant, and reliable products.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
            >
              Start a conversation
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="rounded-full border border-white/10 px-3 py-1">
              React
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Next.js
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              UI systems
            </span>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://github.com/harunzy"
              className="text-slate-300 transition hover:text-white"
            >
              <i className="ph ph-github-logo text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/harunzy"
              className="text-slate-300 transition hover:text-white"
            >
              <i className="ph ph-linkedin-logo text-2xl" />
            </a>
            <a
              href="https://facebook.com/harunzy"
              className="text-slate-300 transition hover:text-white"
            >
              <i className="ph ph-facebook-logo text-2xl" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-sky-500/20 blur-3xl" />
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-4 shadow-2xl shadow-slate-950/50">
            <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Product Studio
              </span>
            </div>

            <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/80 p-4">
              <Image
                src="/haruna.jpeg"
                alt="Harunzy portrait"
                width={480}
                height={560}
                priority
                className="h-[320px] w-full rounded-[1.1rem] object-cover md:h-[420px]"
              />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <p className="text-sm text-slate-400">Current focus</p>
                <p className="mt-2 font-semibold text-white">
                  UI systems & web performance
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <p className="text-sm text-slate-400">Preferred stack</p>
                <p className="mt-2 font-semibold text-white">
                  Next.js, Tailwind, TypeScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

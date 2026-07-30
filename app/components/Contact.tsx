import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-shell px-6 py-8 sm:px-8 lg:px-10 lg:py-12"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something memorable together.
          </h2>
          <p className="mt-3 text-lg leading-8 text-slate-300">
            If you have a product idea, a redesign, or a launch that needs a
            strong frontend hand, I&apos;d love to hear about it.
          </p>
        </div>

        <div className="glass-card rounded-[1.6rem] p-6 sm:p-8">
          <div className="rounded-[1.2rem] border border-white/10 bg-slate-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300">
              Email
            </p>
            <a
              href="mailto:hello@harunzy.dev"
              className="mt-3 block text-xl font-semibold text-white transition hover:text-sky-300"
            >
              zakariaharuna96@gmail.com
            </a>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Remote-friendly for freelance engagements, product partnerships,
              and team collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

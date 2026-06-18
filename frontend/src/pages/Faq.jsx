import React from 'react'

import { useState } from "react";
import { Plus } from "lucide-react";



const FAQS = [
  {
    q: "What is Terranode, and what does it offer?",
    a: "TERRANODE simplifies your infrastructure project by converting billions of data points into actionable information. The platform uses next-gen technology, incorporating UCD (User Centered Design) and AI to deliver the most user-friendly experience for even the most complex projects. With TERRANODE, you'll have everything you need to stay in control and ensure that the correct information gets to the right people.",
  },
  {
    q: "Can Terranode be customized for different sectors within the construction industry?",
    a: "Yes, Terranode is highly flexible and can be tailored for any sectors such as dams, mining, earthworks, tunnels, railways, buildings, bridges, smart cities, energy, and much more.",
  },
  {
    q: "Can I integrate any sensor in Terranode regardless the supplier?",
    a: "Absolutely, collaboration and integration are at the core of our DNA. When it comes to sensors, Terranode is designed to seamlessly integrate with any suppliers, ensuring compatibility and flexibility for a truly integrated experience.",
  },
  {
    q: "Can I produce automated reports based on a customized project template?",
    a: "Indeed! Leverage the power of our advanced Report module to tailor your report templates and set up automated scheduling, ensuring efficiency and customization for your project needs.",
  },
  {
    q: "What is the pricing of Terranode?",
    a: "At Terranode, we're committed to making advanced technologies accessible to all projects. Our Sales team will assess your project and provide you with unbeatable rates tailored to your needs. Feel free to contact us.",
  },
  {
    q: "Is it Terranode suitable for very large-scale projects?",
    a: "Terranode is designed to handle billions of data records and heavy processing loads, making it an ideal solution for very large-scale projects. Our system is highly scalable, ensuring optimal performance for projects of any size.",
  },
];

const FaqItem = ({ item, isOpen, onToggle }) => {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? "border-white/10 bg-white/[0.02]"
          : "border-white/[0.06] bg-transparent hover:border-white/10"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7 sm:py-6"
      >
        <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
          {item.q}
        </span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/[0.04] text-zinc-300 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <Plus className="h-5 w-5" strokeWidth={2.25} />
        </span>
      </button>

      {/* Animated height via grid-rows 0fr -> 1fr */}
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mx-6 border-t border-white/[0.06] sm:mx-7" />
          <p className="px-6 pb-6 pt-4 text-[15px] leading-relaxed text-zinc-400 sm:px-7">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openSet, setOpenSet] = useState(() => new Set());

  const toggle = (index) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <section className="min-h-screen bg-[#1f1e24] px-5 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Still not convinced?
          <br />
          We&rsquo;ve got the answers
        </h2>

        <div className="mt-12 space-y-4 sm:mt-16">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openSet.has(i)}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-zinc-400 sm:text-base">
          Still have more questions?{" "}
          <a
            href="#contact"
            className="font-medium text-white underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
};





const Faq = () => {
  return (
    <div>
     
      <FaqSection/>
    </div>
  )
}

export default Faq
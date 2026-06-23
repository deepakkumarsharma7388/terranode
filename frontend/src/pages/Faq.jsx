import React from 'react'

import { useState } from "react";
import { Plus } from "lucide-react";



const FAQS = [
  {
    q: "What is TeraStamp, and what does it offer?",
    a: "TeraStamp simplifies your infrastructure project by turning billions of data points into actionable information. The platform draws on next-gen technology, blending UCD (User Centered Design) and AI to deliver the most user-friendly experience even for the most complex projects. With TeraStamp, you'll have everything you need to stay in control and make sure the right information reaches the right people.",
  },
  {
    q: "Can TeraStamp be customized for different sectors within the construction industry?",
    a: "Yes, TeraStamp is highly flexible and can be adapted to any sector, such as dams, mining, earthworks, tunnels, railways, buildings, bridges, smart cities, energy, and much more.",
  },
  {
    q: "Can I integrate any sensor in TeraStamp regardless of the supplier?",
    a: "Absolutely, collaboration and integration sit at the heart of our DNA. When it comes to sensors, TeraStamp is built to integrate smoothly with any supplier, ensuring compatibility and flexibility for a truly unified experience.",
  },
  {
    q: "Can I produce automated reports based on a customized project template?",
    a: "Indeed! Use the power of our advanced Report module to customize your report templates and set up automated scheduling, bringing efficiency and customization to your project needs.",
  },
  {
    q: "What is the pricing of TeraStamp?",
    a: "At TeraStamp, we're dedicated to making advanced technologies available to every project. Our Sales team will review your project and offer you unbeatable rates tailored to your needs. Feel free to reach out to us.",
  },
  {
    q: "Is TeraStamp suitable for very large-scale projects?",
    a: "TeraStamp is built to handle billions of data records and heavy processing loads, making it an ideal fit for very large-scale projects. Our system is highly scalable, ensuring strong performance for projects of any size.",
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
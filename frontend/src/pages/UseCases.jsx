import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/* Color palette */
const colors = {
  accent: "#F26418",
  white: "#FFFFFF",
  text: "#7C8595",
  heading: "#000000",
  border: "#D1D9E6",
  cardBg: "#F9FAFB",
  cardHover: "#F1F3F5",
  ctaBg: "#F26418",
  ctaText: "#FFFFFF",
};

const successStories = [
  {
    title: "LA Purple Line Extension (Section 2)",
    description:
      "Supported the Purple Line 2 project in Los Angeles by providing digital monitoring and data management solutions that improved project visibility, reporting, and decision-making.",
    image: "/la-purple-line-section2.jpg",
    link: "/use-cases/purplelinesection2",
  },
  {
    title: "Purple Line 3 Stations, Los Angeles",
    description:
      "Provided digital monitoring and reporting solutions that enhanced project visibility, data accessibility, and decision-making throughout the construction of the Purple Line 3 Stations project.",
    image: "/la-purple-line-3-stations.jpg",
    link: "/use-cases/purpleline3station",
  },
  {
    title: "VTA's BART Phase II – CP2 EWP 3C",
    description:
      "Delivered digital monitoring and reporting solutions for the VTA BART Phase II CP2 EWP 3C project, improving project visibility and operational efficiency.",
    image: "/vta-bart-phase2-cp2.jpg",
    link: "/use-cases/vtaBartPhase2",
  },
  {
    title: "Purple Line 3 Tunnels",
    description:
      "Provided digital monitoring and reporting solutions for the Purple Line 3 Tunnels project, improving project visibility and efficiency.",
    image: "/la-purple-line-3-tunnels.jpg",
    link: "/use-cases/purpleline3tunnels",
  },
];

/* Story Card – with 2px orange border and light theme */
const StoryCard = ({ story }) => (
  <a
    href={story.link}
    className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-3 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl"
    style={{
      border: `2px solid ${colors.accent}`,
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    }}
  >
    {/* Image */}
    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl">
      <img
        src={story.image}
        alt={story.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>

    {/* Text */}
    <div className="relative z-10 flex flex-1 flex-col px-2 pb-2 pt-5">
      <h3 className="text-xl font-semibold leading-snug text-black transition-colors duration-300 group-hover:text-[#F26418]">
        {story.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[#7C8595] transition-colors duration-300 group-hover:text-[#5A6A7A]">
        {story.description}
      </p>

      {/* Arrow slides + fades in at the bottom-right on hover */}
      <div className="mt-6 flex justify-end">
        <ArrowRight
          aria-hidden="true"
          className="h-5 w-5 -translate-x-2 text-[#F26418] opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
        />
      </div>
    </div>
  </a>
);

const SuccessStories = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      {/* Heading */}
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-6xl">
          Use Cases &amp; <span style={{ color: colors.accent }}>Success Stories</span>
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#7C8595]">
          At TeraStamp, we turn complex data into intelligent solutions that
          drive success across civil engineering and mining projects. Discover
          how our software is helping companies in a range of sectors improve the
          safety, efficiency, and control of their operations.
        </p>
      </div>

      {/* Grid: 3 cards in row one, NEOM flows into row two */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {successStories.map((story) => (
          <StoryCard key={story.title} story={story} />
        ))}
      </div>
    </div>
  </section>
);

const CTAsection = () => {
  return (
    <section className="bg-white min-h-screen w-full flex items-center justify-center p-6 sm:p-12">
      <div
        className="rounded-[32px] w-full max-w-6xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 pt-8 pb-6 md:px-16 md:pt-16 md:pb-12 gap-8 relative"
        style={{ background: colors.accent }}
      >
        {/* Left Content Column */}
        <div className="flex flex-col max-w-md z-10 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Discover the "New" New with TeraStamp
          </h1>
          <p className="text-lg sm:text-xl font-medium opacity-90 mb-8">
            Start building faster today
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#F26418] font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:bg-gray-50 transition-all duration-200 group"
            >
              Claim demo now
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Dashboard/Map Graphic Column – natural image, no filters */}
        <div className="relative w-full md:w-[55%] h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 self-end">
          <img
            src="/VT.jpeg"
            alt="TeraStamp 3D Map Interface"
            className="w-full h-full object-cover"
          />

          {/* Mock Top App Bar – keep subtle */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-black/40 backdrop-blur-sm flex items-center justify-between px-4 text-white text-xs border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded text-white/80">Filters</span>
              <span className="bg-[#F26418] px-3 py-1 rounded font-medium text-white">+ Add Advance</span>
            </div>
          </div>

          {/* Floating Data Card Popover – keep but adjust to orange theme */}
          <div className="absolute top-16 left-6 bg-white/95 backdrop-blur-md text-black text-xs p-4 rounded-xl shadow-xl border border-[#F26418]/30 max-w-[220px] z-20">
            <div className="flex justify-between items-center mb-2">
              <span className="bg-[#F26418]/20 text-[#F26418] px-2 py-0.5 rounded-full text-[10px] font-semibold border border-[#F26418]/30">
                Under review
              </span>
              <span className="text-[#7C8595] text-[10px]">10 min ago</span>
            </div>
            <p className="font-semibold text-black">S514</p>
            <p className="text-[#7C8595] mb-2">Optical Target | Encantada</p>
            <div className="space-y-1 font-mono text-[11px]">
              <p className="text-emerald-600">Delta X: <span className="text-black">-6.7 m</span></p>
              <p className="text-emerald-600">Delta Y: <span className="text-black">-7.7 m</span></p>
              <p className="text-emerald-600">Delta Z: <span className="text-black">-0.7 m</span></p>
            </div>
          </div>

          {/* Map Node Pins Overlay – keep as decorative */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="relative w-full h-full">
              <span className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-blue-500/30 animate-pulse"></span>
              <span className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full ring-4 ring-purple-500/30"></span>
              <span className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-emerald-400 rounded-full ring-4 ring-emerald-400/30"></span>
              <span className="absolute top-1/2 right-1/2 w-3 h-3 bg-amber-500 rounded-full ring-4 ring-amber-500/30"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const UseCases = () => {
  return (
    <div>
      <SuccessStories />
      <CTAsection />
    </div>
  );
};

export default UseCases;
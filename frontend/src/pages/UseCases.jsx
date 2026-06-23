import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";






import { ArrowRight } from "lucide-react";




const successStories = [
  {
    title: "Real-time monitoring at Anji Khad Bridge",
    description:
      "TeraStamp backs the structural safety of India's first cable-stayed rail bridge, set in one of the country's most demanding engineering environments.",
    image: "/bridge.jpeg",
    link: "/use-cases/anji-khad-bridge",
  },
  {
    title: "Metro Santiago de Chile",
    description:
      "Metro de Santiago needed to keep track of rail stability. TeraStamp delivered the solution, reshaping how infrastructure safety is managed. See how our platform safeguarded the stability of this system that is vital to the city.",
    image: "/cit.jpeg",
    link: "/use-cases/metro-santiago",
  },
  {
    title: "Howard Street Tunnel Expansion",
    description:
      "TeraStamp tracked the Howard Street Tunnel expansion in real time, bringing together data from 1,000+ instruments and automating reports. Our platform secured safety, stability, and efficient decision-making across the project.",
    image: "/tunnel.jpeg",
    link: "/use-cases/howard-street-tunnel",
  },
  {
    title: "NEOM Running Tunnels",
    description:
      "This case study looks at how TeraStamp supports one of the world's most ambitious infrastructure programs through integrated monitoring.",
    image: "/pipelin.jpeg",
    link: "/use-cases/neom-running-tunnels",
  },
];

const StoryCard = ({ story }) => (
  <a
    href={story.link}
    className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#1c1d24] p-3 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/10 hover:bg-[#292b35] hover:shadow-2xl hover:shadow-black/40"
  >
    {/* Radial glow that fades into the bottom-right corner on hover */}
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.45),rgba(129,140,248,0)_70%)] opacity-0 blur-2xl transition-opacity duration-500 ease-out group-hover:opacity-100"
    />

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
      <h3 className="text-xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-indigo-200">
        {story.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
        {story.description}
      </p>

      {/* Arrow slides + fades in at the bottom-right on hover */}
      <div className="mt-6 flex justify-end">
        <ArrowRight
          aria-hidden="true"
          className="h-5 w-5 -translate-x-2 text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
        />
      </div>
    </div>
  </a>
);

const SuccessStories = () => (
  <section className="bg-[#141519]">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
      {/* Heading */}
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Use Cases &amp; Success Stories
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-400">
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
    <section className="bg-[#141519] min-h-screen w-full flex items-center justify-center p-6 sm:p-12">
      <div className="bg-[#A4B3FF] rounded-[32px] w-full max-w-6xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 pt-8 pb-6 md:px-16 md:pt-16 md:pb-12 gap-8 relative">
        
        {/* Left Content Column */}
        <div className="flex flex-col max-w-md z-10 text-[#111216]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Discover the "New" New with TeraStamp
          </h1>
          <p className="text-lg sm:text-xl font-medium opacity-90 mb-8">
            Start building faster today
          </p>
          <div>
            {/* Swapped to React Router Link tag */}
            <Link 
              to="/contact" // Set your internal route path here
              className="inline-flex items-center justify-center gap-2 bg-white text-[#111216] font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:bg-gray-50 transition-all duration-200 group"
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

        {/* Right Dashboard/Map Graphic Column */}
        <div className="relative w-full md:w-[55%] h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 self-end">
          <img 
            src="/test1.webp" 
            alt="TeraStamp 3D Map Interface"
            className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity bg-slate-800"
          />
          
          {/* Mock Top App Bar */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-[#1e2026] flex items-center justify-between px-4 text-white text-xs border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-[#2a2d36] px-3 py-1 rounded text-gray-400">Filters</span>
              <span className="bg-[#4f46e5] px-3 py-1 rounded font-medium">+ Add Advance</span>
            </div>
          </div>

          {/* Floating Data Card Popover */}
          <div className="absolute top-16 left-6 bg-[#1a1b20]/95 backdrop-blur-md text-white text-xs p-4 rounded-xl shadow-xl border border-white/10 max-w-[220px] z-20">
            <div className="flex justify-between items-center mb-2">
              <span className="bg-purple-900/50 text-purple-300 px-2 py-0.5 rounded-full text-[10px] font-semibold border border-purple-500/30">
                Under review
              </span>
              <span className="text-gray-500 text-[10px]">10 min ago</span>
            </div>
            <p className="font-semibold text-gray-300">S514</p>
            <p className="text-gray-400 mb-2">Optical Target | Encantada</p>
            <div className="space-y-1 font-mono text-[11px]">
              <p className="text-emerald-400">Delta X: <span className="text-white">-6.7 m</span></p>
              <p className="text-emerald-400">Delta Y: <span className="text-white">-7.7 m</span></p>
              <p className="text-emerald-400">Delta Z: <span className="text-white">-0.7 m</span></p>
            </div>
          </div>

          {/* Map Node Pins Overlay */}
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
      <SuccessStories/>
      <CTAsection/>
    </div>
  )
}

export default UseCases
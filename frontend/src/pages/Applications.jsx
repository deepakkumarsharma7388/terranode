import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Landmark,
  Train,
  Building2,
  Zap,
  Leaf,
  TriangleAlert,
  Activity,
  Building,
  Factory,
  BarChart3,
  Mountain,
  Waypoints,
} from "lucide-react";
import React from 'react';



const Applicards = () => {
  const cards = [
    {
      title: "Dams",
      icon: Landmark,
      link: "/applications/dams",
      span: 1,
      description:
        "Harness data intelligence for enhanced dam safety, maintenance, and performance analysis.",
    },
    {
      title: "Mining",
      icon: Factory,
      link: "/applications/mining",
      span: 1,
      description:
        "Optimize mine and tailings dam operations with intelligent data insights.",
    },
    {
      title: "Tunnels",
      icon: Mountain,
      link: "/applications/tunnels",
      span: 1,
      description:
        "Optimize TBM and Drill & Blast tunnel construction with real-time monitoring and analytics.",
    },
    {
      title: "Transportation",
      icon: Train,
      link: "/applications/transportation",
      span: 1,
      description:
        "Elevate transport infrastructure with intelligent data solutions for roads, railways and transit systems.",
    },
    {
      title: "Construction",
      icon: Building2,
      link: "/applications/construction",
      span: 2,
      description:
        "Transform civil projects with data-led insights for airports, ports, construction sites and more.",
    },
    {
      title: "Bridges",
      icon: Waypoints,
      link: "/applications/bridges",
      span: 1,
      description:
        "Bridge structural intelligence with real-time data analysis for safety and longevity.",
    },
    {
      title: "Energy Infrastructure",
      icon: Zap,
      link: "/applications/energy",
      span: 1,
      description:
        "Empower energy projects with targeted data analysis for wind, nuclear and solar sectors.",
    },
    {
      title: "Environmental Monitoring",
      icon: Leaf,
      link: "/applications/environment",
      span: 1,
      description:
        "Employ remote sensing and climate data for environmental management and sustainability.",
    },
    {
      title: "Landslides & Disaster Management",
      icon: TriangleAlert,
      link: "/applications/landslides",
      span: 2,
      description:
        "Leverage predictive intelligence for effective landslide and disaster response.",
    },
    {
      title: "Pipelines",
      icon: Activity,
      link: "/applications/pipelines",
      span: 1,
      description:
        "Streamline pipeline efficiency with intelligent monitoring for oil, water and gas.",
    },
    {
      title: "Smart Cities",
      icon: Building,
      link: "/applications/smart-cities",
      span: 1,
      description:
        "Drive smart city evolution with integrated data analytics and urban intelligence.",
    },
    {
      title: "Structural Health Monitoring",
      icon: BarChart3,
      link: "/applications/structural-health",
      span: 2,
      description:
        "Reinforce structural integrity with data-centric monitoring for buildings and infrastructure.",
    },
  ];

  return (
    <section className="bg-[#2B2935] py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Tailored for every sector
          </h2>

          <p className="mt-3 text-gray-400 text-base md:text-lg">
            Beyond construction, explore Proqio's applications across industries.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className={card.span === 2 ? "lg:col-span-2" : ""}
              >
                <Link
                  to={card.link}
                  className="
                  group
                  relative
                  block
                  h-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#34313F]
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#6366F1]
                  hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
                "
                >
                  {/* Animated Rings */}
                  <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full border-[22px] border-[#8B8FFF]/10 transition-all duration-700 group-hover:scale-125 group-hover:border-[#8B8FFF]/20" />

                  <div className="absolute -bottom-20 -right-20 h-44 w-44 rounded-full border-[18px] border-[#8B8FFF]/15 transition-all duration-700 delay-75 group-hover:scale-125 group-hover:border-[#8B8FFF]/30" />

                  <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full border-[14px] border-[#8B8FFF]/20 transition-all duration-700 delay-100 group-hover:scale-125 group-hover:border-[#8B8FFF]/40" />

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-[#6366F1]/10 via-transparent to-[#6366F1]/5" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <Icon
                      size={28}
                      className="
                      text-[#8B8FFF]
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:-translate-y-1
                    "
                    />

                    {/* Title */}
                    <h3 className="mt-5 text-lg md:text-xl font-semibold text-white">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      {card.description}
                    </p>

                    {/* Explore */}
                    <div className="mt-6 flex items-center gap-2 text-[#8B8FFF] opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      <span className="text-sm font-medium">
                        Explore
                      </span>
                      <span>→</span>
                    </div>
                  </div>

                  {/* Arrow Button */}
                  <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-all duration-500 group-hover:bg-[#6366F1] group-hover:translate-x-1">
                    →
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};



const CTAsection = () => {
  return (
    <section className="bg-[#2B2935] min-h-screen w-full flex items-center justify-center p-6 sm:p-12">
      <div className="bg-[#A4B3FF] rounded-[32px] w-full max-w-6xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 pt-8 pb-6 md:px-16 md:pt-16 md:pb-12 gap-8 relative">
        
        {/* Left Content Column */}
        <div className="flex flex-col max-w-md z-10 text-[#111216]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Experience the "New" New with Terranode
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
            alt="Terranode 3D Map Interface"
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

const Applications=()=>{
  return(
    <div>
     < Applicards/>
     <CTAsection/> 
    </div>
  )
}

export default Applications;
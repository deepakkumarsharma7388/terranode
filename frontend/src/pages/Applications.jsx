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
      title: 'Dams',
      icon: Landmark,
      link: '/applications/dams',
      span: 1,
      description:
        'Put data intelligence to work for stronger dam safety, maintenance, and performance analysis.',
    },
    {
      title: 'Mining',
      icon: Factory,
      link: '/applications/mining',
      span: 1,
      description:
        'Fine-tune mine and tailings dam operations with smart data insights.',
    },
    {
      title: 'Tunnels',
      icon: Mountain,
      link: '/applications/tunnels',
      span: 1,
      description:
        'Improve TBM and Drill & Blast tunnel construction with real-time monitoring and analytics.',
    },
    {
      title: 'Transportation',
      icon: Train,
      link: '/applications/transportation',
      span: 1,
      description:
        'Boost transport infrastructure with smart data solutions for roads, railways, and transit systems.',
    },
    {
      title: 'Construction',
      icon: Building2,
      link: '/applications/construction',
      span: 2,
      description:
        'Reshape civil projects with data-driven insights for airports, ports, construction sites, and more.',
    },
    {
      title: 'Bridges',
      icon: Waypoints,
      link: '/applications/bridges',
      span: 1,
      description:
        'Add structural intelligence to bridges with real-time data analysis for safety and longevity.',
    },
    {
      title: 'Energy Infrastructure',
      icon: Zap,
      link: '/applications/energy',
      span: 1,
      description:
        'Strengthen energy projects with focused data analysis for wind, nuclear, and solar sectors.',
    },
    {
      title: 'Environmental Monitoring',
      icon: Leaf,
      link: '/applications/environment',
      span: 1,
      description:
        'Use remote sensing and climate data for environmental management and sustainability.',
    },
    {
      title: 'Landslides & Disaster Management',
      icon: TriangleAlert,
      link: '/applications/landslides',
      span: 1, // changed from 2 → 1
      description:
        'Tap into predictive intelligence for effective landslide and disaster response.',
    },
    {
      title: 'Structural Health Monitoring',
      icon: BarChart3,
      link: '/applications/structural-health',
      span: 1, // changed from 2 → 1
      description:
        'Strengthen structural integrity with data-focused monitoring for buildings and infrastructure.',
    },
  ];

  return (
    <section className="overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#32353A] md:text-6xl">
            Tailored for every <span className="text-[#F26418]">sector</span>
          </h2>
          <p className="mt-3 text-base text-[#5C636E] md:text-lg">
            Beyond construction, discover how TeraStamp applies across industries.
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
                className={card.span === 2 ? 'lg:col-span-2' : ''}
              >
                <Link
                  to={card.link}
                  className="group relative block h-full overflow-hidden rounded-2xl border-2 border-[#F26418] bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(242,100,24,0.18)]"
                >
                  {/* Animated Rings */}
                  <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full border-[22px] border-[#F26418]/10 transition-all duration-700 group-hover:scale-125 group-hover:border-[#F26418]/20" />
                  <div className="absolute -bottom-20 -right-20 h-44 w-44 rounded-full border-[18px] border-[#F26418]/15 transition-all duration-700 delay-75 group-hover:scale-125 group-hover:border-[#F26418]/30" />
                  <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full border-[14px] border-[#F26418]/20 transition-all duration-700 delay-100 group-hover:scale-125 group-hover:border-[#F26418]/40" />

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F26418]/10 via-transparent to-[#F26418]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <Icon
                      size={28}
                      className="text-[#F26418] transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                    />

                    {/* Title */}
                    <h3 className="mt-5 text-lg font-semibold text-[#32353A] md:text-xl">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-7 text-[#5C636E]">
                      {card.description}
                    </p>

                    {/* Explore link */}
                    <div className="mt-6 flex translate-x-2 items-center gap-2 text-[#F26418] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      <span className="text-sm font-medium">Explore</span>
                      <span>→</span>
                    </div>
                  </div>

                  {/* Arrow Button */}
                  <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF4EC] text-[#F26418] transition-all duration-500 group-hover:translate-x-1 group-hover:bg-[#F26418] group-hover:text-white">
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
    <section className="flex min-h-screen w-full items-center justify-center bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative flex w-full max-w-6xl flex-col items-center justify-between gap-8 overflow-hidden rounded-[32px] bg-[#F26418] px-6 pt-8 pb-8 md:flex-row md:px-14 md:pt-16 md:pb-12">
        {/* Left Content */}
        <div className="relative z-10 flex max-w-md flex-col text-white">
          <span className="mb-4 inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
            Infrastructure Intelligence
          </span>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Smarter Infrastructure.
            <br />
            Better Decisions.
          </h2>

          <p className="mt-4 text-base leading-7 text-white/90">
            Monitor, analyze, and manage your infrastructure with real-time
            insights, predictive intelligence, and one connected platform.
          </p>

          <div className="mt-7">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#F26418] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Schedule a Demo

              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[280px] w-full self-end overflow-hidden rounded-2xl border border-white/20 shadow-2xl sm:h-[380px] md:h-[420px] md:w-[55%]">
          <img
            src="/la-purple-line-section2.jpg"
            alt="TeraStamp Dashboard"
            className="h-full w-full object-cover"
          />

          {/* Top Bar */}
          <div className="absolute left-0 right-0 top-0 flex h-12 items-center justify-between border-b border-white/5 bg-[#1e2026] px-4 text-xs text-white">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
              <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="rounded bg-[#2a2d36] px-3 py-1 text-gray-400">
                Filters
              </span>
              <span className="rounded bg-[#F26418] px-3 py-1 font-medium">
                + Add Advance
              </span>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute left-4 top-16 z-20 max-w-[210px] rounded-xl border border-white/10 bg-[#1a1b20]/95 p-4 text-xs text-white shadow-xl backdrop-blur-md sm:left-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="rounded-full border border-[#F26418]/30 bg-[#F26418]/20 px-2 py-0.5 text-[10px] font-semibold text-[#F26418]">
                Under review
              </span>

              <span className="text-[10px] text-gray-500">10 min ago</span>
            </div>

            <p className="font-semibold text-gray-300">S514</p>
            <p className="mb-2 text-gray-400">
              Optical Target | Encantada
            </p>

            <div className="space-y-1 font-mono text-[11px]">
              <p className="text-emerald-400">
                Delta X: <span className="text-white">-6.7 m</span>
              </p>

              <p className="text-emerald-400">
                Delta Y: <span className="text-white">-7.7 m</span>
              </p>

              <p className="text-emerald-400">
                Delta Z: <span className="text-white">-0.7 m</span>
              </p>
            </div>
          </div>

          {/* Map Pins */}
          <div className="pointer-events-none absolute inset-0">
            <span className="absolute bottom-1/4 left-1/3 h-3 w-3 animate-pulse rounded-full bg-[#F26418] ring-4 ring-[#F26418]/30"></span>

            <span className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-[#F26418] ring-4 ring-[#F26418]/30"></span>

            <span className="absolute bottom-1/3 right-1/3 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-emerald-400/30"></span>

            <span className="absolute right-1/2 top-1/2 h-3 w-3 rounded-full bg-amber-500 ring-4 ring-amber-500/30"></span>
          </div>
        </div>
      </div>
    </section>
  );
};




const Applications = () => {
  return (
    <div>
      < Applicards />
      <CTAsection />
    </div>
  )
}

export default Applications;
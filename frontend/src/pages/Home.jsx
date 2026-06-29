import { Link } from 'react-router-dom';

import {
  Building2,
  Mountain,
  Activity,
  Leaf,
  Brain,
  Ruler,
  FileBarChart,
  Sparkles,
  MousePointerClick,
  BarChart3,
  Globe,
  Puzzle,
} from 'lucide-react';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";
import React from "react";
import { Check } from "lucide-react";


import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


import { MessageCircle } from "lucide-react";

import {
  
  Map,
  Zap,
 
  Layers,
  Bell,
  ArrowRight,
} from "lucide-react";







const APPS = [
  { name: 'Tunnels', desc: 'TBM monitoring, convergence tracking, and advance analytics.' },
  { name: 'Mining', desc: 'Operational intelligence for mines and tailings dams.' },
  { name: 'Bridges', desc: 'Structural intelligence for safety and longevity.' },
  { name: 'Dams', desc: 'Continuous safety and performance analysis.' },
  { name: 'Transportation', desc: 'Intelligent data for roads, rail, and transit.' },
  { name: 'Civil & Construction', desc: 'Insight for airports, ports, and earthworks.' },
];

const HeroSection = () => (
  <section className="relative flex min-h-[750px] items-center overflow-hidden bg-[#26282C] md:min-h-[850px] lg:min-h-screen font-body">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full w-full scale-[3] object-cover object-center sm:scale-100"
      src="/herosectionvideo.mov"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#26282C] via-[#26282C]/70 to-[#26282C]/20" />
    <div className="relative mx-auto max-w-7xl px-4 py-16 text-center md:px-6 md:py-24 lg:px-8">
      <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
        <span className="block sm:whitespace-nowrap">
          Smarter <span className="text-[#F26418]">digital insights</span>
        </span>
        <span className="block sm:whitespace-nowrap">
          for infrastructure performance monitoring
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-xl font-medium text-white/90 sm:text-2xl md:text-3xl">
        Visualize, Monitor, Build with Confidence
      </p>
      <Link
        to="/contact"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#F26418] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#D9550F] md:mt-8 md:px-7 md:py-3.5"
      >
        Book a Demo <span aria-hidden>→</span>
      </Link>
    </div>
  </section>
);

const DataPlatformSection = () => {
  const features = [
    { name: "Infrastructure Data Hub", icon: Building2 },
    { name: "Geotechnical Analysis", icon: Mountain },
    { name: "Sensor Monitoring", icon: Activity },
    { name: "Environmental Intelligence", icon: Leaf },
    { name: "AI-Powered Analytics", icon: Brain },
    { name: "Survey & LiDAR Mapping", icon: Ruler },
  ];

  return (
    <section className="overflow-hidden bg-white">
      {/* Standard Site Padding */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="font-body text-3xl leading-tight text-[#32353A] sm:text-4xl md:text-5xl">
              Every project dataset.
              <br />
              <span className="font-bold text-[#32353A]">
                Connected in a single workspace-<span className="text-[#F26418]">TeraStamp</span>
              </span>
            </h2>
            <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-[#5C636E] sm:text-lg">
              TeraStamp integrates project information, monitoring records, and engineering insights into a single digital platform, facilitating seamless collobration and informed decision making.
            </p>

            <motion.a
              href="/contact"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-[5px]
                bg-[#F26418]
                px-7
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-[#F26418]/30
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#D9550F]
                hover:shadow-[#F26418]/40
              "
            >
              Claim a Demo →
            </motion.a>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.15,
            }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {features.map(({ name, icon: Icon }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-[14px]
                  border-2
                  border-[#F26418]
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:bg-[#FFF4EC]
                  hover:shadow-lg
                  hover:shadow-[#F26418]/10
                "
              >
                <Icon
                  className="h-7 w-7 flex-shrink-0 text-[#F26418]"
                  strokeWidth={1.8}
                />
                <span className="font-body text-base font-medium text-[#32353A] md:text-lg">
                  {name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const applications = [
  {
    title: "Bridges",
    description:
      "Monitor structural performance, identify risks early, and improve long-term asset reliability with real-time engineering insights.",
    image:
      "/bridge.jpeg",
    link: "/applications/bridges",
  },
  {
    title: "Tunnels",
    description:
      "Track excavation progress, analyze ground conditions, and enhance tunnel safety through continuous monitoring and analytics.",
    image:
      "/tunnel.jpeg",
    link: "/applications/tunnels",
  },
  {
    title: "Mining",
    description:
      "Improve operational visibility, strengthen safety practices, and optimize resource management with data-driven intelligence.",
    image:
      "/mine.jpeg",
    link: "/applications/mining",
  },
  {
    title: "Dams",
    description:
      "Enhance dam performance and safety with continuous monitoring, predictive analytics, and centralized reporting.",
    image:
      "/dam.jpeg",
    link: "/applications/dams",
  },
  {
    title: "Transportation",
    description:
      "Support roads, railways, metro systems, and transit networks with actionable infrastructure intelligence.",
    image:
      "/road.jpeg",
    link: "/applications/transportation",
  },
  {
    title: "Construction & Civil",
    description:
      "Streamline construction projects with unified data, field monitoring, and real-time project visibility.",
    image:
      "/builapar.jpeg",
    link: "/applications/construction",
  },
];

const HorizontalScrollSection = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const updateButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    setShowLeftButton(scrollLeft > 5);
    setShowRightButton(scrollLeft < scrollWidth - clientWidth - 5);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    updateButtons();

    container.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    return () => {
      container.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const firstCard = container.querySelector(".application-card");

    if (!firstCard) return;

    const gap = 24; // gap-6
    const scrollAmount = firstCard.offsetWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(updateButtons, 400);
  };

  return (
    <section className="bg-[#F5F6F7]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-[#F26418]">
            Applications
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#32353A] sm:text-4xl md:text-5xl">
            Built for every infrastructure <span className="text-[#F26418]">challenge</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-[#5C636E]">
            Discover how TeraStamp supports monitoring, analytics, and decision-making
            across multiple infrastructure sectors.

          </p>
        </div>

        <div className="relative">
          {/* Left Button */}
          {showLeftButton && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 shadow-lg ring-1 ring-[#E2E5E9] transition hover:scale-105"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="h-5 w-5 text-[#32353A]" />
            </button>
          )}

          {/* Cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
          >
            {applications.map((app) => (
              <div
                key={app.title}
                className="application-card relative h-[420px] w-[280px] shrink-0 overflow-hidden rounded-2xl sm:w-[320px] md:w-[360px]"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-0 z-10 p-6 text-white">
                  <h3 className="text-2xl font-bold">{app.title}</h3>

                  <p className="mt-3 text-sm text-white/90">
                    {app.description}
                  </p>

                  <Link
                    to={app.link}
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#F26418] px-4 py-2 text-sm font-semibold transition hover:bg-[#D9550F]"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          {showRightButton && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-2 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 shadow-lg ring-1 ring-[#E2E5E9] transition hover:scale-105"
              aria-label="Scroll Right"
            >
              <ChevronRight className="h-5 w-5 text-[#32353A]" />
            </button>
          )}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/applications"
            className="inline-flex items-center gap-2 font-semibold text-[#F26418] hover:underline"
          >
            View More Applications →
          </Link>
        </div>
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
};


const slides = [
  {
    title: "Geo-referenced live monitoring",
    description:
      "TeraStamp plots every sensor on a live Google Maps view — not static maps like most competitors — so teams see exactly where each instrument sits along the tunnel alignment.",
    image: "/terastamp-geo-monitoring-map.jpg",
  },
  {
    title: "Real-time time-series insights",
    description:
      "Query millions of data points in seconds and view continuous time-series for every anchor, with action and alert levels overlaid for instant decision-making.",
    image: "/terastamp-realtime-timeseries.jpg",
  },
  {
    title: "Advanced data visualization",
    description:
      "Display multiple parameters on a single graph and reference real-world locations — like the I-405 crossing or grouting zones — for richer, context-aware analytics.",
    image: "/terastamp-shape-array-analytics.jpg",
  },
  {
    title: "Custom instrument display",
    description:
      "Show distinct instrument types — shape arrays, settlement markers, load cells, inclinometers and more — in any colors you choose, with no restrictions.",
    image: "/terastamp-instrument-overview.jpg",
  },
  {
    title: "10+ miles of tunnel coverage",
    description:
      "Built for mega projects: real-time monitoring across the LA Metro Purple Line extensions, covering 10.28 miles of tunnels and four station excavations.",
    image: "/purple-line-tunnel-route-map.jpg",
  },
];

const FeatureCarousel = () => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = slides.length;

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 3500);

    return () => clearInterval(timer);
  }, [total, isPaused]);

  const getOffset = (index) => {
    let offset = index - active;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  return (
    <section className="overflow-hidden bg-white py-[54px] md:py-[86px] font-body">
      <div className="mx-auto max-w-[100rem] px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#F26418]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#F26418]">
            Features
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#26282C] sm:text-4xl md:text-5xl">
            Built to keep you <span className="text-[#F26418]">ahead</span>
          </h2>

          <p className="mt-3 text-base text-[#26282C]/60 sm:text-lg">
            Explore the features that power smarter infrastructure decisions.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative mx-auto mt-8 flex h-[300px] items-center justify-center sm:h-[420px] md:mt-12 md:h-[530px] lg:h-[590px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {slides.map((slide, index) => {
            const offset = getOffset(index);
            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 1;

            return (
              <div
                key={slide.title}
                className="group absolute transition-all duration-700 ease-out"
                style={{
                  transform: `translateX(${offset * 56}%) scale(${
                    isActive ? 1 : 0.6
                  })`,
                  opacity: isVisible ? (isActive ? 1 : 0.4) : 0,
                  zIndex: isActive ? 20 : 10,
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                {/* Image Card */}
                <div
                  className={`relative h-[260px] w-[300px] overflow-hidden rounded-2xl bg-[#26282C] transition-shadow duration-500 sm:h-[380px] sm:w-[520px] md:h-[490px] md:w-[800px] lg:h-[550px] lg:w-[920px] ${
                    isActive
                      ? "shadow-2xl ring-4 ring-[#F26418]"
                      : "shadow-lg ring-1 ring-black/5"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="block h-full w-full object-fill"
                  />

                  {/* Hover Overlay */}
                  {isActive && (
                    <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:p-10">
                      <h3 className="text-xl font-bold text-white sm:text-2xl md:text-4xl">
                        {slide.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm text-white/85 sm:text-base md:text-lg">
                        {slide.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Caption */}
        <div className="mx-auto mt-6 max-w-xl text-center">
          <h3 className="text-xl font-bold text-[#26282C] sm:text-2xl">
            {slides[active].title}
          </h3>

          <p className="mt-2 text-sm text-[#26282C]/60 sm:text-base">
            {slides[active].description}
          </p>
        </div>

        {/* Dots */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === active
                  ? "w-6 bg-[#F26418]"
                  : "w-2 bg-[#26282C]/20 hover:bg-[#26282C]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectSlider = () => {
  const projects = [
    {
      title: "LA Purple Line Extension (Section 2)",
      location: "Los Angeles, CA",
      image: "/la-purple-line-section2.jpg",
    },
    {
      title: "LA Purple Line 3 Stations",
      location: "Los Angeles, CA",
      image: "/la-purple-line-3-stations.jpg",
    },
    {
      title: "VTA's BART Phase II — CP2 EWP 3C",
      location: "San Jose, CA",
      image: "/vta-bart-phase2-cp2.jpg",
    },
    {
      title: "Purple Line 3 Tunnels",
      location: "Los Angeles, CA",
      image: "/la-purple-line-3-tunnels.jpg",
    },
  ];

  return (
    <section className="overflow-hidden bg-[#F5F6F7] py-[58px] font-body md:py-20">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-2xl px-4 text-center md:mb-14">
        <span className="inline-block rounded-full bg-[#F26418]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#F26418]">
          Our Projects
        </span>

        <h2 className="mt-3 text-3xl font-bold text-[#26282C] sm:text-4xl md:text-5xl">
          Trusted on major{" "}
          <span className="text-[#F26418]">infrastructure</span>
        </h2>

        <p className="mt-3 text-base text-[#26282C]/60 sm:text-lg">
          Powering real-time monitoring across landmark tunnel and station
          projects.
        </p>
      </div>

      {/* Slider */}
      <div className="marquee-viewport relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#F5F6F7] to-transparent md:w-28" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#F5F6F7] to-transparent md:w-28" />

        <div className="marquee-track">
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="card-wrapper mx-3 flex-shrink-0 md:mx-4"
            >
              <div className="group relative h-[170px] w-[280px] overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:shadow-2xl hover:ring-[#F26418] sm:h-[200px] sm:w-[330px] md:h-[240px] md:w-[400px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#F26418]">
                    {project.location}
                  </span>

                  <h3 className="mt-1 text-base font-semibold leading-snug text-white sm:text-lg md:text-xl">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-viewport {
          overflow: hidden;
          padding: 10px 0;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marquee 28s linear infinite;
          will-change: transform;
          transform: translate3d(0,0,0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .card-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 170px;
        }

        @media (min-width:640px){
          .card-wrapper{
            height:200px;
          }
        }

        @media (min-width:768px){
          .card-wrapper{
            height:240px;
          }
        }

        @keyframes marquee {
          from {
            transform: translate3d(0,0,0);
          }
          to {
            transform: translate3d(-50%,0,0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};


const features = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    points: [
      "Live & manual instrument readings",
      "Continuous time-series data",
      "Action & alert levels overlaid",
      "Automatic data validation",
    ],
  },
  {
    icon: Map,
    title: "GIS Monitoring Map",
    points: [
      "Live Google Maps integration",
      "Instrument & asset layers",
      "Geo-referenced analytics",
      "Tunnel alignment & zones",
    ],
  },
  {
    icon: Zap,
    title: "Lightning-Fast Queries",
    points: [
      "Millions of data points in seconds",
      "3× faster than competition",
      "Instant historical lookups",
      "Smooth, responsive dashboards",
    ],
  },
  {
    icon: BarChart3,
    title: "Advanced Visualization",
    points: [
      "Advanced 3D visualization tools",
      "Multiple parameters per graph",
      "Shape array & settlement charts",
      "Location-referenced plots",
    ],
  },
  {
    icon: Layers,
    title: "Custom Instrument Display",
    points: [
      "Any instrument type supported",
      "Custom colors, no restrictions",
      "Seamless per-instrument notes",
      "Drawings, images & map services",
    ],
  },
  {
    icon: Bell,
    title: "Alerts & Risk Management",
    points: [
      "Custom thresholds & triggers",
      "Action, alert & alarm levels",
      "Automatic notifications",
      "Escalation workflows",
    ],
  },
];

const FeaturesGrid = () => (
  <section className="relative overflow-hidden bg-[#F26418] py-[58px] md:py-20 font-body">
    {/* Subtle decorative glow */}
    <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

    <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
          Core Platform Features
        </span>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Everything You Need.{" "}
          <span className="text-[#26282C]">All in One Place.</span>
        </h2>
        <p className="mt-3 text-base text-white/85 sm:text-lg">
          TeraStamp brings monitoring, analytics, and project intelligence
          together in a single platform — so your team sees more, knows sooner,
          and acts faster.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/10 md:p-7"
            >
              {/* Concentric ring outlines — radiating from bottom-right corner */}
              <div aria-hidden className="pointer-events-none absolute bottom-0 right-0">
                <span className="absolute bottom-0 right-0 h-[340px] w-[340px] translate-x-1/2 translate-y-1/2 rounded-full border-2 border-[#F26418]/[0.10]" />
                <span className="absolute bottom-0 right-0 h-[250px] w-[250px] translate-x-1/2 translate-y-1/2 rounded-full border-2 border-[#F26418]/[0.16]" />
                <span className="absolute bottom-0 right-0 h-[165px] w-[165px] translate-x-1/2 translate-y-1/2 rounded-full border-2 border-[#F26418]/[0.24]" />
                <span className="absolute bottom-0 right-0 h-[90px] w-[90px] translate-x-1/2 translate-y-1/2 rounded-full border-2 border-[#F26418]/[0.32]" />
              </div>

              {/* Card content (rings ke upar) */}
              <div className="relative flex flex-1 flex-col">
                {/* Icon tile */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F26418]/10 text-[#F26418] transition-colors duration-300 group-hover:bg-[#F26418] group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#26282C] md:text-xl">
                  {feature.title}
                </h3>

                {/* Bullets */}
                <ul className="mt-4 flex-1 space-y-2.5">
                  {feature.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-[#26282C]/70"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F26418]" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Bottom row: Learn more + arrow button */}
                <div className="mt-6 flex items-center justify-between">
                  {/* Fixed anchor for "Learn more" */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F26418] transition-all hover:gap-2.5"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </a>

                  {/* Fixed anchor for circular arrow button */}
                  <a
                    href="#"
                    aria-label={`Explore ${feature.title}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F26418] text-white shadow-lg shadow-[#F26418]/30 transition-all duration-300 hover:bg-[#D9550F] group-hover:scale-110"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);


const benefits = [
  {
    icon: FileBarChart,
    title: "Live Monitoring & Insights",
    description:
      "Track project performance in real time with interactive dashboards and instant reporting.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Intelligence",
    description:
      "Identify patterns, receive proactive alerts, and uncover actionable recommendations.",
  },
  {
    icon: MousePointerClick,
    title: "Designed for Simplicity",
    description:
      "A clean and intuitive experience that makes complex infrastructure data easy to manage.",
  },
  {
    icon: BarChart3,
    title: "Connected Team Collaboration",
    description:
      "Keep teams aligned with shared data, centralized communication, and streamlined workflows.",
  },
  {
    icon: Globe,
    title: "Dedicated Expert Assistance",
    description:
      "Access guidance from industry specialists whenever you need support or technical expertise.",
  },
  {
    icon: Puzzle,
    title: "Flexible & Future-Ready",
    description:
      "Scale seamlessly across projects, integrate diverse datasets, and adapt to evolving requirements.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center rounded-xl bg-[#FFF4EC] px-5 py-2 text-sm font-semibold text-[#C2410C]"
        >
          PLATFORM ADVANTAGES
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 max-w-4xl text-3xl font-semibold leading-tight text-[#32353A] sm:text-4xl md:text-5xl"
        >
          How TeraStamp keeps your infrastructure projects <span className="text-[#F26418]">on track</span>
        </motion.h2>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-2xl border-2 border-[#F26418] bg-white p-5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(242,100,24,0.12)] md:p-6"
              >
                <div className="flex gap-4">
                  <Icon
                    size={40}
                    className="text-[#F26418] transition-all duration-300 group-hover:text-[#D9550F]"
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-[#32353A] md:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[#5C636E] md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


const testimonials = [
  {
    name: "David Carter",
    role: "Infrastructure Program Manager",
    company: "Transportation Authority",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "TeraStamp has simplified the way our teams monitor project performance. Having all critical information in one place has significantly improved decision-making.",
  },
  {
    name: "Sophia Mitchell",
    role: "Engineering Lead",
    company: "Infrastructure Consultancy",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "The platform provides excellent visibility into project data and monitoring activities. Reporting processes are now much faster and more efficient.",
  },
  {
    name: "James Walker",
    role: "Operations Manager",
    company: "Construction Group",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "TeraStamp gives us a clear understanding of project risks and performance trends. The analytics capabilities have become an essential part of our workflow.",
  },
  {
    name: "Olivia Thompson",
    role: "Project Consultant",
    company: "Engineering Solutions",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Collaboration between project teams has improved considerably. Access to centralized information has reduced delays and increased productivity.",
  },
];

const TestimonialsSection = () => {
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="overflow-hidden bg-[#F5F6F7] py-16 md:py-20">
      {/* Heading */}
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F26418]">
          Testimonials
        </p>

        <h2 className="mt-4 text-3xl font-bold text-[#32353A] md:text-5xl">
          Helping teams build with <span className="text-[#F26418]">confidence</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[#5C636E]">
          Discover how organizations across tunneling, mining, transportation, and infrastructure projects use TeraStamp to improve visibility, reduce risk, and make data-driven decisions.
        </p>
      </div>

      {/* Slider */}
      <div className="relative mt-12">
        <div className="testimonial-track flex w-max gap-5">
          {duplicatedTestimonials.map((item, index) => (
            <div
              key={index}
              className="w-[300px] shrink-0 rounded-2xl border border-[#E2E5E9] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#F26418]/50 hover:shadow-md md:w-[340px]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full border-2 border-[#F26418] object-cover"
                />

                <div className="text-left">
                  <h4 className="font-semibold text-[#32353A]">
                    {item.name}
                  </h4>

                  <p className="text-sm text-[#7C8595]">
                    {item.role}
                  </p>

                  <p className="text-sm text-[#F26418]">
                    {item.company}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-left text-sm leading-7 text-[#5C636E]">
                {item.quote}
              </p>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#F5F6F7] to-transparent md:w-32" />

        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#F5F6F7] to-transparent md:w-32" />
      </div>

      <style>{`
        .testimonial-track {
          animation: scrollTestimonials 35s linear infinite;
        }

        .testimonial-track:hover {
          animation-play-state: paused;
        }

        @keyframes scrollTestimonials {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

const SupportSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[28px] bg-[#F26418]"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex items-center px-6 py-8 md:px-10 md:py-10 lg:px-12">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white md:h-16 md:w-16">
                    <MessageCircle
                      size={28}
                      className="text-[#F26418]"
                    />
                  </div>

                  <span className="rounded-lg bg-white/20 px-3 py-1.5 text-sm font-semibold text-white md:text-base">
                    NEW
                  </span>
                </div>

                <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                  Dedicated support
                  <br />
                  from real experts
                </h2>

                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90 md:text-lg">
                  Connect directly with the TeraStamp support team and
                  receive fast, reliable guidance whenever you need help.
                  Get answers, troubleshooting assistance, and expert
                  recommendations without delays.
                </p>

                <Link
                  to="/contact"
                  className="
    mt-6
    inline-flex
    items-center
    gap-2
    rounded-xl
    bg-white
    px-6
    py-3
    text-base
    font-semibold
    text-[#F26418]
    transition-all
    duration-300
    hover:scale-105
    hover:bg-white/90
  "
                >
                  Contact Support →
                </Link>
              </div>
            </div>

            {/* Right Chat UI */}
            <div className="flex items-center justify-center bg-[#FFF4EC] p-4 md:p-5">
              <div className="w-full max-w-[480px] overflow-hidden rounded-2xl border border-[#F3C9A3] bg-white shadow-xl">
                {/* Header */}
                <div className="bg-[#F26418] p-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white p-2">
                      <Sparkles
                        size={18}
                        className="text-[#F26418]"
                      />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold md:text-base">
                        Welcome to TeraStamp Support
                      </h4>

                      <p className="text-xs text-white/80 md:text-sm">
                        Our team is ready to assist you
                      </p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-3 bg-[#FDF8F3] p-4 md:p-5">
                  <div className="max-w-[80%] rounded-xl bg-[#F1F2F4] px-3 py-2 text-xs text-[#32353A] md:text-sm">
                    Hi there! How can we help you today?
                  </div>

                  <div className="ml-auto max-w-[80%] rounded-xl bg-[#F26418] px-3 py-2 text-xs text-white md:text-sm">
                    I need help setting up monitoring dashboards for
                    my project.
                  </div>

                  <div className="max-w-[80%] rounded-xl bg-[#F1F2F4] px-3 py-2 text-xs text-[#32353A] md:text-sm">
                    Absolutely! Our specialists can guide you through
                    dashboard setup, data integration, alerts, and
                    reporting configuration.
                  </div>

                  <div className="max-w-[80%] rounded-xl bg-[#F1F2F4] px-3 py-2 text-xs text-[#32353A] md:text-sm">
                    1. Open your workspace
                    <br />
                    2. Navigate to Dashboards
                    <br />
                    3. Choose a template
                    <br />
                    4. Add widgets & reports
                    <br />
                    5. Save and share
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


const FeatureSection = () => {
  const features = [
    "Track infrastructure performance in real time",
    "Visualize critical data through interactive dashboards",
    "Monitor assets, sensors, and project activities",
    "Create reports and insights with a single click",
  ];

  return (
    <section className="overflow-hidden bg-[#F5F6F7]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-lg bg-[#FFF4EC] px-4 py-2"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[#C2410C]">
            Core Capabilities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4 text-3xl font-bold text-[#32353A] sm:text-4xl md:text-5xl"
        >
          Platform <span className="text-[#F26418]">Capabilities</span>
        </motion.h2>

        {/* Content */}
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left side text */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold leading-tight text-[#32353A] sm:text-3xl md:text-4xl">
              Visualize Critical Project Data in{" "}
              <span className="text-[#F26418]">Real Time</span>
            </h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-5 text-[18px] leading-[1.6] text-[#5C636E]"
            >
              TeraStamp brings project data, monitoring systems, and
              operational insights together in a single platform, helping
              infrastructure teams improve visibility, reduce risks, and make
              faster decisions.
            </motion.p>

            <div className="mt-6 space-y-4">
              {features.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <Check
                    size={20}
                    className="mt-0.5 flex-shrink-0 rounded-full bg-[#F26418] p-1 text-white"
                  />
                  <span className="text-[18px] leading-[1.5] text-[#5C636E]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side video */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-2xl border border-[#E2E5E9] bg-white shadow-lg"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="/terastamp-dynamic-map.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const HeatmapSection = () => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid items-center gap-[15px] lg:grid-cols-2 lg:gap-10">
          {/* Left Side - Video */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="overflow-hidden rounded-2xl border border-[#E2E5E9] bg-white shadow-lg">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="/terastamp-heatmap-map.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold leading-tight text-[#32353A] sm:text-2xl md:text-5xl"
            >
              Gain monitoring insights
              <br />
              through <span className="text-[#F26418]">Heatmaps</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-base leading-relaxed text-[#5C636E] md:text-lg"
            >
              Gain a clear visual understanding of ground movement,
              asset behavior, and structural performance through
              interactive heatmaps. Transform complex monitoring
              data into actionable insights for faster decision-making.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-base leading-relaxed text-[#5C636E] md:text-lg"
            >
              Identify emerging risks early, track changes in real
              time, and maintain visibility across tunnels, mining
              operations, transportation networks, and critical
              infrastructure assets before small issues escalate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const ReportingSection = () => {
  return (
    <section className="overflow-hidden bg-[#F5F6F7]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1"
          >
            <h2 className="text-3xl font-bold leading-tight text-[#32353A] sm:text-4xl md:text-5xl">
              Advanced Reporting for
              <br />
              <span className="text-[#F26418]">Smarter Decisions</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 text-base leading-relaxed text-[#5C636E] md:text-lg"
            >
              Transform{" "}
              <span className="font-semibold text-[#32353A]">
                complex project data
              </span>{" "}
              into meaningful insights with TeraStamp's advanced reporting tools. Create customized reports that highlight the metrics and trends that matter most.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-4 text-base leading-relaxed text-[#5C636E] md:text-lg"
            >
              From routine project reviews to critical stakeholder updates, generate detailed reports that provide a
              <span className="font-semibold text-[#32353A]">
                {" "}complete picture of performance, risks, and operational progress.
              </span>
            </motion.p>

            <div className="mt-8 space-y-5">
              {[
                "Build custom report templates for critical KPIs",
                "Automate report scheduling and delivery",
                "Generate project insights in seconds",
                "Collaborate and share findings across teams",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + index * 0.15,
                    duration: 0.4,
                  }}
                  className="flex items-center gap-3"
                >
                  {/* ✅ यहाँ बदलाव किया गया – ऑरेंज बैकग्राउंड और सफेद टिक */}
                  <Check
                    size={20}
                    className="flex-shrink-0 rounded-full bg-[#F26418] p-0.5 text-white"
                  />
                  <span className="text-base text-[#5C636E] md:text-lg">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side – image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-2xl border border-[#E2E5E9] bg-white shadow-xl"
            >
              <img
                src="/terastamp-report-mocku.jpeg"
                alt="Advanced reporting dashboard showing project insights and KPIs"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};





const ThreeDSection = () => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid items-center gap-[15px] lg:grid-cols-2 lg:gap-10">

          {/* Left Side - Video */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="overflow-hidden rounded-2xl border border-[#E2E5E9] bg-white shadow-lg">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source
                  src="/terastamp-3d-city.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold leading-tight text-[#32353A] sm:text-4xl md:text-5xl"
            >
              Explore projects through
              immersive <span className="text-[#F26418]">3D insights</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-base leading-relaxed text-[#5C636E] md:text-lg"
            >
              Experience a more interactive way to visualize your
              projects with advanced 3D modeling. Navigate through
              assets, structures, and surrounding environments in a
              realistic digital workspace designed for infrastructure
              teams.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-base leading-relaxed text-[#5C636E] md:text-lg"
            >
              Bring monitoring data, alerts, sensors, and project
              intelligence together in one three-dimensional view.
              Gain deeper context, improve situational awareness,
              and make faster decisions across tunnels, mining,
              transportation, and critical infrastructure projects.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};




const DashboardSection = () => {
  return (
    <section className="overflow-hidden bg-[#F5F6F7]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold leading-tight text-[#32353A] sm:text-4xl md:text-5xl"
            >
              Project Intelligence Through Live
              <br />
              <span className="text-[#F26418]">
                Project Visibility
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 text-base leading-relaxed text-[#5C636E] md:text-lg"
            >
              Create personalized dashboard experiences that
              bring your project data together in one place.
              Combine maps, charts, monitoring records, and
              operational metrics into a clear and interactive
              workspace.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-base leading-relaxed text-[#5C636E] md:text-lg"
            >
              Gain instant visibility into project performance,
              monitor trends as they happen, and make faster,
              data-driven decisions across infrastructure,
              transportation, mining, and construction projects.
            </motion.p>
          </motion.div>

          {/* Right side - Image (replaced video) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="overflow-hidden rounded-2xl border border-[#E2E5E9] bg-white shadow-lg">
              <img
                src="/terastamp-convergence-dashboard.png" 
                alt="Interactive dashboard showing project visibility and metrics"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};




const CounterSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-[#32353A] md:text-4xl">
            Infrastructure Intelligence That Delivers <span className="text-[#F26418]">Results</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base text-[#7C8595] md:text-lg">
            Helping infrastructure teams improve efficiency, reduce risk,
            and make faster data-driven decisions.
          </p>
        </div>

        {/* Counter cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <CounterCard
            icon="💰"
            target={20}
            suffix="%"
            prefix="+"
            label="Cost Reduction"
            description="Optimize operations and reduce project expenses through real-time visibility and intelligent analytics."
            delay={0}
          />

          <CounterCard
            icon="⚡"
            target={2}
            suffix="K"
            prefix="+"
            label="Monitoring Events"
            description="Receive critical alerts and actionable intelligence to identify risks before they impact operations."
            delay={300}
          />

          <CounterCard
            icon="⏱️"
            target={5}
            suffix="x"
            prefix=""
            label="Faster Decisions"
            description="Enable teams to act quickly with centralized data, automated reporting, and live project visibility."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};


const CounterCard = ({ icon, target, suffix, prefix, label, description, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // Intersection Observer to trigger animation when card comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const duration = 2000; // 2 seconds
    const startValue = 0;
    const endValue = target;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (endValue - startValue) * eased;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    // Add a small delay before starting
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [isVisible, target, delay]);

  // Format the display value
  const formattedValue = () => {
    if (target === 20) {
      // For percentage, show with 0 decimal places
      return Math.round(count);
    } else if (target === 2) {
      // For 2K, show with 1 decimal place until it reaches the target
      if (count >= 1.9) {
        return count.toFixed(1);
      }
      return count.toFixed(1);
    } else {
      // For 5x, show with 0 decimal places
      return Math.round(count);
    }
  };

  const displayValue = formattedValue();

  return (
    <div
      ref={cardRef}
      className="bg-[#F5F6F7] rounded-2xl p-8 text-center border-2 border-[#F26418] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(242,100,24,0.12)] group"
    >
      {/* Icon */}
      <div className="text-4xl mb-4">{icon}</div>

      {/* Counter value */}
      <div className="text-5xl md:text-6xl font-bold text-[#32353A] mb-2 font-mono tracking-tight">
        {prefix}
        {displayValue}
        {suffix}
      </div>

      {/* Label */}
      <h3 className="text-lg font-semibold text-[#32353A] mb-3">{label}</h3>

      {/* Description */}
      <p className="text-[#7C8595] text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const CTASection = () => (
  <section className="bg-[#F26418] text-white">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8 text-center font-body">
      <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
        Discover TeraStamp in Action
      </h2>

      <p className="mx-auto mt-3 max-w-md text-sm text-white/90 sm:text-base">
        Book a personalized demo and explore how TeraStamp transforms
        project data into actionable insights.
      </p>

      <Link
        to="/contact"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#F26418] transition hover:bg-white/90 sm:mt-7 sm:px-7 sm:py-3.5"
      >
        Request a Demo →
      </Link>
    </div>
  </section>
);





export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <DataPlatformSection />
      <HorizontalScrollSection />

  
      <FeatureCarousel/>
      <FeaturesGrid/>
      <ProjectSlider />
      <BenefitsSection />
      <TestimonialsSection />
      <SupportSection />
      <FeatureSection />
      <HeatmapSection />
      <ReportingSection />
      <ThreeDSection />
      <DashboardSection />
      <CounterSection />

      <CTASection />
    </div>
  );
}
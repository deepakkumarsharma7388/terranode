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
  Clock,
  CheckCircle,
  Layers,
  Bell,

} from "lucide-react";




import {
  X,

  Rocket,
  User,
  Share2,

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
                  transform: `translateX(${offset * 56}%) scale(${isActive ? 1 : 0.6
                    })`,
                  opacity: isVisible ? (isActive ? 1 : 0.4) : 0,
                  zIndex: isActive ? 20 : 10,
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                {/* Image Card */}
                <div
                  className={`relative h-[260px] w-[300px] overflow-hidden rounded-2xl bg-[#26282C] transition-shadow duration-500 sm:h-[380px] sm:w-[520px] md:h-[490px] md:w-[800px] lg:h-[550px] lg:w-[920px] ${isActive
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
              className={`h-2 rounded-full transition-all ${index === active
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




/* ---------- Color Palette ---------- */
const c = {
  section: "#FFFFFF",
  card: "#FFFFFF",
  tile: "#F9FAFB",
  tileHover: "#F1F3F5",
  border: "#D1D9E6",
  borderSoft: "#E2E8F0",
  heading: "#000000",
  text: "#7C8595",
  muted: "#7C8595",
  faint: "#A0AEC0",
  accent: "#F26418",
  accentSoft: "#F26418",
  field: "#F8FAFC",
};

const seedFrom = (str) => {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};
const makeRng = (seed) => {
  let s = seed || 1;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
};

const CardImage = ({ card }) => {
  if (card.image)
    return <img src={card.image} alt={card.title} className="h-full w-full object-cover" />;

  const rng = makeRng(seedFrom(card.title));
  const hue = Math.floor(rng() * 360);
  const main = `hsl(${hue} 70% 55%)`;
  const soft = `hsl(${hue} 55% 78%)`;
  const paper = `hsl(${hue} 30% 96%)`;
  const grid = `hsl(${hue} 20% 88%)`;
  const box = { width: "100%", height: "100%", display: "block" };
  const k = card.kind;

  if (k === "line" || k === "area") {
    const pts = Array.from({ length: 7 }, (_, i) => [8 + i * 24, 24 + rng() * 46]);
    const path = pts.map((p) => p.join(",")).join(" ");
    return (
      <svg viewBox="0 0 160 90" style={box} preserveAspectRatio="none">
        <rect width="160" height="90" fill={paper} />
        {[22, 44, 66].map((y) => (
          <line key={y} x1="0" y1={y} x2="160" y2={y} stroke={grid} strokeWidth="0.6" />
        ))}
        {k === "area" && <polygon points={`8,90 ${path} 152,90`} fill={soft} opacity="0.6" />}
        <polyline points={path} fill="none" stroke={main} strokeWidth="2.4" />
        {pts.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="2.2" fill={main} />
        ))}
      </svg>
    );
  }
  if (k === "bars") {
    const bars = Array.from({ length: 9 }, () => 12 + rng() * 60);
    return (
      <svg viewBox="0 0 160 90" style={box} preserveAspectRatio="none">
        <rect width="160" height="90" fill={paper} />
        {bars.map((h, i) => (
          <rect key={i} x={10 + i * 16} y={84 - h} width="10" height={h} rx="1.5" fill={i % 3 === 0 ? main : soft} />
        ))}
      </svg>
    );
  }
  if (k === "table") {
    return (
      <svg viewBox="0 0 160 90" style={box} preserveAspectRatio="none">
        <rect width="160" height="90" fill={paper} />
        <rect width="160" height="15" fill={soft} />
        {Array.from({ length: 5 }, (_, r) => (
          <g key={r}>
            <rect x="6" y={22 + r * 13} width={18 + rng() * 34} height="4" rx="2" fill={main} opacity="0.75" />
            <rect x="70" y={22 + r * 13} width={20 + rng() * 30} height="4" rx="2" fill={grid} />
            <rect x="118" y={22 + r * 13} width={14 + rng() * 22} height="4" rx="2" fill={grid} />
          </g>
        ))}
      </svg>
    );
  }
  if (k === "map") {
    return (
      <svg viewBox="0 0 160 90" style={box} preserveAspectRatio="none">
        <rect width="160" height="90" fill={`hsl(${hue} 25% 92%)`} />
        <path d={`M0,${50 + rng() * 10} C40,${30 + rng() * 20} 80,70 120,50 150,40 160,55 160,55 L160,90 L0,90 Z`} fill={soft} opacity="0.7" />
        <path d={`M0,${68 + rng() * 8} C50,58 90,80 140,68 160,64 160,72 160,72 L160,90 L0,90 Z`} fill={main} opacity="0.35" />
        {Array.from({ length: 4 }, (_, i) => (
          <circle key={i} cx={20 + rng() * 120} cy={18 + rng() * 40} r="3" fill={main} />
        ))}
      </svg>
    );
  }
  if (k === "gauge") {
    const val = 0.25 + rng() * 0.6;
    const ang = Math.PI * (1 - val);
    const x = 80 + 46 * Math.cos(ang);
    const y = 68 - 46 * Math.sin(ang);
    return (
      <svg viewBox="0 0 160 90" style={box} preserveAspectRatio="none">
        <rect width="160" height="90" fill={paper} />
        <path d="M34,68 A46,46 0 0 1 126,68" fill="none" stroke={grid} strokeWidth="9" strokeLinecap="round" />
        <path d={`M34,68 A46,46 0 0 1 ${x},${y}`} fill="none" stroke={main} strokeWidth="9" strokeLinecap="round" />
        <circle cx="80" cy="68" r="4" fill={main} />
        <text x="80" y="50" textAnchor="middle" fontSize="16" fontWeight="700" fill={main}>
          {Math.round(val * 100)}
        </text>
      </svg>
    );
  }
  if (k === "donut") {
    const a = 0.2 + rng() * 0.4;
    const b = 0.15 + rng() * 0.35;
    const seg = (start, frac, color) => {
      const s = start * 2 * Math.PI - Math.PI / 2;
      const e = (start + frac) * 2 * Math.PI - Math.PI / 2;
      const large = frac > 0.5 ? 1 : 0;
      const r = 30;
      return (
        <path
          d={`M80,45 L${80 + r * Math.cos(s)},${45 + r * Math.sin(s)} A${r},${r} 0 ${large} 1 ${80 + r * Math.cos(e)},${45 + r * Math.sin(e)} Z`}
          fill={color}
        />
      );
    };
    return (
      <svg viewBox="0 0 160 90" style={box} preserveAspectRatio="none">
        <rect width="160" height="90" fill={paper} />
        {seg(0, a, main)}
        {seg(a, b, soft)}
        {seg(a + b, 1 - a - b, grid)}
        <circle cx="80" cy="45" r="15" fill={paper} />
      </svg>
    );
  }
  if (k === "heatmap") {
    return (
      <svg viewBox="0 0 160 90" style={box} preserveAspectRatio="none">
        <rect width="160" height="90" fill={paper} />
        {Array.from({ length: 7 }, (_, x) =>
          Array.from({ length: 4 }, (_, y) => (
            <rect key={`${x}-${y}`} x={10 + x * 21} y={8 + y * 19} width="18" height="16" rx="2" fill={main} opacity={(0.15 + rng() * 0.8).toFixed(2)} />
          ))
        )}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 160 90" style={box} preserveAspectRatio="none">
      <rect width="160" height="90" fill={paper} />
      {[0, 1, 2].map((col) => (
        <g key={col}>
          <rect x={8 + col * 50} y="8" width="44" height="74" rx="4" fill={`hsl(${hue} 25% 90%)`} />
          {Array.from({ length: 1 + Math.floor(rng() * 3) }, (_, i) => (
            <rect key={i} x={12 + col * 50} y={14 + i * 18} width="36" height="14" rx="2" fill={i === 0 ? main : soft} opacity={i === 0 ? 0.85 : 0.7} />
          ))}
        </g>
      ))}
    </svg>
  );
};

const Rich = ({ parts }) => {
  if (typeof parts === "string") return <span>{parts}</span>;
  return (
    <>
      {parts.map((p, i) =>
        p.b ? (
          <strong key={i} className="font-semibold" style={{ color: c.heading }}>
            {p.t}
          </strong>
        ) : (
          <span key={i}>{p.t}</span>
        )
      )}
    </>
  );
};

const Modal = ({ children, onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4"
    style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(2px)" }}
    onClick={onClose}
  >
    <div
      className="relative my-auto w-full max-w-3xl rounded-2xl shadow-2xl"
      style={{ background: c.card, border: `1px solid ${c.border}` }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full"
        style={{ background: "rgba(0,0,0,0.1)", color: c.accent }}
      >
        <X size={18} />
      </button>
      {children}
    </div>
  </div>
);

const FeatureModal = ({ feature, onClose }) => {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const link =
      typeof window !== "undefined"
        ? `${window.location.origin}${window.location.pathname}#${feature.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
        : `#${feature.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    try {
      await navigator.clipboard.writeText(link);
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = link;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (_) { }
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <Modal onClose={onClose}>
      <div className="max-h-[88vh] overflow-y-auto">
        <div className="overflow-hidden rounded-t-2xl" style={{ height: 220, background: "#e2e8f0" }}>
          <CardImage card={feature} />
        </div>

        <div className="px-5 py-5 sm:px-8 sm:py-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold leading-tight sm:text-3xl" style={{ color: c.heading }}>
              {feature.title}
            </h3>
            <div className="flex shrink-0 items-center gap-3">
              <div className="relative">
                <button onClick={share} aria-label="Copy link" className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: c.field, border: `1px solid ${c.border}`, color: copied ? "#38a169" : c.muted }}>
                  {copied ? <Check size={17} /> : <Share2 size={16} />}
                </button>
                {copied && (
                  <span className="absolute right-0 top-11 whitespace-nowrap rounded-md px-2 py-1 text-[11px] font-medium" style={{ background: c.card, border: `1px solid ${c.border}`, color: c.text }}>
                    Link copied!
                  </span>
                )}
              </div>
              <span className="flex items-center gap-1 text-sm" style={{ color: c.faint }}>
                <User size={15} /> {feature.votes}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: c.accent }}>
              {feature.author.slice(0, 1)}
            </div>
            <span className="text-sm font-bold tracking-wide" style={{ color: c.heading }}>
              {feature.author}
            </span>
            <span style={{ color: c.faint }}>|</span>
            <span className="text-sm" style={{ color: c.text }}>
              Posted on {feature.postedOn}
            </span>
          </div>

          <div className="mt-5 space-y-3 border-t pt-5 text-sm leading-relaxed sm:text-[15px]" style={{ borderColor: c.borderSoft, color: c.text }}>
            {feature.intro.map((p, i) => (
              <p key={i}>
                <Rich parts={p} />
              </p>
            ))}
          </div>

          <h4 className="mt-6 mb-2 text-lg font-bold" style={{ color: c.heading }}>
            Key Features &amp; Benefits
          </h4>
          <ul className="space-y-2.5 text-sm leading-relaxed" style={{ color: c.text }}>
            {feature.features.map((f, i) => (
              <li key={i}>
                <span className="mr-1.5" style={{ color: c.accent }}>•</span>
                <strong className="font-semibold" style={{ color: c.heading }}>{f.lead}</strong> {f.text}
                {f.children && (
                  <ul className="mt-2 space-y-2 pl-6">
                    {f.children.map((ch, j) => (
                      <li key={j}>
                        <span className="mr-1.5" style={{ color: c.faint }}>◦</span>
                        <strong className="font-semibold" style={{ color: c.heading }}>{ch.lead}</strong> {ch.text}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <h4 className="mt-6 mb-2 text-lg font-bold" style={{ color: c.heading }}>
            How to Use It
          </h4>
          <ol className="space-y-2.5 text-sm leading-relaxed" style={{ color: c.text }}>
            {feature.steps.map((s, i) => (
              <li key={i} className="flex gap-2.5">
                <span className="font-bold" style={{ color: c.accent }}>{i + 1}.</span>
                <span>
                  {s.lead && <strong className="font-semibold" style={{ color: c.heading }}>{s.lead} </strong>}
                  {s.text}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Modal>
  );
};

const projects = [
  {
    year: "2020",
    title: "LA Purple Line Extension (Section 2)",
    status: "Completed",
    votes: 0,
    kind: "map",
    author: "TERASTAMP",
    postedOn: "May 15",
    image: "/la-purple-line-section2.jpg",
    intro: [
      "TeraStamp was first deployed on the LA Purple Line Extension (Section 2), providing comprehensive digital monitoring for tunnel excavation and station construction.",
      "This project marked the beginning of our journey in transforming infrastructure monitoring through real‑time data and actionable insights.",
    ],
    features: [
      { lead: "End‑to‑end monitoring:", text: "Integrated sensors across the entire 4‑mile tunnel alignment." },
      { lead: "Centralized dashboard:", text: "All data streams consolidated into a single, accessible platform." },
      { lead: "Automated reporting:", text: "Daily and weekly reports generated without manual effort." },
    ],
    steps: [
      { text: "Deployed instrumentation network across the project site." },
      { lead: "Configured alert thresholds:", text: "Set up real‑time notifications for critical deviations." },
      { lead: "Trained team members:", text: "Onboarded engineers and field staff to use the platform." },
    ],
  },
  {
    year: "2023",
    title: "LA Purple Line 3 Tunnels",
    status: "Completed",
    votes: 0,
    kind: "line",
    author: "TERASTAMP",
    postedOn: "October 10",
    image: "/la-purple-line-3-tunnels.jpg",
    intro: [
      "With the expansion of the Purple Line to include three new tunnel sections, TeraStamp was extended to handle the increased complexity and volume of monitoring data.",
      "The platform's scalability and reliability were put to the test and proved essential for managing the project's rigorous demands.",
    ],
    features: [
      { lead: "Multi‑site synchronization:", text: "All three tunnel sections monitored in unison." },
      { lead: "Advanced analytics:", text: "Trend analysis and predictive modeling for ground movement." },
      { lead: "Collaborative tools:", text: "Shared dashboards and real‑time commenting for team alignment." },
    ],
    steps: [
      { text: "Extended the existing monitoring network to the new tunnels." },
      { lead: "Configured custom views:", text: "Created specific dashboards for each tunnel section." },
      { lead: "Integrated with existing workflows:", text: "Connected with project management and BIM systems." },
    ],
  },
  {
    year: "2024",
    title: "LA Purple Line 3 Stations",
    status: "Completed",
    votes: 0,
    kind: "table",
    author: "TERASTAMP",
    postedOn: "September 5",
    image: "/la-purple-line-3-stations.jpg",
    intro: [
      "The third phase of the Purple Line focused on three new station boxes, each with unique geotechnical challenges. TeraStamp provided the monitoring backbone to ensure safe and efficient construction.",
    ],
    features: [
      { lead: "Station‑specific instrumentation:", text: "Tailored sensor arrays for each station's ground conditions." },
      { lead: "Real‑time structural health:", text: "Continuous monitoring of diaphragm walls and shoring systems." },
      { lead: "Automated alarm escalation:", text: "Multi‑level alerts for progressive response." },
    ],
    steps: [
      { text: "Deployed instrumentation for each station box." },
      { lead: "Set up station‑level dashboards:", text: "Separate views for each construction site." },
      { lead: "Established reporting cadence:", text: "Daily progress reports pushed to all stakeholders." },
    ],
  },
  {
    year: "2025",
    title: "VTA's BART Phase II — CP2 EWP 3C",
    status: "Completed",
    votes: 0,
    kind: "gauge",
    author: "TERASTAMP",
    postedOn: "July 20",
    image: "/vta-bart-phase2-cp2.jpg",
    intro: [
      "TeraStamp was selected for the VTA BART Phase II extension, specifically for the CP2 EWP 3C package. This high‑profile project required robust monitoring for tunnel boring machine (TBM) operations and ground movement.",
    ],
    features: [
      { lead: "TBM performance tracking:", text: "Real‑time data on thrust, torque, and cutterhead wear." },
      { lead: "Settlement monitoring:", text: "High‑precision sensors along the entire alignment." },
      { lead: "Integration with 3D models:", text: "Live data overlaid on BIM models for spatial context." },
    ],
    steps: [
      { text: "Installed monitoring equipment along the TBM route." },
      { lead: "Configured TBM dashboards:", text: "Displayed critical performance metrics at a glance." },
      { lead: "Linked with project control room:", text: "Enabled remote monitoring and decision support." },
    ],
  },
  {
    year: "2026",
    title: "TeraStamp Platform Update: AI-Powered Monitoring Suite",
    status: "Upcoming",
    votes: 0,
    kind: "area",
    author: "TERASTAMP",
    postedOn: "June 1",
    image: "/la-purple-line-section2.jpg",
    intro: [
      "In 2026, TeraStamp introduced a major platform update centered around artificial intelligence. The new AI‑Powered Monitoring Suite brings predictive analytics, automated anomaly detection, and intelligent reporting to every project.",
      "This release represents a leap forward in turning raw data into proactive decisions, reducing risk and improving outcomes for infrastructure teams.",
    ],
    features: [
      { lead: "Predictive Insights:", text: "AI models forecast potential issues before they occur." },
      { lead: "Anomaly Detection:", text: "Automated identification of unusual patterns across all instruments." },
      { lead: "Intelligent Summaries:", text: "GEO AI generates concise daily digests tailored to each user." },
      { lead: "Enhanced Visualizations:", text: "Interactive 3D and time‑lapse views for better understanding." },
    ],
    steps: [
      { text: "Enable AI features from the Settings panel." },
      { lead: "Configure AI thresholds:", text: "Set sensitivity levels for anomaly detection." },
      { lead: "Access AI reports:", text: "View daily, weekly, or custom‑period summaries." },
    ],
  },
];

const TeraStampJourney = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="relative overflow-hidden min-h-screen w-full bg-slate-50">
      {/* Background Image Layer (Fixed & Properly Scaled) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/blogimage/digitalmonotoring.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          filter: "blur(0px)",
          opacity: 1,
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Our <span className="text-[#F26418]">Journey</span>
          </h2>

          <p className="mx-auto mt-5 text-lg leading-8 text-white/90 font-medium">
            From an ambitious vision to becoming a trusted infrastructure
            intelligence platform, our journey reflects continuous innovation,
            engineering excellence, and a commitment to smarter monitoring
            solutions.
          </p>
        </div>

        {/* Timeline */}
        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-[#F26418] md:block" />

          {/* Flex spacing structure explicitly handling mobile gap */}
          <div className="flex flex-col gap-[20px] md:gap-4">
            {projects.map((project, index) => {
              const isLeft = index % 2 === 0;
              const isCompleted = project.status === "Completed";

              return (
                <div
                  key={project.year}
                  className={`relative flex flex-col items-center w-full md:gap-10 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-10 z-20 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-[#F26418] shadow-lg md:block" />

                  {/* Card */}
                  <div
                    className={`w-full md:w-5/12 ${isLeft ? "md:pr-4" : "md:pl-4"}`}
                  >
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group relative w-full overflow-hidden rounded-3xl border border-[#F26418]/30 bg-white p-6 text-left shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#F26418] hover:shadow-2xl"
                    >
                      {/* Clean content structure without the embedded pattern */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-[#F26418]">
                            {project.year}
                          </span>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${isCompleted
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                              }`}
                          >
                            {project.status}
                          </span>
                        </div>

                        <h3 className="mt-4 text-xl font-bold text-[#1A202C]">
                          {project.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#4A5568]">
                          {project.intro[0].length > 130
                            ? project.intro[0].slice(0, 130) + "..."
                            : project.intro[0]}
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 font-semibold text-[#F26418]">
                          Learn More
                          <ArrowRight
                            size={16}
                            className="transition group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal View */}
      {selectedProject && (
        <FeatureModal
          feature={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};








export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <DataPlatformSection />
      <HorizontalScrollSection />


      <FeatureCarousel />
      <FeaturesGrid />
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
      <TeraStampJourney />
      <CTASection />
    </div>
  );
}
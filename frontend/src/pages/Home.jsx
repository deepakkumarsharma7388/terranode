
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











const APPS = [
  { name: 'Tunnels', desc: 'TBM monitoring, convergence tracking, and advance analytics.' },
  { name: 'Mining', desc: 'Operational intelligence for mines and tailings dams.' },
  { name: 'Bridges', desc: 'Structural intelligence for safety and longevity.' },
  { name: 'Dams', desc: 'Continuous safety and performance analysis.' },
  { name: 'Transportation', desc: 'Intelligent data for roads, rail, and transit.' },
  { name: 'Civil & Construction', desc: 'Insight for airports, ports, and earthworks.' },
];

const HeroSection = () => (
  <section className="relative flex min-h-[600px] items-center overflow-hidden bg-ink md:min-h-[700px]">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full w-full object-cover opacity-100"
      src="/herovideo.mp4"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />

    <div className="relative mx-auto max-w-7xl px-4 py-16 text-center md:px-6 md:py-24 md:text-left lg:px-8">
      <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Your <span className="text-accent">all‑in‑one</span> platform
        <br className="hidden sm:block" /> for infrastructure
        <br className="hidden sm:block" /> monitoring
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg md:mx-0">
        Full project control: unify data, visualize risk, and drive smarter decisions.
      </p>
      <Link
        to="/contact"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90 md:mt-8 md:px-7 md:py-3.5"
      >
        Claim demo now <span aria-hidden>→</span>
      </Link>
    </div>
  </section>
);







const DataPlatformSection = () => {
  const features = [
    { name: "Construction Data", icon: Building2 },
    { name: "Geology and Geotech", icon: Mountain },
    { name: "Instrumentation & Monitoring", icon: Activity },
    { name: "Environmental Monitoring", icon: Leaf },
    { name: "AI Project Insights", icon: Brain },
    { name: "Surveying and LiDAR", icon: Ruler },
  ];

  return (
    <section className="bg-[#2B2935] py-16 px-4 sm:px-6 md:py-24 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Heading, Description, CTA */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-300 leading-tight">
              All your infrastructure data.
              <br />
              <span className="font-bold text-white">
                One single platform
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed">
              Proqio unifies all key data from construction and infrastructure
              projects in one collaborative environment, giving engineers full
              control, clarity, and confidence without switching tools.
            </p>

            <motion.a
              href="#demo"
              // ✅ Button border-radius set to exactly 5px
              className="mt-8 inline-flex items-center gap-2 rounded-[5px] bg-indigo-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:bg-indigo-400 hover:scale-105 hover:shadow-indigo-500/40 active:scale-95"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              Claim a Demo →
            </motion.a>
          </motion.div>

          {/* Right: Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
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
                // ✅ Permanent border and consistent styling
                className="flex items-center gap-3 rounded-[5px] border border-white/15 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-indigo-500/5"
              >
                <Icon
                  className="h-5 w-5 text-indigo-400 flex-shrink-0"
                  strokeWidth={1.8}
                />
                <span className="text-sm font-medium text-gray-200">
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
      "Bridge structural intelligence with real-time data analysis for safety and longevity. Address maintenance issues proactively.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2000&auto=format&fit=crop",
    link: "/applications/bridges",
  },
  {
    title: "Tunnels",
    description:
      "Advance tunnel projects with data-driven insights and TBM monitoring. Harness data for efficient excavation.",
    image:
      "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=2000&auto=format&fit=crop",
    link: "/applications/tunnels",
  },
  {
    title: "Mining",
    description:
      "Optimize mine and tailings dam operations with intelligent data insights. Enhance safety and environmental compliance.",
    image:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2000&auto=format&fit=crop",
    link: "/applications/mining",
  },
  {
    title: "Dams",
    description:
      "Harness data intelligence for enhanced dam safety, maintenance, and performance analysis.",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2000&auto=format&fit=crop",
    link: "/applications/dams",
  },
  {
    title: "Transportation",
    description:
      "Elevate transport infrastructure with intelligent data solutions for roads, highways, rails, metros, and transit systems.",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2000&auto=format&fit=crop",
    link: "/applications/transportation",
  },
  {
    title: "Construction & Civil",
    description:
      "Transform civil projects with data-led insights for airports, ports, construction sites, earthworks, and site investigations.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop",
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
    <section className="bg-[#1E1E24]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Applications
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Tailored for every sector
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300">
            Beyond construction, explore Proqio's applications across industries
          </p>
        </div>

        <div className="relative">
          {/* Left Button */}
          {showLeftButton && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 shadow-lg transition hover:scale-105"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="h-5 w-5 text-black" />
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
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#6366F1] px-4 py-2 text-sm font-semibold transition hover:bg-blue-700"
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
              className="absolute right-2 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 shadow-lg transition hover:scale-105"
              aria-label="Scroll Right"
            >
              <ChevronRight className="h-5 w-5 text-black" />
            </button>
          )}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/applications"
            className="inline-flex items-center gap-2 font-semibold text-blue-400 hover:underline"
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






const LogoSlider = () => {
  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
    "/logos/logo7.png",
    "/logos/logo8.png",
    "/logos/logo10.png",
    "/logos/logo11.png",
    "/logos/logo12.png",
    "/logos/logo13.png",
    "/logos/logo14.png",
    "/logos/logo15.png",
    "/logos/logo16.png",
    "/logos/logo17.png",
    "/logos/logo18.png",
  ];

  return (
    <section className="w-full bg-[#2B2935] py-6 md:py-10 overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-logo-slider hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center
                         mx-4 sm:mx-6 md:mx-8 lg:mx-10"
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                className="
                  h-8
                  sm:h-10
                  md:h-12
                  lg:h-14
                  w-auto
                  object-contain
                  brightness-0
                  invert
                  opacity-90
                "
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-logo-slider {
          animation: logoSlider 30s linear infinite;
        }

        /* Right -> Left */
        @keyframes logoSlider {
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

const ProjectSlider = () => {
  const projects = [
    {
      title: "Delhi Metro",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    },
    {
      title: "Taiba Palace",
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200",
    },
    {
      title: "Doha Metro",
      image:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1200",
    },
    {
      title: "Neom Project",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200",
    },
    {
      title: "Dubai Creek",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200",
    },
  ];

  return (
    <section className="w-full bg-[#171722] py-8 md:py-12 overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-project-slider hover:[animation-play-state:paused]">
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 mx-3 md:mx-4"
            >
              <div className="w-[220px] sm:w-[280px] md:w-[340px] h-[140px] sm:h-[170px] md:h-[210px] overflow-hidden rounded-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/30" />

                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg sm:text-xl md:text-3xl">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-project-slider {
          animation: projectSlider 25s linear infinite;
        }

        /* Left -> Right */
        @keyframes projectSlider {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};


const benefits = [
  {
    icon: FileBarChart,
    title: "Real-time dashboards & reporting",
    description:
      "Access live data and generate reports instantly, no spreadsheets, no delays.",
  },
  {
    icon: Sparkles,
    title: "AI Assistant",
    description:
      "Get alerts, detect trends, and receive context-based recommendations.",
  },
  {
    icon: MousePointerClick,
    title: "User-friendly interface",
    description:
      "Engineered for technical users, powerful tools, intuitive layout.",
  },
  {
    icon: BarChart3,
    title: "Collaborative environment",
    description:
      "Share insights, comments, and decisions across teams and stakeholders.",
  },
  {
    icon: Globe,
    title: "24/7 expert support",
    description:
      "Direct access to our infrastructure and monitoring specialists, anytime.",
  },
  {
    icon: Puzzle,
    title: "Scalable & customizable",
    description:
      "Adapt the platform to any project size, data type, or workflow.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-[#2B2935] py-14 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center rounded-xl bg-[#6366F1]/20 px-5 py-2 text-sm font-semibold text-[#A5B4FC]"
        >
          BENEFITS
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 max-w-4xl text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white"
        >
          How terranode helps keep your project under control
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
                className="group rounded-2xl border border-[#A5B4FC]/60 bg-transparent p-5 md:p-6 transition-all duration-300 hover:border-[#6366F1] hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]"
              >
                <div className="flex gap-4">
                  <Icon
                    size={34}
                    className="text-[#A5B4FC] transition-all duration-300 group-hover:text-[#6366F1]"
                  />

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm md:text-base leading-relaxed text-gray-300">
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
    name: "John Smith",
    role: "Project Director",
    company: "Metro Rail Corporation",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Terranode transformed how we monitor and manage infrastructure projects. The platform is intuitive and delivers real-time insights.",
  },
  {
    name: "Sarah Johnson",
    role: "Engineering Manager",
    company: "AECOM",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "The platform provides real-time insights that save us hours every week. Reporting is now faster and more accurate.",
  },
  {
    name: "Michael Brown",
    role: "Operations Lead",
    company: "Bechtel",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "A powerful solution for managing large-scale infrastructure projects. The AI-driven recommendations are a game changer.",
  },
  {
    name: "Emma Wilson",
    role: "Senior Consultant",
    company: "WSP",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Collaboration across teams has improved dramatically since implementing Terranode across our projects.",
  },
];

const TestimonialsSection = () => {
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="bg-[#1E1E24] py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
          Testimonials
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Trusted by Industry Leaders
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          See how organizations across construction, mining,
          transportation, and infrastructure are using
          Terranode to make smarter decisions.
        </p>
      </div>

      <div className="relative mt-12">
        <div className="testimonial-track flex w-max gap-5">
          {duplicatedTestimonials.map((item, index) => (
            <div
              key={index}
              className="
                w-[300px]
                md:w-[340px]
                shrink-0
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-[#6366F1]/50
                hover:-translate-y-2
              "
            >
              {/* Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    h-14
                    w-14
                    rounded-full
                    object-cover
                    border-2
                    border-[#6366F1]
                  "
                />

                <div>
                  <h4 className="font-semibold text-white">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-400">
                    {item.role}
                  </p>

                  <p className="text-sm text-[#6366F1]">
                    {item.company}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="mt-5 text-sm leading-7 text-gray-300">
                {item.quote}
              </p>
            </div>
          ))}
        </div>

        {/* Left Gradient */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-32 bg-gradient-to-r from-[#1E1E24] to-transparent" />

        {/* Right Gradient */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-32 bg-gradient-to-l from-[#1E1E24] to-transparent" />
      </div>

      <style>
        {`
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
        `}
      </style>
    </section>
  );
};


const FeatureSection = () => {
  const features = [
    "Identify alerts easily",
    "Analyze data through intuitive graphs",
    "Monitor project progress in real-time",
    "Generate reports instantly",
  ];

  return (
    <section className="bg-[#2B2935] py-12 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-lg bg-[#6366F1]/15 px-4 py-2"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[#A5B4FC]">
            Features
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
        >
          Powerful Features
        </motion.h2>

        {/* Content */}
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
              Real-Time Data on a Dynamic Map
            </h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-5 text-base leading-relaxed text-gray-300 md:text-lg"
            >
              Experience construction project management like never before.
              Gain real-time insights into your project data and monitor
              everything from one centralized platform.
            </motion.p>

            <div className="mt-6 space-y-4">
              {features.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + index * 0.15,
                    duration: 0.4,
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6366F1]/20">
                    <Check
                      size={14}
                      className="text-[#6366F1]"
                    />
                  </div>

                  <span className="text-sm text-gray-300 md:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Video */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="/herovideo.mp4"
                  type="video/mp4"
                />
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
    <section className="bg-[#2B2935] py-12 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-[15px] lg:grid-cols-2 lg:gap-10">
          
          {/* Left Side - Video */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="/herovideo.mp4"
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
              className="text-3xl font-bold leading-tight text-white sm:text-2xl md:text-5xl"
            >
              Get deformation insights
              <br />
              through{" "}
              <span className="text-[#6366F1]">
                Heatmaps
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
            >
              Experience unmatched insight into your construction
              projects through our advanced Heatmap feature.
              Visualize deformations with clarity, gaining a
              deeper understanding of structural dynamics.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg"
            >
              Early detection of potential issues empowers your
              team to optimize decision-making and ensure the
              ongoing structural integrity of projects.
              Monitor changes in real time and stay ahead of
              critical risks before they become problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
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
    <section className="bg-[#2B2935] py-12 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1"
          >
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Strategic reporting for
              <br />
              in-depth analysis
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
            >
              Unlock{" "}
              <span className="font-semibold text-white">
                in-depth insights
              </span>{" "}
              with our Reporting section. Generate strategic reports tailored
              to your project's needs.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg"
            >
              Whether it's for regular meetings or specific deadlines,
              our Reporting feature ensures you have a
              <span className="font-semibold text-white">
                {" "}comprehensive view of your project's performance.
              </span>
            </motion.p>

            <div className="mt-8 space-y-5">
              {[
                "Craft your own templates that capture key metrics",
                "Schedule reports for timely delivery",
                "Generate detailed reports instantly",
                "Share insights across teams easily",
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
                  <Check
                    size={20}
                    className="text-[#A5B4FC] flex-shrink-0"
                  />

                  <span className="text-base text-gray-300 md:text-lg">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Video */}
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
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="/herovideo.mp4"
                  type="video/mp4"
                />
              </video>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};




const CounterSection = () => {
    return (
        <section className="bg-[#1E1E24] py-16 px-4 md:py-24">
            <div className="max-w-6xl mx-auto">
                {/* Section heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Our Impact in Numbers
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                        Delivering measurable results that transform businesses and save lives.
                    </p>
                </div>

                {/* Counter cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <CounterCard
                        icon="💰"
                        target={20}
                        suffix="%"
                        prefix="+"
                        label="Saved Costs"
                        description="Empower your projects with cost-efficient strategies derived from actionable insights."
                        delay={0}
                    />
                    <CounterCard
                        icon="⚡"
                        target={2}
                        suffix="K"
                        prefix="+"
                        label="Actionable Insights"
                        description="Proactive alerts ensure safety, prevent disasters, and save lives before they occur."
                        delay={300}
                    />
                    <CounterCard
                        icon="⏱️"
                        target={5}
                        suffix="x"
                        prefix=""
                        label="Time efficiency"
                        description="Streamline workflows, accelerate project timelines, and meet deadlines with confidence."
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
            className="bg-[#2B2935] rounded-2xl p-8 text-center border border-[#2A3A4A] hover:border-[#4A6A8A] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 group"
        >
            {/* Icon */}
            <div className="text-4xl mb-4">{icon}</div>

            {/* Counter value */}
            <div className="text-5xl md:text-6xl font-bold text-white mb-2 font-mono tracking-tight">
                {prefix}
                {displayValue}
                {suffix}
            </div>

            {/* Label */}
            <h3 className="text-lg font-semibold text-white mb-3">{label}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

const CTASection = () => (
  <section className="bg-[#2B2935] py-16 text-center text-white sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="font-display text-2xl font-semibold sm:text-3xl md:text-4xl">
        See Terranode on your project
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm text-white/60 sm:text-base">
        A 30-minute walkthrough, configured around the data you already collect.
      </p>
      <Link
        to="/contact"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold transition hover:bg-accent/90 sm:mt-7 sm:px-7 sm:py-3.5"
      >
        Claim demo →
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
     
      <LogoSlider />
      <ProjectSlider/>
      <BenefitsSection/>
      <TestimonialsSection/>
      <FeatureSection/>
      <HeatmapSection/>
      <ReportingSection/>
      <CounterSection/>
    
      <CTASection />
    </div>
  );
}
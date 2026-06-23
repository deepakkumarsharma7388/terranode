import React from 'react'

import { Link } from "react-router-dom";

import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radar, MessagesSquare, LineChart, SlidersHorizontal } from "lucide-react";
import { Activity, Image as ImageIcon, Box, Rocket } from "lucide-react";




const Starburst = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    className={className}
  >
    {Array.from({ length: 24 }).map((_, i) => {
      const a = (i * 15 * Math.PI) / 180;
      const r1 = 22;
      const r2 = i % 2 ? 40 : 46;
      return (
        <line
          key={i}
          x1={50 + r1 * Math.cos(a)}
          y1={50 + r1 * Math.sin(a)}
          x2={50 + r2 * Math.cos(a)}
          y2={50 + r2 * Math.sin(a)}
        />
      );
    })}
  </svg>
);

const Asterisk = ({ className = "" }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    className={className}
  >
    {Array.from({ length: 6 }).map((_, i) => {
      const a = (i * 30 * Math.PI) / 180;
      return (
        <line
          key={i}
          x1={24 - 18 * Math.cos(a)}
          y1={24 - 18 * Math.sin(a)}
          x2={24 + 18 * Math.cos(a)}
          y2={24 + 18 * Math.sin(a)}
        />
      );
    })}
  </svg>
);

const Hero = () => {
  return (
    <section className="bg-[#1E1C24]">
      <div
        className="
          relative
          overflow-hidden
          rounded-b-[40px]
          bg-[#A6B4FD]
          px-6
          pb-20
          pt-16
          md:px-14
          md:pb-24
          md:pt-20
          lg:px-60              {/* ← extra horizontal padding on laptops/desktops */}
        "
      >
        {/* Decorations */}
        <div className="pointer-events-none absolute inset-0 text-[#6B76E6]/85">
          <Starburst className="absolute right-10 top-7 h-16 w-16 md:right-12 md:h-[78px] md:w-[78px]" />

          {/* sparkle */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            className="absolute right-[18%] top-[16%] hidden h-7 w-7 md:block"
          >
            <path d="M12 1 C13 8 16 11 23 12 C16 13 13 16 12 23 C11 16 8 13 1 12 C8 11 11 8 12 1 Z" />
          </svg>

          {/* small circle */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="absolute right-[15%] top-[13%] hidden h-4 w-4 md:block"
          >
            <circle cx="12" cy="12" r="9" />
          </svg>

          {/* wavy line */}
          <svg
            viewBox="0 0 120 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            className="absolute right-[8%] top-[58%] hidden h-6 w-32 md:block"
          >
            <path d="M2 12 Q12 2 22 12 T42 12 T62 12 T82 12 T102 12 T118 12" />
          </svg>

          <Asterisk className="absolute bottom-9 right-12 h-10 w-10 md:h-12 md:w-12" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl"
        >
          <h1
            className="font-extrabold tracking-tight text-[#19181F]"
            style={{
              fontFamily: 'Inter, "Inter Placeholder", sans-serif',
              fontSize: "clamp(36px, 6vw, 60px)",
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
            }}
          >
            Elevate Your Civil Infrastructure Experience with TeraStamp
          </h1>

          <p className="mt-6 max-w-xl text-lg text-[#525D7E]">
            Discover a world of possibilities and unlock the features that
            turn data into decisions.
          </p>

          <Link
            to="/contact"
            className="
              group mt-7 inline-flex items-center gap-2 rounded-lg
              bg-[#5B5CF0] px-5 py-3 text-sm font-semibold text-white
              transition-colors duration-300 hover:bg-[#4A4BE3]
            "
          >
            Claim demo now
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};







const AUTO_ROTATE = true;
const ROTATE_MS = 5000;

const features = [
  {
    icon: Radar,
    title: "Explore Instrument Insights",
    description:
      "Tune into the pulse of your project by opening individual instruments. Dig into real-time data, read alert statuses, and kick off informed decision-making.",
    image: "/test1.webp", // or use video: "/media/showcase/explore.mp4"
  },
  {
    icon: MessagesSquare,
    title: "Collaborate on Alerts",
    description:
      "Enable smooth communication within your team. Comment on specific alerts to keep everyone informed and make collaborative problem-solving possible.",
    image: "/test2.jpg",
  },
  {
    icon: LineChart,
    title: "Dynamic Graph Plotting",
    description:
      "Plot and layer sensor readings on interactive graphs. Compare trends over time, zoom into critical windows, and turn raw data into clear visual stories.",
    image: "/test3.avif",
  },
  {
    icon: SlidersHorizontal,
    title: "Key Insights with Dynamic Map Filters",
    description:
      "Easily filter instruments by criteria such as number of readings, alert status, category, and more. Tailor your map view to zero in on the instruments that matter most at any given moment.",
    image: "/media/showcase/filters.png",
  },
];

const FeatureShowcase = () => {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  // Auto-advance through the features (pauses on hover).
  useEffect(() => {
    if (!AUTO_ROTATE) return;
    const id = setInterval(() => {
      if (!paused.current) setActive((i) => (i + 1) % features.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const current = features[active];

  return (
    <section
      className="bg-[#1E1C24] py-20 overflow-hidden"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy + accordion */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Visualize, Analyze, and Decide
            </h2>
            <p className="mt-4 max-w-xl text-gray-400 leading-relaxed">
              Unlock the power of your engineering project at a glance. From
              sensor insights to collaborative alert management and dynamic
              graph plotting, our Map Section becomes your command center for
              informed decisions, disaster prevention, and greater
              efficiency.{" "}
              <span className="font-semibold text-gray-200">
                Welcome to the future of infrastructure management.
              </span>
            </p>
          </motion.div>

          <div className="mt-8 flex flex-col gap-1.5">
            {features.map((f, i) => {
              const Icon = f.icon;
              const isActive = i === active;
              return (
                <button
                  key={f.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`
                    rounded-2xl border px-4 py-3.5 text-left transition-all duration-300
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B8FFF]/50
                    ${
                      isActive
                        ? "border-white/[0.06] bg-[#2A2731]"
                        : "border-transparent hover:bg-white/[0.03]"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={19}
                      className={isActive ? "text-white" : "text-gray-400"}
                    />
                    <span
                      className={`font-semibold ${
                        isActive ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {f.title}
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pl-[30px] text-sm leading-relaxed text-gray-400"
                      >
                        <span className="block pt-2">{f.description}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: synced preview panel */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/[0.06] bg-[#211F29] lg:aspect-auto lg:h-[460px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              {current.video ? (
                <video
                  src={current.video}
                  poster={current.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              ) : (
                <img
                  src={current.image}
                  alt={current.title}
                  className="h-full w-full object-cover"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};







const features1 = [
  {
    icon: Activity,
    title: "Visualizing Construction Dynamics",
    description:
      "Track the movement patterns of your construction with Heat Maps. Select multiple instruments to build a dynamic visual representation that supports proactive decision-making.",
    image: "/media/immersive/heatmap.png", // or video: "/media/immersive/heatmap.mp4"
  },
  {
    icon: ImageIcon,
    title: "Real-Time Context with Construction Services",
    description:
      "Layer live construction services and site context over your data, so every reading is anchored in what is happening on the ground right now.",
    image: "/media/immersive/context.png",
  },
  {
    icon: Box,
    title: "Explore your Project in Depth with 3D",
    description:
      "Step into immersive 3D views of your project, examining structures and sensor placements from any angle for a complete perspective.",
    image: "/media/immersive/3d.png",
  },
  {
    icon: Rocket,
    title: "Digital Twins Integration",
    badge: "COMING SOON!",
    description:
      "A living, real-time replica of your infrastructure is on its way, linking every instrument into one continuously updated digital twin.",
    image: "/media/immersive/digital-twins.png",
  },
];

const ImmersiveExperience = () => {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (!AUTO_ROTATE) return;
    const id = setInterval(() => {
      if (!paused.current) setActive((i) => (i + 1) % features.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const current = features[active];

  return (
    <section
      className="bg-[#1B1A20] py-20 overflow-hidden"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        {/* Media — left on desktop, below the text on mobile */}
        <div className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/[0.06] bg-[#232129] lg:h-[460px] lg:aspect-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                {current.video ? (
                  <video
                    src={current.video}
                    poster={current.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                ) : (
                  <img
                    src={current.image}
                    alt={current.title}
                    className="h-full w-full object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Text + accordion — first on mobile, right on desktop */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              A New Immersive Experience
            </h2>
            <p className="mt-4 max-w-xl text-gray-400 leading-relaxed">
              From dynamic Heat Maps that surface infrastructure movement to
              immersive 3D views giving a complete perspective and, soon, the
              game-changing Digital Twins functionality. Gain unmatched
              insights into your projects, turning infrastructure management
              into an intuitive and immersive experience.
            </p>
          </motion.div>

          <div className="mt-8 flex flex-col gap-1.5">
            {features.map((f, i) => {
              const Icon = f.icon;
              const isActive = i === active;
              return (
                <button
                  key={f.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`
                    rounded-2xl border px-4 py-3.5 text-left transition-all duration-300
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B8FFF]/50
                    ${
                      isActive
                        ? "border-white/[0.06] bg-[#262430]"
                        : "border-transparent hover:bg-white/[0.03]"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={19}
                      className={isActive ? "text-white" : "text-gray-400"}
                    />
                    <span
                      className={`font-semibold ${
                        isActive ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {f.title}
                    </span>
                    {f.badge && (
                      <span className="ml-auto whitespace-nowrap rounded-md bg-[#CDCCF7] px-2 py-1 text-[11px] font-semibold text-[#5A59C4]">
                        {f.badge}
                      </span>
                    )}
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pl-[30px] text-sm leading-relaxed text-gray-400"
                      >
                        <span className="block pt-2">{f.description}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};






const Features = () => {
  return (
    <div>
      <Hero/>
      <FeatureShowcase/>
      <ImmersiveExperience/>
    
    
    </div>
  )
}

export default Features
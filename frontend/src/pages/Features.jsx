import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Zap,
  Radar,
  MessagesSquare,
  LineChart,
  SlidersHorizontal,
  Activity,
  Image as ImageIcon,
  Box,
  Rocket,
  BarChart3,   // ← add
  Database,    // ← add
  Shield,      // ← add
  Users,       // ← add

} from "lucide-react";

/* ---------- Color Palette ---------- */
const colors = {
  accent: "#F26418",
  lightAccent: "#FFF0E8",
  text: "#4A5568",
  heading: "#1A202C",
};

/* ---------- Animation Helper ---------- */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

/* ---------- Carousel Images (for banner) ---------- */
const carouselImages = [
  "/la-purple-line-3-stations.jpg",
  "/la-purple-line-3-tunnels.jpg",
  "/la-purple-line-section2.jpg",
  "/tunnel.jpeg",
  "/pipelin.jpeg",
];





const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] overflow-hidden md:min-h-[90vh]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ x: direction > 0 ? "100%" : "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? "-100%" : "100%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={carouselImages[currentIndex]}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2.5 rounded-full transition-all ${
              currentIndex === i
                ? "w-8 bg-[#F26418]"
                : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-10 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-left text-white"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm backdrop-blur-sm">
              <Zap size={16} />
              Next‑Gen Platform
            </div>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Elevate Your Civil Infrastructure
              <br />
              <span className="text-[#F26418]">with TeraStamp</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              Discover a world of possibilities and unlock the intelligent
              capabilities that transform infrastructure data into confident
              decisions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-xl bg-[#F26418] px-6 py-3.5 font-semibold text-white hover:bg-[#E05A10]"
              >
                Request a Demo
              </Link>

              <Link
                to="/modules"
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm hover:bg-white/20"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-10 flex gap-8 border-t border-white/20 pt-8">
              <div>
                <span className="text-2xl font-bold">Real-time</span>
                <p className="text-sm text-white/70">Live Data</p>
              </div>
              <div>
                <span className="text-2xl font-bold">4D</span>
                <p className="text-sm text-white/70">Digital Views</p>
              </div>
              <div>
                <span className="text-2xl font-bold">10x</span>
                <p className="text-sm text-white/70">Faster Decisions</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ================================================================
   FEATURE SHOWCASE – Accordion with image/video
   ================================================================ */
const features = [
  {
    icon: Radar,
    title: "Explore Instrument Insights",
    description:
      "Access detailed information from every monitoring instrument in one place. Track live measurements, review historical trends, monitor alert conditions, and make faster, data-driven decisions with complete confidence.",
    image: "/features/instrumentinsight.jpeg",
  },
  {
    icon: MessagesSquare,
    title: "Collaborative Alert Management",
    description:
      "Improve team coordination by discussing alerts directly within the platform. Assign actions, share updates, and ensure every stakeholder stays informed throughout the investigation and resolution process.",
    image: "/features/collaboration.jpeg",
  },
  {
    icon: LineChart,
    title: "Advanced Data Visualization",
    description:
      "Transform complex monitoring data into intuitive, interactive charts. Compare multiple sensors, identify long-term trends, and uncover critical insights that support proactive project management.",
    image: "/features/dynamicplotting.jpeg",
  },
  {
    icon: SlidersHorizontal,
    title: "Intelligent Map Filtering",
    description:
      "Quickly locate the information that matters most using powerful filtering tools. Sort instruments by alert level, monitoring type, project area, or custom criteria for a focused operational view.",
    image: "/features/keyinsights.jpeg",
  },
];

const AUTO_ROTATE = true;
const ROTATE_MS = 5000;

const FeatureShowcase = () => {
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
      className="bg-white"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text + accordion */}
          <div>
            <motion.div {...fadeUp()}>
              <h2 className="text-3xl font-bold text-[#1A202C] md:text-4xl">
                Explore Powerful <span className="text-[#F26418]">Platform Capabilities</span>
              </h2>

              <p className="mt-4 max-w-xl text-[#4A5568] leading-relaxed">
                Discover the intelligent tools that simplify infrastructure monitoring,
                improve collaboration, and transform complex project data into actionable
                insights. From real-time sensor monitoring to advanced visualization and
                interactive mapping, every feature is designed to help teams make faster,
                smarter, and more confident decisions throughout the project lifecycle.

                <span className="block mt-3 font-semibold text-[#1A202C]">
                  Everything you need to monitor, analyze, and manage your infrastructure
                  from a single unified platform.
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
                      rounded-2xl border-2 px-4 py-3.5 text-left transition-all duration-300
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26418]/50
                      ${isActive
                        ? "border-[#F26418] bg-[#F8F9FC]"
                        : "border-[#E2E8F0] bg-white hover:bg-[#F8F9FC]"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={19}
                        className={isActive ? "text-[#F26418]" : "text-[#4A5568]"}
                      />
                      <span
                        className={`font-semibold ${isActive ? "text-[#1A202C]" : "text-[#4A5568]"
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
                          className="overflow-hidden pl-[30px] text-sm leading-relaxed text-[#4A5568]"
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

          {/* Right: synced image/video */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-2 border-[#F26418] bg-white lg:aspect-auto lg:h-[460px]">
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
                    className="h-full w-full object-fill"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                ) : (
                  <img
                    src={current.image}
                    alt={current.title}
                    className="h-full w-full object-fill"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================================================================
   IMMERSIVE EXPERIENCE – Second accordion set (with badge)
   ================================================================ */
const features1 = [
  {
    icon: Activity,
    title: "Construction Activity Heat Maps",
    description:
      "Visualize construction activity through intelligent heat maps that reveal movement patterns and operational trends. Combine data from multiple instruments to identify high-impact areas and support faster, more informed decision-making.",
    image: "/features/constructiondynamics.jpeg",
  },
  {
    icon: ImageIcon,
    title: "Real-Time Context Layers",
    description:
      "Enrich your monitoring data with live contextual overlays, including site imagery, project assets, and surrounding infrastructure. Gain a complete understanding of on-site conditions in real time.",
    image: "/features/contextoverlay.jpeg",
  },
  {
    icon: Box,
    title: "Interactive 3D Visualization",
    description:
      "Explore your infrastructure within a fully interactive 3D environment. Inspect assets, analyze sensor locations, and understand spatial relationships from every perspective for enhanced project awareness.",
    image: "/features/3dviews.jpeg",
  },
  {
    icon: Rocket,
    title: "Digital Twin Platform",

    description:
      "Experience the next generation of infrastructure intelligence with a live Digital Twin. Connect monitoring data, project assets, and real-world conditions into a continuously updated virtual representation of your project.",
    image: "/features/digitaltwins.jpeg",
  },
];
const ImmersiveExperience = () => {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (!AUTO_ROTATE) return;
    const id = setInterval(() => {
      if (!paused.current) setActive((i) => (i + 1) % features1.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const current = features1[active];

  return (
    <section
      className="bg-[#F8F9FC]"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Media – left on desktop */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-2 border-[#F26418] bg-white lg:aspect-auto lg:h-[460px]">
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
                      className="h-full w-full object-fill"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  ) : (
                    <img
                      src={current.image}
                      alt={current.title}
                      className="h-full w-full object-fill"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: text + accordion */}
          <div className="order-1 lg:order-2">
            <motion.div {...fadeUp()}>
              <h2 className="text-3xl font-bold text-[#1A202C] md:text-4xl">
                Experience Infrastructure in <span className="text-[#F26418]">a Whole New Dimension</span>
              </h2>

              <p className="mt-4 max-w-xl text-[#4A5568] leading-relaxed">
                Go beyond traditional monitoring with immersive visualization tools designed
                for modern infrastructure projects. From intelligent construction heat maps
                and real-time context layers to interactive 3D environments and the upcoming
                Digital Twin platform, every capability provides deeper insights, enhanced
                situational awareness, and greater confidence in every decision.

                <span className="block mt-3 font-semibold text-[#1A202C]">
                  See more, understand faster, and manage your infrastructure with complete
                  clarity.
                </span>
              </p>
            </motion.div>

            <div className="mt-8 flex flex-col gap-1.5">
              {features1.map((f, i) => {
                const Icon = f.icon;
                const isActive = i === active;
                return (
                  <button
                    key={f.title}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`
                      rounded-2xl border-2 px-4 py-3.5 text-left transition-all duration-300
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26418]/50
                      ${isActive
                        ? "border-[#F26418] bg-white"
                        : "border-[#E2E8F0] bg-white hover:bg-[#F8F9FC]"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={19}
                        className={isActive ? "text-[#F26418]" : "text-[#4A5568]"}
                      />
                      <span
                        className={`font-semibold ${isActive ? "text-[#1A202C]" : "text-[#4A5568]"
                          }`}
                      >
                        {f.title}
                      </span>
                      {f.badge && (
                        <span className="ml-auto whitespace-nowrap rounded-md bg-[#F26418] px-2 py-1 text-[11px] font-semibold text-white">
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
                          className="overflow-hidden pl-[30px] text-sm leading-relaxed text-[#4A5568]"
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
      </div>
    </section>
  );
};


/* ================================================================
   PLATFORM CAPABILITIES – Updated with your data from screenshots
   ================================================================ */
const platformFeatures = [
  {
    icon: BarChart3,
    title: "Customisable Reporting & Visualisation",
    description:
      "Users can create tailored reports and dashboards that fit the specific needs of the project underway.",
    image: "/features/reporting.jpeg",
  },
  {
    icon: Database,
    title: "Automated Data Integration",
    description:
      "The platform automatically collects, processes data, and reduces manual work.",
    image: "/features/dataintegration.jpeg",
  },
  {
    icon: Shield,
    title: "Proactive Decision-Making",
    description:
      "TeraStamp delivers real-time data from various instruments directly to project teams, reducing potential risks.",
    image: "/features/decisionmaking.jpeg",
  },
  {
    icon: Users,
    title: "User-Specific Interfaces",
    description:
      "Exclusive users can access tailored dashboards and interfaces that highlight the information most relevant to their role.",
    image: "/features/specificinterfaces.jpeg",
  },
];




const PlatformCapabilities = () => {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (!AUTO_ROTATE) return;
    const id = setInterval(() => {
      if (!paused.current) setActive((i) => (i + 1) % platformFeatures.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const current = platformFeatures[active];

  return (
    <section
      className="bg-white"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text + accordion */}
          <div>
            <motion.div {...fadeUp()}>
              <h2 className="text-3xl font-bold text-[#1A202C] md:text-4xl">
                Empower Every Decision with <span className="text-[#F26418]">Intelligent Data Management</span>
              </h2>

              <p className="mt-4 max-w-xl text-[#4A5568] leading-relaxed">
                Unlock the full potential of your infrastructure data with powerful
                reporting, seamless integrations, and personalized dashboards. TeraStamp
                automatically consolidates information from multiple sources, transforms it
                into actionable insights, and delivers the right data to the right people
                at the right time.

                <span className="block mt-3 font-semibold text-[#1A202C]">
                  Streamline workflows, improve collaboration, and make faster, more
                  confident decisions with a unified infrastructure intelligence platform.
                </span>
              </p>
            </motion.div>

            <div className="mt-8 flex flex-col gap-1.5">
              {platformFeatures.map((f, i) => {
                const Icon = f.icon;
                const isActive = i === active;
                return (
                  <button
                    key={f.title}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`
                      rounded-2xl border-2 px-4 py-3.5 text-left transition-all duration-300
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26418]/50
                      ${isActive
                        ? "border-[#F26418] bg-[#F8F9FC]"
                        : "border-[#E2E8F0] bg-white hover:bg-[#F8F9FC]"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={19}
                        className={isActive ? "text-[#F26418]" : "text-[#4A5568]"}
                      />
                      <span
                        className={`font-semibold ${isActive ? "text-[#1A202C]" : "text-[#4A5568]"
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
                          className="overflow-hidden pl-[30px] text-sm leading-relaxed text-[#4A5568]"
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

          {/* Right: synced image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-2 border-[#F26418] bg-white lg:aspect-auto lg:h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className="h-full w-full object-fill"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================================================================
   CTA BANNER
   ================================================================ */
const CtaBanner = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#F26418] to-[#E05A10]">
          <div className="flex flex-col items-center px-6 py-20 text-center text-white sm:px-10 md:py-24">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Ready to transform your
              <br className="hidden sm:block" />
              <span>infrastructure management?</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base opacity-90 sm:text-lg">
              Get a personalized demo and see how TeraStamp can elevate your projects.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#F26418] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Schedule a demo
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


const Features = () => {
  return (
    <div className="bg-white overflow-hidden">
      <Hero />
      <FeatureShowcase />
      <ImmersiveExperience />
      <PlatformCapabilities />
      <CtaBanner />

    </div>
  );
};

export default Features;
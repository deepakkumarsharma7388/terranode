import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MotionLink = motion(Link);

/* Color palette */
const colors = {
  accent: "#F26418",
  white: "#FFFFFF",
  text: "#7C8595",
  heading: "#000000",
  border: "#D1D9E6",
  borderSoft: "#E2E8F0",
  cardBg: "#F9FAFB",
  cardHover: "#F1F3F5",
};

const AdvancedModules = () => {
  const modules = [
    {
      title: "Spatial Digital Twin",
      link: "/modules/digital-twin",
      video: "/terastamp-dam-monitoring.mp4",
      poster: "/images/modules/digital-twin.png",
      placeholder: "from-[#e8e0d0] to-[#c0c8d0]",
      description:
        "Interact with your data within an immersive 3D spatial context. The Digital Twin integrates sensor data, GIS, and BIM to provide a comprehensive view of infrastructure health. Analyze trends, compare performance over time, and facilitate technical evaluations.",
    },
    {
  title: "GEO: AI-Powered Assistant",
  link: "/modules/ada",
  video: "/terastamp-tsf-ai-assistant.mp4",
  poster: "/images/modules/geo.png",
  placeholder: "from-[#d0d8c0] to-[#b0b8a0]",
  description:
    "Meet GEO, TeraStamp's intelligent AI assistant built for infrastructure monitoring. Ask questions in natural language, explore live and historical project data, uncover patterns, generate insights, and receive instant, context-aware answers to support smarter engineering decisions.",
},
  ];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-black md:text-5xl">
            Explore TeraStamp’s <span style={{ color: colors.accent }}>Advanced Modules</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[#7C8595] text-lg">
            Extend your TeraStamp environment with purpose‑built modules that
            enhance data visualization and accelerate insight extraction for
            better analysis and decision‑making.
          </p>
        </motion.div>

        {/* Module cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {modules.map((mod, index) => (
            <MotionLink
              key={mod.title}
              to={mod.link}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="
                group block rounded-2xl border-2 border-[#F26418] bg-white p-3.5
                transition-all duration-300
                hover:-translate-y-1 hover:bg-[#F9FAFB] hover:shadow-xl
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26418]/60
              "
            >
              {/* Video */}
              <div
                className={`relative h-52 overflow-hidden rounded-xl border border-[#E2E8F0] bg-gradient-to-br ${mod.placeholder}`}
              >
                <video
                  src={mod.video}
                  poster={mod.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={mod.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Title – orange */}
              <h3
                className="mt-4 px-1 text-2xl font-semibold leading-[1.2] text-[#F26418]"
              >
                {mod.title}
              </h3>

              {/* Description – grayish-blue */}
              <p
                className="mt-2 px-1 pb-1 text-lg font-normal leading-[1.4] text-[#7C8595]"
              >
                {mod.description}
              </p>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTAsection = () => {
  return (
    <section className="bg-white min-h-screen w-full flex items-center justify-center p-6 sm:p-12">
      <div
        className="rounded-[32px] w-full max-w-6xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 pt-8 pb-6 md:px-16 md:pt-16 md:pb-12 gap-8 relative"
        style={{ background: colors.accent }}
      >
        {/* Left Content Column – all white text */}
        <div className="flex flex-col max-w-md z-10 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Experience the Future with TeraStamp
          </h1>
          <p className="text-lg sm:text-xl font-medium opacity-90 mb-8">
            Start building smarter and faster today
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#F26418] font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:bg-gray-50 transition-all duration-200 group"
            >
              Request a demo
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
            src="/la-purple-line-section2.jpg"
            alt="TeraStamp 3D Map Interface"
            className="w-full h-full object-cover"
          />

          {/* Mock Top App Bar – subtle overlay */}
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

          {/* Floating Data Card Popover – light/white theme */}
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

          {/* Map Node Pins Overlay – decorative */}
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

const Modulesection = () => {
  return (
    <div>
      <AdvancedModules />
      <CTAsection />
    </div>
  );
};

export default Modulesection;
import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

import { ArrowRight, Play } from "lucide-react";


const videoSrc = "/videos/how-it-works.mp4"; 
const poster = "/images/how-it-works-poster.png";  

const InfrastructureHero = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const startPlayback = () => {
    const v = videoRef.current;
    if (v) {
      v.play();
      setPlaying(true);
    }
  };

  return (
    <section className="bg-[#1E1C24]">
      <div className="overflow-hidden rounded-b-[40px] bg-[#A6B4FD]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="font-extrabold tracking-tight text-[#19181F]"
            style={{
              fontFamily: 'Inter, "Inter Placeholder", sans-serif',
              fontSize: "clamp(34px, 5vw, 52px)",
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
            }}
          >
            Your Infrastructure, Simplified
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-[#46454C]">
            Discover a world of possibilities! Unlock the features that
            turn data into decisions.
          </p>

          <Link
            to="/contact"
            className="
              group mt-6 inline-flex items-center gap-2 rounded-lg
              bg-[#5B5CF0] px-5 py-3 text-sm font-semibold text-white
              transition-colors duration-300 hover:bg-[#4A4BE3]
            "
          >
            Try it now
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Video player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl bg-[#121116] p-2 shadow-[0_24px_60px_rgba(30,28,60,0.35)]"
        >
          <div className="relative overflow-hidden rounded-xl">
            <video
              ref={videoRef}
              src={videoSrc}
              poster={poster}
              controls={playing}
              playsInline
              onPlay={() => setPlaying(true)}
              className="block aspect-video w-full bg-gradient-to-br from-[#6E71F2] via-[#8F92F5] to-[#A6A9F8]"
            />

            {/* Overlay (hidden once playback starts) */}
            {!playing && (
              <button
                type="button"
                onClick={startPlayback}
                aria-label="Play how it works video"
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Title + wavy underline */}
                <div className="pointer-events-none absolute left-7 top-6 text-left">
                  <span
                    className="block font-extrabold leading-none text-white"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: "clamp(28px, 4vw, 46px)",
                      letterSpacing: "-1px",
                    }}
                  >
                    How it<br />works
                  </span>
                  <svg
                    viewBox="0 0 150 12"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    className="mt-3 h-3 w-28"
                  >
                    <path d="M2 7 Q11 1 20 7 T38 7 T56 7 T74 7 T92 7 T110 7 T128 7 T146 7" />
                  </svg>
                </div>

                {/* Center play button */}
                <span className="flex h-12 w-16 items-center justify-center rounded-xl bg-[#15141A]/90 transition-transform duration-300 hover:scale-105">
                  <Play size={22} className="ml-0.5 fill-white text-white" />
                </span>
              </button>
            )}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    heading: "We create your own secure and scalable environment",
    description:
      "We kick off your journey by setting up a personalized, secure, scalable environment shaped to your needs. Your data deserves a space that keeps it secure and lets it scale smoothly as your requirements change.",
    image: "/test1.webp",
    placeholder: "from-[#2c2a36] to-[#3a4a40]",
  },
  {
    heading:
      "Configure data, instruments, model constructions, etc. Alerts included!",
    description:
      "Take charge as you easily configure your data, instruments, and model constructions. Our 24/7 support stays right beside you, so you're never on your own through this process. And yes, alerts come with the package – keeping you informed and in control.",
    image: "/test2.jpg",
    placeholder: "from-[#2c2a36] to-[#3a2a3a]",
  },
  {
    heading: "Customize your dashboard and reports",
    description:
      "Make it yours! Tailor your dashboard to surface the insights that matter most to you. Whether it's key performance indicators or specific data points, customization is right at your fingertips. Build reports that line up with your goals and present information in the way that makes the most sense for you.",
    image: "/test3.avif",
    placeholder: "from-[#2c2a36] to-[#2a3344]",
  },
  {
    heading: "Gain insights and enjoy your intelligent infrastructure",
    description:
      "The moment you've been waiting for! With insights from your personalized dashboard and reports in hand, you're ready to make informed decisions, seize opportunities, and truly enjoy the power of your data.",
    image: "/media/how/step-4.png",
    placeholder: "from-[#322f3f] to-[#2a2a44]",
  },
];

const pad = (n) => String(n).padStart(2, "0");

const Media = ({ step }) =>
  step.video ? (
    <video
      src={step.video}
      poster={step.poster}
      autoPlay
      loop
      muted
      playsInline
      className="h-full w-full object-cover"
      onError={(e) => (e.currentTarget.style.display = "none")}
    />
  ) : (
    <img
      src={step.image}
      alt={step.heading}
      className="h-full w-full object-cover"
      onError={(e) => (e.currentTarget.style.display = "none")}
    />
  );

const HowItWorksslider = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(steps.length - 1, Math.floor(v * steps.length));
    setActive(idx);
  });

  return (
    <section ref={sectionRef} className="bg-[#17161E] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 lg:grid-cols-2 lg:gap-16">
        {/* LEFT — sticky media + progress rail (desktop only) */}
        <div className="hidden lg:block">
          <div className="sticky top-24 flex gap-5">
            {/* Progress rail */}
            <div className="flex flex-col items-center gap-3 py-1">
              <span className="text-xs text-gray-500">{pad(1)}</span>
              <div className="relative w-[3px] flex-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  style={{ height: fillHeight }}
                  className="absolute left-0 top-0 w-full rounded-full bg-[#6366F1]"
                />
              </div>
              <span className="text-xs text-gray-500">{pad(steps.length)}</span>
            </div>

            {/* Media panel */}
            <div className="relative h-[330px] flex-1 overflow-hidden rounded-3xl border border-white/[0.06] bg-[#211F29]">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{ opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute inset-0 bg-gradient-to-br ${step.placeholder}`}
                  style={{ pointerEvents: active === i ? "auto" : "none" }}
                >
                  <Media step={step} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — scrolling steps */}
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex min-h-[34vh] flex-col justify-center py-6 lg:min-h-[44vh]"
            >
              {/* Mobile media */}
              <div className="mb-6 aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.06] bg-[#211F29] lg:hidden">
                <div className={`h-full w-full bg-gradient-to-br ${step.placeholder}`}>
                  <Media step={step} />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-[#6366F1]">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-2xl font-bold leading-tight text-white md:text-3xl">
                  {step.heading}
                </h3>
                <p className="mt-4 max-w-lg leading-relaxed text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const CTAsection = () => {
  return (
    <section className="bg-[#111216] min-h-screen w-full flex items-center justify-center p-6 sm:p-12">
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


const HowItWorks = () => {
  return (
    <div>
        <InfrastructureHero/>
        <HowItWorksslider/>
        
        <CTAsection/>
    </div>
  )
}

export default HowItWorks
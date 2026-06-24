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

/* ---------- VIDEO SOURCE – replace with your own URL ---------- */
const videoSrc =
  "https://cdn.example.com/videos/terastamp-demo.mp4"; // <-- PUT YOUR VIDEO URL HERE
const poster = "/images/how-it-works-poster.png";

const InfrastructureHero = () => {
  const videoRef = useRef(null);

  return (
    <section className="bg-white">
      <div className="overflow-hidden rounded-b-[40px]" style={{ background: colors.accent }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="font-extrabold tracking-tight text-white"
              style={{
                fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                fontSize: "clamp(34px, 5vw, 52px)",
                lineHeight: 1.05,
                letterSpacing: "-1.5px",
              }}
            >
              Your Infrastructure, <span style={{ color: "#ffffff" }}>Simplified</span>
            </h1>

            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/80">
              Discover a world of possibilities! Unlock the features that
              turn data into decisions.
            </p>

            <Link
              to="/contact"
              className="
                group mt-6 inline-flex items-center gap-2 rounded-lg
                bg-white px-5 py-3 text-sm font-semibold text-[#F26418]
                transition-colors duration-300 hover:bg-gray-100
              "
            >
              Try it now
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Video player – autoplay, loop, muted, controls */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-white/10 p-2 shadow-[0_24px_60px_rgba(30,28,60,0.35)] border-2 border-white/20"
          >
            <div className="relative overflow-hidden rounded-xl">
              <video
                ref={videoRef}
                src="/herovideo.mp4"
                poster={poster}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="block aspect-video w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Steps data (same as before) ---------- */
const steps = [
  {
    heading: "We create your own secure and scalable environment",
    description:
      "We kick off your journey by setting up a personalized, secure, scalable environment shaped to your needs. Your data deserves a space that keeps it secure and lets it scale smoothly as your requirements change.",
    image: "/windmi.jpeg",
    placeholder: "from-[#f0ede8] to-[#d9d6d0]",
  },
  {
    heading:
      "Configure data, instruments, model constructions, etc. Alerts included!",
    description:
      "Take charge as you easily configure your data, instruments, and model constructions. Our 24/7 support stays right beside you, so you're never on your own through this process. And yes, alerts come with the package – keeping you informed and in control.",
    image: "/test2.jpg",
    placeholder: "from-[#ede8f0] to-[#d9d0dd]",
  },
  {
    heading: "Customize your dashboard and reports",
    description:
      "Make it yours! Tailor your dashboard to surface the insights that matter most to you. Whether it's key performance indicators or specific data points, customization is right at your fingertips. Build reports that line up with your goals and present information in the way that makes the most sense for you.",
    image: "/test3.avif",
    placeholder: "from-[#e8ecf0] to-[#d0d5dd]",
  },
  {
    heading: "Gain insights and enjoy your intelligent infrastructure",
    description:
      "The moment you've been waiting for! With insights from your personalized dashboard and reports in hand, you're ready to make informed decisions, seize opportunities, and truly enjoy the power of your data.",
    image: "/mine.jpeg",
    placeholder: "from-[#ede8f0] to-[#d5d0e0]",
  },
];

/* Helper to highlight last word in orange */
const highlightLastWord = (text) => {
  const words = text.split(" ");
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <span style={{ color: colors.accent }}>{last}</span>
    </>
  );
};

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
    <section ref={sectionRef} className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 lg:grid-cols-2 lg:gap-16">
        {/* LEFT — sticky media + progress rail (desktop only) */}
        <div className="hidden lg:block">
          <div className="sticky top-24 flex gap-5">
            {/* Progress rail */}
            <div className="flex flex-col items-center gap-3 py-1">
              <span className="text-xs text-[#7C8595]">{pad(1)}</span>
              <div className="relative w-[3px] flex-1 overflow-hidden rounded-full bg-[#E2E8F0]">
                <motion.div
                  style={{ height: fillHeight }}
                  className="absolute left-0 top-0 w-full rounded-full"
                  style={{ background: colors.accent }}
                />
              </div>
              <span className="text-xs text-[#7C8595]">{pad(steps.length)}</span>
            </div>

            {/* Media panel – 2px orange border */}
            <div className="relative h-[330px] flex-1 overflow-hidden rounded-3xl border-2 border-[#F26418] bg-[#F9FAFB]">
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
              {/* Mobile media – 2px orange border */}
              <div className="mb-6 aspect-[4/3] overflow-hidden rounded-2xl border-2 border-[#F26418] bg-[#F9FAFB] lg:hidden">
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
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white"
                  style={{ background: colors.accent }}
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 text-2xl font-bold leading-tight text-black md:text-3xl">
                  {highlightLastWord(step.heading)}
                </h3>
                <p className="mt-4 max-w-lg leading-relaxed text-[#7C8595]">
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
    <section className="bg-white min-h-screen w-full flex items-center justify-center p-6 sm:p-12">
      <div
        className="rounded-[32px] w-full max-w-6xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 pt-8 pb-6 md:px-16 md:pt-16 md:pb-12 gap-8 relative"
        style={{ background: colors.accent }}
      >
        {/* Left Content */}
        <div className="flex flex-col max-w-md z-10 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Discover the "New" New with TeraStamp
          </h1>
          <p className="text-lg sm:text-xl font-medium opacity-90 mb-8">
            Start building faster today
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#F26418] font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:bg-gray-50 transition-all duration-200 group"
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

        {/* Right – natural image */}
        <div className="relative w-full md:w-[55%] h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 self-end">
          <img
            src="/test1.webp"
            alt="TeraStamp 3D Map Interface"
            className="w-full h-full object-cover"
          />

          {/* Mock Top App Bar */}
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

          {/* Floating Data Card */}
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

          {/* Decorative pins */}
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
      <InfrastructureHero />
      <HowItWorksslider />
      <CTAsection />
    </div>
  );
};

export default HowItWorks;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Clock3,
  Eye,
  BadgeCheck,
  Database,
  Copy,
  Zap,
  TrendingUp,
  Shield,
  BarChart3,
  Layers,
  Cpu,
} from "lucide-react";

/* ---------- Color Palette ---------- */
const colors = {
  accent: "#F26418",
  lightAccent: "#FFF0E8",
  darkBg: "#0B0E14",
  cardBg: "#F8F9FC",
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

/* ---------- Helper to highlight last word in orange ---------- */
const highlightLastWord = (text) => {
  const words = text.split(" ");
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <span style={{ color: colors.accent }}>{last}</span>
    </>
  );
};

/* ================================================================
   HERO SECTION – Split layout with video
   ================================================================ */
const AdaHero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF0E8] px-4 py-1.5 text-sm font-medium text-[#F26418]">
              <Sparkles size={16} />
              AI Assistant
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#1A202C] sm:text-5xl lg:text-6xl">
              TeraStamp's <span className="text-[#F26418]">GEO</span>
              <br />
              <span className="text-[#F26418]">Intelligence</span> for Infrastructure
            </h1>
            <p className="mt-6 text-lg text-[#4A5568] max-w-lg leading-relaxed">
              GEO delivers the clarity you need. You drive the action. 
              Ask questions in plain language and get instant answers 
              from your entire project data.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F26418] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#E05A10] hover:scale-105"
              >
                Explore GEO
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/modules/ada"
                className="inline-flex items-center gap-2 rounded-xl border border-[#D1D9E6] px-6 py-3.5 text-base font-semibold text-[#1A202C] transition hover:bg-[#F8F9FC]"
              >
                Learn more
              </Link>
            </div>
            <div className="mt-8 flex gap-8 border-t border-[#E2E8F0] pt-8">
              <div>
                <span className="text-2xl font-bold text-[#1A202C]">Real‑time</span>
                <p className="text-sm text-[#4A5568]">Live data access</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#1A202C]">100%</span>
                <p className="text-sm text-[#4A5568]">Natural language</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#1A202C]">10x</span>
                <p className="text-sm text-[#4A5568]">Faster insights</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#F8F9FC] border border-[#E2E8F0]">
              <div className="aspect-w-16 aspect-h-9">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source src="/terastamp-tsf-ai-assistant.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-[#1A202C]">GEO live</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ================================================================
   UNDERSTANDING ADA – Three core capabilities (cards)
   ================================================================ */
const adaSteps = [
  {
    number: "01",
    title: "Immediate Clarity",
    desc: "GEO turns your project data into straightforward answers within moments. Pose any question in everyday language and receive relevant context spanning your entire asset portfolio.",
  },
  {
    number: "02",
    title: "Designed for Field Teams",
    desc: "Built for operational teams managing physical infrastructure, GEO ensures everyone works from a unified intelligence layer.",
  },
  {
    number: "03",
    title: "From Reactive to Proactive",
    desc: "GEO goes beyond answering queries—it helps identify emerging issues and supports forward-looking decisions.",
  },
];

const AdaUnderstanding = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <motion.div {...fadeUp()} className="text-center">
          <h2 className="text-3xl font-bold text-[#1A202C] md:text-4xl">
            Turning Information into <span className="text-[#F26418]">Insight</span>
          </h2>
          <p className="mt-4 text-lg text-[#4A5568] max-w-2xl mx-auto">
            In infrastructure and construction, accessing data is no longer the
            challenge—deriving meaning from it is. GEO transforms intricate data
            into clear, immediate answers.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {adaSteps.map((step, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(idx * 0.1)}
              className="rounded-2xl border-2 border-[#F26418] bg-white p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E8] text-[#F26418] text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#1A202C]">
                {highlightLastWord(step.title)}
              </h3>
              <p className="mt-2 text-[#4A5568]">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional info: What is Ada */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#1A202C]">
            Meet <span className="text-[#F26418]">GEO</span>
          </h3>
          <p className="mt-4 text-[#4A5568] leading-relaxed">
            TeraStamp's GEO is an AI assistant purpose‑built for infrastructure monitoring.
            She connects to your environment, tapping into real‑time data, historical records,
            alerts, and all relevant project information. Instead of navigating dashboards or
            compiling reports, GEO lets you simply ask questions. Powered by state‑of‑the‑art
            LLMs and built on a secure, trusted foundation.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ================================================================
   ADA INSIGHTS – 5 types (cards with 2px orange border)
   ================================================================ */
const insights = [
  {
    icon: <Zap className="text-[#F26418]" />,
    title: "Pattern Correlation",
    desc: "Uncover relationships between variables to better understand cause and effect across your project.",
  },
  {
    icon: <Shield className="text-[#F26418]" />,
    title: "Validation & Anomaly Detection",
    desc: "Verify outputs with confidence indicators and filter out false positives before they cause unnecessary concern.",
  },
  {
    icon: <TrendingUp className="text-[#F26418]" />,
    title: "Predictive Modeling",
    desc: "Anticipate how critical parameters will evolve using real‑time data and advanced forecasting.",
  },
  {
    icon: <BarChart3 className="text-[#F26418]" />,
    title: "Automated Reporting",
    desc: "Generate summaries or alert logs automatically—GEO handles the heavy lifting.",
  },
  {
    icon: <Eye className="text-[#F26418]" />,
    title: "Structural Health Assessment",
    desc: "Get a clear, instant snapshot of your assets' condition and performance.",
  },
];

const AdaInsights = () => {
  return (
    <section className="bg-[#F8F9FC]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <motion.div {...fadeUp()} className="text-center">
          <h2 className="text-3xl font-bold text-[#1A202C] md:text-4xl">
            Five ways GEO delivers <span className="text-[#F26418]">value</span>
          </h2>
          <p className="mt-4 text-lg text-[#4A5568] max-w-2xl mx-auto">
            Here are concrete examples of how GEO answers your most important
            project questions.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((item, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(idx * 0.05)}
              className="rounded-2xl bg-white p-6 border-2 border-[#F26418] hover:shadow-lg transition-all hover:border-[#F26418] group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E8] group-hover:bg-[#F26418] transition-colors">
                {React.cloneElement(item.icon, {
                  className: "w-6 h-6 group-hover:text-white transition-colors",
                })}
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#1A202C]">{item.title}</h3>
              <p className="mt-2 text-[#4A5568]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================================================================
   ADA BENEFITS – 6 benefits (same as DigitalTwin benefits)
   ================================================================ */
const benefits = [
  {
    icon: <Sparkles className="text-[#F26418]" />,
    title: "Natural Language Queries",
    desc: "Instant access to project intelligence through everyday language.",
  },
  {
    icon: <Clock3 className="text-[#F26418]" />,
    title: "Manual Analysis Reduced",
    desc: "Reduce time spent on manual analysis and data interpretation.",
  },
  {
    icon: <Eye className="text-[#F26418]" />,
    title: "Early Risk Spotting",
    desc: "Spot risks earlier with contextual awareness and anomaly recognition.",
  },
  {
    icon: <BadgeCheck className="text-[#F26418]" />,
    title: "Confident Decisions",
    desc: "Faster, more confident decisions backed by clear, structured responses.",
  },
  {
    icon: <Database className="text-[#F26418]" />,
    title: "Seamless Integration",
    desc: "Seamless integration with live data, historical archives, models, and documentation.",
  },
  {
    icon: <Cpu className="text-[#F26418]" />,
    title: "Scalable Intelligence",
    desc: "A scalable intelligence layer that adapts as your project evolves.",
  },
];

const AdaBenefits = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <motion.div {...fadeUp()} className="text-center">
          <span className="inline-block rounded-full border-2 border-[#F26418] bg-[#FFF0E8] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#F26418]">
            Core Advantages
          </span>
          <h2 className="mt-5 text-3xl font-bold text-[#1A202C] md:text-4xl">
            What distinguishes <span className="text-[#F26418]">GEO</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(idx * 0.05)}
              className="rounded-2xl bg-white p-6 border-2 border-[#F26418] hover:shadow-lg transition-all hover:border-[#F26418] group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E8] group-hover:bg-[#F26418] transition-colors">
                {React.cloneElement(item.icon, {
                  className: "w-6 h-6 group-hover:text-white transition-colors",
                })}
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#1A202C]">{item.title}</h3>
              <p className="mt-2 text-[#4A5568]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================================================================
   CTA BANNER – Same as DigitalTwin
   ================================================================ */
const AdaCTA = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#F26418] to-[#E05A10]">
          <div className="flex flex-col items-center px-6 py-20 text-center text-white sm:px-10 md:py-24">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Step into the
              <br className="hidden sm:block" />
              <span>Next Frontier</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base opacity-90 sm:text-lg">
              Accelerate your projects from day one with GEO's AI-powered
              intelligence.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#F26418] transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Schedule a demo
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};



/* ================================================================
   DEMO FORM – Same as DigitalTwin
   ================================================================ */
const AdaDemoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    privacy: false,
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <motion.div {...fadeUp()} className="text-center">
          <h2 className="text-3xl font-bold text-[#1A202C] md:text-4xl">
            Experience TeraStamp's <span className="text-[#F26418]">GEO</span> live
          </h2>
          <p className="mt-4 text-lg text-[#4A5568]">
            Fill in the form and we’ll set up a live walkthrough of how GEO can
            enhance your decision‑making.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              className="h-12 w-full rounded-xl border border-[#E2E8F0] bg-[#F8F9FC] px-4 text-[#1A202C] placeholder-[#A0AEC0] focus:border-[#F26418] focus:ring-2 focus:ring-[#F26418]/20 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Work email"
              value={formData.email}
              onChange={handleChange}
              className="h-12 w-full rounded-xl border border-[#E2E8F0] bg-[#F8F9FC] px-4 text-[#1A202C] placeholder-[#A0AEC0] focus:border-[#F26418] focus:ring-2 focus:ring-[#F26418]/20 outline-none"
            />
          </div>
          <input
            type="text"
            name="company"
            placeholder="Company / Organisation"
            value={formData.company}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-[#E2E8F0] bg-[#F8F9FC] px-4 text-[#1A202C] placeholder-[#A0AEC0] focus:border-[#F26418] focus:ring-2 focus:ring-[#F26418]/20 outline-none"
          />
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              className="mt-1 h-5 w-5 rounded border-[#D1D9E6] text-[#F26418] focus:ring-[#F26418]"
            />
            <span className="text-sm text-[#4A5568]">
              I agree to the <a href="#" className="text-[#F26418] hover:underline">privacy policy</a> and consent to receiving relevant communications.
            </span>
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-[#F26418] py-3.5 text-base font-semibold text-white transition hover:bg-[#E05A10] hover:scale-[1.02]"
          >
            Book a demo
          </button>
        </form>
      </div>
    </section>
  );
};

/* ================================================================
   MAIN EXPORT
   ================================================================ */
const OurAIAssistant = () => {
  return (
    <div className="bg-white overflow-hidden">
      <AdaHero />
      <AdaUnderstanding />
      <AdaInsights />
      <AdaBenefits />
      <AdaCTA />
      <AdaDemoForm />
    </div>
  );
};

export default OurAIAssistant;
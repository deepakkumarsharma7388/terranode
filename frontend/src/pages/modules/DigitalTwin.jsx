import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Shield, BarChart3, Layers, Eye, Clock, Globe, Cpu, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const colors = {
  accent: "#F26418",
  lightAccent: "#FFF0E8",
  darkBg: "#0B0E14",
  cardBg: "#F8F9FC",
  text: "#4A5568",
  heading: "#1A202C",
};

// Animation helpers
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const DigitalTwin = () => {
  // State for interactive tabs
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { label: "Live Context", icon: <Globe size={20} />, content: "Sensors placed directly on the model give you real‑time measurements in relation to the asset. Review values alongside historical trends to understand exactly what's changing." },
    { label: "Team Ready", icon: <Users size={20} />, content: "A shared digital model accessible from anywhere. Every stakeholder sees the same prioritized, clear information—so decisions are aligned and faster." },
    { label: "Predictive Power", icon: <TrendingUp size={20} />, content: "The system learns normal behaviour, spots early deviations, and issues behaviour‑based warnings. It ranks actions by actual risk, turning your model into a forecasting engine." },
  ];

  const benefits = [
    { icon: <Zap className="text-[#F26418]" />, title: "Real‑time Visibility", desc: "Integrate geotechnical sensors, LiDAR, InSAR, drones, and GIS into one unified view." },
    { icon: <Shield className="text-[#F26418]" />, title: "Early Risk Detection", desc: "Machine learning flags anomalies before they become problems, so you can act proactively." },
    { icon: <BarChart3 className="text-[#F26418]" />, title: "Smarter Decisions", desc: "Predictive intelligence ranks actions so your team focuses on what matters most." },
    { icon: <Layers className="text-[#F26418]" />, title: "Complete Integration", desc: "Surface, subsoil, assets, and environment—everything lives in one evolving model." },
    { icon: <Clock className="text-[#F26418]" />, title: "Operational Savings", desc: "Streamlined inspections and maintenance reduce costs and downtime." },
    { icon: <Cpu className="text-[#F26418]" />, title: "Scalable & Flexible", desc: "The digital twin grows with your project, adapting to new data and requirements." },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* ----- HERO SECTION ----- */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF0E8] px-4 py-1.5 text-sm font-medium text-[#F26418]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F26418] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F26418]"></span>
                </span>
                Live Digital Twin
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#1A202C] sm:text-5xl lg:text-6xl">
                Your Infrastructure, <br />
                <span className="text-[#F26418]">Mirrored in Real Time</span>
              </h1>
              <p className="mt-6 text-lg text-[#4A5568] max-w-lg leading-relaxed">
                Go beyond static models. TeraStamp’s Digital Twin gives you a living, 
                data‑rich replica of your asset—above and below ground—so you can 
                understand, forecast, and act with confidence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#F26418] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#E05A10] hover:scale-105"
                >
                  See it in action
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/modules/digital-twin"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#D1D9E6] px-6 py-3.5 text-base font-semibold text-[#1A202C] transition hover:bg-[#F8F9FC]"
                >
                  Learn more
                </Link>
              </div>
              <div className="mt-8 flex gap-8 border-t border-[#E2E8F0] pt-8">
                <div>
                  <span className="text-2xl font-bold text-[#1A202C]">100%</span>
                  <p className="text-sm text-[#4A5568]">Data‑driven</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#1A202C]">24/7</span>
                  <p className="text-sm text-[#4A5568]">Live updates</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#1A202C]">5x</span>
                  <p className="text-sm text-[#4A5568]">Faster insights</p>
                </div>
              </div>
            </motion.div>

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
                    <source src="/terastamp-dam-monitoring.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium text-[#1A202C]">Live data feed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ----- TABS SECTION ----- */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <motion.div {...fadeUp()} className="text-center">
            <h2 className="text-3xl font-bold text-[#1A202C] md:text-4xl">
              What makes the Digital Twin <span className="text-[#F26418]">powerful</span>
            </h2>
            <p className="mt-4 text-lg text-[#4A5568] max-w-2xl mx-auto">
              Three core capabilities that turn your static data into a dynamic decision‑making tool.
            </p>
          </motion.div>

          <div className="mt-12">
            <div className="flex flex-wrap justify-center gap-2 border-b border-[#E2E8F0] pb-2">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                    activeTab === idx
                      ? "bg-[#F26418] text-white shadow-md"
                      : "text-[#4A5568] hover:bg-[#FFF0E8]"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="mt-8 p-6 bg-[#F8F9FC] rounded-2xl border-2 border-[#F26418] min-h-[120px] flex items-center">
              <p className="text-lg text-[#1A202C]">{tabs[activeTab].content}</p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {tabs.map((tab, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(idx * 0.1)}
                className="rounded-2xl border-2 border-[#F26418] bg-white p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E8] text-[#F26418]">
                  {tab.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#1A202C]">{tab.label}</h3>
                <p className="mt-2 text-[#4A5568]">{tab.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----- BENEFITS GRID ----- */}
      <section className="bg-[#F8F9FC]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <motion.div {...fadeUp()} className="text-center">
            <h2 className="text-3xl font-bold text-[#1A202C] md:text-4xl">
              Why choose TeraStamp’s Digital Twin
            </h2>
            <p className="mt-4 text-lg text-[#4A5568] max-w-2xl mx-auto">
              Six advantages that set our digital twin apart from the rest.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(idx * 0.05)}
                className="rounded-2xl bg-white p-6 border-2 border-[#F26418] hover:shadow-lg transition-all hover:border-[#F26418] group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E8] group-hover:bg-[#F26418] transition-colors">
                  {React.cloneElement(item.icon, { className: "w-6 h-6 group-hover:text-white transition-colors" })}
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#1A202C]">{item.title}</h3>
                <p className="mt-2 text-[#4A5568]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----- CTA BANNER – now using the SAME padding as all other sections ----- */}
     {/* ----- CTA BANNER ----- */}
<section>
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
    <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#F26418] to-[#E05A10]">
      <div className="flex flex-col items-center px-6 py-20 text-center text-white sm:px-10 md:py-24">
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Ready to see your project
          <br className="hidden sm:block" />
          <span>come alive?</span>
        </h2>

        <p className="mt-5 max-w-2xl text-base opacity-90 sm:text-lg">
          Get a personalized demo and discover how the Digital Twin can transform your
          asset management.
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

      {/* ----- DEMO FORM ----- */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl">
          <motion.div {...fadeUp()} className="text-center">
            <h2 className="text-3xl font-bold text-[#1A202C] md:text-4xl">
              Experience it for <span className="text-[#F26418]">yourself</span>
            </h2>
            <p className="mt-4 text-lg text-[#4A5568]">
              Fill in the form and we’ll set up a live walkthrough of your own infrastructure.
            </p>
          </motion.div>

          <form className="mt-10 space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full name"
                className="h-12 w-full rounded-xl border border-[#E2E8F0] bg-[#F8F9FC] px-4 text-[#1A202C] placeholder-[#A0AEC0] focus:border-[#F26418] focus:ring-2 focus:ring-[#F26418]/20 outline-none"
              />
              <input
                type="email"
                placeholder="Work email"
                className="h-12 w-full rounded-xl border border-[#E2E8F0] bg-[#F8F9FC] px-4 text-[#1A202C] placeholder-[#A0AEC0] focus:border-[#F26418] focus:ring-2 focus:ring-[#F26418]/20 outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Company / Organisation"
              className="h-12 w-full rounded-xl border border-[#E2E8F0] bg-[#F8F9FC] px-4 text-[#1A202C] placeholder-[#A0AEC0] focus:border-[#F26418] focus:ring-2 focus:ring-[#F26418]/20 outline-none"
            />
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 h-5 w-5 rounded border-[#D1D9E6] text-[#F26418] focus:ring-[#F26418]" />
              <span className="text-sm text-[#4A5568]">
                I agree to the <a href="#" className="text-[#F26418] hover:underline">privacy policy</a> and consent to receiving relevant communications.
              </span>
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-[#F26418] py-3.5 text-base font-semibold text-white transition hover:bg-[#E05A10] hover:scale-[1.02]"
            >
              Request my demo
            </button>          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default DigitalTwin;
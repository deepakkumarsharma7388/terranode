import { motion } from "framer-motion";
import {
  Clock,
  Bell,
  FileText,
  ShieldCheck,
  Share2,
  Sparkles,
  BarChart3,
} from "lucide-react";

const heroImage = "/mine.jpeg"; // <-- replace with your image

const benefits = [
  { icon: Clock, label: "Tailored and Scheduled Report Generation" },
  { icon: Bell, label: "Early Warning Alert System for Mines" },
  { icon: FileText, label: "Live Dashboards Delivering Immediate Insights" },
  { icon: ShieldCheck, label: "Adaptability, Oversight, and Protection of Mine Assets" },
  { icon: Share2, label: "Scalable and Configurable Solutions for Mining" },
  { icon: Sparkles, label: "Rapid Analysis and Task Automation Powered by our AI Chatbot" },
  {
    icon: BarChart3,
    label: "Team Collaboration via Graph Comments and Member Tagging",
    wide: true,
  },
];

// Four monitoring areas shown in the 2x2 grid.
const monitoring = [
  {
    title: "Deformation control",
    text:
      "To manage deformation and structural integrity, we process InSAR data to spot ground movements, use monitoring radars to follow slope stability, and rely on geotechnical instruments to pinpoint internal ground displacements. These analyses are reinforced by data from UAVs and LiDAR, which produce detailed 3D models for fast, precise risk assessment.",
  },
  {
    title: "Vibration detection",
    text:
      "To detect vibrations and seismic activity, we draw on data from seismic and vibration sensors, which keep track of both natural events and the effects of mining activity on the surrounding area.",
  },
  {
    title: "Hydrological monitoring",
    text:
      "For hydrological monitoring, piezometer data measures pore pressure while water level sensors enable accurate tracking of water tables, which is essential to the stability of dams and slopes.",
  },
  {
    title: "Real-Time Data Integration",
    text:
      "All of this information is combined in real time, so critical parameters such as pressure, deformations, vibrations, water levels, temperature, and environmental conditions can be watched on a single platform. With TeraStamp, all this data is centralized, making it possible to rapidly spot disruptions, risk factors, and structural changes, and to act quickly to correct anomalies. On top of that, our AI chatbot gives you instant information and assistance whenever you need it.",
  },
];

const vizPoints = [
  "With 3D geological maps and the option to use digital twins, ground behavior can be examined in detail and potential challenges anticipated.",
  "The platform also delivers continuous monitoring through trend analysis, interactive graphs, and real-time dashboards, supplying information for quick decision-making.",
  "All of this is rounded out by automated and customizable reports that address the varied needs of mining industry stakeholders.",
];

// Reusable scroll-in animation. `i` adds a small stagger delay.
const rise = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.55, delay: i * 0.08 },
});

// `leading-[1.2] pb-1` gives descenders (g, y, p) room so bg-clip-text
// doesn't crop them — Tailwind's text-5xl/6xl set line-height:1 otherwise.
const gradientHeading =
  "bg-gradient-to-r from-[#B6C2FF] to-white bg-clip-text text-transparent leading-[1.2] pb-1";

const Mining = () => {
  return (
    <main className="bg-[#1A1822] py-16 md:py-20">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.h1
          {...rise(0)}
          className={`${gradientHeading} text-5xl font-extrabold tracking-tight md:text-6xl`}
        >
          Mines and Tailings Dams
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 text-lg leading-relaxed text-white md:text-xl"
        >
          Mines, including open-pit mines and tailings dams, are essential parts
          of resource extraction but also carry substantial risks. The success
          of mining activities is directly tied to the ongoing, accurate
          monitoring of geotechnical, geospatial, and structural data in order to
          prevent failures, avoid downtime, and keep up with safety and
          environmental measures.
        </motion.p>

        <motion.div
          {...rise(2)}
          className="mt-9 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-[#8a7f72] to-[#3a352c]"
        >
          <img
            src={heroImage}
            alt="Open-pit mine aerial view"
            className="h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </motion.div>
      </section>

      {/* Positioning Statement */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <motion.h2
          {...rise(0)}
          className={`${gradientHeading} text-4xl font-bold tracking-tight md:text-5xl`}
        >
          Ensure Safety and Operational continuity in Mine sites with TeraStamp's
          Data Intelligence Platform
        </motion.h2>
      </section>

      {/* Comprehensive Monitoring */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <motion.h2
          {...rise(0)}
          className="mb-5 text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          Comprehensive monitoring of mining operations
        </motion.h2>

        <motion.p
          {...rise(1)}
          className="text-lg leading-relaxed text-white"
        >
          At TeraStamp, we help mining operations boost safety and efficiency
          with our advanced data management software.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2">
          {monitoring.map((m, i) => (
            <motion.div key={m.title} {...rise(i % 2)}>
              <h3 className="mb-3 text-2xl font-bold text-white">
                {m.title}
              </h3>

              <p className="text-lg leading-relaxed text-white">
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advanced Visualization */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <motion.h2
          {...rise(0)}
          className={`${gradientHeading} mb-5 text-4xl font-bold tracking-tight md:text-5xl`}
        >
          Advanced Visualization Tailored for Mines, Tailings Dams and Open-pits
        </motion.h2>

        <motion.p
          {...rise(1)}
          className="mb-6 text-lg leading-relaxed text-white"
        >
          TeraStamp provides advanced visualization tools that give a more
          accurate grasp of complex geotechnical conditions.
        </motion.p>

        <ul className="space-y-4">
          {vizPoints.map((p, i) => (
            <motion.li
              key={i}
              {...rise(i)}
              className="flex gap-3 text-lg leading-relaxed text-white"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8B8FF5]" />
              <span>{p}</span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Early Warning */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <motion.h2
          {...rise(0)}
          className={`${gradientHeading} mb-5 text-4xl font-bold tracking-tight md:text-5xl`}
        >
          Intelligent Monitoring and Early Warning Systems in Mining
        </motion.h2>

        <motion.p
          {...rise(1)}
          className="text-lg leading-relaxed text-white"
        >
          TeraStamp allows continuous monitoring of key risk indicators, such as
          water levels, pressure, deformation, vibration, and environmental
          conditions.
        </motion.p>
      </section>

      {/* Benefits */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <motion.div
          {...rise(0)}
          className="rounded-3xl border border-white/[0.05] bg-[#211F29] p-6 md:p-9"
        >
          <h2 className="mb-7 text-2xl font-bold text-white md:text-3xl">
            Benefits of Using TeraStamp
          </h2>

          <div className="grid grid-cols-2 gap-3.5 md:grid-cols-4">
            {benefits.map(({ icon: Icon, label, wide }, i) => (
              <motion.div
                key={label}
                {...rise(i)}
                className={`flex flex-col items-center justify-center gap-3 rounded-xl border border-[#6366F1]/40 bg-white/[0.02] px-3 py-7 text-center ${
                  wide ? "col-span-2" : ""
                }`}
              >
                <Icon size={26} className="text-[#8B8FF5]" />

                <span className="text-sm font-semibold leading-snug text-white md:text-base">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Mining;
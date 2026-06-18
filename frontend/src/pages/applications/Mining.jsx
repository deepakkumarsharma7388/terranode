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

const heroImage = "/mine.webp"; // <-- replace with your image

const benefits = [
  { icon: Clock, label: "Customizable and Scheduled Reporting" },
  { icon: Bell, label: "Alarm System for Early Warning in Mines" },
  { icon: FileText, label: "Real-Time Dashboards for Instant Insights" },
  { icon: ShieldCheck, label: "Flexibility, Control, and Security Over Mines Assets" },
  { icon: Share2, label: "Scalability and Customization for Mining" },
  { icon: Sparkles, label: "Quick Analysis and Automation of Tasks thanks to our AI Chatbot" },
  {
    icon: BarChart3,
    label: "Collaborative Environment through Comments in Graphs & Member's Tagging",
    wide: true,
  },
];

// Four monitoring areas shown in the 2x2 grid.
const monitoring = [
  {
    title: "Deformation control",
    text:
      "For deformation control and structural integrity, we handle InSAR data to detect ground movements, monitoring radars to track slope stability, and geotechnical instruments to identify internal ground displacements. These analyses are complemented by data from UAVs and LiDAR, which generate detailed 3D models to assess risks quickly and accurately.",
  },
  {
    title: "Vibration detection",
    text:
      "For the detection of vibrations and seismic activity, we use data from seismic and vibration sensors, which monitor both natural events and the impacts of mining activity on the surroundings.",
  },
  {
    title: "Hydrological monitoring",
    text:
      "In hydrological monitoring, data from piezometers measure pore pressure and water level sensors allow precise monitoring of water tables, fundamental for the stability of dams and slopes.",
  },
  {
    title: "Real-Time Data Integration",
    text:
      "All this information is integrated in real-time, allowing critical parameters such as pressure, deformations, vibrations, water levels, temperature and environmental conditions to be monitored on a single platform. With Proqio, all of this data is centralized, making it possible to quickly detect disruptions, risk factors and structural changes, and to take prompt action to correct anomalies. Moreover, with our AI chatbot, you get instant information and assistance whenever you need it.",
  },
];

const vizPoints = [
  "Thanks to 3D geological maps and the possibility of using digital twins, it is possible to analyze ground behavior in detail and anticipate potential challenges.",
  "The platform also offers continuous monitoring through trend analysis, interactive graphs, and real-time dashboards, providing information for quick decision-making.",
  "All of this is complemented by automated and customizable reports to meet the diverse needs of mining industry stakeholders.",
];

// Reusable scroll-in animation. `i` adds a small stagger delay.
const rise = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.55, delay: i * 0.08 },
});

const gradientHeading =
  "bg-gradient-to-r from-[#B6C2FF] to-white bg-clip-text text-transparent";

const Mining = () => {
  return (
    <main className="bg-[#1A1822]">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-16 pb-8 sm:px-6">
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
          Mines, including open-pit mines and tailings dams, are critical
          components in resource extraction but also pose significant risks. The
          success of mining activities is directly interconnected to the
          continuous and accurate monitoring of its geotechnical, geospatial and
          structural data to prevent failures, avoid downtime and ensure
          compliance with safety and environmental measures. Effective
          monitoring of these data is essential to make quick decisions and
          protect communities, the environment and the mine itself.
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

      {/* Positioning statement */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <motion.h2
          {...rise(0)}
          className={`${gradientHeading} text-4xl font-bold tracking-tight md:text-5xl`}
        >
          Ensure Safety and Operational continuity in Mine sites with Proqio's
          Data Intelligence Platform
        </motion.h2>
      </section>

      {/* Comprehensive monitoring */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <motion.h2
          {...rise(0)}
          className="mb-5 text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          Comprehensive monitoring of mining operations
        </motion.h2>

        <motion.p {...rise(1)} className="text-lg leading-relaxed text-white">
          At Proqio, we help mining operations improve safety and efficiency
          through our advanced data management software. We bring together data
          from a wide range of sources, regardless of vendor, including, but not
          limited to, geotechnical, environmental, geospatial and structural
          monitoring devices. All integrated in real-time on a single platform,
          providing a complete view of conditions in mining operations,
          open-pits and tailings dams.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2">
          {monitoring.map((m, i) => (
            <motion.div key={m.title} {...rise(i % 2)}>
              <h3 className="mb-3 text-2xl font-bold text-white">{m.title}</h3>
              <p className="text-lg leading-relaxed text-white">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advanced visualization */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <motion.h2
          {...rise(0)}
          className={`${gradientHeading} mb-5 text-4xl font-bold tracking-tight md:text-5xl`}
        >
          Advanced Visualization Tailored for Mines, Tailings Dams and Open-pits
        </motion.h2>

        <motion.p {...rise(1)} className="mb-6 text-lg leading-relaxed text-white">
          Proqio offers advanced visualization tools that provide a more
          accurate understanding of the complex geotechnical conditions and
          performance of underground and open-pit mining operations.
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

      {/* Early warning */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <motion.h2
          {...rise(0)}
          className={`${gradientHeading} mb-5 text-4xl font-bold tracking-tight md:text-5xl`}
        >
          Intelligent Monitoring and Early Warning Systems in Mining
        </motion.h2>

        <motion.p {...rise(1)} className="text-lg leading-relaxed text-white">
          Proqio enables continuous monitoring of key risk indicators, such as
          water levels, pressure, deformation, vibration and environmental
          conditions, essential for structural stability in mines and tailings
          dams. This monitoring is reinforced with advanced analytics that
          identify critical trends, facilitating early detection of potential
          incidents. With this information, proactive maintenance strategies are
          optimized and operational risks are minimized to ensure the safety and
          efficiency of the mining operation.
        </motion.p>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <motion.div
          {...rise(0)}
          className="rounded-3xl border border-white/[0.05] bg-[#211F29] p-6 md:p-9"
        >
          <h2 className="mb-7 text-2xl font-bold text-white md:text-3xl">
            Benefits of Using Proqio
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
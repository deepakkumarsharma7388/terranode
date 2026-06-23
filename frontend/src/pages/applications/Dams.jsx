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


const heroImage = "/dam.jpeg"; // <-- replace with your image

const benefits = [
  { icon: Clock, label: "Tailored and Scheduled Report Generation" },
  { icon: Bell, label: "Early Warning Alert System for Data" },
  { icon: FileText, label: "Live Dashboards Delivering Immediate Insights" },
  { icon: ShieldCheck, label: "Adaptability, Oversight, and Protection of Dam Assets" },
  { icon: Share2, label: "Scalable and Configurable Solutions for Dam Settings" },
  { icon: Sparkles, label: "Rapid Analysis and Task Automation Powered by our AI Chatbot" },
  {
    icon: BarChart3,
    label: "Team Collaboration via Graph Comments and Member Tagging",
    wide: true,
  },
];

// Reusable scroll-in animation. `i` adds a small stagger delay.
const rise = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.55, delay: i * 0.08 },
});

const Dams = () => {
  return (
    <main className="bg-[#1A1822] py-16 md:py-20">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.h1
  {...rise(0)}
  className="bg-gradient-to-r from-[#B6C2FF] to-white bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] pb-2"
>
  Dams
</motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 text-lg leading-relaxed text-white md:text-xl"
        >
          Strengthen the safety and efficiency of your dams with TeraStamp's
          actionable insights, driven by data integration across multiple
          technologies, end-to-end AI, and data synthesis. Move through your
          operations with ease, maximize uptime, and stay one step ahead using
          predictive analytics and early warnings that ensure operational
          resilience and reduced risk.
        </motion.p>

        <motion.div
          {...rise(2)}
          className="mt-9 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-[#5a8fc0] to-[#2c5238]"
        >
          <img
            src={heroImage}
            alt="Dam aerial view"
            className="h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </motion.div>
      </section>

      {/* Core Functionalities */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <motion.h2
          {...rise(0)}
          className="mb-7 text-4xl font-bold tracking-tight text-white md:text-5xl"
        >
          Core functionalities
        </motion.h2>

        <motion.h3
          {...rise(0)}
          className="mb-3 text-2xl font-bold text-white"
        >
          Cross-Platform Integration of Varied Data Sources
        </motion.h3>

        <motion.p
          {...rise(1)}
          className="mb-5 text-lg leading-relaxed text-white"
        >
          Integration plays a vital role in delivering a complete picture of a
          dam's condition, enabling smooth consolidation of data from a range of
          platforms such as digital twins of dams, weather information,
          sensor-detected shifts in key parameters, remote sensing data, drone
          imagery, BIM, construction progress, scheduling, GIS layers,
          geological data, and event logs.
        </motion.p>

        <motion.p
          {...rise(2)}
          className="text-lg leading-relaxed text-white"
        >
          TeraStamp brings in advanced remote sensing technologies like InSAR
          and DInSAR to map ground deformation accurately, a key requirement for
          dam safety. It taps into optical, thermal, and multispectral imagery to
          keep watch over dam-specific conditions, and uses surveying tools such
          as UAV and LiDAR to build detailed infrastructure models. With its
          capacity to incorporate instrumentation systems including IoT
          dataloggers, fiber optics, and geotechnical and environmental sensors,
          the platform delivers real-time dam monitoring. On top of that, GIS
          integration supports thorough data analysis, which is essential for
          upholding dam integrity.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2">
          <motion.div {...rise(0)}>
            <h3 className="mb-3 text-2xl font-bold text-white">
              Customizable Data Visualization for your Dam's Needs
            </h3>

            <p className="text-lg leading-relaxed text-white">
              TeraStamp provides a variety of visualization options designed for
              the dam sector, including digital twins of dams, three-dimensional
              geological maps, tables, trend analysis, interactive graphs, and
              dashboards that operate in near real time.
            </p>
          </motion.div>

          <motion.div {...rise(1)}>
            <h3 className="mb-3 text-2xl font-bold text-white">
              Data Analysis, Understanding and Predictive Intelligence
            </h3>

            <p className="text-lg leading-relaxed text-white">
              TeraStamp's advanced system keeps a constant watch on critical
              parameters and picks up on changes, giving stakeholders thorough
              insights, while AI and ML help anticipate future behavior and
              risks.
            </p>
          </motion.div>
        </div>
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





export default Dams;
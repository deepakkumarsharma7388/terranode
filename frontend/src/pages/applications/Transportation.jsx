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

const heroImage = "/road.jpeg"; // Replace with your image

const benefits = [
  {
    icon: Clock,
    label: "Tailored and Scheduled Report Generation",
  },
  {
    icon: Bell,
    label: "Early Warning Alert System for Transportation",
  },
  {
    icon: FileText,
    label: "Live Dashboards Delivering Immediate Insights",
  },
  {
    icon: ShieldCheck,
    label: "Adaptability, Oversight, and Protection of Transportation Assets",
  },
  {
    icon: Share2,
    label: "Scalable and Configurable Solutions for Transportation Settings",
  },
  {
    icon: Sparkles,
    label: "Advanced Analytics and an AI Chatbot for Smarter Decision Making",
  },
  {
    icon: BarChart3,
    label:
      "Team Collaboration via Graph Comments and Member Tagging",
    wide: true,
  },
];

const tags = [
  "ROADS",
  "HIGHWAYS",
  "RAILROADS",
  "METROS",
  "TRANSIT SYSTEMS",
];

const rise = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.55, delay: i * 0.08 },
});

const Transportation = () => {
  return (
    <main className="bg-[#1A1822] py-16 md:py-20">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.h1
          {...rise(0)}
          className="bg-gradient-to-r from-[#B6C2FF] to-white bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl"
        >
          Transportation
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 text-lg leading-relaxed text-white md:text-xl"
        >
          Improve the safety and efficiency of transportation systems with
          TeraStamp's unified solutions. Built for roads, highways, rails,
          metros, and transit systems, TeraStamp brings together data,
          technology, and AI to turn complex information into actionable
          insights. The platform delivers resilience and reduced risk through
          intuitive monitoring, superior visualization, and optimized uptime,
          while drawing on predictive analytics and alert systems purpose-built
          for the dynamic demands of transportation infrastructure.
        </motion.p>

        <motion.div
          {...rise(2)}
          className="mt-9 aspect-[16/9] overflow-hidden rounded-2xl"
        >
          <img
            src={heroImage}
            alt="Transportation Infrastructure"
            className="h-full w-full object-cover"
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
          {...rise(1)}
          className="mb-3 text-2xl font-bold text-white"
        >
          Cross-Platform Integration of Varied Data Sources
        </motion.h3>

        <motion.p
          {...rise(2)}
          className="text-lg leading-relaxed text-white"
        >
          TeraStamp pulls together data from a variety of sources for
          transportation systems, including remote sensing technologies,
          surveying data, maintenance records, LiDAR, UAV surveys, BIM, and
          advanced GIS. It produces detailed digital twins of roads, rails, and
          metros while folding in IoT, fiber optics, geotechnical, and
          environmental sensors for real-time monitoring.
          Transportation-focused incident management, asset information systems,
          and weather forecasting are smoothly connected to provide a complete
          operational picture.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div {...rise(3)}>
            <h3 className="mb-3 text-2xl font-bold text-white">
              Customizable Data Visualization for Transportation Needs
            </h3>

            <p className="text-lg leading-relaxed text-white">
              TeraStamp provides a range of visualization options, including
              digital twins of transportation networks, route planning and
              performance maps, trend analysis, 3D geospatial visualizations,
              interactive dashboards, and near real-time operational monitoring.
              Stakeholders gain full visibility into infrastructure conditions,
              maintenance schedules, traffic patterns, and transportation asset
              performance.
            </p>
          </motion.div>

          <motion.div {...rise(4)}>
            <h3 className="mb-3 text-2xl font-bold text-white">
              Data Analysis, Understanding and Predictive Intelligence
            </h3>

            <p className="text-lg leading-relaxed text-white">
              TeraStamp's advanced system keeps a constant watch on
              transportation assets and critical parameters, while AI and
              machine learning algorithms recognize patterns, flag anomalies,
              and predict future behavior. This enables predictive maintenance,
              optimized operations, less downtime, and stronger safety across
              transportation networks.
            </p>
          </motion.div>
        </div>

        {/* Tags */}
        <motion.div
          {...rise(5)}
          className="mt-10 flex flex-wrap gap-3"
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-[#6366F1]/50 px-4 py-2 text-xs font-semibold tracking-wide text-white"
            >
              {tag}
            </span>
          ))}
        </motion.div>
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

export default Transportation;
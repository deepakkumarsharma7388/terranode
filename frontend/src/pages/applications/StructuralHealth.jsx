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

const heroImage = "/watersav.jpeg"; // Replace with your image

const benefits = [
  {
    icon: Clock,
    label: "Tailored and Scheduled Report Generation",
  },
  {
    icon: Bell,
    label: "Early Warning Alert System for Structural Health",
  },
  {
    icon: FileText,
    label: "Live Dashboards Delivering Immediate Insights",
  },
  {
    icon: ShieldCheck,
    label: "Adaptability, Oversight, and Protection of Structural Assets",
  },
  {
    icon: Share2,
    label: "Scalable and Configurable Solutions for Structural Monitoring Settings",
  },
  {
    icon: Sparkles,
    label: "Rapid Analysis and Task Automation Powered by our AI Chatbot",
  },
  {
    icon: BarChart3,
    label:
      "Team Collaboration via Graph Comments and Member Tagging",
    wide: true,
  },
];

const rise = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.55, delay: i * 0.08 },
});

const gradientHeading =
  "bg-gradient-to-r from-[#B6C2FF] to-white bg-clip-text text-transparent leading-[1.15] pb-2";

const StructuralHealthMonitoring = () => {
  return (
    <main className="overflow-visible bg-[#1A1822] py-16 md:py-20">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.h1
          {...rise(0)}
          className={`${gradientHeading} text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight`}
        >
          Structural Health Monitoring
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 text-lg leading-relaxed text-white md:text-xl"
        >
          TeraStamp's structural health monitoring system pulls together data
          from advanced surveying tools, BIM, sensor inputs, and more to deliver
          actionable insights. It centers on high-rise buildings, deep
          excavations, and city structures to provide essential insights for
          preserving structural integrity and safety.
        </motion.p>

        <motion.div
          {...rise(2)}
          className="mt-9 aspect-[16/9] overflow-hidden rounded-2xl"
        >
          <img
            src={heroImage}
            alt="Structural Health Monitoring"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* Core Functionalities */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <motion.h2
          {...rise(0)}
          className="mb-7 text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-white"
        >
          Core functionalities
        </motion.h2>

        <motion.h3
          {...rise(1)}
          className="mb-3 text-2xl font-bold leading-[1.15] text-white"
        >
          Cross-Platform Integration of Varied Structural Health Data
          Sources
        </motion.h3>

        <motion.p
          {...rise(2)}
          className="text-lg leading-relaxed text-white"
        >
          TeraStamp's structural health monitoring platform brings together
          advanced technologies including digital twins, BIM models,
          geotechnical sensors, environmental sensors, fiber optic systems,
          structural instrumentation, satellite monitoring, UAV surveys, and
          LiDAR scanning. This combined ecosystem allows real-time monitoring,
          analysis, and visualization of critical structural parameters while
          giving a complete understanding of infrastructure performance.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div {...rise(3)}>
            <h3 className="mb-3 text-2xl font-bold leading-[1.15] text-white">
              Customizable Data Visualization for Structural Health Monitoring
              Needs
            </h3>

            <p className="text-lg leading-relaxed text-white">
              TeraStamp provides advanced visualization capabilities including
              digital twins, 3D geospatial maps, BIM-integrated dashboards,
              trend analysis, real-time monitoring views, and interactive
              reports. These tools let engineers and asset managers grasp
              structural behavior, spot anomalies, and reach well-informed
              decisions quickly.
            </p>
          </motion.div>

          <motion.div {...rise(4)}>
            <h3 className="mb-3 text-2xl font-bold leading-[1.15] text-white">
              Data Analysis, Understanding and Predictive Intelligence
            </h3>

            <p className="text-lg leading-relaxed text-white">
              Using AI and machine learning, TeraStamp constantly examines
              structural data to recognize trends, forecast future performance,
              and catch anomalies before they turn critical. The platform's
              predictive intelligence helps lower maintenance costs, strengthen
              safety, optimize asset management strategies, and extend the
              lifecycle of critical infrastructure.
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
          <h2 className="mb-7 text-2xl font-bold leading-[1.15] text-white md:text-3xl">
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

export default StructuralHealthMonitoring;
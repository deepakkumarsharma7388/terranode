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

const heroImage = "/windmi.jpeg"; // Replace with your image

const benefits = [
  {
    icon: Clock,
    label: "Tailored and Scheduled Report Generation",
  },
  {
    icon: Bell,
    label: "Early Warning Alert System for Infrastructure",
  },
  {
    icon: FileText,
    label: "Live Dashboards Delivering Immediate Insights",
  },
  {
    icon: ShieldCheck,
    label: "Adaptability, Oversight, and Protection of Assets",
  },
  {
    icon: Share2,
    label: "Scalable and Configurable Solutions for Energy Infrastructure Settings",
  },
  {
    icon: Sparkles,
    label: "Rapid Analysis and Task Automation Powered by our AI Chatbot",
  },
  {
    icon: BarChart3,
    label: "Team Collaboration via Graph Comments and Member Tagging",
    wide: true,
  },
];

const tags = [
  "POWER PLANTS",
  "SOLAR FARMS",
  "WIND FARMS",
  "NUCLEAR POWER PLANTS",
  "HYDROELECTRIC PLANTS",
  "NATURAL GAS PLANTS",
];

// Helper to highlight last word in orange
const highlightLastWord = (text) => {
  const words = text.split(" ");
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <span style={{ color: colors.accent }}>{last}</span>
    </>
  );
};

// Reusable scroll-in animation
const rise = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.55, delay: i * 0.08 },
});

const EnergyInfrastructure = () => {
  return (
    <main className="bg-white py-16 md:py-20">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.h1
          {...rise(0)}
          className="text-5xl font-extrabold tracking-tight text-black md:text-6xl lg:text-7xl"
        >
          Energy <span style={{ color: colors.accent }}>Infrastructure</span>
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 text-lg leading-relaxed text-[#7C8595] md:text-xl"
        >
          TeraStamp's energy infrastructure system works by bringing together data
          from digital twins, operational logs, and sensor readings across wind
          turbines, nuclear power plants, offshore structures, and the solar
          segment. Inputs from advanced surveying tools and IoT technology enable
          real-time monitoring and 3D models that are vital for the safety of
          energy assets. Among the key parameters being tracked are operational
          efficiency, structural integrity, environmental impact, and weather
          conditions. All of this supports efficient management and predictive
          maintenance strategies tailored to a wide range of energy projects.
        </motion.p>

        <motion.div
          {...rise(2)}
          className="mt-9 aspect-[16/9] overflow-hidden rounded-2xl bg-[#F9FAFB]"
        >
          <img
            src={heroImage}
            alt="Energy Infrastructure"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* Core Functionalities */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <motion.h2
          {...rise(0)}
          className="mb-7 text-4xl font-bold tracking-tight text-black md:text-5xl"
        >
          Core <span style={{ color: colors.accent }}>functionalities</span>
        </motion.h2>

        <motion.h3
          {...rise(1)}
          className="mb-3 text-2xl font-bold text-black"
        >
          Cross-Platform Integration of Varied Energy Infrastructure Data{" "}
          <span style={{ color: colors.accent }}>Sources</span>
        </motion.h3>

        <motion.p
          {...rise(2)}
          className="text-lg leading-relaxed text-[#7C8595]"
        >
          TeraStamp pulls together data from digital twins, maintenance records,
          sensor readings, remote sensing, LiDAR, UAV surveys, GIS platforms,
          BIM models, instrumentation systems, weather forecasting, and asset
          management solutions. By merging information drawn from many sources,
          the platform provides a complete view of operational efficiency,
          structural health, environmental impact, and safety conditions across
          energy infrastructure assets.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div {...rise(3)}>
            <h3 className="mb-3 text-2xl font-bold text-black">
              Customizable Data Representation for the Energy Sector{" "}
              <span style={{ color: colors.accent }}>Needs</span>
            </h3>

            <p className="text-lg leading-relaxed text-[#7C8595]">
              TeraStamp delivers visualization tools such as digital twins of
              energy-related assets, detailed geospatial maps, interactive
              dashboards, trend analysis, and real-time monitoring systems.
              These features let stakeholders form a complete picture of asset
              performance, operational efficiency, and risk management.
            </p>
          </motion.div>

          <motion.div {...rise(4)}>
            <h3 className="mb-3 text-2xl font-bold text-black">
              Data Analysis, Understanding and Predictive{" "}
              <span style={{ color: colors.accent }}>Intelligence</span>
            </h3>

            <p className="text-lg leading-relaxed text-[#7C8595]">
              TeraStamp's platform keeps a constant watch on critical parameters
              throughout energy infrastructure assets to spot trends, flag
              anomalies, and predict future behavior using AI and machine
              learning. This predictive method allows proactive maintenance,
              boosts reliability, cuts downtime, and fine-tunes operational
              performance.
            </p>
          </motion.div>
        </div>

        {/* Infrastructure Types – orange border */}
        <motion.div
          {...rise(5)}
          className="mt-10"
        >
          <h3 className="mb-4 text-xl font-bold text-black">
            Energy Infrastructures{" "}
            <span style={{ color: colors.accent }}>types</span>
          </h3>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border-2 border-[#F26418] px-4 py-2 text-xs font-semibold tracking-wide text-black"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <motion.div
          {...rise(0)}
          className="rounded-3xl border border-[#E2E8F0] bg-white p-6 md:p-9"
        >
          <h2 className="mb-7 text-2xl font-bold text-black md:text-3xl">
            Benefits of Using <span style={{ color: colors.accent }}>TeraStamp</span>
          </h2>

          <div className="grid grid-cols-2 gap-3.5 md:grid-cols-4">
            {benefits.map(({ icon: Icon, label, wide }, i) => (
              <motion.div
                key={label}
                {...rise(i)}
                className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-[#F26418] bg-white px-3 py-7 text-center ${
                  wide ? "col-span-2" : ""
                }`}
              >
                <Icon size={26} className="text-[#F26418]" />
                <span className="text-sm font-semibold leading-snug text-black md:text-base">
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

export default EnergyInfrastructure;
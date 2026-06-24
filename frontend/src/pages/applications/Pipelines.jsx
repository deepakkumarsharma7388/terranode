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

const heroImage = "/pipelin.jpeg"; // Replace with your image

const benefits = [
  {
    icon: Clock,
    label: "Tailored and Scheduled Report Generation",
  },
  {
    icon: Bell,
    label: "Early Warning Alert System for Pipelines",
  },
  {
    icon: FileText,
    label: "Live Dashboards Delivering Immediate Insights",
  },
  {
    icon: ShieldCheck,
    label: "Adaptability, Oversight, and Protection of Pipeline Assets",
  },
  {
    icon: Share2,
    label: "Scalable and Configurable Solutions for Pipeline Settings",
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

const pipelineTypes = [
  "GAS PIPELINES",
  "OIL PIPELINES",
  "WATER PIPELINES",
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

const Pipelines = () => {
  return (
    <main className="bg-white py-16 md:py-20">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.h1
          {...rise(0)}
          className="text-5xl font-extrabold tracking-tight text-[#F26418] md:text-6xl lg:text-7xl"
        >
          Pipelines
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 text-lg leading-relaxed text-[#7C8595] md:text-xl"
        >
          TeraStamp's pipeline monitoring platform adapts its technology for oil,
          gas, and water infrastructures. It brings together data from sensors
          and surveillance systems, concentrating on parameters such as flow
          rates, pressure, pipeline integrity, and leak detection. This system
          provides real-time monitoring and predictive maintenance, which is
          vital to the efficient and safe operation of pipeline networks.
        </motion.p>

        <motion.div
          {...rise(2)}
          className="mt-9 aspect-[16/9] overflow-hidden rounded-2xl bg-[#F9FAFB]"
        >
          <img
            src={heroImage}
            alt="Pipeline Infrastructure"
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
          Cross-Platform Integration of Varied Pipeline Data{" "}
          <span style={{ color: colors.accent }}>Sources</span>
        </motion.h3>

        <motion.p
          {...rise(2)}
          className="text-lg leading-relaxed text-[#7C8595]"
        >
          For pipeline monitoring, TeraStamp incorporates distributed fiber optic
          sensing for advanced leak detection and structural assessment, backed
          by satellite monitoring for geological stability. The system relies on
          remote sensing, UAVs, and laser scanners to build detailed models and
          environmental surveys. The platform also folds in IoT dataloggers and
          sensor networks, delivering continuous monitoring and analysis of
          pipeline infrastructure.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div {...rise(3)}>
            <h3 className="mb-3 text-2xl font-bold text-black">
              Customizable Data Visualization for Pipelines{" "}
              <span style={{ color: colors.accent }}>Needs</span>
            </h3>

            <p className="text-lg leading-relaxed text-[#7C8595]">
              TeraStamp's visualization platform for pipeline monitoring
              provides digital twins, GIS-integrated maps, interactive
              dashboards, three-dimensional geological profiling, and real-time
              trend analysis. These tools give a complete understanding of
              pipeline conditions, helping stakeholders catch issues early and
              fine-tune maintenance strategies.
            </p>
          </motion.div>

          <motion.div {...rise(4)}>
            <h3 className="mb-3 text-2xl font-bold text-black">
              Data Analysis, Understanding and Predictive{" "}
              <span style={{ color: colors.accent }}>Intelligence</span>
            </h3>

            <p className="text-lg leading-relaxed text-[#7C8595]">
              The platform's AI and machine learning capabilities constantly
              assess pipeline performance, flagging anomalies, leak risks, and
              operational inefficiencies. With predictive intelligence,
              stakeholders can tackle issues proactively before they escalate,
              cutting downtime and strengthening overall network reliability.
            </p>
          </motion.div>
        </div>

        {/* Pipeline Types – orange border */}
        <motion.div
          {...rise(5)}
          className="mt-10"
        >
          <h3 className="mb-4 text-xl font-bold text-black">
            Pipeline <span style={{ color: colors.accent }}>Types</span>
          </h3>

          <div className="flex flex-wrap gap-3">
            {pipelineTypes.map((type) => (
              <span
                key={type}
                className="rounded-md border-2 border-[#F26418] px-4 py-2 text-xs font-semibold tracking-wide text-black"
              >
                {type}
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

export default Pipelines;
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
    label:
      "Team Collaboration via Graph Comments and Member Tagging",
    wide: true,
  },
];

const pipelineTypes = [
  "GAS PIPELINES",
  "OIL PIPELINES",
  "WATER PIPELINES",
];

const rise = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.55, delay: i * 0.08 },
});

const gradientHeading =
  "bg-gradient-to-r from-[#B6C2FF] to-white bg-clip-text text-transparent leading-[1.15] pb-2";

const Pipelines = () => {
  return (
    <main className="overflow-visible bg-[#1A1822] py-16 md:py-20">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.h1
          {...rise(0)}
          className={`${gradientHeading} text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight`}
        >
          Pipelines
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 text-lg leading-relaxed text-white md:text-xl"
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
          className="mt-9 aspect-[16/9] overflow-hidden rounded-2xl"
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
          className="mb-7 text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-white"
        >
          Core functionalities
        </motion.h2>

        <motion.h3
          {...rise(1)}
          className="mb-3 text-2xl font-bold leading-[1.15] text-white"
        >
          Cross-Platform Integration of Varied Pipeline Data Sources
        </motion.h3>

        <motion.p
          {...rise(2)}
          className="text-lg leading-relaxed text-white"
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
            <h3 className="mb-3 text-2xl font-bold leading-[1.15] text-white">
              Customizable Data Visualization for Pipelines Needs
            </h3>

            <p className="text-lg leading-relaxed text-white">
              TeraStamp's visualization platform for pipeline monitoring
              provides digital twins, GIS-integrated maps, interactive
              dashboards, three-dimensional geological profiling, and real-time
              trend analysis. These tools give a complete understanding of
              pipeline conditions, helping stakeholders catch issues early and
              fine-tune maintenance strategies.
            </p>
          </motion.div>

          <motion.div {...rise(4)}>
            <h3 className="mb-3 text-2xl font-bold leading-[1.15] text-white">
              Data Analysis, Understanding and Predictive Intelligence
            </h3>

            <p className="text-lg leading-relaxed text-white">
              The platform's AI and machine learning capabilities constantly
              assess pipeline performance, flagging anomalies, leak risks, and
              operational inefficiencies. With predictive intelligence,
              stakeholders can tackle issues proactively before they escalate,
              cutting downtime and strengthening overall network reliability.
            </p>
          </motion.div>
        </div>

        {/* Pipeline Types */}
        <motion.div
          {...rise(5)}
          className="mt-10"
        >
          <h3 className="mb-4 text-xl font-bold leading-[1.15] text-white">
            Pipeline Types
          </h3>

          <div className="flex flex-wrap gap-3">
            {pipelineTypes.map((type) => (
              <span
                key={type}
                className="rounded-md border border-[#6366F1]/50 px-4 py-2 text-xs font-semibold tracking-wide text-white"
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

export default Pipelines;
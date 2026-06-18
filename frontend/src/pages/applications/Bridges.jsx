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

const heroImage = "/bridge.webp"; // <-- replace with your image

const benefits = [
  { icon: Clock, label: "Customizable and Scheduled Reporting" },
  { icon: Bell, label: "Alarm System for Early Warning in Bridges" },
  { icon: FileText, label: "Real-Time Dashboards for Instant Insights" },
  { icon: ShieldCheck, label: "Flexibility, Control, and Security Over Bridge Assets" },
  { icon: Share2, label: "Scalability and Customization for Bridge Environments" },
  { icon: Sparkles, label: "Quick Analysis and Automation of Tasks thanks to our AI Chatbot" },
  {
    icon: BarChart3,
    label: "Collaborative Environment through Comments in Graphs & Member's Tagging",
    wide: true,
  },
];

// Two visualization/analysis cards in the 2-col grid.
const features = [
  {
    title: "Customizable Data Visualization for Bridge Needs",
    text:
      "Proqio's visualization suite for bridge monitoring includes digital twins created via LiDAR or BIM, 3D geological maps, and trend analysis tools. These are complemented by interactive graphs, trend lines, and dashboards specifically designed to meet the diverse needs of stakeholders in bridge infrastructure projects.",
  },
  {
    title: "Data Analysis, Understanding and Predictive Intelligence",
    text:
      "Proqio's platform for bridge monitoring continuously tracks critical parameters, ensuring the safety and longevity of bridges. It supports long-term maintenance and structural integrity through real-time updates. The system anticipates potential issues by leveraging AI and ML, facilitating proactive bridge management and maintenance strategies.",
  },
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

const Bridges = () => {
  return (
    <main className="bg-[#1A1822]">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-16 pb-8 sm:px-6">
        <motion.h1
          {...rise(0)}
          className={`${gradientHeading} text-5xl font-extrabold tracking-tight md:text-6xl`}
        >
          Bridges
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 text-lg leading-relaxed text-white md:text-xl"
        >
          Enhance bridge safety and longevity with Proqio's tailored solutions.
          Integrating data, technology, and AI offers vital insights for
          bridges, from digital twins to advanced monitoring. The system employs
          data from fiber optics, geotechnical, environmental, and seismic
          sensors, surveying tools, and GNSS for comprehensive bridge analysis.
          Benefit from intuitive monitoring, superior visualization, and
          predictive analytics, ensuring structural integrity and proactive
          maintenance tailored specifically to bridge infrastructure needs.
          Proqio's platform ensures seamless data integration, resulting in
          user-friendly, accurate reporting for enhanced bridge management.
        </motion.p>

        <motion.div
          {...rise(2)}
          className="mt-9 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-[#5a7fa8] to-[#293743]"
        >
          <img
            src={heroImage}
            alt="Bridge structure"
            className="h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </motion.div>
      </section>

      {/* Core functionalities */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <motion.h2
          {...rise(0)}
          className={`${gradientHeading} mb-7 text-4xl font-bold tracking-tight md:text-5xl`}
        >
          Core functionalities
        </motion.h2>

        <motion.h3
          {...rise(0)}
          className="mb-3 text-2xl font-bold text-white"
        >
          Cross-Platform Data Integration of Diverse Bridges Data Sources
        </motion.h3>
        <motion.p {...rise(1)} className="mb-5 text-lg leading-relaxed text-white">
          Integration is crucial for providing a comprehensive understanding of
          the bridge's status, ensuring seamless data merging from varied
          platforms like digital twins, maintenance documents, weather
          conditions, key parameter changes from sensors, remote sensing data,
          drone imagery, BIM, seismic data, scheduling, GIS Layers, geological
          data, and event logs.
        </motion.p>
        <motion.p {...rise(2)} className="text-lg leading-relaxed text-white">
          For bridge monitoring, Proqio integrates remote sensing technologies
          like InSAR and DInSAR for deformation mapping, which is crucial for
          structural safety. It harnesses optical, thermal, and multispectral
          imagery, UAV, and LiDAR. GNSS and seismic data are integrated for
          movement and vibration analysis. IoT dataloggers, fiber optics,
          geotechnical, and environmental sensors provide real-time monitoring.
          Scour and corrosion systems and weather stations are integrated for
          comprehensive analysis, which is essential in maintaining bridge
          integrity and safety.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.div key={f.title} {...rise(i)}>
              <h3 className="mb-3 text-2xl font-bold text-white">{f.title}</h3>
              <p className="text-lg leading-relaxed text-white">{f.text}</p>
            </motion.div>
          ))}
        </div>
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

export default Bridges;
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

const heroImage = "/bridge.jpeg"; // <-- replace with your image

const benefits = [
  { icon: Clock, label: "Tailored and Scheduled Report Generation" },
  { icon: Bell, label: "Early Warning Alert System for Bridges" },
  { icon: FileText, label: "Live Dashboards Delivering Immediate Insights" },
  { icon: ShieldCheck, label: "Adaptability, Oversight, and Protection of Bridge Assets" },
  { icon: Share2, label: "Scalable and Configurable Solutions for Bridge Settings" },
  { icon: Sparkles, label: "Rapid Analysis and Task Automation Powered by our AI Chatbot" },
  {
    icon: BarChart3,
    label: "Team Collaboration via Graph Comments and Member Tagging",
    wide: true,
  },
];

// Two visualization/analysis cards in the 2-col grid.
const features = [
  {
    title: "Flexible Data Visualization Built for Bridge Requirements",
    text:
      "TeraStamp's visualization toolkit for bridge monitoring features digital twins built through LiDAR or BIM, three-dimensional geological maps, and tools for trend analysis. These offerings are rounded out with interactive graphs, trend lines, and dashboards purpose-built to address the varied requirements of everyone involved in bridge infrastructure projects.",
  },
  {
    title: "Data Interpretation, Insight, and Predictive Intelligence",
    text:
      "TeraStamp's bridge monitoring platform keeps a constant watch over essential parameters, safeguarding the safety and durability of bridges. By delivering real-time updates, it underpins ongoing maintenance and structural soundness. Drawing on AI and ML, the system predicts emerging problems and enables forward-looking bridge management and maintenance approaches.",
  },
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

// Reusable scroll-in animation.
const rise = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.55, delay: i * 0.08 },
});

const Bridges = () => {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-16 pb-8 sm:px-6">
        <motion.h1
          {...rise(0)}
          className="text-5xl font-extrabold tracking-tight text-[#F26418] md:text-6xl"
        >
          Bridges
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 text-lg leading-relaxed text-[#7C8595] md:text-xl"
        >
          Improve the safety and lifespan of bridges with TeraStamp's customized
          solutions. By bringing together data, technology, and AI, the platform
          delivers essential insights for bridges, ranging from digital twins to
          sophisticated monitoring. To perform thorough bridge analysis, the
          system draws on inputs from fiber optic, geotechnical, environmental,
          and seismic sensors, along with surveying instruments and GNSS. Take
          advantage of straightforward monitoring, exceptional visualization, and
          predictive analytics that protect structural integrity and support
          proactive maintenance shaped specifically around bridge infrastructure
          demands. TeraStamp's platform guarantees smooth data integration,
          producing accurate, easy-to-use reporting for better bridge management.
        </motion.p>

        <motion.div
          {...rise(2)}
          className="mt-9 aspect-[16/9] overflow-hidden rounded-2xl bg-[#F9FAFB]"
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
          className="mb-7 text-4xl font-bold tracking-tight text-black md:text-5xl"
        >
          Core <span style={{ color: colors.accent }}>functionalities</span>
        </motion.h2>

        <motion.h3
          {...rise(0)}
          className="mb-3 text-2xl font-bold text-black"
        >
          Cross-Platform Integration of Varied Bridge Data{" "}
          <span style={{ color: colors.accent }}>Sources</span>
        </motion.h3>
        <motion.p {...rise(1)} className="mb-5 text-lg leading-relaxed text-[#7C8595]">
          Integration plays a vital role in building a complete picture of a
          bridge's condition, enabling smooth consolidation of data from diverse
          sources such as digital twins, maintenance records, weather
          information, sensor-detected shifts in key parameters, remote sensing
          data, drone imagery, BIM, seismic readings, scheduling, GIS layers,
          geological data, and event logs.
        </motion.p>
        <motion.p {...rise(2)} className="text-lg leading-relaxed text-[#7C8595]">
          In the context of bridge monitoring, TeraStamp incorporates remote
          sensing technologies such as InSAR and DInSAR to map deformation, a key
          factor in structural safety. It makes use of optical, thermal, and
          multispectral imagery, along with UAV and LiDAR. GNSS and seismic data
          are combined to analyze movement and vibration. Real-time monitoring is
          delivered through IoT dataloggers, fiber optics, and geotechnical and
          environmental sensors. Scour and corrosion systems together with
          weather stations are brought in for thorough analysis, which is
          indispensable for preserving the integrity and safety of bridges.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.div key={f.title} {...rise(i)}>
              <h3 className="mb-3 text-2xl font-bold text-black">
                {highlightLastWord(f.title)}
              </h3>
              <p className="text-lg leading-relaxed text-[#7C8595]">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
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

export default Bridges;
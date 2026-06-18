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


const heroImage = "/test1.webp"; // <-- replace with your image

const benefits = [
  { icon: Clock, label: "Customizable and Scheduled Reporting" },
  { icon: Bell, label: "Alarm System for Early Warning in Data" },
  { icon: FileText, label: "Real-Time Dashboards for Instant Insights" },
  { icon: ShieldCheck, label: "Flexibility, Control, and Security Over Dams Assets" },
  { icon: Share2, label: "Scalability and Customization for Dam Environments" },
  { icon: Sparkles, label: "Quick Analysis and Automation of Tasks thanks to our AI Chatbot" },
  {
    icon: BarChart3,
    label: "Collaborative Environment through Comments in Graphs & Member's Tagging",
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
    <main className="bg-[#1A1822]">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-16 pb-8 sm:px-6">
        <motion.h1
          {...rise(0)}
          className="bg-gradient-to-r from-[#B6C2FF] to-white bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl"
        >
          Dams
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 text-lg leading-relaxed text-white md:text-xl"
        >
          Empower your dam safety and efficiency with Terranode's actionable
          insights powered by data integration from various technologies,
          comprehensive AI, and data synthesis. Navigate easily, maximize
          uptime, and stay ahead with predictive analytics and early warning for
          assured operational resilience and risk mitigation.
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

      {/* Core functionalities */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
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
          Cross-Platform Data Integration of Diverse Data Sources
        </motion.h3>
        <motion.p {...rise(1)} className="mb-5 text-lg leading-relaxed text-white">
          Integration is crucial for providing a comprehensive understanding of
          the dam's status, ensuring seamless data merging from varied platforms
          like digital twins of dams, weather conditions, key parameter changes
          from sensors, remote sensing data, drone imagery, BIM, construction
          progress, scheduling, GIS Layers, geological data, and event logs.
        </motion.p>
        <motion.p {...rise(2)} className="text-lg leading-relaxed text-white">
          Terranode integrates advanced remote sensing technologies such as
          InSAR and DInSAR for precise ground deformation mapping, which is
          essential for dam safety. It harnesses optical, thermal, and
          multispectral imagery to monitor dam-specific conditions and surveying
          tools like UAV and LiDAR to develop detailed infrastructure models. The
          platform's ability to integrate instrumentation systems, including IoT
          Dataloggers, fiber optics, geotechnical, and environmental sensors,
          ensures real-time dam monitoring. Additionally, GIS integration aids in
          comprehensive data analysis, crucial for maintaining dam integrity. Key
          parameters monitored include water levels, pressure, deformation,
          lateral movement, seepage, settlement, temperature fluctuations, and
          environmental conditions.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2">
          <motion.div {...rise(0)}>
            <h3 className="mb-3 text-2xl font-bold text-white">
              Customizable Data Visualization for your Dam's Needs
            </h3>
            <p className="text-lg leading-relaxed text-white">
              Terranode offers a range of visualization options tailored to the
              dam sector, including digital twins of dams, 3D geological maps,
              tables, trend analysis, interactive graphs, and virtually real-time
              dashboards catering to diverse stakeholder requirements in the dam
              industry.
            </p>
          </motion.div>
          <motion.div {...rise(1)}>
            <h3 className="mb-3 text-2xl font-bold text-white">
              Data Analysis, Understanding and Predictive Intelligence
            </h3>
            <p className="text-lg leading-relaxed text-white">
              Terranode's sophisticated system continuously monitors and detects
              changes in critical parameters, utilizing a variety of data points
              to ensure structural integrity, project efficiency and
              productivity, and effective maintenance across dams. It
              systematically reports and analyzes data, offering stakeholders
              comprehensive insights. The platform's AI and ML help users predict
              and prepare for the future of the dam.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <motion.div
          {...rise(0)}
          className="rounded-3xl border border-white/[0.05] bg-[#211F29] p-6 md:p-9"
        >
          <h2 className="mb-7 text-2xl font-bold text-white md:text-3xl">
            Benefits of Using Terranode
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
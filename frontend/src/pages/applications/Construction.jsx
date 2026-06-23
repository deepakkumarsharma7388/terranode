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

const heroImage = "/builapar.jpeg"; // Replace with your image

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
    label: "Adaptability, Oversight, and Protection of Construction Assets",
  },
  {
    icon: Share2,
    label: "Scalable and Configurable Solutions for Infrastructure Settings",
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

const tags = [
  "AIRPORTS",
  "PORTS",
  "DRYDOCKS",
  "CONSTRUCTION PROJECTS",
  "WATERWAYS",
  "LEVIES",
];

const rise = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.55, delay: i * 0.08 },
});

const Construction = () => {
  return (
    <main className="bg-[#1A1822] py-16 md:py-20">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.h1
          {...rise(0)}
          className="bg-gradient-to-r from-[#B6C2FF] to-white bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl"
        >
          Construction and Civil Infrastructures
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 text-lg leading-relaxed text-white md:text-xl"
        >
          Take construction and civil infrastructure projects to the next level
          with TeraStamp's unified solutions. Built to cover the full
          construction lifecycle, from the pre-construction stage through to
          maintenance, TeraStamp brings together data, technology, and AI with a
          strong emphasis on digital twins and BIM integration. It strengthens
          construction progress tracking, schedule management, and contract
          oversight. Gain the advantages of precise monitoring, advanced
          visualization, and predictive analytics shaped to fit the intricate
          needs of construction projects.
        </motion.p>

        <motion.div
          {...rise(2)}
          className="mt-9 aspect-[16/9] overflow-hidden rounded-2xl"
        >
          <img
            src={heroImage}
            alt="Construction and Civil Infrastructure"
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
          TeraStamp tunes its integration features for civil infrastructure and
          construction projects by uniting digital twins, BIM models, monitoring
          tools, remote sensing technologies, drone surveys, GIS platforms, IoT
          instrumentation systems, weather forecasting, geotechnical monitoring,
          and infrastructure asset management systems. By bringing together and
          handling information across every construction phase, the platform
          provides real-time project visibility and supports well-informed
          decision-making.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div {...rise(3)}>
            <h3 className="mb-3 text-2xl font-bold text-white">
              Customizable Data Representation for Construction and Civil
              Infrastructure Needs
            </h3>

            <p className="text-lg leading-relaxed text-white">
              TeraStamp provides a variety of visualization options designed for
              the construction and civil infrastructure sector, such as digital
              twins of infrastructure assets, BIM integration, three-dimensional
              geological maps, trend analysis, interactive dashboards, and
              project monitoring that is virtually real-time. Stakeholders
              receive a full view of project execution, asset performance, and
              construction progress.
            </p>
          </motion.div>

          <motion.div {...rise(4)}>
            <h3 className="mb-3 text-2xl font-bold text-white">
              Data Analysis, Understanding and Predictive Intelligence
            </h3>

            <p className="text-lg leading-relaxed text-white">
              TeraStamp's sophisticated system constantly tracks and forecasts
              how construction projects evolve and how infrastructure performs.
              Using AI and machine learning, the platform spots trends, flags
              anomalies, and predicts upcoming risks. This predictive strength
              aids well-grounded planning, smarter resource allocation, stronger
              safety, and better project results.
            </p>
          </motion.div>
        </div>

        {/* Industry Tags */}
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

export default Construction;
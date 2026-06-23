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

const heroImage = "/mixe.jpeg"; // Replace with your image

const benefits = [
  {
    icon: Clock,
    label: "Tailored and Scheduled Report Generation",
  },
  {
    icon: Bell,
    label: "Early Warning Alert System for Landslides and Disasters",
  },
  {
    icon: FileText,
    label: "Live Dashboards Delivering Immediate Insights",
  },
  {
    icon: ShieldCheck,
    label: "Adaptability, Oversight, and Protection of Landslide Assets",
  },
  {
    icon: Share2,
    label: "Scalable and Configurable Solutions for Landslide and Disaster Settings",
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

const LandslidesAndDisasterManagement = () => {
  return (
    <main className="overflow-visible bg-[#1A1822] py-16 md:py-20">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.h1
          {...rise(0)}
          className={`${gradientHeading} text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight`}
        >
          Landslides and Disaster Management
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 text-lg leading-relaxed text-white md:text-xl"
        >
          TeraStamp's landslide monitoring and disaster management system brings
          together advanced technologies for real-time analysis of slope
          stability. It draws on data from sensors, remote sensing, and
          geotechnical tools to track shifts in ground conditions, helping with
          early landslide detection and disaster response.
        </motion.p>

        <motion.div
          {...rise(2)}
          className="mt-9 aspect-[16/9] overflow-hidden rounded-2xl"
        >
          <img
            src={heroImage}
            alt="Landslides and Disaster Management"
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
          Cross-Platform Integration of Varied Data Sources
        </motion.h3>

        <motion.p
          {...rise(2)}
          className="text-lg leading-relaxed text-white"
        >
          When it comes to landslide monitoring and disaster management,
          TeraStamp incorporates advanced remote sensing technologies such as
          InSAR, together with optical and thermal imagery to observe land cover
          changes and gauge soil moisture levels. It draws on geotechnical and
          hydrogeological imagery for environmental impact assessment, a key part
          of disaster and landslide risk analysis.
        </motion.p>

        <motion.p
          {...rise(3)}
          className="mt-5 text-lg leading-relaxed text-white"
        >
          The platform additionally brings in outputs from surveying tools such
          as UAVs and LiDAR scanners for detailed terrain analysis, improving
          slope stability monitoring. Paired with geotechnical and environmental
          systems, these integrations supply real-time data from IoT dataloggers
          along with GIS, allowing a thorough understanding of possible
          landslide risks and backing proactive disaster management strategies.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div {...rise(4)}>
            <h3 className="mb-3 text-2xl font-bold leading-[1.15] text-white">
              Customizable Data Visualization for Landslides and Disaster Needs
            </h3>

            <p className="text-lg leading-relaxed text-white">
              TeraStamp provides visualization tools such as digital twins of
              affected areas, three-dimensional geological maps, and interactive
              dashboards. These tools enable in-depth analysis of slope
              conditions and landslide risks. Customizable reports cover safety
              protocols and risk mitigation parameters, supporting proactive
              management and mitigation strategies.
            </p>
          </motion.div>

          <motion.div {...rise(5)}>
            <h3 className="mb-3 text-2xl font-bold leading-[1.15] text-white">
              Data Analysis, Understanding and Predictive Intelligence
            </h3>

            <p className="text-lg leading-relaxed text-white">
              TeraStamp's system for landslide and slope stability monitoring
              delivers continuous tracking of key indicators to keep operations
              safe. It blends real-time maintenance and structural assessments,
              applying AI and ML to catch potential risks early. The platform's
              early warning system is essential for proactive landslide
              management and mitigation strategies.
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

export default LandslidesAndDisasterManagement;
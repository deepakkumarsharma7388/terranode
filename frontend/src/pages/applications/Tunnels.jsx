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

const heroImage = "/tunnel.jpeg"; // <-- replace with your image

const benefits = [
  { icon: Clock, label: "Easy-to-Use Interface Backed by 24/7 Support" },
  { icon: Bell, label: "Early Warning Alert System for Tunnels" },
  { icon: FileText, label: "Customizable Scheduled Reports & Live Dashboards" },
  { icon: ShieldCheck, label: "Adaptability, Oversight, and Protection of Tunnel Assets" },
  { icon: Share2, label: "Scalable and Configurable Solutions for Tunnel Settings" },
  { icon: Sparkles, label: "Rapid Analysis and Task Automation Powered by our AI Chatbot" },
  {
    icon: BarChart3,
    label:
      "Unified Platform for Cause-Effect Analysis and a Collaboration Space Across Members and Teams",
    wide: true,
  },
];

// "Total Control..." body paragraphs.
const totalControl = [
  "For conventional tunnels, TeraStamp streamlines the tunnel excavation workflow — from capturing geotechnical data, including face mapping and rock classification, through to the necessary ground support, tunnel convergence measurement, safety conditions, and analysis of progress and ground behavior data.",
  "By integrating TBM performance data in real time — covering advance speed, weight scale metrics, and face pressure — together with ground behavior analysis, we deliver dynamic visualizations of TBM progress. These real-time graphs show how the TBM's movement interacts with surface instrumentation, presenting settlement profiles.",
  "On the map, the tunnel's zone of influence is projected, alongside the related assets and the instruments tied to each asset.",
  "In essence, TeraStamp helps you handle everything from TBM performance to quality records, supporting accuracy and operational efficiency.",
  "For both conventional and TBM tunnels, we combine a broad set of geotechnical instruments such as inclinometers, ground sensors, and UAV data, giving you a full picture of environmental and ground conditions alongside tunnel performance insights.",
];

// "Benefits ... Tunnelling" body paragraphs.
const benefitsIntro = [
  "TeraStamp's platform provides an all-in-one approach to tunnel project management, combining real-time monitoring, alarm systems, interactive graphical and map visualizations, intelligent reporting, digital twins, and AI chatbot support. We bring together TBM, ground information, BIM, tunnel access, tunnel plant, mucking-out operations, CCTV, quality records, and incident response management to give a complete view of tunnel operations.",
  "On top of that, our automated and customized reporting makes it easy to generate detailed reports on production, safety, quality, and operational performance, ensuring your team always has up-to-date information for efficient management and well-informed decisions.",
  "In short, our platform centralizes all critical information in one place, cutting down data fragmentation and sharpening decision-making while optimizing project timelines and saving costs.",
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

const Tunnels = () => {
  return (
    <main className="bg-[#1A1822]">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-16 pb-8 sm:px-6">
        <motion.h1
          {...rise(0)}
          className={`${gradientHeading} text-5xl font-extrabold tracking-tight md:text-6xl`}
        >
          Tunnels
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 text-lg leading-relaxed text-white md:text-xl"
        >
          Tunnel projects, whether for transportation, water, or energy
          infrastructure, bring complex technical challenges and potentially
          serious risks. Safety and operational success rely on continuous,
          accurate monitoring of geotechnical, structural, environmental, and
          plant data, which is essential to prevent failures, maintain
          stability, and optimize decision-making at every stage of the project.
          At TeraStamp, we provide advanced data management solutions for Tunnel
          Boring Machine and conventional tunneling projects that ensure
          optimized real-time data handling and stronger project control.
        </motion.p>

        <motion.div
          {...rise(2)}
          className="mt-9 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-[#5a6470] to-[#24262b]"
        >
          <img
            src={heroImage}
            alt="Tunnel interior with worker"
            className="h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </motion.div>
      </section>

      {/* Positioning statement */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <motion.h2
          {...rise(0)}
          className={`${gradientHeading} mb-5 text-4xl font-bold tracking-tight md:text-5xl`}
        >
          Comprehensive Data Management Software for conventional and TBM Tunnels
        </motion.h2>

        <motion.p {...rise(1)} className="text-lg leading-relaxed text-white">
          At TeraStamp, we unite information from many sources, no matter the
          vendor, including geotechnical, environmental, geospatial, plant,
          engineering, and structural monitoring devices. All data is
          centralized in real time on a single platform, improving collaboration
          between teams, removing data fragmentation, and enhancing
          decision-making by offering a complete view of tunnel infrastructure
          and ground behavior.
        </motion.p>
      </section>

      {/* Total control */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <motion.h3
          {...rise(0)}
          className="mb-5 text-3xl font-bold tracking-tight text-white md:text-4xl"
        >
          Total Control for Conventional and TBM Tunnel Projects with Real-Time
          Data
        </motion.h3>

        <div className="space-y-5">
          {totalControl.map((p, i) => (
            <motion.p
              key={i}
              {...rise(i)}
              className="text-lg leading-relaxed text-white"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Benefits intro */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <motion.h2
          {...rise(0)}
          className={`${gradientHeading} mb-5 text-4xl font-bold tracking-tight md:text-5xl`}
        >
          Benefits of Using TeraStamp for TBM and Conventional Tunnelling
        </motion.h2>

        <div className="space-y-5">
          {benefitsIntro.map((p, i) => (
            <motion.p
              key={i}
              {...rise(i)}
              className="text-lg leading-relaxed text-white"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Benefits box */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
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

export default Tunnels;
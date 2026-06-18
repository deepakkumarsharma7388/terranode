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

const heroImage = "/tunnel.webp"; // <-- replace with your image

const benefits = [
  { icon: Clock, label: "Intuitive Interface with 24/7 Support" },
  { icon: Bell, label: "Alarm System for Early Warning in Tunnels" },
  { icon: FileText, label: "Customizable Scheduled Reporting & Real-Time Dashboards" },
  { icon: ShieldCheck, label: "Flexibility, Control, and Security Over Tunnel Assets" },
  { icon: Share2, label: "Scalability and Customization for Tunnel Environments" },
  { icon: Sparkles, label: "Quick Analysis and Automation of Tasks thanks to our AI Chatbot" },
  {
    icon: BarChart3,
    label:
      "All-in-One Platform for Cause-Effect Analysis and Collaboration Environment between Members and Teams",
    wide: true,
  },
];

// "Total Control..." body paragraphs.
const totalControl = [
  "For conventional tunnels, Proqio simplifies the tunnel excavation process — from recording geotechnical data, including face mapping and rock classification, to the required ground support, tunnel convergence measurement, safety conditions, and progress and ground behavior data analysis.",
  "With real-time integration of TBM performance data — including advance speed, weight scale metrics and face pressure — along with ground behavior analysis, we provide dynamic visualizations of TBM progress. These real-time graphs illustrate how the TBM's movement interacts with surface instrumentation, displaying settlement profiles.",
  "On the map, the tunnel's zone of influence is projected, along with associated assets and the instruments linked to each asset.",
  "In short, Proqio helps you manage everything from TBM performance to quality records, helping to ensure accuracy and operational efficiency.",
  "For both conventional and TBM tunnels, we bring together a wide range of geotechnical instruments such as inclinometers, ground sensors and UAV data, giving you a complete picture of environmental and ground conditions together with the tunnel performance insights.",
];

// "Benefits ... Tunnelling" body paragraphs.
const benefitsIntro = [
  "Proqio's platform offers an all-in-one approach to tunnel project management, combining real-time monitoring, alarm systems, interactive graphical and map visualizations, intelligent reporting, digital twins and AI chatbot support. We integrate TBM, ground information, BIM, tunnel access, tunnel plant, mucking-out operations, CCTV, quality records, and incident response management to provide a complete view of tunnel operations.",
  "In addition, our automated and customized reporting facilitates the generation of detailed reports on production, safety, quality and operational performance, ensuring that your team always has up-to-date information for efficient management and informed decisions.",
  "To sum up, our platform centralizes all critical information in one place, minimizing data fragmentation and improving decision-making while optimizing project timelines and saving costs.",
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
          Tunnel projects, whether for transportation, water or energy
          infrastructure, present complex technical challenges and potentially
          significant risks. Safety and operational success depend on continuous
          and accurate monitoring of geotechnical, structural, environmental,
          and plant data, essential to prevent failures, ensure stability, and
          optimize decision-making at every stage of the project. At Proqio, we
          offer advanced data management solutions for Tunnel Boring Machine and
          conventional tunneling projects that ensure optimized real-time data
          management and better project control.
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
          At Proqio, we integrate information from multiple sources, regardless
          of vendor, including geotechnical, environmental, geospatial, plant,
          engineering and structural monitoring devices. All data is centralized
          in real-time on a single platform, enhancing collaboration between
          teams, eliminating data fragmentation and improving decision-making by
          providing a complete view of tunnel infrastructure and ground
          behavior.
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
          Benefits of Using Proqio for TBM and Conventional Tunnelling
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

export default Tunnels;
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";
import {
  Radio,
  BadgeDollarSign,
  Sparkles,
  CheckCircle2,
  Box,
  Copy,
  Eye,
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
  inputBg: "#F3F4F6",
};

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

const DigitalTwinSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-0 sm:px-6 md:pt-20 md:pb-0 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-black md:text-5xl">
            TeraStamp's Digital <span style={{ color: colors.accent }}>Twin</span>
          </h2>

          <p className="mt-4 text-base text-[#7C8595] md:text-xl">
            A living virtual model of your infrastructure, reaching from
            the surface down to the subsurface
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-12 md:mt-16">
          <motion.h3
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold text-black md:text-4xl lg:text-5xl"
          >
            Understand, Anticipate, <span style={{ color: colors.accent }}>Decide</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-5 max-w-5xl text-base leading-relaxed text-[#7C8595] md:text-lg"
          >
            Looking after a critical asset takes far more than knowing its
            physical and structural characteristics. You need to grasp how
            it behaves, how it changes, why, and what could come next.
            Without depending on constant field visits or piecing together
            isolated data, TeraStamp's Digital Twin turns your site into a
            living virtual model that combines models, terrain, subsoil,
            and environment.
          </motion.p>
        </div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 overflow-hidden rounded-[24px] border border-[#E2E8F0] shadow-lg"
        >
          <div className="h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src="/herovideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 mb-0"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#F26418] px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#E05A10]"
          >
            Claim a Digital Twin Demo
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const steps = [
  {
    title: "Data always in context",
    content: [
      "Sensors are placed directly on the model",
      "Measurements are read in relation to the asset",
      "Values are reviewed alongside their historical evolution",
    ],
    description:
      "This lets you understand what is happening, where, since when, and how it is changing, turning data into actionable insight.",
    image: "/watersav.jpeg",
  },
  {
    title: "Designed for daily operations",
    content: [
      "A shared digital model for every stakeholder",
      "Reachable from anywhere",
      "Clear, prioritized information",
    ],
    description:
      "It's not about viewing more data, but about reaching better decisions.",
    image: "/test2.jpg",
  },
  {
    title: "From observing to anticipating",
    content: [
      "Recognizes normal behavior patterns",
      "Picks up early deviations",
      "Produces behavior-based warnings",
      "Ranks actions according to actual risk",
    ],
    description:
      "The digital model turns into a predictive tool that enables proactive decisions.",
    image: "/test3.avif",
  },
];

const DigitalTwinExplained = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const fillHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.min(
      steps.length - 1,
      Math.floor(v * steps.length)
    );
    setActive(index);
  });

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-0 sm:px-6 md:pt-20 md:pb-0 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black md:text-5xl">
            What is TeraStamp's Digital <span style={{ color: colors.accent }}>Twin?</span>
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-[#7C8595] md:text-lg">
            <p>
              TeraStamp's Digital Twin is a dynamic digital representation of
              infrastructure such as dams, tunnels, bridges, mines,
              buildings, or projects still under construction.
            </p>

            <p>
              This digital model recreates your infrastructure in real
              time with a complete view that takes in surface assets,
              terrain, surroundings, GIS information, and BIM models.
            </p>

            <p>
              Unlike static models, it keeps evolving, mirroring the
              real behavior of the asset.
            </p>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[420px_1fr]">
          {/* Left Side */}
          <div className="hidden lg:block">
            <div className="sticky top-28 flex gap-5">
              {/* Progress Bar */}
              <div className="flex flex-col items-center">
                <span className="text-base text-black">01</span>

                <div className="relative my-4 h-[320px] w-[3px] rounded-full bg-[#E2E8F0]">
                  <motion.div
                    style={{
                      height: fillHeight,
                    }}
                    className="absolute left-0 top-0 w-full rounded-full bg-[#F26418]"
                  />
                </div>

                <span className="text-base text-black">
                  0{steps.length}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-[360px] flex-1 overflow-hidden rounded-3xl border border-[#E2E8F0]">
                {steps.map((step, index) => (
                  <motion.img
                    key={index}
                    src={step.image}
                    alt=""
                    animate={{
                      opacity: active === index ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex min-h-[32vh] lg:min-h-[36vh] items-center py-4"
              >
                <motion.div
                  className="space-y-4"
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  {/* Mobile Image */}
                  <div className="mb-8 overflow-hidden rounded-2xl border border-[#E2E8F0] lg:hidden">
                    <img
                      src={step.image}
                      alt=""
                      className="h-56 w-full object-cover"
                    />
                  </div>

                  {/* Number */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F26418] text-2xl font-bold text-white">
                    {index + 1}
                  </div>

                  {/* Heading */}
                  <h3 className="mt-4 text-2xl font-bold text-black md:text-4xl">
                    {highlightLastWord(step.title)}
                  </h3>

                  {/* Bullet Points */}
                  <ul className="mt-4 space-y-2 text-base text-black md:text-lg">
                    {step.content.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-[#F26418]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Description */}
                  <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#7C8595] md:text-lg">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const benefits = [
  {
    icon: Radio,
    text: "Real-time visibility into asset performance drawn from geotechnical and structural sensors, LiDAR, InSAR, drones, GIS, and more",
  },
  {
    icon: BadgeDollarSign,
    text: "Lower operational costs through streamlined inspections and maintenance",
  },
  {
    icon: Sparkles,
    text: "Early risk detection based on behavior, applying machine learning to flag anomalies and anticipate risks",
  },
  {
    icon: CheckCircle2,
    text: "Faster, more dependable decisions powered by predictive intelligence that helps rank actions",
  },
  {
    icon: Box,
    text: "Complete integration and understanding of surface, subsoil, assets, and environment within a single living digital model",
  },
  {
    icon: Copy,
    text: "Scalable, flexible digital models that grow over time",
  },
];

const KeyBenefits = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-0 sm:px-6 md:pt-20 md:pb-0 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex rounded-lg bg-[#F26418]/10 px-4 py-2 border border-[#F26418]"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F26418]">
            Key Benefits
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-3xl font-bold text-black md:text-5xl"
        >
          What makes it <span style={{ color: colors.accent }}>unique</span>
        </motion.h2>

        {/* Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                className="
                  group
                  rounded-3xl
                  border-2
                  border-[#F26418]
                  bg-white
                  p-5
                  transition-all
                  duration-300
                  hover:bg-[#F9FAFB]
                  hover:shadow-lg
                "
              >
                <div className="flex items-start gap-4">
                  <Icon
                    size={24}
                    className="mt-1 flex-shrink-0 text-[#F26418]"
                  />

                  <p className="text-base font-semibold leading-relaxed text-black md:text-lg">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Wide Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
          }}
          className="
            mt-5
            rounded-3xl
            border-2
            border-[#F26418]
            bg-white
            p-5
            md:p-6
          "
        >
          <div className="flex items-center gap-4">
            <Eye
              size={26}
              className="text-[#F26418]"
            />

            <h3 className="text-lg font-semibold text-black md:text-xl">
              High-end visual realism Powered by Unreal Engine 5
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const DemoFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    privacy: false,
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black md:text-5xl">
            See the TeraStamp Digital Twin in <span style={{ color: colors.accent }}>action</span>
          </h2>

          <p className="mt-5 text-base italic text-[#7C8595] md:text-xl">
            Watch how your project can come to life in a real-time 3D model
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-4xl space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="
              h-14
              w-full
              rounded-xl
              border-2
              border-[#E2E8F0]
              bg-[#F9FAFB]
              px-5
              text-black
              placeholder:text-[#7C8595]
              outline-none
              focus:border-[#F26418]
              focus:ring-2
              focus:ring-[#F26418]/20
            "
          />

          <input
            type="email"
            name="email"
            placeholder="name@terastamp.com"
            value={formData.email}
            onChange={handleChange}
            className="
              h-14
              w-full
              rounded-xl
              border-2
              border-[#E2E8F0]
              bg-[#F9FAFB]
              px-5
              text-black
              placeholder:text-[#7C8595]
              outline-none
              focus:border-[#F26418]
              focus:ring-2
              focus:ring-[#F26418]/20
            "
          />

          <input
            type="text"
            name="company"
            placeholder="Your company"
            value={formData.company}
            onChange={handleChange}
            className="
              h-14
              w-full
              rounded-xl
              border-2
              border-[#E2E8F0]
              bg-[#F9FAFB]
              px-5
              text-black
              placeholder:text-[#7C8595]
              outline-none
              focus:border-[#F26418]
              focus:ring-2
              focus:ring-[#F26418]/20
            "
          />

          {/* Checkbox 1 */}
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              className="mt-1 h-5 w-5 rounded border-[#D1D9E6] text-[#F26418] focus:ring-[#F26418]"
            />

            <span className="text-sm leading-relaxed text-black md:text-base">
              I understand and agree that my data will be used according to the{" "}
              <a href="#" className="text-[#F26418] hover:underline">
                privacy policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#F26418] hover:underline">
                GDPR regulations
              </a>.
            </span>
          </label>

          {/* Checkbox 2 */}
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 h-5 w-5 rounded border-[#D1D9E6] text-[#F26418] focus:ring-[#F26418]"
            />

            <span className="text-sm leading-relaxed text-black md:text-base">
              I give my consent to TeraStamp to send me electronic commercial
              communication about their services.
            </span>
          </label>

          {/* Button */}
          <button
            type="submit"
            className="
              mt-4
              h-14
              w-full
              rounded-xl
              bg-[#F26418]
              text-base
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-[1.01]
              hover:bg-[#E05A10]
            "
          >
            Request a Demo
          </button>
        </form>
      </div>
    </section>
  );
};

// ===== UPDATED CTA SECTION – MATCHES YOUR SCREENSHOT DESIGN =====
const DigitalTwinCTA = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[32px] bg-[#E05A10] px-8 py-12 md:px-16 md:py-16 lg:px-20 lg:py-20"
        >
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold tracking-tight text-[#ffffff] sm:text-5xl md:text-6xl">
              Discover the <br className="sm:hidden" />
              <span className="relative">
                <span className="relative z-10">"New" New</span>
              </span>{' '}
              with <br className="hidden sm:inline" />
              TeraStamp
            </h2>

            <p className="mt-4 text-lg font-medium text-[#00000]/80 sm:text-xl md:text-2xl">
              Start building faster today
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#111216] transition-all duration-200 hover:bg-gray-50 hover:scale-105 sm:text-base"
            >
              Claim demo now
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const DigitalTwin = () => {
  return (
    <div>
      <DigitalTwinSection />
      <DigitalTwinExplained />
      <KeyBenefits />
      <DigitalTwinCTA />
      <DemoFormSection />
    </div>
  );
};

export default DigitalTwin;
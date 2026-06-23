import React from 'react'
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








const DigitalTwinSection = () => {
  return (
    <section className="bg-[#1F1F2B]">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-0 sm:px-6 md:pt-20 md:pb-0 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            TeraStamp's Digital Twin
          </h2>

          <p className="mt-4 text-base text-gray-300 md:text-xl">
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
            className="text-2xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            Understand, Anticipate, Decide
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-5 max-w-5xl text-base leading-relaxed text-gray-300 md:text-lg"
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
          className="mt-10 overflow-hidden rounded-[24px] border border-white/10 shadow-2xl"
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
            className="group inline-flex items-center gap-3 rounded-xl bg-[#6C72FF] px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#7B80FF]"
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
    <section
      ref={sectionRef}
      className="bg-[#1F1F2B]"
    >
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-0 sm:px-6 md:pt-20 md:pb-0 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            What is TeraStamp's Digital Twin?
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
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
                <span className="text-base text-white">01</span>

                <div className="relative my-4 h-[320px] w-[3px] rounded-full bg-white/10">
                  <motion.div
                    style={{
                      height: fillHeight,
                    }}
                    className="absolute left-0 top-0 w-full rounded-full bg-[#7C83FF]"
                  />
                </div>

                <span className="text-base text-white">
                  0{steps.length}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-[360px] flex-1 overflow-hidden rounded-3xl">
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
                  <div className="mb-8 overflow-hidden rounded-2xl lg:hidden">
                    <img
                      src={step.image}
                      alt=""
                      className="h-56 w-full object-cover"
                    />
                  </div>

                  {/* Number */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl font-bold text-[#6366F1]">
                    {index + 1}
                  </div>

                  {/* Heading */}
                  <h3 className="mt-4 text-2xl font-bold text-white md:text-4xl">
                    {step.title}
                  </h3>

                  {/* Bullet Points */}
                  <ul className="mt-4 space-y-2 text-base text-white md:text-lg">
                    {step.content.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3"
                      >
                        <span>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Description */}
                  <p className="mt-4 max-w-4xl text-base leading-relaxed text-gray-300 md:text-lg">
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
    <section className="bg-[#1F1F2B]">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-0 sm:px-6 md:pt-20 md:pb-0 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex rounded-lg bg-[#A5B4FC] px-4 py-2"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4F46E5]">
            Key Benefits
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-3xl font-bold text-white md:text-5xl"
        >
          What makes it unique
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
                  border
                  border-[#A5B4FC]
                  bg-transparent
                  p-5
                  transition-all
                  duration-300
                  hover:bg-[#2A2940]
                  hover:shadow-[0_0_25px_rgba(165,180,252,0.15)]
                "
              >
                <div className="flex items-start gap-4">
                  <Icon
                    size={24}
                    className="mt-1 flex-shrink-0 text-[#A5B4FC]"
                  />

                  <p className="text-base font-semibold leading-relaxed text-white md:text-lg">
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
            border
            border-[#A5B4FC]
            p-5
            md:p-6
          "
        >
          <div className="flex items-center gap-4">
            <Eye
              size={26}
              className="text-[#A5B4FC]"
            />

            <h3 className="text-lg font-semibold text-white md:text-xl">
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
    <section className="bg-[#1F1F2B]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            See the TeraStamp Digital Twin in action
          </h2>

          <p className="mt-5 text-base italic text-white/90 md:text-xl">
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
              border-none
              bg-[#666577]
              px-5
              text-white
              placeholder:text-gray-300
              outline-none
              focus:ring-2
              focus:ring-[#6366F1]
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
              border-none
              bg-[#666577]
              px-5
              text-white
              placeholder:text-gray-300
              outline-none
              focus:ring-2
              focus:ring-[#6366F1]
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
              border-none
              bg-[#666577]
              px-5
              text-white
              placeholder:text-gray-300
              outline-none
              focus:ring-2
              focus:ring-[#6366F1]
            "
          />

          {/* Checkbox 1 */}
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              className="mt-1 h-5 w-5 rounded"
            />

            <span className="text-sm leading-relaxed text-white md:text-base">
              I understand and agree that my data will be used according to the{" "}
              <a
                href="#"
                className="text-[#8B95FF] hover:underline"
              >
                privacy policy
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-[#8B95FF] hover:underline"
              >
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
              className="mt-1 h-5 w-5 rounded"
            />

            <span className="text-sm leading-relaxed text-white md:text-base">
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
              bg-[#6366F1]
              text-base
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-[1.01]
              hover:bg-[#5658E8]
            "
          >
            Request a Demo
          </button>
        </form>
      </div>
    </section>
  );
};







const DigitalTwinCTA = () => {
  return (
    <section className="bg-[#1F1F2B]">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-0 sm:px-6 md:pt-20 md:pb-0 lg:px-8">
        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Protect what matters
          </h2>

          <p className="mt-6 max-w-6xl text-base leading-relaxed text-gray-300 md:text-lg">
            Critical infrastructure calls for continuous, context-rich
            understanding and the ability to anticipate. TeraStamp's
            Digital Twin is a living virtual model that evolves with
            reality, helping you{" "}
            <span className="font-semibold text-white">
              anticipate risks, make confident decisions,
              and protect people and assets.
            </span>
          </p>

          <p className="mt-6 text-lg font-semibold text-gray-200 md:text-2xl">
            Want to see your site as a living digital
            model? Claim a demo today!
          </p>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-10
            overflow-hidden
            rounded-[28px]
            bg-[#C7CCFF]
            p-6
            md:p-8
            lg:p-10
          "
        >
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left */}
            <div>
              {/* Badge */}
              <div className="inline-flex rounded-xl bg-white px-4 py-2 shadow-sm">
                <span className="text-sm font-medium text-black">
                  New
                </span>
              </div>

              {/* Heading */}
              <h3 className="mt-6 text-3xl font-bold leading-tight text-black md:text-5xl">
                Your project, alive.
              </h3>

              <h4 className="mt-2 text-2xl text-black md:text-4xl">
                TeraStamp Digital Twin
              </h4>

              {/* Description */}
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-black md:text-2xl">
                A living virtual model of your infrastructure,
                from the surface to the subsurface.
              </p>

              {/* Button */}
              <Link
                to="/contact"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-4
                  rounded-xl
                  bg-[#5146E5]
                  px-6
                  py-4
                  text-base
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Claim a Demo

                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="/pipelin.jpeg"
                alt="Digital Twin"
                className="
                  w-full
                  rounded-2xl
                  object-cover
                  shadow-2xl
                "
              />
            </motion.div>
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
       
       <DigitalTwinExplained/>
        <KeyBenefits/>
        <DigitalTwinCTA/>
        <DemoFormSection/>
    </div>
  )
}

export default DigitalTwin
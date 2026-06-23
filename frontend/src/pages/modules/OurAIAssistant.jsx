import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {  AnimatePresence } from "framer-motion";
import {
  
  Clock3,
  Eye,
  BadgeCheck,
  Database,
  Copy,
} from "lucide-react";





const AdaSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.currentTime = 0;

      const playVideo = async () => {
        try {
          await video.play();
        } catch (err) {
          console.log("Autoplay blocked:", err);
        }
      };

      playVideo();
    }
  }, []);

  return (
    <section className="bg-[#1F1F2B] pt-0 pb-8 md:pb-12">
      <div className="w-full">
        <div
          className="
            bg-[#AEB6FF]
            rounded-b-[30px]
            md:rounded-b-[40px]
            px-5
            py-8
            sm:px-8
            md:px-12
            md:py-12
            lg:px-20
            lg:py-14
            xl:px-28
          "
        >
          {/* Header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            {/* Text */}
            <div className="max-w-6xl">
              <h2
                className="
                  text-3xl
                  font-bold
                  leading-[1.1]
                  text-black

                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                  xl:text-7xl
                "
              >
                TeraStamp&apos;s Ada:
                <br />
                The first AI assistant created for infrastructure
                monitoring
              </h2>

              <p
                className="
                  mt-4
                  text-base
                  text-black/70

                  sm:text-lg
                  md:text-xl
                  lg:text-2xl
                "
              >
                Ada hands you the answers. You make the decisions.
              </p>
            </div>

            {/* Icon - Hidden on Mobile */}
            <div
              className="
                hidden
                lg:flex

                h-36
                w-36
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#6366F1]
              "
            >
              <Sparkles
                className="text-white"
                size={70}
                strokeWidth={2.5}
              />
            </div>
          </div>

          {/* Video */}
          <div className="mt-8 overflow-hidden rounded-[20px] shadow-2xl">
            <div
              className="
                relative
                w-full

                h-[220px]
                sm:h-[300px]
                md:h-[380px]
                lg:h-[450px]
                xl:h-[520px]
              "
            >
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls
              >
                <source
                  src="/herovideo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-[#6366F1]
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300

                hover:scale-105
                hover:bg-[#5558E8]

                md:px-6
                md:py-4
                md:text-base
              "
            >
              Request a demo of Ada

              <ArrowRight
                size={20}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};



const adaSteps = [
  {
    id: "01",
    title: "Instant Insights",
    description:
      "Ada converts your project data into clear answers in an instant. Ask anything in plain language and receive contextual insights spanning your entire asset.",
    image: "/windmi.jpeg",
  },
  {
    id: "02",
    title: "Built for Teams in Action",
    description:
      "Made for teams running real infrastructure, Ada lets every stakeholder work from the same intelligence layer.",
    image: "/test2.jpg",
  },
  {
    id: "03",
    title: "From Data to Proactive Decisions",
    description:
      "Ada does more than answer questions. It helps you foresee problems and supports proactive decision-making.",
    image: "/test3.avif",
  },
];

const AdaExplained = () => {
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
    const current = Math.min(
      adaSteps.length - 1,
      Math.floor(v * adaSteps.length)
    );

    setActive(current);
  });

  return (
    <section
      ref={sectionRef}
      className="bg-[#1F1F2B] py-10 md:py-14"
    >
      <div className="mx-auto max-w-7xl px-5">
        {/* Intro Section */}
        <div className="max-w-6xl">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            From Data to Understanding
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-300 md:text-xl">
            <p>
              In infrastructure and construction projects,
              getting hold of data is no longer the hard part,
              making sense of it is.
            </p>

            <p>
              Monitoring systems produce huge volumes of
              data that need constant interpretation.
              Figuring out what is happening, why it is
              happening, and what to do next can be
              time-consuming and complex.
            </p>

            <p>
              Ada turns complex data into clear,
              immediate answers.
            </p>
          </div>
        </div>

        {/* What is Ada */}
        <div className="mt-14 max-w-6xl">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            What is Ada?
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-300 md:text-xl">
            <p>
              TeraStamp's Ada is an AI assistant built for
              infrastructure monitoring.
            </p>

            <p>
              She links into your environment, reaching
              real-time data, historical records, alerts,
              and all the project information you need.
            </p>

            <p>
              Rather than working through dashboards or reports,
              Ada lets you simply ask questions.
            </p>

            <p>
              Powered by leading LLMs and built on trusted
              infrastructure.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[420px_1fr]">
          {/* Left Sticky Section */}
          <div className="hidden lg:block">
            <div className="sticky top-28 flex gap-5">
              {/* Progress Bar */}
              <div className="flex flex-col items-center">
                <span className="text-lg text-white">
                  01
                </span>

                <div className="relative my-4 h-[420px] w-[4px] rounded-full bg-white/10">
                  <motion.div
                    style={{
                      height: fillHeight,
                    }}
                    className="absolute left-0 top-0 w-full rounded-full bg-[#8B95FF]"
                  />
                </div>

                <span className="text-lg text-white">
                  03
                </span>
              </div>

              {/* Image */}
              <div className="relative h-[420px] w-[360px] overflow-hidden rounded-3xl">
                {adaSteps.map((step, index) => (
                  <motion.img
                    key={index}
                    src={step.image}
                    alt={step.title}
                    animate={{
                      opacity:
                        active === index ? 1 : 0,
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

          {/* Right Content */}
          {/* Right Content */}
<div>
  {adaSteps.map((step, index) => (
    <div
      key={index}
      className="
        flex
        min-h-[32vh]
        md:min-h-[35vh]
        items-center
        py-4
        sm:py-6
      "
    >
      <div className="w-full">
        {/* Mobile Image */}
        <div className="mb-8 sm:mb-10 lg:hidden">
          <img
            src={step.image}
            alt={step.title}
            className="
              h-[240px]
              w-full
              rounded-3xl
              object-cover

              sm:h-[320px]
            "
          />
        </div>

        {/* Number */}
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl font-bold text-[#6366F1]">
          {index + 1}
        </div>

        {/* Title */}
        <h3 className="mt-5 text-2xl font-bold text-white md:text-4xl">
          {step.title}
        </h3>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
          {step.description}
        </p>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};


const insights = [
  {
    title: "Correlation of Results",
    description:
      "Spot relationships between variables to understand cause and effect across your project.",
    image: "/road.jpeg",
  },
  {
    title: "Validation & Alerts",
    description:
      "Verify results with confidence scores, and catch false positives before they turn into distractions.",
    image: "/test2.jpg",
  },
  {
    title: "Forecasting",
    description:
      "Anticipate how key parameters will change, based on real-time data and predictive modeling.",
    image: "/test3.avif",
  },
  {
    title: "Automation",
    description:
      "Produce summaries or alert tables automatically, Ada handles the work for you.",
    image: "/pipelin.jpeg",
  },
  {
    title: "Asset Health",
    description:
      "Get a clear read on the condition and performance of your structures, instantly.",
    image: "/watersav.jpeg",
  },
];

const AdaInsights = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#1F1F2B] py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CHANGED: items-center for vertical alignment */}
        <div className="grid items-center gap-6 lg:grid-cols-[420px_1fr] xl:grid-cols-[460px_1fr]">
          
          {/* Desktop Image */}
          {/* CHANGED: flex + items-center */}
          <div className="hidden lg:flex lg:sticky lg:top-24 lg:h-[460px] lg:items-center">
            <div className="w-full overflow-hidden rounded-[24px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={insights[active].image}
                  alt={insights[active].title}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -20,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    h-[420px]
                    xl:h-[460px]
                    w-full
                    object-cover
                  "
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Right Content */}
          <div>
            {/* Heading */}
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-[38px]">
              5 types of insights from Ada
            </h2>

            {/* Description */}
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-300 md:text-base">
              Here are real examples of how Ada answers your most
              critical project questions.
            </p>

            {/* Mobile Image */}
            <div className="mt-5 lg:hidden">
              <div className="overflow-hidden rounded-[24px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active}
                    src={insights[active].image}
                    alt={insights[active].title}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -20,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="
                      h-[220px]
                      w-full
                      object-cover
                      rounded-[24px]

                      sm:h-[280px]
                      md:h-[340px]
                    "
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Cards */}
            <div className="mt-5 space-y-2">
              {insights.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`
                    w-full
                    rounded-[18px]
                    p-3
                    md:p-4
                    text-left
                    transition-all
                    duration-300

                    ${
                      active === index
                        ? "bg-[#34313F] shadow-lg"
                        : "bg-transparent hover:bg-[#2B2836]"
                    }
                  `}
                >
                  <h3 className="text-base font-bold leading-snug text-white md:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-gray-300 md:text-base">
                    {item.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



const benefits = [
  {
    icon: Sparkles,
    text: "Instant access to project knowledge through natural language interaction",
  },
  {
    icon: Clock3,
    text: "Less time spent on manual analysis and data interpretation",
  },
  {
    icon: Eye,
    text: "Early risk detection through contextual understanding and pattern recognition",
  },
  {
    icon: BadgeCheck,
    text: "Faster, more dependable decisions based on clear and structured answers",
  },
  {
    icon: Database,
    text: "Full integration with real-time data, historical records, models, and documentation",
  },
  {
    icon: Copy,
    text: "A scalable intelligence layer that grows with your project",
  },
];

const AdaBenefits = () => {
  return (
    <section className="bg-[#1F1F2B]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex rounded-xl bg-[#B8C0FF] px-4 py-2"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-[#6366F1]">
            Key Benefits
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
        >
          What makes Ada unique
        </motion.h2>

        {/* Cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-4 rounded-[20px] border border-[#9AA7FF] bg-transparent px-4 py-4 transition-all duration-300 hover:bg-[#2A2940] hover:shadow-[0_0_20px_rgba(154,167,255,0.12)]"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <Icon
                    size={26}
                    className="text-[#9AA7FF]"
                    strokeWidth={2.2}
                  />
                </div>

                {/* Text */}
                <p className="text-sm font-semibold leading-snug text-white md:text-base lg:text-lg">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


const AdaCTASection = () => {
  return (
    <section className="bg-[#1F1F2B]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl"
        >
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Protect what matters
          </h2>

          <div className="mt-4 space-y-4 text-base leading-relaxed text-gray-300 md:text-lg">
            <p>
              Critical infrastructure calls for fast, reliable
              understanding and the ability to act with confidence.
            </p>

            <p>
              TeraStamp's Ada reshapes the way you work with your
              data, helping you make better decisions, faster, and
              with full context.
            </p>

            <p className="font-semibold text-white">
              Ready to interact with your project like never before?
              Request a demo!
            </p>
          </div>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 overflow-hidden rounded-[24px] bg-[#C4CCF7]"
        >
          <div className="grid items-center lg:grid-cols-[1fr_48%]">
            {/* Left Side */}
            <div className="px-5 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10">
              {/* Icon */}
              <div className="h-20 w-20 overflow-hidden rounded-full md:h-24 md:w-24 lg:h-32 lg:w-32">
                <img
                  src="/test2.jpg"
                  alt="Ada"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Heading */}
              <h3 className="mt-5 text-3xl font-bold leading-none text-black md:text-4xl lg:text-5xl">
                Meet Ada
              </h3>

              <h4 className="mt-2 text-2xl font-medium leading-none text-black md:text-3xl lg:text-4xl">
                your AI assistant
              </h4>

              {/* Description */}
              <p className="mt-5 max-w-lg text-base leading-relaxed text-black md:text-lg">
                Ada links into your project data and delivers
                real insights, with context and speed.
              </p>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-3 rounded-xl bg-[#4F46E5] px-5 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                Claim your demo

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Right Side Image */}
            <div className="h-full">
              <img
                src="/pipelin.jpeg"
                alt="Ada Assistant"
                className="h-full w-full object-cover min-h-[250px] md:min-h-[350px] lg:min-h-[420px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};




const AdaDemoForm = () => {
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
    <section className="bg-[#242434] py-[50px]">
      <div className="mx-auto max-w-4xl px-5">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            See TeraStamp&apos;s Ada in action
          </h2>

          <p className="mt-5 text-lg italic text-white/90 md:text-2xl">
            Watch how it supports your decision-making.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-4"
        >
          {/* Name */}
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

          {/* Email */}
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

          {/* Company */}
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

          {/* Privacy Checkbox */}
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              className="
                mt-1
                h-5
                w-5
                rounded
                accent-[#6366F1]
              "
            />

            <span className="text-sm leading-relaxed text-white md:text-lg">
              I understand and agree that my data will be used according
              to the{" "}
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

          {/* Consent Checkbox */}
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="
                mt-1
                h-5
                w-5
                rounded
                accent-[#6366F1]
              "
            />

            <span className="text-sm leading-relaxed text-white md:text-lg">
              I give my consent to TeraStamp to send me electronic
              commercial communication about their services.
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              mt-4
              h-14
              w-full
              rounded-xl
              bg-[#6366F1]
              text-lg
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









const OurAIAssistant = () => {
  return (
    <div>
      <AdaSection/>
      <AdaExplained/>
      <AdaInsights/>
       <AdaBenefits/>
       <AdaCTASection/>
       <AdaDemoForm/>
    </div>
  )
}

export default OurAIAssistant
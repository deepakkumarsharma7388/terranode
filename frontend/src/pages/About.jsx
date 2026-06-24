import React from 'react'


import { useScroll, useTransform } from "framer-motion";

import  { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { ArrowRight } from "lucide-react";



/**
 * About Us hero — "Improving the Civil Engineering World".
 * Full-width orange block with rounded bottom corners on the light page.
 * Note: copy uses "TeraStamp".
 */



const Starburst = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
    {Array.from({ length: 24 }).map((_, i) => {
      const a = (i * 15 * Math.PI) / 180;
      const r1 = 22;
      const r2 = i % 2 ? 40 : 46;
      return <line key={i} x1={50 + r1 * Math.cos(a)} y1={50 + r1 * Math.sin(a)} x2={50 + r2 * Math.cos(a)} y2={50 + r2 * Math.sin(a)} />;
    })}
  </svg>
);

const Asterisk = ({ className = "" }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className={className}>
    {Array.from({ length: 6 }).map((_, i) => {
      const a = (i * 30 * Math.PI) / 180;
      return <line key={i} x1={24 - 18 * Math.cos(a)} y1={24 - 18 * Math.sin(a)} x2={24 + 18 * Math.cos(a)} y2={24 + 18 * Math.sin(a)} />;
    })}
  </svg>
);

const AboutHero = () => {
  return (
    <section className="bg-white">
      <div
        className="
          relative
          overflow-hidden
          rounded-b-[40px]
          bg-[#F26418]
          px-4
          py-20
          md:px-8
          md:py-28
          lg:px-[170px]
        "
      >
        {/* Decorations */}
        <div className="pointer-events-none absolute inset-0 text-white/30">
          <Starburst className="absolute right-[16%] top-8 h-16 w-16 md:h-20 md:w-20" />

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            className="absolute right-[7%] top-[34%] hidden h-7 w-7 md:block"
          >
            <path d="M12 1 C13 8 16 11 23 12 C16 13 13 16 12 23 C11 16 8 13 1 12 C8 11 11 8 12 1 Z" />
          </svg>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="absolute right-[4%] top-[38%] hidden h-4 w-4 md:block"
          >
            <circle cx="12" cy="12" r="9" />
          </svg>

          <svg
            viewBox="0 0 120 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            className="absolute bottom-16 right-[14%] hidden h-6 w-32 md:block"
          >
            <path d="M2 12 Q12 2 22 12 T42 12 T62 12 T82 12 T102 12 T118 12" />
          </svg>

          <Asterisk className="absolute right-2 top-[58%] h-10 w-10 md:h-12 md:w-12" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl lg:ml-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-extrabold tracking-tight text-white"
            style={{
              fontFamily: 'Inter, "Inter Placeholder", sans-serif',
              fontSize: "clamp(38px, 6vw, 64px)",
              lineHeight: 1.02,
              letterSpacing: "-2px",
            }}
          >
            Improving the Civil Engineering World
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl"
          >
            Backed by decades of experience in civil engineering and
            infrastructure monitoring, TeraStamp is reshaping how data
            intelligence strengthens safety, efficiency, and sustainability
            across modern infrastructure projects.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};











const OurStorySection = () => {
  return (
    <section className="overflow-hidden bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex rounded-xl bg-[#F26418] px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-white sm:text-sm">
                Our Story
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#32353A] sm:text-4xl md:text-5xl">
              Shaping Tomorrow's
              <br />
              <span className="text-[#F26418]">Infrastructure</span>
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-relaxed text-[#5C636E] sm:text-base md:text-lg">
              <p>
                Built around a vision to transform infrastructure
                intelligence, TeraStamp blends engineering expertise,
                geospatial analytics, and real-time monitoring to help
                organizations make smarter decisions.
              </p>

              <p>
                Our platform equips teams with actionable insights,
                advanced visualization, and smooth data integration,
                making infrastructure projects safer, more sustainable,
                and more efficient.
              </p>

              <p>
                We are more than a technology provider—we are a trusted
                partner helping engineers, governments, and enterprises
                unlock the full potential of their infrastructure data.
              </p>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 flex items-center justify-center lg:mt-0"
          >
            <div className="relative flex w-full flex-col items-center">
              {/* Top Label */}
              <div className="mb-6 flex flex-col items-center">
                <div className="h-8 w-20 border-x-4 border-t-4 border-[#F26418]/40 sm:h-10 sm:w-28 md:h-12 md:w-32" />

                <p className="mt-2 text-sm text-[#5C636E] sm:text-base">
                  Intelligence
                </p>
              </div>

              {/* Main Text */}
              <motion.h1
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="
                  text-center
                  font-bold
                  tracking-tight
                  text-[#32353A]
                  leading-none
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[110px]
                "
              >
                terastamp
              </motion.h1>

              {/* Bottom Labels */}
              <div className="mt-6 flex w-full justify-between gap-4 sm:gap-8">
                {/* Engineering */}
                <div className="flex flex-1 flex-col items-center">
                  <div className="h-8 w-full max-w-[140px] border-b-4 border-l-4 border-[#F26418]/40" />

                  <p className="mt-2 text-center text-xs text-[#5C636E] sm:text-sm md:text-base">
                    Engineering
                  </p>
                </div>

                {/* Technology */}
                <div className="flex flex-1 flex-col items-center">
                  <div className="h-8 w-full max-w-[140px] border-b-4 border-r-4 border-[#F26418]/40" />

                  <p className="mt-2 text-center text-xs text-[#5C636E] sm:text-sm md:text-base">
                    Technology
                  </p>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10 rounded-full bg-[#F26418]/15 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const DifferenceSection = () => {
  const [active, setActive] = useState(0);

  const features = [
    {
      title: "Simplicity",
      description:
        "Intuitive design, total control – our user-friendly interface and experience bring efficiency together with simplicity.",
      image:
        "/test1.webp",
    },
    {
      title: "Flexibility",
      description:
        "Tailored reporting, limitless visualization, customized dashboards, and multiple data integrations through our adaptable platform.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Versatility",
      description:
        "From start to finish – smoothly connects applications, modules, and technologies for complete coverage across the project lifecycle.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#26282C]/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-4xl font-semibold text-white md:text-6xl">
            What's <span className="text-[#F26418]">Different?</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Left Side */}
          <div className="order-2 flex flex-col gap-8 lg:order-1">
            {features.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                className="cursor-pointer"
              >
                <motion.h3
                  animate={{
                    x: active === index ? 10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`text-4xl md:text-6xl font-bold transition-all duration-300 ${
                    active === index
                      ? "text-[#F26418]"
                      : "text-[#F26418]/50 hover:text-[#F26418]"
                  }`}
                >
                  {item.title}
                </motion.h3>

                <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side Image */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  x: -30,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
              >
                <img
                  src={features[active].image}
                  alt={features[active].title}
                  className="h-[220px] w-full object-cover sm:h-[300px] md:h-[380px]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Glow */}
            <div className="absolute -z-10 rounded-3xl bg-[#F26418]/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};






const StatCard = ({ value, suffix, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="text-center">
      <p className="mb-2 text-sm md:text-lg text-[#7C8595]">
        {label}
      </p>

      <h2 className="text-4xl md:text-6xl font-bold text-[#32353A]">
        {inView && (
          <CountUp
            start={0}
            end={value}
            duration={2}
            suffix={suffix}
          />
        )}
      </h2>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-[#F5F6F7] py-[15px]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <StatCard
            value={2}
            suffix="+"
            label="Years of experience"
          />

          <StatCard
            value={2}
            suffix="K+"
            label="Projects"
          />

          <StatCard
            value={500}
            suffix="+"
            label="Clients"
          />
        </div>
      </div>
    </section>
  );
};




const TestimonialCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            whileInView={{ opacity: 0.15, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute right-0 top-10 hidden md:block"
          >
            <span className="text-[180px] font-bold text-[#F26418]">
              ”
            </span>
          </motion.div>

          <h2 className="text-2xl font-semibold leading-tight text-[#32353A] md:text-4xl lg:text-5xl">
            We rely on <span className="text-[#F26418]">TeraStamp</span> to manage the geological mapping
            parameters, convergences, and displacement trends of the
            tunnels. It gives us unmatched control over the construction
            project.
          </h2>

          <p className="mt-6 text-lg text-[#7C8595] md:text-2xl">
            Pablo Corrales - Tunnel Engineer Leader at Neom Lot 2-3
          </p>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <motion.div
            whileHover={{
              y: -6,
              boxShadow:
                "0 25px 50px rgba(242,100,24,0.25)",
            }}
            transition={{ duration: 0.3 }}
            className="
              rounded-[32px]
              bg-[#F26418]
              px-6
              py-12
              md:px-12
              md:py-16
              text-center
            "
          >
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="
                text-4xl
                font-bold
                text-white
                md:text-6xl
              "
            >
              Join our team
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-lg
                text-white/90
                md:text-2xl
              "
            >
              Interested in applying for a position?
              Check our careers page for open roles
              and apply.
            </motion.p>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-white
                px-6
                py-3
                text-lg
                font-medium
                text-[#F26418]
                shadow-lg
              "
            >
              View open positions
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};






const About = () => {
  return (
    <div>
     < AboutHero/>
     <OurStorySection/>
     <DifferenceSection/>
     <StatsSection/>
     <TestimonialCTASection/>
    
    
   
    </div>
  )
}

export default About
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Rocket,
  Heart,
  Coffee,
  GraduationCap,
  Globe,
  CheckCircle,
  Mail,
  Send,
} from "lucide-react";

/* ---------- Color Palette ---------- */
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

/* ------------------------------------------------------------------ */
/*  Reusable scroll-in animation                                      */
/* ------------------------------------------------------------------ */
const rise = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.55, delay: i * 0.08 },
});

const highlightLastWord = (text) => {
  const words = text.split(" ");
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <span style={{ color: colors.accent }}>{last}</span>
    </>
  );
};

const SectionTitle = ({ children }) => {
  return (
    <motion.h2
      {...rise(0)}
      className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl"
    >
      {typeof children === "string" ? highlightLastWord(children) : children}
    </motion.h2>
  );
};

/* ------------------------------------------------------------------ */
/*  CTA Banner (reused)                                               */
/* ------------------------------------------------------------------ */
const CtaBanner = () => (
  <motion.div
    {...rise(0)}
    className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[32px] bg-[#F26418] px-8 pt-8 pb-8 md:flex-row md:px-14 md:pt-14 md:pb-14"
  >
    <div className="z-10 max-w-md text-white">
      <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
        Ready to make an impact?
      </h2>
      <p className="mt-5 text-lg font-medium opacity-90">
        Join us and help shape the future of construction technology.
      </p>
      <a
        href="mailto:careers@terastamp.com?subject=Job%20Inquiry"
        className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#F26418] shadow-sm transition-all duration-200 hover:bg-gray-50"
      >
        Send your application
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>

    <div className="relative h-[260px] w-full self-end overflow-hidden rounded-2xl border border-white/20 shadow-2xl sm:h-[340px] md:w-[55%]">
      <img
        src="/la-purple-line-section2.jpg"
        alt="TeraStamp team"
        className="h-full w-full object-cover"
        onError={(e) => (e.currentTarget.style.opacity = "0")}
      />
      <div className="absolute inset-x-0 top-0 flex h-11 items-center justify-between border-b border-white/10 bg-black/30 px-4 text-xs text-white backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded bg-white/20 px-3 py-1 text-white/80">
            Join Us
          </span>
          <span className="rounded bg-white px-3 py-1 font-medium text-[#F26418]">
            We're hiring!
          </span>
        </div>
      </div>
      <div className="absolute left-5 top-16 z-20 max-w-[210px] rounded-xl border border-[#F26418]/30 bg-white/95 p-4 text-xs text-black shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-2 mb-2">
          <Users className="h-4 w-4 text-[#F26418]" />
          <span className="font-semibold text-black">25+ Team Members</span>
        </div>
        <p className="text-[#7C8595]">Growing fast – join the journey!</p>
      </div>
    </div>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Main Join Us Component                                            */
/* ------------------------------------------------------------------ */
const JoinUs = () => {
  const benefits = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Impactful Work",
      desc: "Shape the future of infrastructure with innovative solutions.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Great Team",
      desc: "Work with passionate, talented people from diverse backgrounds.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Remote-First",
      desc: "Flexible work arrangements – we believe in trust and autonomy.",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Learning Budget",
      desc: "Access to courses, conferences, and resources to grow your skills.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Health & Wellness",
      desc: "Comprehensive health insurance and wellness programs.",
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Perks",
      desc: "Competitive salary, equity options, and remote office stipend.",
    },
  ];

  const values = [
    "Innovation first",
    "Customer obsession",
    "Teamwork & transparency",
    "Diversity & inclusion",
    "Continuous improvement",
  ];

  return (
    <main className="bg-white">
      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 md:pt-20">
        <motion.h1
          {...rise(0)}
          className="text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl md:text-6xl"
        >
          Join the <span style={{ color: colors.accent }}>team</span> that's
          <br />
          building the future of construction.
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 max-w-3xl text-base leading-relaxed text-[#7C8595] md:text-lg"
        >
          We're on a mission to digitise the construction industry. If you're
          passionate about technology, data, and making a real impact, we want
          to meet you.
        </motion.p>

        <motion.div {...rise(2)} className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:careers@terastamp.com?subject=I%20want%20to%20join%20TeraStamp"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F26418] px-6 py-3.5 font-semibold text-white shadow-sm transition-all hover:bg-[#D9550F]"
          >
            Send your application
            <Send className="h-4 w-4" />
          </a>
          <a
            href="mailto:careers@terastamp.com"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#F26418] px-6 py-3.5 font-semibold text-[#F26418] transition-colors hover:bg-[#F26418]/10"
          >
            Contact HR
          </a>
        </motion.div>
      </section>

      {/* ===== Values / Culture – orange border ===== */}
      <section className="mx-auto mt-20 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Our Values</SectionTitle>
        <motion.div
          {...rise(1)}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-2xl border-2 border-[#F26418] bg-white px-5 py-4 shadow-sm"
            >
              <CheckCircle className="h-5 w-5 text-[#F26418] flex-shrink-0" />
              <span className="font-medium text-black">{value}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ===== Benefits – orange border ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Why work with us</SectionTitle>
        <motion.div
          {...rise(1)}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-6 border-2 border-[#F26418] transition-all hover:shadow-md"
            >
              <div className="rounded-full bg-[#F26418]/10 p-3 w-fit text-[#F26418]">
                {benefit.icon}
              </div>
              <h3 className="mt-4 font-semibold text-black">{benefit.title}</h3>
              <p className="mt-2 text-sm text-[#7C8595]">{benefit.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ===== How to Join – orange border ===== */}
      <section className="mx-auto mt-16 max-w-4xl px-4 sm:px-6">
        <SectionTitle>How to join</SectionTitle>
        <motion.div
          {...rise(1)}
          className="mt-8 rounded-2xl border-2 border-[#F26418] bg-white p-8 text-center md:p-12"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F26418]/10 text-[#F26418]">
            <Mail className="h-10 w-10" />
          </div>
          <h3 className="mt-6 text-2xl font-bold text-black">
            Send us a message
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-[#7C8595]">
            We're always excited to hear from talented people. Drop us an email
            with your CV and a brief note about what excites you about TeraStamp.
          </p>
          <a
            href="mailto:careers@terastamp.com?subject=I%20want%20to%20join%20TeraStamp"
            className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-[#F26418] px-8 py-4 font-semibold text-white transition-all hover:bg-[#D9550F] hover:shadow-lg"
          >
            Send application
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-sm text-[#7C8595]">
            Or directly at{" "}
            <a
              href="mailto:careers@terastamp.com"
              className="font-medium text-[#F26418] hover:underline"
            >
              careers@terastamp.com
            </a>
          </p>
        </motion.div>
      </section>

      {/* ===== CTA ===== */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 pb-20">
        <CtaBanner />
      </section>
    </main>
  );
};

export default JoinUs;
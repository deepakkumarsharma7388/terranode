import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  CheckCircle,
  Bell,
  FileText,
  Users,
  Zap,
  TrendingUp,
  Send,
} from "lucide-react";
import { useState } from "react";

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

const Hl = ({ children }) => (
  <span className="font-semibold text-[#F26418]">{children}</span>
);

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
        Ready to get insights?
      </h2>
      <p className="mt-5 text-lg font-medium opacity-90">
        Subscribe to our newsletter and never miss an update.
      </p>
      <a
        href="#subscribe"
        className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#F26418] shadow-sm transition-all duration-200 hover:bg-gray-50"
      >
        Subscribe now
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>

    <div className="relative h-[260px] w-full self-end overflow-hidden rounded-2xl border border-white/20 shadow-2xl sm:h-[340px] md:w-[55%]">
      <img
        src="/test1.webp"
        alt="Newsletter"
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
            Newsletter
          </span>
          <span className="rounded bg-white px-3 py-1 font-medium text-[#F26418]">
            Subscribe
          </span>
        </div>
      </div>
      <div className="absolute left-5 top-16 z-20 max-w-[210px] rounded-xl border border-[#F26418]/30 bg-white/95 p-4 text-xs text-black shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-2 mb-2">
          <Mail className="h-4 w-4 text-[#F26418]" />
          <span className="font-semibold text-black">Weekly Digest</span>
        </div>
        <p className="text-[#7C8595]">Latest construction tech news</p>
      </div>
    </div>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Main Newsletter Component                                         */
/* ------------------------------------------------------------------ */
const NewsletterPage = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Here you would send the email to your backend or mailchimp
    }
  };

  const benefits = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Industry insights",
      desc: "Get the latest trends in construction technology and digital monitoring.",
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Product updates",
      desc: "Be the first to know about new TeraStamp features and improvements.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community stories",
      desc: "Learn how other teams are using TeraStamp to transform their projects.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Best practices",
      desc: "Tips and guides to get the most out of TeraStamp and digital monitoring.",
    },
  ];

  const sampleTopics = [
    "Digital Monitoring in Metro Construction",
    "Simplified Tunnel Monitoring with TeraStamp",
    "Data Intelligence Revolution in Construction",
    "How to Reduce Rework with Real‑time Data",
    "5 Tips for Better Site Reporting",
  ];

  return (
    <main className="bg-white">
      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 md:pt-20">
        <motion.h1
          {...rise(0)}
          className="text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl md:text-6xl"
        >
          Stay ahead with the <span style={{ color: colors.accent }}>TeraStamp</span>
          <br /> newsletter.
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 max-w-3xl text-base leading-relaxed text-[#7C8595] md:text-lg"
        >
          Subscribe to receive monthly insights, product updates, and success
          stories from the world of digital construction monitoring.
        </motion.p>

        {/* Subscription form */}
        <motion.div
          {...rise(2)}
          className="mt-8 max-w-2xl"
          id="subscribe"
        >
          {subscribed ? (
            <div className="rounded-2xl border-2 border-[#F26418] bg-white p-6 text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-[#F26418]" />
              <h3 className="mt-4 text-2xl font-bold text-black">You're in! 🎉</h3>
              <p className="mt-2 text-[#7C8595]">
                Thank you for subscribing to the TeraStamp newsletter. We'll be
                in touch with the latest updates.
              </p>
              <button
                onClick={() => setSubscribed(false)}
                className="mt-4 inline-flex items-center gap-2 rounded-xl border-2 border-[#F26418] px-5 py-2 font-medium text-[#F26418] hover:bg-[#F26418]/10"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 rounded-xl border-2 border-[#E2E8F0] bg-white px-5 py-4 text-black placeholder:text-[#7C8595] focus:border-[#F26418] focus:outline-none focus:ring-2 focus:ring-[#F26418]/20"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F26418] px-8 py-4 font-semibold text-white transition-all hover:bg-[#D9550F] hover:shadow-lg"
              >
                Subscribe
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
          <p className="mt-3 text-sm text-[#7C8595]">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </section>

      {/* ===== Benefits – orange border ===== */}
      <section className="mx-auto mt-20 max-w-5xl px-4 sm:px-6">
        <SectionTitle>What you'll get</SectionTitle>
        <motion.div
          {...rise(1)}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2"
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

      {/* ===== Sample content – orange border ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Recent topics we've covered</SectionTitle>
        <motion.div
          {...rise(1)}
          className="mt-8 rounded-2xl border-2 border-[#F26418] bg-white p-6 md:p-8"
        >
          <ul className="space-y-3">
            {sampleTopics.map((topic, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 border-b border-[#E2E8F0] pb-3 last:border-0 last:pb-0"
              >
                <CheckCircle className="h-5 w-5 text-[#F26418] flex-shrink-0" />
                <span className="text-black">{topic}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[#7C8595]">
            Our newsletter is curated for construction professionals who want to
            stay informed and make smarter decisions.
          </p>
        </motion.div>
      </section>

      {/* ===== Testimonial / Social proof ===== */}
      <section className="mx-auto mt-16 max-w-4xl px-4 sm:px-6">
        <SectionTitle>What our subscribers say</SectionTitle>
        <motion.div
          {...rise(1)}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <div className="rounded-2xl border-2 border-[#F26418] bg-white p-6">
            <div className="flex items-center gap-1 text-[#F26418]">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="mt-3 text-[#7C8595]">
              "The TeraStamp newsletter is the best source of construction tech
              insights I've found. Always useful and never spammy."
            </p>
            <p className="mt-4 font-medium text-black">— Sarah J., Project Engineer</p>
          </div>
          <div className="rounded-2xl border-2 border-[#F26418] bg-white p-6">
            <div className="flex items-center gap-1 text-[#F26418]">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="mt-3 text-[#7C8595]">
              "I look forward to every issue. The case studies and product
              updates have helped us implement better monitoring practices."
            </p>
            <p className="mt-4 font-medium text-black">— Mike R., Construction Manager</p>
          </div>
        </motion.div>
      </section>

      {/* ===== CTA ===== */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 pb-20">
        <CtaBanner />
      </section>
    </main>
  );
};

export default NewsletterPage;
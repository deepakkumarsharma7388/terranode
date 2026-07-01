import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  HelpCircle,
  FileText,
  Video,
  Mail,
  Phone,
  MessageCircle,
  BookOpen,
  Settings,
  Users,
  Shield,
  ChevronDown,
  ChevronUp,
  ExternalLink,
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
        Still have questions?
      </h2>
      <p className="mt-5 text-lg font-medium opacity-90">
        Our team is ready to help you get the most out of TeraStamp.
      </p>
      <Link
        to="/contact"
        className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#F26418] shadow-sm transition-all duration-200 hover:bg-gray-50"
      >
        Contact Support
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>

    <div className="relative h-[260px] w-full self-end overflow-hidden rounded-2xl border border-white/20 shadow-2xl sm:h-[340px] md:w-[55%]">
      <img
        src="/la-purple-line-3-tunnels.jpg"
        alt="TeraStamp dashboard"
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
            Help Center
          </span>
          <span className="rounded bg-white px-3 py-1 font-medium text-[#F26418]">
            Ask a Question
          </span>
        </div>
      </div>
      <div className="absolute left-5 top-16 z-20 max-w-[210px] rounded-xl border border-[#F26418]/30 bg-white/95 p-4 text-xs text-black shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="h-4 w-4 text-[#F26418]" />
          <span className="font-semibold text-black">Live Chat</span>
        </div>
        <p className="text-[#7C8595]">We're online – ask us anything!</p>
      </div>
    </div>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Accordion component for FAQ                                       */
/* ------------------------------------------------------------------ */
const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[#E2E8F0] last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left text-base font-medium text-black transition-colors hover:text-[#F26418] md:text-lg"
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#F26418] flex-shrink-0 ml-4" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#7C8595] flex-shrink-0 ml-4" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-5 text-[#7C8595] leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main Help Center Component                                        */
/* ------------------------------------------------------------------ */
const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      question: "What is TeraStamp?",
      answer:
        "TeraStamp is a digital platform for construction monitoring and reporting. It collects, visualises, and analyses site data in real time, helping teams make faster, smarter decisions.",
    },
    {
      question: "How do I get started with TeraStamp?",
      answer:
        "Simply request a demo through our website. Our team will set up your project, onboard your team, and provide training to ensure a smooth start.",
    },
    {
      question: "What types of projects can use TeraStamp?",
      answer:
        "TeraStamp is designed for infrastructure projects including tunnels, metros, bridges, dams, and large-scale civil works. It supports both conventional and mechanised excavation methods.",
    },
    {
      question: "Can I integrate TeraStamp with other software?",
      answer:
        "Yes. TeraStamp offers APIs and integrations with BIM, project management tools, and other construction software to centralise all your data.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. TeraStamp uses enterprise-grade encryption, role-based access, and regular security audits to keep your data safe and compliant.",
    },
    {
      question: "What support options are available?",
      answer:
        "We offer email support, live chat during business hours, a knowledge base, and dedicated account managers for enterprise clients.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const categories = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Getting Started",
      desc: "Set up your project and onboard your team.",
      link: "#",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Documentation",
      desc: "User manuals, API guides, and best practices.",
      link: "#",
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Tutorials",
      desc: "Watch step‑by‑step walkthroughs.",
      link: "#",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Configuration",
      desc: "Customise dashboards, alerts, and reports.",
      link: "#",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Management",
      desc: "Add users, set roles, and manage permissions.",
      link: "#",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Compliance",
      desc: "Data protection, encryption, and audit logs.",
      link: "#",
    },
  ];

  const resources = [
    {
      icon: <FileText className="h-5 w-5 text-[#F26418]" />,
      title: "User Guide",
      desc: "Complete PDF manual for all features.",
    },
    {
      icon: <Video className="h-5 w-5 text-[#F26418]" />,
      title: "Video Library",
      desc: "Tutorials and feature demos.",
    },
    {
      icon: <HelpCircle className="h-5 w-5 text-[#F26418]" />,
      title: "Knowledge Base",
      desc: "Searchable articles and FAQs.",
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-[#F26418]" />,
      title: "Community Forum",
      desc: "Connect with other users and experts.",
    },
  ];

  return (
    <main className="bg-white">
      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 md:pt-20">
        <motion.h1
          {...rise(0)}
          className="text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl md:text-6xl"
        >
          How can we <span style={{ color: colors.accent }}>help</span>?
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 max-w-3xl text-base leading-relaxed text-[#7C8595] md:text-lg"
        >
          Find answers, guides, and resources to get the most out of TeraStamp.
          Search below or browse our help categories.
        </motion.p>

        {/* Search bar */}
        <motion.div {...rise(2)} className="mt-8 relative max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#7C8595]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help articles, guides, or keywords..."
              className="w-full rounded-xl border-2 border-[#E2E8F0] bg-white py-4 pl-12 pr-4 text-black placeholder:text-[#7C8595] focus:border-[#F26418] focus:outline-none focus:ring-2 focus:ring-[#F26418]/20"
            />
          </div>
          {searchQuery && (
            <div className="absolute left-0 right-0 mt-2 rounded-xl border border-[#E2E8F0] bg-white shadow-lg z-10 p-4">
              <p className="text-sm text-[#7C8595]">
                Showing results for: <span className="font-medium text-black">“{searchQuery}”</span>
              </p>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-center gap-2 text-black hover:text-[#F26418] cursor-pointer">
                  <FileText className="h-4 w-4" /> How to set up a new project
                </li>
                <li className="flex items-center gap-2 text-black hover:text-[#F26418] cursor-pointer">
                  <Video className="h-4 w-4" /> Video: Dashboard tour
                </li>
                <li className="flex items-center gap-2 text-black hover:text-[#F26418] cursor-pointer">
                  <HelpCircle className="h-4 w-4" /> FAQ: What is TeraStamp?
                </li>
              </ul>
            </div>
          )}
        </motion.div>

        {/* Quick categories – with orange border */}
        <motion.div {...rise(3)} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 3).map((cat, idx) => (
            <Link
              key={idx}
              to={cat.link}
              className="flex items-center gap-4 rounded-2xl border-2 border-[#F26418] bg-white p-5 transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="rounded-full bg-[#F26418]/10 p-3 text-[#F26418]">
                {cat.icon}
              </div>
              <div>
                <h3 className="font-semibold text-black">{cat.title}</h3>
                <p className="text-sm text-[#7C8595]">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* ===== All Categories – with orange border ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Browse Help Categories</SectionTitle>
        <motion.div
          {...rise(1)}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={cat.link}
              className="group rounded-2xl border-2 border-[#F26418] bg-white p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="rounded-full bg-[#F26418]/10 p-3 w-fit text-[#F26418]">
                {cat.icon}
              </div>
              <h3 className="mt-4 font-semibold text-black group-hover:text-[#F26418]">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm text-[#7C8595]">{cat.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-[#F26418] text-sm font-medium">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto mt-16 max-w-4xl px-4 sm:px-6">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <motion.div
          {...rise(1)}
          className="mt-8 rounded-2xl border-2 border-[#E2E8F0] bg-white p-4 md:p-8"
        >
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqIndex === idx}
              onToggle={() => toggleFaq(idx)}
            />
          ))}
        </motion.div>
      </section>

      {/* ===== Resources – with orange border ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Helpful Resources</SectionTitle>
        <motion.div
          {...rise(1)}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {resources.map((res, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-6 border-2 border-[#F26418] transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#F26418]/10 text-[#F26418]">
                {res.icon}
              </div>
              <h3 className="mt-4 font-semibold text-black">{res.title}</h3>
              <p className="mt-2 text-sm text-[#7C8595]">{res.desc}</p>
              <div className="mt-4 text-[#F26418] text-sm font-medium flex items-center gap-1">
                Access <ExternalLink className="h-3 w-3" />
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ===== Contact Support – clickable cards ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Contact Support</SectionTitle>
        <motion.div
          {...rise(1)}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {/* Email card */}
          <a
            href="mailto:support@terastamp.com"
            className="group rounded-2xl bg-white p-6 border-2 border-[#E2E8F0] text-center transition-all hover:border-[#F26418] hover:shadow-lg hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex justify-center">
              <Mail className="h-10 w-10 text-[#F26418] group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="mt-4 font-semibold text-black">Email</h3>
            <p className="mt-2 text-sm text-[#7C8595]">support@terastamp.com</p>
            <p className="text-sm text-[#7C8595]">Response within 24h</p>
            <div className="mt-4 text-[#F26418] text-sm font-medium flex items-center justify-center gap-1">
              Send email <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>

          {/* Live Chat card – placeholder (could link to a chat page) */}
          <a
            href="#chat"
            className="group rounded-2xl bg-white p-6 border-2 border-[#E2E8F0] text-center transition-all hover:border-[#F26418] hover:shadow-lg hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex justify-center">
              <MessageCircle className="h-10 w-10 text-[#F26418] group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="mt-4 font-semibold text-black">Live Chat</h3>
            <p className="mt-2 text-sm text-[#7C8595]">Mon–Fri, 9am–6pm EST</p>
            <p className="text-sm text-[#7C8595]">Instant answers</p>
            <div className="mt-4 text-[#F26418] text-sm font-medium flex items-center justify-center gap-1">
              Start chat <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>

          {/* Phone card */}
          <a
            href="tel:+18001234567"
            className="group rounded-2xl bg-white p-6 border-2 border-[#E2E8F0] text-center transition-all hover:border-[#F26418] hover:shadow-lg hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex justify-center">
              <Phone className="h-10 w-10 text-[#F26418] group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="mt-4 font-semibold text-black">Phone</h3>
            <p className="mt-2 text-sm text-[#7C8595]">+1 (800) 123‑4567</p>
            <p className="text-sm text-[#7C8595]">Emergency support 24/7</p>
            <div className="mt-4 text-[#F26418] text-sm font-medium flex items-center justify-center gap-1">
              Call now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        </motion.div>
      </section>

      {/* ===== CTA with bottom padding fixed ===== */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 pb-20">
        <CtaBanner />
      </section>
    </main>
  );
};

export default HelpCenter;
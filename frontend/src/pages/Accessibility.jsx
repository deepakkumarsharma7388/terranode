import { motion } from "framer-motion";
import {
  Accessibility,
  Eye,
  Keyboard,
  FileText,
  Globe,
  MessageCircle,
  Mail,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  RefreshCw,
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

/* ------------------------------------------------------------------ */
/*  Main Accessibility Statement Page                                 */
/* ------------------------------------------------------------------ */
const AccessibilityPage = () => {
  const sections = [
    {
      icon: <Accessibility className="h-6 w-6" />,
      title: "Our Commitment",
      content: [
        "Accessibility is an important part of our product and website development process. We strive to design and maintain digital experiences that are easy to navigate, understand, and interact with for people with a wide range of abilities.",
        "Our goal is to align our accessibility efforts with internationally recognized accessibility principles and applicable legal requirements wherever we operate.",
      ],
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Accessibility Status",
      content: [
        "TeraStamp is continuously improving the accessibility of its website and digital platform.",
        "While many areas already support accessible navigation and interaction, some sections are still being refined as part of our ongoing accessibility program.",
      ],
    },
    {
      icon: <Keyboard className="h-6 w-6" />,
      title: "Areas We Are Improving",
      content: [
        "We are actively working to enhance accessibility across our website by focusing on improvements such as:",
        "• Providing meaningful alternative text for informative images.",
        "• Improving keyboard navigation throughout the website.",
        "• Enhancing compatibility with screen readers and assistive technologies.",
        "• Organizing page headings and content for better readability.",
        "• Increasing color contrast where necessary to improve visibility.",
        "• Making interactive components easier to identify and use.",
        "• Adding captions or transcripts to multimedia content whenever appropriate.",
        "• Improving focus indicators for keyboard users.",
        "• Writing clearer labels for buttons, links, and form elements.",
        "• Simplifying navigation across all pages and devices.",
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Third-Party Content",
      content: [
        "Some areas of our website may include third-party services or embedded content that is maintained by external providers.",
        "Although we encourage accessibility across all integrated services, we may have limited control over the accessibility features of third-party components.",
      ],
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Continuous Improvement",
      content: [
        "Accessibility is an ongoing effort at TeraStamp.",
        "We regularly review our website, evaluate user feedback, and implement improvements to enhance the experience for all visitors.",
        "As our platform evolves, accessibility considerations remain an important part of our design, development, and testing processes.",
      ],
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Feedback",
      content: [
        "We welcome comments and suggestions that help us improve accessibility.",
        "If you experience difficulty accessing any part of our website, encounter a barrier, or require information in an alternative format, we encourage you to contact us.",
        "Your feedback helps us improve our services for everyone.",
      ],
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Statement Updates",
      content: [
        "This Accessibility Statement may be revised periodically to reflect improvements, new technologies, or changes in applicable accessibility standards.",
        "We recommend reviewing this page occasionally to stay informed about our ongoing accessibility efforts.",
        "Last Updated: July 2026",
      ],
    },
  ];

  return (
    <main className="bg-white">
      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 md:pt-20">
        <motion.span
          {...rise(0)}
          className="inline-flex rounded-full border border-[#F26418]/30 bg-[#F26418]/10 px-4 py-2 text-sm font-medium text-[#F26418]"
        >
          Accessibility
        </motion.span>

        <motion.h1
          {...rise(1)}
          className="mt-6 text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl"
        >
          Accessibility <span style={{ color: colors.accent }}>Statement</span>
        </motion.h1>

        <motion.p
          {...rise(2)}
          className="mt-4 text-sm text-[#7C8595]"
        >
          Effective Date: July 2026
        </motion.p>

        <motion.p
          {...rise(3)}
          className="mt-6 max-w-3xl text-lg leading-relaxed text-[#7C8595] md:text-xl"
        >
          At <span className="font-semibold text-black">TeraStamp</span>, we are
          committed to creating an inclusive digital experience that is
          accessible to everyone, regardless of ability or the technology they
          use. We continually work to improve the usability of our website and
          platform so that all users can access information and services with
          ease.
        </motion.p>
      </section>

      {/* ===== Sections ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              {...rise(index + 1)}
              className="rounded-2xl border-2 border-[#F26418] bg-white p-6 transition-all hover:shadow-md md:p-8"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F26418]/10 text-[#F26418]">
                  {section.icon}
                </div>

                <h2 className="text-xl font-bold text-black md:text-2xl">
                  {section.title}
                </h2>
              </div>

              <ul className="space-y-3">
                {section.content.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-base leading-relaxed text-[#7C8595]"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F26418]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section className="mx-auto mt-16 max-w-4xl px-4 sm:px-6 pb-20">
        <motion.div
          {...rise(0)}
          className="rounded-3xl border-2 border-[#F26418] bg-white p-8 md:p-10"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F26418]/10 text-[#F26418]">
              <ExternalLink className="h-7 w-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-black md:text-3xl">
                Contact Us
              </h2>
              <p className="mt-3 text-[#7C8595]">
                For accessibility-related questions or assistance, please reach
                out to our team.
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href="mailto:accessibility@terastamp.com"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#F26418] px-6 py-3 font-semibold text-white transition-all hover:bg-[#D9550F] hover:shadow-lg"
                >
                  <Mail className="h-5 w-5" />
                  accessibility@terastamp.com
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="text-sm text-[#7C8595]">
                  Support:{" "}
                  <a
                    href="mailto:support@terastamp.com"
                    className="text-[#F26418] hover:underline"
                  >
                    support@terastamp.com
                  </a>
                </p>
                <p className="text-sm text-[#7C8595]">
                  Website:{" "}
                  <a
                    href="https://www.terastamp.com"
                    className="text-[#F26418] hover:underline"
                  >
                    www.terastamp.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default AccessibilityPage;
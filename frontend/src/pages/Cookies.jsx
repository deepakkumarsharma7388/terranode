import { motion } from "framer-motion";
import {
  Cookie,
  Shield,
  Eye,
  Settings,
  BarChart3,
  Zap,
  Globe,
  Smartphone,
  RefreshCw,
  Mail,
  ExternalLink,
  ArrowRight,
  CheckCircle,
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
/*  Main Cookie Policy Page                                           */
/* ------------------------------------------------------------------ */
const CookiePolicyPage = () => {
  const sections = [
    {
      icon: <Cookie className="h-6 w-6" />,
      title: "What Are Cookies?",
      content: [
        "Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visit, such as preferences, settings, and browsing activity, making future visits more efficient and personalized.",
        "In addition to cookies, similar technologies such as local storage and tracking pixels may also be used to improve website functionality and performance.",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Why TeraStamp Uses Cookies",
      content: [
        "TeraStamp uses cookies to provide a secure, efficient, and user-friendly experience. Cookies may be used to:",
        "• Ensure the website functions correctly.",
        "• Remember user preferences.",
        "• Improve website performance.",
        "• Understand how visitors interact with our platform.",
        "• Enhance navigation and usability.",
        "• Measure website traffic and engagement.",
        "• Maintain security and prevent unauthorized activity.",
        "Cookies do not normally contain information that directly identifies individual users.",
      ],
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Categories of Cookies We Use",
      content: [
        "Essential Cookies: These cookies are necessary for the operation of the website and cannot be disabled through our systems. They help with secure browsing, session management, authentication, website functionality, and security protection. Without these cookies, certain parts of the website may not function properly.",
        "Preference Cookies: Preference cookies remember choices you make during your visit to provide a more personalized browsing experience. Examples include preferred language, display settings, regional preferences, and user interface customization.",
        "Analytics Cookies: Analytics cookies help us understand how visitors use our website so we can continuously improve our services. These cookies may collect information such as pages visited, time spent on pages, navigation paths, device type, browser information, general geographic region, and website performance metrics. This information is aggregated and used only for analytical purposes.",
        "Performance Cookies: Performance cookies help identify technical issues and improve website speed, reliability, and overall functionality. These cookies allow us to monitor loading performance, website errors, system stability, and user experience improvements.",
        "Marketing Cookies: If enabled, marketing cookies may be used to provide more relevant communications and understand the effectiveness of promotional campaigns. TeraStamp does not use marketing cookies unless specifically stated and consent has been provided where required.",
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Third-Party Services",
      content: [
        "Some features on our website may rely on trusted third-party providers such as analytics, mapping services, embedded media, or cloud infrastructure.",
        "These providers may place their own cookies according to their respective privacy policies. TeraStamp does not control the operation of third-party cookies.",
      ],
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Managing Your Cookie Preferences",
      content: [
        "You have full control over how cookies are used on your device. You may:",
        "• Accept all cookies.",
        "• Reject non-essential cookies.",
        "• Change your cookie preferences at any time.",
        "• Delete previously stored cookies.",
        "• Configure your browser to block future cookies.",
        "Please note that disabling certain cookies may affect website functionality and user experience.",
      ],
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Browser Cookie Settings",
      content: [
        "Most modern browsers allow you to manage cookies through their privacy settings. You can generally:",
        "• View stored cookies.",
        "• Delete individual cookies.",
        "• Block cookies from specific websites.",
        "• Block all cookies.",
        "• Receive notifications before cookies are stored.",
        "For detailed instructions, refer to your browser's official documentation.",
        "Common browsers include: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, and Opera.",
      ],
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Cookies on Mobile Devices",
      content: [
        "When accessing TeraStamp from a smartphone or tablet, similar technologies may also be used.",
        "Mobile browsers provide privacy settings that allow you to delete cookies, restrict tracking, block cookies, and reset browsing data.",
        "Refer to your mobile browser's support documentation for device-specific instructions.",
      ],
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Changes to This Cookie Policy",
      content: [
        "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our services.",
        "Any updates will become effective immediately after publication on this page. We encourage users to review this policy periodically.",
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
          Privacy
        </motion.span>

        <motion.h1
          {...rise(1)}
          className="mt-6 text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl"
        >
          Cookie <span style={{ color: colors.accent }}>Policy</span>
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
          This Cookie Policy explains how <span className="font-semibold text-black">TeraStamp</span>
          uses cookies and similar technologies when you visit our website or
          use our online services. It describes what these technologies are, why
          we use them, and how you can manage your preferences.
        </motion.p>

        <motion.p
          {...rise(4)}
          className="mt-4 text-[#7C8595]"
        >
          By continuing to browse our website, you acknowledge that cookies may
          be used in accordance with this policy unless you choose to disable
          them through your browser or our cookie settings.
        </motion.p>

        {/* Cookie preference quick actions */}
        <motion.div
          {...rise(5)}
          className="mt-8 flex flex-wrap gap-4"
        >
          <button className="inline-flex items-center gap-2 rounded-xl bg-[#F26418] px-6 py-3 font-semibold text-white transition-all hover:bg-[#D9550F] hover:shadow-lg">
            <CheckCircle className="h-5 w-5" />
            Accept All
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border-2 border-[#F26418] px-6 py-3 font-semibold text-[#F26418] transition-all hover:bg-[#F26418]/10">
            <Settings className="h-5 w-5" />
            Customize Preferences
          </button>
        </motion.div>
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
                If you have any questions regarding this Cookie Policy or our use
                of cookies, please contact us.
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href="mailto:privacy@terastamp.com"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#F26418] px-6 py-3 font-semibold text-white transition-all hover:bg-[#D9550F] hover:shadow-lg"
                >
                  <Mail className="h-5 w-5" />
                  privacy@terastamp.com
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

export default CookiePolicyPage;
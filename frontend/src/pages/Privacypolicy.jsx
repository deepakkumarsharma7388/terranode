import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Globe,
  Eye,
  FileText,
  Mail,
  Database,
  UserCheck,
  Zap,
  Server,
  Share2,
  Smartphone,
  AlertTriangle,
  ArrowRight,
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

/* ------------------------------------------------------------------ */
/*  Main Privacy Policy Page                                          */
/* ------------------------------------------------------------------ */
const PrivacyPolicyPage = () => {
  const sections = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Information We Collect",
      content: [
        "Full name, email address, phone number, company or organization, job title, contact preferences, and information submitted through forms or support requests.",
        "IP address, browser type and version, device information, operating system, website usage data, date and time of access, referring pages, cookies and similar technologies.",
        "When using TeraStamp's infrastructure monitoring platform: sensor readings, monitoring data, infrastructure metadata, maps and visualizations, reports and analytics, Digital Twin information, AI-generated insights.",
      ],
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "How We Use Your Information",
      content: [
        "Operate and maintain the TeraStamp platform, deliver infrastructure monitoring services, improve platform performance, generate reports and visualizations, respond to support requests.",
        "Enhance security and prevent unauthorized access, send important service notifications, improve user experience, develop new platform features, comply with applicable legal obligations.",
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Cookies and Similar Technologies",
      content: [
        "Remember user preferences, improve website performance, analyze visitor activity, maintain secure sessions, deliver a better browsing experience.",
        "You can modify your browser settings to manage or disable cookies at any time.",
      ],
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Sharing of Information",
      content: [
        "TeraStamp does not sell personal information.",
        "We may share information with trusted technology providers, cloud hosting partners, analytics providers, customer support platforms, professional service providers, or government authorities when legally required.",
        "All third-party providers are expected to maintain appropriate security standards.",
      ],
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Infrastructure Monitoring Data",
      content: [
        "Project monitoring information remains the property of the respective customer unless otherwise agreed.",
        "TeraStamp processes monitoring data solely to provide infrastructure monitoring, data visualization, alert management, reporting, AI‑assisted analysis, Digital Twin functionality, and platform improvements.",
        "We do not use customer project data for advertising purposes.",
      ],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "GEO AI Assistant",
      content: [
        "When using GEO, our AI-powered assistant, your questions and selected project data may be processed to generate intelligent responses and recommendations.",
        "GEO is designed to analyze monitoring information, summarize project insights, assist with reporting, answer infrastructure-related questions, and support engineering decision-making.",
        "AI-generated responses should always be reviewed by qualified personnel before making critical operational decisions.",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Data Security",
      content: [
        "We implement appropriate technical, organizational, and administrative safeguards, including secure cloud infrastructure, encryption where appropriate, access controls, authentication mechanisms, regular security monitoring, and backup and recovery procedures.",
        "Although we strive to protect your information, no internet-based service can guarantee absolute security.",
      ],
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Data Retention",
      content: [
        "We retain information only for as long as necessary to deliver requested services, maintain customer accounts, meet contractual obligations, resolve disputes, and comply with legal requirements.",
        "When information is no longer required, it is securely deleted or anonymized.",
      ],
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Your Privacy Rights",
      content: [
        "Depending on your location, you may have the right to access your personal information, update inaccurate information, request deletion of personal data, restrict certain processing activities, withdraw consent where applicable, request a copy of your information, or object to certain uses of your information.",
        "Requests will be processed in accordance with applicable privacy laws.",
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Third-Party Services",
      content: [
        "Our platform may integrate with third-party services, including mapping providers, cloud infrastructure, communication tools, analytics platforms, or enterprise systems.",
        "These services operate under their own privacy policies, and we encourage users to review those policies independently.",
      ],
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "International Data Transfers",
      content: [
        "Your information may be processed or stored in countries where TeraStamp or its service providers operate.",
        "Whenever data is transferred internationally, we implement appropriate safeguards designed to protect your information.",
      ],
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Children's Privacy",
      content: [
        "TeraStamp is intended for business and professional use.",
        "Our services are not designed for individuals under the age of 16, and we do not knowingly collect personal information from children.",
      ],
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Policy Updates",
      content: [
        "We may revise this Privacy Policy from time to time to reflect changes in our services, legal requirements, or business practices.",
        "Updated versions will be published on this page together with the revised effective date.",
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
          Privacy <span style={{ color: colors.accent }}>Policy</span>
        </motion.h1>

        <motion.p
          {...rise(2)}
          className="mt-4 text-sm text-[#7C8595]"
        >
          Last Updated: July 2026
        </motion.p>

        <motion.p
          {...rise(3)}
          className="mt-6 max-w-3xl text-lg leading-relaxed text-[#7C8595] md:text-xl"
        >
          At <span className="font-semibold text-black">TeraStamp</span>, we
          value your trust and are committed to protecting the information you
          share with us. This Privacy Policy explains how we collect, use,
          store, and safeguard your information when you visit our website, use
          our platform, or interact with our services.
        </motion.p>

        <motion.p
          {...rise(4)}
          className="mt-4 text-[#7C8595]"
        >
          By accessing or using TeraStamp, you acknowledge that you have read
          and understood this Privacy Policy.
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
              <Mail className="h-7 w-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-black md:text-3xl">
                Contact Us
              </h2>
              <p className="mt-3 text-[#7C8595]">
                If you have questions regarding this Privacy Policy or wish to
                exercise your privacy rights, please contact us.
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
                    https://www.terastamp.com
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

export default PrivacyPolicyPage;
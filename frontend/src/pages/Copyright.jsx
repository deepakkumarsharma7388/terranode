import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  Eye,
  Globe,
  Scale,
  Database,
  Zap,
  Mail,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Users,
  AlertTriangle,
  Crosshair,
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
/*  Main Copyright Policy Page                                        */
/* ------------------------------------------------------------------ */
const CopyrightPolicyPage = () => {
  const sections = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Introduction",
      content: [
        "TeraStamp respects intellectual property rights and is committed to maintaining responsible practices in the development, operation, and delivery of its software, AI-powered solutions, and digital services.",
        "This Copyright Policy explains our approach to protecting copyrighted materials and ensuring that our products, technologies, and internal processes comply with applicable copyright and intellectual property laws.",
      ],
    },
    {
      icon: <Crosshair className="h-6 w-6" />,
      title: "Purpose",
      content: [
        "The purpose of this policy is to establish clear guidelines for the lawful use of copyrighted materials and to ensure that all content used within TeraStamp's products and services is obtained, created, or licensed appropriately.",
      ],
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Applicability",
      content: [
        "This policy applies to:",
        "• Employees",
        "• Contractors",
        "• Consultants",
        "• Technology partners",
        "• Vendors",
        "• Any individual or organization contributing to TeraStamp's products, AI technologies, documentation, or digital services.",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Respect for Intellectual Property",
      content: [
        "TeraStamp recognizes the importance of protecting creative works, software, publications, images, datasets, and other copyrighted materials.",
        "We are committed to:",
        "• Respecting the ownership rights of creators.",
        "• Using intellectual property responsibly.",
        "• Preventing unauthorized copying or distribution of protected content.",
        "• Following applicable copyright regulations in every region where we operate.",
      ],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI Development and Training",
      content: [
        "TeraStamp develops intelligent technologies, including AI-powered capabilities such as GEO, using carefully managed data sources.",
        "Our AI development process is designed to prioritize:",
        "• Responsible data management",
        "• Legal compliance",
        "• Transparency",
        "• Data integrity",
        "• Respect for intellectual property",
        "Training resources are selected through controlled internal processes to help ensure appropriate use of data.",
      ],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Sources",
      content: [
        "Whenever possible, TeraStamp utilizes:",
        "• Proprietary datasets",
        "• Customer-authorized project data",
        "• Internally generated information",
        "• Licensed resources",
        "• Publicly available information where legally permitted",
        "We are committed to ensuring that any data incorporated into our products is used in accordance with applicable legal and contractual requirements.",
      ],
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Content Usage",
      content: [
        "All software, documentation, graphics, reports, source code, website content, AI-generated materials, branding, and platform assets created by TeraStamp remain protected under applicable copyright laws.",
        "No individual or organization may reproduce, distribute, modify, republish, or commercially exploit TeraStamp materials without prior written authorization, except where permitted by law.",
      ],
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Compliance Practices",
      content: [
        "To support ongoing compliance, TeraStamp maintains internal procedures that help ensure intellectual property considerations are incorporated throughout the software development lifecycle.",
        "These practices may include:",
        "• Internal reviews",
        "• Content verification",
        "• Documentation controls",
        "• Development guidelines",
        "• Employee awareness",
        "• Periodic compliance assessments",
      ],
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Reporting Copyright Concerns",
      content: [
        "If you believe that copyrighted material has been used improperly within a TeraStamp product or service, you may notify us by providing sufficient details regarding your concern.",
        "Upon receiving a valid request, we will review the matter promptly and take appropriate action where necessary.",
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "International Compliance",
      content: [
        "TeraStamp serves customers across multiple regions and is committed to complying with applicable copyright and intellectual property laws in the jurisdictions where we conduct business.",
      ],
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Policy Updates",
      content: [
        "This Copyright Policy may be revised periodically to reflect changes in legislation, technology, business operations, or industry standards.",
        "The latest version will always be available on our website.",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Responsibility",
      content: [
        "Every employee, contractor, and partner involved in the design, development, maintenance, or operation of TeraStamp products is expected to follow this policy and contribute to protecting intellectual property rights.",
        "Failure to comply with these requirements may result in corrective action consistent with company policies and applicable agreements.",
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
          Legal
        </motion.span>

        <motion.h1
          {...rise(1)}
          className="mt-6 text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl"
        >
          Copyright <span style={{ color: colors.accent }}>Policy</span>
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
          <span className="font-semibold text-black">TeraStamp</span> respects
          intellectual property rights and is committed to maintaining
          responsible practices in the development, operation, and delivery of
          its software, AI-powered solutions, and digital services.
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
                If you have any questions regarding this Copyright Policy or
                wish to report a copyright-related concern, please contact us.
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href="mailto:legal@terastamp.com"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#F26418] px-6 py-3 font-semibold text-white transition-all hover:bg-[#D9550F] hover:shadow-lg"
                >
                  <Mail className="h-5 w-5" />
                  legal@terastamp.com
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

export default CopyrightPolicyPage;
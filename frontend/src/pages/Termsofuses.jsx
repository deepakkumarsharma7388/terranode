import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  AlertTriangle,
  Globe,
  Link2,
  Clock,
  Scale,
  XCircle,
  Mail,
  ExternalLink,
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
/*  Main Terms of Use Page                                            */
/* ------------------------------------------------------------------ */
const TermsOfUsePage = () => {
  const sections = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "1. Agreement to These Terms",
      content: [
        "Your use of the TeraStamp website or platform confirms that you have read, understood, and accepted these Terms of Use. These terms apply to all visitors, registered users, customers, and organizations accessing our services.",
      ],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "2. Updates to These Terms",
      content: [
        "TeraStamp may revise these Terms of Use from time to time to reflect changes in our services, technology, or legal requirements. Any updates become effective once published on this page. Continued use of the platform after updates indicates your acceptance of the revised terms.",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "3. Acceptable Use",
      content: [
        "Users are expected to use the TeraStamp platform responsibly and lawfully. You agree not to:",
        "• Attempt unauthorized access to any system or account.",
        "• Interfere with the operation or security of the platform.",
        "• Upload malicious software or harmful code.",
        "• Copy, misuse, or exploit platform resources without authorization.",
        "• Use the platform for unlawful, fraudulent, or abusive purposes.",
        "• Disrupt the experience of other users.",
        "Failure to comply with these requirements may result in restricted or terminated access.",
      ],
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "4. Ownership of Content",
      content: [
        "All software, designs, graphics, logos, documentation, source code, text, platform features, and other materials available through TeraStamp remain the exclusive property of TeraStamp or its licensors.",
        "Except where permitted by applicable law, no content may be copied, modified, distributed, republished, or commercially used without prior written permission.",
      ],
    },
    {
      icon: <Link2 className="h-6 w-6" />,
      title: "5. External Resources",
      content: [
        "Our website or platform may include references or links to external websites and third-party services for your convenience.",
        "TeraStamp does not manage or endorse the content, availability, or privacy practices of those external services. Users access third-party websites at their own discretion.",
      ],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "6. Service Availability",
      content: [
        "We strive to maintain reliable and uninterrupted services; however, TeraStamp cannot guarantee continuous availability at all times.",
        "Maintenance activities, software updates, technical issues, or circumstances beyond our control may temporarily affect access to the platform.",
      ],
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "7. Disclaimer",
      content: [
        "TeraStamp provides its website and platform on an 'as available' and 'as provided' basis.",
        "While we work to ensure accurate and reliable information, we do not guarantee that all content, reports, analytics, AI-generated insights, or platform features will always be complete, error-free, or suitable for every use case.",
        "Users remain responsible for validating information before making operational or engineering decisions.",
      ],
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "8. Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, TeraStamp shall not be responsible for indirect, incidental, special, consequential, or business-related losses resulting from the use or inability to use our platform.",
        "Where applicable, our total liability shall not exceed the amount paid by the customer for the specific service giving rise to the claim.",
      ],
    },
    {
      icon: <XCircle className="h-6 w-6" />,
      title: "9. Suspension or Termination",
      content: [
        "TeraStamp reserves the right to suspend, restrict, or permanently terminate access to the platform if a user:",
        "• Violates these Terms of Use.",
        "• Misuses the platform or its services.",
        "• Engages in activities that compromise platform security.",
        "• Uses the platform in a manner that may negatively impact other users or our infrastructure.",
        "Termination may occur without prior notice where necessary to protect the platform or comply with legal obligations.",
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "10. Governing Law",
      content: [
        "These Terms of Use shall be interpreted in accordance with the laws applicable in the jurisdiction where the relevant agreement or service is provided.",
        "Any legal disputes relating to these terms shall be resolved through the competent courts or authorities of the applicable jurisdiction.",
      ],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "11. Contact Information",
      content: [
        "If you have any questions regarding these Terms of Use or require additional information, please contact us:",
        "Email: support@terastamp.com",
        "Website: www.terastamp.com",
      ],
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "12. Acceptance",
      content: [
        "By accessing or using TeraStamp's website, applications, or services, you acknowledge that you have read and understood these Terms of Use and agree to comply with them.",
        "If you do not agree with these terms, please discontinue use of the TeraStamp platform and related services.",
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
          Terms of <span style={{ color: colors.accent }}>Use</span>
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
          Welcome to <span className="font-semibold text-black">TeraStamp</span>.
          These Terms of Use govern your access to and use of our website,
          software, applications, and related services. By using our platform,
          you agree to comply with these terms. If you do not accept these
          terms, please discontinue use of our services.
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
                Questions? Contact Us
              </h2>
              <p className="mt-3 text-[#7C8595]">
                If you have any questions regarding these Terms of Use or
                require additional information, please reach out.
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href="mailto:support@terastamp.com"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#F26418] px-6 py-3 font-semibold text-white transition-all hover:bg-[#D9550F] hover:shadow-lg"
                >
                  <Mail className="h-5 w-5" />
                  support@terastamp.com
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
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

export default TermsOfUsePage;
import { Shield, Scale, Lock, Globe, AlertTriangle, FileText, Mail } from "lucide-react";

const LegalNoticePage = () => {
  const sections = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "1. Information and Transparency",
      content: [
        "This website is operated by TeraStamp and provides information about infrastructure intelligence, structural monitoring, digital twins, and related technologies.",
        "By accessing or using this website, you acknowledge and agree to the terms described on this page.",
        "We may update content, services, and platform information to improve accuracy, usability, and user experience.",
        "Users are responsible for reviewing these terms periodically for any updates or modifications.",
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "2. Website Usage",
      content: [
        "Users must use this website lawfully and responsibly.",
        "Content provided on the website is intended for informational and educational purposes unless otherwise stated.",
        "Activities that may compromise the security, availability, or integrity of the website are prohibited.",
        "Unauthorized access attempts, data extraction, or misuse of platform resources are not permitted.",
        "Users are responsible for ensuring their own compliance with applicable laws and regulations.",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "3. Intellectual Property Rights",
      content: [
        "All content, designs, graphics, branding elements, documents, software components, and materials available on this website remain the property of TeraStamp or its licensors.",
        "Users may view, download, or print content for personal and non-commercial purposes only.",
        "Reproduction, modification, redistribution, resale, or public use of website materials without prior written permission is prohibited.",
        "Any unauthorized use of intellectual property may result in legal action where applicable.",
      ],
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "4. Data Protection and Privacy",
      content: [
        "We process personal information in accordance with our Privacy Policy and applicable data protection regulations.",
        "Information submitted through forms may be used to respond to inquiries, provide requested services, or improve user experience.",
        "Reasonable technical and organizational measures are implemented to protect personal information.",
        "Users are encouraged to review our Privacy Policy for detailed information regarding data collection and processing practices.",
      ],
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "5. Liability Disclaimer",
      content: [
        "While we strive to maintain accurate and reliable information, we do not guarantee that all website content will always be complete, current, or error-free.",
        "TeraStamp shall not be responsible for losses arising from website interruptions, technical failures, third-party services, or circumstances beyond reasonable control.",
        "Users access and use website information at their own discretion and responsibility.",
        "Nothing on this website should be interpreted as professional engineering, legal, financial, or regulatory advice unless explicitly stated.",
      ],
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "6. Content Changes and Availability",
      content: [
        "We reserve the right to modify, update, suspend, or discontinue any content, service, feature, or functionality without prior notice.",
        "Availability of specific sections, downloads, or resources may vary over time.",
        "Updates may be implemented to improve performance, security, compliance, or user experience.",
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "7. External Links",
      content: [
        "This website may contain links to third-party websites or external resources.",
        "TeraStamp is not responsible for the content, availability, policies, or practices of external websites.",
        "Accessing third-party resources is done at the user's own discretion and subject to their respective terms and policies.",
      ],
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "8. Compliance and Acceptable Conduct",
      content: [
        "Users must not upload, distribute, or transmit unlawful, harmful, misleading, or malicious content through the website.",
        "Attempts to disrupt website operations, compromise security, or interfere with other users are prohibited.",
        "We reserve the right to restrict or terminate access where misuse or policy violations are identified.",
      ],
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "9. Governing Principles",
      content: [
        "These terms represent an agreement between users and TeraStamp regarding access to and use of the website.",
        "If any provision is determined to be unenforceable, the remaining provisions shall remain in effect.",
        "Failure to enforce a specific provision shall not constitute a waiver of future enforcement rights.",
      ],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "10. Communications",
      content: [
        "We may communicate with users regarding inquiries, service updates, newsletters, events, or important notices when appropriate.",
        "Users may opt out of marketing communications where applicable.",
        "Critical operational or security-related notifications may still be provided when necessary.",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "11. Security and Best Practices",
      content: [
        "Users are encouraged to maintain secure devices, updated software, and strong authentication practices.",
        "Protecting account credentials and personal information remains the responsibility of the user.",
        "Any suspected security issues should be reported promptly to help maintain a safe environment for all users.",
      ],
    },
  ];

  return (
    <section className="bg-[#151622] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
            Legal Information
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Legal Notice &
            <span className="block text-indigo-400">
              Website Terms of Use
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-400 md:text-xl">
            This page outlines the terms, responsibilities, rights, and
            conditions governing access to and use of the TeraStamp website and
            its associated digital services.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                  {section.icon}
                </div>

                <h2 className="text-xl font-bold md:text-2xl">
                  {section.title}
                </h2>
              </div>

              <ul className="space-y-3">
                {section.content.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-base leading-relaxed text-gray-300"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-indigo-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-8 md:p-10">
          <h2 className="text-2xl font-bold md:text-3xl">
            Contact Our Team
          </h2>

          <p className="mt-4 max-w-3xl text-gray-300">
            If you have questions regarding these terms, privacy practices,
            intellectual property matters, or website usage policies, our team
            will be happy to assist you.
          </p>

          <a
            href="mailto:legal@terastamp.com"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
          >
            <Mail className="h-5 w-5" />
            legal@terastamp.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default LegalNoticePage;
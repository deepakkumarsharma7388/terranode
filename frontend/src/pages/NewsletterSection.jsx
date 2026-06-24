import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";

const NewsletterSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    industry: "",
    privacy: false,
    updates: false,
  });

  const industries = [
    "Bridges",
    "Mining",
    "Transportation",
    "Smart Cities",
    "Construction",
    "Energy Infrastructure",
    "Environmental Monitoring",
    "Water Infrastructure",
  ];

  return (
    <section className="bg-[#151622]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="max-w-5xl">
          <span className="mb-4 inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
            TeraStamp Community
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Stay Connected with
            <span className="block text-indigo-400">
              Infrastructure Innovation
            </span>
          </h2>

          <p className="mt-8 text-xl font-semibold leading-relaxed text-gray-200 md:text-3xl">
            Join the TeraStamp community and receive valuable insights on
            infrastructure intelligence, digital twins, remote monitoring, and
            data-driven asset management.
          </p>

          <p className="mt-4 max-w-5xl text-lg leading-relaxed text-gray-400 md:text-xl">
            Get curated updates, engineering best practices, project success
            stories, technology trends, and platform announcements delivered
            directly to your inbox. Stay informed about the future of
            infrastructure monitoring and decision-making.
          </p>
        </div>

        <div className="mt-12 max-w-2xl">
          <div className="space-y-5">
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                placeholder="Enter your business email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="h-14 w-full rounded-xl border border-white/10 bg-white/10 pl-12 pr-4 text-white placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            {/* Privacy */}
            <label className="flex items-start gap-3 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={formData.privacy}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    privacy: e.target.checked,
                  })
                }
                className="mt-1 h-5 w-5 rounded border-gray-500"
              />

              <span>
                I have read and agree to TeraStamp's privacy and data usage
                policy.
              </span>
            </label>

            {/* Button */}
            <button className="h-14 w-full rounded-xl bg-indigo-600 text-lg font-semibold text-white transition-all duration-300 hover:bg-indigo-500">
              Subscribe for Updates
            </button>

            {/* Industry Select */}
            <div className="relative">
              <select
                value={formData.industry}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    industry: e.target.value,
                  })
                }
                className="h-14 w-full appearance-none rounded-xl border border-white/10 bg-white/10 px-4 text-white focus:border-indigo-500 focus:outline-none"
              >
                <option value="" className="text-black">
                  Select your industry
                </option>

                {industries.map((industry) => (
                  <option
                    key={industry}
                    value={industry}
                    className="text-black"
                  >
                    {industry}
                  </option>
                ))}
              </select>

              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Consent */}
            <label className="flex items-start gap-3 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={formData.updates}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    updates: e.target.checked,
                  })
                }
                className="mt-1 h-5 w-5 rounded border-gray-500"
              />

              <span>
                I agree to receive industry updates, product announcements,
                event invitations, and educational content from TeraStamp.
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
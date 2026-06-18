import { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";


const videoSrc = "/herovideo.mp4"; // <-- your video
const poster = "/images/demo-preview-poster.png"; // optional

const benefits = [
  "One platform for all your project data.",
  "Real-time dashboards and automated reporting.",
  "Smarter decisions with AI-based insights.",
  "24/7 support from experts who understand your project.",
];

const LetsTalk = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [agree, setAgree] = useState(false);
  const [consent, setConsent] = useState(false);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demo request from ${form.name || "—"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}\n\nMarketing consent: ${consent ? "Yes" : "No"}`
    );
    window.location.href = `mailto:hello@terranode.com?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-lg border border-white/5 bg-[#3F3C49] px-3.5 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50";

  return (
    <section className="bg-[#1E1C24] py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        {/* Left — form */}
        <div>
          <h2 className="text-5xl font-extrabold tracking-tight text-white">
            Let's talk
          </h2>
          <div className="mt-4 text-3xl">👋</div>
          <p className="mt-2 max-w-sm text-gray-300">
            Schedule a demo, and we'll show you how Terranode can help your
            project and teams.
          </p>

          <form onSubmit={handleSubmit} className="mt-7">
            <label className="mb-1.5 block text-sm font-semibold text-gray-200">
              Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={update("name")}
              placeholder="Jane Smith"
              className={inputClass}
            />

            <label className="mb-1.5 mt-4 block text-sm font-semibold text-gray-200">
              Email
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={update("email")}
              placeholder="jane@company.com"
              className={inputClass}
            />

            <label className="mb-1.5 mt-4 block text-sm font-semibold text-gray-200">
              Company
            </label>
            <input
              type="text"
              value={form.company}
              onChange={update("company")}
              placeholder="Your company"
              className={inputClass}
            />

            <label className="mb-1.5 mt-4 block text-sm font-semibold text-gray-200">
              Message
            </label>
            <textarea
              rows={3}
              value={form.message}
              onChange={update("message")}
              placeholder="How can we help you?"
              className={`${inputClass} resize-y`}
            />

            {/* Consent checkboxes */}
            <label className="mt-4 flex gap-2.5 text-xs leading-snug text-gray-400">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-0.5 h-4 w-4 flex-none accent-[#6366F1]"
              />
              <span>
                I understand and agree that my data will be used according to the{" "}
                <Link to="/privacy" className="text-[#8B8FF5] hover:underline">
                  privacy policy
                </Link>{" "}
                and{" "}
                <Link to="/gdpr" className="text-[#8B8FF5] hover:underline">
                  GDPR regulations
                </Link>
                .
              </span>
            </label>

            <label className="mt-3 flex gap-2.5 text-xs leading-snug text-gray-400">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 flex-none accent-[#6366F1]"
              />
              <span>
                I give my consent to Terranode to receive electronic commercial
                communication regarding their services.
              </span>
            </label>

            <button
              type="submit"
              disabled={!agree}
              className="mt-5 w-full rounded-lg bg-[#6366F1] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5457E0] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send email
            </button>

            <p className="mt-4 text-center text-sm font-semibold text-gray-200">
              You can also contact us by email to:{" "}
              <a
                href="mailto:hello@terranode.com"
                className="text-[#8B8FF5] underline"
              >
                hello@terranode.com
              </a>
            </p>
          </form>
        </div>

        {/* Right — video + benefits */}
        <div>
          <h3 className="text-xl font-bold text-white">
            Request Your Terranode Demo
          </h3>

          <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-black">
            <video
              src={videoSrc}
              poster={poster}
              autoPlay
              loop
              muted
              playsInline
              className="block aspect-video w-full object-cover"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>

          <ul className="mt-6 space-y-2.5">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-gray-300">
                <Check size={16} className="mt-0.5 flex-none text-[#6C7BF0]" />
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>

          <p className="mt-7 text-lg font-semibold leading-relaxed text-gray-200">
            See how Terranode connects geotechnical, satellite, and sensor data
            into one powerful platform. Request a personalized demo and discover
            how our tools help infrastructure teams make faster, data-driven
            decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
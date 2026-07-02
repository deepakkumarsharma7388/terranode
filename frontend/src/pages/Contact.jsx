import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Mail, User, Building, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";

const videoSrc = "/terastamp-promo.mp4";
const poster = "/images/demo-preview-poster.png";

const benefits = [
  "A single platform for all your project data.",
  "Real-time dashboards and automated reporting.",
  "Smarter decisions backed by AI-based insights.",
  "24/7 support from experts who know your project.",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const LetsTalk = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [agree, setAgree] = useState(false);
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agree) {
      toast.error("Please accept the privacy policy.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          consent,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      toast.success("Request submitted successfully!", {
        icon: "✅",
        duration: 5000,
        style: {
          background: "#16A34A",
          color: "#FFFFFF",
          padding: "16px 24px",
          borderRadius: "12px",
          minWidth: "400px",
          textAlign: "center",
          fontWeight: "600",
          boxShadow: "0 10px 25px rgba(22,163,74,0.35)",
        },
      });

      setForm({ name: "", email: "", company: "", message: "" });
      setAgree(false);
      setConsent(false);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong", {
        style: {
          background: "#26282C",
          color: "#fff",
          border: "1px solid #ef4444",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-[#E2E5E9] bg-white px-4 py-3 text-sm text-[#32353A] placeholder-[#7C8595] transition-all duration-200 focus:border-[#F26418] focus:outline-none focus:ring-2 focus:ring-[#F26418]/30";

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <motion.div {...fadeUp()} className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#32353A] md:text-5xl">
            Let's <span className="text-[#F26418]">talk</span>
            <span className="ml-3 inline-block">👋</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-[#5C636E]">
            Book a demo, and we'll walk you through how TeraStamp can support your
            project and teams.
          </p>
        </motion.div>

        {/* Two‑column layout */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Form card – now 1px orange border */}
          <motion.div {...fadeUp(0.1)}>
            <div className="rounded-2xl border border-[#F26418]/30 bg-white p-6 shadow-sm md:p-8">
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-4">
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-[#32353A]">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7C8595]" />
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Jane Smith"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-[#32353A]">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7C8595]" />
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      placeholder="jane@company.com"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="mb-4">
                  <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-[#32353A]">
                    Company
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7C8595]" />
                    <input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={update("company")}
                      placeholder="Your company"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-[#32353A]">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-[#7C8595]" />
                    <textarea
                      id="message"
                      rows={3}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="How can we help you?"
                      className={`${inputClass} resize-y pl-10`}
                    />
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-3">
                  <label className="flex items-start gap-2.5 text-xs leading-snug text-[#5C636E]">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="mt-0.5 h-4 w-4 flex-none accent-[#F26418] transition-all"
                    />
                    <span>
                      I understand and agree that my data will be used according to the{" "}
                      <Link to="/privacy" className="text-[#F26418] hover:underline">
                        privacy policy
                      </Link>{" "}
                      and{" "}
                      <Link to="/gdpr" className="text-[#F26418] hover:underline">
                        GDPR regulations
                      </Link>
                      .
                    </span>
                  </label>

                  <label className="flex items-start gap-2.5 text-xs leading-snug text-[#5C636E]">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 flex-none accent-[#F26418] transition-all"
                    />
                    <span>
                      I give my consent to TeraStamp to send me electronic commercial
                      communication about their services.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!agree || loading}
                  className="mt-6 w-full rounded-lg bg-[#F26418] py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D9550F] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Submitting...
                    </div>
                  ) : (
                    "Request Demo"
                  )}
                </button>

                <p className="mt-4 text-center text-sm font-medium text-[#5C636E]">
                  Or email us directly at{" "}
                  <a
                    href="mailto:hello@terastamp.com"
                    className="text-[#F26418] underline hover:no-underline"
                  >
                    hello@terastamp.com
                  </a>
                </p>
              </form>
            </div>
          </motion.div>

          {/* Right — Video & Benefits */}
          <motion.div {...fadeUp(0.2)}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#32353A]">
                See TeraStamp in <span className="text-[#F26418]">Action</span>
              </h3>

              {/* Video card – border removed */}
              <div className="overflow-hidden rounded-2xl bg-black shadow-xl">
                <video
                  src={videoSrc}
                  poster={poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="aspect-video w-full object-cover"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>

              {/* Benefits cards – 1px semi-transparent orange border */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {benefits.map((b, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-lg border border-[#F26418]/30 bg-white p-3 text-[#5C636E] shadow-sm transition-shadow hover:shadow-md"
                  >
                    <Check size={16} className="mt-0.5 flex-none text-[#F26418]" />
                    <span className="text-sm">{b}</span>
                  </div>
                ))}
              </div>

              {/* Callout paragraph – 1px semi-transparent border */}
              <p className="rounded-xl border border-[#F26418]/30 bg-white p-5 text-base font-semibold leading-relaxed text-[#32353A] shadow-sm">
                See how TeraStamp brings geotechnical, satellite, and sensor data
                together into one powerful platform. Request a personalized demo and
                find out how our tools help infrastructure teams make faster,
                data-driven decisions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
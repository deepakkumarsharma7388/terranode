import { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import toast from "react-hot-toast";


const videoSrc = "/herovideo.mp4"; // <-- your video
const poster = "/images/demo-preview-poster.png"; // optional

const benefits = [
  "A single platform for all your project data.",
  "Real-time dashboards and automated reporting.",
  "Smarter decisions backed by AI-based insights.",
  "24/7 support from experts who know your project.",
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
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            company: form.company,
            message: form.message,
            consent,
          }),
        }
      );

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

      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });

      setAgree(false);
      setConsent(false);
    } catch (error) {
      console.error(error);

      toast.error(
        error.message || "Something went wrong",
        {
          style: {
            background: "#26282C",
            color: "#fff",
            border: "1px solid #ef4444",
          },
        }
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-[#E2E5E9] bg-[#F5F6F7] px-3.5 py-2.5 text-sm text-[#32353A] placeholder-[#7C8595] focus:outline-none focus:ring-2 focus:ring-[#F26418]/50";

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        {/* Left — form */}
        <div>
          <h2 className="text-5xl font-extrabold tracking-tight text-[#32353A]">
            Let's <span className="text-[#F26418]">talk</span>
          </h2>
          <div className="mt-4 text-3xl">👋</div>
          <p className="mt-2 max-w-sm text-[#5C636E]">
            Book a demo, and we'll walk you through how TeraStamp can support your
            project and teams.
          </p>

          <form onSubmit={handleSubmit} className="mt-7">
            <label className="mb-1.5 block text-sm font-semibold text-[#32353A]">
              Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={update("name")}
              placeholder="Jane Smith"
              className={inputClass}
            />

            <label className="mb-1.5 mt-4 block text-sm font-semibold text-[#32353A]">
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

            <label className="mb-1.5 mt-4 block text-sm font-semibold text-[#32353A]">
              Company
            </label>
            <input
              type="text"
              value={form.company}
              onChange={update("company")}
              placeholder="Your company"
              className={inputClass}
            />

            <label className="mb-1.5 mt-4 block text-sm font-semibold text-[#32353A]">
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
            <label className="mt-4 flex gap-2.5 text-xs leading-snug text-[#5C636E]">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-0.5 h-4 w-4 flex-none accent-[#F26418]"
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

            <label className="mt-3 flex gap-2.5 text-xs leading-snug text-[#5C636E]">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 flex-none accent-[#F26418]"
              />
              <span>
                I give my consent to TeraStamp to send me electronic commercial
                communication about their services.
              </span>
            </label>

            <button
              type="submit"
              disabled={!agree || loading}
              className="mt-5 w-full rounded-lg bg-[#F26418] py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D9550F] disabled:cursor-not-allowed disabled:opacity-50"
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

            <p className="mt-4 text-center text-sm font-semibold text-[#5C636E]">
              You can also reach us by email at:{" "}
              <a
                href="mailto:hello@terastamp.com"
                className="text-[#F26418] underline"
              >
                hello@terastamp.com
              </a>
            </p>
          </form>
        </div>

        {/* Right — video + benefits */}
        <div>
          <h3 className="text-xl font-bold text-[#32353A]">
            Request Your TeraStamp <span className="text-[#F26418]">Demo</span>
          </h3>

          <div className="mt-5 overflow-hidden rounded-xl border border-[#E2E5E9] bg-black">
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
              <li key={b} className="flex items-start gap-2.5 text-[#5C636E]">
                <Check size={16} className="mt-0.5 flex-none text-[#F26418]" />
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>

          <p className="mt-7 text-lg font-semibold leading-relaxed text-[#32353A]">
            See how TeraStamp brings geotechnical, satellite, and sensor data
            together into one powerful platform. Request a personalized demo and
            find out how our tools help infrastructure teams make faster,
            data-driven decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
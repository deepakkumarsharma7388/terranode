
import React, { useState, useMemo } from "react";
import {
  Search,
  Plus,
  User,
  X,
  ChevronRight,
  Rocket,
  Mail,
  CheckCircle2,
  Share2,
  Check,
  ArrowRight,
} from "lucide-react";

/* ================================================================== *
 *  TeraStamp Roadmap – Light theme with custom colors
 *  Colors: #F26418 (accent), #FFFFFF (background), #7C8595 (text)
 *  Heading: "Roadmap" in orange, rest black
 * ================================================================== */

const c = {
  section: "#FFFFFF",
  card: "#FFFFFF",
  cardHead: "#F8FAFC",
  tile: "#F9FAFB",
  tileHover: "#F1F3F5",
  border: "#D1D9E6",
  borderSoft: "#E2E8F0",
  heading: "#000000",
  text: "#7C8595",
  muted: "#7C8595",
  faint: "#A0AEC0",
  accent: "#F26418",
  accentSoft: "#F26418",
  accentText: "#FFFFFF",
  field: "#F8FAFC",
  cta: "#F26418",
  ctaText: "#FFFFFF",
  ctaBtn: "#FFFFFF",
};

/* ------------------------------------------------------------------ *
 *  IMAGE ENGINE — each card gets a unique generated "screenshot".
 *  You can also add a real image by providing `image: "/path.png"`
 *  in the card data – it will be used instead of the generated SVG.
 * ------------------------------------------------------------------ */
const seedFrom = (str) => {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};
const makeRng = (seed) => {
  let s = seed || 1;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
};

const CardImage = ({ card }) => {
  // If a real image is provided, use it
  if (card.image)
    return <img src={card.image} alt={card.title} className="h-full w-full object-cover" />;

  // Otherwise generate a unique SVG based on the card's kind
  const rng = makeRng(seedFrom(card.title));
  const hue = Math.floor(rng() * 360);
  const main = `hsl(${hue} 70% 55%)`;
  const soft = `hsl(${hue} 55% 78%)`;
  const paper = `hsl(${hue} 30% 96%)`;
  const grid = `hsl(${hue} 20% 88%)`;
  const box = { width: "100%", height: "100%", display: "block" };
  const k = card.kind;

  if (k === "line" || k === "area") {
    const pts = Array.from({ length: 7 }, (_, i) => [8 + i * 24, 24 + rng() * 46]);
    const path = pts.map((p) => p.join(",")).join(" ");
    return (
      <svg viewBox="0 0 160 90" style={box} preserveAspectRatio="none">
        <rect width="160" height="90" fill={paper} />
        {[22, 44, 66].map((y) => (
          <line key={y} x1="0" y1={y} x2="160" y2={y} stroke={grid} strokeWidth="0.6" />
        ))}
        {k === "area" && <polygon points={`8,90 ${path} 152,90`} fill={soft} opacity="0.6" />}
        <polyline points={path} fill="none" stroke={main} strokeWidth="2.4" />
        {pts.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="2.2" fill={main} />
        ))}
      </svg>
    );
  }
  if (k === "bars") {
    const bars = Array.from({ length: 9 }, () => 12 + rng() * 60);
    return (
      <svg viewBox="0 0 160 90" style={box} preserveAspectRatio="none">
        <rect width="160" height="90" fill={paper} />
        {bars.map((h, i) => (
          <rect key={i} x={10 + i * 16} y={84 - h} width="10" height={h} rx="1.5" fill={i % 3 === 0 ? main : soft} />
        ))}
      </svg>
    );
  }
  if (k === "table") {
    return (
      <svg viewBox="0 0 160 90" style={box} preserveAspectRatio="none">
        <rect width="160" height="90" fill={paper} />
        <rect width="160" height="15" fill={soft} />
        {Array.from({ length: 5 }, (_, r) => (
          <g key={r}>
            <rect x="6" y={22 + r * 13} width={18 + rng() * 34} height="4" rx="2" fill={main} opacity="0.75" />
            <rect x="70" y={22 + r * 13} width={20 + rng() * 30} height="4" rx="2" fill={grid} />
            <rect x="118" y={22 + r * 13} width={14 + rng() * 22} height="4" rx="2" fill={grid} />
          </g>
        ))}
      </svg>
    );
  }
  if (k === "map") {
    return (
      <svg viewBox="0 0 160 90" style={box} preserveAspectRatio="none">
        <rect width="160" height="90" fill={`hsl(${hue} 25% 92%)`} />
        <path d={`M0,${50 + rng() * 10} C40,${30 + rng() * 20} 80,70 120,50 150,40 160,55 160,55 L160,90 L0,90 Z`} fill={soft} opacity="0.7" />
        <path d={`M0,${68 + rng() * 8} C50,58 90,80 140,68 160,64 160,72 160,72 L160,90 L0,90 Z`} fill={main} opacity="0.35" />
        {Array.from({ length: 4 }, (_, i) => (
          <circle key={i} cx={20 + rng() * 120} cy={18 + rng() * 40} r="3" fill={main} />
        ))}
      </svg>
    );
  }
  if (k === "gauge") {
    const val = 0.25 + rng() * 0.6;
    const ang = Math.PI * (1 - val);
    const x = 80 + 46 * Math.cos(ang);
    const y = 68 - 46 * Math.sin(ang);
    return (
      <svg viewBox="0 0 160 90" style={box} preserveAspectRatio="none">
        <rect width="160" height="90" fill={paper} />
        <path d="M34,68 A46,46 0 0 1 126,68" fill="none" stroke={grid} strokeWidth="9" strokeLinecap="round" />
        <path d={`M34,68 A46,46 0 0 1 ${x},${y}`} fill="none" stroke={main} strokeWidth="9" strokeLinecap="round" />
        <circle cx="80" cy="68" r="4" fill={main} />
        <text x="80" y="50" textAnchor="middle" fontSize="16" fontWeight="700" fill={main}>
          {Math.round(val * 100)}
        </text>
      </svg>
    );
  }
  if (k === "donut") {
    const a = 0.2 + rng() * 0.4;
    const b = 0.15 + rng() * 0.35;
    const seg = (start, frac, color) => {
      const s = start * 2 * Math.PI - Math.PI / 2;
      const e = (start + frac) * 2 * Math.PI - Math.PI / 2;
      const large = frac > 0.5 ? 1 : 0;
      const r = 30;
      return (
        <path
          d={`M80,45 L${80 + r * Math.cos(s)},${45 + r * Math.sin(s)} A${r},${r} 0 ${large} 1 ${80 + r * Math.cos(e)},${45 + r * Math.sin(e)} Z`}
          fill={color}
        />
      );
    };
    return (
      <svg viewBox="0 0 160 90" style={box} preserveAspectRatio="none">
        <rect width="160" height="90" fill={paper} />
        {seg(0, a, main)}
        {seg(a, b, soft)}
        {seg(a + b, 1 - a - b, grid)}
        <circle cx="80" cy="45" r="15" fill={paper} />
      </svg>
    );
  }
  if (k === "heatmap") {
    return (
      <svg viewBox="0 0 160 90" style={box} preserveAspectRatio="none">
        <rect width="160" height="90" fill={paper} />
        {Array.from({ length: 7 }, (_, x) =>
          Array.from({ length: 4 }, (_, y) => (
            <rect key={`${x}-${y}`} x={10 + x * 21} y={8 + y * 19} width="18" height="16" rx="2" fill={main} opacity={(0.15 + rng() * 0.8).toFixed(2)} />
          ))
        )}
      </svg>
    );
  }
  // fallback: kanban-like
  return (
    <svg viewBox="0 0 160 90" style={box} preserveAspectRatio="none">
      <rect width="160" height="90" fill={paper} />
      {[0, 1, 2].map((col) => (
        <g key={col}>
          <rect x={8 + col * 50} y="8" width="44" height="74" rx="4" fill={`hsl(${hue} 25% 90%)`} />
          {Array.from({ length: 1 + Math.floor(rng() * 3) }, (_, i) => (
            <rect key={i} x={12 + col * 50} y={14 + i * 18} width="36" height="14" rx="2" fill={i === 0 ? main : soft} opacity={i === 0 ? 0.85 : 0.7} />
          ))}
        </g>
      ))}
    </svg>
  );
};

/* small helper: render a paragraph that may contain bold segments */
const Rich = ({ parts }) => {
  if (typeof parts === "string") return <span>{parts}</span>;
  return (
    <>
      {parts.map((p, i) =>
        p.b ? (
          <strong key={i} className="font-semibold" style={{ color: c.heading }}>
            {p.t}
          </strong>
        ) : (
          <span key={i}>{p.t}</span>
        )
      )}
    </>
  );
};

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* ------------------------------------------------------------------ *
 *  DATA — one project per launch year (2020 → 2026)
 *  Each card can optionally have an `image` field for a real screenshot.
 * ------------------------------------------------------------------ */
const roadmap = [
  {
    id: "2020",
    label: "LAUNCHED! (2020)",
    months: [
      {
        name: "MAY 2020",
        cards: [
          {
            title: "LA Purple Line Extension (Section 2)",
            votes: 0,
            kind: "map",
            author: "TERASTAMP",
            postedOn: "May 15",
            image: "/la-purple-line-section2.jpg",
            intro: [
              "TeraStamp was first deployed on the LA Purple Line Extension (Section 2), providing comprehensive digital monitoring for tunnel excavation and station construction.",
              "This project marked the beginning of our journey in transforming infrastructure monitoring through real‑time data and actionable insights.",
            ],
            features: [
              { lead: "End‑to‑end monitoring:", text: "Integrated sensors across the entire 4‑mile tunnel alignment." },
              { lead: "Centralized dashboard:", text: "All data streams consolidated into a single, accessible platform." },
              { lead: "Automated reporting:", text: "Daily and weekly reports generated without manual effort." },
            ],
            steps: [
              { text: "Deployed instrumentation network across the project site." },
              { lead: "Configured alert thresholds:", text: "Set up real‑time notifications for critical deviations." },
              { lead: "Trained team members:", text: "Onboarded engineers and field staff to use the platform." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2023",
    label: "LAUNCHED! (2023)",
    months: [
      {
        name: "OCT 2023",
        cards: [
          {
            title: "LA Purple Line 3 Tunnels",
            votes: 0,
            kind: "line",
            author: "TERASTAMP",
            postedOn: "October 10",
            image: "/la-purple-line-3-tunnels.jpg",
            intro: [
              "With the expansion of the Purple Line to include three new tunnel sections, TeraStamp was extended to handle the increased complexity and volume of monitoring data.",
              "The platform's scalability and reliability were put to the test and proved essential for managing the project's rigorous demands.",
            ],
            features: [
              { lead: "Multi‑site synchronization:", text: "All three tunnel sections monitored in unison." },
              { lead: "Advanced analytics:", text: "Trend analysis and predictive modeling for ground movement." },
              { lead: "Collaborative tools:", text: "Shared dashboards and real‑time commenting for team alignment." },
            ],
            steps: [
              { text: "Extended the existing monitoring network to the new tunnels." },
              { lead: "Configured custom views:", text: "Created specific dashboards for each tunnel section." },
              { lead: "Integrated with existing workflows:", text: "Connected with project management and BIM systems." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2024",
    label: "LAUNCHED! (2024)",
    months: [
      {
        name: "SEP 2024",
        cards: [
          {
            title: "LA Purple Line 3 Stations",
            votes: 0,
            kind: "table",
            author: "TERASTAMP",
            postedOn: "September 5",
            image: "/la-purple-line-3-stations.jpg",
            intro: [
              "The third phase of the Purple Line focused on three new station boxes, each with unique geotechnical challenges. TeraStamp provided the monitoring backbone to ensure safe and efficient construction.",
            ],
            features: [
              { lead: "Station‑specific instrumentation:", text: "Tailored sensor arrays for each station's ground conditions." },
              { lead: "Real‑time structural health:", text: "Continuous monitoring of diaphragm walls and shoring systems." },
              { lead: "Automated alarm escalation:", text: "Multi‑level alerts for progressive response." },
            ],
            steps: [
              { text: "Deployed instrumentation for each station box." },
              { lead: "Set up station‑level dashboards:", text: "Separate views for each construction site." },
              { lead: "Established reporting cadence:", text: "Daily progress reports pushed to all stakeholders." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2025",
    label: "LAUNCHED! (2025)",
    months: [
      {
        name: "JUL 2025",
        cards: [
          {
            title: "VTA's BART Phase II — CP2 EWP 3C",
            votes: 0,
            kind: "gauge",
            author: "TERASTAMP",
            postedOn: "July 20",
            image: "/vta-bart-phase2-cp2.jpg",
            intro: [
              "TeraStamp was selected for the VTA BART Phase II extension, specifically for the CP2 EWP 3C package. This high‑profile project required robust monitoring for tunnel boring machine (TBM) operations and ground movement.",
            ],
            features: [
              { lead: "TBM performance tracking:", text: "Real‑time data on thrust, torque, and cutterhead wear." },
              { lead: "Settlement monitoring:", text: "High‑precision sensors along the entire alignment." },
              { lead: "Integration with 3D models:", text: "Live data overlaid on BIM models for spatial context." },
            ],
            steps: [
              { text: "Installed monitoring equipment along the TBM route." },
              { lead: "Configured TBM dashboards:", text: "Displayed critical performance metrics at a glance." },
              { lead: "Linked with project control room:", text: "Enabled remote monitoring and decision support." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2026",
    label: "LAUNCHED! (2026)",
    months: [
      {
        name: "JUN 2026",
        cards: [
          {
            title: "TeraStamp Platform Update: AI-Powered Monitoring Suite",
            votes: 0,
            kind: "area",
            author: "TERASTAMP",
            postedOn: "June 1",
            // image: "/path-to-screenshot.png",
            intro: [
              "In 2026, TeraStamp introduced a major platform update centered around artificial intelligence. The new AI‑Powered Monitoring Suite brings predictive analytics, automated anomaly detection, and intelligent reporting to every project.",
              "This release represents a leap forward in turning raw data into proactive decisions, reducing risk and improving outcomes for infrastructure teams.",
            ],
            features: [
              { lead: "Predictive Insights:", text: "AI models forecast potential issues before they occur." },
              { lead: "Anomaly Detection:", text: "Automated identification of unusual patterns across all instruments." },
              { lead: "Intelligent Summaries:", text: "GEO AI generates concise daily digests tailored to each user." },
              { lead: "Enhanced Visualizations:", text: "Interactive 3D and time‑lapse views for better understanding." },
            ],
            steps: [
              { text: "Enable AI features from the Settings panel." },
              { lead: "Configure AI thresholds:", text: "Set sensitivity levels for anomaly detection." },
              { lead: "Access AI reports:", text: "View daily, weekly, or custom‑period summaries." },
            ],
          },
        ],
      },
    ],
  },
];

// Ratings and feedback components (unchanged)
const RATINGS = ["I'VE NEVER USED IT", "NOT BAD", "IT'S GOOD", "I LOVE IT"];

const RatingRow = ({ value, onChange }) => (
  <div className="flex flex-wrap gap-2">
    {RATINGS.map((r) => {
      const active = value === r;
      return (
        <button
          key={r}
          type="button"
          onClick={() => onChange(r)}
          className="rounded-md px-3 py-2 text-[11px] font-semibold tracking-wide transition-colors"
          style={{ background: active ? c.accent : c.field, color: active ? "#fff" : c.muted, border: `1px solid ${active ? c.accent : c.border}` }}
        >
          {r}
        </button>
      );
    })}
  </div>
);

const FeedbackForm = ({ onDone, reasonPlaceholder }) => {
  const [rating, setRating] = useState(null);
  const [reason, setReason] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    onDone({ rating, reason, email });
  };

  return (
    <div>
      <div className="space-y-2 border-t pt-5" style={{ borderColor: c.borderSoft }}>
        <p className="text-sm font-medium" style={{ color: c.text }}>
          How do you feel about this feature?
        </p>
        <RatingRow value={rating} onChange={setRating} />
      </div>

      <textarea
        rows={3}
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder={reasonPlaceholder}
        className="mt-4 w-full resize-none rounded-lg px-3 py-2.5 text-sm outline-none"
        style={{ background: c.field, color: c.text, border: `1px solid ${c.accent}` }}
      />

      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-lg px-3" style={{ background: c.field, border: `1px solid ${error ? "#e0556e" : c.border}` }}>
          <Mail size={16} style={{ color: c.faint }} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full bg-transparent py-2.5 text-sm outline-none"
            style={{ color: c.text }}
          />
        </div>
        <button onClick={submit} className="rounded-lg px-6 py-2.5 text-sm font-semibold text-white" style={{ background: c.accent }}>
          Submit
        </button>
      </div>
      {error && <p className="mt-2 text-xs" style={{ color: "#e0809a" }}>{error}</p>}

      <div className="mt-5 flex flex-col gap-2 border-t pt-4 text-[11px] sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: c.borderSoft, color: c.faint }}>
        <span className="flex items-center gap-1.5">
          Powered by <ChevronRight size={11} /> <span className="font-semibold">TeraStamp</span>
        </span>
        <span>Do Not Sell or Share My Personal Information</span>
      </div>
    </div>
  );
};

const Modal = ({ children, onClose, wide }) => (
  <div
    className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-3 sm:p-8"
    style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(2px)" }}
    onClick={onClose}
  >
    <div
      className={`relative my-auto w-full ${wide ? "max-w-3xl" : "max-w-xl"} rounded-2xl shadow-2xl`}
      style={{ background: c.card, border: `1px solid ${c.border}` }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full"
        style={{ background: "rgba(0,0,0,0.1)", color: c.text }}
      >
        <X size={18} />
      </button>
      {children}
    </div>
  </div>
);

const Submitted = ({ onClose }) => (
  <div className="flex flex-col items-center gap-3 px-6 py-14 text-center">
    <CheckCircle2 size={44} style={{ color: c.accent }} />
    <h3 className="text-lg font-semibold" style={{ color: c.heading }}>
      Thank you for sharing
    </h3>
    <p className="max-w-xs text-sm" style={{ color: c.text }}>
      Every response is matched back to the roadmap and helps steer what we work on next.
    </p>
    <button onClick={onClose} className="mt-2 rounded-lg px-5 py-2 text-sm font-semibold text-white" style={{ background: c.accent }}>
      Done
    </button>
  </div>
);

const SubmitIdeaModal = ({ onClose }) => {
  const [sent, setSent] = useState(false);
  return (
    <Modal onClose={onClose}>
      {sent ? (
        <Submitted onClose={onClose} />
      ) : (
        <div className="px-6 pb-6 pt-12 sm:px-8">
          <h3 className="mb-5 text-xl font-bold" style={{ color: c.heading }}>
            Share a new idea
          </h3>
          <textarea
            rows={4}
            placeholder="What would you like to be able to do, and how would it help your work?"
            className="w-full resize-none rounded-lg px-3 py-2.5 text-sm outline-none"
            style={{ background: c.field, color: c.text, border: `1px solid ${c.accent}` }}
          />
          <div className="mt-5">
            <FeedbackForm onDone={() => setSent(true)} reasonPlaceholder="Anything else we should know? (Optional)" />
          </div>
        </div>
      )}
    </Modal>
  );
};

const FeatureModal = ({ feature, onClose }) => {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const link =
      typeof window !== "undefined"
        ? `${window.location.origin}${window.location.pathname}#${slugify(feature.title)}`
        : `#${slugify(feature.title)}`;
    try {
      await navigator.clipboard.writeText(link);
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = link;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (_) {}
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <Modal onClose={onClose} wide>
      <div className="max-h-[88vh] overflow-y-auto">
        {/* hero image – shown inside the modal */}
        <div className="overflow-hidden rounded-t-2xl" style={{ height: 220, background: "#e2e8f0" }}>
          <CardImage card={feature} />
        </div>

        <div className="px-5 py-5 sm:px-8 sm:py-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold leading-tight sm:text-3xl" style={{ color: c.heading }}>
              {feature.title}
            </h3>
            <div className="flex shrink-0 items-center gap-3">
              <div className="relative">
                <button onClick={share} aria-label="Copy link" className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: c.field, border: `1px solid ${c.border}`, color: copied ? "#38a169" : c.muted }}>
                  {copied ? <Check size={17} /> : <Share2 size={16} />}
                </button>
                {copied && (
                  <span className="absolute right-0 top-11 whitespace-nowrap rounded-md px-2 py-1 text-[11px] font-medium" style={{ background: c.card, border: `1px solid ${c.border}`, color: c.text }}>
                    Link copied!
                  </span>
                )}
              </div>
              <span className="flex items-center gap-1 text-sm" style={{ color: c.faint }}>
                <User size={15} /> {feature.votes}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: c.accent }}>
              {feature.author.slice(0, 1)}
            </div>
            <span className="text-sm font-bold tracking-wide" style={{ color: c.heading }}>
              {feature.author}
            </span>
            <span style={{ color: c.faint }}>|</span>
            <span className="text-sm" style={{ color: c.text }}>
              Posted on {feature.postedOn}
            </span>
          </div>

          {sent ? (
            <Submitted onClose={onClose} />
          ) : (
            <>
              <div className="mt-5 space-y-3 border-t pt-5 text-sm leading-relaxed sm:text-[15px]" style={{ borderColor: c.borderSoft, color: c.text }}>
                {feature.intro.map((p, i) => (
                  <p key={i}>
                    <Rich parts={p} />
                  </p>
                ))}
              </div>

              <h4 className="mt-6 mb-2 text-lg font-bold" style={{ color: c.heading }}>
                Key Features &amp; Benefits
              </h4>
              <ul className="space-y-2.5 text-sm leading-relaxed" style={{ color: c.text }}>
                {feature.features.map((f, i) => (
                  <li key={i}>
                    <span className="mr-1.5" style={{ color: c.accent }}>•</span>
                    <strong className="font-semibold" style={{ color: c.heading }}>{f.lead}</strong> {f.text}
                    {f.children && (
                      <ul className="mt-2 space-y-2 pl-6">
                        {f.children.map((ch, j) => (
                          <li key={j}>
                            <span className="mr-1.5" style={{ color: c.faint }}>◦</span>
                            <strong className="font-semibold" style={{ color: c.heading }}>{ch.lead}</strong> {ch.text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <h4 className="mt-6 mb-2 text-lg font-bold" style={{ color: c.heading }}>
                How to Use It
              </h4>
              <ol className="space-y-2.5 text-sm leading-relaxed" style={{ color: c.text }}>
                {feature.steps.map((s, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="font-bold" style={{ color: c.accent }}>{i + 1}.</span>
                    <span>
                      {s.lead && <strong className="font-semibold" style={{ color: c.heading }}>{s.lead} </strong>}
                      {s.text}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-7">
                <FeedbackForm onDone={() => setSent(true)} reasonPlaceholder="Why would this help you? (Anything you share helps us make the product better for you.)" />
              </div>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

/* ===================================================== *
 *  FEATURE CARD — now with permanent orange border,
 *  larger width (2‑col grid), and taller image (140px).
 * ===================================================== */
const FeatureCard = ({ card, onOpen }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={() => onOpen(card)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group flex w-full flex-col overflow-hidden rounded-xl text-left transition-colors"
      style={{
        background: hover ? c.tileHover : c.tile,
        border: `2px solid ${c.accent}`, // permanent orange border
      }}
    >
      <div className="flex items-start justify-between gap-3 p-4 pb-2">
        <span className="text-sm font-semibold leading-snug" style={{ color: c.heading }}>{card.title}</span>
        <span className="flex shrink-0 items-center gap-1 text-xs" style={{ color: c.faint }}>
          <User size={13} /> {card.votes}
        </span>
      </div>
      {/* Image — now taller (h-40 = 160px) */}
      <div className="mx-3 mb-3 mt-auto overflow-hidden rounded-md" style={{ border: `1px solid ${c.border}`, height: 160 }}>
        <CardImage card={card} />
      </div>
    </button>
  );
};

const MonthDivider = ({ name }) => (
  <div className="flex items-center gap-4 py-4">
    <div className="h-px flex-1" style={{ background: c.borderSoft }} />
    <span className="text-xs font-bold tracking-widest" style={{ color: c.muted }}>{name}</span>
    <div className="h-px flex-1" style={{ background: c.borderSoft }} />
  </div>
);



const TeraStampRoadmap = () => {
  // Default to 2020 (the earliest launch year)
  const [activeYear, setActiveYear] = useState("2020");
  const [openFeature, setOpenFeature] = useState(null);
  const [showSubmit, setShowSubmit] = useState(false);
  const [query, setQuery] = useState("");

  const current = useMemo(() => roadmap.find((y) => y.id === activeYear), [activeYear]);

  const months = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return current.months;
    return current.months
      .map((m) => ({ ...m, cards: m.cards.filter((card) => card.title.toLowerCase().includes(q)) }))
      .filter((m) => m.cards.length);
  }, [current, query]);

  return (
    <section className="w-full px-5 py-16 sm:px-8 lg:py-24" style={{ background: c.section }}>
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl" style={{ color: "#000000" }}>
          About the TeraStamp <span style={{ color: c.accent }}>Roadmap</span>
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed" style={{ color: c.text }}>
          Follow along as TeraStamp evolves. Explore what's on the way, watch features take shape, and
          tell us what you think through our roadmap and wishlist. Every update moves us closer to
          infrastructure monitoring that's more connected, more adaptable, and more driven by your data.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl shadow-2xl" style={{ background: c.card, border: `1px solid ${c.border}` }}>
          <div className="flex flex-wrap items-center gap-3 px-4 py-3.5 sm:px-6" style={{ background: c.cardHead, borderBottom: `1px solid ${c.borderSoft}` }}>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: c.accent }}>
              <Rocket size={18} className="text-white" />
            </div>
            <span className="text-base font-bold" style={{ color: c.heading }}>TeraStamp Portal</span>
            <div className="ml-auto flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2 rounded-lg px-2.5" style={{ background: c.field, border: `1px solid ${c.border}` }}>
                <Search size={15} style={{ color: c.faint }} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search"
                  className="w-20 bg-transparent py-1.5 text-sm outline-none focus:w-32 sm:w-24"
                  style={{ color: c.text, transition: "width .2s" }}
                />
              </div>
              <button onClick={() => setShowSubmit(true)} className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold" style={{ background: c.accent, color: "#fff" }}>
                <Plus size={16} /> Submit idea
              </button>
            </div>
          </div>

          <div className="flex gap-1 overflow-x-auto px-2 sm:px-4" style={{ borderBottom: `1px solid ${c.borderSoft}` }}>
            {roadmap.map((y) => {
              const active = y.id === activeYear;
              return (
                <button
                  key={y.id}
                  onClick={() => { setActiveYear(y.id); setQuery(""); }}
                  className="flex shrink-0 items-center gap-1.5 whitespace-nowrap px-3 py-3 text-xs font-semibold tracking-wide"
                  style={{ color: active ? c.accent : c.muted, borderBottom: `2px solid ${active ? c.accent : "transparent"}` }}
                >
                  <Rocket size={13} style={{ color: active ? c.accent : c.faint }} />
                  {y.label}
                </button>
              );
            })}
          </div>

          <div className="max-h-[560px] overflow-y-auto px-4 pb-6 sm:px-6">
            {months.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-sm font-medium" style={{ color: c.text }}>No features match “{query}”.</p>
                <p className="mt-1 text-sm" style={{ color: c.faint }}>Try a different term, or add it as a new idea.</p>
              </div>
            ) : (
              months.map((m) => (
                <div key={m.name}>
                  <MonthDivider name={m.name} />
                  {/* 2‑column grid for wider cards */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {m.cards.map((card) => (
                      <FeatureCard key={card.title} card={card} onOpen={setOpenFeature} />
                    ))}
                  </div>
                </div>
              ))
            )}
            <div className="mt-8 flex items-center justify-center gap-1.5 text-xs" style={{ color: c.faint }}>
              <span>Powered by</span>
              <ChevronRight size={12} />
              <span className="font-semibold">TeraStamp</span>
            </div>
          </div>
        </div>
      </div>

      

      {showSubmit && <SubmitIdeaModal onClose={() => setShowSubmit(false)} />}
      {openFeature && <FeatureModal feature={openFeature} onClose={() => setOpenFeature(null)} />}
    </section>
  );
};






const Roadmap = () => {
  return (
    <div>
      <TeraStampRoadmap/>
    </div>
  )
}

export default Roadmap
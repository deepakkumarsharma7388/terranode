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
  heading: "#000000",        // black for main headings (except highlighted word)
  text: "#7C8595",          // main body text
  muted: "#7C8595",
  faint: "#A0AEC0",
  accent: "#F26418",        // primary orange
  accentSoft: "#F26418",
  accentText: "#FFFFFF",    // text on accent buttons
  field: "#F8FAFC",
  cta: "#F26418",
  ctaText: "#FFFFFF",
  ctaBtn: "#FFFFFF",
};

/* ------------------------------------------------------------------ *
 *  IMAGE ENGINE — each card gets a unique generated "screenshot".
 *  Give a card  image: "/path.png"  to use a real image instead.
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
  if (card.image)
    return <img src={card.image} alt={card.title} className="h-full w-full object-cover" />;

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
 *  DATA — full English content per card.
 * ------------------------------------------------------------------ */
const roadmap = [
  {
    id: "2026",
    label: "LAUNCHED! (2026)",
    months: [
      {
        name: "MAY 2026",
        cards: [
          {
            title: "AI Insights",
            votes: 0,
            kind: "line",
            author: "TERASTAMP",
            postedOn: "May 12",
            intro: [
              [
                { t: "We're shrinking the distance between raw measurements and the decisions they should drive, thanks to our newest addition: " },
                { t: 'AI-powered "Get Insights", driven by GEO Chat.', b: true },
              ],
              "Rather than picking apart dense graphs or tracing every alert back to its origin by hand, you can now pass that effort to GEO, our built-in AI assistant. A single click is all it takes — GEO gathers the full context around your data and replies with a detailed breakdown in just seconds.",
            ],
            features: [
              { lead: 'Context-aware "Get Insights" button:', text: 'You\'ll find the new "Get Insights" action right on your charts and inside the Alerts screen.' },
              {
                lead: "Context shared for you:",
                text: "No need to write out long descriptions — GEO collects everything on its own:",
                children: [
                  { lead: "On charts:", text: "A snapshot of what you're currently viewing, including every instrument and field you've selected." },
                  { lead: "On alerts:", text: "The details of the active alert together with the earlier alert history for that specific instrument." },
                ],
              },
              { lead: "Smart interpretation:", text: "GEO studies the trends, flags anything out of the ordinary, and weighs it against past behaviour to explain both what's going on and why." },
              { lead: "Live progress updates:", text: "Because a deep analysis takes a moment, GEO keeps you posted with real-time status as it works." },
            ],
            steps: [
              { text: "Open the chart you'd like to dig into, or jump to an active alert in your log." },
              { lead: 'Press "Get Insights".', text: "Look for it in the chart's top-right corner or right beside the alert row." },
              { lead: "Let GEO take it from here:", text: "The GEO panel opens on its own, attaches the relevant snapshot or alert history, and begins its review." },
              { lead: "Read the summary:", text: "Once it wraps up, GEO hands you a tidy rundown of the main findings along with suggested next steps." },
            ],
          },
          {
            title: "Security & Connectivity: OIDC Authentication",
            votes: 0,
            kind: "table",
            author: "TERASTAMP",
            postedOn: "May 8",
            intro: ["Sign in to TeraStamp through your own identity provider using OpenID Connect. There's no longer a separate password to manage per person — access simply mirrors the systems your team already depends on."],
            features: [
              { lead: "Single sign-on:", text: "Wire up providers such as Azure AD or Okta so people log in with the credentials they already have." },
              { lead: "Hands-off provisioning:", text: "Roles and permissions flow straight in from your provider, so any access change applies right away." },
              { lead: "Audit-ready logs:", text: "Each sign-in is captured for compliance checks and security reviews." },
            ],
            steps: [
              { text: "Head to Settings and choose Authentication." },
              { lead: "Register your provider:", text: "Enter your OIDC client ID, secret, and issuer URL." },
              { lead: "Match your roles:", text: "Link provider groups to TeraStamp roles, then switch on SSO for the workspace." },
            ],
          },
        ],
      },
      {
        name: "APR 2026",
        cards: [
          {
            title: "New Instrument States",
            votes: 0,
            kind: "gauge",
            author: "TERASTAMP",
            postedOn: "April 22",
            intro: ["Every instrument now shows a clear, colour-coded state, making it simple to catch trouble at a glance across your whole network."],
            features: [
              { lead: "Status in real time:", text: "Active, warning, and offline states refresh live for each sensor." },
              { lead: "Hands-free flagging:", text: "Stalled or offline instruments get highlighted automatically — no manual checking needed." },
              { lead: "State history:", text: "Trace how an instrument's state shifted over time to investigate earlier issues." },
            ],
            steps: [
              { text: "Open any site to view instrument states on both the map and the list." },
              { lead: "Filter by state:", text: "Narrow to just warnings or offline units so you can focus on what needs attention." },
            ],
          },
          {
            title: "Table widget for dashboard",
            votes: 0,
            kind: "table",
            author: "TERASTAMP",
            postedOn: "April 15",
            intro: ["Drop a configurable table onto any dashboard and line up readings from many instruments side by side."],
            features: [
              { lead: "Pick your columns:", text: "Choose the fields that matter and rearrange them with a simple drag." },
              { lead: "Sort and filter inline:", text: "Shape the data without ever leaving the widget." },
              { lead: "One-click export:", text: "Send the table to CSV instantly." },
            ],
            steps: [
              { text: "Edit a dashboard and drop in the Table widget." },
              { lead: "Set it up:", text: "Choose your instruments and columns, then save the layout." },
            ],
          },
          {
            title: "Multi-condition filtering for Alerts",
            votes: 0,
            kind: "bars",
            author: "TERASTAMP",
            postedOn: "April 3",
            intro: ["Cut through the noise by filtering alerts on several conditions at once, so only the relevant ones reach you."],
            features: [
              { lead: "Stack conditions:", text: "Filter across site, severity, and instrument type using AND/OR logic." },
              { lead: "Reusable views:", text: "Save the filters you rely on and share them with your team." },
              { lead: "Act in bulk:", text: "Acknowledge or clear the filtered alerts together." },
            ],
            steps: [
              { text: "Go to the Alerts view and open Filter." },
              { lead: "Define your rule:", text: "Add the conditions, then store the view for next time." },
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
        name: "NOV 2025",
        cards: [
          {
            title: "Time-lapse camera instrument",
            votes: 0,
            kind: "map",
            author: "TERASTAMP",
            postedOn: "November 19",
            intro: ["Bring a camera feed in as just another instrument and follow how a site changes over time."],
            features: [
              { lead: "Automatic capture:", text: "Snapshots are recorded on whatever schedule you set." },
              { lead: "Replay anytime:", text: "Scrub through the time-lapse directly from the dashboard." },
              { lead: "Synced with data:", text: "Match the image timeline to sensor readings to see what caused what." },
            ],
            steps: [
              { text: "Add a camera as a new instrument." },
              { lead: "Choose the interval:", text: "Decide how often snapshots are taken, then open replay." },
            ],
          },
          {
            title: "Relative Calculation for Inclinometers",
            votes: 0,
            kind: "area",
            author: "TERASTAMP",
            postedOn: "November 6",
            intro: ["Inclinometer data can now be referenced against any chosen depth, giving you a more precise read on movement."],
            features: [
              { lead: "Choose a baseline:", text: "Set any point along the profile as your reference." },
              { lead: "Both perspectives:", text: "View cumulative and incremental movement side by side." },
              { lead: "Refreshes itself:", text: "Values update automatically whenever new data lands." },
            ],
            steps: [
              { text: "Open an inclinometer chart." },
              { lead: "Set the reference:", text: "Pick the reference depth and the chart recalculates on the spot." },
            ],
          },
          {
            title: "Trends",
            votes: 0,
            kind: "line",
            author: "TERASTAMP",
            postedOn: "November 1",
            intro: ["Layer data from several instruments together to grasp long-term behaviour and spot patterns sooner."],
            features: [
              { lead: "Overlay instruments:", text: "Show several series together on a single chart." },
              { lead: "Flexible time spans:", text: "Move from hours to years with one control." },
              { lead: "Patterns made clear:", text: "Trend lines and seasonal cycles are easy to read." },
            ],
            steps: [
              { text: "Open the Trends view." },
              { lead: "Add your instruments:", text: "Choose the series to compare and set a time span." },
            ],
          },
        ],
      },
      {
        name: "JUL 2025",
        cards: [
          {
            title: "Global File Search",
            votes: 0,
            kind: "table",
            author: "TERASTAMP",
            postedOn: "July 24",
            intro: ["Track down documents, reports, and attachments from anywhere in your account using one search bar."],
            features: [
              { lead: "Search it all:", text: "Match against both file names and their contents." },
              { lead: "Helpful filters:", text: "Trim results by site and file type." },
              { lead: "Recent files:", text: "Return quickly to whatever you opened last." },
            ],
            steps: [
              { text: "Click the search icon in the top bar." },
              { lead: "Enter a term:", text: "Open a match or fine-tune it with filters." },
            ],
          },
          {
            title: "Custom dashboard exports",
            votes: 0,
            kind: "donut",
            author: "TERASTAMP",
            postedOn: "July 9",
            intro: ["Save any dashboard as a PDF or image, complete with your layout and branding, ready to slot straight into a report."],
            features: [
              { lead: "PDF or PNG:", text: "Pick whichever format suits your report." },
              { lead: "Scheduled delivery:", text: "Have exports emailed to you on a repeating schedule." },
              { lead: "Branding intact:", text: "Your layout and logos carry across unchanged." },
            ],
            steps: [
              { text: "Open a dashboard and click Export." },
              { lead: "Select a format:", text: "Download straight away or set up a schedule." },
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
            title: "Threshold-based notifications",
            votes: 0,
            kind: "bars",
            author: "TERASTAMP",
            postedOn: "September 18",
            intro: ["Define thresholds on any instrument and be alerted the instant a reading crosses the line."],
            features: [
              { lead: "Several tiers:", text: "Set distinct warning and critical thresholds." },
              { lead: "Your channels:", text: "Receive alerts by email, SMS, or in-app." },
              { lead: "Adjustable scope:", text: "Apply the rule to a single instrument or an entire site." },
            ],
            steps: [
              { text: "Open an instrument's settings." },
              { lead: "Create a threshold:", text: "Enter the value and pick how you'd like to be notified." },
            ],
          },
          {
            title: "Site grouping & permissions",
            votes: 0,
            kind: "kanban",
            author: "TERASTAMP",
            postedOn: "September 5",
            intro: ["Arrange sites into groups and decide exactly who can reach each one."],
            features: [
              { lead: "Nested groups:", text: "Shape sites to fit the way your teams operate." },
              { lead: "Access by role:", text: "Grant permissions group by group." },
              { lead: "Assign in bulk:", text: "Add people to many sites at once." },
            ],
            steps: [
              { text: "Open Settings and select Sites." },
              { lead: "Build a group:", text: "Add sites, then hand roles to users." },
            ],
          },
          {
            title: "Bulk instrument import",
            votes: 0,
            kind: "table",
            author: "TERASTAMP",
            postedOn: "September 2",
            intro: ["Bring in many instruments at once from a spreadsheet instead of entering them one at a time."],
            features: [
              { lead: "Template support:", text: "Begin from a CSV or Excel template." },
              { lead: "Built-in checks:", text: "Spot errors before anything gets imported." },
              { lead: "Fix and re-run:", text: "Correct any flagged rows and upload again." },
            ],
            steps: [
              { text: "Open Instruments and click Import." },
              { lead: "Add your file:", text: "Look over the validation results, then confirm." },
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
            title: "Calculation formulas",
            votes: 0,
            kind: "table",
            author: "TERASTAMP",
            postedOn: "October 27",
            intro: ["Convert raw readings into values that matter using your own calculated channels."],
            features: [
              { lead: "Plenty of functions:", text: "Apply arithmetic and statistical operations." },
              { lead: "Mix instruments:", text: "Pull several inputs into one formula." },
              { lead: "Use them anywhere:", text: "Bring calculated channels into charts and alerts." },
            ],
            steps: [
              { text: "Open the Calculations panel." },
              { lead: "Compose a formula:", text: "Reference your instruments and save the channel." },
            ],
          },
          {
            title: "Map layer to show 3D Buildings",
            votes: 0,
            kind: "map",
            author: "TERASTAMP",
            postedOn: "October 19",
            intro: ["Switch on a 3D buildings layer so instruments make sense within their real-world surroundings."],
            features: [
              { lead: "3D footprints:", text: "View buildings drawn in context." },
              { lead: "Place instruments:", text: "Position sensors against the structures they watch over." },
              { lead: "Camera controls:", text: "Tilt and spin for the clearest angle." },
            ],
            steps: [
              { text: "Open the map and click Layers." },
              { lead: "Turn on 3D buildings:", text: "Tilt the view to explore." },
            ],
          },
          {
            title: "New tag creation on Dropdown tags",
            votes: 0,
            kind: "kanban",
            author: "TERASTAMP",
            postedOn: "October 12",
            intro: ["Add a brand-new tag straight from the dropdown without stepping away from what you're doing."],
            features: [
              { lead: "Create inline:", text: "Type a fresh tag and add it then and there." },
              { lead: "Ready instantly:", text: "New tags show up everywhere right away." },
              { lead: "Colour-coded:", text: "Tell your tags apart at a glance." },
            ],
            steps: [
              { text: "Open any tag dropdown." },
              { lead: "Type a new name:", text: "Choose Create to add it." },
            ],
          },
          {
            title: "Heatmap",
            votes: 0,
            kind: "heatmap",
            author: "TERASTAMP",
            postedOn: "October 6",
            intro: ["Render reading intensity as a heatmap so the hotspots jump out."],
            features: [
              { lead: "Custom colour scale:", text: "Set the range to match your data." },
              { lead: "Play over time:", text: "Watch how intensity moves." },
              { lead: "Two layouts:", text: "Flip between spatial and grid views." },
            ],
            steps: [
              { text: "Open a dataset and pick Heatmap." },
              { lead: "Tune the scale:", text: "Adjust the colours and run the timeline." },
            ],
          },
          {
            title: "Alert Comments",
            votes: 0,
            kind: "table",
            author: "TERASTAMP",
            postedOn: "October 3",
            intro: ["Talk through alerts where they live by commenting on them directly, keeping every decision in one spot."],
            features: [
              { lead: "Threaded discussion:", text: "Keep each alert's conversation tidy." },
              { lead: "Mentions:", text: "Loop teammates in with @mentions." },
              { lead: "Complete trail:", text: "Hold on to the record for audits." },
            ],
            steps: [
              { text: "Open an alert." },
              { lead: "Leave a comment:", text: "Mention anyone who should weigh in." },
            ],
          },
          {
            title: "Advanced Formula Editor",
            votes: 0,
            kind: "donut",
            author: "TERASTAMP",
            postedOn: "October 1",
            intro: ["Build complex formulas with confidence in a richer editor that offers helpers and a live preview."],
            features: [
              { lead: "Autocomplete:", text: "Receive function suggestions as you type." },
              { lead: "Live preview:", text: "See the result while you edit." },
              { lead: "Error highlighting:", text: "Catch slip-ups before you save." },
            ],
            steps: [
              { text: "Open the Advanced Formula Editor." },
              { lead: "Assemble your formula:", text: "Lean on autocomplete and keep an eye on the preview." },
            ],
          },
        ],
      },
    ],
  },
];

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

/* shared feedback form — rating + reason + email, with validation */
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

/* "Submit idea" modal */
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

/* feature detail modal — matches the screenshots */
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
        {/* hero image */}
        <div className="overflow-hidden rounded-t-2xl" style={{ height: 220, background: "#e2e8f0" }}>
          <CardImage card={feature} />
        </div>

        <div className="px-5 py-5 sm:px-8 sm:py-6">
          {/* title + share + votes */}
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

          {/* author + date */}
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
              {/* intro */}
              <div className="mt-5 space-y-3 border-t pt-5 text-sm leading-relaxed sm:text-[15px]" style={{ borderColor: c.borderSoft, color: c.text }}>
                {feature.intro.map((p, i) => (
                  <p key={i}>
                    <Rich parts={p} />
                  </p>
                ))}
              </div>

              {/* key features */}
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

              {/* how to use */}
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

              {/* feedback */}
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

const FeatureCard = ({ card, onOpen }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={() => onOpen(card)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group flex w-full flex-col overflow-hidden rounded-xl text-left transition-colors"
      style={{ background: hover ? c.tileHover : c.tile, border: `1px solid ${hover ? c.accent : c.borderSoft}` }}
    >
      <div className="flex items-start justify-between gap-3 p-4 pb-2">
        <span className="text-sm font-semibold leading-snug" style={{ color: c.heading }}>{card.title}</span>
        <span className="flex shrink-0 items-center gap-1 text-xs" style={{ color: c.faint }}>
          <User size={13} /> {card.votes}
        </span>
      </div>
      <div className="mx-3 mb-3 mt-auto overflow-hidden rounded-md" style={{ border: `1px solid ${c.border}`, height: 96 }}>
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

/* careers CTA banner (third screenshot) */
const CareersCTA = () => (
  <div className="mx-auto mt-10 max-w-5xl">
    <div className="rounded-3xl px-6 py-10 sm:px-14 sm:py-14" style={{ background: c.accent }}>
      <h3 className="text-3xl font-extrabold leading-tight sm:text-5xl" style={{ color: "#fff" }}>
        Join us in building technology that helps keep people safe
      </h3>
      <button
        onClick={() => window.open("#open-positions", "_self")}
        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold sm:text-base"
        style={{ color: c.accent }}
      >
        See open roles <ArrowRight size={18} />
      </button>
    </div>
  </div>
);

const TeraStampRoadmap = () => {
  const [activeYear, setActiveYear] = useState("2026");
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
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      <CareersCTA />

      {showSubmit && <SubmitIdeaModal onClose={() => setShowSubmit(false)} />}
      {openFeature && <FeatureModal feature={openFeature} onClose={() => setOpenFeature(null)} />}
    </section>
  );
};

export default TeraStampRoadmap;
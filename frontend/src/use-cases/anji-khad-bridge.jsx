import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Share2,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  Eye,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared use-case data (also feeds the "Find out more" section)      */
/* ------------------------------------------------------------------ */
const successStories = [
  {
    title: "Real-time monitoring at Anji Khad Bridge",
    category: "Bridge",
    location: "India",
    description:
      "TeraStamp backs the structural safety of India's first cable-stayed rail bridge, set in one of the country's most demanding engineering environments.",
    image: "/bridge.jpeg",
    link: "/use-cases/anji-khad-bridge",
  },
  {
    title: "Metro Santiago de Chile",
    category: "Metro",
    location: "Chile",
    description:
      "Metro de Santiago needed to keep track of rail stability. TeraStamp delivered the solution, reshaping how infrastructure safety is managed.",
    image: "/building.jpeg",
    link: "/use-cases/metro-santiago",
  },
  {
    title: "Howard Street Tunnel Expansion",
    category: "Tunnel",
    location: "USA",
    description:
      "TeraStamp tracked the Howard Street Tunnel expansion in real time, bringing together data from 1,000+ instruments and automating reports.",
    image: "/tunnel.jpeg",
    link: "/use-cases/howard-street-tunnel",
  },
  {
    title: "NEOM Running Tunnels",
    category: "Tunnel",
    location: "Saudi Arabia",
    description:
      "This case study looks at how TeraStamp supports one of the world's most ambitious infrastructure programs through integrated monitoring.",
    image: "/building.jpeg",
    link: "/use-cases/neom-running-tunnels",
  },
];

// The link of THIS page — used to drop it from the suggestions.
const CURRENT_LINK = "/use-cases/anji-khad-bridge";

const HERO_TAGS = ["Monitoring", "Anji Khad", "India", "Asia"];

const solutionSensors = [
  "GNSS sensors",
  "Static and dynamic strain gauges",
  "Accelerometers",
  "Seismographs",
  "In-place inclinometers (IPI)",
  "Temperature sensors",
  "3D prisms, monitored via robotic total station and TCS",
  "Tiltmeters",
];

const keyTools = [
  "Automated alerts for wind-induced vibrations and structural movement",
  "Real-time dashboards shaped around the needs of engineering teams",
  "3D visualizations that aid analysis and decision-making",
  "Reporting tools that help meet safety and compliance standards",
];

const impactPoints = [
  {
    icon: AlertTriangle,
    lead: "Early warnings",
    rest: "on critical movements or anomalies",
  },
  {
    icon: Eye,
    lead: "Full visibility",
    rest: "into structural behavior during and after construction",
  },
  {
    icon: ShieldCheck,
    lead: "Tools to manage risk",
    rest: "in a high-exposure environment",
  },
  {
    icon: FileCheck,
    lead: "A digital record of compliance",
    rest: "and long-term structural health",
  },
];

/* ------------------------------------------------------------------ */
/*  Reusable scroll-in animation. `i` adds a small stagger delay.      */
/* ------------------------------------------------------------------ */
const rise = (i = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.55, delay: i * 0.08 },
});

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */
const SectionTitle = ({ children }) => (
  <motion.h2
    {...rise(0)}
    className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
  >
    {children}
  </motion.h2>
);

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3 text-base leading-relaxed text-gray-300 md:text-lg">
    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#818CF8]" />
    <span>{children}</span>
  </li>
);

// A framed "platform window" wrapper for the product screenshots.
const PlatformFrame = ({ src, alt, ratio = "16/9" }) => (
  <motion.div
    {...rise(1)}
    className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f1014] shadow-2xl shadow-black/40"
  >
    <div className="flex h-9 items-center gap-2 border-b border-white/5 bg-[#1e2026] px-4">
      <span className="h-3 w-3 rounded-full bg-red-500/70" />
      <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
      <span className="h-3 w-3 rounded-full bg-green-500/70" />
    </div>
    <div
      className="w-full bg-gradient-to-br from-[#2b3a4a] to-[#1b2a1f]"
      style={{ aspectRatio: ratio }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
    </div>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Suggestion card — reuses the hover animation (glow + lift + arrow) */
/* ------------------------------------------------------------------ */
const SuggestionCard = ({ story }) => (
  <Link
    to={story.link}
    className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#1c1d24] p-3 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/10 hover:bg-[#292b35] hover:shadow-2xl hover:shadow-black/40"
  >
    {/* Radial glow that fades into the bottom-right corner on hover */}
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.45),rgba(129,140,248,0)_70%)] opacity-0 blur-2xl transition-opacity duration-500 ease-out group-hover:opacity-100"
    />

    {/* Image */}
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
      <img
        src={story.image}
        alt={story.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        onError={(e) => (e.currentTarget.style.opacity = "0")}
      />
    </div>

    {/* Text */}
    <div className="relative z-10 flex flex-1 flex-col px-2 pb-1 pt-4">
      <span className="text-xs font-semibold uppercase tracking-wide text-[#818CF8]">
        {story.category}
      </span>

      <h3 className="mt-1.5 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-indigo-200">
        {story.title}
      </h3>

      <div className="mt-3 flex items-end justify-between">
        <span className="text-sm text-gray-400">{story.location}</span>
        <ArrowRight
          aria-hidden="true"
          className="h-5 w-5 -translate-x-2 text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
        />
      </div>
    </div>
  </Link>
);

/* ------------------------------------------------------------------ */
/*  CTA banner                                                         */
/* ------------------------------------------------------------------ */
const CtaBanner = () => (
  <motion.div
    {...rise(0)}
    className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[32px] bg-[#A4B3FF] px-8 pt-8 pb-8 md:flex-row md:px-14 md:pt-14 md:pb-14"
  >
    {/* Left copy */}
    <div className="z-10 max-w-md text-[#111216]">
      <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
        Turn your data into smart decisions
      </h2>
      <p className="mt-5 text-lg font-medium opacity-90">
        Claim a demo &amp; optimize your project with TeraStamp
      </p>
      <Link
        to="/contact"
        className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#111216] shadow-sm transition-all duration-200 hover:bg-gray-50"
      >
        Claim a demo now
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>

    {/* Right dashboard mock */}
    <div className="relative h-[260px] w-full self-end overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:h-[340px] md:w-[55%]">
      <img
        src="/test1.webp"
        alt="TeraStamp dashboard interface"
        className="h-full w-full bg-slate-800 object-cover opacity-40 mix-blend-luminosity grayscale"
        onError={(e) => (e.currentTarget.style.opacity = "0")}
      />

      {/* Mock top app bar */}
      <div className="absolute inset-x-0 top-0 flex h-11 items-center justify-between border-b border-white/5 bg-[#1e2026] px-4 text-xs text-white">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded bg-[#2a2d36] px-3 py-1 text-gray-400">
            Filters
          </span>
          <span className="rounded bg-[#4f46e5] px-3 py-1 font-medium">
            + Add Advance
          </span>
        </div>
      </div>

      {/* Floating data popover */}
      <div className="absolute left-5 top-16 z-20 max-w-[210px] rounded-xl border border-white/10 bg-[#1a1b20]/95 p-4 text-xs text-white shadow-xl backdrop-blur-md">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full border border-purple-500/30 bg-purple-900/50 px-2 py-0.5 text-[10px] font-semibold text-purple-300">
            Under review
          </span>
          <span className="text-[10px] text-gray-500">10 min ago</span>
        </div>
        <p className="font-semibold text-gray-300">S514</p>
        <p className="mb-2 text-gray-400">Optical Target | Anji Khad</p>
        <div className="space-y-1 font-mono text-[11px]">
          <p className="text-emerald-400">
            Delta X: <span className="text-white">-6.7 m</span>
          </p>
          <p className="text-emerald-400">
            Delta Y: <span className="text-white">-7.7 m</span>
          </p>
          <p className="text-emerald-400">
            Delta Z: <span className="text-white">-0.7 m</span>
          </p>
        </div>
      </div>

      {/* Map node pins */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute bottom-1/4 left-1/3 h-3 w-3 animate-pulse rounded-full bg-blue-500 ring-4 ring-blue-500/30" />
        <span className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-purple-500 ring-4 ring-purple-500/30" />
        <span className="absolute bottom-1/3 right-1/3 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-emerald-400/30" />
        <span className="absolute right-1/2 top-1/2 h-3 w-3 rounded-full bg-amber-500 ring-4 ring-amber-500/30" />
      </div>
    </div>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
const AnjiKhadBridge = () => {
  const suggestions = successStories.filter((s) => s.link !== CURRENT_LINK);

  return (
    <main className="bg-[#141519]">
      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 md:pt-20">
        <motion.h1
          {...rise(0)}
          className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Real-time monitoring at Anji Khad Bridge
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg"
        >
          TeraStamp backs the structural safety of India's first cable-stayed
          rail bridge, set in one of the country's most demanding engineering
          environments.
        </motion.p>

        <motion.div
          {...rise(2)}
          className="mt-9 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-[#5a8fc0] to-[#2c5238]"
        >
          <img
            src="/bridge.jpeg"
            alt="Anji Khad Bridge under construction"
            className="h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </motion.div>

        {/* Tags + share */}
        <motion.div
          {...rise(3)}
          className="mt-6 flex items-center justify-between"
        >
          <div className="flex flex-wrap gap-2.5">
            {HERO_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white/[0.06] px-3 py-1 text-sm font-medium text-[#A4B3FF]"
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            type="button"
            aria-label="Share this case study"
            className="rounded-md p-2 text-gray-400 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            <Share2 className="h-5 w-5" />
          </button>
        </motion.div>
      </section>

      {/* ===== Project Introduction ===== */}
      <section className="mx-auto mt-14 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Project Introduction</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
          <motion.p {...rise(1)}>
            Built on steep Himalayan slopes and exposed to fierce wind and
            seismic activity, the Anji Khad Bridge demanded more than structural
            engineering. It needed continuous, real-time monitoring.
          </motion.p>
          <motion.p {...rise(2)}>
            As India's first cable-stayed rail bridge and one of the most
            complex to build, the Anji Khad Bridge spans more than 500 meters,
            with a single pylon that rises 193 meters from its foundation. From
            the earliest construction stages, the project called for highly
            accurate monitoring to ensure stability and safety amid constantly
            changing conditions.
          </motion.p>
          <motion.p {...rise(3)}>
            Beyond the engineering challenge, projects like Anji Khad are vital
            links for people and communities. Ensuring their safety from day one
            isn't optional, it's essential.
          </motion.p>
        </div>
      </section>

      {/* ===== The challenge ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>The challenge</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
          <motion.p {...rise(1)}>
            Engineered to withstand wind speeds above 200 km/h and anchored in
            geologically unstable terrain, the bridge needed uninterrupted
            structural monitoring, both during construction and throughout its
            ongoing use.
          </motion.p>
          <motion.p {...rise(2)}>
            With complex loading, shifting environmental conditions, and limited
            site access, having a clear, real-time view of the bridge's behavior
            wasn't just helpful but crucial.
          </motion.p>
        </div>

        <div className="mt-9">
          <PlatformFrame
            src="/test2.jpg"
            alt="Satellite map of the bridge site with sensor locations"
          />
        </div>
      </section>

      {/* ===== The solution ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>
          The solution: infrastructure monitoring software by TeraStamp
        </SectionTitle>
        <motion.p
          {...rise(1)}
          className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          To meet these needs, TeraStamp provided a unified monitoring platform
          that collects, processes, and visualizes data from a wide range of
          sensors across the site.
        </motion.p>

        <motion.p {...rise(2)} className="mt-5 font-semibold text-white">
          The platform brought together data from:
        </motion.p>
        <motion.ul {...rise(2)} className="mt-4 space-y-3">
          {solutionSensors.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </motion.ul>
      </section>

      {/* ===== Key tools ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Key tools that supported the project</SectionTitle>
        <motion.p {...rise(1)} className="mt-6 font-semibold text-white">
          TeraStamp's platform made possible:
        </motion.p>
        <motion.ul {...rise(1)} className="mt-4 space-y-3">
          {keyTools.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </motion.ul>
      </section>

      {/* ===== The impact ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>The impact</SectionTitle>
        <motion.p
          {...rise(1)}
          className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          With TeraStamp in place, the project team gained:
        </motion.p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {impactPoints.map(({ icon: Icon, lead, rest }, i) => (
            <motion.div
              key={lead}
              {...rise(i)}
              className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-[#1c1d24] p-5"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#818CF8]/10">
                <Icon className="h-5 w-5 text-[#818CF8]" />
              </span>
              <p className="text-base leading-relaxed text-gray-300">
                <span className="font-semibold text-white">{lead}</span> {rest}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...rise(1)}
          className="mt-7 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          Having every monitoring tool in a single platform gave the team real{" "}
          <span className="font-semibold text-white">peace of mind</span>. With
          full visibility and live data throughout the project, they stayed in
          control at every stage.
        </motion.p>

        <div className="mt-9">
          <PlatformFrame
            src="/test3.avif"
            alt="Bridge schematic with sensor nodes and legend"
          />
        </div>
      </section>

      {/* ===== Key insights ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Key insights from Anji Khad</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
          <motion.p {...rise(1)}>
            Major infrastructure projects in tough environments take more than
            just strong design. They rely on clear, real-time data to guide them
            at every step. At Anji Khad, TeraStamp turned complex structural
            readings into actionable insights that engineers could trust. That
            move from merely observing risk to actively managing it was what made
            the difference.
          </motion.p>
          <motion.p {...rise(2)}>
            In large-scale civil infrastructure, the real challenge isn't only
            about keeping structures safe and stable. It's about protecting the
            people and systems that depend on them. With TeraStamp, monitoring
            becomes a way to take that responsibility seriously and stay one step
            ahead.
          </motion.p>
          <motion.p {...rise(3)} className="text-white">
            <span className="font-semibold">
              Ready to elevate your project's safety and efficiency?
            </span>{" "}
            See how TeraStamp can transform your monitoring today.
          </motion.p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <CtaBanner />
      </section>

      {/* ===== Find out more ===== */}
      <section className="mx-auto mt-20 max-w-6xl px-4 pb-20 sm:px-6">
        <SectionTitle>Find out more success stories</SectionTitle>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {suggestions.map((story) => (
            <SuggestionCard key={story.link} story={story} />
          ))}
        </div>

        <Link
          to="/use-cases"
          className="group mt-9 inline-flex items-center gap-2 rounded-lg border border-[#818CF8]/40 px-4 py-2.5 text-sm font-semibold text-[#A4B3FF] transition-colors hover:bg-[#818CF8]/10"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Use Cases
        </Link>
      </section>
    </main>
  );
};

export default AnjiKhadBridge;
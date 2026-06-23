import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Share2, ArrowRight, ArrowLeft } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared use-case data (also feeds the "Find out more" section)      */
/* ------------------------------------------------------------------ */
const successStories = [
  {
    title: "Real-time monitoring at Anji Khad Bridge",
    category: "Bridge",
    location: "India",
    image: "/test1.webp",
    link: "/use-cases/anji-khad-bridge",
  },
  {
    title: "Metro Santiago de Chile",
    category: "Metro",
    location: "Chile",
    image: "/test2.jpg",
    link: "/use-cases/metro-santiago",
  },
  {
    title: "Howard Street Tunnel Expansion",
    category: "Tunnel",
    location: "USA",
    image: "/test3.avif",
    link: "/use-cases/howard-street-tunnel",
  },
  {
    title: "NEOM Running Tunnels",
    category: "Tunnel",
    location: "Saudi Arabia",
    image: "/test2.jpg",
    link: "/use-cases/neom-running-tunnels",
  },
];

// The link of THIS page — used to drop it from the suggestions.
const CURRENT_LINK = "/use-cases/metro-santiago";

const HERO_TAGS = ["Metro", "Railway", "Chile", "Metro Santiago de Chile"];

const needs = [
  "Continuously monitor potential deformations in the track slabs.",
  "Exhaustive process and analyze instrumentation data.",
  "Have real-time auto calculations and formulas that would allow them to have the required information at the key moment to take quick actions in case of potential emerging problems.",
];

const features = [
  {
    title: "Continuous Data Acquisition",
    points: [
      "Data is collected every 30 minutes and available on the platform.",
      "A comprehensive database was established to verify railway tracks stability.",
      "Ensures support elements meet design criteria.",
      "Aids in decisions regarding additional support elements.",
    ],
  },
  {
    title: "Real-Time Data Access",
    points: [
      "Instant access to data visualization and management through the online TeraStamp platform.",
    ],
  },
  {
    title: "Remote Monitoring and Alerts",
    points: [
      "Enables real-time notifications of alerts for any anomalies and ability to communicate with project team members and stakeholders to resolve the alerts.",
      "Allows for immediate action when issues are detected.",
    ],
  },
  {
    title: "Automatic, Uninterrupted Data Collection",
    points: [
      "Reduces manual intervention and error.",
      "In the Interstation tunnel: Measurements taken every 30 minutes (48 per day) and; deformation calculations performed every 1.5 hours (16 accumulated longitudinal deformation chains per day for each track).",
    ],
  },
];

const results = [
  {
    lead: "Greater certainty",
    rest: "about the condition of the tracks: Continuous monitoring and auto-reporting ensure early detection of anomalies in the structure to the track slabs.",
  },
  {
    lead: "Proactive maintenance:",
    rest: "Real-time alerts have enabled timely interventions and maintenance tasks, minimizing disruptions and risks.",
  },
  {
    lead: "Efficient data management:",
    rest: "The TeraStamp platform has streamlined data analysis and reporting, improving overall team's efficiency.",
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

const SubTitle = ({ children }) => (
  <motion.h3 {...rise(0)} className="text-xl font-bold text-white md:text-2xl">
    {children}
  </motion.h3>
);

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3 text-base leading-relaxed text-gray-300 md:text-lg">
    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#818CF8]" />
    <span>{children}</span>
  </li>
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
        Claim a demo &amp; optimise your project with TeraStamp
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
        <p className="mb-2 text-gray-400">Optical Target | Santiago</p>
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
const MetroSantiago = () => {
  const suggestions = successStories.filter((s) => s.link !== CURRENT_LINK);

  return (
    <main className="bg-[#141519]">
      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 md:pt-20">
        <motion.h1
          {...rise(0)}
          className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Metro Santiago de Chile
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg"
        >
          Metro de Santiago needed to monitor track stability. TeraStamp
          delivered the ideal solution, transforming how infrastructure safety
          is managed. Discover how our platform guaranteed the stability of
          this essential urban transport system.
        </motion.p>

        <motion.p {...rise(2)} className="mt-4 text-sm text-gray-500">
          30 Aug 2024
        </motion.p>

        <motion.div
          {...rise(3)}
          className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-[#7a1f1f] to-[#2c2c38]"
        >
          <img
            src="/test2.jpg"
            alt="Metro de Santiago train arriving at a station"
            className="h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </motion.div>

        {/* Tags + share */}
        <motion.div
          {...rise(4)}
          className="mt-6 flex items-center justify-between gap-4"
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
            Metro de Santiago is the metropolitan rail network that serves
            much of Chile’s capital. It ranks among Latin America’s most
            modern metro systems and is the seventh most heavily used
            worldwide.
          </motion.p>
          <motion.p {...rise(2)}>
            Not long ago, Santiago’s Metro faced a critical challenge in
            monitoring the structural soundness of a tunnel section between
            two stations. They needed an advanced platform capable of
            processing real‑time readings from instruments placed along the
            tracks, enabling instant alerts and on‑site preventive measures
            to guarantee track safety and performance. After assessing
            alternatives and finding other methods insufficient for the
            project’s complexity, the Instrumentation and Monitoring (I&amp;M)
            contractor turned to the TeraStamp platform.
          </motion.p>
          <motion.p {...rise(3)}>
            This case study illustrates how our platform resolved key
            problems and supported the overarching goal of preserving
            infrastructure integrity.
          </motion.p>
        </div>
      </section>

      {/* ===== The Story ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>
          The Story of the Wireless Deformation Monitoring Project
        </SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
          <motion.p {...rise(1)}>
            The Monitoring &amp; Instrumentation team had one central
            difficulty: persistent water ingress in that tunnel area was
            causing erosion and undermining the structural stability of the
            track slabs. They launched the Wireless Deformation Monitoring
            project to tackle this urgent issue. Yet they struggled to
            process sensor data in real time and to manage the alert system
            effectively.
          </motion.p>
          <motion.p {...rise(2)}>
            The challenge involved intricate data processing to measure track
            deformation across multiple planes (horizontal, vertical, and
            oblique), monitor longitudinal track profiles, and pay special
            attention to preventing CANT and TWIST track failures.
            Compounding this, the tiltmeter sensors did not collect data
            synchronously, so time buffers had to be introduced during the
            calculation of the parameters needed for track integrity
            monitoring.
          </motion.p>
        </div>

        <motion.p {...rise(3)} className="mt-6 font-semibold text-white">
          It became evident that the team required a software system that
          would enable them to:
        </motion.p>
        <motion.ul {...rise(3)} className="mt-4 space-y-3">
          {needs.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </motion.ul>
      </section>

      {/* ===== The Challenge of Ensuring Track Stability ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>The Challenge of Ensuring Track Stability</SectionTitle>
        <motion.p
          {...rise(1)}
          className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          The primary hurdles for the contractor were the erosion of
          supporting materials, loss of load‑bearing capacity, and possible
          threats to the structural integrity of the track slabs. Other
          monitoring software fell short when it came to delivering real‑time
          data in a flexible and straightforward manner. Consequently, the
          team sought a solution that could process the necessary information
          to uphold track safety and reliability.
        </motion.p>
      </section>

      {/* ===== Why Proqio was chosen ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Why TeraStamp Was Chosen</SectionTitle>
        <motion.p
          {...rise(1)}
          className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          They identified the TeraStamp platform as the ideal fit, delivering
          advanced visualisation and data‑management capabilities precisely
          aligned with their needs – providing uninterrupted real‑time data
          with high accuracy and minimal upkeep.
        </motion.p>
        <motion.p {...rise(2)} className="mt-3 font-semibold text-white">
          The choice was driven by TeraStamp’s standout features:
        </motion.p>

        <div className="mt-8 space-y-8">
          {features.map((group, i) => (
            <motion.div
              {...rise(i)}
              key={group.title}
              className="rounded-2xl border border-white/[0.06] bg-[#1c1d24] p-6"
            >
              <SubTitle>{group.title}</SubTitle>
              <ul className="mt-4 space-y-3">
                {group.points.map((p) => (
                  <Bullet key={p}>{p}</Bullet>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== How the I&M contractor used the platform ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>
          How the I&amp;M Specialist Contractor Used the TeraStamp Platform
        </SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
          <motion.p {...rise(1)}>
            The specialised I&amp;M contractor deployed our monitoring system
            to oversee both tracks in the Interstation Tunnel. They installed
            instruments at 20‑metre intervals along both tracks, plus two
            reference monitoring stations outside the designated zone.
          </motion.p>
          <motion.p {...rise(2)}>
            Our platform’s real‑time data collection, processing power, and
            automated reporting were instrumental in evaluating track
            stability and confirming that supporting elements met design
            criteria. TeraStamp gave them efficient data visualisation and
            management, leading to more informed decisions.
          </motion.p>
        </div>
      </section>

      {/* ===== The Results ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>The Results</SectionTitle>
        <motion.p
          {...rise(1)}
          className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          Since rolling out the TeraStamp platform, the I&amp;M contractor has
          achieved:
        </motion.p>

        <div className="mt-6 space-y-4">
          {results.map(({ lead, rest }, i) => (
            <motion.div
              {...rise(i)}
              key={lead}
              className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-[#1c1d24] p-5"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#818CF8]" />
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
          These outcomes clearly show the transformative effect our system has
          had on the project.
        </motion.p>
      </section>

      {/* ===== Results achieved ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Results Achieved</SectionTitle>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-300 md:text-lg">
          <motion.p {...rise(1)}>
            The TeraStamp platform resolved the Instrumentation &amp;
            Monitoring team’s difficulties in managing the complex demands of
            the Metro tunnel. Through TeraStamp’s advanced real‑time
            monitoring, efficient data handling, and proactive alerting
            system, the team has significantly raised the bar for safety
            management, operational efficiency, and long‑term infrastructure
            resilience.
          </motion.p>
          <motion.p {...rise(2)} className="text-white">
            <span className="font-semibold">
              Ready to elevate your project's safety and efficiency?
            </span>{" "}
            See how TeraStamp can revolutionise your monitoring approach today.{" "}
            <Link
              to="/contact"
              className="font-semibold text-[#A4B3FF] underline-offset-2 hover:underline"
            >
              Claim a demo today!
            </Link>
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

export default MetroSantiago;
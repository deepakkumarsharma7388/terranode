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
const CURRENT_LINK = "/use-cases/howard-street-tunnel";

const HERO_TAGS = [
  "Tunnel",
  "Construction",
  "USA",
  "Howard Street Tunnel Expansion",
];

const whyFactors = [
  {
    lead: "Automated Reporting:",
    rest: "TeraStamp’s capability to generate real‑time, accurate reports considerably lowered manual work and minimised the risk of errors.",
  },
  {
    lead: "Seamless Data Integration:",
    rest: "The platform’s ability to consolidate data from a wide variety of monitoring instruments delivered a complete picture of construction progress and its effects on neighbouring structures.",
  },
  {
    lead: "User-Friendly Interface:",
    rest: "TeraStamp’s intuitive design made it easy for the project team to adopt and use the system from day one.",
  },
  {
    lead: "Advanced Data Visualization:",
    rest: "Outperforming rival products, TeraStamp provided sophisticated visualisation tools that were essential for managing a project of this scale and complexity.",
  },
  {
    lead: "Adaptability:",
    rest: "The system’s flexibility allowed for quick addition of new sensors and effortless adaptation to shifting project requirements.",
  },
];

const resultsAchieved = [
  {
    lead: "Time Savings:",
    rest: "Automated reporting freed up significant team hours, allowing the crew to concentrate on vital construction activities.",
  },
  {
    lead: "Improved Decision Making:",
    rest: "Better data management and clear visualisation ensured reliable monitoring, leading to faster and more accurate choices.",
  },
  {
    lead: "Safety Requirements:",
    rest: "Continuous monitoring and instant alerts helped uphold rigorous safety standards throughout the works.",
  },
  {
    lead: "Streamlined Project Progression:",
    rest: "Comprehensive data merging and analysis smoothed the project’s flow, reducing delays and unforeseen obstacles.",
  },
  {
    lead: "Cost Efficiency:",
    rest: "By catching potential issues early and enabling smarter resource deployment, TeraStamp contributed to measurable cost savings.",
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

// Bold-lead bullet inside a soft card (used by Results Achieved).
const LeadBullet = ({ lead, rest, i }) => (
  <motion.div
    {...rise(i)}
    className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-[#1c1d24] p-5"
  >
    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#818CF8]" />
    <p className="text-base leading-relaxed text-gray-300">
      <span className="font-semibold text-white">{lead}</span> {rest}
    </p>
  </motion.div>
);

// Numbered card (used by "Why Proqio Was the Perfect Choice").
const NumberedItem = ({ n, lead, rest, i }) => (
  <motion.div
    {...rise(i)}
    className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-[#1c1d24] p-5"
  >
    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#818CF8]/10 text-sm font-bold text-[#818CF8]">
      {n}
    </span>
    <p className="text-base leading-relaxed text-gray-300">
      <span className="font-semibold text-white">{lead}</span> {rest}
    </p>
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
        <p className="mb-2 text-gray-400">Optical Target | Baltimore</p>
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
const HowardStreetTunnel = () => {
  const suggestions = successStories.filter((s) => s.link !== CURRENT_LINK);

  return (
    <main className="bg-[#141519]">
      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 md:pt-20">
        <motion.h1
          {...rise(0)}
          className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Howard Street Tunnel Expansion
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg"
        >
          TeraStamp was used to monitor the Howard Street Tunnel expansion in
          real time, combining data from over 1,000 instruments and automating
          report generation. The platform ensured ongoing safety, structural
          stability, and well‑informed decision‑making at every stage of the
          project.
        </motion.p>

        <motion.p {...rise(2)} className="mt-4 text-sm text-gray-500">
          31 May 2024
        </motion.p>

        <motion.div
          {...rise(3)}
          className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-[#3a3a2c] to-[#1f2a1f]"
        >
          <img
            src="/test3.avif"
            alt="Railroad track derail device on the Howard Street corridor"
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

      {/* ===== Project Context ===== */}
      <section className="mx-auto mt-14 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Project Context</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
          <motion.p {...rise(1)}>
            The Howard Street Tunnel Expansion project aims to raise the
            vertical clearance along the rail corridor so that double‑stack
            trains (those carrying containers stacked two high) can operate
            between Baltimore City, Maryland, and Philadelphia, Pennsylvania.
            The primary bottleneck preventing double‑stack service on this
            route has been the Howard Street Tunnel – a 1.7‑mile railway
            beneath central Baltimore, originally constructed in 1895. The
            tunnel’s current height restricts the movement of double‑stack
            trains along this part of the network, including traffic to and
            from the Port of Baltimore.
          </motion.p>
          <motion.p {...rise(2)}>
            This intricate construction effort demands precise, efficient
            monitoring and data management to guard against any risk to nearby
            structures and communities.
          </motion.p>
        </div>
      </section>

      {/* ===== The Expansion Challenge ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>The Howard Street Tunnel Expansion Challenge</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
          <motion.p {...rise(1)}>
            To appreciate the challenges confronting the Howard Street Tunnel
            expansion, it helps to recall the 2001 accident. In that year, a
            60‑car freight train derailed inside the Howard Street Tunnel in
            Baltimore. The derailment triggered a chemical fire that effectively
            paralysed the downtown area, and also ruptured a water main, causing
            extensive flooding above. The incident disrupted rail services along
            the Northeast Corridor and even slowed Internet traffic across the
            U.S. for several hours because a fibre‑optic cable running through
            the tunnel was destroyed.
          </motion.p>
          <motion.p {...rise(2)}>
            If enlarging an ancient tunnel might naturally raise concerns among
            local residents and owners of nearby assets, one can only imagine
            the heightened anxiety in a community still mindful of the 2001
            events.
          </motion.p>
          <motion.p {...rise(3)}>
            With this background, the Howard Street Tunnel Expansion must
            carefully increase the vertical space of a tunnel more than a
            century old while preserving the integrity of the infrastructure
            built above and around it, and with minimal disruption to
            neighbouring residential areas and the railway tracks that will
            serve the future double‑stack container freight trains.
          </motion.p>
        </div>
      </section>

      {/* ===== Overcoming Construction Monitoring Challenges ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Overcoming Construction Monitoring Challenges</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
          <motion.p {...rise(1)}>
            To preserve structural stability during the expansion, it was
            essential to install sensors and constantly monitor the data they
            collected. This allowed the construction team and project
            stakeholders to maintain rigorous oversight and take prompt
            corrective action if any alarm was triggered.
          </motion.p>
          <motion.p {...rise(2)}>
            Before adopting TeraStamp, the Howard Street Tunnel expansion team
            required a solution that could gather data from over 1,000
            instruments and process it in real time to track asset condition
            throughout the project. The alternative monitoring approaches they
            considered were cumbersome and ill‑suited to such a complex
            undertaking. What they needed was a system that offered live
            monitoring, seamless integration of sensor data, and robust
            reporting – exactly what TeraStamp delivered.
          </motion.p>
        </div>
      </section>

      {/* ===== Why Proqio Was the Perfect Choice ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Why TeraStamp Was the Perfect Choice</SectionTitle>
        <motion.p
          {...rise(1)}
          className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          After evaluating the available options, TeraStamp clearly stood out as
          the ideal monitoring data processing, analysis, and interpretation
          tool for the Howard Street Tunnel Expansion. The main reasons for this
          choice included:
        </motion.p>

        <div className="mt-6 space-y-4">
          {whyFactors.map((f, i) => (
            <NumberedItem
              key={f.lead}
              n={i + 1}
              lead={f.lead}
              rest={f.rest}
              i={i}
            />
          ))}
        </div>
      </section>

      {/* ===== Implementing Proqio ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>
          Implementing TeraStamp in the Howard Street Tunnel Expansion
        </SectionTitle>
        <motion.p
          {...rise(1)}
          className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          TeraStamp proved essential to the success of the Howard Street Tunnel
          Expansion. The platform unified data from a variety of monitoring
          sensors – including piezometers, extensometers, and tiltmeters. Its
          automated reporting delivered real‑time updates to all stakeholders,
          saving time and resources while ensuring everyone had access to the
          most current project data. As work progressed, TeraStamp made it easy
          to incorporate new instruments and handle increasing data volumes. The
          system’s advanced visualisation tools translated complex information
          into clear, actionable insights, enabling swift decisions.
        </motion.p>
      </section>

      {/* ===== Results Achieved ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Results Achieved</SectionTitle>
        <motion.p
          {...rise(1)}
          className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          The adoption of TeraStamp brought about notable gains in both
          construction quality and overall project efficiency:
        </motion.p>

        <div className="mt-6 space-y-4">
          {resultsAchieved.map((r, i) => (
            <LeadBullet key={r.lead} lead={r.lead} rest={r.rest} i={i} />
          ))}
        </div>

        <motion.p
          {...rise(1)}
          className="mt-7 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          The Howard Street Tunnel Expansion project illustrates how
          TeraStamp’s advanced monitoring solution can dramatically boost both
          efficiency and safety on large‑scale infrastructure works. By
          delivering real‑time data integration, comprehensive reporting, and
          flexible monitoring capabilities, TeraStamp was instrumental in the
          project’s success and raised the bar for construction monitoring on
          complex engineering endeavours.
        </motion.p>

        <motion.p {...rise(2)} className="mt-5 text-white">
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

export default HowardStreetTunnel;
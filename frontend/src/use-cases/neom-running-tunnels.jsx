import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Share2, ArrowRight, ArrowLeft, Quote } from "lucide-react";

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
const CURRENT_LINK = "/use-cases/neom-running-tunnels";

const HERO_TAGS = ["Tunnel", "Drill & Blast", "Saudi Arabia", "NEOM"];

// "How did Proqio provide solutions ... Through:" (bold-lead bullets)
const solutionsThrough = [
  {
    lead: "Unified data management system:",
    rest: "Integration of GSMDMS (Instrumentation and Monitoring) and TDMS (Tunnel Data Management System) on a single platform.",
  },
  {
    lead: "Real-time monitoring:",
    rest: "Providing instant access to critical data on tunnel convergence, geological conditions and construction progress.",
  },
  {
    lead: "Automatic report generation",
    rest: "for engineers to review during each turn.",
  },
  {
    lead: "Alert management:",
    rest: "Providing 24/7 support staff to manage real-time project alerts and trigger action plans when necessary.",
  },
  {
    lead: "Advanced analysis",
    rest: "to determine the cause-effect relationship of tunnel deformations.",
  },
];

// "Proqio's capabilities allowed the project team to:" (bold-lead bullets)
const convergenceCaps = [
  {
    lead: "Ensure Safety:",
    rest: "By detecting potential structural issues early, thus protecting workers.",
  },
  {
    lead: "Maintain Stability:",
    rest: "By tracking the long-term stability of the tunnel.",
  },
  {
    lead: "Manage Risks:",
    rest: "By providing critical data to improve risk management and future tunnel designs.",
  },
];

// Drill & Blast data stored (plain bullets)
const drillBlastItems = [
  "Live monitoring of tunnel progress.",
  "Geological face mapping for every tunnel advance.",
  "Records of site activities during excavation and lining.",
  "Rock mass assessments and tunnel geology.",
  "Characteristics of soft/mixed ground and rock interfaces.",
  "Details of blast holes and explosives used.",
  "Excavated volumes and blasting vibration monitoring.",
  "Photographic records of exposed rock faces.",
  "Project site maps and imagery.",
  "Graphical representation of construction progress.",
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

// Bold-lead bullet inside a soft card.
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

// Numbered card with free-form body (used by the challenge list).
const NumberedItem = ({ n, i, children }) => (
  <motion.div
    {...rise(i)}
    className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-[#1c1d24] p-5"
  >
    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#818CF8]/10 text-sm font-bold text-[#818CF8]">
      {n}
    </span>
    <p className="text-base leading-relaxed text-gray-300">{children}</p>
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
        <p className="mb-2 text-gray-400">Optical Target | NEOM Lot 2-3</p>
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
const NeomRunningTunnels = () => {
  const suggestions = successStories.filter((s) => s.link !== CURRENT_LINK);

  return (
    <main className="bg-[#141519]">
      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 md:pt-20">
        <motion.h1
          {...rise(0)}
          className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          NEOM Running Tunnels
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg"
        >
          This case study examines how TeraStamp – an infrastructure data
          intelligence monitoring platform – became indispensable for overseeing
          a Drill &amp; Blast tunnel segment within this complex and
          groundbreaking mega‑project.
        </motion.p>

        <motion.p {...rise(2)} className="mt-4 text-sm text-gray-500">
          6 Feb 2024
        </motion.p>

        <motion.div
          {...rise(3)}
          className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-[#2b3340] to-[#15171c]"
        >
          <img
            src="/test2.jpg"
            alt="Interior of a NEOM running tunnel"
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

      {/* ===== Project context ===== */}
      <section className="mx-auto mt-14 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Project context</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
          <motion.p {...rise(1)}>
            NEOM is a large‑scale urban development in the Tabuk Province of
            northwestern Saudi Arabia. It stands as one of the most ambitious
            and extensive civil engineering undertakings of our era,
            representing a bold vision for future urban living, work, and
            sustainability. As part of constructing this futuristic region, the
            Drill &amp; Blast tunnels are being built to facilitate the movement
            of people and goods throughout the NEOM area.
          </motion.p>
          <motion.p {...rise(2)}>
            This case study explores how TeraStamp, a platform for infrastructure
            data intelligence and monitoring, became a vital tool for managing
            one of the D&amp;B tunnel sections in this complex and pioneering
            project.
          </motion.p>
        </div>
      </section>

      {/* ===== The story of NEOM running tunnels ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>The story of NEOM running tunnels</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
          <motion.p {...rise(1)}>
            The NEOM Running Tunnels project is a cornerstone of the broader
            NEOM vision, involving the construction of more than 28 kilometres
            of tunnels for high‑speed passenger and freight rail. These tunnels
            are poised to revolutionise transportation, making it faster, safer,
            and more efficient throughout the NEOM region.
          </motion.p>
          <motion.p {...rise(2)}>
            To oversee the NEOM Running Tunnels, the construction firm needed an
            optimal solution for integrating its diverse geotechnical,
            geodetic, and geological data.
          </motion.p>
          <motion.p {...rise(3)}>
            Given the sheer scale of the undertaking, stakeholders required a
            dependable system to manage exposure mapping, instrumentation
            readings, support measurements, and drilling logs – all to ensure
            smooth and safe operations. TeraStamp’s software was the preferred
            choice.
          </motion.p>
        </div>
      </section>

      {/* ===== The Challenge of Data Management and Monitoring ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>The Challenge of Data Management and Monitoring</SectionTitle>
        <motion.p
          {...rise(1)}
          className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          One of the biggest challenges for the NEOM Running Tunnels team was to{" "}
          <span className="font-semibold text-white">
            integrate and analyse the vast amount of data
          </span>{" "}
          from tunnel construction progress, geology, instrumentation,
          monitoring and surveying. The complexity of the project is reflected
          in:
        </motion.p>

        <div className="mt-6 space-y-4">
          <NumberedItem n={1} i={0}>
            <span className="font-semibold text-white">Data overload,</span> with
            over{" "}
            <span className="font-semibold text-white">10,000 instruments</span>{" "}
            generating data daily.
          </NumberedItem>
          <NumberedItem n={2} i={1}>
            Concern for{" "}
            <span className="font-semibold text-white">
              ensuring the structural integrity and safety
            </span>{" "}
            of extensive tunnel networks.
          </NumberedItem>
          <NumberedItem n={3} i={2}>
            The need for{" "}
            <span className="font-semibold text-white">real-time monitoring</span>{" "}
            with immediate alerts to take quick decisions against potential
            issues and maintain operational efficiency.
          </NumberedItem>
          <NumberedItem n={4} i={3}>
            <span className="font-semibold text-white">
              Geological variability:
            </span>{" "}
            Managing construction through diverse and challenging geological
            conditions.
          </NumberedItem>
          <NumberedItem n={5} i={4}>
            <span className="font-semibold text-white">Coordination:</span>{" "}
            Ensuring smooth communication and data exchange between the various
            stakeholders.
          </NumberedItem>
        </div>
      </section>

      {/* ===== The impact of Proqio ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>
          The impact of TeraStamp on the NEOM Running Tunnels Project
        </SectionTitle>
        <motion.p
          {...rise(1)}
          className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          TeraStamp was selected by the contractor and the NEOM Running Tunnels
          team for its robust real‑time data management, graphical
          visualisations, and secure online access. These capabilities, combined
          with its ability to monitor tunnel convergence, track construction
          progress, and automate reporting, convinced stakeholders of its value.
        </motion.p>

        <motion.p {...rise(2)} className="mt-5 font-semibold text-white">
          How did TeraStamp address the main challenges they encountered?
          Through:
        </motion.p>
        <div className="mt-4 space-y-4">
          {solutionsThrough.map((s, i) => (
            <LeadBullet key={s.lead} lead={s.lead} rest={s.rest} i={i} />
          ))}
        </div>
      </section>

      {/* ===== How NEOM Running Tunnels Team Used Proqio ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>How NEOM Running Tunnels Team Used TeraStamp</SectionTitle>
        <motion.p
          {...rise(1)}
          className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          The TeraStamp platform handled everything related to GSMDMS
          (Instrumentation and Monitoring) and TDMS (Tunnel Data Management
          System) on the project. The software helped the team track tunnel
          movements and evaluate geological conditions with precision. With
          automated reports generated by the platform, engineers could quickly
          review data, enabling rapid responses to any potential problems.
          Moreover, TeraStamp’s support team managed project alerts in real
          time, ensuring immediate action whenever needed.
        </motion.p>
      </section>

      {/* ===== Monitoring Tunnel Convergence ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Monitoring Tunnel Convergence</SectionTitle>
        <motion.p
          {...rise(1)}
          className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          Monitoring tunnel convergence during construction is vital for
          understanding the deformation or movement of tunnel walls as they
          adapt to new stress conditions caused by excavation. This occurs
          because the surrounding rock or soil, previously in equilibrium,
          reacts to the removal of material and the creation of a void (the
          tunnel) by shifting and settling into a new stable state.
        </motion.p>

        <motion.p {...rise(2)} className="mt-5 font-semibold text-white">
          TeraStamp’s capabilities enabled the project team to:
        </motion.p>
        <div className="mt-4 space-y-4">
          {convergenceCaps.map((c, i) => (
            <LeadBullet key={c.lead} lead={c.lead} rest={c.rest} i={i} />
          ))}
        </div>

        <motion.p
          {...rise(1)}
          className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          The monitoring was carried out using arrays of optical targets read by
          semi‑automatic robotic total stations. TeraStamp’s ability to perform
          virtual calculations from these readings proved essential for
          accurately measuring tunnel convergence.
        </motion.p>
      </section>

      {/* ===== Drill & Blast Data Management ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Drill &amp; Blast Data Management</SectionTitle>
        <motion.p
          {...rise(1)}
          className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          TeraStamp stored comprehensive information on construction progress
          and tunnel data, including:
        </motion.p>

        <motion.ul
          {...rise(2)}
          className="mt-5 grid gap-3 sm:grid-cols-2"
        >
          {drillBlastItems.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </motion.ul>

        <motion.p
          {...rise(1)}
          className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          TeraStamp gave engineers a complete overview of the work, making it
          possible to conduct precise cause‑and‑effect analyses of in‑tunnel
          deformations.
        </motion.p>
      </section>

      {/* ===== Automatic Reporting ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Automatic Reporting</SectionTitle>
        <motion.p
          {...rise(1)}
          className="mt-6 text-base leading-relaxed text-gray-300 md:text-lg"
        >
          Instrumentation and monitoring reports – reviewed and analysed by
          engineers every shift during the Shift Review Group (SRG) meetings –
          were automatically generated by the platform. Additionally, TeraStamp
          provided round‑the‑clock support staff to oversee all project alerts
          in real time, carrying out initial assessments and activating the
          project action plan as required.
        </motion.p>
      </section>

      {/* ===== The Results ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>The Results</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
          <motion.p {...rise(1)}>
            Thanks to TeraStamp, the NEOM Running Tunnels team was able to
            process the enormous volume of monitoring data in real time,
            achieving a higher level of structural safety. Furthermore, the
            automated data collection and reporting features saved time and
            reduced manual errors, enhancing decision‑making and risk
            management. In this way, TeraStamp played a key role in ensuring
            that the tunnel construction progressed smoothly and safely.
          </motion.p>
          <motion.p {...rise(2)}>
            The satisfaction of the NEOM Running Tunnels team is captured in the
            following testimonial:
          </motion.p>
        </div>

        {/* Testimonial */}
        <motion.figure
          {...rise(3)}
          className="mt-6 rounded-2xl border border-white/[0.06] bg-[#1c1d24] p-6 md:p-8"
        >
          <Quote className="h-7 w-7 text-[#818CF8]" />
          <blockquote className="mt-4 text-lg italic leading-relaxed text-gray-200 md:text-xl">
            "We are managing the geological mapping parameters, convergences and
            displacement trends of tunnels with TeraStamp. It allows us to have
            unparalleled control over the construction project"
          </blockquote>
          <figcaption className="mt-5 text-sm font-medium text-gray-400">
            Pablo Corrales — Tunnel Engineer Leader at NEOM Lot 2-3
          </figcaption>
        </motion.figure>
      </section>

      {/* ===== Conclusion ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Conclusion</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
          <motion.p {...rise(1)}>
            TeraStamp proved to be an essential tool for the NEOM Running
            Tunnels project. By delivering robust data management, real‑time
            monitoring, and advanced analytics, TeraStamp enabled the
            construction team to overcome the challenges inherent in this large‑
            scale and intricate endeavour. As NEOM continues to push the
            boundaries of urban development, TeraStamp stands ready to support
            and enhance the efficiency and safety of its ambitious
            infrastructure initiatives.
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

export default NeomRunningTunnels;
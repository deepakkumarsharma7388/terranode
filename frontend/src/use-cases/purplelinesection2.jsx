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
    title: "LA Purple Line Extension (Section 2)",
    category: "Transportation Infrastructure",
    location: "Los Angeles, California, USA",
    description:
      "Supported the Purple Line 2 project in Los Angeles by providing digital monitoring and data management solutions that improved project visibility, reporting, and decision-making.",
    image: "/la-purple-line-section2.jpg",
    link: "/use-cases/purplelinesection2",
  },
  {
    title: "Purple Line 3 Stations, Los Angeles",
    category: "Urban Rail Transit Infrastructure",
    location: "Los Angeles, California, USA",
    description:
      "Enhanced the Purple Line 3 Stations project with real-time monitoring, centralized data management, and streamlined reporting solutions.",
    image: "/la-purple-line-3-stations.jpg",
    link: "/use-cases/purpleline3station",
  },
  {
    title: "VTA's BART Phase II – CP2 EWP 3C",
    category: "Transportation Infrastructure",
    location: "San Jose, California, USA",
    description:
      "Delivered digital monitoring and reporting solutions for the VTA BART Phase II CP2 EWP 3C project, improving project visibility and operational efficiency.",
    image: "/vta-bart-phase2-cp2.jpg",
    link: "/use-cases/vtaBartPhase2",
  },
  {
    title: "Purple Line 3 Tunnels",
    category: "Transportation Infrastructure",
    location: "Los Angeles, California, USA",
    description:
      "This case study looks at how TeraStamp supports one of the world's most ambitious infrastructure programs through integrated monitoring.",
    image: "/la-purple-line-3-tunnels.jpg",
    link: "/use-cases/purpleline3tunnels",
  },
];

// The link of THIS page — used to drop it from the suggestions.
const CURRENT_LINK = "/use-cases/la-purple-line-section-2";

const HERO_TAGS = ["Monitoring", "Purple Line 2", "Los Angeles", "USA"];

const solutionData = [
  "Centralized project data pulled together from multiple sources",
  "Real-time construction progress and activity feeds",
  "Geotechnical and structural monitoring instrument data",
  "Station development and project milestone tracking",
  "Automated reporting and digital documentation workflows",
  "Asset tracking and document management records",
  "Interactive visualization dashboards for every stakeholder",
];

const keyTools = [
  "Centralized dashboards that turned complex engineering and construction data into actionable insights",
  "Real-time monitoring of construction activities, progress, and operational performance",
  "Automated reporting workflows and streamlined digital documentation",
  "Asset tracking and milestone visibility shared across all project stakeholders",
];

const impactPoints = [
  {
    icon: Eye,
    lead: "Improved visibility",
    rest: "into construction progress and project performance",
  },
  {
    icon: AlertTriangle,
    lead: "Faster decisions",
    rest: "by surfacing issues earlier through real-time insights",
  },
  {
    icon: ShieldCheck,
    lead: "Stronger collaboration",
    rest: "across engineering, construction, and management teams",
  },
  {
    icon: FileCheck,
    lead: "A digital record",
    rest: "of reporting, documentation, and milestones",
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
    className="text-3xl font-bold tracking-tight text-[#32353A] sm:text-4xl md:text-5xl"
  >
    {children}
  </motion.h2>
);

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3 text-base leading-relaxed text-[#5C636E] md:text-lg">
    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F26418]" />
    <span>{children}</span>
  </li>
);

// A framed "platform window" wrapper for the product screenshots.
const PlatformFrame = ({ src, alt, ratio = "16/9" }) => (
  <motion.div
    {...rise(1)}
    className="overflow-hidden rounded-2xl border border-[#E2E5E9] bg-white shadow-xl"
  >
    <div className="flex h-9 items-center gap-2 border-b border-[#E2E5E9] bg-[#F5F6F7] px-4">
      <span className="h-3 w-3 rounded-full bg-red-500/70" />
      <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
      <span className="h-3 w-3 rounded-full bg-green-500/70" />
    </div>
    <div
      className="w-full bg-gradient-to-br from-[#F5F6F7] to-[#E2E5E9]"
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
    className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-[#F26418] bg-white p-3 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-[#FFF4EC] hover:shadow-2xl hover:shadow-[#F26418]/15"
  >
    {/* Radial glow that fades into the bottom-right corner on hover */}
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(242,100,24,0.35),rgba(242,100,24,0)_70%)] opacity-0 blur-2xl transition-opacity duration-500 ease-out group-hover:opacity-100"
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
      <span className="text-xs font-semibold uppercase tracking-wide text-[#F26418]">
        {story.category}
      </span>

      <h3 className="mt-1.5 text-lg font-bold leading-snug text-[#32353A] transition-colors duration-300 group-hover:text-[#F26418]">
        {story.title}
      </h3>

      <div className="mt-3 flex items-end justify-between">
        <span className="text-sm text-[#7C8595]">{story.location}</span>
        <ArrowRight
          aria-hidden="true"
          className="h-5 w-5 -translate-x-2 text-[#F26418] opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
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
    className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[32px] bg-[#F26418] px-8 pt-8 pb-8 md:flex-row md:px-14 md:pt-14 md:pb-14"
  >
    {/* Left copy */}
    <div className="z-10 max-w-md text-white">
      <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
        Turn your data into smart decisions
      </h2>
      <p className="mt-5 text-lg font-medium opacity-90">
        Claim a demo &amp; optimize your project with TeraStamp
      </p>
      <Link
        to="/contact"
        className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#F26418] shadow-sm transition-all duration-200 hover:bg-white/90"
      >
        Claim a demo now
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>

    {/* Right dashboard mock */}
    <div className="relative h-[260px] w-full self-end overflow-hidden rounded-2xl border border-white/20 shadow-2xl sm:h-[340px] md:w-[55%]">
      <img
        src="/purpleline.jpeg"
        alt="TeraStamp dashboard interface"
        className="h-full w-full object-cover"
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
          <span className="rounded bg-[#F26418] px-3 py-1 font-medium">
            + Add Advance
          </span>
        </div>
      </div>

      {/* Floating data popover */}
      <div className="absolute left-5 top-16 z-20 max-w-[210px] rounded-xl border border-white/10 bg-[#1a1b20]/95 p-4 text-xs text-white shadow-xl backdrop-blur-md">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full border border-[#F26418]/30 bg-[#F26418]/20 px-2 py-0.5 text-[10px] font-semibold text-[#F26418]">
            Under review
          </span>
          <span className="text-[10px] text-gray-500">10 min ago</span>
        </div>
        <p className="font-semibold text-gray-300">S514</p>
        <p className="mb-2 text-gray-400">Optical Target | Century City</p>
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
        <span className="absolute bottom-1/4 left-1/3 h-3 w-3 animate-pulse rounded-full bg-[#F26418] ring-4 ring-[#F26418]/30" />
        <span className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-[#F26418] ring-4 ring-[#F26418]/30" />
        <span className="absolute bottom-1/3 right-1/3 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-emerald-400/30" />
        <span className="absolute right-1/2 top-1/2 h-3 w-3 rounded-full bg-amber-500 ring-4 ring-amber-500/30" />
      </div>
    </div>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
const PurpleLineSection2 = () => {
  const suggestions = successStories.filter((s) => s.link !== CURRENT_LINK);

  return (
    <main className="bg-white">
      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 md:pt-20">
        <motion.h1
          {...rise(0)}
          className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#32353A] sm:text-5xl md:text-6xl"
        >
           LA Purple Line{" "}
          <span className="text-[#F26418]"> Extension</span> (Section 2)
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 max-w-2xl text-base leading-relaxed text-[#5C636E] md:text-lg"
        >
          TeraStamp's software team supported one of the largest transportation
          modernization programs in North America, delivering digital
          infrastructure monitoring and data management across the Wilshire
          Corridor.
        </motion.p>

        <motion.div
          {...rise(2)}
          className="mt-9 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5F6F7] to-[#E2E5E9]"
        >
          <img
            src="/la-purple-line-section2.jpg"
            alt="LA Metro Purple Line Extension construction"
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
                className="rounded-md bg-[#FFF4EC] px-3 py-1 text-sm font-medium text-[#C2410C]"
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            type="button"
            aria-label="Share this case study"
            className="rounded-md p-2 text-[#7C8595] transition-colors hover:bg-[#F5F6F7] hover:text-[#F26418]"
          >
            <Share2 className="h-5 w-5" />
          </button>
        </motion.div>
      </section>

      {/* ===== Project Introduction ===== */}
      <section className="mx-auto mt-14 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Project Introduction</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-[#5C636E] md:text-lg">
          <motion.p {...rise(1)}>
            The Los Angeles Metro Purple Line Extension — now known as the D Line
            Extension — is one of the largest transportation infrastructure
            programs in the United States, carrying the subway system westward
            through Beverly Hills and Century City to improve connectivity and
            ease congestion across the city.
          </motion.p>
          <motion.p {...rise(2)}>
            Section 2 adds approximately 2.6 miles of underground rail
            infrastructure, with major stations at Wilshire/Rodeo and Century
            City/Constellation. The work was delivered for the Los Angeles County
            Metropolitan Transportation Authority alongside design-build partners
            including Tutor Perini Corporation.
          </motion.p>
          <motion.p {...rise(3)}>
            For a project of this scale, built beneath one of the busiest urban
            corridors in the country, keeping every team aligned around accurate,
            timely data was essential from day one.
          </motion.p>
        </div>
      </section>

      {/* ===== The challenge ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>The Challenge</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-[#5C636E] md:text-lg">
          <motion.p {...rise(1)}>
            Constructed in a dense urban environment with complex tunneling
            beneath the Wilshire Corridor, the project generated large volumes of
            engineering and monitoring data across multiple contractors and
            stakeholders.
          </motion.p>
          <motion.p {...rise(2)}>
            Teams needed accurate, timely reporting and a single, clear view of
            progress and performance — without slow, manual data handling holding
            decisions back.
          </motion.p>
        </div>

        <div className="mt-9">
          <PlatformFrame
            src="/purpleline2challenge.jpeg"
            alt="Project map with construction zones and monitoring locations"
          />
        </div>
      </section>

      {/* ===== The solution ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>
          The solution: digital infrastructure software by TeraStamp
        </SectionTitle>
        <motion.p
          {...rise(1)}
          className="mt-6 text-base leading-relaxed text-[#5C636E] md:text-lg"
        >
          Our software team delivered a unified digital platform that collected,
          organized, and visualized project data from across the site, giving
          every team access through a single environment.
        </motion.p>

        <motion.p {...rise(2)} className="mt-5 font-semibold text-[#32353A]">
          The platform consolidated and connected:
        </motion.p>
        <motion.ul {...rise(2)} className="mt-4 space-y-3">
          {solutionData.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </motion.ul>
      </section>

      {/* ===== Key tools ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Key capabilities that supported the project</SectionTitle>
        <motion.p {...rise(1)} className="mt-6 font-semibold text-[#32353A]">
          Our platform made possible:
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
          className="mt-6 text-base leading-relaxed text-[#5C636E] md:text-lg"
        >
          With the platform in place, the project team gained:
        </motion.p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {impactPoints.map(({ icon: Icon, lead, rest }, i) => (
            <motion.div
              key={lead}
              {...rise(i)}
              className="flex items-start gap-4 rounded-2xl border-2 border-[#F26418] bg-white p-5"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#FFF4EC]">
                <Icon className="h-5 w-5 text-[#F26418]" />
              </span>
              <p className="text-base leading-relaxed text-[#5C636E]">
                <span className="font-semibold text-[#32353A]">{lead}</span> {rest}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...rise(1)}
          className="mt-7 text-base leading-relaxed text-[#5C636E] md:text-lg"
        >
          Bringing every workflow into a single platform gave stakeholders real{" "}
          <span className="font-semibold text-[#32353A]">oversight</span>. With
          centralized information and live insights throughout the project, teams
          stayed in control at every critical phase.
        </motion.p>

        <div className="mt-9">
          <PlatformFrame
            src="/purpleline2impac.jpeg"
            alt="Dashboard with project metrics and reporting"
          />
        </div>
      </section>

      {/* ===== Key insights ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Key insights from the Purple Line Extension</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-[#5C636E] md:text-lg">
          <motion.p {...rise(1)}>
            Major infrastructure programs in dense cities take more than strong
            design — they rely on clear, real-time data to guide them at every
            step. On the Purple Line Extension, TeraStamp turned complex project
            data into actionable insights teams could trust, moving them from
            simply observing progress to actively managing it.
          </motion.p>
          <motion.p {...rise(2)}>
            In large-scale urban transit, the real value isn't only efficient
            delivery — it's protecting the people and systems that depend on the
            project. With centralized intelligence, the team could take that
            responsibility seriously and stay a step ahead.
          </motion.p>
          <motion.p {...rise(3)} className="text-[#32353A]">
            <span className="font-semibold">
              Ready to elevate your project's visibility and efficiency?
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
          className="group mt-9 inline-flex items-center gap-2 rounded-lg border border-[#F26418]/50 px-4 py-2.5 text-sm font-semibold text-[#F26418] transition-colors hover:bg-[#F26418]/10"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Use Cases
        </Link>
      </section>
    </main>
  );
};

export default PurpleLineSection2;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

/* ---------- Color Palette ---------- */
const colors = {
  accent: "#F26418",
  white: "#FFFFFF",
  text: "#7C8595",
  heading: "#000000",
  border: "#D1D9E6",
  borderSoft: "#E2E8F0",
  cardBg: "#F9FAFB",
  cardHover: "#F1F3F5",
};

/* ------------------------------------------------------------------ */
/*  Article meta + tags                                                */
/* ------------------------------------------------------------------ */
const TAGS = ["Metro Construction", "Digital Monitoring", "Infrastructure"];

// This article's link; we'll pick recommendations based on its categories.
const CURRENT_LINK = "/blog/terastamp-joins-aetos";
const CURRENT_CATEGORIES = ["Infrastructure"];

/* ------------------------------------------------------------------ */
/*  The blog list – now exactly the three posts from BlogResources    */
/* ------------------------------------------------------------------ */
const BLOG_POSTS = [
  {
    id: "aetos",
    title: "Digital Monitoring in Metro Construction: Lessons from Large Infrastructure Projects",
    tags: "Infrastructure",
    date: "8 Oct 2025",
    image: "/blogimage/digitalmonotoring.jpg",
    accent: "from-[#F26418] to-[#D9550F]",
    categories: ["Infrastructure"],
    link: "/blog/digitalmonitoring",
  },
  {
    id: "tunnel-monitoring",
    title: "Simplified Tunnel Monitoring: Benefits of Using TeraStamp in Conventional and Mechanized Excavations",
    tags: "Infrastructure",
    date: "24 Jul 2025",
    image: "/blogimage/simplifiedtunnel.jpg",
    accent: "from-[#F26418] to-[#D9550F]",
    categories: ["Infrastructure", "Construction"],
    link: "/blog/tunnel-monitoring-made-simple",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation in Construction: TeraStamp's Data Intelligence Revolution",
    tags: "Infrastructure Data Intelligence , Construction",
    date: "3 Jan 2024",
    image: "/blogimage/digitaltransformation.jpg",
    accent: "from-[#F26418] to-[#D9550F]",
    categories: ["Construction"],
    link: "/blog/digital-transformation-construction",
  },
];

// Pick related posts (share a category) then top up to 3
const getRecommended = (currentLink, currentCategories, count = 3) => {
  const pool = BLOG_POSTS.filter((p) => p.link !== currentLink);
  const related = pool.filter((p) =>
    p.categories.some((c) => currentCategories.includes(c))
  );
  const rest = pool.filter((p) => !related.includes(p));
  return [...related, ...rest].slice(0, count);
};

const recommended = getRecommended(CURRENT_LINK, CURRENT_CATEGORIES);

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
/*  Helper to highlight last word in orange                           */
/* ------------------------------------------------------------------ */
const highlightLastWord = (text) => {
  const words = text.split(" ");
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <span style={{ color: colors.accent }}>{last}</span>
    </>
  );
};

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */
const SectionTitle = ({ children }) => {
  return (
    <motion.h2
      {...rise(0)}
      className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl"
    >
      {typeof children === "string" ? highlightLastWord(children) : children}
    </motion.h2>
  );
};

// Brand-coloured inline mention (orange now).
const Hl = ({ children }) => (
  <span className="font-semibold text-[#F26418]">{children}</span>
);

/* ------------------------------------------------------------------ */
/*  Recommended card — light theme, orange border                     */
/* ------------------------------------------------------------------ */
const RecommendedCard = ({ post }) => {
  const titleWords = post.title.split(" ");
  const lastWord = titleWords.pop();
  const titleRest = titleWords.join(" ");

  return (
    <Link
      to={post.link}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-[#F26418] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F26418] hover:bg-[#F9FAFB] hover:shadow-lg"
    >
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br ${post.accent}`}
      >
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => (e.currentTarget.style.opacity = "0")}
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-1 pt-5">
        <span className="text-sm text-[#7C8595]">{post.tags}</span>
        <h3 className="mt-2 text-lg font-bold leading-snug text-black transition-colors duration-300 group-hover:text-[#F26418]">
          {titleRest} <span className="text-[#F26418]">{lastWord}</span>
        </h3>
        <div className="mt-auto flex items-end justify-between pt-4">
          <span className="text-sm text-[#7C8595]">{post.date}</span>
          <ArrowRight
            aria-hidden="true"
            className="h-5 w-5 -translate-x-2 text-[#F26418] opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
          />
        </div>
      </div>
    </Link>
  );
};

/* ------------------------------------------------------------------ */
/*  CTA banner – orange background, white text, natural image        */
/* ------------------------------------------------------------------ */
const CtaBanner = () => (
  <motion.div
    {...rise(0)}
    className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[32px] bg-[#F26418] px-8 pt-8 pb-8 md:flex-row md:px-14 md:pt-14 md:pb-14"
  >
    <div className="z-10 max-w-md text-white">
      <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
        Turn your data into smart decisions
      </h2>
      <p className="mt-5 text-lg font-medium opacity-90">
        Claim a demo &amp; optimise your project with TeraStamp
      </p>
      <Link
        to="/contact"
        className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#F26418] shadow-sm transition-all duration-200 hover:bg-gray-50"
      >
        Claim a demo now
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>

    <div className="relative h-[260px] w-full self-end overflow-hidden rounded-2xl border border-white/20 shadow-2xl sm:h-[340px] md:w-[55%]">
      <img
        src="/test1.webp"
        alt="TeraStamp dashboard interface"
        className="h-full w-full object-cover"
        onError={(e) => (e.currentTarget.style.opacity = "0")}
      />
      <div className="absolute inset-x-0 top-0 flex h-11 items-center justify-between border-b border-white/10 bg-black/30 px-4 text-xs text-white backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded bg-white/20 px-3 py-1 text-white/80">
            Filters
          </span>
          <span className="rounded bg-white px-3 py-1 font-medium text-[#F26418]">
            + Add Advance
          </span>
        </div>
      </div>
      <div className="absolute left-5 top-16 z-20 max-w-[210px] rounded-xl border border-[#F26418]/30 bg-white/95 p-4 text-xs text-black shadow-xl backdrop-blur-md">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full border border-[#F26418]/30 bg-[#F26418]/20 px-2 py-0.5 text-[10px] font-semibold text-[#F26418]">
            Under review
          </span>
          <span className="text-[10px] text-[#7C8595]">10 min ago</span>
        </div>
        <p className="font-semibold text-black">S514</p>
        <p className="mb-2 text-[#7C8595]">Optical Target | Tunnel Site</p>
        <div className="space-y-1 font-mono text-[11px]">
          <p className="text-emerald-600">
            Delta X: <span className="text-black">-6.7 m</span>
          </p>
          <p className="text-emerald-600">
            Delta Y: <span className="text-black">-7.7 m</span>
          </p>
          <p className="text-emerald-600">
            Delta Z: <span className="text-black">-0.7 m</span>
          </p>
        </div>
      </div>
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
/*  Main Blog Component – same article content, only the recommendation list changed */
/* ------------------------------------------------------------------ */
const MetroMonitoringBlog = () => {
  // Split hero title for highlighting last word
  const heroTitle = "Digital Monitoring in Metro Construction: Lessons from Large Infrastructure Projects";
  const heroWords = heroTitle.split(" ");
  const heroLast = heroWords.pop();
  const heroRest = heroWords.join(" ");

  return (
    <main className="bg-white">
      {/* ===== Hero ===== */}
      <section className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 md:pt-20">
        <motion.h1
          {...rise(0)}
          className="text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl md:text-6xl"
        >
          {heroRest} <span style={{ color: colors.accent }}>{heroLast}</span>
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-5 max-w-3xl text-base leading-relaxed text-[#7C8595] md:text-lg"
        >
          Learn how digital monitoring improves visibility, reporting,
          collaboration, and project control in complex metro construction.
        </motion.p>

        <motion.p {...rise(2)} className="mt-4 text-sm text-[#7C8595]">
          1 Jul 2026
        </motion.p>

        {/* Hero cover image */}
        <motion.div
          {...rise(3)}
          className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#F9FAFB]"
        >
          <img
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80"
            alt="Metro construction"
            className="h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.opacity = "0")}
          />
        </motion.div>

        {/* Tags */}
        <motion.div {...rise(4)} className="mt-6 flex flex-wrap gap-2.5">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-md border-2 border-[#F26418] bg-white px-3 py-1 text-sm font-medium text-black"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ===== What is Digital Monitoring? ===== */}
      <section className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
        <SectionTitle>What Is Digital Monitoring</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-[#7C8595] md:text-lg">
          <motion.p {...rise(1)}>
            <Hl>Digital monitoring</Hl> is the process of collecting, organizing,
            and visualizing construction data using modern software instead
            of paper reports or disconnected spreadsheets. It enables
            engineers, contractors, consultants, and project owners to
            monitor progress from a centralized platform.
          </motion.p>
        </div>
      </section>

      {/* Image between sections */}
      <motion.div {...rise(0)} className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
          alt="Construction site"
          className="rounded-3xl shadow-lg w-full"
        />
      </motion.div>

      {/* ===== Why Metro Projects Need Digital Monitoring ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Why Metro Projects Need Digital Monitoring</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-[#7C8595] md:text-lg">
          <motion.p {...rise(1)}>
            Metro projects involve tunnels, stations, utilities, heavy
            equipment, and multiple contractors working simultaneously.
            <Hl> Digital monitoring</Hl> improves coordination, reduces reporting
            delays, and provides a clear view of project progress.
          </motion.p>
        </div>

        {/* Feature grid */}
        <motion.div {...rise(2)} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            "Centralized Reporting",
            "Progress Tracking",
            "Document Management",
            "Site Collaboration",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-white p-6 shadow border border-[#E2E8F0]">
              <h3 className="font-semibold text-[#F26418]">{item}</h3>
              <p className="mt-3 text-gray-600">
                Improve transparency and help teams make faster decisions.
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ===== Benefits ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Benefits of Digital Monitoring</SectionTitle>
        <motion.ul {...rise(1)} className="mt-6 list-disc pl-6 space-y-3 text-[#7C8595] text-base md:text-lg">
          <li>Better visibility into project progress</li>
          <li>Faster reporting from site teams</li>
          <li>Improved collaboration among stakeholders</li>
          <li>Organized project documentation</li>
          <li>Early identification of construction issues</li>
        </motion.ul>
      </section>

      {/* Image */}
      <motion.div {...rise(0)} className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
        <img
          src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
          alt="Metro tunnel"
          className="rounded-3xl shadow-lg w-full"
        />
      </motion.div>

      {/* ===== Lessons from Large Infrastructure Projects ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Lessons from Large Infrastructure Projects</SectionTitle>
        <div className="mt-6 space-y-4">
          {[
            "Centralized information speeds up decisions.",
            "Standardized reporting reduces manual errors.",
            "Continuous progress tracking keeps schedules under control.",
            "Digital documentation simplifies audits and project reviews.",
            "Collaboration improves when everyone works from the same platform.",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              {...rise(idx + 1)}
              className="rounded-2xl bg-white p-6 border-l-4 border-[#F26418] shadow"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Real-World Experience ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Real-World Experience</SectionTitle>
        <motion.p {...rise(1)} className="mt-6 text-base leading-relaxed text-[#7C8595] md:text-lg">
          TeraStamp has contributed to digital monitoring and reporting
          workflows for major metro infrastructure projects including:
        </motion.p>

        <motion.div {...rise(2)} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            "LA Purple Line Extension (Section 2)",
            "Purple Line 3 Stations",
            "Purple Line 3 Tunnels",
            "VTA's BART Phase II – CP2 EWP 3C",
          ].map((project) => (
            <div key={project} className="rounded-2xl bg-[#F9FAFB] p-5">
              <h3 className="font-semibold text-[#F26418]">{project}</h3>
              <p className="mt-2 text-gray-600">
                Digital reporting, progress visibility, and better project coordination.
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ===== Best Practices ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Best Practices</SectionTitle>
        <motion.ul {...rise(1)} className="mt-6 list-disc pl-6 space-y-3 text-[#7C8595] text-base md:text-lg">
          <li>Standardize reporting formats.</li>
          <li>Digitize daily site reports.</li>
          <li>Maintain centralized project data.</li>
          <li>Review project milestones regularly.</li>
          <li>Improve communication across all stakeholders.</li>
        </motion.ul>
      </section>

      {/* ===== Conclusion ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Conclusion</SectionTitle>
        <motion.p {...rise(1)} className="mt-6 text-base leading-relaxed text-[#7C8595] md:text-lg">
          <Hl>Digital monitoring</Hl> enables metro construction teams to improve
          visibility, reporting, collaboration, and project management.
          By replacing manual workflows with centralized digital systems,
          organizations can deliver infrastructure projects more
          efficiently and with greater confidence.
        </motion.p>
      </section>

      {/* ===== CTA ===== */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <CtaBanner />
      </section>

      {/* ===== Recommended ===== */}
      <section className="mx-auto mt-20 max-w-6xl px-4 pb-20 sm:px-6">
        <motion.h2
          {...rise(0)}
          className="text-3xl font-bold tracking-tight text-black sm:text-4xl"
        >
          Recommended from <span style={{ color: colors.accent }}>TeraStamp</span>
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recommended.map((post) => (
            <RecommendedCard key={post.id} post={post} />
          ))}
        </div>

        <Link
          to="/blog"
          className="group mt-9 inline-flex items-center gap-2 rounded-lg border-2 border-[#F26418] px-4 py-2.5 text-sm font-semibold text-[#F26418] transition-colors hover:bg-[#F26418]/10"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Link>
      </section>
    </main>
  );
};

export default MetroMonitoringBlog;
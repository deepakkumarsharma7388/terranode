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
const TAGS = ["Digital Transformation", "Data Intelligence", "Construction Technology"];

// This article's link; we'll pick recommendations based on its categories.
const CURRENT_LINK = "/blog/digital-transformation-construction";
const CURRENT_CATEGORIES = ["Construction"];

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
/*  Main Blog Component – Digital Transformation                      */
/* ------------------------------------------------------------------ */
const DigitalTransformationBlog = () => {
  // Split hero title for highlighting last word
  const heroTitle = "Digital Transformation in Construction: TeraStamp's Data Intelligence Revolution";
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
          Explore how TeraStamp drives digital transformation in construction by turning raw site data into actionable intelligence – improving efficiency, safety, and collaboration across projects.
        </motion.p>

        <motion.p {...rise(2)} className="mt-4 text-sm text-[#7C8595]">
          3 Jan 2024
        </motion.p>

        {/* Hero cover image */}
        <motion.div
          {...rise(3)}
          className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#F9FAFB]"
        >
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
            alt="Digital construction site"
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

      {/* ===== What is Digital Transformation in Construction? ===== */}
      <section className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
        <SectionTitle>What Is Digital Transformation in Construction</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-[#7C8595] md:text-lg">
          <motion.p {...rise(1)}>
            <Hl>Digital transformation</Hl> in construction means moving beyond
            paper forms and disconnected spreadsheets to a unified, data‑driven
            ecosystem. With <Hl>TeraStamp</Hl>, project teams can capture,
            visualise, and analyse site data in real time – unlocking
            intelligence that drives faster decisions, reduces rework, and
            enhances overall project performance.
          </motion.p>
        </div>
      </section>

      {/* Image between sections */}
      <motion.div {...rise(0)} className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
          alt="Digital monitoring tools"
          className="rounded-3xl shadow-lg w-full"
        />
      </motion.div>

      {/* ===== Why Digital Transformation is Critical ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Why Digital Transformation Is Critical for Construction</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-[#7C8595] md:text-lg">
          <motion.p {...rise(1)}>
            Construction is one of the least digitised industries, yet it faces
            immense pressure to improve productivity and safety. <Hl>Data intelligence</Hl>
            bridges the gap between site operations and office management,
            enabling proactive risk management and informed decision‑making.
          </motion.p>
        </div>

        {/* Feature grid */}
        <motion.div {...rise(2)} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            {
              title: "Real‑Time Visibility",
              desc: "Monitor every aspect of your project from a single dashboard – no more waiting for daily paper reports."
            },
            {
              title: "Predictive Analytics",
              desc: "Leverage historical data to forecast potential delays or safety issues before they occur."
            }
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-6 shadow border border-[#E2E8F0]">
              <h3 className="font-semibold text-[#F26418]">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ===== How TeraStamp Delivers Data Intelligence ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>How TeraStamp Delivers Data Intelligence</SectionTitle>
        <motion.ul {...rise(1)} className="mt-6 list-disc pl-6 space-y-3 text-[#7C8595] text-base md:text-lg">
          <li>Centralised data repository for all instrumentation</li>
          <li>Automated report generation (daily, weekly, monthly)</li>
          <li>Customizable dashboards for stakeholders</li>
          <li>Mobile data entry for field crews</li>
          <li>Integration with BIM and other construction software</li>
        </motion.ul>
      </section>

      {/* Image */}
      <motion.div {...rise(0)} className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
          alt="Construction technology"
          className="rounded-3xl shadow-lg w-full"
        />
      </motion.div>

      {/* ===== Key Benefits ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Key Benefits of TeraStamp's Data Intelligence</SectionTitle>
        <div className="mt-6 space-y-4">
          {[
            "Reduce rework by identifying issues early",
            "Improve safety through real‑time alerts",
            "Enhance collaboration between all project parties",
            "Shorten decision‑making cycles",
            "Boost overall project efficiency and profitability",
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

      {/* ===== Real‑World Impact ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Real‑World Impact</SectionTitle>
        <motion.p {...rise(1)} className="mt-6 text-base leading-relaxed text-[#7C8595] md:text-lg">
          TeraStamp has helped major construction firms achieve digital
          transformation goals on complex projects, including:
        </motion.p>

        <motion.div {...rise(2)} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            "LA Purple Line Extension – Integrated digital reporting",
            "VTA's BART Phase II – Real‑time progress tracking",
            "London Crossrail – Centralised instrumentation data",
            "Sydney Metro West – Predictive analytics for TBM performance",
          ].map((project) => (
            <div key={project} className="rounded-2xl bg-[#F9FAFB] p-5">
              <h3 className="font-semibold text-[#F26418]">{project}</h3>
              <p className="mt-2 text-gray-600">
                Leveraged data intelligence to improve outcomes.
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ===== Best Practices ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Best Practices for Digital Transformation</SectionTitle>
        <motion.ul {...rise(1)} className="mt-6 list-disc pl-6 space-y-3 text-[#7C8595] text-base md:text-lg">
          <li>Start with a clear digital strategy aligned with project goals.</li>
          <li>Involve all stakeholders early in the implementation.</li>
          <li>Provide training for site teams on new tools.</li>
          <li>Integrate data from multiple sources for a holistic view.</li>
          <li>Continuously review and improve data workflows.</li>
        </motion.ul>
      </section>

      {/* ===== Conclusion ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Conclusion</SectionTitle>
        <motion.p {...rise(1)} className="mt-6 text-base leading-relaxed text-[#7C8595] md:text-lg">
          <Hl>TeraStamp</Hl> is at the forefront of the data intelligence
          revolution in construction. By digitising monitoring and reporting,
          we empower teams to make smarter, faster decisions – ultimately
          delivering safer, more efficient projects. Embrace the digital
          future with TeraStamp.
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

export default DigitalTransformationBlog;
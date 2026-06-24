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
const TAGS = ["Tunnels", "TBM", "Monitoring"];

// This article lives in the blog list (id "design-challenges"); exclude + relate.
const CURRENT_LINK = "/blog/tunnel-design-challenges";
const CURRENT_CATEGORIES = ["Infrastructure"];

/* ------------------------------------------------------------------ */
/*  The blog list (same source as the /blog grid). Suggestions are     */
/*  ONLY ever picked from here, so nothing shows up that isn't on the  */
/*  blog page itself.                                                  */
/* ------------------------------------------------------------------ */
const BLOG_POSTS = [
  { id: "aetos", title: "TeraStamp Joins AETOS: Driving Innovation in Underground Construction", tags: "Infrastructure", date: "8 Oct 2025", image: "/test1.webp", accent: "from-[#4b4bd6] to-[#2a2a6e]", categories: ["Infrastructure"], link: "/blog/proqio-joins-aetos" },
  { id: "design-challenges", title: "Top 5 Design Challenges in Tunnel Projects", tags: "Infrastructure", date: "1 Oct 2025", image: "/test2.jpg", accent: "from-[#3f57b8] to-[#1f2a55]", categories: ["Infrastructure"], link: "/blog/tunnel-design-challenges" },
  { id: "tunnel-monitoring", title: "Simplified Tunnel Monitoring: Benefits of Using TeraStamp in Conventional and Mechanized Excavations", tags: "Infrastructure", date: "24 Jul 2025", image: "/test3.avif", accent: "from-[#5151e6] to-[#2c2c8a]", categories: ["Infrastructure", "Construction"], link: "/blog/tunnel-monitoring-made-simple" },
  { id: "data-science-role", title: "Data Science's Crucial Role in Modern Construction | TeraStamp", tags: "Data Science , Construction", date: "2 Jan 2024", image: "/test2.jpg", accent: "from-[#123040] to-[#0a1820]", categories: ["Construction", "Data Science"], link: "/blog/data-science-in-construction" },
  { id: "data-driven-infra", title: "Building Tomorrow: Leveraging Data-Driven Infrastructure in Construction | TeraStamp", tags: "Data-Driven Infrastructures , Construction", date: "1 Jan 2024", image: "/test3.avif", accent: "from-[#1a2a4a] to-[#0c1428]", categories: ["Construction"], link: "/blog/data-driven-infrastructure" },
  { id: "digital-transformation", title: "Digital Transformation in Construction: TeraStamp's Data Intelligence Revolution", tags: "Infrastructure Data Intelligence , Construction", date: "3 Jan 2024", image: "/test1.webp", accent: "from-[#2a2a32] to-[#15151a]", categories: ["Construction"], link: "/blog/digital-transformation-construction" },
  { id: "critical-role", title: "The Critical Role of Infrastructure Data in Tunnels, Dams, and Metro Projects", tags: "Smart Construction , Data Science", date: "3 Jan 2024", image: "/test2.jpg", accent: "from-[#3a2418] to-[#1a120c]", categories: ["Data Science"], link: "/blog/critical-role-infrastructure-data" },
  { id: "smart-cities", title: "Transforming Smart Cities: The Impact of Infrastructure Data on Urban Evolution", tags: "Smart Cities , Infrastructure Data", date: "3 Jan 2024", image: "/test3.avif", accent: "from-[#0c3a35] to-[#06201d]", categories: ["Smart cities"], link: "/blog/transforming-smart-cities" },
  { id: "mining", title: "TeraStamp Data Intelligence: Enhancing Safety and Efficiency in Mining & Tailings Operations", tags: "Mining", date: "3 Apr 2024", image: "/test1.webp", accent: "from-[#3a4a2a] to-[#1c2415]", categories: ["Mining"], link: "/blog/mining-tailings-operations" },
  { id: "deltaiot", title: "TeraStamp Partners with DeltaIoT to Expand GNSS Monitoring Capabilities", tags: "Integration", date: "12 Aug 2025", image: "/test3.avif", accent: "from-[#5151e6] to-[#2c2c8a]", categories: ["Integration"], link: "/blog/proqio-deltaiot-integration" },
  { id: "campbell", title: "TeraStamp Integrates Campbell Scientific's Monitoring Technology", tags: "Integration", date: "17 Jun 2025", image: "/test2.jpg", accent: "from-[#4b4bd6] to-[#2a2a6e]", categories: ["Integration"], link: "/blog/proqio-campbell-scientific" },
  { id: "osprey", title: "TeraStamp Integrates Osprey Measurement Systems", tags: "Integration", date: "27 May 2025", image: "/test3.avif", accent: "from-[#3f57b8] to-[#1f2a55]", categories: ["Integration"], link: "/blog/proqio-osprey-measurement" },
];

// Pick related posts first (shared category), then top up to `count` from the rest.
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

// Framed article image – natural, no border.
const ArticleImage = ({ src, alt, accent = "from-[#f0f2f5] to-[#d9dde4]" }) => (
  <motion.div
    {...rise(1)}
    className={`mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${accent}`}
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-full w-full object-cover"
      onError={(e) => (e.currentTarget.style.opacity = "0")}
    />
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Recommended card — light theme, orange border                     */
/* ------------------------------------------------------------------ */
const RecommendedCard = ({ post }) => {
  // Extract last word of title to highlight
  const titleWords = post.title.split(" ");
  const lastWord = titleWords.pop();
  const titleRest = titleWords.join(" ");

  return (
    <Link
      to={post.link}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-[#F26418] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F26418] hover:bg-[#F9FAFB] hover:shadow-lg"
    >
      {/* Image */}
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

      {/* Body */}
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
    {/* Left copy */}
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

    {/* Right dashboard mock – natural image, no grayscale */}
    <div className="relative h-[260px] w-full self-end overflow-hidden rounded-2xl border border-white/20 shadow-2xl sm:h-[340px] md:w-[55%]">
      <img
        src="/test1.webp"
        alt="TeraStamp dashboard interface"
        className="h-full w-full object-cover"
        onError={(e) => (e.currentTarget.style.opacity = "0")}
      />

      {/* Mock top app bar – subtle overlay */}
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

      {/* Floating data popover – light theme */}
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
const BlogPostDesignChallenges = () => {
  // Hero title: "Top 5 Design Challenges in Tunnel Projects" – last word "Projects" orange
  const heroTitle = "Top 5 Design Challenges in Tunnel Projects";
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
          Tunnel design is a high‑stakes balancing act. Discover the five most
          common hurdles consultants encounter – from limited early data to
          on‑site responsiveness – and learn how to turn them into advantages.
        </motion.p>

        <motion.p {...rise(2)} className="mt-4 text-sm text-[#7C8595]">
          1 Oct 2025
        </motion.p>

        {/* Hero cover — natural image, no border */}
        <motion.div
          {...rise(3)}
          className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#F9FAFB]"
        >
          <img
            src="/test2.jpg"
            alt="Top 5 Design Challenges in Tunnel Projects"
            className="h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.opacity = "0")}
          />
        </motion.div>

        {/* Tags – orange border style */}
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

      {/* ===== Intro ===== */}
      <section className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
        <div className="space-y-5 text-base leading-relaxed text-[#7C8595] md:text-lg">
          <motion.p {...rise(0)}>
            Tunnel projects are among the most demanding endeavours in civil
            engineering – precisely where platforms like <Hl>TeraStamp</Hl> prove
            invaluable, streamlining how designers and consultants handle data
            and mitigate risks. They involve numerous stakeholders, compressed
            schedules, and substantial technical and financial exposure. From
            early conceptual sketches to the final construction phases,
            engineers and consultants wrestle with incomplete information,
            geological uncertainty, and the pressure to make swift, critical
            decisions.
          </motion.p>
          <motion.p {...rise(1)}>
            Unlike many above‑ground structures, tunnels operate in settings
            with minimal visibility and virtually no room for error. Initial
            design assumptions must later withstand the realities of excavation,
            while asset owners, contractors, and consultants each bring
            conflicting objectives. Add the necessity of strong governance,
            impartial records, and rapid adaptation to site conditions, and it
            becomes clear why tunnel projects demand exceptional precision.
          </motion.p>
          <motion.p {...rise(2)}>
            In this article, we examine the{" "}
            <span className="font-semibold text-black">
              five most significant challenges designers and consultants face in
              tunnel projects today
            </span>
            – challenges that, if left unaddressed, can lead to delays, budget
            overruns, and elevated risks.
          </motion.p>
        </div>
      </section>

      {/* ===== Challenge #1 ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Challenge #1: Designing with Limited Early Data</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-[#7C8595] md:text-lg">
          <motion.p {...rise(1)}>
            At the outset of a tunnel project, designers are expected to produce
            accurate, risk‑informed designs using very little project‑specific
            information. Geotechnical conditions remain uncertain, historical
            records may be incomplete, and site‑specific performance data is
            rarely available. Consequently, the work carried out during the
            design phase – which heavily influences project success – often
            relies on assumptions rather than hard evidence.
          </motion.p>
          <motion.p {...rise(2)}>
            This shortage of reliable early data heightens the risk of
            unforeseen ground conditions, design revisions, and cost escalations.
            It also forces engineers to balance safety, performance, and economy
            without a full understanding of the site.
          </motion.p>
        </div>

        <ArticleImage
          src="/test3.avif"
          alt="Tunnel cross-section model alongside a dark excavated tunnel"
        />
      </section>

      {/* ===== Challenge #2 ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Challenge #2: Balancing Client and Contractor Priorities</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-[#7C8595] md:text-lg">
          <motion.p {...rise(1)}>
            Tunnel projects bring together stakeholders with fundamentally
            different goals. Clients tend to prioritise long‑term performance,
            safety, and value for money. Contractors, on the other hand, must
            submit competitive bids, manage tight budgets, and adhere to
            aggressive schedules.
          </motion.p>
          <motion.p {...rise(2)}>
            Designers and consultants are caught in the middle of these
            competing interests. During the tender stage, they must craft
            designs that are both cost‑effective and technically robust enough
            to win the contract. After award, those same designs need to be
            translated into detailed, buildable solutions that align with actual
            site conditions.
          </motion.p>
          <motion.p {...rise(3)}>
            Striking the right equilibrium between client expectations and
            contractor constraints is one of the most persistent challenges in
            tunnel design – and a frequent source of friction as projects evolve.
          </motion.p>
        </div>
      </section>

      {/* ===== Challenge #3 ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Challenge #3: Managing Assumptions and Uncertainty</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-[#7C8595] md:text-lg">
          <motion.p {...rise(1)}>
            In the early phases, designers and contractors often operate on
            assumptions regarding ground behaviour, construction risks, and
            structural performance. These assumptions typically arise because
            information is scarce or released incrementally during the bidding
            process.
          </motion.p>
          <motion.p {...rise(2)}>
            The real challenge emerges later: as more data becomes available,
            those assumptions must be revisited, tested, and refined. If they
            are not systematically tracked, or if they remain scattered across
            disconnected documents, critical details can be overlooked. This
            creates a risk of clashes, errors, or costly rework during
            construction.
          </motion.p>
          <motion.p {...rise(3)}>
            Uncertainty is inherent in every underground project, but without
            structured methods to manage it, it can quickly escalate into
            delays, disputes, and mounting costs.
          </motion.p>
        </div>

        <ArticleImage
          src="/test1.webp"
          alt="Engineer working on tunnel CAD design on a monitor"
        />
      </section>

      {/* ===== Challenge #4 ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Challenge #4: Maintaining Independent Records During Construction</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-[#7C8595] md:text-lg">
          <motion.p {...rise(1)}>
            During construction, consultants play a crucial role in safeguarding
            the client's interests and ensuring that work conforms to design
            intent. To do this effectively, they must keep reliable,
            independent records of monitoring results, progress checks, quality
            observations, and technical commentary – separate from contractor
            reports.
          </motion.p>
          <motion.p {...rise(2)}>
            The difficulty lies not only in preserving this independence but
            also in comparing consultant data with contractor submissions such
            as shift logs, quality documentation, and progress updates. Without
            a structured way to collect and organise this information, there is
            a risk of missing critical issues, reacting belatedly, or spending
            excessive effort consolidating evidence.
          </motion.p>
          <motion.p {...rise(3)}>
            If discrepancies are detected too late, the consequences can include
            expensive corrections, programme delays, and a weakened client
            position in claims or disputes.
          </motion.p>
        </div>
      </section>

      {/* ===== Challenge #5 ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Challenge #5: Responding Quickly to Site Changes</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-[#7C8595] md:text-lg">
          <motion.p {...rise(1)}>
            For designers working alongside contractors during construction, one
            of the greatest difficulties is reacting swiftly to unexpected site
            conditions. Discrepancies often emerge between the original design
            and what is actually encountered during excavation. Ground behaviour
            may deviate from initial predictions, or monitoring data may reveal
            hazards that demand immediate attention.
          </motion.p>
          <motion.p {...rise(2)}>
            In such situations, design updates must be issued under severe time
            pressure to avoid downtime. Without rapid and comprehensive access
            to construction and monitoring data, teams risk working reactively,
            providing patchy solutions, or overlooking critical factors.
          </motion.p>
          <motion.p {...rise(3)}>
            The fallout can be severe: delays in the construction schedule, lost
            productivity, costly rework, and increased project expenditure.
          </motion.p>
        </div>
      </section>

      {/* ===== Turning Challenges into Opportunities ===== */}
      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
        <SectionTitle>Turning Challenges into Opportunities</SectionTitle>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-[#7C8595] md:text-lg">
          <motion.p {...rise(1)}>
            These five challenges illustrate the pressure tunnel projects place
            on designers and consultants – from initial sketches right through
            to the final construction stages. Every phase demands precision,
            independence, and the agility to act decisively.
          </motion.p>
          <motion.p {...rise(2)}>
            To explore practical approaches to overcoming these hurdles,{" "}
            <Link
              to="/guides/tunnel-design-solutions"
              className="font-semibold text-[#F26418] underline-offset-2 hover:underline"
            >
              download our free guide "Practical Solutions for Designers and
              Consultants in Tunnel Projects"
            </Link>{" "}
            or reach out to see how TeraStamp supports design and consultancy
            teams on real tunnel projects.
          </motion.p>
        </div>
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

export default BlogPostDesignChallenges;
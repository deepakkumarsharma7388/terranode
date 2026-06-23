import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Filter categories (order matters — matches the tab row)            */
/* ------------------------------------------------------------------ */
const CATEGORIES = [
  "All",
  "Infrastructure",
  "Construction",
  "Data Science",
  "Smart cities",
  "Mining",
  "Integration",
];

/* ------------------------------------------------------------------ */
/*  Blog posts. `categories` drives the filter; `tags` is the eyebrow. */
/*  A post can live in several filter buckets at once.                 */
/* ------------------------------------------------------------------ */
const posts = [
  {
    id: "aetos",
    title: "TeraStamp Joins AETOS: Driving Innovation in Underground Construction",
    tags: "Infrastructure",
    date: "8 Oct 2025",
    image: "/builapar.jpeg",
    accent: "from-[#4b4bd6] to-[#2a2a6e]",
    categories: ["Infrastructure"],
    link: "/blog/proqio-joins-aetos",
  },
  {
    id: "design-challenges",
    title: "Top 5 Design Challenges in Tunnel Projects",
    tags: "Infrastructure",
    date: "1 Oct 2025",
    image: "/tunnel.jpeg",
    accent: "from-[#3f57b8] to-[#1f2a55]",
    categories: ["Infrastructure"],
    link: "/blog/tunnel-design-challenges",
  },
  {
    id: "tunnel-monitoring",
    title:
      "Simplified Tunnel Monitoring: Benefits of Using TeraStamp in Conventional and Mechanized Excavations",
    tags: "Infrastructure",
    date: "24 Jul 2025",
    image: "building.jpeg",
    accent: "from-[#5151e6] to-[#2c2c8a]",
    categories: ["Infrastructure", "Construction"],
    link: "/blog/tunnel-monitoring-made-simple",
  },
  {
    id: "data-science-role",
    title: "Data Science's Crucial Role in Modern Construction | TeraStamp",
    tags: "Data Science , Construction",
    date: "2 Jan 2024",
    image: "/pipelin.jpeg",
    accent: "from-[#123040] to-[#0a1820]",
    categories: ["Construction", "Data Science"],
    link: "/blog/data-science-in-construction",
  },
  {
    id: "data-driven-infra",
    title:
      "Building Tomorrow: Leveraging Data-Driven Infrastructure in Construction | TeraStamp",
    tags: "Data-Driven Infrastructures , Construction",
    date: "1 Jan 2024",
    image: "/road.jpeg",
    accent: "from-[#1a2a4a] to-[#0c1428]",
    categories: ["Construction"],
    link: "/blog/data-driven-infrastructure",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation in Construction: TeraStamp's Data Intelligence Revolution",
    tags: "Infrastructure Data Intelligence , Construction",
    date: "3 Jan 2024",
    image: "/watersav.jpeg",
    accent: "from-[#2a2a32] to-[#15151a]",
    categories: ["Construction"],
    link: "/blog/digital-transformation-construction",
  },
  {
    id: "critical-role",
    title:
      "The Critical Role of Infrastructure Data in Tunnels, Dams, and Metro Projects",
    tags: "Smart Construction , Data Science",
    date: "3 Jan 2024",
    image: "/dam.jpeg",
    accent: "from-[#3a2418] to-[#1a120c]",
    categories: ["Data Science"],
    link: "/blog/critical-role-infrastructure-data",
  },
  {
    id: "smart-cities",
    title: "Transforming Smart Cities: The Impact of Infrastructure Data on Urban Evolution",
    tags: "Smart Cities , Infrastructure Data",
    date: "3 Jan 2024",
    image: "/cit.jpeg",
    accent: "from-[#0c3a35] to-[#06201d]",
    categories: ["Smart cities"],
    link: "/blog/transforming-smart-cities",
  },
  {
    id: "mining",
    title:
      "TeraStamp Data Intelligence: Enhancing Safety and Efficiency in Mining & Tailings Operations",
    tags: "Mining",
    date: "3 Apr 2024",
    image: "/mine.jpeg",
    accent: "from-[#3a4a2a] to-[#1c2415]",
    categories: ["Mining"],
    link: "/blog/mining-tailings-operations",
  },
  {
    id: "deltaiot",
    title: "TeraStamp Partners with DeltaIoT to Expand GNSS Monitoring Capabilities",
    tags: "Integration",
    date: "12 Aug 2025",
    image: "/test3.avif",
    accent: "from-[#5151e6] to-[#2c2c8a]",
    categories: ["Integration"],
    link: "/blog/proqio-deltaiot-integration",
  },
  {
    id: "campbell",
    title: "TeraStamp Integrates Campbell Scientific's Monitoring Technology",
    tags: "Integration",
    date: "17 Jun 2025",
    image: "/test2.jpg",
    accent: "from-[#4b4bd6] to-[#2a2a6e]",
    categories: ["Integration"],
    link: "/blog/proqio-campbell-scientific",
  },
  {
    id: "osprey",
    title: "TeraStamp Integrates Osprey Measurement Systems",
    tags: "Integration",
    date: "27 May 2025",
    image: "/test3.avif",
    accent: "from-[#3f57b8] to-[#1f2a55]",
    categories: ["Integration"],
    link: "/blog/proqio-osprey-measurement",
  },
];

/* ------------------------------------------------------------------ */
/*  Filter tab pill                                                    */
/* ------------------------------------------------------------------ */
const FilterTab = ({ label, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
      active
        ? "bg-[#A4B3FF] text-[#16171c]"
        : "bg-white/[0.04] text-gray-300 hover:bg-white/[0.08] hover:text-white"
    }`}
  >
    {label}
  </button>
);

/* ------------------------------------------------------------------ */
/*  Blog card                                                          */
/* ------------------------------------------------------------------ */
const BlogCard = ({ post }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.92 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
  >
    <Link
      to={post.link}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-[#818CF8]/30 bg-[#26262E] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#818CF8]/70 hover:bg-[#2E2E38] hover:shadow-2xl hover:shadow-black/40"
    >
      {/* Radial glow that fades into the bottom-right corner on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.45),rgba(129,140,248,0)_70%)] opacity-0 blur-2xl transition-opacity duration-500 ease-out group-hover:opacity-100"
      />

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
        <span className="text-sm text-gray-400">{post.tags}</span>
        <h3 className="mt-2 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-indigo-200">
          {post.title}
        </h3>

        <div className="mt-auto flex items-end justify-between pt-4">
          <span className="text-sm text-gray-500">{post.date}</span>
          <ArrowRight
            aria-hidden="true"
            className="h-5 w-5 -translate-x-2 text-[#A4B3FF] opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
          />
        </div>
      </div>
    </Link>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
const BlogResources = () => {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const inCategory = active === "All" || p.categories.includes(active);
      const inSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tags.toLowerCase().includes(q);
      return inCategory && inSearch;
    });
  }, [active, query]);

  return (
    <section className="bg-[#121317]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        {/* Hero */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Real Projects, Future Visions, Industry Insights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-5 text-lg text-gray-400 md:text-xl"
        >
          Explore TeraStamp's Blog for a pulse on innovation and success stories.
        </motion.p>

        {/* Filter tabs (wrap to multiple rows on small screens) */}
        <div className="mt-12 flex flex-wrap gap-2.5">
          {CATEGORIES.map((cat) => (
            <FilterTab
              key={cat}
              label={cat}
              active={active === cat}
              onClick={() => setActive(cat)}
            />
          ))}
        </div>

        {/* Search */}
        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/[0.05] px-5 py-4">
          <Search className="h-5 w-5 flex-shrink-0 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search blog articles..."
            className="w-full bg-transparent text-base text-white placeholder:text-gray-500 focus:outline-none"
          />
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-gray-400">
              No articles match your search.
            </p>
            <button
              type="button"
              onClick={() => {
                setActive("All");
                setQuery("");
              }}
              className="mt-4 rounded-lg border border-[#818CF8]/40 px-4 py-2 text-sm font-semibold text-[#A4B3FF] transition-colors hover:bg-[#818CF8]/10"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogResources;
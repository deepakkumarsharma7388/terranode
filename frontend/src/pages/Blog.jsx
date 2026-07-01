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
  "Mining",
  
];

/* ------------------------------------------------------------------ */
/*  Blog posts. `categories` drives the filter; `tags` is the eyebrow. */
/*  A post can live in several filter buckets at once.                 */
/* ------------------------------------------------------------------ */
const posts = [
  {
    id: "aetos",
    title: "Digital Monitoring in Metro Construction: Lessons from Large Infrastructure Projects is project ",
    tags: "Infrastructure",
    date: "8 Oct 2025",
    image: "/blogimage/digitalmonotoring.jpg",
    accent: "from-[#F26418] to-[#D9550F]",
    categories: ["Infrastructure"],
    link: "/blog/digitalmonitoring",
  },

  {
    id: "tunnel-monitoring",
    title:
      "Simplified Tunnel Monitoring: Benefits of Using TeraStamp in Conventional and Mechanized Excavations",
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

/* ------------------------------------------------------------------ */
/*  Filter tab pill                                                    */
/* ------------------------------------------------------------------ */
const FilterTab = ({ label, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
      active
        ? "bg-[#F26418] text-white"
        : "bg-[#F5F6F7] text-[#5C636E] hover:bg-[#FFF4EC] hover:text-[#F26418]"
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
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-[#F26418] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFF4EC] hover:shadow-2xl hover:shadow-[#F26418]/15"
    >
      {/* Radial glow that fades into the bottom-right corner on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(242,100,24,0.35),rgba(242,100,24,0)_70%)] opacity-0 blur-2xl transition-opacity duration-500 ease-out group-hover:opacity-100"
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
        <span className="text-sm text-[#7C8595]">{post.tags}</span>
        <h3 className="mt-2 text-xl font-bold leading-snug text-[#32353A] transition-colors duration-300 group-hover:text-[#F26418]">
          {post.title}
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
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        {/* Hero */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#32353A] sm:text-5xl md:text-6xl"
        >
          Real Projects, Future Visions, <span className="text-[#F26418]">Industry Insights</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-5 text-lg text-[#5C636E] md:text-xl"
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
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#E2E5E9] bg-[#F5F6F7] px-5 py-4">
          <Search className="h-5 w-5 flex-shrink-0 text-[#7C8595]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search blog articles..."
            className="w-full bg-transparent text-base text-[#32353A] placeholder:text-[#7C8595] focus:outline-none"
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
            <p className="text-lg text-[#5C636E]">
              No articles match your search.
            </p>
            <button
              type="button"
              onClick={() => {
                setActive("All");
                setQuery("");
              }}
              className="mt-4 rounded-lg border border-[#F26418]/50 px-4 py-2 text-sm font-semibold text-[#F26418] transition-colors hover:bg-[#F26418]/10"
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
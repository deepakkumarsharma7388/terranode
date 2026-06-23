import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


const MotionLink = motion(Link);


const AdvancedModules = () => {
  const modules = [
    {
      title: "Digital Twin",
      link: "/modules/digital-twin", // <-- the page this card opens
      video: "/herovideo.mp4", // <-- replace with your video
      poster: "/images/modules/digital-twin.png", // optional still shown before play
      placeholder: "from-[#8a7d63] to-[#3a4a5a]",
      description:
        "Work with your data inside a 3D spatial environment. The Digital Twin pulls together sensors, GIS, and BIM to give a clear view of infrastructure conditions. Review data in context, compare behavior over time, and support technical analysis.",
    },
    {
      title: "Ada: Our AI Assistant",
      link: "/modules/ada", // <-- the page this card opens
      video: "/herovideo.mp4", // <-- replace with your video
      poster: "/images/modules/ada.png", // optional still shown before play
      placeholder: "from-[#3a4a2a] to-[#1f2a1a]",
      description:
        "Engage with your project data using natural language. Ada links into your TeraStamp environment to reach real-time and historical data, analyze it, and give clear answers to your questions.",
    },
  ];

  return (
    <section className="bg-[#1E1C24] py-20 overflow-hidden">
      <div className="mx-auto max-w-5xl px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            TeraStamp Advanced Modules
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400 text-lg">
            Add targeted capabilities to your TeraStamp setup. These modules
            help you visualize data more effectively and draw out insights for
            analysis and decision-making.
          </p>
        </motion.div>

        {/* Module cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {modules.map((mod, index) => (
            <MotionLink
              key={mod.title}
              to={mod.link}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="
                group block rounded-2xl border border-white/10 bg-[#26242E] p-3.5
                transition-all duration-300
                hover:-translate-y-1 hover:bg-[#2F2D3A]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B8FFF]/60
              "
            >
              {/* Video */}
              <div
                className={`relative h-52 overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br ${mod.placeholder}`}
              >
                <video
                  src={mod.video}
                  poster={mod.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={mod.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Title */}
              <h3
                className="mt-4 px-1"
                style={{
                  fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "29px",
                  color: "rgb(249, 249, 250)",
                }}
              >
                {mod.title}
              </h3>

              {/* Description */}
              <p
                className="mt-2 px-1 pb-1"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "22px",
                  color: "rgb(202, 200, 208)",
                }}
              >
                {mod.description}
              </p>
            </MotionLink>
          ))}
        </div>

        
      </div>
    </section>
  );
};


const CTAsection = () => {
  return (
    <section className="bg-[#1E1C24] min-h-screen w-full flex items-center justify-center p-6 sm:p-12">
      <div className="bg-[#A4B3FF] rounded-[32px] w-full max-w-6xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 pt-8 pb-6 md:px-16 md:pt-16 md:pb-12 gap-8 relative">
        
        {/* Left Content Column */}
        <div className="flex flex-col max-w-md z-10 text-[#111216]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Discover the "New" New with TeraStamp
          </h1>
          <p className="text-lg sm:text-xl font-medium opacity-90 mb-8">
            Start building faster today
          </p>
          <div>
            {/* Swapped to React Router Link tag */}
            <Link 
              to="/contact" // Set your internal route path here
              className="inline-flex items-center justify-center gap-2 bg-white text-[#111216] font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:bg-gray-50 transition-all duration-200 group"
            >
              Claim demo now
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Dashboard/Map Graphic Column */}
        <div className="relative w-full md:w-[55%] h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 self-end">
          <img 
            src="/test1.webp" 
            alt="TeraStamp 3D Map Interface"
            className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity bg-slate-800"
          />
          
          {/* Mock Top App Bar */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-[#1e2026] flex items-center justify-between px-4 text-white text-xs border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-[#2a2d36] px-3 py-1 rounded text-gray-400">Filters</span>
              <span className="bg-[#4f46e5] px-3 py-1 rounded font-medium">+ Add Advance</span>
            </div>
          </div>

          {/* Floating Data Card Popover */}
          <div className="absolute top-16 left-6 bg-[#1a1b20]/95 backdrop-blur-md text-white text-xs p-4 rounded-xl shadow-xl border border-white/10 max-w-[220px] z-20">
            <div className="flex justify-between items-center mb-2">
              <span className="bg-purple-900/50 text-purple-300 px-2 py-0.5 rounded-full text-[10px] font-semibold border border-purple-500/30">
                Under review
              </span>
              <span className="text-gray-500 text-[10px]">10 min ago</span>
            </div>
            <p className="font-semibold text-gray-300">S514</p>
            <p className="text-gray-400 mb-2">Optical Target | Encantada</p>
            <div className="space-y-1 font-mono text-[11px]">
              <p className="text-emerald-400">Delta X: <span className="text-white">-6.7 m</span></p>
              <p className="text-emerald-400">Delta Y: <span className="text-white">-7.7 m</span></p>
              <p className="text-emerald-400">Delta Z: <span className="text-white">-0.7 m</span></p>
            </div>
          </div>

          {/* Map Node Pins Overlay */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="relative w-full h-full">
              <span className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-blue-500/30 animate-pulse"></span>
              <span className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full ring-4 ring-purple-500/30"></span>
              <span className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-emerald-400 rounded-full ring-4 ring-emerald-400/30"></span>
              <span className="absolute top-1/2 right-1/2 w-3 h-3 bg-amber-500 rounded-full ring-4 ring-amber-500/30"></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


const Modulesection=()=>{
  return(
    <div>
      <AdvancedModules/>
       <CTAsection/>
    </div>
  )
}

export default Modulesection;
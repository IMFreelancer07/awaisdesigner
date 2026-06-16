import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ExternalLink, Eye } from "lucide-react";
import restaurantFlyers from "../../imports/portfolio-restaurant-flyers.jpg";
import socialMediaDesigns from "../../imports/portfolio-social-media-designs.jpg";
import foodMenu from "../../imports/portfolio-food-menu.jpg";
import companyProfile from "../../imports/portfolio-company-profile.jpg";
import uiuxDesign from "../../imports/portfolio-uiux-design.jpg";

/* ─── data ────────────────────────────────────────────────── */
const categories = ["All", "Company Profile", "UI/UX", "Social Media", "Print"];

const projects = [
  {
    id: 1,
    num: "01",
    title: "Company\nProfile",
    client: "Umrah Companions",
    category: "Company Profile",
    tag: "Brochure Design",
    year: "2025",
    img: companyProfile,
    accent: "#14A800",
    stat: "Brand deck",
    rotate: "-2deg",
    scale: 1,
    featured: true,
  },
  {
    id: 2,
    num: "02",
    title: "UI/UX\nScreen",
    client: "Taxi Website Design",
    category: "UI/UX",
    tag: "Web Design",
    year: "2025",
    img: uiuxDesign,
    accent: "#00C6FF",
    stat: "Full layout",
    rotate: "3deg",
    scale: 0.88,
    featured: false,
  },
  {
    id: 3,
    num: "03",
    title: "Mobile Social\nMedia Post",
    client: "AdWorld Prime",
    category: "Social Media",
    tag: "Post Design",
    year: "2024",
    img: socialMediaDesigns,
    accent: "#FF6B35",
    stat: "Campaign set",
    rotate: "-1.5deg",
    scale: 0.9,
    featured: false,
  },
  {
    id: 4,
    num: "04",
    title: "Clipboard\nMenu Card",
    client: "Buffet Menu Design",
    category: "Print",
    tag: "Menu Layout",
    year: "2024",
    img: restaurantFlyers,
    accent: "#A855F7",
    stat: "Menu ready",
    rotate: "2.5deg",
    scale: 0.85,
    featured: false,
  },
  {
    id: 5,
    num: "05",
    title: "Menu Card\nMockup",
    client: "Restaurant Menu Design",
    category: "Print",
    tag: "Food Menu",
    year: "2024",
    img: foodMenu,
    accent: "#F59E0B",
    stat: "Print ready",
    rotate: "-3deg",
    scale: 0.87,
    featured: false,
  },
];

/* ─── Marquee strip ───────────────────────────────────────── */
const marqueeWords = ["Brand Identity", "UI·UX", "Illustration", "Packaging", "Motion", "Social Media", "Logo Design", "Web Design"];

function Marquee() {
  const doubled = [...marqueeWords, ...marqueeWords];
  return (
    <div
      className="overflow-hidden border-y"
      style={{ borderColor: "rgba(20,168,0,0.1)", background: "rgba(20,168,0,0.03)", padding: "12px 0" }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {doubled.map((w, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{
                background: i % 4 === 0 ? "#14A800" : i % 4 === 1 ? "#00C6FF" : i % 4 === 2 ? "#A855F7" : "#F59E0B",
              }}
            />
            <span
              style={{ color: "#33334f", fontWeight: 800, fontSize: "11px", letterSpacing: "2.5px" }}
            >
              {w.toUpperCase()}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Collage card ────────────────────────────────────────── */
function CollageCard({
  project,
  onClick,
  isSelected,
}: {
  project: typeof projects[0];
  onClick: () => void;
  isSelected: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      whileHover={{
        rotate: 0,
        scale: isSelected ? 1.02 : 1.06,
        zIndex: 30,
        transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      initial={{ rotate: project.rotate, scale: project.scale, opacity: 0, y: 60 }}
      animate={{
        rotate: isSelected ? 0 : project.rotate,
        scale: isSelected ? 1 : project.scale,
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="relative cursor-pointer overflow-hidden rounded-lg"
      style={{
        transformOrigin: "center center",
        boxShadow: isSelected
          ? `0 0 0 2px ${project.accent}, 0 30px 80px rgba(0,0,0,0.7), 0 0 60px ${project.accent}25`
          : "0 20px 60px rgba(0,0,0,0.6), 0 4px 12px rgba(0,0,0,0.4)",
      }}
    >
      {/* Image */}
      <motion.img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover block"
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(175deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      {/* Accent wash on hover */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: hovered ? 0.18 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ background: project.accent }}
      />

      {/* Top: tag + year */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start">
        <span
          className="px-2.5 py-1 rounded-full text-[10px]"
          style={{
            background: `${project.accent}22`,
            color: project.accent,
            border: `1px solid ${project.accent}44`,
            fontWeight: 800,
            backdropFilter: "blur(8px)",
          }}
        >
          {project.tag}
        </span>
        <span className="text-white/30" style={{ fontSize: "10px", fontWeight: 700 }}>
          {project.year}
        </span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div style={{ color: project.accent, fontSize: "10px", fontWeight: 900, letterSpacing: "2.5px", marginBottom: "4px" }}>
          {project.num}
        </div>
        <h3
          className="text-white"
          style={{
            fontWeight: 900,
            fontSize: "1rem",
            lineHeight: 1.15,
            whiteSpace: "pre-line",
            letterSpacing: "0",
          }}
        >
          {project.title}
        </h3>

        {/* Stat + client on hover */}
        <motion.div
          animate={{ opacity: hovered || isSelected ? 1 : 0, y: hovered || isSelected ? 0 : 6 }}
          transition={{ duration: 0.25 }}
          className="mt-2 flex items-center gap-2"
        >
          <span
            className="px-2 py-0.5 rounded-full text-[10px]"
            style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontWeight: 700 }}
          >
            {project.stat}
          </span>
        </motion.div>
      </div>

      {/* Selection ring pulse */}
      {isSelected && (
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{ border: `2px solid ${project.accent}` }}
        />
      )}
    </motion.div>
  );
}

/* ─── Detail panel ────────────────────────────────────────── */
function DetailPanel({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, x: 40, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 40, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative rounded-lg overflow-hidden"
      style={{
        background: "rgba(10,10,22,0.95)",
        border: `1px solid ${project.accent}30`,
        boxShadow: `0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px ${project.accent}15`,
      }}
    >
      {/* Hero image */}
      <div className="relative h-56 overflow-hidden">
        <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(10,10,22,1) 0%, transparent 60%)" }}
        />
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white/60 hover:text-white transition-colors text-xs"
          style={{ backdropFilter: "blur(8px)", fontWeight: 900 }}
        >
          ✕
        </button>
        <div className="absolute bottom-4 left-5">
          <span
            className="px-3 py-1 rounded-full text-xs"
            style={{ background: `${project.accent}25`, color: project.accent, border: `1px solid ${project.accent}40`, fontWeight: 800 }}
          >
            {project.tag}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Number + title */}
        <div style={{ color: project.accent, fontSize: "10px", fontWeight: 900, letterSpacing: "3px", marginBottom: "6px" }}>
          {project.num} · {project.year}
        </div>
        <h3
          className="text-white mb-1"
          style={{ fontWeight: 900, fontSize: "1.5rem", lineHeight: 1.1, whiteSpace: "pre-line", letterSpacing: "0" }}
        >
          {project.title}
        </h3>
        <div className="text-[#555575] text-sm mb-5" style={{ fontWeight: 600 }}>
          {project.client}
        </div>

        {/* Stat */}
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-lg mb-5"
          style={{ background: `${project.accent}0e`, border: `1px solid ${project.accent}20` }}
        >
          <div className="w-1 h-8 rounded-full" style={{ background: project.accent, boxShadow: `0 0 8px ${project.accent}` }} />
          <div>
            <div style={{ color: project.accent, fontWeight: 900, fontSize: "1.3rem", lineHeight: 1 }}>{project.stat}</div>
            <div className="text-[#444466] text-xs" style={{ fontWeight: 600 }}>Key result</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-white text-xs"
            style={{ background: `linear-gradient(135deg,${project.accent},${project.accent}aa)`, fontWeight: 800, boxShadow: `0 4px 20px ${project.accent}35` }}
          >
            <Eye size={13} /> View Case Study
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-4 py-2.5 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all"
          >
            <ExternalLink size={13} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main component ──────────────────────────────────────── */
export function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<number | null>(4);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const selectedProject = projects.find((p) => p.id === selected);

  const handleCardClick = (id: number) =>
    setSelected((prev) => (prev === id ? null : id));

  return (
    <section id="work" style={{ background: "#07070F", position: "relative" }}>
      <Marquee />

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* ── Header ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[#14A800] mb-3 flex items-center gap-2"
                style={{ fontWeight: 700, fontSize: "11px", letterSpacing: "3px" }}>
                <div className="w-6 h-px bg-[#14A800]" />
                SELECTED WORK
              </div>
              <h2 className="text-white" style={{ fontSize: "var(--work-heading-size)", fontWeight: 900, lineHeight: 0.93, letterSpacing: "0" }}>
                Work that
                <br />
                <span style={{ background: "linear-gradient(90deg,#14A800 20%,#6FDA44 80%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  speaks louder.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-4 items-start md:items-end"
            >
              <p className="text-[#444466] text-sm max-w-xs md:text-right" style={{ fontWeight: 500, lineHeight: 1.7 }}>
                Click any project to explore the case study. Hover to interact.
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => { setFilter(cat); setSelected(null); }}
                    className="px-4 py-1.5 rounded-full text-xs transition-all duration-200"
                    style={{
                      fontWeight: 800,
                      color: filter === cat ? "white" : "#444466",
                      background: filter === cat ? "#14A800" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${filter === cat ? "#14A800" : "rgba(255,255,255,0.06)"}`,
                      boxShadow: filter === cat ? "0 4px 18px rgba(20,168,0,0.4)" : "none",
                    }}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Collage + Detail ── */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Collage board */}
            <div className="flex-1">
              <AnimatePresence mode="popLayout">
                {filtered.length > 0 ? (
                  <motion.div key={filter} className="space-y-4">

                    {/* ROW 1: featured large + one tall card */}
                    {filtered[0] && (
                      <div className="grid grid-cols-5 gap-4" style={{ height: "360px" }}>
                        <div className="col-span-3">
                          <CollageCard
                            project={filtered[0]}
                            onClick={() => handleCardClick(filtered[0].id)}
                            isSelected={selected === filtered[0].id}
                          />
                        </div>
                        {filtered[1] && (
                          <div className="col-span-2">
                            <CollageCard
                              project={filtered[1]}
                              onClick={() => handleCardClick(filtered[1].id)}
                              isSelected={selected === filtered[1].id}
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {/* ROW 2: three equal cards */}
                    {filtered.slice(2).length > 0 && (
                      <div
                        className={`grid gap-4`}
                        style={{
                          gridTemplateColumns: `repeat(${Math.min(filtered.slice(2).length, 3)}, 1fr)`,
                          height: "260px",
                        }}
                      >
                        {filtered.slice(2, 5).map((p, i) => (
                          <CollageCard
                            key={p.id}
                            project={p}
                            onClick={() => handleCardClick(p.id)}
                            isSelected={selected === p.id}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-64 flex items-center justify-center rounded-lg border border-dashed border-white/10 text-[#333355]"
                    style={{ fontWeight: 700 }}
                  >
                    No projects in this category yet.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Instruction row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 flex items-center justify-between"
              >
                <div className="flex items-center gap-2 text-[#2a2a42]" style={{ fontSize: "11px", fontWeight: 700 }}>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-[#14A800]"
                  />
                  {selected ? "Case study open →" : "Click a project to explore"}
                </div>
                <div className="text-[#222236]" style={{ fontSize: "11px", fontWeight: 700 }}>
                  {filtered.length} / {projects.length} projects
                </div>
              </motion.div>
            </div>

            {/* Detail panel — sticky on desktop */}
            <div className="w-full lg:w-[320px] lg:sticky lg:top-24 flex-shrink-0">
              <AnimatePresence mode="wait">
                {selectedProject ? (
                  <DetailPanel
                    key={selectedProject.id}
                    project={selectedProject}
                    onClose={() => setSelected(null)}
                  />
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="rounded-lg border border-dashed border-white/6 flex flex-col items-center justify-center text-center p-10 gap-4"
                    style={{ minHeight: "320px" }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      style={{ color: "#14A800", fontSize: "2.5rem" }}
                    >
                      □
                    </motion.div>
                    <div>
                      <div className="text-[#333355] text-sm" style={{ fontWeight: 800 }}>Select a project</div>
                      <div className="text-[#22223a]" style={{ fontSize: "12px", fontWeight: 600, marginTop: "4px" }}>
                        Click any card to see<br />the full case study
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Bottom CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-lg"
            style={{ background: "linear-gradient(135deg, rgba(20,168,0,0.07), rgba(0,198,255,0.03))", border: "1px solid rgba(20,168,0,0.14)" }}
          >
            <div>
              <div className="text-white" style={{ fontWeight: 900, fontSize: "1.1rem" }}>
                Got a project in mind?
              </div>
              <div className="text-[#333355] text-sm mt-0.5" style={{ fontWeight: 600 }}>
                I'm available for freelance work — let's build something great.
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex-shrink-0 px-7 py-3 rounded-lg text-white flex items-center gap-2 text-sm"
              style={{ background: "linear-gradient(135deg,#14A800,#0d8a00)", fontWeight: 800, boxShadow: "0 6px 28px rgba(20,168,0,0.4)" }}
            >
              Start a Project <ArrowUpRight size={15} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

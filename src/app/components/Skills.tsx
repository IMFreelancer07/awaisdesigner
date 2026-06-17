import { useState } from "react";
import { motion } from "motion/react";
import creativeToolkitLogos from "../../imports/creative-toolkit-logos.png";

/* ─── Core skills for bars & rings ─────────────────── */
const coreSkills = [
  { name: "Brand Identity & Logo Design", level: 98, color: "#14A800" },
  { name: "Adobe Illustrator", level: 96, color: "#FF7C00" },
  { name: "Adobe Photoshop", level: 94, color: "#31A8FF" },
  { name: "Figma & UI Design", level: 92, color: "#A259FF" },
  { name: "Adobe InDesign", level: 88, color: "#FF3366" },
  { name: "After Effects", level: 82, color: "#9999FF" },
];

/* ─── Tool definitions with SimpleIcons slugs ──────── */
const tools = [
  {
    label: "Illustrator",
    slug: "adobeillustrator",
    color: "#FF7C00",
    bg: "rgba(255,124,0,0.1)",
    border: "rgba(255,124,0,0.25)",
  },
  {
    label: "Photoshop",
    slug: "adobephotoshop",
    color: "#31A8FF",
    bg: "rgba(49,168,255,0.1)",
    border: "rgba(49,168,255,0.25)",
  },
  {
    label: "Figma",
    slug: "figma",
    color: "#A259FF",
    bg: "rgba(162,89,255,0.1)",
    border: "rgba(162,89,255,0.25)",
  },
  {
    label: "InDesign",
    slug: "adobeindesign",
    color: "#FF3366",
    bg: "rgba(255,51,102,0.1)",
    border: "rgba(255,51,102,0.25)",
  },
  {
    label: "After Effects",
    slug: "adobeaftereffects",
    color: "#9999FF",
    bg: "rgba(153,153,255,0.1)",
    border: "rgba(153,153,255,0.25)",
  },
  {
    label: "Premiere Pro",
    slug: "adobepremierepro",
    color: "#EA77FF",
    bg: "rgba(234,119,255,0.1)",
    border: "rgba(234,119,255,0.25)",
  },
  {
    label: "Canva",
    slug: "canva",
    color: "#00C4CC",
    bg: "rgba(0,196,204,0.1)",
    border: "rgba(0,196,204,0.25)",
  },
  {
    label: "CorelDraw",
    slug: "coreldraw",
    color: "#00A550",
    bg: "rgba(0,165,80,0.1)",
    border: "rgba(0,165,80,0.25)",
  },
  {
    label: "CapCut",
    slug: "capcut",
    color: "#ffffff",
    bg: "rgba(255,255,255,0.07)",
    border: "rgba(255,255,255,0.15)",
  },
];

const metrics = [
  { num: "7+", label: "Years Active", color: "#14A800" },
  { num: "200+", label: "Delivered", color: "#00C6FF" },
  { num: "50+", label: "Clients", color: "#A855F7" },
  { num: "99%", label: "Job Success", color: "#F59E0B" },
];

const processSteps = [
  { step: "01", title: "Discover", desc: "Deep-dive into your brand, goals & audience" },
  { step: "02", title: "Strategize", desc: "Build a creative brief and visual direction" },
  { step: "03", title: "Design", desc: "Craft pixel-perfect concepts for review" },
  { step: "04", title: "Deliver", desc: "Final files, handoff, and ongoing support" },
];

/* ─── Circular ring ─────────────────────────────────── */
function CircularSkill({
  name, level, color, delay,
}: {
  name: string; level: number; color: string; delay: number;
}) {
  const r = 36;
  const circ = 2 * Math.PI * r;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-2.5"
    >
      <div className="relative w-[84px] h-[84px]">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 88 88">
          <circle cx="44" cy="44" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="5" />
          <motion.circle
            cx="44" cy="44" r={r}
            fill="none"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: circ - (level / 100) * circ }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: delay + 0.2, ease: "easeOut" }}
            style={{ filter: `drop-shadow(0 0 5px ${color}90)` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span style={{ color, fontWeight: 900, fontSize: "13px" }}>{level}%</span>
        </div>
      </div>
      <span
        className="text-center text-[#8888a8]"
        style={{ fontSize: "10px", fontWeight: 700, maxWidth: "76px", lineHeight: 1.4 }}
      >
        {name}
      </span>
    </motion.div>
  );
}

/* ─── Skill bar ─────────────────────────────────────── */
function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#c0c0d8] text-sm" style={{ fontWeight: 600 }}>{name}</span>
        <span style={{ color, fontWeight: 900, fontSize: "0.82rem" }}>{level}%</span>
      </div>
      <div className="relative h-[7px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2 + index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}bb, ${color})`, boxShadow: `0 0 10px ${color}55` }}
        />
        {/* shimmer */}
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "220%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.3 + index * 0.07 }}
          className="absolute inset-0 w-1/3"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)" }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Tool logo card ────────────────────────────────── */
function ToolCard({ tool, index }: { tool: typeof tools[0]; index: number }) {
  const [imgOk, setImgOk] = useState(true);
  const abbr = tool.label.slice(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ scale: 1.08, y: -5 }}
      className="group flex flex-col items-center gap-2.5 p-4 rounded-lg cursor-pointer transition-all duration-200"
      style={{
        background: tool.bg,
        border: `1px solid ${tool.border}`,
      }}
    >
      {/* Logo */}
      <div
        className="w-11 h-11 rounded-lg flex items-center justify-center relative overflow-hidden"
        style={{ background: "rgba(0,0,0,0.25)" }}
      >
        {imgOk ? (
          <img
            src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color.replace("#", "")}`}
            alt={tool.label}
            className="w-6 h-6 object-contain"
            onError={() => setImgOk(false)}
            draggable={false}
          />
        ) : (
          <span style={{ color: tool.color, fontWeight: 900, fontSize: "11px", letterSpacing: "0.5px" }}>
            {abbr}
          </span>
        )}
        {/* Glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
          style={{ background: `radial-gradient(circle, ${tool.color}30 0%, transparent 70%)` }}
        />
      </div>

      <span
        className="text-center"
        style={{ color: tool.color, fontSize: "10px", fontWeight: 800, letterSpacing: "0.3px", lineHeight: 1.3 }}
      >
        {tool.label}
      </span>
    </motion.div>
  );
}

/* ─── Main section ──────────────────────────────────── */
export function Skills() {
  return (
    <section id="skills" className="py-24" style={{ background: "transparent" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16"
        >
          <div>
            <div className="text-[#14A800] mb-3 flex items-center gap-2"
              style={{ fontWeight: 700, fontSize: "11px", letterSpacing: "3px" }}>
              <div className="w-6 h-px bg-[#14A800]" />
              EXPERTISE
            </div>
            <h2 className="text-white" style={{ fontSize: "var(--section-heading-size)", fontWeight: 900, lineHeight: 0.95, letterSpacing: "0" }}>
              Skills &{" "}
              <span style={{ background: "linear-gradient(90deg,#14A800,#14A800)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Toolkit
              </span>
            </h2>
          </div>
          <p className="text-[#b8c6ff] max-w-xs md:text-right" style={{ lineHeight: 1.75, fontSize: "0.88rem", fontWeight: 500 }}>
            7+ years mastering every tool in the creative stack — from concept sketches to final export.
          </p>
        </motion.div>

        {/* ── Circular proficiency rings ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-6 py-8 px-6 rounded-lg"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          {coreSkills.map((s, i) => (
            <CircularSkill key={s.name} name={s.name} level={s.level} color={s.color} delay={i * 0.08} />
          ))}
        </motion.div>

        {/* ── Bars + Tool logos ── */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">

          {/* Skill bars */}
          <div>
            <div className="text-white mb-6" style={{ fontWeight: 800, fontSize: "0.95rem", letterSpacing: "0" }}>
              Proficiency Breakdown
            </div>
            <div className="space-y-5">
              {coreSkills.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} color={s.color} index={i} />
              ))}
            </div>
          </div>

          {/* Tool logos */}
          <div>
            <motion.img
              src={creativeToolkitLogos}
              alt="Creative Toolkit logos"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="w-full h-auto block"
              draggable={false}
            />
          </div>
        </div>

        {/* ── Process strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-lg p-8"
          style={{ background: "rgba(20,168,0,0.04)", border: "1px solid rgba(20,168,0,0.13)" }}
        >
          <div className="text-center text-white mb-8" style={{ fontWeight: 800, fontSize: "0.95rem" }}>
            My Design Process
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {processSteps.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative text-center"
              >
                {i < 3 && (
                  <div
                    className="hidden md:block absolute top-5 left-full w-full h-px"
                    style={{ background: "linear-gradient(90deg, rgba(20,168,0,0.35), transparent)", transform: "translateX(-50%)" }}
                  />
                )}
                <div
                  className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ background: "rgba(20,168,0,0.12)", border: "1px solid rgba(20,168,0,0.3)" }}
                >
                  <span className="text-[#14A800]" style={{ fontWeight: 900, fontSize: "12px" }}>{p.step}</span>
                </div>
                <div className="text-white mb-1" style={{ fontWeight: 800, fontSize: "0.88rem" }}>{p.title}</div>
                <div className="text-[#b8c6ff]" style={{ fontSize: "0.76rem", lineHeight: 1.65, fontWeight: 500 }}>{p.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

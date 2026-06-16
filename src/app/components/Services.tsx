import { useState } from "react";
import { motion } from "motion/react";
import { Palette, Monitor, PenTool, Layers, Camera, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Palette,
    title: "Brand Identity",
    short: "Logo · Brand System · Guidelines",
    description:
      "Complete brand systems that speak before you do — logo, color theory, typography, voice, and a full usage guide that keeps your look consistent everywhere.",
    deliverables: ["Logo Suite (all formats)", "Color & Type System", "Brand Guidelines PDF", "Social Templates"],
    color: "#14A800",
  },
  {
    num: "02",
    icon: Monitor,
    title: "UI / UX Design",
    short: "Web · Mobile · Prototyping",
    description:
      "Interfaces that convert. I design pixel-perfect, user-tested screens for web and mobile products that feel natural, fast, and beautiful.",
    deliverables: ["Wireframes & User Flows", "High-fidelity Mockups", "Interactive Prototype", "Dev Handoff (Figma)"],
    color: "#00C6FF",
  },
  {
    num: "03",
    icon: PenTool,
    title: "Illustration",
    short: "Digital Art · Icons · Characters",
    description:
      "Custom artwork that's uniquely yours — from icon sets and mascots to editorial illustrations and detailed vector scenes.",
    deliverables: ["Custom Vector Art", "Icon Sets (50+)", "Character Design", "Usage License"],
    color: "#A855F7",
  },
  {
    num: "04",
    icon: Layers,
    title: "Print & Packaging",
    short: "Packaging · Brochures · Posters",
    description:
      "Print-ready designs built for impact — packaging that wins shelf space, brochures that get kept, and posters that stop people mid-step.",
    deliverables: ["Print-ready Files (PDF/AI)", "Packaging Mockups", "Fold/Die-cut Specs", "Printer Brief"],
    color: "#FF6B35",
  },
  {
    num: "05",
    icon: Camera,
    title: "Social Media",
    short: "Instagram · LinkedIn · Campaigns",
    description:
      "Scroll-stopping content systems — templates, campaign visuals, and story sets that grow your audience and make your feed unmistakable.",
    deliverables: ["30-Post Template Set", "Stories & Reels Format", "Campaign Banners", "Brand Voice Guide"],
    color: "#F59E0B",
  },
  {
    num: "06",
    icon: Globe,
    title: "Motion Graphics",
    short: "Animation · Explainers · Intros",
    description:
      "Animated logos, explainer videos, and motion assets that captivate in the first three seconds and keep viewers watching.",
    deliverables: ["Animated Logo (MP4/GIF)", "Explainer Video", "Social Motion Assets", "Source Files"],
    color: "#6FDA44",
  },
];

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="py-24" style={{ background: "#0B0B17" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div
              className="text-[#14A800] mb-3 flex items-center gap-2"
              style={{ fontWeight: 700, fontSize: "12px", letterSpacing: "3px" }}
            >
              <div className="w-6 h-px bg-[#14A800]" />
              WHAT I DO
            </div>
            <h2
              className="text-white"
              style={{
                fontSize: "var(--section-heading-size)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "0",
              }}
            >
              Services built
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg,#14A800,#6FDA44)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                for results
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-[#555575] max-w-xs md:text-right"
            style={{ lineHeight: 1.75, fontSize: "0.9rem" }}
          >
            Every service is backed by strategy, executed with precision, and delivered ready to use.
          </motion.p>
        </div>

        {/* Main layout: list + detail panel */}
        <div className="grid lg:grid-cols-5 gap-4">
          {/* Left: service list */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === active;
              return (
                <motion.button
                  key={s.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-4 px-5 py-4 rounded-lg text-left transition-all duration-200 group"
                  style={{
                    background: isActive ? `${s.color}14` : "rgba(255,255,255,0.02)",
                    border: `1px solid ${isActive ? s.color + "40" : "rgba(255,255,255,0.05)"}`,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{
                      background: isActive ? `${s.color}22` : "rgba(255,255,255,0.05)",
                      border: `1px solid ${isActive ? s.color + "40" : "rgba(255,255,255,0.07)"}`,
                    }}
                  >
                    <Icon size={18} color={isActive ? s.color : "#555575"} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div
                      className="transition-colors duration-200"
                      style={{ fontWeight: 800, fontSize: "0.92rem", color: isActive ? "white" : "#888899" }}
                    >
                      {s.title}
                    </div>
                    <div
                      className="text-xs mt-0.5 truncate"
                      style={{ color: isActive ? s.color : "#444460", fontWeight: 600 }}
                    >
                      {s.short}
                    </div>
                  </div>

                  {/* Number */}
                  <span
                    style={{
                      fontWeight: 900,
                      fontSize: "11px",
                      color: isActive ? s.color : "#333350",
                      letterSpacing: "1px",
                    }}
                  >
                    {s.num}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Right: detail panel */}
          <div className="lg:col-span-3">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="h-full p-8 rounded-lg relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${current.color}25`,
              }}
            >
              {/* Big background number */}
              <div
                className="absolute -top-4 -right-2 select-none pointer-events-none"
                style={{
                  fontSize: "8rem",
                  fontWeight: 900,
                  color: `${current.color}08`,
                  lineHeight: 1,
                  letterSpacing: "0",
                }}
              >
                {current.num}
              </div>

              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-10"
                style={{ background: current.color }}
              />

              {/* Icon + title */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${current.color}18`,
                    border: `1px solid ${current.color}40`,
                    boxShadow: `0 0 24px ${current.color}20`,
                  }}
                >
                  {(() => { const Icon = current.icon; return <Icon size={26} color={current.color} />; })()}
                </div>
                <div>
                  <h3
                    className="text-white"
                    style={{ fontWeight: 900, fontSize: "1.5rem", lineHeight: 1.2 }}
                  >
                    {current.title}
                  </h3>
                </div>
              </div>

              <p
                className="text-[#8888a8] mb-8"
                style={{ lineHeight: 1.85, fontSize: "0.95rem" }}
              >
                {current.description}
              </p>

              {/* Deliverables */}
              <div className="mb-8">
                <div
                  className="text-xs mb-4"
                  style={{ color: current.color, fontWeight: 700, letterSpacing: "2px" }}
                >
                  WHAT'S INCLUDED
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.deliverables.map((d) => (
                    <div
                      key={d}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-lg"
                      style={{ background: `${current.color}0a`, border: `1px solid ${current.color}18` }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: current.color }}
                      />
                      <span className="text-white/70 text-xs" style={{ fontWeight: 600 }}>
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-white text-sm"
                style={{
                  background: `linear-gradient(135deg, ${current.color}, ${current.color}bb)`,
                  fontWeight: 700,
                  boxShadow: `0 6px 24px ${current.color}35`,
                }}
              >
                Get a Quote <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

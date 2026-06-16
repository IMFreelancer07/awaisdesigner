import { motion } from "motion/react";
import { CheckCircle2, Award, Briefcase, Users } from "lucide-react";
import aboutPortrait from "../../imports/awais-about-portrait.png";

const highlights = [
  "Top Rated Plus on Upwork (99% Job Success)",
  "Featured in Creative Bloq & Behance",
  "Adobe Certified Expert (ACE)",
  "7+ years delivering world-class design",
];

const timeline = [
  { year: "2024", role: "Senior Creative Director", company: "Freelance / Remote", active: true },
  { year: "2022", role: "Lead Brand Designer", company: "Digital Spark Agency", active: false },
  { year: "2020", role: "UI/UX Designer", company: "TechVision Studio", active: false },
  { year: "2018", role: "Junior Graphic Designer", company: "Creative Hub", active: false },
];

export function About() {
  return (
    <section id="about" className="py-24" style={{ background: "linear-gradient(180deg, #0a1015 0%, #0D0D1A 100%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full text-[#14A800] border border-[#14A800]/30 text-sm mb-4"
            style={{ background: "rgba(20,168,0,0.08)", fontWeight: 600 }}>
            About Me
          </span>
          <h2 className="text-white mb-4" style={{ fontSize: "var(--section-heading-size)", fontWeight: 900, lineHeight: 1.15 }}>
            The Creative{" "}
            <span style={{ background: "linear-gradient(90deg,#14A800,#6FDA44)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Behind the Work
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Image + Badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div
                className="relative rounded-lg overflow-hidden"
                style={{
                  aspectRatio: "3 / 4",
                  border: "1px solid rgba(20,168,0,0.35)",
                  boxShadow: "0 0 0 1px rgba(20,168,0,0.08), 0 24px 80px rgba(20,168,0,0.22)",
                }}
              >
                <img
                  src={aboutPortrait}
                  alt="Awais Designer"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center center" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,26,0.6) 0%, transparent 60%)" }} />
              </div>

              {/* Floating achievement badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -right-5 px-5 py-4 rounded-lg"
                style={{ background: "#13132A", border: "1px solid rgba(20,168,0,0.3)", boxShadow: "0 12px 40px rgba(0,0,0,0.4)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#14A800] flex items-center justify-center">
                    <Award size={18} color="white" />
                  </div>
                  <div>
                    <div className="text-white text-sm" style={{ fontWeight: 800 }}>Top Rated Plus</div>
                    <div className="text-[#14A800]" style={{ fontSize: "11px", fontWeight: 600 }}>Upwork Verified</div>
                  </div>
                </div>
              </motion.div>

              {/* Years badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-20 h-20 rounded-lg flex flex-col items-center justify-center"
                style={{ background: "linear-gradient(135deg, #14A800, #0d8a00)", boxShadow: "0 8px 24px rgba(20,168,0,0.4)" }}
              >
                <span className="text-white" style={{ fontSize: "1.8rem", fontWeight: 900, lineHeight: 1 }}>7+</span>
                <span className="text-white/80" style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "1px" }}>YEARS</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#8888a8] mb-6" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              I'm <span className="text-white" style={{ fontWeight: 700 }}>Awais</span>, a passionate graphic designer based in ISLAMABAD, PK. Over the past 7+ years, I've helped 50+ brands around the globe transform their visual identity and stand out in crowded markets.
            </p>
            <p className="text-[#8888a8] mb-8" style={{ lineHeight: 1.9, fontSize: "1rem" }}>
              My approach blends strategic thinking with pixel-perfect execution. Whether it's a startup seeking a bold brand identity or an enterprise needing a full design overhaul — I deliver results that make an impact.
            </p>

            {/* Highlights */}
            <div className="mb-8 space-y-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={18} className="text-[#14A800] flex-shrink-0" />
                  <span className="text-[#c0c0d8] text-sm" style={{ fontWeight: 500 }}>{h}</span>
                </motion.div>
              ))}
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Briefcase, num: "200+", label: "Projects", color: "#14A800" },
                { icon: Users, num: "50+", label: "Clients", color: "#00C6FF" },
                { icon: Award, num: "15+", label: "Awards", color: "#A855F7" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="text-center p-4 rounded-lg border border-white/5"
                    style={{ background: `${s.color}08` }}>
                    <Icon size={20} style={{ color: s.color, margin: "0 auto 6px" }} />
                    <div style={{ color: s.color, fontWeight: 900, fontSize: "1.4rem", lineHeight: 1 }}>{s.num}</div>
                    <div className="text-[#6868a0] mt-1" style={{ fontSize: "0.75rem", fontWeight: 600 }}>{s.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-center text-white mb-10" style={{ fontWeight: 800, fontSize: "1.3rem" }}>Career Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px" style={{ background: "rgba(20,168,0,0.2)" }} />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="inline-block p-4 rounded-xl border border-white/5"
                      style={{ background: item.active ? "rgba(20,168,0,0.08)" : "rgba(255,255,255,0.02)", borderColor: item.active ? "rgba(20,168,0,0.25)" : undefined }}>
                      <div className="text-white" style={{ fontWeight: 800, fontSize: "0.95rem" }}>{item.role}</div>
                      <div className="text-[#6868a0] text-sm" style={{ fontWeight: 500 }}>{item.company}</div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: item.active ? "#14A800" : "#1a1a2e", border: "2px solid", borderColor: item.active ? "#14A800" : "rgba(255,255,255,0.1)" }}>
                      <span className="text-white" style={{ fontSize: "11px", fontWeight: 900 }}>{item.year.slice(2)}</span>
                    </div>
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

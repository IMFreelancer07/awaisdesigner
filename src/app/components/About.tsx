import { motion } from "motion/react";
import { CheckCircle2, Award, Briefcase, Users } from "lucide-react";
import aboutPortrait from "../../imports/awais-about-portrait.png";

const highlights = [
  "Top Rated creative professional",
  "Featured in Creative Bloq & Behance",
  "Adobe Certified Expert (ACE)",
  "7+ years delivering world-class design",
];

const timeline = [
  {
    period: "Jul 2025 - Present",
    marker: "25",
    role: "Lead Designer & Full Stack Video Editor",
    company: "ADWORLDPRIME | iStack Conference",
    active: true,
  },
  {
    period: "Mar 2022 - Jun 2025",
    marker: "22",
    role: "Senior Visual Designer",
    company: "FUNADIQ Travel & Tourism",
    active: false,
  },
  {
    period: "Feb 2020 - Jan 2022",
    marker: "20",
    role: "Graphic Designer & Social Media Manager",
    company: "Colorzone Printing Press, Abu Dhabi",
    active: false,
  },
  {
    period: "Oct 2018 - Jan 2020",
    marker: "18",
    role: "Graphic Designer & Video Editor",
    company: "Digi Experts, Digital Marketing Agency",
    active: false,
  },
];

export function About() {
  return (
    <section id="about" className="py-24" style={{ background: "linear-gradient(180deg, #03030B 0%, #05050F 100%)" }}>
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
            <span style={{ background: "linear-gradient(90deg,#14A800,#14A800)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
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
                className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 rounded-lg px-5 py-4 text-center scale-90 sm:scale-100 origin-bottom-right"
                style={{
                  background: "linear-gradient(135deg, rgba(20,168,0,0.95), rgba(9,68,13,0.96))",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.4), 0 0 24px rgba(20,168,0,0.24)",
                }}
              >
                <div className="text-white" style={{ fontSize: "13px", fontWeight: 900, letterSpacing: "1.4px", lineHeight: 1.15 }}>
                  TOP RATED
                  <br />
                  DESIGNER
                </div>
              </motion.div>

              {/* Years badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex flex-col items-center justify-center"
                style={{ background: "linear-gradient(135deg, #14A800, #14A800)", boxShadow: "0 8px 24px rgba(20,168,0,0.4)" }}
              >
                <span className="text-white" style={{ fontSize: "1.45rem", fontWeight: 900, lineHeight: 1 }}>7+</span>
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
            <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px" style={{ background: "rgba(20,168,0,0.2)" }} />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.period}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`relative flex items-center gap-4 md:gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 pl-12 md:pl-0 text-left ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="inline-block p-4 rounded-xl border border-white/5"
                      style={{ background: item.active ? "rgba(20,168,0,0.08)" : "rgba(255,255,255,0.02)", borderColor: item.active ? "rgba(20,168,0,0.25)" : undefined }}>
                      <div className="text-white" style={{ fontWeight: 800, fontSize: "0.95rem" }}>{item.role}</div>
                      <div className="text-[#6868a0] text-sm" style={{ fontWeight: 500 }}>{item.company}</div>
                      <div className="mt-1 text-[#14A800] text-xs" style={{ fontWeight: 700 }}>{item.period}</div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 relative z-10 absolute left-0 md:static">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: item.active ? "#14A800" : "#1a1a2e", border: "2px solid", borderColor: item.active ? "#14A800" : "rgba(255,255,255,0.1)" }}>
                      <span className="text-white" style={{ fontSize: "11px", fontWeight: 900 }}>{item.marker}</span>
                    </div>
                  </div>
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

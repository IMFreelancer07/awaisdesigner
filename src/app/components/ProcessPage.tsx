import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Clock3, FileCheck2, MessageSquareText } from "lucide-react";
import { Navbar } from "./Navbar";
import { ClientProcess } from "./ClientProcess";
import { Footer } from "./Footer";

const pageHighlights = [
  { label: "Clear timeline", icon: Clock3 },
  { label: "Structured feedback", icon: MessageSquareText },
  { label: "Launch-ready files", icon: FileCheck2 },
  { label: "Quality control", icon: CheckCircle2 },
];

export function ProcessPage() {
  return (
    <div className="min-h-screen relative w-full max-w-full overflow-x-hidden" style={{ background: "transparent", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="relative z-[2] w-full max-w-full overflow-x-hidden">
        <Navbar />

        <main>
          <section className="relative overflow-hidden pb-8 pt-36 sm:pt-40 lg:pt-44">
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute left-1/2 top-20 h-[620px] w-[920px] -translate-x-1/2 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(20,168,0,0.18), rgba(20,168,0,0.05) 44%, transparent 72%)" }}
              />
              <div
                className="absolute inset-x-0 top-0 h-full opacity-60"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(20,168,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(20,168,0,0.08) 1px, transparent 1px)",
                  backgroundSize: "52px 52px",
                  maskImage: "linear-gradient(to bottom, black 0%, transparent 78%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 78%)",
                }}
              />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="mx-auto max-w-4xl text-center"
              >
                <span
                  className="inline-flex rounded-full border border-[#14A800]/30 px-4 py-2 text-xs uppercase text-[#14A800]"
                  style={{ background: "rgba(20,168,0,0.08)", fontWeight: 800, letterSpacing: "2px" }}
                >
                  Client Resource
                </span>
                <h1
                  className="mt-6 text-white"
                  style={{ fontSize: "clamp(3rem, 8vw, 7.8rem)", fontWeight: 950, lineHeight: 0.94, letterSpacing: "0" }}
                >
                  Working
                  <br />
                  <span className="text-[#14A800]">Process</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-[#d7e0ff]" style={{ lineHeight: 1.8, fontSize: "1rem" }}>
                  A premium project workflow for branding, UI/UX, social media, print, and marketing creatives. Built to keep every step clear from brief to final delivery.
                </p>
              </motion.div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {pageHighlights.map(({ label, icon: Icon }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.12 + index * 0.06 }}
                    className="flex items-center gap-3 rounded-lg border border-white/7 px-4 py-4"
                    style={{ background: "rgba(255,255,255,0.025)" }}
                  >
                    <span
                      className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg"
                      style={{ background: "rgba(20,168,0,0.12)", border: "1px solid rgba(20,168,0,0.24)" }}
                    >
                      <Icon size={18} className="text-[#14A800]" />
                    </span>
                    <span className="text-sm text-white" style={{ fontWeight: 800 }}>
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <ClientProcess compactTop />

          <section className="pb-24">
            <div className="mx-auto max-w-7xl px-6">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="flex flex-col gap-5 rounded-lg border border-[#14A800]/22 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
                style={{ background: "linear-gradient(135deg, rgba(20,168,0,0.12), rgba(255,255,255,0.025))" }}
              >
                <div>
                  <h2 className="text-white" style={{ fontSize: "1.7rem", fontWeight: 900 }}>
                    Ready to start with a clean process?
                  </h2>
                  <p className="mt-2 text-sm text-[#9da1c4]" style={{ lineHeight: 1.7 }}>
                    Share your brief and I will guide the next step with a simple project roadmap.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    window.location.href = "/#contact";
                  }}
                  className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#14A800] px-6 text-sm text-white transition-shadow hover:shadow-[0_0_26px_rgba(20,168,0,0.35)]"
                  style={{ fontWeight: 800 }}
                >
                  Contact Now
                  <ArrowRight size={17} />
                </button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

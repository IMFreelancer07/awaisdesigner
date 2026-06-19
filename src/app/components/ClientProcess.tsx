import { motion } from "motion/react";
import { ArrowRight, ClipboardCheck, FileText, Layers3, MessageSquareText, PenTool, Rocket, ShieldCheck, Sparkles } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery Brief",
    text: "Project goals, audience, references, timeline, and required formats are mapped before design starts.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Creative Direction",
    text: "Moodboards, visual routes, typography, and color direction are aligned with the brand outcome.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Design Production",
    text: "Campaign assets, brand layouts, UI screens, or print files are crafted with clean execution.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Review System",
    text: "Feedback is organized into clear rounds so revisions stay focused, fast, and easy to approve.",
    icon: MessageSquareText,
  },
  {
    number: "05",
    title: "Final Handoff",
    text: "Exported files, editable sources, guidelines, and usage notes are prepared for launch.",
    icon: Rocket,
  },
];

const resources = [
  { title: "Project Brief", detail: "Goals, references, timeline, formats", icon: FileText },
  { title: "Approval Flow", detail: "Structured review rounds and sign-off", icon: ShieldCheck },
  { title: "Asset Library", detail: "Editable files, exports, and brand assets", icon: Layers3 },
];

type ClientProcessProps = {
  compactTop?: boolean;
};

export function ClientProcess({ compactTop = false }: ClientProcessProps) {
  return (
    <section id="process" className={`relative overflow-hidden ${compactTop ? "pb-24 pt-10" : "py-24"}`} style={{ background: "transparent" }}>
      <div className="pointer-events-none absolute inset-0 opacity-55">
        <div
          className="absolute inset-x-0 top-12 mx-auto h-[520px] max-w-6xl rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(20,168,0,0.14), rgba(20,168,0,0.03) 42%, transparent 70%)" }}
        />
        <div
          className="absolute left-1/2 top-20 h-[680px] w-[680px] -translate-x-1/2 rounded-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(20,168,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(20,168,0,0.08) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            maskImage: "radial-gradient(circle, black 0%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(circle, black 0%, transparent 72%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div
              className="mb-3 flex items-center gap-2 text-[#14A800]"
              style={{ fontWeight: 700, fontSize: "12px", letterSpacing: "3px" }}
            >
              <div className="h-px w-6 bg-[#14A800]" />
              CLIENT RESOURCE
            </div>
            <h2
              className="max-w-xl text-white"
              style={{
                fontSize: "var(--section-heading-size)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "0",
              }}
            >
              Working process
              <br />
              <span className="text-[#14A800]">for premium outcomes</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="max-w-xl text-[#d7e0ff] lg:ml-auto lg:text-right"
            style={{ lineHeight: 1.75, fontSize: "0.96rem" }}
          >
            A clear client workflow helps every project move from brief to final delivery with fewer delays, sharper feedback, and production-ready files.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.55fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.58 }}
            className="relative overflow-hidden rounded-lg border border-[#14A800]/20 p-6 sm:p-7"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.045), rgba(20,168,0,0.045))",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 80px rgba(0,0,0,0.24)",
            }}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border border-[#14A800]/30" />
            <div className="pointer-events-none absolute bottom-8 right-8 h-24 w-24 rotate-45 border border-white/10" />

            <div className="relative">
              <span
                className="inline-flex rounded-full border border-[#14A800]/30 px-3 py-1 text-xs uppercase text-[#14A800]"
                style={{ background: "rgba(20,168,0,0.08)", fontWeight: 800, letterSpacing: "1.6px" }}
              >
                Client Pack
              </span>
              <h3 className="mt-5 max-w-sm text-white" style={{ fontSize: "1.8rem", fontWeight: 900, lineHeight: 1.08 }}>
                Everything needed to start and approve work smoothly.
              </h3>
              <p className="mt-4 text-sm text-[#9da1c4]" style={{ lineHeight: 1.75 }}>
                Each project is organized with clear inputs, deliverables, and handoff rules so the process feels structured from day one.
              </p>

              <div className="mt-8 space-y-3">
                {resources.map(({ title, detail, icon: Icon }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-center gap-4 rounded-lg border border-white/7 p-4"
                    style={{ background: "rgba(3,3,11,0.45)" }}
                  >
                    <div
                      className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg"
                      style={{
                        background: "linear-gradient(145deg, rgba(20,168,0,0.22), rgba(255,255,255,0.05))",
                        border: "1px solid rgba(20,168,0,0.25)",
                        boxShadow: "inset -8px -8px 18px rgba(0,0,0,0.22), inset 6px 6px 14px rgba(255,255,255,0.04)",
                      }}
                    >
                      <Icon size={19} className="text-[#14A800]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-white" style={{ fontWeight: 800 }}>
                        {title}
                      </p>
                      <p className="mt-1 truncate text-xs text-[#7e82a8]" style={{ fontWeight: 600 }}>
                        {detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-[#14A800] px-6 text-sm text-white transition-shadow hover:shadow-[0_0_26px_rgba(20,168,0,0.35)]"
                style={{ fontWeight: 800 }}
              >
                Start a Project
                <ArrowRight size={17} />
              </button>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {processSteps.map(({ number, title, text, icon: Icon }, index) => {
              const isWide = index === processSteps.length - 1;

              return (
                <motion.div
                  key={number}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.48, delay: index * 0.06 }}
                  className={`group relative overflow-hidden rounded-lg border border-white/7 p-5 sm:p-6 ${isWide ? "md:col-span-2" : ""}`}
                  style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.035), rgba(255,255,255,0.012))",
                    minHeight: isWide ? "170px" : "220px",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: "linear-gradient(135deg, rgba(20,168,0,0.12), transparent 54%)" }}
                  />
                  <div
                    className="pointer-events-none absolute right-5 top-5 h-20 w-20 rotate-45 border border-[#14A800]/12 transition-transform duration-500 group-hover:rotate-[54deg]"
                  />

                  <div className="relative z-10 flex items-start justify-between gap-5">
                    <div
                      className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      style={{
                        background: "linear-gradient(145deg, rgba(20,168,0,0.24), rgba(255,255,255,0.04))",
                        border: "1px solid rgba(20,168,0,0.28)",
                        boxShadow: "10px 12px 30px rgba(0,0,0,0.24), inset -10px -10px 22px rgba(0,0,0,0.18), inset 8px 8px 16px rgba(255,255,255,0.04)",
                      }}
                    >
                      <Icon size={22} className="text-[#14A800]" />
                    </div>
                    <span className="text-xs text-[#14A800]" style={{ fontWeight: 900, letterSpacing: "1.6px" }}>
                      {number}
                    </span>
                  </div>

                  <div className="relative z-10 mt-7">
                    <h3 className="text-white" style={{ fontSize: "1.12rem", fontWeight: 900 }}>
                      {title}
                    </h3>
                    <p className="mt-3 text-sm text-[#9da1c4]" style={{ lineHeight: 1.72 }}>
                      {text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

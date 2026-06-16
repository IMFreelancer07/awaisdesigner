import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: "01",
    question: "What services do you offer?",
    answer:
      "I offer branding, graphic design, social media creatives, web design layouts, portfolio designs, banners, thumbnails, print assets, and campaign visuals tailored to your goals.",
    accent: "#14A800",
  },
  {
    id: "02",
    question: "Can you design a complete brand identity?",
    answer:
      "Yes. I can build a full identity system including logo direction, colors, typography, brand applications, social assets, and presentation-ready brand guidelines.",
    accent: "#00C6FF",
  },
  {
    id: "03",
    question: "Do you design websites and UI/UX screens?",
    answer:
      "Yes, I design modern website layouts, landing pages, dashboard screens, and mobile-first UI concepts that are clean, conversion-focused, and developer-friendly.",
    accent: "#A855F7",
  },
  {
    id: "04",
    question: "Can we work on a monthly basis?",
    answer:
      "Absolutely. If you need ongoing design support, we can work on a monthly retainer for social media, marketing creatives, brand consistency, and regular design requests.",
    accent: "#F59E0B",
  },
  {
    id: "05",
    question: "How can I start a project with you?",
    answer:
      "You can reach out through the contact section with your project details, timeline, and goals. Once I review the brief, I will get back to you to discuss the next step.",
    accent: "#FF6B35",
  },
];

const accentDots = ["#14A800", "#00C6FF", "#A855F7", "#F59E0B", "#FF6B35"];

export function FAQ() {
  const [activeId, setActiveId] = useState("01");

  return (
    <section
      id="faq"
      className="py-24"
      style={{
        background:
          "radial-gradient(circle at 15% 18%, rgba(20,168,0,0.12), transparent 26%), radial-gradient(circle at 85% 82%, rgba(0,198,255,0.1), transparent 22%), #07070F",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24 text-center lg:text-left"
          >
            <div
              className="flex items-center gap-3 mb-6 text-[#14A800]"
              style={{ fontWeight: 800, fontSize: "11px", letterSpacing: "3px" }}
            >
              <div className="w-6 h-px bg-[#14A800]" />
              FAQ
            </div>

            <h2
              className="text-white max-w-md"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 900, lineHeight: 0.96, letterSpacing: "0" }}
            >
              Got a
              <br />
              question?
              <br />
              <span
                style={{
                  background: "linear-gradient(180deg,#35E000 0%,#14A800 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                We've got
                <br />
                answers.
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="text-[#67678D] mt-8 max-w-sm"
              style={{ lineHeight: 1.8, fontWeight: 500 }}
            >
              Still have questions? Reach out directly and I'll get back to you quickly with the right direction for your project.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-10 px-6 py-4 rounded-2xl text-white inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              style={{
                fontWeight: 800,
                background: "linear-gradient(135deg,#14A800,#0D8A00)",
                boxShadow: "0 16px 34px rgba(20,168,0,0.3)",
              }}
            >
              Ask a Question
              <ArrowUpRight size={16} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex items-center gap-2 mt-12"
            >
              {accentDots.map((dot, index) => (
                <motion.span
                  key={dot}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: dot }}
                  animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
                  transition={{ duration: 2 + index * 0.15, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </motion.div>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = activeId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-3xl overflow-hidden"
                  style={{
                    background: "rgba(18,18,28,0.94)",
                    border: `1px solid ${isOpen ? `${item.accent}55` : "rgba(255,255,255,0.06)"}`,
                    boxShadow: isOpen
                      ? `0 18px 55px rgba(0,0,0,0.35), 0 0 0 1px ${item.accent}15`
                      : "0 18px 44px rgba(0,0,0,0.2)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveId(isOpen ? "" : item.id)}
                      className="w-full flex items-start gap-3 sm:gap-4 px-4 sm:px-6 py-5 text-left"
                  >
                    <div
                      className="px-2.5 py-1 rounded-xl flex items-center justify-center"
                      style={{
                        minWidth: "32px",
                        background: `${item.accent}18`,
                        color: item.accent,
                        border: `1px solid ${item.accent}30`,
                        fontWeight: 900,
                        fontSize: "12px",
                      }}
                    >
                      {item.id}
                    </div>

                    <div className="flex-1 text-white" style={{ fontWeight: 800, fontSize: "clamp(1rem, 4vw, 1.35rem)", lineHeight: 1.2 }}>
                      {item.question}
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.04 : 1 }}
                      transition={{ duration: 0.25 }}
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: isOpen ? `${item.accent}15` : "rgba(255,255,255,0.04)",
                        color: isOpen ? item.accent : "#7B7BA3",
                        border: `1px solid ${isOpen ? `${item.accent}30` : "rgba(255,255,255,0.07)"}`,
                      }}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.34, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div
                          className="mx-6 mb-5 pt-5 px-6 pb-6 rounded-2xl"
                          style={{
                            borderTop: `1px solid ${item.accent}1a`,
                            color: "#7C7CA5",
                            lineHeight: 1.85,
                            fontWeight: 500,
                            background: "linear-gradient(180deg, rgba(255,255,255,0.015) 0%, rgba(255,255,255,0.01) 100%)",
                          }}
                        >
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="rounded-3xl px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
              style={{
                background: "linear-gradient(90deg, rgba(11,31,18,0.94) 0%, rgba(8,24,13,0.94) 100%)",
                border: "1px solid rgba(20,168,0,0.2)",
                boxShadow: "0 16px 44px rgba(0,0,0,0.26)",
              }}
            >
              <div className="text-center md:text-left">
                <div className="text-white" style={{ fontWeight: 900, fontSize: "1.7rem", lineHeight: 1 }}>
                  Still not sure?
                </div>
                <div className="text-[#67708D] mt-2" style={{ fontWeight: 500 }}>
                  Book a free 15-minute call and let's talk about your project.
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-4 rounded-2xl text-white whitespace-nowrap w-full md:w-auto"
                style={{
                  fontWeight: 800,
                  background: "linear-gradient(135deg,#1BD400,#119000)",
                  boxShadow: "0 14px 32px rgba(20,168,0,0.28)",
                }}
              >
                Book a Free Call
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

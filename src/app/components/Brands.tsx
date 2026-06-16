import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  { name: "PIA", mark: "PIA", detail: "Pakistan International" },
  { name: "iSTACK CONFERENCES", mark: "iSTACK", detail: "Conferences" },
  { name: "AFFILIATE WORLD CONFERENCES", mark: "Affiliate World", detail: "Conferences" },
  { name: "FORMULA 1", mark: "Formula 1", detail: "Racing" },
  { name: "ADWORLDPRIME", mark: "ADWORLD", detail: "Prime" },
  { name: "FUNADIQ", mark: "FUNADIQ", detail: "Travel & Hospitality" },
  { name: "UMRAHCOMPANIONS", mark: "UMRAH", detail: "Companions" },
  { name: "UMRAH ZIYARAH", mark: "UMRAH", detail: "Ziyarah" },
  { name: "NESTLE", mark: "NESTLE", detail: "Food & Beverage" },
  { name: "ZINDIGI APP", mark: "ZINDIGI", detail: "App" },
  { name: "ETISALAT", mark: "ETISALAT", detail: "Telecom" },
  { name: "TAXI GUYS LIMITED", mark: "TAXI GUYS", detail: "Limited" },
];

function visibleBrands(startIndex: number) {
  return Array.from({ length: 5 }, (_, offset) => brands[(startIndex + offset) % brands.length]);
}

export function Brands() {
  const [startIndex, setStartIndex] = useState(0);
  const currentBrands = visibleBrands(startIndex);

  const showPrevious = () => {
    setStartIndex((current) => (current - 1 + brands.length) % brands.length);
  };

  const showNext = () => {
    setStartIndex((current) => (current + 1) % brands.length);
  };

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 18% 20%, rgba(20,168,0,0.11), transparent 26%), radial-gradient(circle at 78% 85%, rgba(0,198,255,0.08), transparent 28%), #05050C",
      }}
    >
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(20,168,0,0.34),transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-4 text-[#14A800]" style={{ fontWeight: 800, fontSize: "11px", letterSpacing: "3px" }}>
              <span className="w-8 h-px bg-[#14A800]" />
              BRANDS
            </div>
            <h2 className="text-white" style={{ fontSize: "var(--section-heading-size)", fontWeight: 900, lineHeight: 1.08 }}>
              Brands I've{" "}
              <span style={{ background: "linear-gradient(90deg,#14A800,#A9FF9D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                worked with
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.06, x: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={showPrevious}
              aria-label="Show previous brands"
              className="w-12 h-12 rounded-lg border flex items-center justify-center text-white transition-colors hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.06, x: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={showNext}
              aria-label="Show next brands"
              className="w-12 h-12 rounded-lg border flex items-center justify-center text-white transition-colors hover:bg-white/10"
              style={{ borderColor: "rgba(20,168,0,0.35)", background: "rgba(20,168,0,0.12)" }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {currentBrands.map((brand, index) => (
            <motion.div
              key={`${brand.name}-${startIndex}`}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.38, delay: index * 0.04 }}
              className={`${index === 0 ? "flex" : index < 3 ? "hidden sm:flex" : "hidden lg:flex"} min-h-[138px] rounded-lg border items-center justify-center text-center px-5 group`}
              style={{
                background: "linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))",
                borderColor: "rgba(255,255,255,0.08)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <div className="relative w-full">
                <div className="absolute inset-x-6 -top-5 h-px opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(90deg,transparent,#A9FF9D,transparent)" }} />
                <div
                  className="text-white uppercase"
                  style={{
                    fontWeight: 900,
                    fontSize: brand.mark.length > 12 ? "1.15rem" : "1.45rem",
                    lineHeight: 1,
                    letterSpacing: brand.mark.length > 10 ? "0.02em" : "0.08em",
                  }}
                >
                  {brand.mark}
                </div>
                <div className="mt-3 text-white/52 uppercase" style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.18em" }}>
                  {brand.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

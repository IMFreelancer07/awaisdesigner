import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Mitchell",
    role: "CEO, NeoBank",
    avatar: "JM",
    color: "#14A800",
    rating: 5,
    text: "Awais transformed our brand completely. The identity he created is bold, modern, and perfectly captures our fintech vision. Our user trust metrics went up 40% after the rebrand.",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager, TechVision",
    avatar: "SC",
    color: "#00C6FF",
    rating: 5,
    text: "Best designer we've ever worked with. Awais has an incredible eye for detail and always delivers beyond expectations. The UI/UX work he did boosted our conversion rate by 60%.",
  },
  {
    name: "Lukas Weber",
    role: "Founder, Artisan Co.",
    avatar: "LW",
    color: "#A855F7",
    rating: 5,
    text: "Working with Awais was an absolute pleasure. He understood our brand story immediately and crafted packaging that customers genuinely rave about. Sales up 3x since launch!",
  },
  {
    name: "Amara Diallo",
    role: "Marketing Director, Rise Agency",
    avatar: "AD",
    color: "#F59E0B",
    rating: 5,
    text: "Awais is a true professional. His social media design campaign went viral with over 2M impressions in the first week. Exceptional creativity backed by real strategic thinking.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24" style={{ background: "#0D0D1A" }}>
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
            Testimonials
          </span>
          <h2 className="text-white mb-4" style={{ fontSize: "var(--section-heading-size)", fontWeight: 900, lineHeight: 1.15 }}>
            Client{" "}
            <span style={{ background: "linear-gradient(90deg,#14A800,#6FDA44)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Success Stories
            </span>
          </h2>
          <p className="text-[#6868a0] max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            Don't just take my word for it — hear from the brands I've helped grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative p-7 rounded-lg border border-white/5 group"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={36} color={t.color} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#F59E0B" stroke="none" />
                ))}
              </div>

              <p className="text-[#9090b0] mb-6" style={{ lineHeight: 1.8, fontSize: "0.95rem" }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${t.color}25`, border: `2px solid ${t.color}40` }}
                >
                  <span style={{ color: t.color, fontWeight: 900, fontSize: "12px" }}>{t.avatar}</span>
                </div>
                <div>
                  <div className="text-white" style={{ fontWeight: 800, fontSize: "0.9rem" }}>{t.name}</div>
                  <div className="text-[#6868a0]" style={{ fontSize: "0.8rem", fontWeight: 500 }}>{t.role}</div>
                </div>
              </div>

              {/* Color accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${t.color}, transparent)` }} />
            </motion.div>
          ))}
        </div>

        {/* Top Rated badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <div className="flex items-center gap-4 px-8 py-5 rounded-lg border border-[#14A800]/25"
            style={{ background: "rgba(20,168,0,0.06)" }}>
            <div className="w-12 h-12 rounded-lg bg-[#14A800] flex items-center justify-center shadow-[0_10px_30px_rgba(20,168,0,0.35)]">
              <span className="text-white" style={{ fontWeight: 900, fontSize: "18px" }}>★</span>
            </div>
            <div>
              <div className="text-white" style={{ fontWeight: 800, fontSize: "1rem" }}>Top Rated</div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[#14A800]" style={{ fontWeight: 700, fontSize: "0.9rem" }}>Luxury service standard</span>
                <span className="text-[#6868a0] text-sm">·</span>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} size={11} fill="#F59E0B" stroke="none" />)}
                  <span className="text-[#c0c0d8] text-sm ml-1" style={{ fontWeight: 700 }}>5.0</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

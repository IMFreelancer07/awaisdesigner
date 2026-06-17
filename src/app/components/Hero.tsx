import { motion } from "motion/react";
import { ArrowUpRight, BadgeCheck, MapPin, Phone, Sparkles, Star } from "lucide-react";
import heroSectionImage from "../../imports/hero-section-image.png";

const heroStats = [
  { value: "500+", label: "Happy Clients" },
  { value: "200+", label: "Projects Done" },
  { value: "7+", label: "Years Experience" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full max-w-full overflow-hidden pt-24 sm:pt-28 text-white"
      style={{
        background:
          "radial-gradient(circle at 72% 42%, rgba(196,255,0,0.2), transparent 18%), linear-gradient(135deg,#1235ff 0%,#071fca 45%,#06127a 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,transparent_0,rgba(3,5,40,0.18)_55%,rgba(0,0,0,0.35)_100%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 min-h-[calc(100vh-7rem)] grid lg:grid-cols-[150px_1fr_340px] gap-8 items-end pb-10 overflow-x-hidden lg:overflow-visible">
        <motion.aside
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden lg:flex flex-col gap-8 self-center"
        >
          <div className="flex -space-x-3">
            {["A", "D", "UX"].map((item) => (
              <div
                key={item}
                className="h-12 w-12 rounded-full border-2 border-[#1235ff] bg-white text-[#1235ff] grid place-items-center"
                style={{ fontWeight: 900, fontSize: item.length > 1 ? "0.72rem" : "1rem" }}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="h-px w-full bg-[#c7ff00]" />
          <p className="max-w-[132px] uppercase text-sm leading-tight" style={{ fontWeight: 900 }}>
            Strategy, design and visual systems for ambitious brands.
          </p>
          <div className="space-y-7">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl text-[#c7ff00]" style={{ fontWeight: 1000, lineHeight: 0.9 }}>
                  {stat.value}
                </div>
                <div className="mt-2 h-px w-full bg-[#c7ff00]" />
                <div className="mt-2 uppercase text-xs" style={{ fontWeight: 900 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.aside>

        <div className="relative min-h-[auto] lg:min-h-[700px] flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mb-8 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c7ff00]/60 bg-[#c7ff00]/10 px-4 py-2 text-[#c7ff00] uppercase text-xs" style={{ fontWeight: 900 }}>
              <BadgeCheck size={15} /> Available for work
            </span>
            <span className="inline-flex items-center gap-2 uppercase text-xs text-white" style={{ fontWeight: 800 }}>
              <MapPin size={14} /> Islamabad, PK
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <h1 className="relative z-20 uppercase" style={{ fontWeight: 1000, lineHeight: 0.78, letterSpacing: "0" }}>
              <span className="block text-[#c7ff00] text-[clamp(3.35rem,17vw,4.8rem)] sm:text-[clamp(4.8rem,13vw,12.5rem)]">Creative</span>
              <span
                className="block text-transparent text-[clamp(3.05rem,15vw,4.25rem)] sm:text-[clamp(4rem,11.5vw,11rem)]"
                style={{ WebkitTextStroke: "2px #c7ff00" }}
              >
                Designer
              </span>
              <span className="block text-[#c7ff00] text-[clamp(3.2rem,16vw,4.4rem)] sm:text-[clamp(4.2rem,11.5vw,11rem)]">Awais</span>
            </h1>

            <motion.img
              src={heroSectionImage}
              alt="Awais Designer"
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 mt-8 mx-auto w-full max-w-[360px] object-contain lg:absolute lg:right-0 lg:bottom-[-16px] lg:mt-0 lg:w-[min(50vw,640px)] lg:max-w-none"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="relative z-30 mt-8 max-w-2xl rounded-lg border border-white/20 bg-[#06127a]/40 p-5 backdrop-blur-md"
          >
            <p className="text-lg text-white/90 leading-relaxed">
              I create brand identities, UI/UX screens, company profiles and campaign visuals that look premium, stay consistent and help your business get noticed.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 rounded-lg bg-[#c7ff00] px-6 py-3 text-[#06127a] uppercase"
                style={{ fontWeight: 1000 }}
              >
                View Portfolio <ArrowUpRight size={18} />
              </button>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-white uppercase"
                style={{ fontWeight: 900 }}
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:flex flex-col justify-between self-stretch py-12"
        >
          <div className="ml-auto flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-[#c7ff00] text-[#06127a]">
              <Phone size={28} fill="currentColor" />
            </span>
            <div>
              <div className="uppercase text-sm text-white/75" style={{ fontWeight: 900 }}>Book a project</div>
              <a href="tel:+923335227117" className="text-xl text-white" style={{ fontWeight: 1000 }}>
                +92 333 522 7117
              </a>
            </div>
          </div>
          <div className="ml-auto grid h-32 w-32 place-items-center rounded-full border-2 border-[#c7ff00] text-[#c7ff00]">
            <Sparkles size={68} />
          </div>
          <div className="max-w-[260px] text-right text-white/85 leading-relaxed">
            <Star className="ml-auto mb-3 text-[#c7ff00]" fill="currentColor" />
            Premium creative direction for logo design, social media, print, website UI and brand presentations.
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

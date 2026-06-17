import { motion, useReducedMotion } from "motion/react";
import { Sparkles } from "lucide-react";
import cvFile from "../../imports/awais-designer-cv.pdf";
import heroBadgeIcons from "../../imports/hero-badge-icons.png";
import heroCenterComposite from "../../imports/hero-center-composite.png";

const stats = [
  { value: "500+", label: "Satisfied Clients" },
  { value: "250+", label: "Projects Done" },
  { value: "2000+", label: "Media Featured" },
];

const skills = [
  "Graphic Designer",
  "UI/UX Designer",
  "Motion Designer",
  "Video Editor",
  "Print Media Designer",
  "Social Media Manager",
];

const marqueeWordStyle = {
  fontFamily: "'Supertalls', 'Arial Narrow', Impact, sans-serif",
  fontWeight: 400,
} as const;

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#03030B] text-white"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute left-1/2 top-[46%] h-[470px] w-[470px] -translate-x-1/2 rounded-full blur-[125px]"
        style={{ background: "rgba(20,168,0,0.34)" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute left-1/2 top-[50%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#14A800]/8"
        animate={reduceMotion ? undefined : { scale: [1, 1.04, 1], opacity: [0.24, 0.42, 0.24] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.11]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(20,168,0,0.42) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-68px)] w-full max-w-[1138px] grid-cols-1 px-6 pb-28 pt-28 sm:px-10 lg:grid-cols-[154px_minmax(0,1fr)_143px] lg:gap-[48px] lg:px-0 lg:pb-[68px] lg:pt-[116px]">
        <motion.aside
          initial={{ opacity: 0, x: -22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="order-2 mt-12 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-center lg:order-1 lg:mt-[72px] lg:flex-col lg:justify-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.18, ease: easeOut }}
            className="hidden lg:block"
          >
            <div className="flex items-center">
              <img
                src={heroBadgeIcons}
                alt=""
                aria-hidden="true"
                className="relative z-20 h-[52px] w-[104px] object-contain"
              />
              <span
                className="relative z-20 -ml-[20px] grid h-[52px] w-[52px] place-items-center rounded-full border-2 border-black bg-[#14A800] font-['Montserrat'] text-[10px] font-extrabold leading-none text-white"
              >
                Top Rated
              </span>
            </div>
            <div className="mt-10 h-px w-[92px] bg-[#14A800]" />
            <p className="mt-4 max-w-[186px] font-['Montserrat'] text-[14px] font-semibold leading-[1.2] text-white">
              Crafting Meaningful
              <br />
              Visual Experiences
            </p>
          </motion.div>

          <div className="flex w-full flex-col gap-[27px] sm:max-w-[520px] sm:flex-row lg:mt-[86px] lg:max-w-[154px] lg:flex-col">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.58, delay: 0.35 + index * 0.12, ease: easeOut }}
                className="min-w-0 flex-1"
              >
                <p className="font-['Montserrat'] text-[38px] font-extrabold leading-none text-[#14A800] lg:text-[45px]">
                  {stat.value}
                </p>
                <p className="mt-2 font-['Montserrat'] text-[13px] font-semibold leading-[1.2] text-white lg:text-[14px]">
                  {stat.label}
                </p>
                {index < stats.length - 1 && (
                  <motion.div
                    className="mt-6 h-px w-full bg-[#14A800]"
                    initial={{ scaleX: 0, transformOrigin: "left" }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 + index * 0.12, ease: easeOut }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.aside>

        <div className="order-1 flex flex-col items-center justify-center lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easeOut }}
            className="relative mt-4 flex min-h-[520px] w-full max-w-[745px] items-center justify-center sm:min-h-[640px] lg:mt-0 lg:min-h-[624px]"
          >
            <h1 id="hero-heading" className="sr-only">
              Creative Designer
            </h1>

            <motion.img
              src={heroCenterComposite}
              alt="Creative Designer hero artwork"
              initial={{ opacity: 0, y: 34, scale: 0.98 }}
              animate={
                reduceMotion
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 1, y: [0, -9, 0], scale: 1 }
              }
              transition={
                reduceMotion
                  ? { duration: 0.9, delay: 0.16, ease: easeOut }
                  : {
                      opacity: { duration: 0.9, delay: 0.16, ease: easeOut },
                      scale: { duration: 0.9, delay: 0.16, ease: easeOut },
                      y: { duration: 5.4, delay: 1.05, repeat: Infinity, ease: "easeInOut" },
                    }
              }
              className="relative z-20 h-auto w-[min(92vw,640px)] object-contain sm:w-[600px] lg:w-[640px]"
            />
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: easeOut }}
          className="order-3 flex flex-col items-center gap-4 lg:mt-[124px] lg:items-center"
        >
          <motion.div
            className="hidden h-16 w-16 place-items-center rounded-full border border-[#14A800] text-[#14A800] lg:grid"
            animate={reduceMotion ? undefined : { rotate: 360, boxShadow: ["0 0 0 rgba(20,168,0,0)", "0 0 28px rgba(20,168,0,0.24)", "0 0 0 rgba(20,168,0,0)"] }}
            transition={{ rotate: { duration: 14, repeat: Infinity, ease: "linear" }, boxShadow: { duration: 2.8, repeat: Infinity, ease: "easeInOut" } }}
          >
            <Sparkles size={34} fill="currentColor" />
          </motion.div>

          <div className="mt-4 flex w-full max-w-[340px] flex-col gap-[14px] sm:flex-row lg:mt-[132px] lg:w-[146px] lg:max-w-[146px] lg:flex-col">
            <motion.a
              href={cvFile}
              download="Awais-Designer-CV.pdf"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.62, ease: easeOut }}
              className="inline-flex h-[46px] min-w-[146px] flex-1 items-center justify-center whitespace-nowrap rounded-full bg-[#14A800] px-5 font-['Montserrat'] text-[14px] font-bold leading-none text-white transition-shadow hover:shadow-[0_0_24px_rgba(20,168,0,0.38)] lg:flex-none"
            >
              Download CV
            </motion.a>
            <motion.button
              type="button"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.72, ease: easeOut }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex h-[46px] min-w-[146px] flex-1 items-center justify-center rounded-full border border-[#14A800] px-5 font-['Montserrat'] text-[14px] font-bold leading-none text-white transition-colors hover:bg-[#14A800]/16 lg:flex-none"
            >
              Hire Me
            </motion.button>
          </div>
        </motion.aside>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-30 overflow-hidden bg-[#14A800]"
        initial={{ y: 68 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.72, delay: 0.82, ease: easeOut }}
      >
        <motion.div
          initial={{ x: 0 }}
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="flex h-[68px] w-max items-center gap-[35px] px-3"
        >
          {[...skills, ...skills].map((skill, index) => (
            <div key={`${skill}-${index}`} className="flex shrink-0 items-center gap-[18px]">
              <span
                className="text-[24px] uppercase leading-none text-white sm:text-[27px]"
                style={marqueeWordStyle}
              >
                {skill}
              </span>
              <span className="h-[13px] w-[13px] rounded-full bg-[#03030B]" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

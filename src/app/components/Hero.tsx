import { motion, useReducedMotion } from "motion/react";
import { Sparkles } from "lucide-react";
import heroPortrait from "../../imports/figma-hero-portrait.png";
import logoMark from "../../imports/awais-logo-mark.png";
import cvFile from "../../imports/awais-designer-cv.pdf";

const stats = [
  { value: "500+", label: "Satisfied Clients" },
  { value: "250+", label: "Projects Done" },
  { value: "2000+", label: "Media Featured" },
];

const skills = [
  "Video Editor",
  "Print Media Designer",
  "Social Media Manager",
  "Graphic Designer",
  "UI/UX Designer",
  "Motion Designer",
];

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
        className="absolute inset-0 opacity-[0.54]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(20,168,0,0.48) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-[43%] h-[560px] w-[650px] -translate-x-1/2 rounded-full blur-[118px]"
        style={{ background: "rgba(20,168,0,0.24)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-[66px] h-[220px] bg-gradient-to-t from-[#03030B] via-[#03030B]/72 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-66px)] w-full max-w-[1112px] flex-col px-6 pb-28 pt-28 sm:px-10 lg:block lg:px-0 lg:pb-0 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: easeOut }}
          className="order-2 mx-auto mt-8 w-full max-w-[220px] lg:absolute lg:left-0 lg:top-[174px] lg:mx-0 lg:mt-0"
        >
          <div className="flex items-center">
            <img
              src={heroPortrait}
              alt=""
              aria-hidden="true"
              className="h-10 w-10 rounded-full object-cover lg:h-11 lg:w-11"
              style={{ objectPosition: "56% 22%" }}
            />
            <span className="-ml-2 grid h-10 w-10 place-items-center rounded-full bg-white lg:h-11 lg:w-11">
              <img src={logoMark} alt="" aria-hidden="true" className="h-7 w-7 object-contain lg:h-8 lg:w-8" />
            </span>
            <span className="-ml-2 grid h-10 w-10 place-items-center rounded-full bg-[#14A800] font-['Montserrat'] text-[11px] font-extrabold text-white lg:h-11 lg:w-11">
              500+
            </span>
          </div>
          <div className="mt-4 h-px w-[89px] bg-[#14A800]" />
          <p className="mt-[18px] max-w-[180px] font-['Montserrat'] text-[15px] font-bold leading-[1.45] text-white lg:max-w-[170px]">
            Crafting Meaningful
            <br />
            Visual Experiences
          </p>
        </motion.div>

        <div className="order-3 mx-auto mt-10 flex w-full max-w-[620px] flex-col gap-8 sm:flex-row lg:absolute lg:left-0 lg:top-[412px] lg:mx-0 lg:mt-0 lg:block lg:w-[154px] lg:max-w-none">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.34 + index * 0.1, ease: easeOut }}
              className="min-w-0 flex-1 lg:mb-[29px]"
            >
              <p className="font-['Montserrat'] text-[42px] font-extrabold leading-none text-[#14A800] lg:text-[45px]">
                {stat.value}
              </p>
              <p className="mt-[10px] font-['Montserrat'] text-[14px] font-bold leading-[1.2] text-white">
                {stat.label}
              </p>
              {index < stats.length - 1 && (
                <motion.div
                  className="mt-[27px] h-px w-full bg-[#14A800]"
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.65, delay: 0.48 + index * 0.1, ease: easeOut }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78, ease: easeOut }}
          className="order-1 relative mx-auto flex min-h-[600px] w-full max-w-[760px] items-start justify-center lg:absolute lg:left-[196px] lg:top-[84px] lg:h-[770px] lg:w-[760px] lg:max-w-none"
        >
          <h1
            id="hero-heading"
            className="absolute left-1/2 top-[115px] z-10 w-[min(92vw,690px)] -translate-x-1/2 select-none text-center uppercase leading-[1.15] tracking-[-0.02em] lg:left-[-40px] lg:top-[176px] lg:w-[760px] lg:translate-x-0"
            style={{ fontFamily: "'Supertalls', 'Arial Narrow', Impact, sans-serif", fontWeight: 400 }}
          >
            <motion.span
              className="relative z-10 block text-[clamp(6.5rem,18vw,11.55rem)] text-[#14A800] lg:text-[184px]"
              initial={{ opacity: 0, y: 42, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 0.84, delay: 0.18, ease: easeOut }}
            >
              Creative
            </motion.span>
            <motion.span
              className="relative z-10 block text-[clamp(5.8rem,16vw,10.9rem)] text-transparent lg:text-[174px]"
              style={{ WebkitTextStroke: "clamp(1px, 0.16vw, 2px) #ffffff" }}
              initial={{ opacity: 0, y: 42, clipPath: "inset(100% 0 0 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 0.84, delay: 0.28, ease: easeOut }}
            >
              Designer
            </motion.span>
          </h1>

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[225px] z-30 w-[min(92vw,690px)] -translate-x-1/2 select-none text-center uppercase leading-none tracking-[-0.02em] lg:left-[-40px] lg:top-[389px] lg:w-[760px] lg:translate-x-0"
            style={{ fontFamily: "'Supertalls', 'Arial Narrow', Impact, sans-serif", fontWeight: 400 }}
            initial={{ opacity: 0, y: 42, clipPath: "inset(100% 0 0 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 0.84, delay: 0.28, ease: easeOut }}
          >
            <span
              className="block text-[clamp(5.8rem,16vw,10.9rem)] text-transparent lg:text-[174px]"
              style={{ WebkitTextStroke: "clamp(1px, 0.16vw, 2px) #ffffff" }}
            >
              Designer
            </span>
          </motion.div>

          <motion.img
            src={heroPortrait}
            alt="Awais Designer portrait"
            initial={{ opacity: 0, y: 28, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.08, ease: easeOut }}
            className="relative z-20 mt-0 h-auto w-[min(95vw,680px)] object-contain drop-shadow-[0_32px_92px_rgba(20,168,0,0.24)] lg:absolute lg:left-[16px] lg:top-[-15px] lg:w-[650px]"
          />
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.44, ease: easeOut }}
          className="pointer-events-none hidden h-16 w-16 place-items-center rounded-full border border-[#14A800] text-[#14A800] lg:absolute lg:left-[1054px] lg:top-[270px] lg:grid"
        >
          <Sparkles size={34} fill="currentColor" />
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.58, ease: easeOut }}
          className="order-4 mx-auto mt-10 flex w-full max-w-[340px] flex-col gap-[17px] sm:flex-row lg:absolute lg:left-[974px] lg:top-[565px] lg:mx-0 lg:mt-0 lg:w-[143px] lg:flex-col"
        >
          <motion.a
            href={cvFile}
            download="Awais-Designer-CV.pdf"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex h-10 flex-1 items-center justify-center rounded-full bg-[#14A800] px-5 font-['Montserrat'] text-[16px] font-bold text-white transition-shadow hover:shadow-[0_0_24px_rgba(20,168,0,0.38)]"
          >
            Download CV
          </motion.a>
          <motion.button
            type="button"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex h-10 flex-1 items-center justify-center rounded-full border border-[#14A800] px-5 font-['Montserrat'] text-[16px] font-bold text-white transition-colors hover:bg-[#14A800]/16"
          >
            Hire Me
          </motion.button>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.62, delay: 0.68, ease: easeOut }}
        className="absolute inset-x-6 bottom-[88px] z-40 mx-auto max-w-[940px] text-center font-['Montserrat'] text-[12px] font-medium leading-[1.7] text-white/82 sm:bottom-[92px] sm:text-[13px] lg:bottom-[98px]"
      >
        I&apos;m <span className="font-extrabold text-white">Awais Siddique</span>, a Graphic Designer and Branding Specialist dedicated to helping businesses stand out in a crowded digital world.
        <br className="hidden sm:block" />
        With expertise in Branding, Social Media Design, Print Design, Marketing Creatives, and Figma, I create visuals that not only look great but also communicate the right message to the right audience.
      </motion.p>

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-30 overflow-hidden bg-[#14A800]"
        initial={{ y: 66 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.62, delay: 0.72, ease: easeOut }}
      >
        <motion.div
          initial={{ x: 0 }}
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex h-[66px] w-max items-center gap-[35px] px-0"
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div key={`${skill}-${index}`} className="flex shrink-0 items-center gap-[31px]">
              <span
                className="text-[25px] uppercase leading-none text-white sm:text-[30px]"
                style={{ fontFamily: "'Supertalls', 'Arial Narrow', Impact, sans-serif", fontWeight: 400 }}
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

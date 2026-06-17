import { useEffect, useRef, useState } from "react";
import { animate, motion, useReducedMotion } from "motion/react";
import { Sparkles } from "lucide-react";
import cvFile from "../../imports/awais-designer-cv.pdf";
import heroBadgeIcons from "../../imports/hero-badge-icons.png";
import heroCenterComposite from "../../imports/hero-center-composite.png";

const stats = [
  { value: 500, suffix: "+", label: "Satisfied Clients" },
  { value: 250, suffix: "+", label: "Projects Done" },
  { value: 2000, suffix: "+", label: "Media Featured" },
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

function CountUpStat({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const controls = animate(0, value, {
          duration: 1.8,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (latest) => setCount(Math.round(latest)),
        });

        return () => controls.stop();
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

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

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-52px)] w-full max-w-[1138px] grid-cols-1 px-8 pb-[74px] pt-[86px] sm:px-10 lg:min-h-[calc(100vh-68px)] lg:grid-cols-[154px_minmax(0,1fr)_143px] lg:gap-[48px] lg:px-0 lg:pb-[68px] lg:pt-[116px]">
        <motion.aside
          initial={{ opacity: 0, x: -22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="order-2 mt-12 hidden flex-col gap-8 sm:flex-row sm:items-start sm:justify-center lg:order-1 lg:mt-[72px] lg:flex lg:flex-col lg:justify-start"
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
                className="relative z-20 -ml-[20px] grid h-[52px] w-[52px] place-items-center rounded-full border-2 border-black bg-[#14A800] px-[4px] text-center font-['Montserrat'] text-[9px] font-extrabold leading-[1.05] text-white"
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
                  <CountUpStat value={stat.value} suffix={stat.suffix} />
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
            className="relative mt-2 flex min-h-[555px] w-full max-w-[745px] items-start justify-center sm:min-h-[640px] lg:mt-0 lg:min-h-[624px] lg:items-center"
          >
            <h1 id="hero-heading" className="sr-only">
              Creative Designer
            </h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.56, delay: 0.36, ease: easeOut }}
              className="absolute left-2 top-[118px] z-30 grid h-10 w-10 place-items-center rounded-full border-2 border-[#14A800] text-[#14A800] sm:left-2 sm:top-[128px] lg:hidden"
            >
              <Sparkles size={21} fill="currentColor" />
            </motion.div>

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
              className="relative z-20 mt-12 h-auto w-[min(90vw,370px)] max-w-none object-contain sm:mt-4 sm:w-[560px] lg:mt-0 lg:w-[640px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.42, ease: easeOut }}
            className="-mt-10 grid w-full max-w-[356px] grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-x-7 gap-y-5 lg:hidden"
          >
            <div className="flex min-w-0 flex-col gap-[22px]">
              {stats.map((stat, index) => (
                <div key={stat.label} className="min-w-0">
                  <p className="font-['Montserrat'] text-[43px] font-extrabold leading-none text-[#14A800]">
                    <CountUpStat value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 font-['Montserrat'] text-[15px] font-semibold leading-[1.12] text-white">
                    {stat.label}
                  </p>
                  {index < stats.length - 1 && <div className="mt-[18px] h-px w-full bg-[#14A800]" />}
                </div>
              ))}
            </div>

            <div className="flex min-w-0 flex-col items-start justify-start pt-[12px]">
              <div className="flex items-center">
                <img
                  src={heroBadgeIcons}
                  alt=""
                  aria-hidden="true"
                  className="relative z-20 h-[52px] w-[104px] object-contain"
                />
              </div>
              <div className="mt-[19px] h-px w-full max-w-[128px] bg-[#14A800]" />
              <p className="mt-3 max-w-[150px] font-['Montserrat'] text-[15px] font-semibold leading-[1.2] text-white">
                Crafting Meaningful
                <br />
                Visual Experiences
              </p>
              <div className="mt-7 flex w-full flex-col gap-[16px]">
                <motion.a
                  href={cvFile}
                  download="Awais-Designer-CV.pdf"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex h-[46px] w-full min-w-[146px] items-center justify-center whitespace-nowrap rounded-full bg-[#14A800] px-5 font-['Montserrat'] text-[16px] font-bold leading-none text-white shadow-[0_7px_14px_rgba(20,168,0,0.34)]"
                >
                  Download CV
                </motion.a>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex h-[42px] w-full min-w-[146px] items-center justify-center rounded-full border border-[#14A800] px-5 font-['Montserrat'] text-[16px] font-bold leading-none text-white"
                >
                  Hire Me
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: easeOut }}
          className="order-3 hidden flex-col items-center gap-4 lg:mt-[124px] lg:flex lg:items-center"
        >
          <motion.div
            className="hidden h-16 w-16 place-items-center rounded-full border border-[#14A800] text-[#14A800] lg:grid"
            animate={reduceMotion ? undefined : { rotate: 360, boxShadow: ["0 0 0 rgba(20,168,0,0)", "0 0 28px rgba(20,168,0,0.24)", "0 0 0 rgba(20,168,0,0)"] }}
            transition={{ rotate: { duration: 14, repeat: Infinity, ease: "linear" }, boxShadow: { duration: 2.8, repeat: Infinity, ease: "easeInOut" } }}
          >
            <Sparkles size={34} fill="currentColor" />
          </motion.div>

          <div className="mt-4 flex w-full max-w-[340px] flex-col gap-[14px] sm:flex-row lg:mt-[178px] lg:w-[146px] lg:max-w-[146px] lg:flex-col">
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
        initial={{ y: 41 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.72, delay: 0.82, ease: easeOut }}
      >
        <motion.div
          initial={{ x: 0 }}
          animate={reduceMotion ? undefined : { x: ["-50%", "0%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex h-[41px] w-max items-center gap-[20px] px-3 lg:h-[68px] lg:gap-[35px]"
        >
          {[...skills, ...skills].map((skill, index) => (
            <div key={`${skill}-${index}`} className="flex shrink-0 items-center gap-[14px] lg:gap-[18px]">
              <span
                className="text-[18px] uppercase leading-none text-white sm:text-[24px] lg:text-[27px]"
                style={marqueeWordStyle}
              >
                {skill}
              </span>
              <span className="h-[7px] w-[7px] rounded-full bg-[#03030B] lg:h-[13px] lg:w-[13px]" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

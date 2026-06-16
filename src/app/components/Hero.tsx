import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, animate } from "motion/react";
import {
  ArrowUpRight, MapPin,
  PenTool, Ruler, MousePointer2, Pipette, Type, Crop,
} from "lucide-react";
import awaisImg from "../../imports/WhatsApp_Image_2026-04-24_at_17.10.31.jpeg";

/* ─── animated counter ────────────────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const seen = useRef(false);
  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !seen.current) {
        seen.current = true;
        const ctrl = animate(0, to, {
          duration: 1.8,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (v) => setVal(Math.round(v)),
        });
        return () => ctrl.stop();
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={nodeRef}>{val}{suffix}</span>;
}

/* ─── spinning dashed ring ────────────────────────────────── */
function SpinRing({ size, color, duration, reverse = false, dashed = false }: {
  size: number; color: string; duration: number; reverse?: boolean; dashed?: boolean;
}) {
  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size, height: size,
        top: "50%", left: "50%",
        marginTop: -size / 2, marginLeft: -size / 2,
        border: dashed ? `1px dashed ${color}` : `1px solid ${color}`,
        ...(!dashed && { borderTopColor: "transparent", borderRightColor: "transparent" }),
      }}
    />
  );
}

/* ─── tool icon ───────────────────────────────────────────── */
/*
  KEY FIX: Never put `transform` in style on a motion.div — Motion owns that
  property and will overwrite it during animation. Instead:
    • outer plain <div>  → handles the STATIC position (left/top)
    • first motion.div   → handles the ENTRY animation (opacity, scale)
    • inner motion.div   → handles the FLOAT loop (y, x)
*/
const FRAME_CENTER = 240; // half of 480px frame
const ICON_SIZE    = 56;

interface ToolDef {
  Icon: React.ElementType;
  label: string;
  color: string;
  cx: number; cy: number;        // offset from frame center, px
  floatY: number[];
  floatX?: number[];
  duration: number;
  entryDelay: number;
  rotateIcon?: number;
}

function ToolIcon({ Icon, label, color, cx, cy, floatY, floatX = [0,0,0], duration, entryDelay, rotateIcon = 0 }: ToolDef) {
  const left = FRAME_CENTER + cx - ICON_SIZE / 2;
  const top  = FRAME_CENTER + cy - ICON_SIZE / 2;

  return (
    <div
      className="absolute pointer-events-none"
      style={{ left, top, width: ICON_SIZE, height: ICON_SIZE, zIndex: 10 }}
    >
      {/* entry pop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: entryDelay, duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }}
        className="w-full h-full"
      >
        {/* float loop */}
        <motion.div
          animate={{ y: floatY, x: floatX }}
          transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: entryDelay }}
          className="relative w-full h-full rounded-lg flex items-center justify-center"
          style={{
            background: "rgba(4,4,16,0.9)",
            backdropFilter: "blur(18px)",
            border: `1px solid ${color}45`,
            boxShadow: `0 6px 24px rgba(0,0,0,0.55), 0 0 0 1px ${color}12, inset 0 1px 0 rgba(255,255,255,0.05)`,
          }}
        >
          {/* top glow */}
          <div className="absolute inset-0 rounded-lg"
            style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${color}28, transparent 70%)` }} />
          <Icon
            size={23}
            color={color}
            strokeWidth={1.5}
            style={{ transform: `rotate(${rotateIcon}deg)`, position: "relative", zIndex: 1, flexShrink: 0 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─── tool positions ──────────────────────────────────────── */
/*
  Frame: 480 × 480 px, center at (240, 240).
  Portrait circle radius: 155 px  → edge at 155 px from center
  Ring radii: 184, 212, 240 px
  Tools placed at radius ≈ 198 px → in the gap between ring-2 (212) and ring-1 (184)
  This keeps them clearly OUTSIDE the portrait but INSIDE the outer ring.

  Clock positions: 12, 2, 4, 6, 9, 11 o'clock
  cx = r·sin(θ),  cy = -r·cos(θ)   (y axis points down)
*/
const R = 198;
const tools: ToolDef[] = [
  {
    Icon: PenTool,
    label: "PEN",       color: "#14A800",
    cx: 0,              cy: -R,           // 12 o'clock
    floatY: [0,-10,0],  duration: 3.2,    entryDelay: 1.1,
  },
  {
    Icon: Ruler,
    label: "RULER",     color: "#00C6FF",
    cx: Math.round(R * Math.sin((2/6)*Math.PI)),
    cy: Math.round(-R * Math.cos((2/6)*Math.PI)),  // ~2 o'clock
    floatY: [0,-8,0],   floatX: [0,5,0],  duration: 3.8, entryDelay: 1.25,
    rotateIcon: -40,
  },
  {
    Icon: MousePointer2,
    label: "SELECT",    color: "#A855F7",
    cx: Math.round(R * Math.sin((4/6)*Math.PI)),
    cy: Math.round(-R * Math.cos((4/6)*Math.PI)),  // ~4 o'clock
    floatY: [0,9,0],    floatX: [0,5,0],  duration: 4.2, entryDelay: 1.4,
  },
  {
    Icon: Pipette,
    label: "PICKER",    color: "#F59E0B",
    cx: 0,              cy: R,            // 6 o'clock
    floatY: [0,10,0],   duration: 3.6,    entryDelay: 1.55,
  },
  {
    Icon: Type,
    label: "TYPE",      color: "#FF6B35",
    cx: -R,             cy: 0,            // 9 o'clock
    floatY: [0,7,0],    floatX: [0,-6,0], duration: 4.0, entryDelay: 1.7,
  },
  {
    Icon: Crop,
    label: "CROP",      color: "#6FDA44",
    cx: Math.round(-R * Math.sin((2/6)*Math.PI)),
    cy: Math.round(-R * Math.cos((2/6)*Math.PI)),  // ~10 o'clock
    floatY: [0,-9,0],   floatX: [0,-5,0], duration: 3.4, entryDelay: 1.85,
  },
];

/* ─── Hero ────────────────────────────────────────────────── */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [headingShift, setHeadingShift] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeadingShift((current) => (current + 1) % 3);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const headingPalette = ["solid-muted", "solid-white", "gradient-green"] as const;
  const headingWords = [
    { text: "Graphic", d: 0.16 },
    { text: "Designer", d: 0.28 },
    { text: "& Branding", d: 0.40 },
  ];

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex items-center overflow-hidden"
      style={{ background: "#03030A", minHeight: "115vh" }}
    >
      {/* ── noise grain ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* ── dot grid, fades to edges ── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(20,168,0,0.18) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* ── ambient glows ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -right-48 w-[650px] h-[650px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(20,168,0,0.08) 0%, transparent 60%)" }} />
        <div className="absolute -bottom-32 left-1/4 w-[550px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,198,255,0.05) 0%, transparent 65%)" }} />
      </div>

      {/* ── ghost text ── */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden xl:block overflow-hidden"
        style={{
          fontSize: "23vw", fontWeight: 900, letterSpacing: "0", lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(20,168,0,0.05)",
        }}
      >
        AWAIS
      </div>

      {/* ── page content ── */}
      <motion.div style={{ y: contentY, opacity: contentFade }} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-40 pb-28
                        grid lg:grid-cols-[1fr_auto] gap-12 xl:gap-20 items-center">

          {/* ════════════════ LEFT TEXT ════════════════ */}
          <div className="max-w-2xl">

            {/* status pill */}
            <motion.div
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="inline-flex items-center gap-3 mb-10"
            >
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border"
                style={{ background: "rgba(20,168,0,0.07)", borderColor: "rgba(20,168,0,0.2)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#14A800] animate-pulse" />
                <span className="text-[#14A800]" style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "1.5px" }}>
                  AVAILABLE FOR WORK
                </span>
              </div>
              <div className="flex items-center gap-1 text-[#A9FF9D]" style={{ fontSize: "11px", fontWeight: 700 }}>
                <MapPin size={10} />
                ISLAMABAD, PK
              </div>
            </motion.div>

            {/* stacked headline */}
            <div className="overflow-hidden mb-8">
              {headingWords.map(({ text, d }, index) => {
                const colorMode = headingPalette[(index + headingShift) % headingPalette.length];

                return (
                  <motion.div
                    key={text}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: d, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontSize: "var(--hero-heading-size)",
                    fontWeight: 900,
                    lineHeight: 0.97,
                    letterSpacing: "0",
                    transitionProperty: "color, background",
                    transitionDuration: "120ms",
                    ...(colorMode === "gradient-green" ? {
                      background: "linear-gradient(110deg,#14A800 0%,#6FDA44 50%,#00C6FF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    } : {
                      background: "transparent",
                      WebkitTextFillColor: colorMode === "solid-white" ? "#ffffff" : "#A9FF9D",
                      color: colorMode === "solid-white" ? "#ffffff" : "#A9FF9D",
                    }),
                  }}
                >
                  {text}
                  </motion.div>
                );
              })}
            </div>

            {/* description */}
            <motion.p
              initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="text-[#A9FF9D] mb-10 max-w-lg"
              style={{ lineHeight: 1.9, fontSize: "1rem", fontWeight: 500 }}
            >
              I turn ambitious ideas into iconic visual identities — specializing in brand strategy,
              UI/UX design, and systems that generate measurable results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-3 mb-14"
            >
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative px-9 py-4 rounded-lg text-white flex items-center gap-2 overflow-hidden"
                style={{ fontWeight: 800, fontSize: "0.92rem" }}
              >
                <div className="absolute inset-0 rounded-lg"
                  style={{ background: "linear-gradient(135deg,#14A800,#097300)" }} />
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg,#1bd400,#0d8a00)" }} />
                <div className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{ boxShadow: "0 10px 36px rgba(20,168,0,0.5)" }} />
                <span className="relative">View Portfolio</span>
                <ArrowUpRight size={15} className="relative" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-9 py-4 rounded-lg border text-white/50 hover:text-white transition-all duration-200"
                style={{ fontWeight: 700, fontSize: "0.92rem", borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
              >
                Hire Me
              </motion.button>
            </motion.div>

            {/* stats */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <div className="w-20 h-px mb-7" style={{ background: "rgba(20,168,0,0.2)" }} />
              <div className="flex items-center">
                {[
                  { to: 200, suffix: "+", label: "Projects",    color: "#14A800" },
                  { to: 98,  suffix: "%", label: "Satisfaction", color: "#00C6FF" },
                  { to: 7,   suffix: "+", label: "Years Exp.",   color: "#A855F7" },
                  { to: 50,  suffix: "+", label: "Clients",      color: "#F59E0B" },
                ].map((s, i) => (
                  <div key={s.label} className="flex items-center">
                    <div className="flex flex-col items-center px-5 first:pl-0 last:pr-0 text-center">
                      <div style={{ color: s.color, fontWeight: 900, fontSize: "1.75rem", letterSpacing: "0", lineHeight: 1 }}>
                        <Counter to={s.to} suffix={s.suffix} />
                      </div>
                      <div className="text-[#A9FF9D] mt-1" style={{ fontSize: "9.5px", fontWeight: 800, letterSpacing: "1px" }}>
                        {s.label.toUpperCase()}
                      </div>
                    </div>
                    {i < 3 && <div className="w-px h-7" style={{ background: "rgba(255,255,255,0.04)" }} />}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ════════════════ RIGHT VISUAL ════════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center flex-shrink-0"
            style={{ width: 480, height: 520 }}
          >

            {/* ── spinning rings ── centered on 480×480 frame block ── */}
            <div
              className="absolute"
              style={{ width: 480, height: 480, top: "50%", left: "50%", marginTop: -240, marginLeft: -240, overflow: "visible" }}
            >
              {/* outer dashed ring */}
              <SpinRing size={468} color="rgba(20,168,0,0.09)"   duration={25}  dashed />
              {/* middle solid */}
              <SpinRing size={416} color="rgba(0,198,255,0.07)"  duration={32}  reverse />
              {/* inner solid */}
              <SpinRing size={364} color="rgba(168,85,247,0.06)" duration={42} />

              {/* ── conic gradient halo ── */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 448, height: 448,
                  top: "50%", left: "50%",
                  marginTop: -224, marginLeft: -224,
                  background: "conic-gradient(from 0deg, #14A800 0%, #6FDA44 20%, #00C6FF 45%, transparent 60%, transparent 82%, #14A800 100%)",
                  maskImage: "radial-gradient(circle, transparent 208px, black 210px, black 224px, transparent 226px)",
                  WebkitMaskImage: "radial-gradient(circle, transparent 208px, black 210px, black 224px, transparent 226px)",
                  filter: "blur(2px)",
                  opacity: 0.9,
                }}
              />

              {/* ── portrait circle ── */}
              <div
                className="absolute overflow-hidden rounded-full"
                style={{
                  width: 310, height: 310,
                  top: "50%", left: "50%",
                  marginTop: -155, marginLeft: -155,
                  border: "2px solid rgba(20,168,0,0.4)",
                  boxShadow: [
                    "0 0 0 10px rgba(20,168,0,0.04)",
                    "0 0 70px rgba(20,168,0,0.2)",
                    "0 30px 80px rgba(0,0,0,0.6)",
                    "inset 0 0 30px rgba(0,0,0,0.4)",
                  ].join(", "),
                }}
              >
                <img
                  src={awaisImg}
                  alt="Awais"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 10%", filter: "brightness(1.07) contrast(1.06) saturate(0.85)" }}
                />
                {/* inner vignette */}
                <div className="absolute inset-0 rounded-full"
                  style={{ background: "radial-gradient(circle, transparent 40%, rgba(3,3,10,0.6) 100%)" }} />
              </div>

              {/* ── orbiting glowing dots on outermost ring ── */}
              {[
                { color: "#14A800", startAngle: 0   },
                { color: "#00C6FF", startAngle: 90  },
                { color: "#A855F7", startAngle: 180 },
                { color: "#F59E0B", startAngle: 270 },
              ].map(({ color, startAngle }) => (
                <motion.div
                  key={startAngle}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute pointer-events-none"
                  style={{ inset: 0 }}
                >
                  <div
                    className="absolute w-2.5 h-2.5 rounded-full"
                    style={{
                      top: (480 - 468) / 2,  // align to outer ring edge
                      left: "50%",
                      marginLeft: -5,
                      transform: `rotate(${startAngle}deg)`,
                      transformOrigin: `5px ${468 / 2}px`,
                      background: color,
                      boxShadow: `0 0 8px 2px ${color}80`,
                    }}
                  />
                </motion.div>
              ))}

              {/* ── tool icon chips (fixed positions, no motion-transform conflict) ── */}
              {tools.map((t) => <ToolIcon key={t.label} {...t} />)}
            </div>

            {/* ── achievement badges (relative to outer motion.div, not frame) ── */}

            {/* TOP-RIGHT: Top Rated */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute pointer-events-none"
              style={{ top: 28, right: -48 }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-2.5 px-4 py-3 rounded-lg"
                style={{
                  background: "rgba(4,4,16,0.92)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(20,168,0,0.28)",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.65), 0 0 0 1px rgba(20,168,0,0.07)",
                  whiteSpace: "nowrap",
                }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(20,168,0,0.15)", border: "1px solid rgba(20,168,0,0.3)" }}>
                  <span style={{ fontSize: "16px" }}>★</span>
                </div>
                <div>
                  <div className="text-white" style={{ fontWeight: 800, fontSize: "12px", lineHeight: 1 }}>Top Rated</div>
                  <div className="text-[#14A800]" style={{ fontSize: "10px", fontWeight: 700, marginTop: "3px" }}>Luxury design badge</div>
                </div>
              </motion.div>
            </motion.div>

            {/* BOTTOM-LEFT: Projects done */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute pointer-events-none"
              style={{ bottom: 20, left: -52 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.0, repeat: Infinity, ease: "easeInOut" }}
                className="px-5 py-4 rounded-lg text-center"
                style={{
                  background: "rgba(4,4,16,0.92)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(0,198,255,0.2)",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.65)",
                  minWidth: "130px",
                }}
              >
                <div className="text-[#00C6FF]" style={{ fontWeight: 900, fontSize: "2.1rem", lineHeight: 1, letterSpacing: "0" }}>200+</div>
                <div className="text-[#A9FF9D]" style={{ fontSize: "9px", fontWeight: 800, marginTop: "5px", letterSpacing: "1px" }}>PROJECTS DONE</div>
              </motion.div>
            </motion.div>

            {/* BOTTOM-RIGHT: Adobe certified */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute pointer-events-none"
              style={{ bottom: 32, right: -36 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg"
                style={{
                  background: "rgba(4,4,16,0.92)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,124,0,0.2)",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.55)",
                  whiteSpace: "nowrap",
                }}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,124,0,0.18)", border: "1px solid rgba(255,124,0,0.3)" }}>
                  <span style={{ fontSize: "11px", fontWeight: 900, color: "#FF7C00" }}>Ai</span>
                </div>
                <span className="text-[#FF7C00]" style={{ fontSize: "11px", fontWeight: 800 }}>ACE Certified</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── bottom hairline + scroll indicator ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="w-full h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(20,168,0,0.3),transparent)" }} />
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer"
          onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-[#141428]" style={{ fontSize: "9px", fontWeight: 900, letterSpacing: "3px" }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
            style={{ borderColor: "rgba(20,168,0,0.2)" }}
          >
            <div className="w-1 h-2 rounded-full" style={{ background: "#14A800" }} />
          </motion.div>
        </motion.div>
      </div>

      {/* ── corner bracket accents ── */}
      <div className="absolute top-24 left-8 pointer-events-none hidden lg:block">
        <div className="w-8 h-8 border-l border-t" style={{ borderColor: "rgba(20,168,0,0.15)" }} />
      </div>
      <div className="absolute bottom-24 right-8 pointer-events-none hidden lg:block">
        <div className="w-8 h-8 border-r border-b" style={{ borderColor: "rgba(20,168,0,0.15)" }} />
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ellipseGreen from "../imports/ellipse-green.png";
import ellipseBlue from "../imports/ellipse-blue.png";

function FixedEllipses() {
  const greenRef = useRef<HTMLImageElement>(null);
  const blueRef = useRef<HTMLImageElement>(null);
  const lightMask = "radial-gradient(circle, black 0%, black 46%, rgba(0,0,0,0.75) 62%, transparent 82%)";

  useEffect(() => {
    const blueSize = 430;
    const greenSize = 480;
    const inset = 72;
    const duration = 24000;
    let frame = 0;

    const pointOnBorder = (progress: number, size: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const left = inset;
      const right = Math.max(left, width - inset);
      const top = inset;
      const bottom = Math.max(top, height - inset);
      const edgeW = right - left;
      const edgeH = bottom - top;
      const perimeter = 2 * (edgeW + edgeH);
      const distance = ((progress % 1) + 1) % 1 * perimeter;

      let x = left;
      let y = top;

      if (distance <= edgeW) {
        x = left + distance;
      } else if (distance <= edgeW + edgeH) {
        x = right;
        y = top + (distance - edgeW);
      } else if (distance <= edgeW * 2 + edgeH) {
        x = right - (distance - edgeW - edgeH);
        y = bottom;
      } else {
        y = bottom - (distance - edgeW * 2 - edgeH);
      }

      return `translate3d(${x - size / 2}px, ${y - size / 2}px, 0)`;
    };

    const tick = (time: number) => {
      const progress = (time % duration) / duration;

      if (blueRef.current) {
        blueRef.current.style.transform = pointOnBorder(progress, blueSize);
      }

      if (greenRef.current) {
        greenRef.current.style.transform = pointOnBorder(progress + 0.5, greenSize);
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 3 }}>
      <img
        ref={greenRef}
        src={ellipseGreen}
        alt=""
        aria-hidden="true"
        className="absolute max-w-none mix-blend-screen"
        style={{
          left: 0,
          top: 0,
          width: 480,
          opacity: 0.5,
          filter: "brightness(1.7) saturate(1.65) blur(3px)",
          mixBlendMode: "screen",
          maskImage: lightMask,
          WebkitMaskImage: lightMask,
          willChange: "transform",
        }}
      />
      <img
        ref={blueRef}
        src={ellipseBlue}
        alt=""
        aria-hidden="true"
        className="absolute max-w-none mix-blend-screen"
        style={{
          left: 0,
          top: 0,
          width: 430,
          opacity: 0.48,
          filter: "brightness(1.75) saturate(1.65) blur(3px)",
          mixBlendMode: "screen",
          maskImage: lightMask,
          WebkitMaskImage: lightMask,
          willChange: "transform",
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen relative" style={{ background: "#0D0D1A", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <FixedEllipses />
      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
        <Hero />
        <Portfolio />
        <Services />
        <Skills />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

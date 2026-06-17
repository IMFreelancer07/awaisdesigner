import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import logoMark from "../../imports/awais-logo-mark.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => ({ ...link, element: document.querySelector(link.href) }))
      .filter((link): link is (typeof navLinks)[number] & { element: Element } => Boolean(link.element));

    const setActiveFromTop = () => {
      if (window.scrollY < 90) setActive("Home");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const current = sections.find((section) => section.element === visible.target);
        if (current) setActive(current.label);
      },
      { rootMargin: "-32% 0px -52% 0px", threshold: [0.01, 0.12, 0.3, 0.55] },
    );

    sections.forEach((section) => observer.observe(section.element));
    window.addEventListener("scroll", setActiveFromTop, { passive: true });
    setActiveFromTop();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", setActiveFromTop);
    };
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-4 z-[999] px-4 transition-all duration-300 sm:top-6 ${
        scrolled
          ? "translate-y-0"
          : "translate-y-0"
      }`}
    >
      <div
        className="mx-auto flex h-[72px] w-full max-w-[1244px] items-center justify-between rounded-full border px-6 shadow-[0_20px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:px-8 lg:px-[42px]"
        style={{
          background: "linear-gradient(90deg, rgba(3,48,12,0.8), rgba(6,66,13,0.62), rgba(3,48,12,0.8))",
          borderColor: "rgba(20,168,0,0.42)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 18px 70px rgba(0,0,0,0.38), 0 0 46px rgba(20,168,0,0.22)",
        }}
      >
        <button
          type="button"
          onClick={() => handleNav("Home", "#home")}
          className="flex min-w-0 items-center gap-2"
          aria-label="Go to home"
        >
          <img src={logoMark} alt="" aria-hidden="true" className="h-[42px] w-[42px] object-contain" />
          <span className="whitespace-nowrap font-['Montserrat'] text-[22px] font-bold uppercase text-white lg:text-[20px]">
            Awais <span className="text-[#14A800]">Designer</span>
          </span>
        </button>

        <nav className="hidden items-center gap-[34px] font-['Montserrat'] text-[16px] font-bold xl:gap-[44px] lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNav(link.label, link.href)}
              className="relative text-white transition-colors hover:text-[#14A800]"
              style={{ color: active === link.label ? "#14A800" : undefined, textShadow: active === link.label ? "0 0 18px rgba(20,168,0,0.42)" : undefined }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <motion.a
          href="https://www.behance.net/MAwaissiddiq"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hidden h-[42px] items-center gap-[9px] rounded-full bg-[#14A800] pl-[18px] pr-[6px] font-['Montserrat'] text-[14px] font-bold leading-none text-white transition-shadow hover:shadow-[0_0_24px_rgba(20,168,0,0.38)] lg:inline-flex"
        >
          Portfolio
          <motion.span
            className="grid h-[30px] w-[30px] place-items-center rounded-full bg-white text-[#14A800]"
            animate={{ x: [0, 4, -2, 0] }}
            transition={{ duration: 1.15, repeat: Infinity, repeatDelay: 0.45, ease: "easeInOut" }}
          >
            <ArrowRight size={16} />
          </motion.span>
        </motion.a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center text-white lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-auto mt-3 max-w-[1244px] overflow-hidden rounded-3xl border border-[#14A800]/25 bg-[#03030B]/94 shadow-[0_18px_50px_rgba(0,0,0,0.32)] backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-[1245px] flex-col gap-2 px-5 py-5">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNav(link.label, link.href)}
                  className="rounded-xl px-4 py-3 text-left font-['Montserrat'] text-[15px] font-bold text-white transition-colors hover:bg-white/6"
                  style={{ color: active === link.label ? "#14A800" : undefined }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import logoMark from "../../imports/awais-logo-mark.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#work" },
  { label: "Skills", href: "#skills" },
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
      className={`fixed inset-x-0 top-0 z-[999] border-b transition-all duration-300 ${
        scrolled
          ? "border-white/8 bg-[#03030B]/92 shadow-[0_14px_42px_rgba(0,0,0,0.22)] backdrop-blur-md"
          : "border-white/0 bg-[#03030B]/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[92px] w-full max-w-[1138px] items-center justify-between px-8 sm:px-8 xl:px-0">
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

        <nav className="hidden items-center gap-[55px] font-['Montserrat'] text-[16px] font-bold lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNav(link.label, link.href)}
              className="relative text-white transition-colors hover:text-[#14A800]"
              style={{ color: active === link.label ? "#14A800" : undefined }}
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
            className="overflow-hidden border-t border-white/10 bg-[#03030B]/96 backdrop-blur-md lg:hidden"
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

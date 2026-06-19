import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
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
  const isProcessPage = window.location.pathname === "/process";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isProcessPage) {
      setActive("Services");
      return;
    }

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
  }, [isProcessPage]);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    if (window.location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }

    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const goToProcess = () => {
    setActive("Services");
    setMenuOpen(false);
    window.location.href = "/process";
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

        <nav className="hidden items-center gap-[24px] font-['Montserrat'] text-[15px] font-bold xl:gap-[34px] lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            link.label === "Services" ? (
              <div key={link.label} className="group relative">
                <button
                  type="button"
                  onClick={() => handleNav(link.label, link.href)}
                  className="relative inline-flex items-center gap-1.5 text-white transition-colors hover:text-[#14A800]"
                  style={{ color: active === link.label ? "#14A800" : undefined, textShadow: active === link.label ? "0 0 18px rgba(20,168,0,0.42)" : undefined }}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown size={15} className="transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div
                  className="invisible absolute left-1/2 top-full z-[1000] mt-4 w-[246px] -translate-x-1/2 translate-y-2 overflow-hidden rounded-[22px] border p-2.5 opacity-0 shadow-[0_22px_70px_rgba(0,0,0,0.42)] backdrop-blur-2xl transition-all duration-250 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(145deg, rgba(5,25,10,0.94), rgba(3,3,11,0.88) 48%, rgba(20,168,0,0.16))",
                    borderColor: "rgba(20,168,0,0.34)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -18px 36px rgba(20,168,0,0.06), 0 22px 70px rgba(0,0,0,0.42), 0 0 34px rgba(20,168,0,0.16)",
                  }}
                >
                  <div
                    className="pointer-events-none absolute inset-x-4 top-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)" }}
                  />
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl"
                    style={{ background: "rgba(20,168,0,0.22)" }}
                  />
                  <button
                    type="button"
                    onClick={() => handleNav("Services", "#services")}
                    className="relative flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left font-['Montserrat'] text-[15px] font-bold text-white transition-all duration-200 hover:translate-x-0.5 hover:bg-white/8 hover:text-[#14A800]"
                  >
                    Services Overview
                    <span className="h-1.5 w-1.5 rounded-full bg-[#14A800] opacity-70" />
                  </button>
                  <button
                    type="button"
                    onClick={goToProcess}
                    className="relative mt-1 flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left font-['Montserrat'] text-[15px] font-bold text-white transition-all duration-200 hover:translate-x-0.5 hover:bg-[#14A800]/14 hover:text-[#14A800]"
                  >
                    Working Process
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ) : (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNav(link.label, link.href)}
                className="relative text-white transition-colors hover:text-[#14A800]"
                style={{ color: active === link.label ? "#14A800" : undefined, textShadow: active === link.label ? "0 0 18px rgba(20,168,0,0.42)" : undefined }}
              >
                {link.label}
              </button>
            )
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
                <div key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.label, link.href)}
                    className="w-full rounded-xl px-4 py-3 text-left font-['Montserrat'] text-[15px] font-bold text-white transition-colors hover:bg-white/6"
                    style={{ color: active === link.label ? "#14A800" : undefined }}
                  >
                    {link.label}
                  </button>
                  {link.label === "Services" && (
                    <button
                      type="button"
                      onClick={goToProcess}
                      className="ml-4 mt-1 w-[calc(100%-1rem)] rounded-xl border border-[#14A800]/18 px-4 py-3 text-left font-['Montserrat'] text-[14px] font-bold text-white transition-colors hover:bg-[#14A800]/12 hover:text-[#14A800]"
                      style={{ background: "rgba(20,168,0,0.045)" }}
                    >
                      Working Process
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

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
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#03030B]/88 backdrop-blur-md border-b border-white/8" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[92px] w-full max-w-[1138px] items-center justify-between px-5 sm:px-8 xl:px-0">
        <button
          type="button"
          onClick={() => handleNav("Home", "#home")}
          className="flex min-w-0 items-center gap-2"
          aria-label="Go to home"
        >
          <img src={logoMark} alt="" aria-hidden="true" className="h-8 w-8 object-contain sm:h-[42px] sm:w-[42px]" />
          <span className="whitespace-nowrap font-['Montserrat'] text-[16px] font-bold uppercase text-white sm:text-[20px]">
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

        <motion.button
          type="button"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleNav("Portfolio", "#work")}
          className="hidden h-10 items-center gap-2 rounded-full bg-[#14A800] pl-5 pr-2 font-['Montserrat'] text-[16px] font-bold text-white transition-shadow hover:shadow-[0_0_24px_rgba(20,168,0,0.38)] lg:inline-flex"
        >
          Portfolio
          <span className="grid h-[27px] w-[27px] place-items-center rounded-full bg-white text-[#14A800]">
            <ArrowRight size={16} />
          </span>
        </motion.button>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-white lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
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

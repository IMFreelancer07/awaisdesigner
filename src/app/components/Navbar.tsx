import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import logoMark from "../../imports/awais-logo-mark.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
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
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D1A]/95 backdrop-blur-md border-b border-[#14A800]/20 shadow-lg shadow-[#14A800]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNav("Home", "#home")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={logoMark} alt="Awais Designer logo" className="w-9 h-9 object-contain" />
          <span style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "0" }}>
            <span className="text-white">AWAIS</span>
            <span className="text-[#14A800]"> DESIGNER</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.label, link.href)}
              className="relative px-4 py-2 text-sm transition-colors duration-200 group"
              style={{ color: active === link.label ? "#14A800" : "#b0b0c8" }}
            >
              {link.label}
              {active === link.label && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#14A800] rounded-full"
                />
              )}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-[#14A800] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNav("Contact", "#contact")}
            className="ml-4 px-5 py-2 bg-[#14A800] text-white rounded-lg text-sm transition-all duration-200 hover:bg-[#0d8a00] hover:shadow-lg hover:shadow-[#14A800]/30"
            style={{ fontWeight: 700 }}
          >
            Hire Me
          </motion.button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D0D1A] border-t border-[#14A800]/20 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.label, link.href)}
                  className="text-left py-3 px-4 rounded-lg text-sm transition-colors"
                  style={{
                    color: active === link.label ? "#14A800" : "#b0b0c8",
                    background: active === link.label ? "rgba(20,168,0,0.1)" : "transparent",
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("Contact", "#contact")}
                className="mt-2 py-3 px-4 bg-[#14A800] text-white rounded-lg text-sm"
                style={{ fontWeight: 700 }}
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

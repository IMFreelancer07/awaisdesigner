import { motion } from "motion/react";
import { Globe, Linkedin, Facebook, Instagram, Palette, ArrowUp } from "lucide-react";
import logoMark from "../../imports/awais-logo-mark.png";

const socials = [
  { Icon: Globe, label: "Google", color: "#34A853", href: "https://share.google/gFSnCdTL3AFuUqjPS" },
  { Icon: Linkedin, label: "LinkedIn", color: "#0077B5", href: "https://www.linkedin.com/in/muhammad-awais-siddique/" },
  { Icon: Facebook, label: "Facebook", color: "#1877F2", href: "https://www.facebook.com/M0hammadawaissiddique" },
  { Icon: Instagram, label: "Instagram", color: "#E1306C", href: "https://www.instagram.com/Muhammadawaissiddique/" },
  { Icon: Palette, label: "Behance", color: "#ffffff", href: "https://www.behance.net/MAwaissiddiq" },
];

export function Footer() {
  return (
    <footer style={{ background: "#070710", borderTop: "1px solid rgba(20,168,0,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logoMark} alt="Awais Designer logo" className="w-8 h-8 object-contain" />
            <span style={{ fontSize: "18px", fontWeight: 800 }}>
              <span className="text-white">AWAIS</span>
              <span className="text-[#14A800]"> DESIGNER</span>
            </span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, label, color, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={label}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 transition-colors duration-200 hover:border-white/25"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <Icon size={16} color={color} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-[#14A800]/30"
            style={{ background: "rgba(20,168,0,0.1)" }}
            title="Back to top"
          >
            <ArrowUp size={17} className="text-[#14A800]" />
          </motion.button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-[#4a4a6a]"
          style={{ fontSize: "0.8rem", fontWeight: 500 }}>
          <span>© 2026 Awais Designer. All rights reserved.</span>
          <span>Crafted with passion in ISLAMABAD, PK</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#14A800] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#14A800] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, Eye } from "lucide-react";

/* ─── data ────────────────────────────────────────────────── */
const profileUrl = "https://www.behance.net/MAwaissiddiq";

const projects = [
  {
    id: 251509707,
    num: "01",
    title: "Creative Meta\nAds",
    client: "Creative Meta Ads",
    category: "Social Media",
    tag: "Post Design",
    year: "2026",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/10e084251509707.Y3JvcCwyMTk2LDE3MTcsMCww.png",
    accent: "#FF6B35",
    stat: "Campaign set",
    caseStudyUrl: "https://www.behance.net/gallery/251509707/Creative-Meta-Ads",
    rotate: "-2deg",
    scale: 1,
    featured: true,
  },
  {
    id: 251376003,
    num: "02",
    title: "Educational Static\nPosts Design",
    client: "Educational Static Posts Design (ICAS)",
    category: "Social Media",
    tag: "Post Design",
    year: "2026",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/92ff33251376003.Y3JvcCw4MDgsNjMyLDAsMA.png",
    accent: "#FF6B35",
    stat: "Campaign set",
    caseStudyUrl: "https://www.behance.net/gallery/251376003/Educational-Static-Posts-Design-%28ICAS%29",
    rotate: "3deg",
    scale: 0.88,
    featured: false,
  },
  {
    id: 245517925,
    num: "03",
    title: "Branding",
    client: "Branding",
    category: "Branding",
    tag: "Brand System",
    year: "2026",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/711210245517925.Y3JvcCw5MjQsNzIzLDAsMA.png",
    accent: "#14A800",
    stat: "Brand ready",
    caseStudyUrl: "https://www.behance.net/gallery/245517925/Branding",
    rotate: "-1.5deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 244222269,
    num: "04",
    title: "Web Design\nUI/UX",
    client: "Web Design UI/UX",
    category: "UI/UX",
    tag: "Web Design",
    year: "2026",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/8a29ab244222269.Y3JvcCwzMDgxLDI0MTAsMTA2LDIyMQ.png",
    accent: "#00C6FF",
    stat: "Full layout",
    caseStudyUrl: "https://www.behance.net/gallery/244222269/Web-Design-UIUX",
    rotate: "2.5deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 242901965,
    num: "05",
    title: "Social Ads\n2026",
    client: "Social Ads 2026",
    category: "Social Media",
    tag: "Post Design",
    year: "2026",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/be48b4242901965.Y3JvcCwzMTcwLDI0ODAsNjU5LDA.png",
    accent: "#FF6B35",
    stat: "Campaign set",
    caseStudyUrl: "https://www.behance.net/gallery/242901965/Social-Ads-2026",
    rotate: "-3deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 239303825,
    num: "06",
    title: "MB Group\nCompany Profile",
    client: "MB Group Company Profile",
    category: "Company Profile",
    tag: "Company Profile",
    year: "2025",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/31a372239303825.Y3JvcCwxNDAwLDEwOTUsMCw2ODk.jpg",
    accent: "#14A800",
    stat: "Profile deck",
    caseStudyUrl: "https://www.behance.net/gallery/239303825/MB-Group-Company-Profile",
    rotate: "1.5deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 234706963,
    num: "07",
    title: "Company\nProfile",
    client: "COMPANY PROFILE",
    category: "Company Profile",
    tag: "Company Profile",
    year: "2025",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e45fe5234706963.Y3JvcCwyMzEwLDE4MDcsNTQzLDE4OA.jpg",
    accent: "#14A800",
    stat: "Profile deck",
    caseStudyUrl: "https://www.behance.net/gallery/234706963/COMPANY-PROFILE",
    rotate: "-2deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 233931545,
    num: "08",
    title: "Adworld Prime\nConference",
    client: "Adworld Prime | Affiliate World Conference",
    category: "Social Media",
    tag: "Post Design",
    year: "2025",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/616e41233931545.Y3JvcCwzNjAwLDI4MTUsMCwyMTM.jpg",
    accent: "#FF6B35",
    stat: "Campaign set",
    caseStudyUrl: "https://www.behance.net/gallery/233931545/Adworld-Prime-Affiliate-World-Conference",
    rotate: "3deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 228124911,
    num: "09",
    title: "Urban Transport\nWeb Design",
    client: "Web Design for Urban Transport Services",
    category: "UI/UX",
    tag: "Web Design",
    year: "2025",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/873fe9228124911.Y3JvcCwzMTk2LDI0OTksMjMsMA.jpg",
    accent: "#00C6FF",
    stat: "Full layout",
    caseStudyUrl: "https://www.behance.net/gallery/228124911/Web-Design-for-Urban-Transport-Services",
    rotate: "-1.5deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 226006111,
    num: "10",
    title: "ABC TAXIS",
    client: "ABC TAXIS",
    category: "UI/UX",
    tag: "Web Design",
    year: "2025",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/00908a226006111.Y3JvcCw1MTEzLDQwMDAsNDQzLDA.jpg",
    accent: "#00C6FF",
    stat: "Full layout",
    caseStudyUrl: "https://www.behance.net/gallery/226006111/ABC-TAXIS",
    rotate: "2.5deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 225653467,
    num: "11",
    title: "Menu\nDesign",
    client: "Menue Design",
    category: "Print",
    tag: "Print Design",
    year: "2025",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/755c10225653467.Y3JvcCwzMDU4LDIzOTIsMjA0LDA.jpg",
    accent: "#F59E0B",
    stat: "Print ready",
    caseStudyUrl: "https://www.behance.net/gallery/225653467/Menue-Design",
    rotate: "-3deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 222136593,
    num: "12",
    title: "Umrah & Ziyarah\nSaudi Arabia",
    client: "UMRAH & ZIYARAH (SAUDI ARABIA)",
    category: "Social Media",
    tag: "Post Design",
    year: "2025",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3c947a222136593.Y3JvcCwyNjkzLDIxMDYsMCww.jpg",
    accent: "#FF6B35",
    stat: "Campaign set",
    caseStudyUrl: "https://www.behance.net/gallery/222136593/UMRAH-ZIYARAH-%28SAUDI-ARABIA%29",
    rotate: "1.5deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 215377141,
    num: "13",
    title: "2025 Client\nWork",
    client: "2025 CLIENT's WORK",
    category: "Social Media",
    tag: "Post Design",
    year: "2024",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/10625c215377141.Y3JvcCwxNjE0LDEyNjIsODcsNDc.png",
    accent: "#FF6B35",
    stat: "Campaign set",
    caseStudyUrl: "https://www.behance.net/gallery/215377141/2025-CLIENTs-WORK",
    rotate: "-2deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 212417735,
    num: "14",
    title: "PIA\nDesigns",
    client: "PIA Designs",
    category: "Branding",
    tag: "Brand System",
    year: "2024",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/eccd31212417735.Y3JvcCw5MDEsNzA1LDEzNiww.jpg",
    accent: "#14A800",
    stat: "Brand ready",
    caseStudyUrl: "https://www.behance.net/gallery/212417735/PIA-Designs",
    rotate: "3deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 205619391,
    num: "15",
    title: "Travel Agency\nDesigns",
    client: "TRAVEL AGENCY DESIGNS",
    category: "Branding",
    tag: "Brand System",
    year: "2024",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a375c2205619391.Y3JvcCwzMzY2LDI2MzIsMCww.jpg",
    accent: "#14A800",
    stat: "Brand ready",
    caseStudyUrl: "https://www.behance.net/gallery/205619391/TRAVEL-AGENCY-DESIGNS",
    rotate: "-1.5deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 203581093,
    num: "16",
    title: "CHATBOT AI",
    client: "CHATBOT AI",
    category: "UI/UX",
    tag: "Web Design",
    year: "2024",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/1ee0f7203581093.Y3JvcCwxNjM4LDEyODEsMCw3Mg.jpg",
    accent: "#00C6FF",
    stat: "Full layout",
    caseStudyUrl: "https://www.behance.net/gallery/203581093/CHATBOT-AI",
    rotate: "2.5deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 199155077,
    num: "17",
    title: "Brand\nGuidelines",
    client: "Brand Guidelines",
    category: "Branding",
    tag: "Brand System",
    year: "2024",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/31352b199155077.Y3JvcCwyMjY5LDE3NzUsNTIyLDA.jpg",
    accent: "#14A800",
    stat: "Brand ready",
    caseStudyUrl: "https://www.behance.net/gallery/199155077/Brand-Guidelines",
    rotate: "-3deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 198834389,
    num: "18",
    title: "PE TECH",
    client: "PE TECH",
    category: "Branding",
    tag: "Brand System",
    year: "2024",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/224dcf198834389.Y3JvcCwxMDEyLDc5MSw0MiwxOTI.jpg",
    accent: "#14A800",
    stat: "Brand ready",
    caseStudyUrl: "https://www.behance.net/gallery/198834389/PE-TECH",
    rotate: "1.5deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 194442371,
    num: "19",
    title: "Logo\nDesign",
    client: "LOGO DESIGN",
    category: "Branding",
    tag: "Brand System",
    year: "2024",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/0eecf2194442371.Y3JvcCwyMzMzLDE4MjQsMCwxMDE2.jpg",
    accent: "#14A800",
    stat: "Brand ready",
    caseStudyUrl: "https://www.behance.net/gallery/194442371/LOGO-DESIGN",
    rotate: "-2deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 190066369,
    num: "20",
    title: "Edited Videos\nAnimations",
    client: "EDITED VIDEOS/ANIMATIONS",
    category: "Motion",
    tag: "Motion Design",
    year: "2024",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d293f6190066369.Y3JvcCw4MDksNjMyLDAsMA.jpg",
    accent: "#A855F7",
    stat: "Motion ready",
    caseStudyUrl: "https://www.behance.net/gallery/190066369/EDITED-VIDEOSANIMATIONS",
    rotate: "3deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 188480987,
    num: "21",
    title: "MHA Ventures\nReal Estate",
    client: "MHA VENTURES (REAL ESTATE)",
    category: "Branding",
    tag: "Brand System",
    year: "2024",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/fe8d63188480987.Y3JvcCwyMzg4LDE4NjcsMCw2ODU.jpg",
    accent: "#14A800",
    stat: "Brand ready",
    caseStudyUrl: "https://www.behance.net/gallery/188480987/MHA-VENTURES-%28REAL-ESTATE%29",
    rotate: "-1.5deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 177649491,
    num: "22",
    title: "Arabic\nDesigns",
    client: "ARABIC DESIGNS",
    category: "Social Media",
    tag: "Post Design",
    year: "2023",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/04603f177649491.650a560e9e477.png",
    accent: "#FF6B35",
    stat: "Campaign set",
    caseStudyUrl: "https://www.behance.net/gallery/177649491/ARABIC-DESIGNS",
    rotate: "2.5deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 178222523,
    num: "23",
    title: "Special\nDesigns",
    client: "SPECIAL DESIGNS",
    category: "Social Media",
    tag: "Post Design",
    year: "2023",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/4cef1a178222523.Y3JvcCwxNDQwLDExMjYsMCw0OQ.jpg",
    accent: "#FF6B35",
    stat: "Campaign set",
    caseStudyUrl: "https://www.behance.net/gallery/178222523/SPECIAL-DESIGNS",
    rotate: "-3deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 157203263,
    num: "24",
    title: "Digital\nMarketing",
    client: "Digital Marketing",
    category: "Social Media",
    tag: "Post Design",
    year: "2022",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/767f22157203263.64dc8593984c2.png",
    accent: "#FF6B35",
    stat: "Campaign set",
    caseStudyUrl: "https://www.behance.net/gallery/157203263/Digital-Marketing",
    rotate: "1.5deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 177715289,
    num: "25",
    title: "UAE\nDesigns",
    client: "UAE DESIGNS",
    category: "Social Media",
    tag: "Post Design",
    year: "2023",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ce729e177715289.Y3JvcCw0NDc0LDM1MDAsMTEsMA.jpg",
    accent: "#FF6B35",
    stat: "Campaign set",
    caseStudyUrl: "https://www.behance.net/gallery/177715289/UAE-DESIGNS",
    rotate: "-2deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 173954241,
    num: "26",
    title: "Eid Al Adha\nDesigns",
    client: "EID Al ADHA DESIGNS",
    category: "Social Media",
    tag: "Post Design",
    year: "2023",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/7d9166173954241.Y3JvcCwzODM1LDMwMDAsMzMyLDA.jpg",
    accent: "#FF6B35",
    stat: "Campaign set",
    caseStudyUrl: "https://www.behance.net/gallery/173954241/EID-Al-ADHA-DESIGNS",
    rotate: "3deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 172622457,
    num: "27",
    title: "Web\nBanners",
    client: "WEB BANNERS",
    category: "Social Media",
    tag: "Post Design",
    year: "2023",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f7c413172622457.Y3JvcCw3MzQsNTc0LDcwLDQ5.png",
    accent: "#FF6B35",
    stat: "Campaign set",
    caseStudyUrl: "https://www.behance.net/gallery/172622457/WEB-BANNERS",
    rotate: "-1.5deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 172621317,
    num: "28",
    title: "Real Estate\nDesigning",
    client: "Real Estate Designing",
    category: "Branding",
    tag: "Design",
    year: "2023",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/83b88c172621317.Y3JvcCwyMjU5LDE3NjcsNzcxLDM2OQ.jpg",
    accent: "#14A800",
    stat: "Case study",
    caseStudyUrl: "https://www.behance.net/gallery/172621317/Real-Estate-Designing",
    rotate: "2.5deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 171398619,
    num: "29",
    title: "Carousels",
    client: "CAROUSELS",
    category: "Social Media",
    tag: "Post Design",
    year: "2023",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/bf93b1171398619.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
    accent: "#FF6B35",
    stat: "Campaign set",
    caseStudyUrl: "https://www.behance.net/gallery/171398619/CAROUSELS",
    rotate: "-3deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 171397863,
    num: "30",
    title: "Print\nDesigns",
    client: "PRINT DESIGNS",
    category: "Print",
    tag: "Print Design",
    year: "2023",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b6782c171397863.Y3JvcCw3NjUsNTk5LDUwOCwxMjU.jpg",
    accent: "#F59E0B",
    stat: "Print ready",
    caseStudyUrl: "https://www.behance.net/gallery/171397863/PRINT-DESIGNS",
    rotate: "1.5deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 169577811,
    num: "31",
    title: "Product\nDesigns",
    client: "Product Designs",
    category: "Print",
    tag: "Print Design",
    year: "2023",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b3455b169577811.Y3JvcCwxMDI3LDgwMywwLDExMQ.jpeg",
    accent: "#F59E0B",
    stat: "Print ready",
    caseStudyUrl: "https://www.behance.net/gallery/169577811/Product-Designs",
    rotate: "-2deg",
    scale: 0.92,
    featured: false,
  },
  {
    id: 156413299,
    num: "32",
    title: "Schooling\nSystem",
    client: "Shooling System",
    category: "Branding",
    tag: "Brand System",
    year: "2022",
    img: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/71348f156413299.Y3JvcCwzODM1LDMwMDAsODE2LDA.jpg",
    accent: "#14A800",
    stat: "Brand ready",
    caseStudyUrl: "https://www.behance.net/gallery/156413299/Shooling-System",
    rotate: "3deg",
    scale: 0.92,
    featured: false,
  },
];

/* ─── Marquee strip ───────────────────────────────────────── */
const marqueeWords = ["Brand Identity", "UI·UX", "Illustration", "Packaging", "Motion", "Social Media", "Logo Design", "Web Design"];

function Marquee() {
  const doubled = [...marqueeWords, ...marqueeWords];
  return (
    <div
      className="overflow-hidden border-y"
      style={{ borderColor: "rgba(20,168,0,0.1)", background: "rgba(20,168,0,0.03)", padding: "12px 0" }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {doubled.map((w, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{
                background: i % 4 === 0 ? "#14A800" : i % 4 === 1 ? "#00C6FF" : i % 4 === 2 ? "#A855F7" : "#F59E0B",
              }}
            />
            <span
              style={{ color: "#ffffff", fontWeight: 800, fontSize: "11px", letterSpacing: "2.5px" }}
            >
              {w.toUpperCase()}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Collage card ────────────────────────────────────────── */
function CollageCard({
  project,
  onClick,
  isSelected,
  showMeta = true,
}: {
  project: typeof projects[0];
  onClick: () => void;
  isSelected: boolean;
  showMeta?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      whileHover={{
        rotate: 0,
        scale: isSelected ? 1.02 : 1.06,
        zIndex: 30,
        transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      initial={{ rotate: project.rotate, scale: project.scale, opacity: 0, y: 60 }}
      animate={{
        rotate: isSelected ? 0 : project.rotate,
        scale: isSelected ? 1 : project.scale,
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="relative cursor-pointer overflow-hidden rounded-lg"
      style={{
        transformOrigin: "center center",
        boxShadow: isSelected
          ? `0 0 0 2px ${project.accent}, 0 30px 80px rgba(0,0,0,0.7), 0 0 60px ${project.accent}25`
          : "0 20px 60px rgba(0,0,0,0.6), 0 4px 12px rgba(0,0,0,0.4)",
      }}
    >
      {/* Image */}
      <motion.img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover block"
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(175deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      {/* Accent wash on hover */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: hovered ? 0.18 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ background: project.accent }}
      />

      {/* Top: tag + year */}
      {showMeta && (
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start">
          <span
            className="px-3 py-1.5 rounded-full text-[10px]"
            style={{
              background: `linear-gradient(135deg, ${project.accent}88, ${project.accent}38)`,
              color: "#ffffff",
              border: `1px solid ${project.accent}AA`,
              fontWeight: 800,
              backdropFilter: "blur(12px)",
              boxShadow: `0 8px 18px rgba(0,0,0,0.32), 0 0 0 1px rgba(255,255,255,0.08), 0 0 18px ${project.accent}44`,
            }}
          >
            {project.tag}
          </span>
          <span className="text-white/30" style={{ fontSize: "10px", fontWeight: 700 }}>
            {project.year}
          </span>
        </div>
      )}

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div style={{ color: project.accent, fontSize: "10px", fontWeight: 900, letterSpacing: "2.5px", marginBottom: "4px" }}>
          {project.num}
        </div>
        <h3
          className="text-white"
          style={{
            fontWeight: 900,
            fontSize: "1rem",
            lineHeight: 1.15,
            whiteSpace: "pre-line",
            letterSpacing: "0",
          }}
        >
          {project.title}
        </h3>

        {/* Stat + client on hover */}
        <motion.div
          animate={{ opacity: hovered || isSelected ? 1 : 0, y: hovered || isSelected ? 0 : 6 }}
          transition={{ duration: 0.25 }}
          className="mt-2 flex items-center gap-2"
        >
          <span
            className="px-2 py-0.5 rounded-full text-[10px]"
            style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontWeight: 700 }}
          >
            {project.stat}
          </span>
        </motion.div>
      </div>

      {/* Selection ring pulse */}
      {isSelected && (
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{ border: `2px solid ${project.accent}` }}
        />
      )}
    </motion.div>
  );
}

/* ─── Detail panel ────────────────────────────────────────── */
function DetailPanel({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, x: 40, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 40, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative rounded-lg overflow-hidden"
      style={{
        background: "rgba(10,10,22,0.95)",
        border: `1px solid ${project.accent}30`,
        boxShadow: `0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px ${project.accent}15`,
      }}
    >
      {/* Hero image */}
      <div className="relative h-56 overflow-hidden">
        <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(10,10,22,1) 0%, transparent 60%)" }}
        />
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white/60 hover:text-white transition-colors text-xs"
          style={{ backdropFilter: "blur(8px)", fontWeight: 900 }}
        >
          ✕
        </button>
        <div className="absolute bottom-4 left-5">
          <span
            className="px-3 py-1 rounded-full text-xs"
            style={{ background: `${project.accent}25`, color: project.accent, border: `1px solid ${project.accent}40`, fontWeight: 800 }}
          >
            {project.tag}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Number + title */}
        <div style={{ color: project.accent, fontSize: "10px", fontWeight: 900, letterSpacing: "3px", marginBottom: "6px" }}>
          {project.num} · {project.year}
        </div>
        <h3
          className="text-white mb-1"
          style={{ fontWeight: 900, fontSize: "1.5rem", lineHeight: 1.1, whiteSpace: "pre-line", letterSpacing: "0" }}
        >
          {project.title}
        </h3>
        <div className="text-[#d7e0ff] text-sm mb-5" style={{ fontWeight: 600 }}>
          {project.client}
        </div>

        {/* Stat */}
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-lg mb-5"
          style={{ background: `${project.accent}0e`, border: `1px solid ${project.accent}20` }}
        >
          <div className="w-1 h-8 rounded-full" style={{ background: project.accent, boxShadow: `0 0 8px ${project.accent}` }} />
          <div>
            <div style={{ color: project.accent, fontWeight: 900, fontSize: "1.3rem", lineHeight: 1 }}>{project.stat}</div>
            <div className="text-[#b8c6ff] text-xs" style={{ fontWeight: 600 }}>Key result</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <motion.a
            href={project.caseStudyUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-white text-xs"
            style={{ background: `linear-gradient(135deg,${project.accent},${project.accent}aa)`, fontWeight: 800, boxShadow: `0 4px 20px ${project.accent}35` }}
          >
            <Eye size={13} /> View Case Study
          </motion.a>
          <motion.a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-4 py-2.5 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all flex items-center justify-center"
          >
            <ExternalLink size={13} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main component ──────────────────────────────────────── */
export function Portfolio() {
  const [selected, setSelected] = useState<number | null>(projects[0]?.id ?? null);
  const [carouselProgress, setCarouselProgress] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const didDragRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const featuredProjects = projects.slice(0, 5);
  const carouselProjects = projects.slice(5);

  const selectedProject = projects.find((p) => p.id === selected);

  const handleCardClick = (id: number) =>
    setSelected((prev) => (prev === id ? null : id));

  const updateCarouselProgress = () => {
    const el = carouselRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCarouselProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
  };

  const scrollCarousel = (direction: -1 | 1) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.min(el.clientWidth * 0.82, 720), behavior: "smooth" });
  };

  const startCarouselDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = carouselRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    didDragRef.current = false;
    dragStartXRef.current = event.clientX;
    dragStartScrollRef.current = el.scrollLeft;
    el.setPointerCapture(event.pointerId);
  };

  const moveCarouselDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = carouselRef.current;
    if (!el || !isDraggingRef.current) return;
    const distance = event.clientX - dragStartXRef.current;
    if (Math.abs(distance) > 6) didDragRef.current = true;
    el.scrollLeft = dragStartScrollRef.current - distance;
    updateCarouselProgress();
  };

  const stopCarouselDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = carouselRef.current;
    if (!el) return;
    isDraggingRef.current = false;
    if (el.hasPointerCapture(event.pointerId)) {
      el.releasePointerCapture(event.pointerId);
    }
  };

  const preventDragClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!didDragRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    didDragRef.current = false;
  };

  return (
    <section id="work" style={{ background: "transparent", position: "relative" }}>
      <style>{`
        .portfolio-carousel-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
          cursor: grab;
          touch-action: pan-y;
          user-select: none;
        }
        .portfolio-carousel-scroll::-webkit-scrollbar {
          display: none;
        }
        .portfolio-carousel-scroll:active {
          cursor: grabbing;
        }
        .portfolio-carousel-scroll img {
          -webkit-user-drag: none;
          user-select: none;
        }
      `}</style>
      <Marquee />

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* ── Header ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[#14A800] mb-3 flex items-center gap-2"
                style={{ fontWeight: 700, fontSize: "11px", letterSpacing: "3px" }}>
                <div className="w-6 h-px bg-[#14A800]" />
                SELECTED WORK
              </div>
              <h2 className="text-white" style={{ fontSize: "var(--work-heading-size)", fontWeight: 900, lineHeight: 0.93, letterSpacing: "0" }}>
                Work that
                <br />
                <span style={{ background: "linear-gradient(90deg,#14A800 20%,#14A800 80%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  speaks louder.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-4 items-start md:items-end"
            >
              <p className="text-[#b8c6ff] text-sm max-w-xs md:text-right" style={{ fontWeight: 500, lineHeight: 1.7 }}>
                Click any project to explore the case study. Hover to interact.
              </p>
            </motion.div>
          </div>

          {/* ── Collage + Detail ── */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Collage board */}
            <div className="flex-1">
              <AnimatePresence mode="popLayout">
                {featuredProjects.length > 0 ? (
                  <motion.div key="portfolio-projects" className="space-y-4">

                    {/* ROW 1: featured large + one tall card */}
                    {featuredProjects[0] && (
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:h-[360px]">
                        <div className="md:col-span-3 h-[320px] sm:h-[360px] md:h-auto">
                          <CollageCard
                            project={featuredProjects[0]}
                            onClick={() => handleCardClick(featuredProjects[0].id)}
                            isSelected={selected === featuredProjects[0].id}
                          />
                        </div>
                        {featuredProjects[1] && (
                          <div className="md:col-span-2 h-[260px] sm:h-[300px] md:h-auto">
                            <CollageCard
                              project={featuredProjects[1]}
                              onClick={() => handleCardClick(featuredProjects[1].id)}
                              isSelected={selected === featuredProjects[1].id}
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {/* ROW 2: three equal cards */}
                    {featuredProjects.slice(2).length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:h-[260px]">
                        {featuredProjects.slice(2, 5).map((p) => (
                          <div key={p.id} className="h-[250px] sm:h-[260px] lg:h-auto">
                            <CollageCard
                              project={p}
                              onClick={() => handleCardClick(p.id)}
                              isSelected={selected === p.id}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-64 flex items-center justify-center rounded-lg border border-dashed border-white/10 text-[#14A800]"
                    style={{ fontWeight: 700 }}
                  >
                    No projects in this category yet.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Instruction row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2 text-[#2a2a42]" style={{ fontSize: "11px", fontWeight: 700 }}>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-[#14A800]"
                  />
                  {selected ? "Case study open →" : "Click a project to explore"}
                </div>
                <div className="text-[#222236]" style={{ fontSize: "11px", fontWeight: 700 }}>
                  {projects.length} Behance projects
                </div>
              </motion.div>
            </div>

            {/* Detail panel — sticky on desktop */}
            <div className="w-full lg:w-[320px] lg:sticky lg:top-24 flex-shrink-0">
              <AnimatePresence mode="wait">
                {selectedProject ? (
                  <DetailPanel
                    key={selectedProject.id}
                    project={selectedProject}
                    onClose={() => setSelected(null)}
                  />
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="rounded-lg border border-dashed border-white/6 flex flex-col items-center justify-center text-center p-10 gap-4"
                    style={{ minHeight: "320px" }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      style={{ color: "#14A800", fontSize: "2.5rem" }}
                    >
                      □
                    </motion.div>
                    <div>
                      <div className="text-[#14A800] text-sm" style={{ fontWeight: 800 }}>Select a project</div>
                      <div className="text-[#d7e0ff]" style={{ fontSize: "12px", fontWeight: 600, marginTop: "4px" }}>
                        Click any card to see<br />the full case study
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {carouselProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 relative"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[#14A800]" style={{ fontSize: "11px", fontWeight: 900, letterSpacing: "2.5px" }}>
                  <div className="w-6 h-px bg-[#14A800]" />
                  MORE PROJECTS
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.08, x: -2 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => scrollCarousel(-1)}
                    aria-label="Scroll projects left"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
                    style={{
                      background: "linear-gradient(135deg, rgba(20,168,0,0.24), rgba(255,255,255,0.05))",
                      border: "1px solid rgba(20,168,0,0.38)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.36), inset 0 1px 0 rgba(255,255,255,0.12)",
                      backdropFilter: "blur(14px)",
                    }}
                  >
                    <ChevronLeft size={18} strokeWidth={3} />
                  </motion.button>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.08, x: 2 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => scrollCarousel(1)}
                    aria-label="Scroll projects right"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
                    style={{
                      background: "linear-gradient(135deg, #14A800, rgba(20,168,0,0.56))",
                      border: "1px solid rgba(169,255,157,0.35)",
                      boxShadow: "0 14px 34px rgba(20,168,0,0.28), inset 0 1px 0 rgba(255,255,255,0.18)",
                      backdropFilter: "blur(14px)",
                    }}
                  >
                    <ChevronRight size={18} strokeWidth={3} />
                  </motion.button>
                </div>
              </div>

              <div
                ref={carouselRef}
                onScroll={updateCarouselProgress}
                onPointerDown={startCarouselDrag}
                onPointerMove={moveCarouselDrag}
                onPointerUp={stopCarouselDrag}
                onPointerCancel={stopCarouselDrag}
                onClickCapture={preventDragClick}
                className="portfolio-carousel-scroll flex gap-5 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-5 -mx-6 px-6"
              >
                {carouselProjects.map((p) => (
                  <div key={p.id} className="h-[240px] w-[280px] sm:w-[320px] md:w-[340px] flex-none snap-start">
                    <CollageCard
                      project={p}
                      onClick={() => handleCardClick(p.id)}
                      isSelected={selected === p.id}
                      showMeta={false}
                    />
                  </div>
                ))}
              </div>
              <div
                className="relative h-1 rounded-full overflow-hidden mx-6"
                style={{ background: "rgba(255,255,255,0.07)", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.45)" }}
              >
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full"
                  animate={{ width: `${Math.max(12, carouselProgress * 100)}%` }}
                  transition={{ duration: 0.18 }}
                  style={{
                    background: "linear-gradient(90deg, rgba(169,255,157,0.95), #14A800)",
                    boxShadow: "0 0 18px rgba(20,168,0,0.55)",
                  }}
                />
              </div>
            </motion.div>
          )}

          {/* ── Bottom CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-lg"
            style={{ background: "linear-gradient(135deg, rgba(20,168,0,0.07), rgba(0,198,255,0.03))", border: "1px solid rgba(20,168,0,0.14)" }}
          >
            <div>
              <div className="text-white" style={{ fontWeight: 900, fontSize: "1.1rem" }}>
                Got a project in mind?
              </div>
              <div className="text-[#14A800] text-sm mt-0.5" style={{ fontWeight: 600 }}>
                I'm available for freelance work — let's build something great.
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex-shrink-0 px-7 py-3 rounded-lg text-white flex items-center gap-2 text-sm"
              style={{ background: "linear-gradient(135deg,#14A800,#14A800)", fontWeight: 800, boxShadow: "0 6px 28px rgba(20,168,0,0.4)" }}
            >
              Start a Project <ArrowUpRight size={15} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

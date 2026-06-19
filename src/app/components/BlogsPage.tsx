import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, CalendarDays, Layers3, Megaphone, Palette, PenTool, TrendingUp } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import brandingImage from "../../imports/portfolio-company-profile.jpg";
import socialImage from "../../imports/portfolio-social-media-designs.jpg";
import logoImage from "../../imports/creative-toolkit-logos.png";
import growthImage from "../../imports/portfolio-uiux-design.jpg";
import trendsImage from "../../imports/portfolio-restaurant-flyers.jpg";

export const blogPosts = [
  {
    slug: "strong-brand-identity",
    category: "Branding",
    title: "What Makes a Strong Brand Identity?",
    description: "Learn how logo design, typography, colors, and visual consistency work together to build a memorable brand.",
    date: "June 19, 2026",
    icon: Palette,
    image: brandingImage,
    accent: "#14A800",
  },
  {
    slug: "social-media-post-design-matters",
    category: "Social Media Design",
    title: "Why Social Media Post Design Matters for Businesses",
    description: "Discover how professional social media creatives can improve engagement, brand trust, and customer attention.",
    date: "June 12, 2026",
    icon: Megaphone,
    image: socialImage,
    accent: "#00C6FF",
  },
  {
    slug: "logo-design-vs-brand-identity",
    category: "Logo Design",
    title: "Logo Design vs Brand Identity - What's the Difference?",
    description: "Understand why a logo is only one part of a complete brand identity system.",
    date: "June 5, 2026",
    icon: PenTool,
    image: logoImage,
    accent: "#A855F7",
  },
  {
    slug: "good-design-small-business-growth",
    category: "Business Growth",
    title: "How Good Design Helps Small Businesses Grow",
    description: "See how effective design can help small businesses look professional, attract customers, and increase sales.",
    date: "May 29, 2026",
    icon: TrendingUp,
    image: growthImage,
    accent: "#F59E0B",
  },
  {
    slug: "graphic-design-trends-brands-should-know",
    category: "Design Trends",
    title: "Graphic Design Trends Every Brand Should Know",
    description: "Explore modern design trends including minimal layouts, bold typography, AI visuals, clean branding, and motion graphics.",
    date: "May 22, 2026",
    icon: Layers3,
    image: trendsImage,
    accent: "#14A800",
  },
];

function setMeta(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export function BlogsPage() {
  useEffect(() => {
    document.title = "Graphic Design Blogs | Awais Designer";
    setMeta(
      "description",
      "Read graphic design blogs by Awais Designer covering branding, logo design, social media design, business growth, and creative design trends.",
    );
  }, []);

  return (
    <div className="min-h-screen relative w-full max-w-full overflow-x-hidden" style={{ background: "transparent", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="relative z-[2] w-full max-w-full overflow-x-hidden">
        <Navbar />

        <main>
          <section className="relative overflow-hidden pb-16 pt-36 sm:pt-40 lg:pt-44">
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute left-1/2 top-16 h-[560px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(20,168,0,0.18), rgba(20,168,0,0.05) 42%, transparent 72%)" }}
              />
              <div
                className="absolute inset-x-0 top-0 h-full opacity-55"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(20,168,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(20,168,0,0.08) 1px, transparent 1px)",
                  backgroundSize: "52px 52px",
                  maskImage: "linear-gradient(to bottom, black 0%, transparent 78%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 78%)",
                }}
              />
              <div className="absolute right-[12%] top-36 h-24 w-24 rotate-45 border border-[#14A800]/22" />
              <div className="absolute left-[10%] top-56 h-16 w-16 rounded-full border border-[#14A800]/26" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="mx-auto max-w-4xl text-center"
              >
                <span
                  className="inline-flex rounded-full border border-[#14A800]/30 px-4 py-2 text-xs uppercase text-[#14A800]"
                  style={{ background: "rgba(20,168,0,0.08)", fontWeight: 800, letterSpacing: "2px" }}
                >
                  Design Insights
                </span>
                <h1
                  className="mt-6 text-white"
                  style={{ fontSize: "clamp(3rem, 8vw, 7.6rem)", fontWeight: 950, lineHeight: 0.94, letterSpacing: "0" }}
                >
                  Graphic Design
                  <br />
                  <span className="text-[#14A800]">Blogs</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-[#d7e0ff]" style={{ lineHeight: 1.8, fontSize: "1rem" }}>
                  Insights, ideas, and practical tips about branding, social media design, logo design, and creative marketing.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="pb-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div
                    className="mb-3 flex items-center gap-2 text-[#14A800]"
                    style={{ fontWeight: 700, fontSize: "12px", letterSpacing: "3px" }}
                  >
                    <div className="h-px w-6 bg-[#14A800]" />
                    LATEST ARTICLES
                  </div>
                  <h2 className="text-white" style={{ fontSize: "clamp(2rem, 4vw, 4rem)", fontWeight: 900, lineHeight: 1.05 }}>
                    Practical design thinking
                  </h2>
                </div>
                <p className="max-w-md text-[#9da1c4] sm:text-right" style={{ lineHeight: 1.7, fontSize: "0.95rem" }}>
                  Short, useful reads for brands that want better visuals, stronger identity, and cleaner marketing.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {blogPosts.map((blog, index) => {
                  const isFeature = index === 0;

                  return (
                    <motion.article
                      key={blog.slug}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.48, delay: index * 0.06 }}
                      className={`group relative overflow-hidden rounded-lg border border-white/7 ${isFeature ? "xl:col-span-2" : ""}`}
                      style={{
                        background: "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
                        boxShadow: "0 18px 60px rgba(0,0,0,0.18)",
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{ background: "linear-gradient(135deg, rgba(20,168,0,0.12), transparent 56%)" }}
                      />

                      <div className="relative grid">
                        <div
                          className="relative h-[230px] overflow-hidden border-b border-white/7 sm:h-[250px]"
                        >
                          <img
                            src={blog.image}
                            alt={`${blog.title} featured visual`}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#03030B] via-[#03030B]/38 to-transparent" />
                          <div className="absolute inset-0 bg-[#03030B]/16" />
                          <div
                            className="absolute bottom-6 left-6 rounded-full px-3 py-1 text-xs text-white"
                            style={{ background: "rgba(20,168,0,0.92)", fontWeight: 800 }}
                          >
                            {blog.category}
                          </div>
                        </div>

                        <div className="relative p-6 sm:p-7">
                          <div className="mb-4 flex items-center gap-2 text-xs text-[#7e82a8]" style={{ fontWeight: 700 }}>
                            <CalendarDays size={15} className="text-[#14A800]" />
                            {blog.date}
                          </div>
                          <h3 className="text-white" style={{ fontSize: isFeature ? "1.65rem" : "1.25rem", fontWeight: 900, lineHeight: 1.12 }}>
                            {blog.title}
                          </h3>
                          <p className="mt-4 text-sm text-[#9da1c4]" style={{ lineHeight: 1.75 }}>
                            {blog.description}
                          </p>
                          <a
                            href={`/blogs/${blog.slug}`}
                            className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-[#14A800] px-5 text-sm text-white transition-all duration-200 hover:translate-x-0.5 hover:shadow-[0_0_24px_rgba(20,168,0,0.35)]"
                            style={{ fontWeight: 800 }}
                          >
                            Read More
                            <ArrowRight size={16} />
                          </a>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export function BlogDetailPage() {
  const slug = window.location.pathname.replace("/blogs/", "");
  const blog = blogPosts.find((post) => post.slug === slug) ?? blogPosts[0];

  useEffect(() => {
    document.title = `${blog.title} | Awais Designer`;
    setMeta("description", blog.description);
  }, [blog.description, blog.title]);

  return (
    <div className="min-h-screen relative w-full max-w-full overflow-x-hidden" style={{ background: "transparent", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="relative z-[2] w-full max-w-full overflow-x-hidden">
        <Navbar />
        <main className="pb-24 pt-36 sm:pt-40 lg:pt-44">
          <article className="mx-auto max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-lg border border-white/7"
              style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))" }}
            >
              <div
                className="relative min-h-[280px] overflow-hidden"
              >
                <img
                  src={blog.image}
                  alt={`${blog.title} featured visual`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03030B] via-[#03030B]/34 to-transparent" />
                <div className="absolute inset-0 bg-[#03030B]/14" />
                <div className="absolute bottom-8 left-8 rounded-full bg-[#14A800] px-4 py-1.5 text-xs text-white" style={{ fontWeight: 800 }}>
                  {blog.category}
                </div>
              </div>

              <div className="p-7 sm:p-10">
                <div className="mb-5 flex items-center gap-2 text-sm text-[#7e82a8]" style={{ fontWeight: 700 }}>
                  <CalendarDays size={16} className="text-[#14A800]" />
                  {blog.date}
                </div>
                <h1 className="text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 4.6rem)", fontWeight: 950, lineHeight: 1.02 }}>
                  {blog.title}
                </h1>
                <p className="mt-6 text-[#d7e0ff]" style={{ lineHeight: 1.9, fontSize: "1.04rem" }}>
                  {blog.description}
                </p>
                <p className="mt-5 text-[#9da1c4]" style={{ lineHeight: 1.9 }}>
                  Full article content will be added here. This page is ready for future blog details, CMS content, SEO sections, and internal links.
                </p>
                <a
                  href="/blogs"
                  className="mt-8 inline-flex h-12 items-center gap-3 rounded-full bg-[#14A800] px-6 text-sm text-white transition-shadow hover:shadow-[0_0_26px_rgba(20,168,0,0.35)]"
                  style={{ fontWeight: 800 }}
                >
                  Back to Blogs
                  <ArrowRight size={17} />
                </a>
              </div>
            </motion.div>
          </article>
        </main>
        <Footer />
      </div>
    </div>
  );
}

import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, CalendarDays, Layers3, Megaphone, Palette, PenTool, TrendingUp } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import brandingImage from "../../imports/blog-strong-brand-identity.png";
import socialImage from "../../imports/blog-social-media-design.png";
import logoImage from "../../imports/blog-logo-vs-brand-identity.png";
import growthImage from "../../imports/blog-small-business-growth.png";
import trendsImage from "../../imports/blog-graphic-design-trends.png";

export const blogPosts = [
  {
    slug: "strong-brand-identity",
    category: "Branding",
    title: "What Makes a Strong Brand Identity?",
    description: "Learn how logo design, typography, colors, and visual consistency work together to build a memorable brand.",
    metaTitle: "What Makes a Strong Brand Identity? | Awais Designer",
    metaDescription: "Learn how logo design, colors, typography, visual consistency, and brand strategy work together to create a strong and memorable brand identity.",
    date: "June 19, 2026",
    icon: Palette,
    image: brandingImage,
    accent: "#14A800",
    content: `A strong brand identity is not just about having a beautiful logo. It is the complete visual personality of a business. When people see your colors, typography, social media posts, packaging, website, or marketing material, they should instantly recognize your brand.

In today's competitive market, businesses need more than good products or services. They need a professional image that builds trust, creates recognition, and helps them stand out. This is where brand identity plays an important role.

1. A Professional Logo

A logo is the face of your brand. It is usually the first thing people notice. A good logo should be simple, memorable, scalable, and meaningful.

Your logo should work everywhere, including social media, websites, business cards, packaging, banners, and advertisements. A strong logo does not need to be overly complex. It should clearly represent the brand's personality and values.

2. Consistent Brand Colors

Colors create emotions. Green can show growth, freshness, and creativity. Blue can show trust and professionalism. Black can feel premium and powerful. Every color sends a message.

A strong brand identity uses a fixed color palette. When the same colors are used again and again across all platforms, people start recognizing the brand easily.

3. Typography That Matches the Brand

Typography is more than just choosing a font. It sets the tone of your brand. A luxury brand may use elegant and premium fonts, while a tech brand may use clean and modern fonts.

Using consistent typography in headings, body text, social media posts, and website design makes your brand look more professional.

4. Visual Style and Design System

A brand should have a clear visual style. This includes image style, icon style, layout style, shapes, spacing, patterns, and graphic elements.

For example, if a brand uses minimal layouts, soft gradients, clean icons, and bold typography, this style should continue across every design. Consistency makes the brand look polished and trustworthy.

5. Brand Voice and Message

Brand identity is not only visual. The words you use also matter. Your brand message should be clear, confident, and easy to understand.

Whether it is a social media caption, website headline, ad copy, or brochure content, your message should sound like one brand.

Why Brand Identity Matters

A strong brand identity helps people remember your business. It improves trust, makes your business look professional, and helps customers connect emotionally with your brand.

Without a proper identity, your designs may look random. But with a strong brand system, every design supports the same message.

Conclusion

A strong brand identity is a combination of logo, colors, typography, visual style, message, and consistency. When all these elements work together, your brand becomes more recognizable and professional.

Need a professional brand identity for your business?
Let's create something creative, clean, and memorable together.`,
  },
  {
    slug: "social-media-post-design-matters",
    category: "Social Media Design",
    title: "Why Social Media Post Design Matters for Businesses",
    description: "Discover how professional social media creatives can improve engagement, brand trust, and customer attention.",
    metaTitle: "Why Social Media Post Design Matters for Businesses | Awais Designer",
    metaDescription: "Discover why professional social media post design is important for brand awareness, engagement, customer trust, and business growth.",
    date: "June 12, 2026",
    icon: Megaphone,
    image: socialImage,
    accent: "#00C6FF",
    content: `Social media has become one of the most powerful platforms for business marketing. Whether you run a small business, personal brand, restaurant, real estate company, clinic, travel agency, or e-commerce store, your social media presence matters.

But posting content is not enough. The design of your posts plays a major role in how people see your business.

A professionally designed social media post can stop the scroll, grab attention, build trust, and encourage people to take action.

1. First Impression Matters

When someone visits your Instagram, Facebook, LinkedIn, or any other social platform, your design creates the first impression.

If your posts look clean, branded, and professional, people will take your business seriously. But if your designs look unplanned or messy, people may lose trust before even reading your message.

Good design makes your business look active, professional, and reliable.

2. Good Design Stops the Scroll

People scroll very fast on social media. You only have a few seconds to catch their attention.

A strong visual can make users stop and look at your post. Bold typography, clear hierarchy, attractive colors, and a powerful layout can make your content stand out from others.

The better your design, the higher the chance that people will read your message.

3. Branding Becomes Stronger

Social media posts should not look different every time. Your brand colors, fonts, logo placement, and visual style should remain consistent.

When your audience sees the same visual style again and again, they start recognizing your brand. This builds brand memory.

Consistency is one of the biggest secrets of strong branding.

4. Better Engagement

A well-designed post can increase likes, shares, comments, and saves. People usually engage more with content that looks attractive and easy to understand.

Design can also make complex information simple. For example, carousel posts, infographics, and step-by-step visuals help users understand your message quickly.

5. Helps in Sales and Marketing

Social media design is not only for beauty. It also supports marketing goals.

A good post can promote offers, announce services, explain benefits, showcase products, and guide people to contact you.

When the design is clear and the call-to-action is strong, users are more likely to message, call, or visit your website.

6. Builds Trust With Customers

People trust brands that look professional. Clean design shows that a business cares about quality.

If your visual identity is strong, customers feel more confident in your services. This is especially important for new businesses that want to build credibility.

Conclusion

Social media post design is important because it helps businesses attract attention, build trust, improve engagement, and increase sales. A strong design is not just decoration; it is a communication tool.

Want professional social media designs for your brand?
Let's create eye-catching posts that make your business stand out.`,
  },
  {
    slug: "logo-design-vs-brand-identity",
    category: "Logo Design",
    title: "Logo Design vs Brand Identity - What's the Difference?",
    description: "Understand why a logo is only one part of a complete brand identity system.",
    metaTitle: "Logo Design vs Brand Identity - What's the Difference? | Awais Designer",
    metaDescription: "Understand the difference between logo design and brand identity, and learn why a complete visual system is important for every business.",
    date: "June 5, 2026",
    icon: PenTool,
    image: logoImage,
    accent: "#A855F7",
    content: `Many people think that a logo and brand identity are the same thing. But in reality, they are different.

A logo is an important part of a brand, but it is not the complete brand identity. A brand identity is the full visual system that represents a business across different platforms.

Understanding this difference helps business owners make better decisions when building their brand.

What Is a Logo?

A logo is a symbol, wordmark, icon, or design that represents your business. It is the main visual mark of your brand.

A good logo should be simple, memorable, professional, scalable, relevant to the brand, and easy to use on different platforms.

Your logo appears on websites, social media profiles, business cards, packaging, ads, uniforms, documents, and other brand materials.

What Is Brand Identity?

Brand identity is the complete visual appearance of your brand. It includes your logo, but it also includes many other elements.

A complete brand identity includes logo, brand colors, typography, icon style, image style, social media design style, business card design, letterhead, packaging style, website visual direction, and brand guidelines.

Brand identity creates a complete and consistent look for your business.

Main Difference Between Logo and Brand Identity

A logo is one visual element. Brand identity is the full visual system.

For example, think of a person. The logo is like the face, but the brand identity is the complete personality, clothing style, voice, behavior, and overall appearance.

A logo helps people recognize your business. Brand identity helps people understand, remember, and trust your business.

Why a Logo Alone Is Not Enough

A good logo is important, but if your social media posts, website, packaging, and marketing materials all look different, your brand will feel weak.

Without a brand identity system, your designs may look random. This can confuse customers and reduce trust.

A strong brand identity keeps everything connected and professional.

Why Businesses Need Brand Identity

A complete brand identity helps your business look serious and professional. It creates consistency across all platforms and makes your brand easier to remember.

It also helps designers create future designs faster because they already have a clear visual direction to follow.

Conclusion

A logo is the starting point of your brand, but brand identity is the complete visual system. If you want your business to look professional and memorable, you need more than just a logo.

Need a logo or complete brand identity?
Let's build a professional visual identity that makes your brand stand out.`,
  },
  {
    slug: "good-design-small-business-growth",
    category: "Business Growth",
    title: "How Good Design Helps Small Businesses Grow",
    description: "See how effective design can help small businesses look professional, attract customers, and increase sales.",
    metaTitle: "How Good Design Helps Small Businesses Grow | Awais Designer",
    metaDescription: "Learn how professional graphic design helps small businesses build trust, attract customers, improve marketing, and grow faster.",
    date: "May 29, 2026",
    icon: TrendingUp,
    image: growthImage,
    accent: "#F59E0B",
    content: `Small businesses often focus on products, services, pricing, and customer support. These things are very important, but design also plays a powerful role in business growth.

Good design helps small businesses look professional, attract customers, build trust, and communicate clearly.

Whether it is a logo, social media post, flyer, website banner, brochure, or packaging, design can influence how people feel about your business.

1. Design Builds Trust

People judge businesses by how they look. If your branding and marketing materials look professional, people are more likely to trust you.

A clean logo, attractive social media posts, and a professional website can make a small business look bigger and more reliable.

Trust is very important because customers usually buy from brands they feel confident about.

2. Design Makes Your Business Memorable

Many businesses offer similar products or services. Good design helps your business stand out.

When your brand colors, typography, and visual style are consistent, customers remember your business more easily.

A memorable design can make people recognize your brand even before reading your name.

3. Design Improves Communication

Good design makes information easy to understand. Instead of long and boring text, design can present information in a simple and attractive way.

For example, infographics, carousel posts, service menus, and promotional banners can explain your message quickly.

Clear communication helps customers make faster decisions.

4. Design Supports Marketing

Marketing becomes stronger when design is strong. A well-designed ad can attract attention and encourage action.

Whether you are promoting a discount, new product, service, event, or offer, professional design can make your campaign more effective.

Design helps your message look more valuable.

5. Design Helps You Compete With Bigger Brands

Small businesses may not always have big budgets like large companies. But with strong branding and professional design, they can still look premium and trustworthy.

Good design gives small businesses a professional image and helps them compete in the market.

6. Design Increases Customer Confidence

When a customer sees professional design, they feel that the business is serious about quality.

This confidence can lead to more inquiries, more sales, and more repeat customers.

Conclusion

Good design is an investment, not an expense. It helps small businesses build trust, attract customers, communicate better, and grow faster.

Want your business to look professional and creative?
Let's design visuals that help your brand grow.`,
  },
  {
    slug: "graphic-design-trends-brands-should-know",
    category: "Design Trends",
    title: "Graphic Design Trends Every Brand Should Know",
    description: "Explore modern design trends including minimal layouts, bold typography, AI visuals, clean branding, and motion graphics.",
    metaTitle: "Graphic Design Trends Every Brand Should Know | Awais Designer",
    metaDescription: "Explore modern graphic design trends including minimal layouts, bold typography, AI visuals, motion graphics, gradients, and clean branding.",
    date: "May 22, 2026",
    icon: Layers3,
    image: trendsImage,
    accent: "#14A800",
    content: `Graphic design is always changing. New styles, tools, and creative trends appear every year. For brands, staying updated with design trends can help them look modern, fresh, and professional.

However, trends should be used carefully. A good design trend should support your brand message, not make your brand look confusing.

Here are some important graphic design trends every brand should know.

1. Minimal and Clean Design

Minimal design is one of the strongest trends in modern branding. It uses clean layouts, proper spacing, simple typography, and limited colors.

Minimal design makes content easy to read and gives a premium feel. Many brands use this style because it looks professional and timeless.

2. Bold Typography

Typography is becoming a major design element. Big, bold headlines can instantly grab attention.

Brands are using strong fonts to create powerful messages in social media posts, websites, posters, and ads.

Bold typography works best when the message is short, clear, and well-structured.

3. AI-Generated Visuals

AI tools are changing the creative industry. Designers can now create unique images, concepts, backgrounds, and mockups faster.

AI visuals are useful for campaigns, website banners, social media creatives, and concept development.

But AI should be used with design thinking. A designer still needs to control composition, branding, quality, and final presentation.

4. Soft Gradients and Glow Effects

Soft gradients are popular in modern digital design. They add depth, freshness, and a premium look.

Green, blue, purple, and neon-style gradients are commonly used in tech, creative, and personal branding designs.

When used properly, gradients can make simple designs look more attractive.

5. 3D Mockups and Realistic Presentation

Presentation matters. 3D mockups help show designs in a real-world style.

For example, logos can be shown on business cards, signage, packaging, clothing, or digital screens. This helps clients understand how the design will look in real life.

Good mockups can make a portfolio look more professional.

6. Motion Graphics

Static design is powerful, but motion makes content more engaging. Animated posts, reels, logo animations, and short videos can capture attention quickly.

Many brands now use motion graphics for social media ads, product promotions, and brand storytelling.

7. Strong Brand Consistency

One of the biggest modern trends is consistency. Brands are focusing on fixed visual systems, including colors, fonts, templates, icons, and layouts.

Consistency helps a brand look organized and professional across all platforms.

Conclusion

Modern graphic design trends include minimal layouts, bold typography, AI visuals, soft gradients, 3D mockups, motion graphics, and strong brand consistency.

The best design is not just trendy. It should be clear, professional, and connected with the brand's purpose.

Need modern and professional designs for your brand?
Let's create creative visuals that make your brand stand out.`,
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

function isArticleHeading(block: string) {
  return (
    /^\d+\.\s/.test(block) ||
    [
      "Conclusion",
      "What Is a Logo?",
      "What Is Brand Identity?",
      "Main Difference Between Logo and Brand Identity",
      "Why a Logo Alone Is Not Enough",
      "Why Businesses Need Brand Identity",
      "Why Brand Identity Matters",
    ].includes(block)
  );
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
                          className="relative aspect-[1767/730] overflow-hidden border-b border-white/7"
                          style={{ background: "linear-gradient(145deg, rgba(20,168,0,0.08), rgba(255,255,255,0.03))" }}
                        >
                          <img
                            src={blog.image}
                            alt={`${blog.title} featured visual`}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.018]"
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
    document.title = blog.metaTitle;
    setMeta("description", blog.metaDescription);
  }, [blog.metaDescription, blog.metaTitle]);

  const articleBlocks = blog.content.split("\n\n").filter(Boolean);

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
                className="relative aspect-[1767/730] overflow-hidden"
                style={{ background: "linear-gradient(145deg, rgba(20,168,0,0.08), rgba(255,255,255,0.03))" }}
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

                <div className="mt-9 border-t border-white/7 pt-8">
                  {articleBlocks.map((block, index) => (
                    isArticleHeading(block) ? (
                      <h2
                        key={`${blog.slug}-heading-${index}`}
                        className="mb-4 mt-8 text-white first:mt-0"
                        style={{ fontSize: "clamp(1.35rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.18 }}
                      >
                        {block}
                      </h2>
                    ) : (
                      <p
                        key={`${blog.slug}-paragraph-${index}`}
                        className="mb-5 whitespace-pre-line text-[#b9bddb]"
                        style={{ lineHeight: 1.9, fontSize: "1rem" }}
                      >
                        {block}
                      </p>
                    )
                  ))}
                </div>
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

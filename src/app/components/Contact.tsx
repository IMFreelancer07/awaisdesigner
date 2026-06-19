import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, CheckCircle2, Paperclip, X } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "contact@awaisdesigner.com", color: "#14A800" },
  { icon: Phone, label: "WhatsApp", value: "+92 334 274 1999", color: "#00C6FF" },
  { icon: MapPin, label: "Location", value: "ISLAMABAD, PK", color: "#A855F7" },
];

const leadEmail = "contact@awaisdesigner.com";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [attachment, setAttachment] = useState<File | null>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const submission = new FormData();
      submission.append("_subject", "New lead from Awais Designer portfolio");
      submission.append("_template", "table");
      submission.append("name", form.name);
      submission.append("email", form.email);
      submission.append("service", form.service);
      submission.append("message", form.message);

      if (attachment) {
        submission.append("attachment", attachment);
      }

      const response = await fetch(`https://formsubmit.co/ajax/${leadEmail}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: submission,
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", service: "", message: "" });
      setAttachment(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      setLoading(false);
      alert("Sorry, your message could not be sent. Please email contact@awaisdesigner.com directly.");
    }
  };

  return (
    <section id="contact" className="py-24" style={{ background: "transparent" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full text-[#14A800] border border-[#14A800]/30 text-sm mb-4"
            style={{ background: "rgba(20,168,0,0.08)", fontWeight: 600 }}>
            Get In Touch
          </span>
          <h2 className="text-white mb-4" style={{ fontSize: "var(--section-heading-size)", fontWeight: 900, lineHeight: 1.15 }}>
            Let's Build Something{" "}
            <span style={{ background: "linear-gradient(90deg,#14A800,#14A800)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Amazing
            </span>
          </h2>
          <p className="text-[#6868a0] max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            Ready to elevate your brand? I'm available for freelance projects, collaborations, and full-time opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h3 className="text-white mb-3" style={{ fontWeight: 800, fontSize: "1.3rem" }}>
                Ready to start your project?
              </h3>
              <p className="text-[#8888a8]" style={{ lineHeight: 1.8 }}>
                Whether you need a brand refresh, a new UI, or a complete visual identity from scratch — let's talk. I typically respond within 2 hours.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg border border-white/5"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${info.color}18`, border: `1px solid ${info.color}30` }}>
                      <Icon size={20} color={info.color} />
                    </div>
                    <div>
                      <div className="text-[#6868a0] text-xs" style={{ fontWeight: 600 }}>{info.label}</div>
                      <div className="text-white text-sm" style={{ fontWeight: 700 }}>{info.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 p-4 rounded-lg border border-[#14A800]/25"
              style={{ background: "rgba(20,168,0,0.06)" }}>
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-[#14A800]" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#14A800] animate-ping opacity-60" />
              </div>
              <span className="text-[#c0c0d8] text-sm" style={{ fontWeight: 600 }}>
                Available for new projects —{" "}
                <span className="text-[#14A800]">Response within 2 hours</span>
              </span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-10 rounded-lg border border-[#14A800]/25"
                style={{ background: "rgba(20,168,0,0.05)" }}
              >
                <CheckCircle2 size={56} className="text-[#14A800] mb-4" />
                <h3 className="text-white mb-2" style={{ fontWeight: 900, fontSize: "1.3rem" }}>Message Sent!</h3>
                <p className="text-[#8888a8]" style={{ lineHeight: 1.7 }}>
                  Thanks for reaching out. I'll get back to you within 2 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 px-6 py-2.5 bg-[#14A800] text-white rounded-lg text-sm"
                  style={{ fontWeight: 700 }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-7 rounded-lg border border-white/5" style={{ background: "rgba(255,255,255,0.02)" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-[#8888a8] text-xs block mb-2" style={{ fontWeight: 600 }}>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200 focus:border-[#14A800]/50"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        fontWeight: 500,
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-[#8888a8] text-xs block mb-2" style={{ fontWeight: 600 }}>Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200 focus:border-[#14A800]/50"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        fontWeight: 500,
                      }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-[#8888a8] text-xs block mb-2" style={{ fontWeight: 600 }}>Service Needed</label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: form.service ? "white" : "#6868a0",
                      fontWeight: 500,
                    }}
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="branding">Brand Identity Design</option>
                    <option value="ui">UI/UX Design</option>
                    <option value="print">Print Design</option>
                    <option value="illustration">Illustration</option>
                    <option value="social">Social Media Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="text-[#8888a8] text-xs block mb-2" style={{ fontWeight: 600 }}>Project Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, goals, timeline, and budget..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-white text-sm outline-none resize-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontWeight: 500,
                    }}
                  />
                </div>

                <div className="mb-6">
                  <label className="text-[#8888a8] text-xs block mb-2" style={{ fontWeight: 600 }}>Attachment <span className="font-medium text-[#6868a0]">(Optional)</span></label>
                  <label
                    className="flex min-h-[54px] cursor-pointer items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm transition-all duration-200 hover:border-[#14A800]/40"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px dashed rgba(255,255,255,0.14)",
                    }}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg"
                        style={{ background: "rgba(20,168,0,0.12)", border: "1px solid rgba(20,168,0,0.25)" }}
                      >
                        <Paperclip size={17} className="text-[#14A800]" />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-white" style={{ fontWeight: 700 }}>
                          {attachment ? attachment.name : "Attach brief, reference, or file"}
                        </span>
                        <span className="mt-1 block text-xs text-[#6868a0]">
                          PDF, DOC, JPG, PNG or ZIP
                        </span>
                      </span>
                    </span>
                    <span className="flex-shrink-0 rounded-full bg-[#14A800] px-3 py-1 text-xs text-white" style={{ fontWeight: 700 }}>
                      Browse
                    </span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="attachment"
                      className="sr-only"
                      onChange={e => setAttachment(e.target.files?.[0] ?? null)}
                    />
                  </label>
                  {attachment && (
                    <button
                      type="button"
                      onClick={() => {
                        setAttachment(null);
                        if (fileInputRef.current) {
                          fileInputRef.current.value = "";
                        }
                      }}
                      className="mt-3 inline-flex items-center gap-2 text-xs text-[#8888a8] transition-colors hover:text-white"
                      style={{ fontWeight: 600 }}
                    >
                      <X size={14} />
                      Remove attachment
                    </button>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full py-3.5 rounded-lg text-white flex items-center justify-center gap-2 transition-all duration-200"
                  style={{
                    background: loading ? "rgba(20,168,0,0.5)" : "linear-gradient(135deg, #14A800, #14A800)",
                    fontWeight: 700,
                    boxShadow: loading ? "none" : "0 8px 24px rgba(20,168,0,0.3)",
                  }}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

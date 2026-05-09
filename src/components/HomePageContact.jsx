"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function HomePageContact() {
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const WA_NUMBER = "+923052646312";

  const waLink = useMemo(() => {
    const baseText =
      "Assalam o Alaikum. I need a quote for high-temperature removable insulation jackets. My requirement:";

    const msg = `${baseText}\n\nName: ${formData.name || "-"}\nPhone: ${
      formData.phone || "-"
    }\nEmail: ${formData.email || "-"}\nMessage: ${
      formData.message || "-"
    }`;

    return `https://wa.me/${WA_NUMBER.replace("+", "")}?text=${encodeURIComponent(
      msg
    )}`;
  }, [formData]);

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.55 },
      };

  const handleChange = (e) => {
    setStatus({ type: "", text: "" });
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!formData.name.trim()) return "Please enter your name.";
    if (!formData.phone.trim())
      return "Please enter your phone/WhatsApp number.";
    if (!formData.message.trim())
      return "Please write a short requirement message.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();

    if (err) {
      setStatus({ type: "error", text: err });
      return;
    }

    setLoading(true);
    setStatus({ type: "", text: "" });

    try {
      const res = await fetch(`${API_URL}/contact/messages/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          text: "Your request has been sent. We will contact you shortly.",
        });

        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        let msg = "Failed to send. Please try WhatsApp or call.";

        try {
          const data = await res.json();
          msg = data?.detail ? String(data.detail) : msg;
        } catch (_) {}

        setStatus({ type: "error", text: msg });
      }
    } catch (_) {
      setStatus({
        type: "error",
        text: "Server connection issue. Please send on WhatsApp or call directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  const cardStyle = {
    background: "var(--light-surface)",
    borderColor: "var(--light-border)",
    boxShadow: "var(--shadow-sm)",
  };

  const inputStyle =
    "mt-1 w-full rounded-[var(--radius-sm)] border bg-white px-4 py-3 min-h-[44px] outline-none focus:ring-2 focus:ring-[var(--accent)]/25";

  return (
    <section
      className="section"
      style={{
        background: "var(--background-secondary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="container">
        <motion.div {...fadeUp} className="max-w-5xl mx-auto">
          <div className="text-center">
            <p
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold border"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.14)",
                color: "var(--text-primary)",
              }}
            >
              Fast Quote • Custom Sizing • Pakistan & Export
            </p>

            <h2 className="text-center w-full">
              Get a Quote for Insulation Covers
            </h2>

            <p
              className="text-base md:text-lg max-w-3xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Share your equipment type (generator / valve / flange / pump /
              turbine), temperature and size. Our Karachi team will respond
              quickly.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div
              className="lg:col-span-2 rounded-2xl border p-5 md:p-6"
              style={cardStyle}
            >
              <div
                className="font-bold text-lg mb-4"
                style={{ color: "var(--text-dark-primary)" }}
              >
                Quick Contact
              </div>

              <div className="space-y-4">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact on WhatsApp"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] text-white font-bold px-5 py-3 min-h-[44px] transition"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle size={18} />
                  WhatsApp Now
                </a>

                <a
                  href="tel:+923052646312"
                  aria-label="Call MSEW"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] border transition px-5 py-3 min-h-[44px]"
                  style={{
                    background: "var(--light-surface)",
                    borderColor: "var(--light-border)",
                    color: "var(--text-dark-primary)",
                  }}
                >
                  <Phone size={18} />
                  Call: +92 305 2646312
                </a>

                <p
                  className="text-sm"
                  style={{ color: "var(--text-dark-secondary)" }}
                >
                  Tip: For fastest response, send a photo + temperature + size
                  on WhatsApp.
                </p>
              </div>
            </div>

            <div
              className="lg:col-span-3 rounded-2xl border p-5 md:p-6"
              style={cardStyle}
            >
              <div
                className="font-bold text-lg mb-4"
                style={{ color: "var(--text-dark-primary)" }}
              >
                Request a Quote
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold"
                      style={{ color: "var(--text-dark-primary)" }}
                    >
                      Your Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputStyle}
                      style={{ borderColor: "var(--light-border)" }}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold"
                      style={{ color: "var(--text-dark-primary)" }}
                    >
                      Phone / WhatsApp *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputStyle}
                      style={{ borderColor: "var(--light-border)" }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-dark-primary)" }}
                  >
                    Email (optional)
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputStyle}
                    style={{ borderColor: "var(--light-border)" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-dark-primary)" }}
                  >
                    Requirement *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="mt-1 w-full rounded-[var(--radius-sm)] border bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]/25 resize-none"
                    style={{ borderColor: "var(--light-border)" }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  aria-label="Send quote request"
                  className="btn-primary w-full inline-flex items-center justify-center gap-2"
                >
                  {loading ? "Sending..." : "Send Request"}
                  <Send size={18} />
                </button>

                {status?.text && (
                  <div
                    className="mt-2 rounded-xl border p-4 flex items-start gap-3"
                    style={{
                      background:
                        status.type === "success"
                          ? "rgba(34,197,94,0.10)"
                          : "rgba(239,68,68,0.10)",
                      borderColor:
                        status.type === "success"
                          ? "rgba(34,197,94,0.25)"
                          : "rgba(239,68,68,0.25)",
                      color: "var(--text-dark-primary)",
                    }}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2
                        size={20}
                        className="mt-0.5"
                        style={{ color: "#16A34A" }}
                      />
                    ) : (
                      <AlertTriangle
                        size={20}
                        className="mt-0.5"
                        style={{ color: "#DC2626" }}
                      />
                    )}

                    <div className="text-sm md:text-base">
                      {status.text}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
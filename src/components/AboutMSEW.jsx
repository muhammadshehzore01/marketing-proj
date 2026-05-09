"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Zap, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutMSEW() {
  const reduceMotion = useReducedMotion();
 
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "M. Shahrukh Engineering Works Pakistan",
    url: "https://mshahrukhengineeringworks.com",
    logo: "/img/logo.png",
    description:
      "Leading manufacturer of removable insulation jackets for generators, valves, pumps, turbines in Pakistan. Energy-efficient industrial insulation solutions exporter.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot #55-C, 15th Commercial St, DHA Phase-2",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      postalCode: "75500",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+92-305-2646312",
      email: "info@mshahrukhengineeringworks.com",
    },
    sameAs: [
      "https://www.facebook.com/m.shahrukhengineering",
      "https://www.linkedin.com/in/m-shahrukh-khan-550068a3",
      "https://www.instagram.com/industrialinsulationjacket.pk/",
    ],
  };

  const highlights = [
    {
      icon: ShieldCheck,
      title: "Durable & High Temp",
      desc: "Built for tough industrial environments with reliable insulation performance.",
    },
    {
      icon: Zap,
      title: "Energy Saving",
      desc: "Reduce heat loss and improve efficiency across hot surfaces and equipment.",
    },
    {
      icon: Globe,
      title: "Pakistan + Export",
      desc: "Serving industries across Pakistan and supplying international clients.",
    },
  ];

  const points = [
    "Removable & reusable for maintenance access",
    "Improves worker safety by covering hot surfaces",
    "Custom fit for valves, flanges, pumps, turbines & generators",
    "Made with high-temperature insulation materials",
  ];

  const wrapAnim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.55 },
      };

  return (
    <section className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <div className="container">
        <motion.div
          {...wrapAnim}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left: Content */}
          <div>
            <p
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold border"
              style={{
                background: "rgba(15, 23, 42, 0.04)",
                borderColor: "var(--light-border)",
                color: "var(--text-dark-primary)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--accent)" }}
              />
              Manufacturer • Custom Solutions • Ready Stock
            </p>

            <h2
              className="mt-4 mb-4 text-left"
              style={{ color: "var(--text-dark-primary)" }}
            >
              About M. Shahrukh Engineering Works
            </h2>

            <p
              className="text-base md:text-lg max-w-xl"
              style={{ color: "var(--text-dark-secondary)" }}
            >
              We manufacture high-temperature removable insulation jackets for
              generators, valves, pumps, turbines, and industrial equipment —
              engineered to reduce heat loss, improve energy efficiency, and
              make maintenance easy.
            </p>

            {/* Highlights */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-2xl border p-4"
                  style={{
                    background: "var(--light-surface)",
                    borderColor: "var(--light-border)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <h.icon style={{ color: "var(--accent)" }} size={22} />
                  <div
                    className="mt-2 font-bold text-sm md:text-base"
                    style={{ color: "var(--text-dark-primary)" }}
                  >
                    {h.title}
                  </div>
                  <div
                    className="mt-1 text-xs md:text-sm leading-relaxed"
                    style={{ color: "var(--text-dark-secondary)" }}
                  >
                    {h.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Points */}
            <div
              className="mt-6 rounded-2xl border p-5"
              style={{
                background: "var(--light-surface)",
                borderColor: "var(--light-border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{ color: "var(--text-dark-primary)" }}
                className="font-bold mb-3"
              >
                Why industries choose us
              </div>
              <ul className="space-y-2">
                {points.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5"
                      style={{ color: "var(--accent)" }}
                    />
                    <span
                      className="text-sm md:text-base"
                      style={{ color: "var(--text-dark-secondary)" }}
                    >
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/about"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Learn More <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] border transition px-6 py-3 min-h-[44px]"
                style={{
                  background: "var(--light-surface)",
                  borderColor: "var(--light-border)",
                  color: "var(--text-dark-primary)",
                }}
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div
              className="relative h-[280px] sm:h-[360px] md:h-[460px] lg:h-[520px] rounded-[var(--radius-lg)] overflow-hidden border"
              style={{
                background: "var(--light-surface)",
                borderColor: "var(--light-border)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <Image
                src="/img/Insulation-jacket-manufacturer.webp"
                alt="M. Shahrukh Engineering Works – Removable insulation jackets manufacturer in Pakistan"
                fill
                // ✅ LCP improvements:
                priority
                fetchPriority="high"
                // more accurate: mobile full width, larger screens half width
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                quality={70}
                unoptimized
                placeholder="empty"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(2,6,23,0.10), rgba(2,6,23,0))",
                }}
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div
                className="rounded-2xl border p-4"
                style={{
                  background: "var(--light-surface)",
                  borderColor: "var(--light-border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  className="text-xs"
                  style={{ color: "var(--text-dark-secondary)" }}
                >
                  Location
                </div>
                <div
                  className="font-bold"
                  style={{ color: "var(--text-dark-primary)" }}
                >
                  Karachi, Pakistan
                </div>
              </div>

              <div
                className="rounded-2xl border p-4"
                style={{
                  background: "var(--light-surface)",
                  borderColor: "var(--light-border)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  className="text-xs"
                  style={{ color: "var(--text-dark-secondary)" }}
                >
                  Support
                </div>
                <div
                  className="font-bold"
                  style={{ color: "var(--text-dark-primary)" }}
                >
                  Custom sizing + guidance
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
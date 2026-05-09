"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Particles from "react-tsparticles";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import SEOHead from "@/components/SEOHead";

// ✅ animation helper
const fadeIn = (direction = "up", delay = 0) => {
  let x = 0,
    y = 0;

  if (direction === "left") x = 50;
  if (direction === "right") x = -50;
  if (direction === "up") y = 50;
  if (direction === "down") y = -50;

  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { delay, duration: 0.9, ease: "easeOut" },
    },
  };
};

export default function AboutUs() {
  const heroSlides = [
    "https://as1.ftcdn.net/v2/jpg/01/78/20/98/1000_F_178209834_94E3ZHfsv6rJA8nG7cH4fhqnhPDD7NE7.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/43/43/89/1000_F_243438995_YJ6yXbPzAbdjjaWt0N3eYXRFUfiAvZjJ.jpg",
    "https://as2.ftcdn.net/v2/jpg/01/75/88/17/1000_F_175881747_T8C2NNtULcj0NcGf2tWEzmvvcvX90VCK.jpg",
  ];

  return (
    <>
      <SEOHead
        title="High-Temperature Removable Insulation Jackets Manufacturer | MSEW Pakistan"
        description="M. Shahrukh Engineering Works (MSEW) manufactures removable insulation jackets, thermal covers & heat shields for valves, generators, turbines and exhaust systems in Pakistan and worldwide."
        image="https://as1.ftcdn.net/v2/jpg/13/87/23/66/1000_F_1387236673_f1NT4h0xc6eJBmVb9UO71Be1WXlsN7yv.jpg"
        url="https://mshahrukhengineeringworks.com/about"
      />

      {/* ✅ Global theme wrapper */}
      <div className="min-h-screen overflow-hidden">
        {/* ✅ Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[80vh]">
          {/* theme gradients */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(0,168,232,0.18), transparent 55%), radial-gradient(ellipse at bottom, rgba(11,95,255,0.14), transparent 55%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,37,64,0.88), rgba(10,37,64,0.65), rgba(10,37,64,0.92))",
            }}
          />

          <Particles
            id="heroParticles"
            options={{
              fullScreen: { enable: false },
              particles: {
                number: { value: 60, density: { enable: true, area: 800 } },
                // ✅ use brand accent
                color: { value: "#00A8E8" },
                opacity: { value: 0.28 },
                size: { value: { min: 2, max: 5 } },
                move: { enable: true, speed: 0.6, outModes: "bounce" },
              },
              interactivity: {
                events: { onHover: { enable: true, mode: "grab" } },
                modes: { grab: { distance: 140, links: { opacity: 0.3 } } },
              },
            }}
            className="absolute inset-0 z-10"
          />

          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            effect="fade"
            loop
            className="h-full relative z-20"
          >
            {heroSlides.map((img, i) => (
              <SwiperSlide key={i}>
                <div
                  className="w-full h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${img})` }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center px-6"
                    style={{ background: "rgba(0,0,0,0.58)" }}
                  >
                    <div className="max-w-4xl text-center">
                      <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="text-3xl md:text-6xl font-extrabold tracking-widest"
                        style={{
                          color: "var(--accent)",
                          textShadow: "0 0 18px rgba(0,168,232,0.55)",
                        }}
                      >
                        About MSEW
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.25 }}
                        className="mt-5 text-base md:text-lg leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.88)" }}
                      >
                        Manufacturer of high-temperature removable insulation
                        jackets, thermal covers and heat shields for valves,
                        generators, turbines and exhaust systems — serving
                        Pakistan and worldwide.
                      </motion.p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* ✅ Who We Are */}
        <section className="py-16 sm:py-20 px-6 md:px-16 max-w-6xl mx-auto">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Who We Are
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.35)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="leading-relaxed"
          >
            <strong style={{ color: "var(--text-primary)" }}>
              M. Shahrukh Engineering Works (MSEW)
            </strong>{" "}
            is a trusted manufacturer of{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              high-temperature removable insulation jackets, thermal covers, and heat shields
            </strong>{" "}
            for industrial applications. Based in{" "}
            <strong style={{ color: "var(--text-primary)" }}>Karachi, Pakistan</strong>, we provide
            energy-efficient and maintenance-friendly insulation solutions that help reduce heat
            loss, improve worker safety and support cost savings.
          </motion.p>

          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="leading-relaxed mt-6"
          >
            We specialize in custom removable insulation jackets for{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              industrial valves, flanges, turbines, exhaust systems and generators
            </strong>
            , including <strong style={{ color: "var(--text-primary)" }}>Caterpillar and Jenbacher generator models</strong>.
            Our solutions are widely used in{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              power plants, textile mills, refineries, chemical plants, food processing units
            </strong>{" "}
            and other industrial facilities where steam and hot-surface insulation is critical.
          </motion.p>
        </section>

        {/* ✅ Mission & Vision */}
        <section
          className="py-16 sm:py-20 px-6 md:px-16"
          style={{ background: "var(--background-secondary)" }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn("left", 0.25)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="mb-6" style={{ color: "var(--text-primary)" }}>
                Our Mission
              </h2>

              <p className="leading-relaxed">
                To deliver{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  safe, sustainable and energy-efficient industrial insulation solutions
                </strong>{" "}
                that meet international standards. Our removable insulation jackets help industries{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  reduce heat loss, improve operational efficiency, enhance worker safety
                </strong>{" "}
                and support <strong style={{ color: "var(--text-primary)" }}>lower carbon emissions</strong>.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Reduce heat loss & energy consumption",
                  "Lower surface temperature for worker safety",
                  "Maintenance-friendly: remove & reinstall quickly",
                  "Long-term cost savings with reusable jackets",
                ].map((t, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span style={{ color: "var(--accent)", fontWeight: 800 }}>✓</span>
                    <span style={{ color: "var(--text-secondary)" }}>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.25)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-7 rounded-2xl"
            >
              <h2 className="mb-6" style={{ color: "var(--text-primary)" }}>
                Our Vision
              </h2>
              <p className="leading-relaxed">
                To become a globally recognized leader in{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  removable insulation jackets and industrial thermal insulation solutions
                </strong>
                , serving customers across{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  Pakistan, the Middle East, Europe
                </strong>{" "}
                and beyond with consistent quality, innovation and reliable performance.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                {["Pakistan", "Saudi Arabia", "UAE & GCC", "Europe"].map((m, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-3"
                    style={{
                      border: "1px solid var(--border)",
                      background: "rgba(255,255,255,0.04)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span style={{ color: "var(--accent)", fontWeight: 800 }}>●</span> {m}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ✅ What We Offer */}
        <section className="py-16 sm:py-20 px-6 md:px-16 max-w-6xl mx-auto">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 text-center"
            style={{ color: "var(--text-primary)" }}
          >
            What We Offer
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Removable Insulation Jackets",
                desc: "High-temperature removable insulation jackets for valves, flanges, generators, turbines and exhaust lines — reusable and easy to install for maintenance.",
              },
              {
                title: "Heat Shields & Thermal Covers",
                desc: "Heat shields and thermal covers that reduce surface temperature, prevent heat loss and improve worker safety around hot equipment.",
              },
              {
                title: "Export-Quality Supply",
                desc: "Export-grade insulation solutions supplied to Saudi Arabia, the Middle East, Europe and worldwide with reliable performance and durability.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", 0.2 + i * 0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition"
              >
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h3>
                <p className="leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeIn("up", 0.35)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 text-center"
            style={{ color: "var(--text-secondary)" }}
          >
            <strong style={{ color: "var(--text-primary)" }}>Serving:</strong> Karachi, Lahore, Faisalabad, Multan &amp;
            industrial zones across Pakistan — <strong style={{ color: "var(--text-primary)" }}>Exporting worldwide</strong>.
          </motion.p>
        </section>

        {/* ✅ CTA */}
        <section className="py-16 sm:py-20 text-center px-6" style={{ background: "var(--background-secondary)" }}>
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Need Industrial Valve or Generator Insulation?
          </motion.h2>

          <p className="mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Get a custom solution for your equipment temperature range and size.
            We manufacture removable insulation jackets, thermal covers and heat
            shields for energy saving, maintenance ease and worker safety.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="btn-primary">
              📩 Get a Quote
            </a>

            <a href="/products" className="btn-secondary">
              🔍 View Products
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
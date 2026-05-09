"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { useMemo, useState } from "react";

export default function LearnMorePage() {
  const SITE_URL = "https://www.mshahrukhengineeringworks.com";
  const WHATSAPP = "https://wa.me/923052646312";

  const readyStockModels = {
    Caterpillar: ["G3516-A", "G3516-B", "G3516-C", "G3520-C"],
    Jenbacher: ["JGS320", "JGS420", "JGS616", "JGS620"],
  };

  const applications = [
    "Generator Exhaust Insulation Jackets",
    "Main Exhaust Bellows Covers",
    "Globe Valve Insulation Jackets",
    "Flange & Pipe Insulation Covers",
    "Turbine & Compressor Heat Shields",
    "Plastic Extruder & Moulding Machine Covers",
    "Steam Pipeline & Manifold Insulation Jackets",
    "Pump & Industrial Equipment Heat Covers",
  ];

  const materialLayers = [
    {
      title: "Outer & Inner Layer",
      items: [
        "Silicone Coated Fiberglass Fabric",
        "PU Coated Fiberglass Fabric",
        "Aluminum Laminated Fiberglass",
        "Ceramic Fiber Cloth",
        "Fiberglass Cloth",
      ],
    },
    {
      title: "Insulation Core",
      items: ["Glass Wool", "Rock Wool", "Ceramic Wool", "Ceramic Paper"],
    },
    {
      title: "Closure System",
      items: [
        "Velcro / Hook & Loop",
        "Belt System",
        "Stainless Steel Springs",
        "Stainless Steel Hooks",
        "Hooks / Lacing System",
      ],
    },
  ];

  const faqs = useMemo(
    () => [
      {
        q: "What are removable insulation jackets?",
        a: "Removable insulation jackets are reusable thermal covers designed to reduce heat loss and lower surface temperature on hot equipment such as valves, turbines, generators, exhaust lines, manifolds and pipes. They can be removed and reinstalled easily for maintenance access.",
      },
      {
        q: "Where are MSEW insulation jackets used?",
        a: "MSEW insulation jackets are used on generators, valves, flanges, pumps, turbines, compressors, exhaust systems, main exhaust bellows, steam pipelines, manifolds, plastic extruders and moulding machines.",
      },
      {
        q: "Do you have ready stock for generator insulation jackets?",
        a: "Yes. We currently have ready-made insulation jackets available for Caterpillar G3516-A, G3516-B, G3516-C, G3520-C and Jenbacher JGS320, JGS420, JGS616, JGS620 generator models.",
      },
      {
        q: "What materials are used in MSEW insulation jackets?",
        a: "Our jackets are made with high-temperature materials such as silicone coated fiberglass fabric, PU coated fiberglass fabric, aluminum laminated fiberglass, ceramic fiber cloth, fiberglass cloth, glass wool, rock wool, ceramic wool and ceramic paper. Closure options include Velcro, belt system, stainless steel springs and stainless steel hooks.",
      },
      {
        q: "Which insulation material should I choose: Rockwool or Ceramic Fiber?",
        a: "Rockwool is commonly selected for medium temperature applications where cost and availability matter. Ceramic fiber is chosen for higher temperatures and tighter thermal performance requirements. Final selection depends on operating temperature, surface condition and safety targets.",
      },
      {
        q: "What thicknesses do you offer?",
        a: "Common thickness options include 25mm, 38mm, 50mm and 75mm. Custom thickness is available depending on operating temperature, heat-loss target and required surface temperature reduction.",
      },
      {
        q: "Do insulation jackets improve worker safety?",
        a: "Yes. By reducing outer surface temperature, they help reduce burn risk around hot equipment. Actual surface temperature depends on process temperature, insulation thickness, airflow and equipment geometry.",
      },
      {
        q: "Do you export outside Pakistan?",
        a: "Yes. MSEW supplies removable insulation jackets and heat shields in Pakistan and exports internationally. Packaging and documentation can be arranged according to project requirements.",
      },
    ],
    []
  );

  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    }),
    [faqs]
  );

  const productSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "High-Temperature Removable Insulation Jackets",
      brand: {
        "@type": "Brand",
        name: "M. Shahrukh Engineering Works",
      },
      description:
        "Custom-made removable thermal insulation jackets for generators, valves, flanges, pumps, turbines, compressors, exhaust systems and industrial hot surfaces.",
      manufacturer: {
        "@type": "Organization",
        name: "M. Shahrukh Engineering Works",
        url: SITE_URL,
        email: "hellomsew@gmail.com",
        telephone: "+923052646312",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Karachi",
          addressRegion: "Sindh",
          addressCountry: "PK",
        },
      },
      category: "Industrial Insulation",
    }),
    []
  );

  const [areaM2, setAreaM2] = useState(1);
  const [hotC, setHotC] = useState(200);
  const [ambientC, setAmbientC] = useState(30);
  const [kWmK, setKWmK] = useState(0.06);
  const [thicknessMm, setThicknessMm] = useState(50);
  const [openFAQ, setOpenFAQ] = useState(0);

  const estimator = useMemo(() => {
    const A = Number(areaM2) || 0;
    const Th = Number(hotC) || 0;
    const Ta = Number(ambientC) || 0;
    const k = Number(kWmK) || 0;
    const t = (Number(thicknessMm) || 0) / 1000;
    const dT = Math.max(0, Th - Ta);

    if (A <= 0 || t <= 0 || k <= 0 || dT <= 0) return null;

    const Qw = (k * A * dT) / t;
    const QkW = Qw / 1000;

    return {
      Qw,
      QkW,
      note:
        "This is a simplified estimate. Real heat loss also depends on convection, radiation, airflow, insulation fit and equipment geometry.",
    };
  }, [areaM2, hotC, ambientC, kWmK, thicknessMm]);

  return (
    <>
      <SEOHead
        title="Learn More About Removable Insulation Jackets | Materials, Applications & Ready Stock | MSEW"
        description="Learn about MSEW high-temperature removable insulation jackets: materials, layers, thickness, applications, generator ready stock, heat-loss reduction and industrial energy-saving benefits."
        image={`${SITE_URL}/img/Insulation-jacket-manufacturer.webp`}
        url={`${SITE_URL}/learn-more-about-our-insulation`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <main className="relative min-h-screen bg-gradient-to-b from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A] text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-cover" />

        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-center mb-10 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Learn More About{" "}
            <span className="text-[#FFD700]">
              High-Temperature Removable Insulation Jackets
            </span>
          </motion.h1>

          <p className="text-gray-200 text-center max-w-4xl mx-auto mb-8 leading-relaxed">
            MSEW manufactures custom removable insulation jackets for industrial
            equipment such as valves, flanges, pumps, turbines, compressors,
            generators, exhaust systems and other high-temperature surfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="bg-[#FFD700] text-[#1E3A8A] font-semibold px-7 py-4 rounded-xl hover:bg-yellow-400 transition shadow-lg text-center"
            >
              Request a Quote
            </Link>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#FFD700] text-[#FFD700] font-semibold px-7 py-4 rounded-xl hover:bg-[#FFD700]/10 transition shadow-lg text-center"
            >
              WhatsApp: +92 305 2646312
            </a>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#FFD700]">
              Why Industrial Plants Use Removable Insulation Jackets
            </h2>

            <div className="grid md:grid-cols-4 gap-5">
              {[
                "Reduce heat loss",
                "Improve energy efficiency",
                "Reusable for maintenance",
                "Improve worker safety",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-black/20 border border-white/10 rounded-2xl p-5 text-center"
                >
                  <p className="text-yellow-300 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#FFD700]">
              Material Construction
            </h2>

            <p className="text-gray-200 leading-relaxed mb-8">
              Our insulation jackets are built with high-temperature materials
              selected according to equipment size, temperature range, site
              environment and maintenance requirement.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {materialLayers.map((layer) => (
                <div
                  key={layer.title}
                  className="bg-black/20 border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-semibold text-yellow-300 mb-4">
                    {layer.title}
                  </h3>

                  <ul className="list-disc pl-5 text-gray-200 space-y-2">
                    {layer.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#FFD700]">
              Jacket Construction Details
            </h2>

            <div className="space-y-8">
              <div className="bg-black/20 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                  1) Outer Fabric Layer
                </h3>
                <p className="text-gray-200 mb-4">
                  The outer layer protects the jacket from dust, mechanical wear,
                  light moisture splash and site exposure. Fabric is selected
                  according to temperature and working environment.
                </p>
                <ul className="list-disc pl-6 text-gray-200 space-y-2">
                  <li>Silicone coated fiberglass for flexibility and heat resistance</li>
                  <li>PU coated fiberglass for selected industrial environments</li>
                  <li>Aluminum laminated fiberglass for radiant heat reflection</li>
                  <li>Ceramic fiber cloth for high-temperature zones</li>
                </ul>
              </div>

              <div className="bg-black/20 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                  2) Insulation Core
                </h3>
                <p className="text-gray-200 mb-4">
                  The insulation core reduces heat loss and helps lower the outer
                  surface temperature. Thickness and material type are selected
                  according to operating temperature and heat-loss target.
                </p>

                <div className="grid md:grid-cols-3 gap-5">
                  {[
                    {
                      title: "Glass Wool",
                      desc: "Used for moderate-temperature thermal insulation applications.",
                    },
                    {
                      title: "Rock Wool",
                      desc: "Commonly used for steam lines, manifolds, valves and industrial hot surfaces.",
                    },
                    {
                      title: "Ceramic Wool / Ceramic Paper",
                      desc: "Used for high-temperature exhaust, turbine and generator areas.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-white/5 border border-white/10 rounded-xl p-4"
                    >
                      <p className="text-yellow-300 font-semibold mb-2">
                        {item.title}
                      </p>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="text-gray-200 font-semibold mb-3">
                    Common thickness options
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {["25mm", "38mm", "50mm", "75mm / Custom"].map((item) => (
                      <div
                        key={item}
                        className="bg-white/5 border border-white/10 rounded-xl p-3 text-center text-gray-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-black/20 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                  3) Inner Hot-Face Layer
                </h3>
                <p className="text-gray-200">
                  The inner layer faces the hot equipment and protects the
                  insulation core. It is selected according to direct heat
                  exposure, equipment surface temperature and required service
                  life.
                </p>
              </div>

              <div className="bg-black/20 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                  4) Closure & Fastening System
                </h3>
                <p className="text-gray-200 mb-4">
                  Fastening design is important because insulation jackets must be
                  easy to remove and reinstall during maintenance.
                </p>
                <ul className="list-disc pl-6 text-gray-200 space-y-2">
                  <li>Velcro / Hook & Loop where suitable</li>
                  <li>Belt system for strong holding</li>
                  <li>Stainless steel springs and hooks for high-temperature applications</li>
                  <li>Hooks / lacing system for tight and reusable fitting</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#FFD700]">
              Ready Stock Generator Insulation Jackets
            </h2>

            <p className="text-gray-200 mb-8">
              We currently have ready-made insulation jackets available for the
              following generator models.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(readyStockModels).map(([brand, models]) => (
                <div
                  key={brand}
                  className="bg-black/20 border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-semibold text-yellow-300 mb-4">
                    {brand} Models
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    {models.map((model) => (
                      <div
                        key={model}
                        className="bg-white/5 border border-white/10 rounded-xl p-3 text-center text-gray-200 font-semibold"
                      >
                        {model}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#FFD700]">
              Industrial Applications
            </h2>

            <p className="text-gray-200 mb-8">
              We manufacture custom removable insulation jackets and heat shields
              for different industrial equipment and high-temperature surface
              areas.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {applications.map((item) => (
                <div
                  key={item}
                  className="bg-black/20 border border-white/10 rounded-2xl p-5"
                >
                  <p className="text-gray-200 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#FFD700]">
              Material Comparison
            </h2>

            <div className="overflow-x-auto bg-black/20 border border-white/10 rounded-2xl">
              <table className="min-w-[780px] w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-4 text-yellow-300 font-semibold">Feature</th>
                    <th className="p-4 text-yellow-300 font-semibold">
                      Rock Wool
                    </th>
                    <th className="p-4 text-yellow-300 font-semibold">
                      Ceramic Wool / Ceramic Fiber
                    </th>
                  </tr>
                </thead>

                <tbody className="text-gray-200">
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-semibold">Best For</td>
                    <td className="p-4">Medium-temperature hot surfaces</td>
                    <td className="p-4">High-temperature zones</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-semibold">Common Uses</td>
                    <td className="p-4">Steam lines, valves, flanges, manifolds</td>
                    <td className="p-4">Exhaust systems, turbines, generators</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 font-semibold">Cost</td>
                    <td className="p-4">More cost-effective</td>
                    <td className="p-4">Higher cost, higher heat resistance</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Selection</td>
                    <td className="p-4">Good for general industrial insulation</td>
                    <td className="p-4">Good for demanding high-heat areas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#FFD700]">
              Surface Temperature Reduction & Energy Saving
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-black/20 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                  How Surface Temperature Reduces
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  The insulation core reduces heat transfer from the hot
                  equipment surface to the outer cover. This helps reduce touch
                  temperature and improves safety around industrial equipment.
                </p>
              </div>

              <div className="bg-black/20 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                  How Energy Saving Happens
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  When heat loss is reduced, less energy is required to maintain
                  process temperature. This improves efficiency and helps reduce
                  operating cost in steam, exhaust and process heating systems.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#FFD700]">
              Quick Heat-Loss Estimator
            </h2>

            <div className="bg-black/20 border border-white/10 rounded-2xl p-6">
              <p className="text-gray-200 mb-5">
                Formula used: <strong>Q ≈ k × A × (Th − Ta) / t</strong>
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                <label className="text-gray-200">
                  Area (m²)
                  <input
                    value={areaM2}
                    onChange={(e) => setAreaM2(e.target.value)}
                    className="mt-2 w-full bg-white/10 border border-white/15 rounded-lg px-4 py-3 outline-none"
                    type="number"
                    step="0.1"
                    min="0"
                  />
                </label>

                <label className="text-gray-200">
                  Hot Temp Th (°C)
                  <input
                    value={hotC}
                    onChange={(e) => setHotC(e.target.value)}
                    className="mt-2 w-full bg-white/10 border border-white/15 rounded-lg px-4 py-3 outline-none"
                    type="number"
                    step="1"
                  />
                </label>

                <label className="text-gray-200">
                  Ambient Temp Ta (°C)
                  <input
                    value={ambientC}
                    onChange={(e) => setAmbientC(e.target.value)}
                    className="mt-2 w-full bg-white/10 border border-white/15 rounded-lg px-4 py-3 outline-none"
                    type="number"
                    step="1"
                  />
                </label>

                <label className="text-gray-200">
                  Insulation Thickness (mm)
                  <input
                    value={thicknessMm}
                    onChange={(e) => setThicknessMm(e.target.value)}
                    className="mt-2 w-full bg-white/10 border border-white/15 rounded-lg px-4 py-3 outline-none"
                    type="number"
                    step="1"
                    min="1"
                  />
                </label>

                <label className="text-gray-200 md:col-span-2">
                  Thermal Conductivity k (W/m·K)
                  <input
                    value={kWmK}
                    onChange={(e) => setKWmK(e.target.value)}
                    className="mt-2 w-full bg-white/10 border border-white/15 rounded-lg px-4 py-3 outline-none"
                    type="number"
                    step="0.01"
                    min="0.01"
                  />
                  <p className="text-gray-300 text-sm mt-2">
                    Use your material datasheet value for more accurate results.
                  </p>
                </label>
              </div>

              <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-5">
                {estimator ? (
                  <>
                    <p className="text-gray-200">
                      Estimated heat loss:{" "}
                      <strong className="text-yellow-300">
                        {estimator.QkW.toFixed(2)} kW
                      </strong>{" "}
                      ≈ {Math.round(estimator.Qw)} W
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      {estimator.note}
                    </p>
                  </>
                ) : (
                  <p className="text-gray-300">
                    Enter valid values to see an estimate.
                  </p>
                )}
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#FFD700]">
              Export & Custom Manufacturing
            </h2>

            <div className="bg-black/20 border border-white/10 rounded-2xl p-6">
              <p className="text-gray-200 leading-relaxed">
                MSEW manufactures custom insulation jackets based on equipment
                size, surface temperature, maintenance access and site condition.
                We supply projects in Pakistan and also export internationally
                with suitable packing and documentation as required.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#FFD700]">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((item, idx) => {
                const isOpen = openFAQ === idx;

                return (
                  <div
                    key={idx}
                    className="bg-black/20 border border-white/10 rounded-2xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFAQ(isOpen ? -1 : idx)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    >
                      <span className="text-yellow-300 font-semibold">
                        {item.q}
                      </span>
                      <span className="text-gray-200 text-2xl">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-gray-200 leading-relaxed">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-10 bg-black/20 border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#FFD700]">
              Need Insulation Jackets for Your Equipment?
            </h2>

            <p className="text-gray-200 max-w-3xl mx-auto mb-8">
              Send equipment photos, size, temperature range and model number.
              We will recommend suitable fabric, insulation core, thickness and
              closure design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-[#FFD700] text-[#1E3A8A] font-semibold px-8 py-4 rounded-xl hover:bg-yellow-400 transition shadow-lg"
              >
                Contact Us Today
              </Link>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#FFD700] text-[#FFD700] font-semibold px-8 py-4 rounded-xl hover:bg-[#FFD700]/10 transition shadow-lg"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.section>
        </div>
      </main>
    </>
  );
}
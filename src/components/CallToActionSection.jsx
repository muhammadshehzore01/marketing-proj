"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-r from-[#0D1B2A] via-[#1B3B6F] to-[#12274D]">
      {/* Background Glow Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 w-[800px] h-[800px] bg-yellow-400/10 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center text-white">
        {/* SEO-friendly Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          Get Custom Insulation Jackets for Industrial Equipment
        </motion.h2>

        {/* SEO-friendly Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed mb-10"
        >
          MSEW specializes in <strong>removable insulation jackets, covers, and heat shields</strong> 
          for <strong>generators, turbines, valves, pumps, and industrial equipment</strong>. 
          Trusted across <strong>Karachi, Lahore, Faisalabad, Multan</strong>, and exporting worldwide.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Link
            href="/get-quote"
            className="px-10 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-black shadow-xl hover:scale-105 hover:shadow-yellow-500/50 transition-all duration-300"
          >
            Request a Free Quote
          </Link>
          <Link
            href="/services"
            className="px-10 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-blue-400 via-cyan-500 to-green-400 text-black shadow-xl hover:scale-105 hover:shadow-cyan-400/50 transition-all duration-300"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


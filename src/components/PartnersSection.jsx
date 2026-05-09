"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";

const partnersData = [
  { name: "ADM", url: "https://admdenim.com/", logo: "adm.jpg" },
  { name: "Allied", url: "https://aesl.com.pk/", logo: "allied.jpg" },
  { name: "AM", url: "https://artisticmilliners.com/", logo: "am.jpg" },
  { name: "Liberty", url: "https://libertymillslimited.com/", logo: "liberty.jpg" },
  { name: "Syntec", url: "https://syntechfibres.com/", logo: "syntec.jpg" },
];

export default function PartnersSection() {
  const shouldReduceMotion = useReducedMotion();

  const partnersSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "M. Shahrukh Engineering Works – Removable Insulation Jackets Manufacturer Pakistan",
    url: "https://mshahrukhengineeringworks.com",
    logo: "https://mshahrukhengineeringworks.com/img/logo.png",
    subOrganization: partnersData.map((p) => ({
      "@type": "Organization",
      name: p.name,
      url: p.url,
      logo: `https://mshahrukhengineeringworks.com/img/partners/${p.logo}`,
    })),
  };

  const headingAnim = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.4 },
        transition: { duration: 0.6 },
      };

  const gridAnim = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6 },
      };

  return (
    <section className="section">
      <Script
        id="partners-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnersSchema) }}
      />

      <div className="container text-center">
        <motion.h2
        {...headingAnim}
        className="text-center w-full"
        style={{ color: "var(--text-dark-primary)" }}
      >
        Trusted Partners in Industrial Insulation
      </motion.h2>

        <motion.div
          {...gridAnim}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mt-6 md:mt-10"        >
          {partnersData.map((partner) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${partner.name} website`}
              className="group glass-card p-4 sm:p-5 md:p-6 hover-lift flex items-center justify-center min-h-[120px] sm:min-h-[130px] md:min-h-[140px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              style={{ outlineOffset: "2px" }}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
            >
              <div className="relative w-[140px] h-[64px] sm:w-[160px] sm:h-[72px] md:w-[180px] md:h-[80px]">
                <Image
                  src={`/img/partners/${partner.logo}`}
                  alt={`${partner.name} – Partner`}
                  fill
                  sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, 180px"
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-200"
                  unoptimized
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
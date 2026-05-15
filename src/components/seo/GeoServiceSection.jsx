// /src/components/seo/GeoServiceSection.jsx

import Link from "next/link";
import Image from "next/image";

export default function GeoServiceSection({ seo, service }) {
  if (!seo || !service) return null;

  /* =====================================================
     🔥 SAFE LOCATION (NO CRASH)
  ===================================================== */
  const location =
    seo?.location ||
    seo?.city ||
    seo?.country ||
    service?.name?.split("in ")?.[1] ||
    "Industrial Region";

  /* =====================================================
     🔥 SAFE GEO CONTEXT (FIXED UNDEFINED ISSUE)
  ===================================================== */
  const geo = seo?.context || seo?.geo || {};

  const countrySlug =
    geo?.countrySlug ||
    seo?.countrySlug ||
    service?.countrySlug ||
    null;

  const citySlug =
    geo?.citySlug ||
    seo?.citySlug ||
    service?.citySlug ||
    null;

  /* =====================================================
     🔥 FINAL SAFE DETAIL LINK (NO MORE UNDEFINED)
  ===================================================== */
  const detailHref =
    countrySlug && citySlug
      ? `/removable-insulation-jackets/${countrySlug}/${citySlug}/details`
      : countrySlug
      ? `/removable-insulation-jackets/${countrySlug}/details`
      : "/removable-insulation-jackets";

  return (
    <section className="my-20 container animate-fadeIn">

      <div className="glass-card overflow-hidden grid lg:grid-cols-2 hover:shadow-lg transition">

        {/* ================= LEFT CONTENT ================= */}
        <div className="p-8 md:p-12 flex flex-col justify-center">

          <div className="inline-flex mb-5 px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 text-sm font-semibold w-fit">
            Industrial Engineering Solutions • {location}
          </div>

          <h2 className="mb-5">
            {seo.heading ||
              `Removable Insulation Jackets in ${location}`}
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            {seo.paragraph ||
              `We manufacture and supply high-temperature removable insulation jackets in ${location} for valves, pumps, turbines, boilers and industrial systems. These thermal insulation solutions help reduce energy loss, improve plant efficiency and enhance worker safety.`}
          </p>

          <p className="text-sm text-slate-400 mb-6">
            {seo.subText ||
              `Custom-engineered insulation solutions for industrial automation, energy plants and process industries across ${location}.`}
          </p>

          {/* ================= CTA ================= */}
          <div className="flex flex-wrap gap-4">

            <Link href={detailHref} className="btn-primary">
              View Technical Details
            </Link>

            <Link href="/contact" className="btn-secondary">
              Request Quote
            </Link>

          </div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative min-h-[320px] lg:min-h-full">

          <Image
            src={service.image}
            alt={`${service.name} - ${location}`}
            fill
            className="object-cover hover:scale-105 transition duration-500"
            priority
          />

        </div>

      </div>

      {/* ================= TRUST STRIP ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

        {[
          ["Energy Saving", "Up to 35%"],
          ["Heat Resistance", "500°C+"],
          ["Reusable", "Industrial Grade"],
          ["Maintenance", "Easy Access"],
        ].map(([title, value]) => (
          <div key={title} className="glass-card p-4 text-center">
            <div className="text-cyan-300 font-bold text-xl">
              {value}
            </div>
            <div className="text-sm text-slate-400">
              {title}
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}
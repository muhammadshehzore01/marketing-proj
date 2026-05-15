/* /app/removable-insulation-jackets/[country]/[city]/details/page.jsx */

import { notFound } from "next/navigation";
import { ACTIVE_LOCATIONS as locations } from "@/lib/data/locations";
import { fetchServiceDetail } from "@/lib/api";
import { europeSeoEngine } from "@/lib/seo/engine/europeSeoEngine";
import { getSeoBrainSignals } from "@/lib/seo/engine/seoRankingBrain";
import ServiceDetailContent from "@/components/ServiceDetailContent";

export default async function CityDetailsPage({ params }) {
  const country = locations?.[params.country];
  if (!country) return notFound();

  const city = country.cities?.find((c) => c.slug === params.city);
  if (!city) return notFound();

  /* =====================================================
     🔥 SERVICE DATA
  ===================================================== */
  const service = await fetchServiceDetail(
    "removable-insulation-jackets-manufacturer"
  );

  if (!service) return notFound();

  /* =====================================================
     🧠 SEO BRAIN CONTEXT (CITY LEVEL INTELLIGENCE)
  ===================================================== */
  const brain = getSeoBrainSignals({
    country,
    city,
    service,
    keyword: "removable insulation jackets",
  });

  /* =====================================================
     🌍 CITY SEO ENGINE
  ===================================================== */
  const seo = europeSeoEngine.generateCity(country.slug, city.slug);

  return (
    <ServiceDetailContent
      service={service}
      seo={{
        ...seo,
        brain, // 🔥 inject ranking intelligence
      }}
      geo={{
        country: country.name,
        city: city.display,
        countrySlug: country.slug,
        citySlug: city.slug,
        type: "city",
      }}
    />
  );
}
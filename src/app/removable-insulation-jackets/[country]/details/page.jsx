// /home/shahrukh-eng/marketing-proj/src/app/removable-insulation-jackets/[country]/details/page.jsx
import { notFound } from "next/navigation";
import { ACTIVE_LOCATIONS as locations } from "@/lib/data/locations";
import { fetchServiceDetail } from "@/lib/api";
import { europeSeoEngine } from "@/lib/seo/engine/europeSeoEngine";
import { getSeoBrainSignals } from "@/lib/seo/engine/seoRankingBrain";
import ServiceDetailContent from "@/components/ServiceDetailContent";

export default async function CountryDetailsPage({ params }) {
  const country = locations?.[params.country];
  if (!country) return notFound();

  /* =====================================================
     🔥 SERVICE DATA
  ===================================================== */
  const service = await fetchServiceDetail(
    "removable-insulation-jackets-manufacturer"
  );

  if (!service) return notFound();

  /* =====================================================
     🧠 SEO BRAIN CONTEXT (NEW)
  ===================================================== */
  const brain = getSeoBrainSignals({
    country,
    service,
    keyword: "removable insulation jackets",
  });

  /* =====================================================
     🌍 SEO ENGINE (COUNTRY LEVEL)
  ===================================================== */
  const seo = europeSeoEngine.generateCountry(country);

  return (
    <ServiceDetailContent
      service={service}
      seo={{
        ...seo,
        brain, // 🔥 injected ranking intelligence
      }}
      geo={{
        country: country.name,
        countrySlug: country.slug,
        type: "country",
      }}
    />
  );
}
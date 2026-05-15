import { notFound } from "next/navigation";
import Script from "next/script";

import { generateCountryEnterprise } from "@/lib/seo/engine/semanticContentEngine";
import { ACTIVE_LOCATIONS as locations } from "@/lib/data/locations";
import { europeSeoEngine } from "@/lib/seo/engine/europeSeoEngine";
import { buildFullSchema } from "@/lib/seo/schema/schemaBuilder";
import { buildContentRoles } from "@/lib/seo/engine/contentRoleController";
import RelatedCitiesLinks from "@/components/RelatedCitiesLinks";
import { buildRelatedCitiesSeo } from "@/lib/seo/engine/country/countryRelatedCitiesEngine";

import { fetchServiceDetail } from "@/lib/api";
import { buildGeoServiceSeo } from "@/lib/seo/engine/shared/serviceGeoEngine";
import { buildApplicationLinksSeo } from "@/lib/seo/engine/shared/applicationLinksEngine";
import { buildIndustriesLinksSeo } from "@/lib/seo/engine/shared/industriesLinksEngine";
import { buildMaterialConstructionSeo } from "@/lib/seo/engine/shared/materialConstructionEngine";
import { buildExportCountriesSeo } from "@/lib/seo/engine/shared/exportCountriesEngine";
import { buildFaqSeo } from "@/lib/seo/engine/shared/faqEngine";

/* UI */
import HeroSlider from "@/components/HeroSlider";
import AboutMSEW from "@/components/AboutMSEW";
import PartnersSection from "@/components/PartnersSection";

import SeoSection from "@/components/seo/SeoSection";
import SeoCard from "@/components/seo/SeoCard";
import SeoTitle from "@/components/seo/SeoTitle";
import GeoServiceSection from "@/components/seo/GeoServiceSection";

import IntroSection from "@/components/IntroSection";
import KeyBenefitsStrip from "@/components/KeyBenefitsStrip";
import ExportCountries from "@/components/ExportCountries";
import ApplicationLinks from "@/components/ApplicationLinks";
import IndustriesLinks from "@/components/IndustriesLinks";
import MaterialConstruction from "@/components/MaterialConstruction";
import FAQSection from "@/components/faqsection";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/* =====================================================
   SAFE COUNTRY RESOLVER
===================================================== */
function resolveCountry(slug) {
  if (!slug) return null;

  const key = slug.toLowerCase().trim();

  return (
    locations?.[key] ||
    Object.values(locations || {}).find(
      (c) => c.slug?.toLowerCase() === key
    ) ||
    null
  );
}

/* =====================================================
   METADATA
===================================================== */
export async function generateMetadata({ params }) {
  const country = resolveCountry(params?.country);

  if (!country?.slug) return {};

  const data = europeSeoEngine.generateCountry(country);
  if (!data) return {};

  return {
    title: data.title,
    description: data.overview?.content?.[0] || "",
    alternates: {
      canonical: `https://mshahrukhengineeringworks.com/removable-insulation-jackets/${country.slug}`,
    },
  };
}

/* =====================================================
   PAGE
===================================================== */
export default async function CountryPage({ params }) {
  const country = resolveCountry(params?.country);

  if (!country?.slug) return notFound();

  const data = europeSeoEngine.generateCountry(country);
  if (!data) return notFound();

  const semantic = generateCountryEnterprise({
    country,
    seed: country.slug.length,
  });

  const roles = buildContentRoles({
    hero: data.hero?.overview?.content?.[0],
    intro: data.intro?.paragraph1,
    overview: data.overview?.content?.[0],
    semantic,
  });

  const schema = buildFullSchema({
    country,
    faq: data.faq || [],
  });

  let service = null;

  try {
    service = await fetchServiceDetail(
      "removable-insulation-jackets-manufacturer"
    );
  } catch (e) {
    console.error("Service fetch failed:", e);
  }

  const geoSeo = buildGeoServiceSeo(country, null, service);

  const applicationLinksSeo = buildApplicationLinksSeo({
    country,
  });

  const industriesLinksSeo = buildIndustriesLinksSeo({
    country,
  });

  const materialConstructionSeo = buildMaterialConstructionSeo({
    country,
  });

  const exportCountriesSeo = buildExportCountriesSeo({
    country,
  });

  const faqSeo = buildFaqSeo({
    country,
  });

  const relatedCitiesSeo = buildRelatedCitiesSeo({
    country,
  });


  return (
    <main className="pb-20">
      <Script
        id={`schema-${country.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema || {}),
        }}
      />

      <HeroSlider
        seoData={{
          ...data.hero,
          overview: { content: [roles.hero] },
        }}
      />

      <IntroSection
        seoData={{
          intro: {
            ...data.intro,
            paragraph1: roles.intro,
          },
        }}
      />

      <KeyBenefitsStrip seoData={data} />

      {service && (
        <GeoServiceSection seo={geoSeo} service={service} />
      )}

      <RelatedCitiesLinks seoContent={relatedCitiesSeo} />

      <ApplicationLinks seoContent={applicationLinksSeo} />

      <IndustriesLinks seoContent={industriesLinksSeo} />

      <MaterialConstruction seoContent={materialConstructionSeo} />

      <ExportCountries seoContent={exportCountriesSeo} />

      <AboutMSEW />

      <PartnersSection />

      <FAQSection seoContent={faqSeo} />
    </main>
  );
}
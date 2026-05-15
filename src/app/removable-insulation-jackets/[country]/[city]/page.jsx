import { notFound } from "next/navigation";
import Script from "next/script";

import { ACTIVE_LOCATIONS as locations } from "@/lib/data/locations";
import { europeSeoEngine } from "@/lib/seo/engine/europeSeoEngine";
import { generateCityEnterprise } from "@/lib/seo/engine/semanticContentEngine";
import { buildContentRoles } from "@/lib/seo/engine/contentRoleController";

import { buildGeoServiceSeo } from "@/lib/seo/engine/shared/serviceGeoEngine";
import { buildApplicationLinksSeo } from "@/lib/seo/engine/shared/applicationLinksEngine";
import { buildIndustriesLinksSeo } from "@/lib/seo/engine/shared/industriesLinksEngine";
import { buildMaterialConstructionSeo } from "@/lib/seo/engine/shared/materialConstructionEngine";
import { buildExportCountriesSeo } from "@/lib/seo/engine/shared/exportCountriesEngine";
import { fetchServiceDetail } from "@/lib/api";

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
import { buildFaqSeo } from "@/lib/seo/engine/shared/faqEngine";
import FAQSection from "@/components/faqsection";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/* =====================================================
   SAFE RESOLVERS
===================================================== */
function getCountryCity(params) {
  const countryKey = params?.country?.toLowerCase()?.trim();
  const cityKey = params?.city?.toLowerCase()?.trim();

  const country = countryKey ? locations?.[countryKey] : null;
  if (!country?.slug) return { country: null, city: null };

  const city =
    country?.cities?.find((c) => c.name?.toLowerCase() === cityKey) || null;

  return { country, city };
}

/* =====================================================
   METADATA
===================================================== */
export async function generateMetadata({ params }) {
  const { country, city } = getCountryCity(params);

  if (!country?.slug || !city?.name) return {};

  const meta = europeSeoEngine.metaCity(city, country);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://mshahrukhengineeringworks.com/removable-insulation-jackets/${country.slug}/${city.name}`,
    },
  };
}

/* =====================================================
   PAGE
===================================================== */
export default async function CityPage({ params }) {
  const { country, city } = getCountryCity(params);

  if (!country?.slug || !city?.name) return notFound();

  const data = europeSeoEngine.generateCity(country.slug, city.name);
  if (!data) return notFound();

  const semantic = generateCityEnterprise({
    city,
    country,
    seed: city.name.length + country.slug.length,
  });

  const roles = buildContentRoles({
    hero: data.hero?.overview?.content?.[0],
    intro: data.intro?.paragraph1,
    overview: data.overview?.content?.[0],
    semantic,
  });

  let service = null;

  try {
    service = await fetchServiceDetail(
      "removable-insulation-jackets-manufacturer"
    );
  } catch (e) {
    console.error("Service fetch failed:", e);
  }

  const geoSeo = buildGeoServiceSeo(country, city, service);

  const applicationLinksSeo = buildApplicationLinksSeo({
    country,
    city,
  });

  const industriesLinksSeo = buildIndustriesLinksSeo({
    country,
    city,
  });

  const materialConstructionSeo = buildMaterialConstructionSeo({
    country,
    city,
  });

  const exportCountriesSeo = buildExportCountriesSeo({
    country,
    city,
  });

  const faqSeo = buildFaqSeo({
    country,
    city,
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.title,
    url: `https://mshahrukhengineeringworks.com/removable-insulation-jackets/${country.slug}/${city.name}`,
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: (data.faq || []).map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    },
  };



  return (
    <main className="pb-20">
      <Script
        id={`schema-${country.slug}-${city.name}`}
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
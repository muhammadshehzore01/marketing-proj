// marketing-proj/src/app/removable-insulation-jackets/[country]/page.jsx
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

import { ACTIVE_LOCATIONS as locations } from "@/lib/data/locations";
import { europeSeoEngine } from "@/lib/seo/engine/europeSeoEngine";
import { buildFullSchema } from "@/lib/seo/schema/schemaBuilder";

/* ================= UI COMPONENTS ================= */
import HeroSlider from "@/components/HeroSlider";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/Products";
import AboutMSEW from "@/components/AboutMSEW";
import PartnersSection from "@/components/PartnersSection";

/* ================= SEO COMPONENTS ================= */
import SeoSection from "@/components/seo/SeoSection";
import SeoCard from "@/components/seo/SeoCard";
import SeoGrid from "@/components/seo/SeoGrid";
import SeoFAQ from "@/components/seo/SeoFAQ";
import SeoTitle from "@/components/seo/SeoTitle";

/* ================= CUSTOM COMPONENTS ================= */
import IntroSection from "@/components/IntroSection";
import KeyBenefitsStrip from "@/components/KeyBenefitsStrip";

/* =====================================================
   STATIC PAGE
===================================================== */
export const dynamic = "force-static";

/* =====================================================
   METADATA
===================================================== */
export async function generateMetadata({ params }) {
  const country = locations?.[params.country];
  if (!country) return {};

  const data = europeSeoEngine.generateCountry(country);
  if (!data) return {};

  const canonical = `https://mshahrukhengineeringworks.com/removable-insulation-jackets/${country.slug}`;

  return {
    title: data.title,
    description: data.overview?.content?.[0] || "",

    alternates: {
      canonical,
    },

    openGraph: {
      title: data.title,
      description: data.overview?.content?.[0] || "",
      url: canonical,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.overview?.content?.[0] || "",
    },
  };
}

/* =====================================================
   COUNTRY PAGE
===================================================== */
export default function CountryPage({ params }) {
  const country = locations?.[params.country];

  if (!country) return notFound();

  const data = europeSeoEngine.generateCountry(country);

  if (!data) return notFound();

  const schema = buildFullSchema({
    country,
    faq: data.faq || [],
  });

  return (
    <main className="pb-20">

      {/* ================= JSON-LD ================= */}
      <Script
        id={`schema-${country.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema || {}),
        }}
      />

      {/* ================= HERO ================= */}
      <HeroSlider seoData={data.hero} />

      {/* ================= INTRO ================= */}
      <IntroSection seoData={data.intro} />

      {/* ================= BENEFITS ================= */}
      <KeyBenefitsStrip seoData={data} />

      {/* ================= SERVICES ================= */}
      <SeoSection>
        <SeoTitle>
          Industrial Insulation Services in {country.name}
        </SeoTitle>

        <SeoCard>
          {data.overview?.content?.[0] ||
            `We provide high-quality insulation solutions across ${country.name} for industrial efficiency and energy saving.`}
        </SeoCard>
      </SeoSection>

      <ServicesSection />

      {/* ================= PRODUCTS ================= */}
      <ProductsSection />

      {/* ================= INDUSTRIAL OVERVIEW ================= */}
      <SeoSection>
        <SeoTitle>
          Industrial Applications in {country.name}
        </SeoTitle>

        <SeoGrid>
          {(data.growth?.content || []).map((item, i) => (
            <SeoCard key={i}>{item}</SeoCard>
          ))}
        </SeoGrid>
      </SeoSection>

      {/* ================= ABOUT ================= */}
      <AboutMSEW />

      {/* ================= PARTNERS ================= */}
      <PartnersSection />

      {/* ================= FAQ ================= */}
      <SeoSection>
        <SeoTitle>Frequently Asked Questions</SeoTitle>
        <SeoFAQ data={data.faq || []} />
      </SeoSection>

    </main>
  );
}
// marketing-proj/src/lib/seo/schema/schemaBuilder.js
/* =====================================================
   🚀 SCHEMA FUSION ENGINE (STEP 10 CORE SYSTEM)
   FAQ + Breadcrumb + Organization + Product (AUTO SEO)
===================================================== */

import { buildSeoSignals } from "../seoSignals";

/* =====================================================
   🔥 BREADCRUMB SCHEMA
===================================================== */
export function buildBreadcrumbSchema({ country, city }) {
  const items = [
    {
      position: 1,
      name: "Home",
      item: "https://mshahrukhengineeringworks.com",
    },
    {
      position: 2,
      name: "Removable Insulation Jackets",
      item: "https://mshahrukhengineeringworks.com/removable-insulation-jackets",
    },
  ];

  if (country) {
    items.push({
      position: 3,
      name: country.name,
      item: `https://mshahrukhengineeringworks.com/removable-insulation-jackets/${country.slug}`,
    });
  }

  if (city && country) {
    items.push({
      position: 4,
      name: city.display,
      item: `https://mshahrukhengineeringworks.com/removable-insulation-jackets/${country.slug}/${city.name}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

/* =====================================================
   🔥 FAQ SCHEMA BUILDER
===================================================== */
export function buildFaqSchema(faq = []) {
  if (!faq.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/* =====================================================
   🔥 ORGANIZATION SCHEMA (GLOBAL AUTHORITY BOOST)
===================================================== */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "M. Shahrukh Engineering Works",
    url: "https://mshahrukhengineeringworks.com",
    description:
      "Industrial insulation jackets manufacturer for valves, turbines, pumps and industrial systems.",
  };
}

/* =====================================================
   🔥 PRODUCT SCHEMA (BASIC SEO POWER BOOST)
===================================================== */
export function buildProductSchema({ country, city }) {
  const place = city ? city.display : country?.name;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Industrial Insulation Jackets in ${place}`,
    description:
      "High-performance removable insulation jackets for industrial equipment.",
    brand: {
      "@type": "Brand",
      name: "MSEW",
    },
  };
}

/* =====================================================
   🔥 MAIN SCHEMA FUSION ENGINE (ONE CALL = ALL SCHEMAS)
===================================================== */
export function buildFullSchema({ country, city, faq = [] }) {
  const signals = buildSeoSignals(city ? "city" : "country", city ? 2 : 1);

  const schema = {
    "@context": "https://schema.org",

    /* ---------------------------
       CORE ENTITY
    ---------------------------- */
    "@type": "WebPage",

    /* ---------------------------
       SEO SIGNALS (INDEX CONTROL)
    ---------------------------- */
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "MSEW",
      url: "https://mshahrukhengineeringworks.com",
    },

    /* ---------------------------
       EMBEDDED SCHEMAS
    ---------------------------- */
    breadcrumb: buildBreadcrumbSchema({ country, city }),

    ...(faq.length ? { mainEntity: buildFaqSchema(faq).mainEntity } : {}),

    /* ---------------------------
       OPTIONAL BOOST SCHEMAS
    ---------------------------- */
    publisher: buildOrganizationSchema(),

    ...(city || country
      ? { about: buildProductSchema({ country, city }) }
      : {}),

    /* ---------------------------
       SEO SIGNALS (FOR DEBUG + ALIGNMENT)
    ---------------------------- */
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "priority",
        value: signals.priority,
      },
      {
        "@type": "PropertyValue",
        name: "index",
        value: signals.index,
      },
      {
        "@type": "PropertyValue",
        name: "follow",
        value: signals.follow,
      },
    ],
  };

  return schema;
}
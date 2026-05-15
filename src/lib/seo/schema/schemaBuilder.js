/* =====================================================
🔥 FINAL SCHEMA BUILDER
src/lib/seo/schema/schemaBuilder.js
===================================================== */

import { buildSeoSignals } from "../seoSignals";

/* =====================================================
   BREADCRUMB
===================================================== */

export function buildBreadcrumbSchema({
  country,
  city,
}) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item:
        "https://mshahrukhengineeringworks.com",
    },

    {
      "@type": "ListItem",
      position: 2,
      name:
        "Removable Insulation Jackets",
      item:
        "https://mshahrukhengineeringworks.com/removable-insulation-jackets",
    },
  ];

  if (country) {
    items.push({
      "@type": "ListItem",
      position: 3,
      name: country.name,
      item: `https://mshahrukhengineeringworks.com/removable-insulation-jackets/${country.slug}`,
    });
  }

  if (city && country) {
    items.push({
      "@type": "ListItem",
      position: 4,
      name: city.display,
      item: `https://mshahrukhengineeringworks.com/removable-insulation-jackets/${country.slug}/${city.name}`,
    });
  }

  return {
    "@context":
      "https://schema.org",
    "@type":
      "BreadcrumbList",
    itemListElement: items,
  };
}

/* =====================================================
   FAQ
===================================================== */

export function buildFaqSchema(
  faq = []
) {
  if (!faq.length)
    return null;

  return {
    "@context":
      "https://schema.org",

    "@type":
      "FAQPage",

    mainEntity:
      faq.map((f) => ({
        "@type":
          "Question",

        name:
          f.question,

        acceptedAnswer:
          {
            "@type":
              "Answer",

            text:
              f.answer,
          },
      })),
  };
}

/* =====================================================
   ORGANIZATION
===================================================== */

export function buildOrganizationSchema() {
  return {
    "@context":
      "https://schema.org",

    "@type":
      "Organization",

    name:
      "M. Shahrukh Engineering Works",

    url:
      "https://mshahrukhengineeringworks.com",

    description:
      "Industrial insulation jackets manufacturer for valves, turbines, pumps and industrial systems.",
  };
}

/* =====================================================
   PRODUCT
===================================================== */

export function buildProductSchema({
  country,
  city,
}) {
  const place =
    city?.display ||
    country?.name ||
    "Industrial";

  return {
    "@context":
      "https://schema.org",

    "@type":
      "Product",

    name:
      `Industrial Insulation Jackets in ${place}`,

    description:
      "High-performance removable insulation jackets for industrial equipment.",

    brand: {
      "@type":
        "Brand",

      name:
        "MSEW",
    },

    category:
      "Industrial Insulation",
  };
}

/* =====================================================
   MAIN
===================================================== */

export function buildFullSchema({
  country,
  city,
  faq = [],
}) {
  const signals =
    buildSeoSignals(
      city
        ? "city"
        : "country",
      city ? 2 : 1
    );

  return {
    "@context":
      "https://schema.org",

    "@type":
      "WebPage",

    inLanguage:
      "en",

    isPartOf: {
      "@type":
        "WebSite",

      name:
        "MSEW",

      url:
        "https://mshahrukhengineeringworks.com",
    },

    breadcrumb:
      buildBreadcrumbSchema({
        country,
        city,
      }),

    ...(faq.length
      ? {
          mainEntity:
            buildFaqSchema(
              faq
            ).mainEntity,
        }
      : {}),

    publisher:
      buildOrganizationSchema(),

    about:
      buildProductSchema({
        country,
        city,
      }),

    additionalProperty: [
      {
        "@type":
          "PropertyValue",

        name:
          "priority",

        value:
          signals.priority,
      },

      {
        "@type":
          "PropertyValue",

        name:
          "index",

        value:
          signals.index,
      },

      {
        "@type":
          "PropertyValue",

        name:
          "follow",

        value:
          signals.follow,
      },
    ],
  };
}
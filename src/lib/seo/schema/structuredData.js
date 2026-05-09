/* =====================================================
  /home/shahrukh-eng/marketing-proj/src/lib/seo/schema/structuredData.js
   🚀 STRUCTURED DATA SYSTEM (PHASE 7)
   - FAQ + Product + Breadcrumb schemas
   - Google rich results optimization
===================================================== */

/* =====================================================
   🔹 FAQ SCHEMA (CITY + COUNTRY BOOST)
===================================================== */
export function faqSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

/* =====================================================
   🔹 PRODUCT SCHEMA (YOUR CORE BUSINESS)
===================================================== */
export function productSchema(product = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name || "Industrial Insulation Jacket",
    description:
      product.description ||
      "High-temperature removable insulation jacket for industrial equipment.",
    brand: {
      "@type": "Brand",
      name: "M. Shahrukh Engineering Works",
    },
    category: "Industrial Insulation",
  };
}

/* =====================================================
   🔹 BREADCRUMB SCHEMA (VERY IMPORTANT SEO SIGNAL)
===================================================== */
export function breadcrumbSchema({ country, city }) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://mshahrukhengineeringworks.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Insulation Jackets",
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
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}
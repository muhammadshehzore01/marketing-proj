/* =====================================================
    /home/shahrukh-eng/marketing-proj/src/lib/seo/engine/seoRankingLayer.js
   🚀 PHASE 15: CTR + RANKING CONTROL LAYER
===================================================== */
/* =====================================================
   /home/shahrukh-eng/marketing-proj/src/lib/seo/engine/seoRankingLayer.js
   🚀 PHASE 15: CTR + RANKING CONTROL LAYER (FINAL FIXED)
===================================================== */

/* =====================================================
   🔥 CTR TITLE VARIATIONS (A/B SEO TESTING STYLE)
===================================================== */
export function buildMetaTitle(city, country) {
  const place = city ? city.display : country?.name || "Industrial";

  const base = `Industrial Insulation Jackets in ${place}`;

  const variations = [
    `${base} | Energy Saving Solutions`,
    `${base} | Reduce Heat Loss & Improve Efficiency`,
    `${base} | Custom Thermal Insulation Covers`,
  ];

  // deterministic selection (stable SEO, no randomness)
  const seed = (city?.name?.length || country?.name?.length || 5);
  const index = seed % variations.length;

  return variations[index];
}

/* =====================================================
   🔥 META DESCRIPTION OPTIMIZER (CTR BOOST)
===================================================== */
export function buildMetaDescription(city, country) {
  const place = city ? city.display : country?.name || "industrial locations";

  return `High-performance removable insulation jackets in ${place} for valves, turbines, pumps and industrial equipment. Improve energy efficiency and reduce heat loss.`;
}

/* =====================================================
   🔥 PAGE PRIORITY SCORING (FOR SITEMAP + INDEXING)
===================================================== */
export function getPagePriority(type = "city") {
  if (type === "country") return 0.85;
  if (type === "city") return 0.75;
  return 0.65;
}

/* =====================================================
   🔥 INTERNAL LINK AUTHORITY BOOST SCORE
===================================================== */
export function calculateInternalLinkScore({
  cityLinks = [],
  serviceLinks = [],
  productLinks = [],
}) {
  let score = 0;

  score += cityLinks.length * 2;
  score += serviceLinks.length * 3;
  score += productLinks.length * 3;

  return Math.min(score, 100);
}

/* =====================================================
   🔥 SCHEMA AUTO SELECTOR (SMART RICH RESULTS)
===================================================== */
export function getSchemaFlags({ hasFAQ, hasBreadcrumb, hasProduct }) {
  return {
    faq: hasFAQ ? "enabled" : "disabled",
    breadcrumb: hasBreadcrumb ? "enabled" : "disabled",
    product: hasProduct ? "enabled" : "disabled",
  };
}

/* =====================================================
   🔥 CTR BOOST SNIPPET GENERATOR (GOOGLE CONTROL)
===================================================== */
export function buildSERPSnippet({ city, country }) {
  const place = city ? city.display : country?.name || "Industrial Sector";

  return {
    title: buildMetaTitle(city, country),
    description: buildMetaDescription(city, country),
    slug: city
      ? `/removable-insulation-jackets/${country.slug}/${city.name}`
      : `/removable-insulation-jackets/${country.slug}`,
    highlight: `Trusted Industrial Insulation Supplier in ${place}`,
  };
}

/* =====================================================
   🔥 INDEXING PRIORITY ENGINE (SITEMAP CONTROL)
===================================================== */
export function getIndexPriority({ type = "city", depth = 1 }) {
  const base = getPagePriority(type);

  // deeper pages slightly lower priority
  const adjusted = base - depth * 0.02;

  // IMPORTANT: return NUMBER (not string)
  return Math.max(0.5, adjusted);
}
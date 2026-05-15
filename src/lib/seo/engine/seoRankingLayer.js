// /src/lib/seo/engine/seoRankingLayer.js
// /src/lib/seo/engine/seoRankingLayer.js

/* =====================================================
   🔥 CTR TITLE VARIATIONS (IMPROVED + KEYWORD AWARE)
===================================================== */

export function buildMetaTitle(city, country, keyword = "") {
  const place = city ? city.display : country?.name || "Industrial";

  const base = keyword
    ? `${keyword} in ${place}`
    : `Industrial Insulation Jackets in ${place}`;

  const variations = [
    `${base} | Energy Efficiency Solutions`,
    `${base} | Reduce Heat Loss & Save Energy`,
    `${base} | Custom Industrial Thermal Systems`,
    `${base} | High Performance Engineering Solutions`,
  ];

  const seed = (place.length + (keyword?.length || 0)) || 7;
  return variations[seed % variations.length];
}

/* =====================================================
   🔥 META DESCRIPTION (HUMAN + SEO BALANCED)
===================================================== */

export function buildMetaDescription(city, country, keyword = "") {
  const place = city ? city.display : country?.name || "industrial sector";

  const kw = keyword || "removable insulation jackets";

  return `High-performance ${kw} in ${place} for valves, pumps, turbines and industrial systems. Improve energy efficiency, reduce heat loss and increase operational safety with custom engineered solutions.`;
}

/* =====================================================
   🔥 PAGE PRIORITY (SEO AUTHORITY CONTROL LAYER)
===================================================== */

export function getIndexPriority({ type = "city", depth = 1 } = {}) {
  let base = 0.6;

  if (type === "country") base = 0.85;
  if (type === "city") base = 0.75;

  // deeper pages slightly weaker unless boosted later
  const depthPenalty = Math.max(0, (depth - 1) * 0.03);

  return Number((base - depthPenalty).toFixed(2));
}

/* =====================================================
   🔥 INTERNAL LINK SCORING ENGINE (IMPROVED)
===================================================== */

export function calculateInternalLinkScore({
  cityLinks = [],
  serviceLinks = [],
  productLinks = [],
  authorityBoost = 0,
}) {
  let score = 0;

  // weighted system (important upgrade)
  score += cityLinks.length * 2;
  score += serviceLinks.length * 3.5;
  score += productLinks.length * 3;

  // authority boost from ranking layer
  score += authorityBoost;

  return Math.min(score, 100);
}

/* =====================================================
   🔥 SCHEMA FLAGS (NO CHANGE - SAFE)
===================================================== */

export function getSchemaFlags({ hasFAQ, hasBreadcrumb, hasProduct }) {
  return {
    faq: hasFAQ ? "enabled" : "disabled",
    breadcrumb: hasBreadcrumb ? "enabled" : "disabled",
    product: hasProduct ? "enabled" : "disabled",
  };
}

/* =====================================================
   🔥 SERP SNIPPET GENERATOR (IMPROVED CTR CONTROL)
===================================================== */

export function buildSERPSnippet({ city, country, keyword }) {
  const place = city ? city.display : country?.name || "Industrial Sector";

  const kw = keyword || "industrial insulation";

  return {
    title: buildMetaTitle(city, country, keyword),
    description: buildMetaDescription(city, country, keyword),

    slug: city
      ? `/removable-insulation-jackets/${country.slug}/${city.name}`
      : `/removable-insulation-jackets/${country.slug}`,

    highlight: `Trusted supplier of ${kw} in ${place} for industrial energy efficiency systems`,
  };
}

/* =====================================================
   🔥 SEO AUTHORITY BOOST SIGNAL (NEW CORE LAYER)
   (used by internal link engine later)
===================================================== */

export function getPageAuthorityScore({ city, country, service }) {
  let score = 50;

  if (country?.slug) score += 15;
  if (city?.name) score += 10;

  // service depth (important pages)
  if (service?.featured) score += 10;
  if (service?.category === "core") score += 15;

  return Math.min(score, 100);
}

/* =====================================================
   🔥 KEYWORD INTENT BOOST (NEW AI SIGNAL)
===================================================== */

export function getKeywordIntentBoost(keyword = "") {
  const k = keyword.toLowerCase();

  if (k.includes("insulation")) return 1.4;
  if (k.includes("jacket")) return 1.3;
  if (k.includes("thermal")) return 1.25;
  if (k.includes("energy")) return 1.2;

  return 1.0;
}
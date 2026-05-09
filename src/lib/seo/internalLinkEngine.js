/* =====================================================
   🚀 INTERNAL LINK AI ENGINE (STEP 11 CORE)
   /home/shahrukh-eng/marketing-proj/src/lib/seo/internalLinkEngine.js
   Smart link distribution + ranking-aware injection
===================================================== */

import { buildContentLinks } from "./internalLinks";
import { calculateInternalLinkScore } from "./seoRankingLayer";

/* =====================================================
   🔥 LINK WEIGHT CONFIG (ANTI-SPAM CONTROL)
===================================================== */
const LINK_LIMITS = {
  city: 6,
  country: 10,
  blog: 8,
  default: 5,
};

/* =====================================================
   🔥 SMART LINK FILTER (PRIORITY CONTROL)
===================================================== */
function filterLinks(links, type) {
  const limit = LINK_LIMITS[type] || LINK_LIMITS.default;

  return [...links]
    .sort((a, b) => b.priority - a.priority)
    .slice(0, limit);
}

/* =====================================================
   🔥 ANCHOR VARIATION ENGINE (ANTI OVER-OPTIMIZATION)
===================================================== */
function varyAnchor(keyword) {
  const variations = [
    keyword,
    keyword.toLowerCase(),
    `best ${keyword}`,
    `${keyword} solutions`,
    `${keyword} system`,
  ];

  const index = keyword.length % variations.length;
  return variations[index];
}

/* =====================================================
   🔥 MAIN INTERNAL LINK INJECTOR (SMART VERSION)
===================================================== */
export function injectSmartInternalLinks(content, country, city = null) {
  if (!content || !country) return content;

  const { links } = buildContentLinks(country);

  const score = calculateInternalLinkScore({
    cityLinks: country.cities || [],
    serviceLinks: [],
    productLinks: [],
  });

  let updated = content;
  const used = new Set();

  const filtered = filterLinks(
    links,
    city ? "city" : "country"
  );

  filtered.forEach((link) => {
    if (used.has(link.keyword)) return;

    const anchor = varyAnchor(link.keyword);

    const regex = new RegExp(`\\b${escapeRegExp(link.keyword)}\\b`, "gi");

    updated = updated.replace(regex, (match) => {
      if (used.has(match.toLowerCase())) return match;

      used.add(match.toLowerCase());

      return `<a href="${link.url}" class="text-blue-600 underline" title="${anchor}">${match}</a>`;
    });
  });

  /* =====================================================
     🔥 OPTIONAL FOOTER LINK BOOST (HIGH VALUE PAGES ONLY)
  ===================================================== */
  if (score > 40) {
    const footerLinks = filtered.slice(0, 3);

    updated += `
<div class="mt-8 border-t pt-4">
  <p class="text-sm">
    Related: 
    ${footerLinks
      .map(
        (l) =>
          `<a href="${l.url}" class="text-blue-600 underline">${l.label}</a>`
      )
      .join(" | ")}
  </p>
</div>`;
  }

  return updated;
}

/* =====================================================
   🔥 REGEX SAFETY
===================================================== */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
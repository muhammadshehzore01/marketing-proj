/* /home/shahrukh-eng/marketing-proj/src/lib/seo/internalLinkEngine.js 
=====================================================
   🚀 INTERNAL LINK AI ENGINE (STEP 11 CORE - UPGRADED)
   Smart link distribution + ranking-aware injection
===================================================== */

import { buildContentLinks } from "./internalLinks";
import { calculateInternalLinkScore } from "./seoRankingLayer";

/* =====================================================
   🔥 LINK LIMITS (ANTI-SPAM CONTROL)
===================================================== */
const LINK_LIMITS = {
  city: 6,
  country: 10,
  service: 8,
  blog: 8,
  default: 5,
};

/* =====================================================
   🔥 LINK STRATEGY (PAGE TYPE CONTEXT)
===================================================== */
const linkStrategy = {
  country: ["city", "service"],
  city: ["country", "service"],
  service: ["city", "country"],
  blog: ["service", "country"],
};

/* =====================================================
   🔥 SMART LINK FILTER
===================================================== */
function filterLinks(links, type) {
  const limit = LINK_LIMITS[type] || LINK_LIMITS.default;

  return [...links]
    .sort((a, b) => (b.priority || 0) - (a.priority || 0))
    .slice(0, limit);
}

/* =====================================================
   🔥 ANCHOR VARIATION ENGINE
===================================================== */
function varyAnchor(keyword, seed = 0) {
  const variations = [
    keyword,
    keyword.toLowerCase(),
    `best ${keyword}`,
    `${keyword} solutions`,
    `${keyword} system`,
    `${keyword} services`,
  ];

  return variations[Math.abs(seed) % variations.length];
}

/* =====================================================
   🔥 MAIN INTERNAL LINK INJECTOR (UPGRADED)
===================================================== */
export function injectSmartInternalLinks(
  content,
  country,
  city = null,
  pageType = "country"
) {
  if (!content || !country) return content;

  const { links = [] } = buildContentLinks(country);

  const score = calculateInternalLinkScore({
    cityLinks: country.cities || [],
    serviceLinks: [],
    productLinks: [],
  });

  let updated = content;
  const usedKeywords = new Set();

  /* =====================================================
     🔥 FILTER BY PAGE CONTEXT
  ====================================================== */
  const allowedTypes = linkStrategy[pageType] || ["country"];

  const filtered = filterLinks(
    links.filter((l) => allowedTypes.includes(l.type)),
    pageType
  );

  /* =====================================================
     🔥 LINK INJECTION
  ====================================================== */
  filtered.forEach((link, i) => {
    if (!link?.keyword || !link?.url) return;

    const key = link.keyword.toLowerCase();
    if (usedKeywords.has(key)) return;

    const anchor = varyAnchor(link.keyword, i);

    const regex = new RegExp(`\\b${escapeRegExp(link.keyword)}\\b`, "gi");

    let replacedOnce = false;

    updated = updated.replace(regex, (match) => {
      if (replacedOnce) return match;

      replacedOnce = true;
      usedKeywords.add(key);

      return `<a href="${link.url}" class="text-blue-600 underline" title="${anchor}">${match}</a>`;
    });
  });

  /* =====================================================
     🔥 SMART FOOTER LINKS (GROUPED SEO CLUSTERS)
  ====================================================== */

  const threshold =
    pageType === "city" ? 30 : pageType === "service" ? 35 : 45;

  if (score >= threshold) {
    const footerLinks = filtered.slice(0, 6);

    const grouped = footerLinks.reduce((acc, l) => {
      const type = l.type || "other";
      if (!acc[type]) acc[type] = [];
      acc[type].push(l);
      return acc;
    }, {});

    updated += `
<div class="mt-8 border-t pt-4">
  <p class="text-sm font-semibold">Related Pages</p>

  ${Object.entries(grouped)
    .map(
      ([type, items]) => `
      <div class="mt-3">
        <span class="text-xs uppercase opacity-70">${type}</span>
        <div class="mt-1">
          ${items
            .map(
              (l) =>
                `<a href="${l.url}" class="text-blue-600 underline mr-2">${l.label || l.keyword}</a>`
            )
            .join(" ")}
        </div>
      </div>
    `
    )
    .join("")}
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
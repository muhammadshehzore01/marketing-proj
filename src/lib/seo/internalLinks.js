// /home/shahrukh-eng/marketing-proj/src/lib/seo/internalLinks.js
/* =====================================================
   🔥 PHASE 10: SEO AUTHORITY INTERNAL LINK SYSTEM (FINAL FIXED)
===================================================== */

import { ACTIVE_LOCATIONS } from "@/lib/data/locations";

/* =====================================================
   🔹 CORE STRUCTURE (SEO SAFE)
===================================================== */
export function buildInternalLinks(country) {
  if (!country) return null;

  return {
    countryLink: {
      url: `/removable-insulation-jackets/${country.slug}`,
      type: "country",
      priority: 1.0,
    },

    cityLinks: (country.cities || []).map((c) => ({
      name: c.display,
      url: `/removable-insulation-jackets/${country.slug}/${c.name}`,
      type: "city",
      priority: 0.9,
    })),

    serviceLinks: [
      {
        name: "Valve Insulation Jackets",
        url: "/services/valve-insulation",
        keywords: ["valve", "valves", "valve insulation"],
        type: "service",
        priority: 0.95,
      },
      {
        name: "Turbine Insulation",
        url: "/services/turbine-insulation",
        keywords: ["turbine", "turbines"],
        type: "service",
        priority: 0.95,
      },
      {
        name: "Exhaust Insulation",
        url: "/services/exhaust-insulation",
        keywords: ["exhaust", "silencer", "exhaust system"],
        type: "service",
        priority: 0.9,
      },
    ],

    productLinks: [
      {
        name: "Generator Insulation Jackets",
        url: "/products/generator-insulation",
        keywords: ["generator", "generators"],
        type: "product",
        priority: 0.85,
      },
      {
        name: "Thermal Covers",
        url: "/products/thermal-covers",
        keywords: ["thermal cover", "insulation cover", "thermal"],
        type: "product",
        priority: 0.85,
      },
    ],

    blogLinks: [
      {
        name: "Benefits of Insulation Jackets",
        url: "/blogs/benefits-of-insulation",
        keywords: ["benefits", "efficiency", "energy efficiency"],
        type: "blog",
        priority: 0.7,
      },
      {
        name: "Energy Saving Guide",
        url: "/blogs/energy-saving-industrial",
        keywords: ["energy", "saving", "energy saving"],
        type: "blog",
        priority: 0.7,
      },
    ],
  };
}

/* =====================================================
   🔥 CONTENT LINK BUILDER (SEO SIGNAL ENGINE)
===================================================== */
export function buildContentLinks(country) {
  const data = buildInternalLinks(country);

  const flatten = (items = []) =>
    items.flatMap((item) =>
      (item.keywords || []).map((kw) => ({
        keyword: kw.toLowerCase(),
        url: item.url,
        label: item.name,
        type: item.type,
        priority: item.priority,
      }))
    );

  return {
    links: [
      ...flatten(data.serviceLinks),
      ...flatten(data.productLinks),
      ...flatten(data.blogLinks),
    ],
  };
}

/* =====================================================
   🔥 GEO LINK SYSTEM (SEO CLUSTERING)
===================================================== */
export function buildGeoLinks(country, city = null) {
  const data = buildInternalLinks(country);

  return {
    country: data.countryLink,
    cities: data.cityLinks,
    relatedCities: (country.cities || [])
      .filter((c) => !city || c.name !== city.name)
      .slice(0, 4)
      .map((c) => ({
        name: c.display,
        url: `/removable-insulation-jackets/${country.slug}/${c.name}`,
      })),
  };
}

/* =====================================================
   🔥 SAFE SEO LINK INJECTION (FINAL FIXED VERSION)
===================================================== */
export function injectInternalLinks(content, country) {
  if (!content || !country) return content;

  const { links } = buildContentLinks(country);

  let updated = content;
  const used = new Set();

  // priority-based SEO injection (important for ranking flow)
  const sortedLinks = [...links].sort((a, b) => b.priority - a.priority);

  sortedLinks.forEach((link) => {
    if (!link.keyword || link.keyword.length < 3) return;
    if (used.has(link.keyword)) return;

    const regex = new RegExp(`(${escapeRegExp(link.keyword)})`, "gi");

    updated = updated.replace(regex, (match) => {
      used.add(link.keyword);

      return `<a href="${link.url}" class="text-blue-600 underline">${match}</a>`;
    });
  });

  return updated;
}

/* =====================================================
   🔹 REGEX SAFETY
===================================================== */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/* =====================================================
   🔧 COMPATIBILITY WRAPPER
===================================================== */
export function getCountryLinks(country) {
  return buildInternalLinks(country);
}
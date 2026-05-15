/*/home/shahrukh-eng/marketing-proj/src/lib/seo/engine/europeSeoEngine.js
 =====================================================
🔥 SEO ENGINE (PRODUCTION STABLE FIX)
===================================================== */

import { ACTIVE_LOCATIONS } from "@/lib/data/locations";

import {
  getRotatedKeyword,
  buildCountryRelatedKeywords,
  buildCityRelatedKeywords,
} from "@/lib/data/shared/keywordPool";

/* ================= CORE ================= */
import { getSeoSeed } from "./shared/seedEngine";
import { buildFAQ } from "./rankingBoost";
import { generateBenefits } from "./shared/benefitsEngine";

import {
  generateCountryIntro,
  generateCityIntro,
} from "./shared/introSeoEngine";

import {
  buildMetaTitle,
  buildMetaDescription,
  getIndexPriority,
} from "./seoRankingLayer";

import { generateCountryTitle } from "./country/countryTitleEngine";
import { generateCountryGrowthSection } from "./country/countryGrowthEngine";
import { generateCityTitle } from "./city/cityTitleEngine";

import {
  generateCountryHero,
  generateCityHero,
} from "./shared/heroEngine";

import { buildGeoServiceSeo } from "./shared/serviceGeoEngine";

/* =====================================================
   CLEAN TEXT
===================================================== */
function cleanText(text) {
  if (!text) return "";
  return text.replace(/<[^>]*>/g, "").trim();
}

/* =====================================================
   DATA POOLS
===================================================== */

const industryMap = {
  germany: ["automotive engineering", "industrial machinery", "precision manufacturing"],
  usa: ["automation systems", "energy infrastructure", "advanced manufacturing"],
  uae: ["oil refining", "petrochemical processing", "industrial energy systems"],
  france: ["aerospace manufacturing", "chemical processing", "industrial design"],
  default: ["manufacturing", "industrial processing", "energy systems"],
};

const benefitPool = [
  "improve operational efficiency",
  "reduce energy waste",
  "increase industrial safety",
  "optimize production performance",
  "extend equipment lifespan",
  "enhance thermal insulation stability",
  "reduce downtime in maintenance cycles",
];

const equipmentPool = [
  "valves",
  "pumps",
  "turbines",
  "boilers",
  "heat exchangers",
  "compressors",
  "industrial pipelines",
  "heat reactors",
];

/* =====================================================
   PICKER (ANTI DUPLICATION)
===================================================== */
function pick(arr, seed, offset = 0) {
  const s =
    typeof seed === "number"
      ? seed
      : seed.toString().split("").reduce((a, b) => a + b.charCodeAt(0), 0);

  return arr[Math.abs(s + offset) % arr.length];
}

/* =====================================================
   INDUSTRY
===================================================== */
function getIndustry(country, seed) {
  const key = country.slug?.toLowerCase();
  const list = industryMap[key] || industryMap.default;
  return list[Math.abs(seed) % list.length];
}

/* =====================================================
   OVERVIEW TEXT
===================================================== */
function buildOverviewText(entity, countryName, industry, equipment, benefit, seed) {
  const variants = [
    `${entity} is developing strong industrial infrastructure focused on ${industry}.`,
    `Industrial systems in ${entity} rely heavily on ${equipment} to ${benefit}.`,
    `${entity} plays a critical role in ${countryName}'s industrial ecosystem.`,
    `Manufacturing and energy operations in ${entity} are optimized using modern thermal systems.`,
    `Industrial facilities across ${entity} require advanced insulation for safety and efficiency.`,
  ];

  return variants[Math.abs(seed) % variants.length];
}

/* =====================================================
   TITLE HELPERS
===================================================== */

function getCountryOverviewTitle(country, industry, seed) {
  const titles = [
    `Industrial Overview of ${country.name}`,
    `${country.name} Industrial Infrastructure Report`,
    `${industry} Sector in ${country.name}`,
    `${country.name} Energy & Thermal Engineering Overview`,
  ];

  return titles[Math.abs(seed) % titles.length];
}

function getCityOverviewTitle(city, country, industry, seed) {
  const titles = [
    `${city.display} Industrial Overview`,
    `${industry} Industry in ${city.display}, ${country.name}`,
    `${city.display} Energy Systems & Thermal Engineering`,
    `Industrial Performance in ${city.display}`,
  ];

  return titles[Math.abs(seed) % titles.length];
}

/* =====================================================
   ENGINE
===================================================== */

export const europeSeoEngine = {

  /* ================= COUNTRY ================= */
  generateCountry(country) {
    if (!country) return null;

    const { seed, keyword } = getSeoSeed(
      `${country.slug}-country-${country.cities?.length || 0}`
    );

    const industry = getIndustry(country, seed);
    const equipment = pick(equipmentPool, seed, 2);
    const benefit = pick(benefitPool, seed, 3);

    const growth = generateCountryGrowthSection(country, keyword);

    const faq = (buildFAQ(country) || []).map((f) => ({
      question: cleanText(f?.question),
      answer: cleanText(f?.answer),
    }));

    const overviewText = buildOverviewText(
      country.name,
      country.name,
      industry,
      equipment,
      benefit,
      seed
    );

    return {
      type: "country",

      hero: generateCountryHero(country),
      intro: generateCountryIntro(country),

      title: generateCountryTitle(keyword, country, seed),

      relatedKeywords: buildCountryRelatedKeywords(country),

      overview: {
        title: getCountryOverviewTitle(country, industry, seed),
        content: [overviewText],
      },

      benefits: generateBenefits(country, keyword, "country"),

      /* ✅ FIXED: NO BROKEN IMPORT */
      serviceGeo: buildGeoServiceSeo(null, country, "country"),

      growth,
      industries: country.industries || [],
      cities: country.cities || [],

      compliance: `${country.name} follows industrial safety and energy regulations.`,
      export: `We supply removable insulation systems to ${country.name}.`,

      faq,
    };
  },

  /* ================= CITY ================= */
  generateCity(countrySlug, citySlug) {
    const country = ACTIVE_LOCATIONS[countrySlug];
    if (!country) return null;

    const city =
      country.cities?.find((c) => c.name === citySlug) || {
        name: citySlug,
        display: citySlug,
      };

    const { seed, keyword } = getSeoSeed(
      `${country.slug}-${citySlug}-city-${country.cities?.length || 0}`
    );

    const industry = getIndustry(country, seed);
    const equipment = pick(equipmentPool, seed, 2);
    const benefit = pick(benefitPool, seed, 3);

    const faq = (buildFAQ(country, city) || []).map((f) => ({
      question: cleanText(f?.question),
      answer: cleanText(f?.answer),
    }));

    const overviewText = buildOverviewText(
      city.display,
      country.name,
      industry,
      equipment,
      benefit,
      seed
    );

    return {
      type: "city",

      hero: generateCityHero(city, country),
      intro: generateCityIntro(city, country),

      title: generateCityTitle(keyword, city, country),

      relatedKeywords: buildCityRelatedKeywords(city, country),

      overview: {
        title: getCityOverviewTitle(city, country, industry, seed),
        content: [overviewText],
      },

      benefits: generateBenefits(city, keyword, "city"),

      /* ✅ UNIQUE CITY GEO SEO */
      serviceGeo: buildGeoServiceSeo(city, country, "city"),

      faq,
    };
  },

  /* ================= META ================= */
  metaCountry(country) {
    return {
      title: buildMetaTitle(null, country) || country?.name,
      description: buildMetaDescription(null, country) || "",
      priority: getIndexPriority({ type: "country" }),
    };
  },

  metaCity(city, country) {
    return {
      title: buildMetaTitle(city, country) || city?.display,
      description: buildMetaDescription(city, country) || "",
      priority: getIndexPriority({ type: "city", depth: 2 }),
    };
  },
};
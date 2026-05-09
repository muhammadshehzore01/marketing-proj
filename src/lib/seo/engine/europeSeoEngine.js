/* =====================================================
🔥 SEO ENGINE (IMPROVED + NON-REPETITIVE + PRODUCTION FIX)
===================================================== */

import { ACTIVE_LOCATIONS } from "@/lib/data/locations";

/* ================= CORE ================= */
import { getSeoSeed } from "./shared/seedEngine";
import { buildFAQ } from "./rankingBoost";

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

import { getServiceGeoContent } from "./shared/serviceGeoEngine";

/* ================= CLEAN ================= */
function cleanText(text) {
  if (!text) return "";
  return text.replace(/<[^>]*>/g, "").trim();
}

/* ================= CONTEXTUAL DATA ================= */

const industryMap = {
  germany: [
    "automotive engineering",
    "industrial machinery",
    "precision manufacturing",
  ],
  usa: [
    "automation systems",
    "energy infrastructure",
    "advanced manufacturing",
  ],
  uae: [
    "oil refining",
    "petrochemical processing",
    "industrial energy systems",
  ],
  france: [
    "aerospace manufacturing",
    "chemical processing",
    "industrial design",
  ],
  default: [
    "manufacturing",
    "industrial processing",
    "energy systems",
  ],
};

const benefitPool = [
  "improve operational efficiency",
  "reduce energy waste",
  "increase industrial safety",
  "optimize production performance",
];

const equipmentPool = [
  "valves",
  "pumps",
  "turbines",
  "boilers",
  "heat exchangers",
];

/* ================= HELPERS ================= */

function pick(arr, seed, offset = 0) {
  return arr[(seed + offset) % arr.length];
}

function getIndustry(country, seed) {
  const list =
    industryMap[country.slug?.toLowerCase()] || industryMap.default;

  return list[seed % list.length];
}

/* =====================================================
🔥 ENGINE
===================================================== */

export const europeSeoEngine = {
  /* ================= COUNTRY ================= */
  generateCountry(country) {
    if (!country) return null;

    const { seed, keyword } = getSeoSeed(
      `${country.slug}-v2-${country.name.length}`,
      "country"
    );

    let growth = null;

    try {
      growth = generateCountryGrowthSection(country, seed);
    } catch {
      growth = {
        title: `Industrial Growth in ${country.name}`,
        subtitle: "",
        content: [
          `${country.name} has a strong and expanding industrial base.`,
        ],
      };
    }

    const faq = (buildFAQ(country) || []).map((f) => ({
      question: cleanText(f?.question),
      answer: cleanText(f?.answer),
    }));

    const industry = getIndustry(country, seed);
    const equipment = pick(equipmentPool, seed, 2);
    const benefit = pick(benefitPool, seed, 3);

    const contentTone = seed % 3;

    let introVariation = "";

    if (contentTone === 0) {
      introVariation = `${country.name} is a key hub for ${industry}, where modern insulation systems enhance efficiency.`;
    } else if (contentTone === 1) {
      introVariation = `Industrial sectors in ${country.name} rely heavily on ${equipment} systems to ${benefit}.`;
    } else {
      introVariation = `In ${country.name}, advanced engineering solutions support ${industry} operations at scale.`;
    }

    return {
      type: "country",

      hero: generateCountryHero(country),
      intro: generateCountryIntro(country),

      // FIXED
      title: generateCountryTitle(keyword, country, seed),

      overview: {
        content: [introVariation],
      },

      serviceGeo: getServiceGeoContent(null, country),

      growth,

      industries: country.industries || [],
      cities: country.cities || [],

      compliance: `${country.name} follows industrial regulations.`,
      export: `We supply systems to ${country.name}.`,

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
      `${citySlug}-${country.slug}-v2`,
      "city"
    );

    const faq = (buildFAQ(country, city) || []).map((f) => ({
      question: cleanText(f?.question),
      answer: cleanText(f?.answer),
    }));

    const industry = getIndustry(country, seed);
    const equipment = pick(equipmentPool, seed, 2);
    const benefit = pick(benefitPool, seed, 3);

    const tone = seed % 3;

    let overviewText = "";

    if (tone === 0) {
      overviewText = `${city.display} is a growing industrial zone in ${country.name}, focused on ${industry}.`;
    } else if (tone === 1) {
      overviewText = `Industrial systems in ${city.display} rely on ${equipment} to ${benefit}.`;
    } else {
      overviewText = `${city.display} plays a key role in ${country.name}'s ${industry} ecosystem.`;
    }

    return {
      type: "city",

      hero: generateCityHero(city, country),
      intro: generateCityIntro(city, country),

      // FIXED
      title: generateCityTitle(keyword, city, country),

      overview: {
        title: `Industrial Ecosystem of ${city.display}`,
        content: overviewText,
      },

      serviceGeo: getServiceGeoContent(city, country),

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
      priority: getIndexPriority({
        type: "city",
        depth: 2,
      }),
    };
  },
};
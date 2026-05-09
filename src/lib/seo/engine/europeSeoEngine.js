/* =====================================================
🔥 SEO ENGINE (PRODUCTION FIXED)
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
import { generateCountryOverview } from "./country/countryOverviewEngine";
import { generateCountryGrowthSection } from "./country/countryGrowthEngine";

import { generateCityTitle } from "./city/cityTitleEngine";
import { generateCityOverview } from "./city/cityOverviewEngine";

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

/* =====================================================
🔥 ENGINE
===================================================== */

export const europeSeoEngine = {

  /* ================= COUNTRY ================= */
  generateCountry(country) {
    if (!country) return null;

    const { seed, keyword } = getSeoSeed(country.slug, "country");

    let growth = null;

    try {
      growth = generateCountryGrowthSection(country, keyword);
    } catch {
      growth = {
        title: `Industrial Growth in ${country.name}`,
        subtitle: "",
        content: [`${country.name} has growing industrial infrastructure.`],
      };
    }

    const faq = (buildFAQ(country) || []).map((f) => ({
      question: cleanText(f?.question),
      answer: cleanText(f?.answer),
    }));

    return {
      type: "country",

      hero: generateCountryHero(country),
      intro: generateCountryIntro(country),

      title: generateCountryTitle(keyword, country, seed),
      overview: generateCountryOverview(country, keyword, seed),

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

    const { seed, keyword } = getSeoSeed(citySlug, "city");

    const faq = (buildFAQ(country, city) || []).map((f) => ({
      question: cleanText(f?.question),
      answer: cleanText(f?.answer),
    }));

    return {
      type: "city",

      hero: generateCityHero(city, country),
      intro: generateCityIntro(city, country),

      title: generateCityTitle(keyword, city, country),
      overview:
        generateCityOverview(city, country, keyword, seed) || {
          title: `Industrial Ecosystem of ${city.display}`,
          content: "",
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
      priority: getIndexPriority({ type: "city", depth: 2 }),
    };
  },
};
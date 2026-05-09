// /home/shahrukh-eng/marketing-proj/src/lib/data/cities/cityOverviews.js
/* =====================================================
🌍 HYBRID CITY OVERVIEW SYSTEM (50% CUSTOM + 50% AUTO)
===================================================== */

import {
  getRotatedKeyword,
  cityNarratives,
} from "../../seo/engine/seoVariationLayer";
import { buildUniquenessSeed } from "../shared/uniqueness";

/* =====================================================
🔥 AUTO CITY GENERATOR (50%)
===================================================== */
function generateAutoCity(city, country, seed) {
  const keyword = getRotatedKeyword(seed);

  const narrative = cityNarratives?.[city.name] || {};

  return {
    title: `${keyword} industrial solutions in ${city.display}, ${country.name}`,

    content: `${city.display} is an important industrial hub in ${country.name}, supporting manufacturing, energy, and engineering sectors. Industrial systems such as ${
      narrative.equipment?.[0] || "industrial machinery"
    } operate under high thermal pressure where ${
      narrative.problem || "thermal inefficiency"
    } becomes a key operational challenge. The growing demand for ${keyword} solutions is driven by energy efficiency requirements, safety compliance, and performance optimization across modern industrial infrastructure.`,
  };
}

/* =====================================================
🔥 CUSTOM CITY CONTENT (50% CONTROL LAYER)
===================================================== */
export const customCityOverviews = {
  berlin: {
    image: "/img/cities/berlin.jpg",
    title: "Industrial Insulation Systems in Berlin Germany",
    content:
      "Berlin is a major industrial and innovation hub in Germany, supporting automation, smart manufacturing, and advanced engineering industries.",
  },

  hamburg: {
    image: "/img/cities/hamburg.jpg",
    title: "Marine Engineering Insulation Solutions in Hamburg",
    content:
      "Hamburg is one of Europe’s leading marine engineering and logistics centers with strong port-based industrial infrastructure.",
  },

  munich: {
    image: "/img/cities/munich.jpg",
    title: "Automotive Thermal Insulation Systems in Munich",
    content:
      "Munich is a core automotive engineering hub where precision manufacturing and thermal efficiency play a critical role.",
  },

  paris: {
    image: "/img/cities/paris.jpg",
    title: "Industrial Energy Systems in Paris France",
    content:
      "Paris supports energy systems, urban infrastructure, and industrial processing facilities requiring advanced thermal insulation solutions.",
  },

  london: {
    image: "/img/cities/london.jpg",
    title: "Industrial Insulation Systems in London UK",
    content:
      "London is a major infrastructure and energy hub where industrial insulation is widely used for power and processing systems.",
  },
};

/* =====================================================
🔥 FINAL HYBRID EXPORT FUNCTION (MAIN SYSTEM)
===================================================== */
export function generateCityOverview(city, country) {
  if (!city || !country) return null;

  
  const seed = buildUniquenessSeed(country.slug, city.name);

  const auto = generateAutoCity(city, country, seed);
  const custom = customCityOverviews?.[city.name];

  /* ================= HYBRID MERGE ================= */
  if (custom) {
    return {
      image: custom.image || `/img/cities/${city.name}.jpg`,

      title: `${custom.title} | ${auto.title}`,

      content: `${custom.content} ${auto.content}`,
    };
  }

  /* ================= AUTO ONLY FALLBACK ================= */
  return {
    image: `/img/cities/${city.name}.jpg`,
    title: auto.title,
    content: auto.content,
  };
}
/* =====================================================
🌍 HYBRID COUNTRY OVERVIEW SYSTEM (50% + 50%)
===================================================== */

import { getRotatedKeyword } from "../shared/keywordPool";
import { cityNarratives } from "../cities/cityNarratives";
import { buildUniquenessSeed } from "../shared/uniqueness";

/* =====================================================
🔥 AUTO GENERATOR (50%)
===================================================== */
function generateAuto(country, seed) {
  const keyword = getRotatedKeyword(seed);

  const narrative = cityNarratives?.[country.slug] || {};

  return {
    title: `${keyword} industrial systems in ${country.name}`,

    content: `${country.name} is a major European industrial hub with strong presence in manufacturing, energy, and engineering sectors. The demand for ${keyword} systems is increasing due to energy efficiency requirements and industrial safety standards. Key challenges include ${
      narrative.problem || "thermal inefficiency in operations"
    } across heavy industrial environments.`,
  };
}

/* =====================================================
🔥 CUSTOM CONTENT (YOUR CONTROL)
===================================================== */
export const customCountryOverviews = {
  germany: {
    image: "/img/countries/germany.jpg",
    title:
      "Industrial Insulation Systems in Germany for High-Performance Manufacturing",
    content:
      "Germany is one of the most advanced industrial hubs in Europe, known for precision engineering, automotive manufacturing, and energy-efficient production systems.",
  },

  france: {
    image: "/img/countries/france.jpg",
    title:
      "Advanced Thermal Insulation Solutions for Industrial Systems in France",
    content:
      "France has a strong industrial base in energy, nuclear power, and refinery operations.",
  },
};

/* =====================================================
🔥 FINAL HYBRID EXPORT
===================================================== */
export function generateCountryOverview(country) {
  if (!country) return null;

  const seed = buildUniquenessSeed(country.slug, "country");
  const auto = generateAuto(country, seed);
  const custom = customCountryOverviews[country.slug];

  if (custom) {
    return {
      image: custom.image || `/img/countries/${country.slug}.jpg`,
      title: `${custom.title} | ${auto.title}`,
      content: `${custom.content} ${auto.content}`,
    };
  }

  return {
    image: `/img/countries/${country.slug}.jpg`,
    title: auto.title,
    content: auto.content,
  };
}
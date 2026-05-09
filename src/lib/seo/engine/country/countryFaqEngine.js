// marketing-proj/src/lib/seo/engine/country/countryFaqEngine.js

import { generateCityEnterprise } from "@/lib/seo/engine/semanticContentEngine";

export function generateCityOverview(city, country, keyword, seed) {

  const auto =
    `${city.display} is an important industrial hub in ${country.name}, supporting manufacturing, energy, and engineering infrastructure where ${keyword} solutions are widely used.`;

  const semantic = generateCityEnterprise({
    city,
    country,
    seed,
  });

  return {
    title: `Industrial Ecosystem of ${city.display}`,
    content: `${auto} ${semantic || ""}`,
  };
}
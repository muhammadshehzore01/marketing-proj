// /home/shahrukh-eng/marketing-proj/src/lib/seo/engine/country/countryOverviewEngine.js

import { generateCountryEnterprise } from "@/lib/seo/engine/semanticContentEngine";

export function generateCountryOverview(country, keyword, seed) {

  const auto = `${country.name} is a major European industrial hub where manufacturing, energy, and engineering sectors rely on advanced ${keyword} systems to improve efficiency and reduce thermal loss.`;

  const semantic = generateCountryEnterprise({
    country,
    seed,
  });

  return {
    title: `${country.name} Industrial Insulation Systems Overview`,
    content: `${auto} ${semantic || ""}`,
  };
}
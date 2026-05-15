// /home/shahrukh-eng/marketing-proj/src/lib/seo/engine/shared/applicationLinksEngine.js

import { applications } from "@/lib/data/applications";
import { buildUniquenessSeed } from "@/lib/data/shared/uniqueness";
import {
  buildCountryRelatedKeywords,
  buildCityRelatedKeywords,
} from "@/lib/data/shared/keywordPool";

function capitalizeWords(text = "") {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

function pick(arr = [], seed = 0, offset = 0) {
  if (!arr.length) return "";
  return arr[Math.abs(seed + offset) % arr.length];
}

const countryIndustryFocus = {
  germany: "manufacturing, automotive, chemical processing, and energy plants",
  france: "energy, refinery, aerospace, and manufacturing facilities",
  "united-kingdom":
    "oil & gas, marine, power generation, and engineering industries",
  italy: "manufacturing, automotive, and industrial engineering plants",
  spain: "energy, refinery, and manufacturing operations",
  netherlands: "chemical, marine, oil & gas, and port-based industries",
  belgium: "chemical processing and industrial manufacturing facilities",
  sweden: "energy, marine, and sustainable manufacturing plants",
  norway: "oil & gas, offshore energy, and marine industries",
  denmark: "wind energy and power system industries",
};

const ctaVariants = [
  "Explore insulation applications suitable for high-temperature industrial equipment.",
  "Review application-specific insulation covers for energy saving and safer maintenance.",
  "Find removable insulation solutions for valves, flanges, pumps, turbines, generators, compressors, and piping.",
  "Compare thermal insulation applications designed to reduce heat loss and operating cost.",
];

export function buildApplicationLinksSeo({ country, city = null }) {
  if (!country?.slug) return null;

  const seed = buildUniquenessSeed(country.slug, city?.name || "country");

  const keywords = city
    ? buildCityRelatedKeywords(city, country)
    : buildCountryRelatedKeywords(country);

  const keyword = capitalizeWords(
    pick(keywords, seed, city ? 4 : 3) ||
      "Industrial Insulation Applications"
  );

  const location = city
    ? `${city.display}, ${country.name}`
    : country.name;

  const industryFocus =
    countryIndustryFocus[country.slug] ||
    country.industries?.join(", ") ||
    "industrial manufacturing and energy systems";

  const featuredApplications = [...applications]
    .sort((a, b) => {
      const aScore = (a.slug.length + seed) % 19;
      const bScore = (b.slug.length + seed) % 19;
      return aScore - bScore;
    })
    .slice(0, 8);

  return {
    title: city
      ? `${keyword} for Industrial Equipment in ${city.display}`
      : `${keyword} Applications Across ${country.name}`,

    description: city
      ? `Industrial facilities in ${location} use application-specific removable insulation jackets for valves, flanges, pumps, turbines, generators, compressors, plastic extruders, and piping systems. These thermal covers help reduce heat loss, improve worker safety, lower energy cost, and support easy maintenance access in ${industryFocus}.`
      : `Across ${location}, industries such as ${industryFocus} require application-specific removable insulation jackets to reduce heat loss, improve energy efficiency, protect workers from hot surfaces, and maintain reliable access for inspection and maintenance.`,

    buttonText: "View All Applications",
    ctaText: pick(ctaVariants, seed, 2),
    featuredApplications,
  };
}
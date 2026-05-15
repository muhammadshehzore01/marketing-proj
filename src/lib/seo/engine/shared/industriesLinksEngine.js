// /home/shahrukh-eng/marketing-proj/src/lib/seo/engine/shared/industriesLinksEngine.js
// /home/shahrukh-eng/marketing-proj/src/lib/seo/engine/shared/industriesLinksEngine.js

import { industries } from "@/lib/data/industries";
import { buildUniquenessSeed } from "@/lib/data/shared/uniqueness";

function pick(arr = [], seed = 0, offset = 0) {
  if (!arr.length) return "";
  return arr[Math.abs(seed + offset) % arr.length];
}

const countryIndustryFocus = {
  germany: "manufacturing, automotive, chemical processing, and energy plants",
  france: "energy, refineries, aerospace, and manufacturing sectors",
  "united-kingdom":
    "oil & gas, marine, power generation, and engineering industries",
  italy: "manufacturing, automotive, and industrial engineering sectors",
  spain: "energy, refinery, and manufacturing operations",
  netherlands: "chemical, marine, oil & gas, and port-based industries",
  belgium: "chemical processing and industrial manufacturing facilities",
  sweden: "energy, marine, and sustainable manufacturing plants",
  norway: "oil & gas, offshore energy, and marine industries",
  denmark: "wind energy and power system industries",
};

const labelVariants = [
  "Industries We Serve",
  "Industrial Sectors We Support",
  "Thermal Insulation for Industries",
  "Energy Saving Solutions by Industry",
];

const ctaVariants = [
  "Explore industry-specific insulation solutions designed for energy saving, safety, and maintenance access.",
  "Review how removable insulation covers support high-temperature equipment across industrial sectors.",
  "Find thermal insulation applications for plants that need heat loss reduction and operating cost control.",
  "Compare industry-focused insulation solutions for valves, pumps, turbines, generators, compressors, and piping.",
];

export function buildIndustriesLinksSeo({ country, city = null }) {
  if (!country?.slug) return null;

  const seed = buildUniquenessSeed(country.slug, city?.name || "country");

  const location = city
    ? `${city.display}, ${country.name}`
    : country.name;

  const industryFocus =
    countryIndustryFocus[country.slug] ||
    country.industries?.join(", ") ||
    "industrial manufacturing and energy systems";

  const featuredIndustries = [...industries]
    .sort((a, b) => {
      const aScore = (a.slug.length + seed) % 23;
      const bScore = (b.slug.length + seed) % 23;
      return aScore - bScore;
    })
    .slice(0, 10);

  return {
    label: city
      ? `${pick(labelVariants, seed, 1)} in ${city.display}`
      : `${pick(labelVariants, seed, 1)} in ${country.name}`,

    title: city
      ? `Industrial Insulation Solutions for ${city.display} Industries`
      : `Industrial Thermal Insulation Solutions Across ${country.name}`,

    description: city
      ? `Industrial facilities in ${location} require removable insulation covers for high-temperature equipment used in ${industryFocus}. Our thermal insulation jackets help reduce heat loss, improve worker safety, lower energy cost, and support easy maintenance access for valves, pumps, turbines, generators, compressors, piping, and process equipment.`
      : `Across ${location}, industries such as ${industryFocus} use removable thermal insulation covers to improve energy efficiency, reduce heat loss, protect workers from hot surfaces, and maintain reliable access to critical industrial equipment.`,

    ctaText: pick(ctaVariants, seed, 2),

    buttonText: "View All Industries",

    featuredIndustries,
  };
}
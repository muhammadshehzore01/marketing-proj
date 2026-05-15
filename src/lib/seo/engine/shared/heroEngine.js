// marketing-proj/src/lib/seo/engine/shared/heroEngine.js
// marketing-proj/src/lib/seo/engine/shared/heroEngine.js

import { getSeoSeed } from "./seedEngine";
import {
  buildCountryRelatedKeywords,
  buildCityRelatedKeywords,
} from "@/lib/data/shared/keywordPool";

function clean(text) {
  return text?.replace(/\s+/g, " ").trim() || "";
}

function pick(arr, seed, offset = 0) {
  if (!arr?.length) return "";
  const index = Math.abs(seed + offset) % arr.length;
  return arr[index];
}

const countryIndustryMap = {
  germany: ["automotive engineering", "precision manufacturing", "industrial robotics"],
  france: ["chemical processing", "energy systems", "industrial manufacturing"],
  italy: ["industrial automation", "machinery production", "thermal engineering"],
  spain: ["renewable energy", "cement production", "heavy manufacturing"],
  netherlands: ["marine engineering", "chemical industries", "process automation"],
  belgium: ["industrial processing", "refinery systems", "production facilities"],
  sweden: ["green energy", "advanced manufacturing", "thermal systems"],
  norway: ["oil and gas", "offshore engineering", "energy infrastructure"],
  denmark: ["wind energy", "power generation", "industrial equipment"],
  "united-kingdom": ["oil and gas", "marine engineering", "power generation"],
  default: ["industrial manufacturing", "energy systems", "process engineering"],
};

const equipmentMap = {
  "automotive engineering": ["assembly lines", "press systems", "robotic cells"],
  "precision manufacturing": ["machines", "thermal chambers", "production units"],
  "industrial robotics": ["robotic systems", "control units", "automation lines"],
  "chemical processing": ["reactors", "pipelines", "storage tanks"],
  "energy systems": ["heat exchangers", "boilers", "turbines"],
  "industrial automation": ["valves", "process equipment", "control systems"],
  "renewable energy": ["energy units", "turbines", "thermal modules"],
  "marine engineering": ["pipe systems", "engine units", "marine valves"],
  "oil and gas": ["valves", "refinery units", "pipelines"],
  "wind energy": ["turbines", "gearboxes", "power units"],
  "power generation": ["turbines", "generators", "steam systems"],
  default: ["industrial equipment", "process systems", "critical assets"],
};

const benefits = [
  "reduce heat loss",
  "improve workplace safety",
  "increase operational efficiency",
  "lower energy costs",
  "ensure thermal stability",
  "minimize maintenance downtime",
  "protect critical equipment",
];

const subtitleTemplates = [
  (country, keyword, ind, eq, ben) =>
    `${country} industries use ${keyword} for ${eq} in ${ind} to ${ben}, improve safety, and support energy-efficient plant operation.`,

  (country, keyword, ind, eq, ben) =>
    `Across ${country}, ${keyword} help protect ${eq}, reduce thermal loss, and improve maintenance access for ${ind} facilities.`,

  (country, keyword, ind, eq, ben) =>
    `${keyword} in ${country} are engineered for ${ind} operations where ${eq} require reliable heat protection to ${ben}.`,

  (country, keyword, ind, eq, ben) =>
    `Industrial buyers in ${country} use custom ${keyword} to protect ${eq}, lower operating costs, and improve thermal performance across ${ind}.`,
];

function pickPrimaryKeyword(keywords = [], seed = 0, fallback = "") {
  if (!keywords.length) return fallback;
  return pick(keywords, seed, 5) || fallback;
}

export function generateCountryHero(country) {
  if (!country) return null;

  const { seed } = getSeoSeed(
    `hero-country-${country.slug}-${country.name}`,
    "hero-country"
  );

  const keywords = buildCountryRelatedKeywords(country);
  const primaryKeyword = pickPrimaryKeyword(
    keywords,
    seed,
    `Industrial Insulation Jackets in ${country.name}`
  );

  const industries =
    countryIndustryMap[country.slug?.toLowerCase()] ||
    countryIndustryMap.default;

  const industry = pick(industries, seed, 1);
  const eq = pick(equipmentMap[industry] || equipmentMap.default, seed, 2);
  const ben = pick(benefits, seed, 3);
  const subtitleFn = pick(subtitleTemplates, seed);

  return {
    title: clean(primaryKeyword),
    overview: {
      content: [
        clean(subtitleFn(country.name, primaryKeyword, industry, eq, ben)),
      ],
    },
    country: {
      slug: country.slug,
      name: country.name,
    },
    city: null,
  };
}

export function generateCityHero(city, country) {
  if (!city || !country) return null;

  const { seed } = getSeoSeed(
    `hero-city-${country.slug}-${city.name}-${city.display}`,
    "hero-city"
  );

  const keywords = buildCityRelatedKeywords(city, country);
  const primaryKeyword = pickPrimaryKeyword(
    keywords,
    seed,
    `Industrial Insulation Jackets in ${city.display}, ${country.name}`
  );

  const industries =
    countryIndustryMap[country.slug?.toLowerCase()] ||
    countryIndustryMap.default;

  const industry = pick(industries, seed, 1);
  const eq = pick(equipmentMap[industry] || equipmentMap.default, seed, 2);
  const ben = pick(benefits, seed, 3);

  const subtitleVariants = [
    `${primaryKeyword} are used by industrial facilities in ${city.display}, ${country.name} to protect ${eq}, reduce heat loss, and improve safety in ${industry}.`,
    `Industrial buyers in ${city.display} use ${primaryKeyword} for ${eq} where energy saving, maintenance access, and thermal protection are required.`,
    `${city.display} industries rely on ${primaryKeyword} to improve efficiency, lower operating costs, and protect high-temperature ${eq}.`,
    `For ${industry} operations in ${city.display}, ${primaryKeyword} support heat loss reduction, worker safety, and reliable equipment performance.`,
  ];

  return {
    title: clean(primaryKeyword),
    overview: {
      content: [clean(pick(subtitleVariants, seed))],
    },
    country: {
      slug: country.slug,
      name: country.name,
    },
    city: {
      name: city.name,
      display: city.display,
    },
  };
}
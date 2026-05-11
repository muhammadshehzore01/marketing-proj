// marketing-proj/src/lib/seo/engine/shared/heroEngin.js
// marketing-proj/src/lib/seo/engine/shared/heroEngine.js

import { getSeoSeed } from "./seedEngine";

function clean(text) {
  return text?.replace(/\s+/g, " ").trim() || "";
}

function pick(arr, seed, offset = 0) {
  return arr[Math.abs(seed + offset) % arr.length];
}

/* ================= COUNTRY-SPECIFIC INDUSTRY MAP ================= */

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
  austria: ["machine engineering", "production systems", "industrial plants"],
  poland: ["heavy industry", "manufacturing", "industrial modernization"],
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

/* ================= TITLE TEMPLATES ================= */

const countryTitleTemplates = [
  (c) => `Removable Insulation Jackets in ${c}`,
  (c) => `Industrial Thermal Solutions for ${c}`,
  (c) => `Energy Saving Insulation Systems in ${c}`,
  (c) => `Custom Insulation Engineering in ${c}`,
  (c) => `Industrial Heat Protection Solutions in ${c}`,
];

const cityTitleTemplates = [
  (city, country) => `Insulation Jackets in ${city}, ${country}`,
  (city) => `Industrial Insulation Solutions in ${city}`,
  (city) => `Thermal Protection Systems in ${city}`,
  (city) => `Custom Heat Insulation in ${city}`,
];

/* ================= SUBTITLE TEMPLATES ================= */

const subtitleTemplates = [
  (country, ind, eq, ben) =>
    `${country} industries depend on ${ind}, where ${eq} require advanced insulation systems to ${ben}.`,

  (country, ind, eq, ben) =>
    `Across ${country}, removable insulation jackets help protect ${eq} used in ${ind} applications to ${ben}.`,

  (country, ind, eq, ben) =>
    `${country}'s ${ind} sector uses thermal insulation solutions for ${eq} to ${ben}.`,

  (country, ind, eq, ben) =>
    `High-performance insulation jackets in ${country} improve reliability of ${eq} across ${ind}.`,
];

/* ================= COUNTRY HERO ================= */

export function generateCountryHero(country) {
  if (!country) return null;

  // stronger unique seed
  const { seed } = getSeoSeed(
    `${country.slug}-${country.name.length}-hero-v3`,
    "hero-country"
  );

  const title = pick(countryTitleTemplates, seed)(country.name);

  const industries =
    countryIndustryMap[country.slug?.toLowerCase()] ||
    countryIndustryMap.default;

  const industry = pick(industries, seed, 1);

  const eq = pick(
    equipmentMap[industry] || equipmentMap.default,
    seed,
    2
  );

  const ben = pick(benefits, seed, 3);

  const subtitle = pick(
    subtitleTemplates,
    seed,
    4
  )(country.name, industry, eq, ben);

  return {
    title: clean(title),
    overview: {
      content: [clean(subtitle)],
    },
    country: {
      slug: country.slug,
      name: country.name,
    },
    city: null,
  };
}

/* ================= CITY HERO ================= */

export function generateCityHero(city, country) {
  if (!city || !country) return null;

  const { seed } = getSeoSeed(
    `${city.name}-${country.slug}-hero-city-v3`,
    "hero-city"
  );

  const title = pick(
    cityTitleTemplates,
    seed
  )(city.display, country.name);

  const industries =
    countryIndustryMap[country.slug?.toLowerCase()] ||
    countryIndustryMap.default;

  const industry = pick(industries, seed, 1);

  const eq = pick(
    equipmentMap[industry] || equipmentMap.default,
    seed,
    2
  );

  const ben = pick(benefits, seed, 3);

  const subtitle = `${city.display} is an important industrial center in ${country.name}, where ${eq} in ${industry} facilities require insulation solutions to ${ben}.`;

  return {
    title: clean(title),
    overview: {
      content: [clean(subtitle)],
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
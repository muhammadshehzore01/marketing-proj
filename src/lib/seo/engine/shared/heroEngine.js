// marketing-proj/src/lib/seo/engine/shared/heroEngin.js
import { getSeoSeed } from "./seedEngine";

function clean(text) {
  return text?.replace(/\s+/g, " ").trim() || "";
}

function pick(arr, seed, offset = 0) {
  return arr[(seed + offset) % arr.length];
}

/* ================= EXPANDED DATA ================= */

const industries = [
  "manufacturing",
  "chemical processing",
  "power generation",
  "food processing",
  "automotive production",
  "oil and gas",
  "cement production",
  "fertilizer plants",
];

const equipmentMap = {
  manufacturing: ["machines", "assembly lines", "press systems"],
  "chemical processing": ["reactors", "pipelines", "storage tanks"],
  "power generation": ["turbines", "boilers", "heat exchangers"],
  "food processing": ["processing units", "sterilizers", "tanks"],
  "automotive production": ["robots", "paint lines", "press machines"],
  "oil and gas": ["valves", "refinery units", "pipelines"],
  "cement production": ["kilns", "crusher systems", "preheaters"],
  "fertilizer plants": ["reactors", "dryers", "storage systems"],
};

const benefits = [
  "reduce heat loss",
  "improve workplace safety",
  "increase operational efficiency",
  "lower energy costs",
  "ensure thermal stability",
];

/* ================= TITLE TEMPLATES ================= */

const countryTitleTemplates = [
  (c) => `Removable Insulation Jackets in ${c}`,
  (c) => `Industrial Thermal Solutions for ${c}`,
  (c) => `Energy Saving Systems in ${c}`,
  (c) => `Custom Insulation Engineering in ${c}`,
];

const cityTitleTemplates = [
  (city, country) => `Insulation Jackets in ${city}, ${country}`,
  (city) => `Industrial Insulation Solutions in ${city}`,
  (city, country) => `Thermal Protection Systems - ${city}`,
];

/* ================= SUBTITLE VARIANTS ================= */

const subtitleTemplates = [
  (country, ind, eq, ben) =>
    `${country} relies heavily on ${ind} infrastructure where ${eq} require advanced thermal protection to ${ben}.`,

  (country, ind, eq, ben) =>
    `In ${country}, industries like ${ind} depend on insulation systems for ${eq} to ${ben}.`,

  (country, ind, eq, ben) =>
    `Industrial facilities in ${country} use insulation jackets for ${eq} to ${ben} in harsh operating environments.`,
];

/* ================= COUNTRY HERO ================= */

export function generateCountryHero(country) {
  if (!country) return null;

  const { seed } = getSeoSeed(country.slug, "hero-country");

  const title = pick(countryTitleTemplates, seed)(country.name);

  const industry = pick(industries, seed);
  const eq = pick(
    equipmentMap[industry] || ["industrial equipment"],
    seed
  );
  const ben = pick(benefits, seed);

  const subtitleFn = pick(subtitleTemplates, seed);

  const subtitle = subtitleFn(country.name, industry, eq, ben);

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

  const { seed } = getSeoSeed(city.name, "hero-city");

  const title = pick(cityTitleTemplates, seed)(
    city.display,
    country.name
  );

  const industry = pick(industries, seed);
  const eq = pick(
    equipmentMap[industry] || ["industrial equipment"],
    seed
  );
  const ben = pick(benefits, seed);

  const subtitle = `${city.display} in ${country.name} industrial sector includes ${industry} facilities where ${eq} require insulation to ${ben}.`;

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
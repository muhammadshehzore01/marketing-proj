// marketing-proj/src/lib/seo/engine/shared/heroEngin.js
import { getSeoSeed } from "./seedEngine";

function clean(text) {
  return text?.replace(/\s+/g, " ").trim() || "";
}

function pick(arr, seed, offset = 0) {
  return arr[(seed + offset) % arr.length];
}

/* ================= DATA ================= */

const industries = [
  "manufacturing",
  "chemical processing",
  "power generation",
  "food processing",
  "automotive production",
];

const equipment = [
  "valves",
  "pumps",
  "turbines",
  "boilers",
  "heat exchangers",
];

const benefits = [
  "reduce heat loss",
  "improve safety",
  "increase efficiency",
  "lower costs",
];

/* ================= TITLE TEMPLATES ================= */

const countryTitleTemplates = [
  (c) => `Removable Insulation Jackets in ${c}`,
  (c) => `Industrial Thermal Solutions for ${c}`,
  (c) => `Energy Saving Systems in ${c}`,
];

const cityTitleTemplates = [
  (city, country) => `Insulation Jackets in ${city}, ${country}`,
  (city, country) => `Industrial Solutions in ${city}`,
];

/* ================= COUNTRY HERO ================= */

export function generateCountryHero(country) {
  if (!country) return null;

  const { seed } = getSeoSeed(country.slug, "hero-country");

  const title = pick(countryTitleTemplates, seed)(country.name);

  const ind = pick(industries, seed, 1);
  const eq1 = pick(equipment, seed, 2);
  const ben = pick(benefits, seed, 3);

  const subtitle = `
    ${country.name} industrial sector relies on ${ind} systems.
    Our insulation jackets for ${eq1} help ${ben}.
  `;

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

  const ind = pick(industries, seed, 1);
  const eq1 = pick(equipment, seed, 2);
  const ben = pick(benefits, seed, 3);

  const subtitle = `
    ${city.display} in ${country.name} uses industrial ${ind}.
    Insulation for ${eq1} helps ${ben}.
  `;

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
// /src/lib/seo/engine/shared/introSeoEngine.js

import { getSeoSeed } from "./seedEngine";

function clean(text) {
  return text?.replace(/\s+/g, " ").trim() || "";
}

function pick(arr, seed, offset = 0) {
  return arr[(seed + offset) % arr.length];
}

/* =====================================================
   DATA POOLS
===================================================== */

const labels = [
  "Industrial Energy Saving Solutions",
  "Advanced Thermal Protection Systems",
  "High-Temperature Equipment Insulation",
  "Industrial Heat Loss Reduction",
  "Thermal Efficiency Engineering",
  "Industrial Process Optimization",
];

const headings = [
  "High-Temperature Removable Insulation Jackets",
  "Custom Removable Thermal Insulation Covers",
  "Industrial Energy Saving Insulation Jackets",
  "Advanced Thermal Protection Jackets",
  "Reusable Insulation Jackets for Industrial Equipment",
];

const industries = [
  "power plants",
  "chemical processing facilities",
  "oil and gas systems",
  "manufacturing plants",
  "food processing industries",
  "pharmaceutical industries",
  "marine engineering facilities",
  "heavy industrial operations",
];

const equipment = [
  "valves",
  "pumps",
  "turbines",
  "boilers",
  "heat exchangers",
  "compressors",
  "generators",
  "exhaust systems",
  "pipelines",
  "industrial machinery",
];

const benefitsPool = [
  "Reduce heat loss",
  "Improve energy efficiency",
  "Reusable & removable",
  "Worker safety protection",
  "Lower maintenance downtime",
  "Reduce fuel consumption",
  "Improve thermal stability",
  "Long-term cost savings",
  "Easy access for maintenance",
  "Support sustainability goals",
];

const applicationsTemplates = [
  (eq1, eq2, eq3) =>
    `Ideal for ${eq1}, ${eq2}, ${eq3}, and other high-temperature industrial equipment.`,

  (eq1, eq2, eq3) =>
    `Designed for insulation of ${eq1}, ${eq2}, and ${eq3} across industrial environments.`,

  (eq1, eq2, eq3) =>
    `Commonly used on ${eq1}, ${eq2}, and ${eq3} where thermal efficiency is critical.`,
];

/* =====================================================
   COUNTRY INTRO
===================================================== */

export function generateCountryIntro(country) {
  if (!country) return null;

  const { seed } = getSeoSeed(country.slug, "intro-country");

  const label = pick(labels, seed);
  const heading = pick(headings, seed);

  const ind = pick(industries, seed, 1);

  const eq1 = pick(equipment, seed, 2);
  const eq2 = pick(equipment, seed, 3);
  const eq3 = pick(equipment, seed, 4);

  const benefits = [
    pick(benefitsPool, seed, 5),
    pick(benefitsPool, seed, 6),
    pick(benefitsPool, seed, 7),
    pick(benefitsPool, seed, 8),
  ];

  const paragraph1 = `
    Our removable insulation jackets support industrial operations in ${country.name}
    by reducing thermal energy loss, improving equipment efficiency,
    and enhancing worker safety.
  `;

  const paragraph2 = `
    Designed for ${ind}, these reusable insulation systems simplify
    maintenance access while lowering long-term operating costs.
  `;

  const applications = pick(
    applicationsTemplates,
    seed,
    9
  )(eq1, eq2, eq3);

  return {
    label: clean(label),
    heading: clean(heading),
    paragraph1: clean(paragraph1),
    paragraph2: clean(paragraph2),
    benefits,
    applications: clean(applications),
    country: country.slug,
  };
}

/* =====================================================
   CITY INTRO
===================================================== */

export function generateCityIntro(city, country) {
  if (!city || !country) return null;

  const { seed } = getSeoSeed(city.name, "intro-city");

  const label = pick(labels, seed);
  const heading = pick(headings, seed);

  const ind = pick(industries, seed, 1);

  const eq1 = pick(equipment, seed, 2);
  const eq2 = pick(equipment, seed, 3);
  const eq3 = pick(equipment, seed, 4);

  const benefits = [
    pick(benefitsPool, seed, 5),
    pick(benefitsPool, seed, 6),
    pick(benefitsPool, seed, 7),
    pick(benefitsPool, seed, 8),
  ];

  const paragraph1 = `
    Industrial facilities in ${city.display}, ${country.name}
    rely on removable insulation jackets to improve thermal
    performance and reduce heat loss.
  `;

  const paragraph2 = `
    These reusable insulation systems support ${ind}
    by lowering operating costs and improving maintenance efficiency.
  `;

  const applications = pick(
    applicationsTemplates,
    seed,
    9
  )(eq1, eq2, eq3);

  return {
    label: clean(label),
    heading: clean(heading),
    paragraph1: clean(paragraph1),
    paragraph2: clean(paragraph2),
    benefits,
    applications: clean(applications),
    city: city.name,
    country: country.slug,
  };
}
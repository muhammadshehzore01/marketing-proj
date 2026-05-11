// /src/lib/seo/engine/shared/introSeoEngine.js

import { getSeoSeed } from "./seedEngine";

function clean(text) {
  return text?.replace(/\s+/g, " ").trim() || "";
}

function pick(arr, seed, offset = 0) {
  return arr[Math.abs(seed + offset) % arr.length];
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

const industryPool = [
  "advanced manufacturing",
  "chemical processing",
  "oil and gas operations",
  "power generation",
  "food processing",
  "pharmaceutical production",
  "marine engineering",
  "heavy industrial systems",
  "automation engineering",
  "energy infrastructure",
  "precision machinery",
  "industrial robotics",
  "thermal processing",
  "refinery operations",
];

const equipmentPool = [
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
  "storage tanks",
  "reactors",
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

const paragraph1Templates = [
  (location, industry) =>
    `Industrial facilities in ${location} rely on removable insulation jackets to improve thermal performance across ${industry}.`,

  (location, industry) =>
    `${location} industries use advanced removable insulation systems to reduce energy loss in ${industry}.`,

  (location, industry) =>
    `Designed for demanding environments in ${location}, our insulation jackets improve efficiency in ${industry}.`,

  (location, industry) =>
    `Thermal insulation solutions in ${location} help industrial operators optimize ${industry} performance.`,
];

const paragraph2Templates = [
  (eq1, eq2, eq3) =>
    `Custom removable insulation protects ${eq1}, ${eq2}, and ${eq3}, reducing maintenance costs and improving safety.`,

  (eq1, eq2, eq3) =>
    `These reusable systems help insulate ${eq1}, ${eq2}, and ${eq3} while improving equipment reliability.`,

  (eq1, eq2, eq3) =>
    `Engineered for durability, insulation jackets support ${eq1}, ${eq2}, and ${eq3} in high-temperature environments.`,

  (eq1, eq2, eq3) =>
    `Our insulation covers reduce heat loss on ${eq1}, ${eq2}, and ${eq3}, supporting long-term efficiency.`,
];

const applicationsTemplates = [
  (a, b, c) =>
    `Ideal for ${a}, ${b}, ${c}, and other high-temperature industrial equipment.`,

  (a, b, c) =>
    `Designed for insulation of ${a}, ${b}, and ${c} across demanding industrial environments.`,

  (a, b, c) =>
    `Commonly installed on ${a}, ${b}, and ${c} where thermal efficiency is critical.`,
];

/* =====================================================
   COUNTRY INTRO
===================================================== */

export function generateCountryIntro(country) {
  if (!country) return null;

  const { seed } = getSeoSeed(
    `${country.slug}-${country.name}-intro-v4`,
    "intro-country"
  );

  const label = pick(labels, seed);
  const heading = pick(headings, seed, 1);

  const industry = pick(industryPool, seed, 2);

  const eq1 = pick(equipmentPool, seed, 3);
  const eq2 = pick(equipmentPool, seed, 4);
  const eq3 = pick(equipmentPool, seed, 5);

  const benefits = [
    pick(benefitsPool, seed, 6),
    pick(benefitsPool, seed, 7),
    pick(benefitsPool, seed, 8),
    pick(benefitsPool, seed, 9),
  ];

  const paragraph1 = pick(
    paragraph1Templates,
    seed,
    10
  )(country.name, industry);

  const paragraph2 = pick(
    paragraph2Templates,
    seed,
    11
  )(eq1, eq2, eq3);

  const applications = pick(
    applicationsTemplates,
    seed,
    12
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

  const { seed } = getSeoSeed(
    `${city.name}-${country.slug}-${city.display}-intro-v4`,
    "intro-city"
  );

  const label = pick(labels, seed);
  const heading = pick(headings, seed, 1);

  const industry = pick(industryPool, seed, 2);

  const eq1 = pick(equipmentPool, seed, 3);
  const eq2 = pick(equipmentPool, seed, 4);
  const eq3 = pick(equipmentPool, seed, 5);

  const benefits = [
    pick(benefitsPool, seed, 6),
    pick(benefitsPool, seed, 7),
    pick(benefitsPool, seed, 8),
    pick(benefitsPool, seed, 9),
  ];

  const paragraph1 = pick(
    paragraph1Templates,
    seed,
    10
  )(`${city.display}, ${country.name}`, industry);

  const paragraph2 = pick(
    paragraph2Templates,
    seed,
    11
  )(eq1, eq2, eq3);

  const applications = pick(
    applicationsTemplates,
    seed,
    12
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
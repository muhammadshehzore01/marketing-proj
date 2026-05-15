import { getSeoSeed } from "./seedEngine";

function clean(text) {
  return text?.replace(/\s+/g, " ").trim() || "";
}

function hash(str) {
  return str
    .split("")
    .reduce((a, b) => (a * 31 + b.charCodeAt(0)) >>> 0, 0);
}

function pick(arr, seed, offset = 0) {
  const base = typeof seed === "number" ? seed : hash(seed);
  return arr[Math.abs(base + offset * 13) % arr.length];
}

const labels = [
  "Industrial Energy Saving Solutions",
  "Advanced Thermal Protection Systems",
  "High-Temperature Equipment Insulation",
  "Industrial Heat Loss Reduction",
];

const headings = [
  "High-Temperature Removable Insulation Jackets",
  "Custom Thermal Protection Covers for Industry",
  "Energy Efficient Industrial Insulation Systems",
  "Reusable Insulation Jackets for Heavy Equipment",
];

const benefitsPool = [
  "Reduce heat loss",
  "Improve energy efficiency",
  "Reusable & removable",
  "Worker safety protection",
  "Lower maintenance downtime",
  "Long-term cost savings",
];

const equipmentPool = [
  "valves",
  "pumps",
  "turbines",
  "boilers",
  "heat exchangers",
  "compressors",
  "pipelines",
];

const introStyles = [
  (loc, ind) =>
    `Industrial facilities in ${loc} operating within the ${ind} sector use removable insulation systems to control heat loss, improve safety, and reduce energy waste.`,

  (loc, ind) =>
    `The ${ind} sector in ${loc} depends on reliable thermal insulation to protect high-temperature equipment and improve plant efficiency.`,

  (loc, ind) =>
    `Across ${loc}, industrial plants in the ${ind} sector require removable insulation jackets for safer, cleaner, and more energy-efficient operations.`,

  (loc, ind) =>
    `In ${loc}, high-temperature industrial equipment used in ${ind} requires engineered insulation systems to reduce heat radiation and support maintenance access.`,

  (loc, ind) =>
    `${loc} supports important ${ind} operations where removable thermal covers help reduce operating cost, improve safety, and protect critical equipment.`,
];

const paragraph2Styles = [
  (e1, e2, e3) =>
    `These systems are commonly installed on ${e1}, ${e2}, and ${e3}, helping facilities maintain safer working conditions and better thermal stability.`,

  (e1, e2, e3) =>
    `Equipment such as ${e1}, ${e2}, and ${e3} benefits from reusable insulation that can be removed during inspection and installed again without waste.`,

  (e1, e2, e3) =>
    `By insulating ${e1}, ${e2}, and ${e3}, industries can reduce surface heat, improve energy performance, and protect maintenance teams.`,

  (e1, e2, e3) =>
    `Our removable insulation covers are suitable for ${e1}, ${e2}, ${e3}, and other equipment exposed to continuous high-temperature operation.`,
];

function buildIntro(location, seed, type = "country", industry = "industrial processing") {
  const mixSeed =
    typeof seed === "number"
      ? seed + location.length
      : hash(seed) + location.length;

  const eq1 = pick(equipmentPool, mixSeed, 1);
  const eq2 = pick(equipmentPool, mixSeed, 2);
  const eq3 = pick(equipmentPool, mixSeed, 3);

  return {
    label: clean(pick(labels, mixSeed)),
    heading: clean(pick(headings, mixSeed, 1)),

    paragraph1: clean(pick(introStyles, mixSeed, 2)(location, industry)),
    paragraph2: clean(pick(paragraph2Styles, mixSeed, 3)(eq1, eq2, eq3)),

    benefits: [
      pick(benefitsPool, mixSeed, 1),
      pick(benefitsPool, mixSeed, 2),
      pick(benefitsPool, mixSeed, 3),
      pick(benefitsPool, mixSeed, 4),
    ],

    applications: `Ideal for ${eq1}, ${eq2}, ${eq3}, and other high-temperature industrial systems.`,

    type,
  };
}

export function generateCountryIntro(country) {
  if (!country) return null;

  const { seed } = getSeoSeed(
    `intro-country-${country.slug}-${country.name}-${country.cities?.length || 0}`,
    "intro-country"
  );

  const industry =
    country.industries?.[0] ||
    "industrial processing";

  return buildIntro(country.name, seed, "country", industry);
}

export function generateCityIntro(city, country) {
  if (!city || !country) return null;

  const { seed } = getSeoSeed(
    `intro-city-${country.slug}-${city.name}-${city.display}`,
    "intro-city"
  );

  const industry =
    country.industries?.[0] ||
    "industrial processing";

  return buildIntro(
    `${city.display}, ${country.name}`,
    seed,
    "city",
    industry
  );
}
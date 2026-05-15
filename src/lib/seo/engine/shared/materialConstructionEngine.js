// /home/shahrukh-eng/marketing-proj/src/lib/seo/engine/shared/materialConstructionEngine.js
import { buildUniquenessSeed } from "@/lib/data/shared/uniqueness";
import {
  buildCountryRelatedKeywords,
  buildCityRelatedKeywords,
} from "@/lib/data/shared/keywordPool";

function pick(arr = [], seed = 0, offset = 0) {
  if (!arr.length) return "";
  return arr[Math.abs(seed + offset) % arr.length];
}

const countryMaterialFocus = {
  germany: "precision manufacturing, automotive plants, chemical processing, and energy systems",
  france: "energy facilities, refinery systems, aerospace plants, and industrial manufacturing",
  "united-kingdom": "oil & gas, marine systems, power generation, and engineering facilities",
  italy: "manufacturing plants, automotive systems, and industrial engineering equipment",
  spain: "energy systems, refinery operations, and manufacturing plants",
  netherlands: "chemical plants, marine infrastructure, oil & gas systems, and port industries",
  belgium: "chemical processing and industrial manufacturing facilities",
  sweden: "energy plants, marine systems, and sustainable manufacturing operations",
  norway: "offshore oil & gas, marine energy systems, and high-temperature equipment",
  denmark: "wind energy systems, power plants, and industrial utility equipment",
};

const titleVariants = [
  "Material Construction for Industrial Insulation Jackets",
  "High-Temperature Material Construction",
  "Multi-Layer Thermal Insulation Jacket Construction",
  "Industrial Insulation Cover Material System",
];

const descriptionVariants = [
  "Our removable insulation jackets are manufactured with multi-layer materials selected according to temperature, environment, equipment geometry, and maintenance requirements.",
  "Each insulation cover is designed using durable outer fabrics, high-performance insulation cores, and reliable closure systems for safe industrial operation.",
  "Material selection is customized for heat resistance, energy saving, worker safety, weather exposure, and long service life.",
  "We use industrial-grade fabric, insulation core, and fastening systems to support reusable thermal protection for high-temperature equipment.",
];

export function buildMaterialConstructionSeo({ country, city = null }) {
  if (!country?.slug) return null;

  const seed = buildUniquenessSeed(country.slug, city?.name || "country");
  const keyword = city
    ? buildCityRelatedKeywords(city, country)[0]
    : buildCountryRelatedKeywords(country)[0];

  const location = city
    ? `${city.display}, ${country.name}`
    : country.name;

  const materialFocus =
    countryMaterialFocus[country.slug] ||
    country.industries?.join(", ") ||
    "industrial manufacturing and energy systems";

  return {
    title: city
      ? `Material Construction for Insulation Jackets in ${city.display}`
      : `Material Construction for Industrial Insulation Jackets in ${country.name}`,

    description: `${pick(descriptionVariants, seed, 1)} For ${location}, material selection is optimized for ${materialFocus}, where ${keyword} must reduce heat loss, improve safety, and remain removable for inspection or maintenance.`,

    cards: [
      {
        icon: "🛡️",
        title: "Outer & Inner Layer",
        items: [
          "Silicon Coated Fiberglass Fabric",
          "PU Coated Fiberglass Fabric",
          "Aluminum Laminated Fiberglass",
          "Ceramic Fiber Cloth",
          "Fiberglass Cloth",
        ],
      },
      {
        icon: "🔥",
        title: "Insulation Core",
        items: [
          "Glass Wool",
          "Rock Wool",
          "Ceramic Wool",
          "Ceramic Paper",
        ],
      },
      {
        icon: "🔒",
        title: "Closure System",
        items: [
          "Velcro (Hook & Loop)",
          "Belt System",
          "Stainless Steel Springs",
          "Stainless Steel Hooks",
        ],
      },
    ],

    note: city
      ? `These material combinations are suitable for industrial equipment operating in ${city.display}, including valves, flanges, pumps, turbines, generators, compressors, and piping systems.`
      : `These material combinations are suitable for industrial facilities across ${country.name}, including power plants, refineries, chemical plants, marine systems, and manufacturing units.`,
  };
}
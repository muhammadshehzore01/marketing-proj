// marketing-proj/src/lib/seo/engine/shared/exportCountriesEngine.js
import { buildUniquenessSeed } from "@/lib/data/shared/uniqueness";
import {
  buildCountryRelatedKeywords,
  buildCityRelatedKeywords,
} from "@/lib/data/shared/keywordPool";

const exportCountries = [
  { name: "UAE", flag: "/img/flags/uae.webp", href: "/export/uae" },
  { name: "Saudi Arabia", flag: "/img/flags/saudi-arabia.webp", href: "/export/saudi-arabia" },
  { name: "Qatar", flag: "/img/flags/qatar.webp", href: "/export/qatar" },
  { name: "Oman", flag: "/img/flags/oman.webp", href: "/export/oman" },
  { name: "Germany", flag: "/img/flags/germany.webp", href: "/export/germany" },
  { name: "UK", flag: "/img/flags/uk.webp", href: "/export/uk" },
  { name: "USA", flag: "/img/flags/usa.webp", href: "/export/usa" },
];

function pick(arr = [], seed = 0, offset = 0) {
  if (!arr.length) return "";
  return arr[Math.abs(seed + offset) % arr.length];
}

const marketFocus = {
  germany: "European industrial manufacturing and energy markets",
  france: "European engineering and industrial export markets",
  "united-kingdom": "global engineering, marine, and industrial sectors",
  italy: "European manufacturing and thermal engineering markets",
  spain: "industrial energy and manufacturing sectors",
  netherlands: "port-based industries and European export sectors",
  belgium: "chemical and industrial processing markets",
  sweden: "energy-efficient manufacturing sectors",
  norway: "offshore energy and industrial systems",
  denmark: "wind energy and industrial utility sectors",
};

const labelVariants = [
  "Global Export Markets",
  "International Industrial Supply",
  "Worldwide Export Capabilities",
  "Industrial Export Markets",
];

const titleVariants = [
  "Countries We Export To",
  "Industrial Export Countries",
  "Global Markets for Industrial Insulation",
  "International Markets We Serve",
];

const descriptionVariants = [
  "We manufacture and export removable insulation jackets, thermal covers, and heat shields for industrial equipment worldwide.",
  "Our industrial insulation systems are supplied internationally for power plants, refineries, marine systems, manufacturing facilities, and industrial processing sectors.",
  "We support global industrial clients with custom thermal insulation jackets engineered for energy efficiency, heat loss reduction, and worker safety.",
  "Our export network supplies industrial insulation covers for valves, turbines, generators, compressors, piping systems, and process equipment worldwide.",
];

export function buildExportCountriesSeo({ country, city = null }) {
  if (!country?.slug) return null;

  const seed = buildUniquenessSeed(country.slug, city?.name || "country");
  const keyword = city
  ? buildCityRelatedKeywords(city, country)[0]
  : buildCountryRelatedKeywords(country)[0];

  const location = city
    ? `${city.display}, ${country.name}`
    : country.name;

  const focus =
    marketFocus[country.slug] ||
    country.industries?.join(", ") ||
    "industrial manufacturing and energy systems";

  return {
    label: pick(labelVariants, seed, 1),

    title: city
      ? `Global Industrial Export Solutions from ${city.display}`
      : `Global Industrial Export Markets for ${country.name}`,

    description: `${pick(descriptionVariants, seed, 2)} From ${location}, we support ${focus} using ${keyword}, delivering custom removable insulation systems for international industrial clients.`,

    featuredCountries: exportCountries,
  };
}
// /home/shahrukh-eng/marketing-proj/src/lib/seo/engine/shared/serviceGeoEngine.js
// /home/shahrukh-eng/marketing-proj/src/lib/seo/engine/shared/serviceGeoEngine.js

import { getSeoSeed } from "./seedEngine";
import {
  buildCountryRelatedKeywords,
  buildCityRelatedKeywords,
} from "@/lib/data/shared/keywordPool";

/* =====================================================
   SAFE PICKER
===================================================== */
function pick(arr, seed, offset = 0) {
  if (!Array.isArray(arr) || arr.length === 0) return "";

  const s =
    typeof seed === "number"
      ? seed
      : String(seed)
          .split("")
          .reduce((a, b) => a + b.charCodeAt(0), 0);

  return arr[Math.abs(s + offset) % arr.length];
}

/* =====================================================
   COUNTRY INTELLIGENCE
===================================================== */

const countryProfiles = {
  germany: {
    industry: "precision manufacturing and industrial automation",
    tone: "high engineering precision systems",
    keyword: "industrial insulation engineering Germany",
  },
  france: {
    industry: "aerospace, chemical processing and energy systems",
    tone: "advanced industrial engineering networks",
    keyword: "thermal insulation systems France",
  },
  italy: {
    industry: "industrial machinery and automotive systems",
    tone: "manufacturing-driven industrial sector",
    keyword: "industrial insulation jackets Italy",
  },
  spain: {
    industry: "energy production and refinery systems",
    tone: "industrial energy infrastructure",
    keyword: "energy insulation solutions Spain",
  },
  netherlands: {
    industry: "chemical, oil & maritime infrastructure",
    tone: "port-based industrial engineering",
    keyword: "industrial insulation Netherlands ports",
  },
  belgium: {
    industry: "chemical processing and industrial logistics",
    tone: "dense industrial corridor systems",
    keyword: "insulation systems Belgium industry",
  },
  sweden: {
    industry: "energy, marine and heavy engineering",
    tone: "cold climate industrial engineering",
    keyword: "thermal insulation Sweden industry",
  },
  norway: {
    industry: "oil, gas and offshore engineering",
    tone: "harsh environment energy systems",
    keyword: "offshore insulation Norway oil gas",
  },
  denmark: {
    industry: "wind energy and sustainable power systems",
    tone: "renewable industrial infrastructure",
    keyword: "wind energy insulation Denmark",
  },
  "united-kingdom": {
    industry: "oil & gas, marine, power generation and engineering sectors",
    tone: "engineering and offshore industrial infrastructure",
    keyword: "industrial insulation systems United Kingdom",
  },
  default: {
    industry: "industrial manufacturing and energy systems",
    tone: "general industrial infrastructure",
    keyword: "industrial insulation solutions Europe",
  },
};

/* =====================================================
   CITY STYLE
===================================================== */

const cityStyles = {
  capital: "major industrial capital hub",
  port: "logistics and port industrial zone",
  industrial: "heavy industrial manufacturing zone",
  default: "developed industrial city",
};

/* =====================================================
   POOLS
===================================================== */

const eq = [
  "valves",
  "pumps",
  "turbines",
  "boilers",
  "heat exchangers",
  "compressors",
  "pipelines",
];

const benefits = [
  "reduce heat loss and improve efficiency",
  "enhance thermal safety in operations",
  "lower energy consumption",
  "reduce maintenance downtime",
  "extend equipment lifecycle",
];

const introLines = [
  "We deliver engineered insulation solutions for",
  "Our industrial insulation systems support operations in",
  "High-performance thermal jackets are supplied across",
  "We provide custom removable insulation systems for",
];

/* =====================================================
   GEO SERVICE SEO
===================================================== */

export function buildGeoServiceSeo(
  country,
  city = null,
  service = null,
  extraSeed = ""
) {
  if (!country?.slug) {
    return {
      location: "Europe",
      heading: "Industrial Insulation Solutions",
      paragraph:
        "We provide industrial insulation solutions across Europe for energy efficiency and thermal protection.",
      context: {},
    };
  }

  const locationKey = city
    ? `${country.slug}-${city.name}`
    : country.slug;

  const { seed } = getSeoSeed(
    `geo-${locationKey}-${extraSeed}`,
    city ? "city" : "country"
  );

  const profile =
    countryProfiles[country.slug] || countryProfiles.default;

  const location = city
    ? `${city.display}, ${country.name}`
    : country.name;

  const isCity = Boolean(city);

  const geoKeywords = isCity
    ? buildCityRelatedKeywords(city, country)
    : buildCountryRelatedKeywords(country);

  const geoKeyword =
    pick(geoKeywords, seed, 4) ||
    `${service?.name || "Industrial Insulation"} in ${location}`;

  const eq1 = pick(eq, seed, 1);
  const eq2 = pick(eq, seed, 2);
  const eq3 = pick(eq, seed, 3);

  const benefit = pick(benefits, seed, 2);
  const intro = pick(introLines, seed, 1);

  const serviceName =
    service?.name || "Removable Insulation Jackets";

  const cityTone = city?.type
    ? cityStyles[city.type]
    : cityStyles.default;

  return {
    location,

    heading: geoKeyword,

    paragraph: `
${intro} ${location} with ${geoKeyword}. 

${serviceName} supports ${profile.industry} industries across this region.

As a ${isCity ? cityTone : profile.tone}, demand focuses on systems that ${benefit} across equipment like ${eq1}, ${eq2}, and ${eq3}.

We deliver engineered insulation solutions optimized for ${profile.keyword}, ensuring durability, safety, energy efficiency, and easy maintenance access.

${
  isCity
    ? `${city.display} plays a strategic role in ${country.name}'s industrial ecosystem, where custom removable insulation covers help reduce heat loss and improve worker safety.`
    : `We serve multiple industrial regions across ${country.name} with high-performance removable insulation systems for valves, pumps, turbines, compressors, piping, and process equipment.`
}
    `.trim(),

    context: {
      countrySlug: country.slug,
      citySlug: city?.slug || city?.name || null,
    },
  };
}

/* =====================================================
   DETAIL PAGE SEO
===================================================== */

export function buildServiceDetailSeo({
  country,
  city = null,
  service = null,
}) {
  if (!country?.slug) return null;

  const location = city
    ? `${city.display}, ${country.name}`
    : country.name;

  const { seed } = getSeoSeed(
    `service-detail-${country.slug}-${city?.name || "country"}-${service?.slug || service?.name || ""}`,
    city ? "city-service-detail" : "country-service-detail"
  );

  const geoKeywords = city
    ? buildCityRelatedKeywords(city, country)
    : buildCountryRelatedKeywords(country);

  const geoKeyword =
    pick(geoKeywords, seed, 3) ||
    `${service?.name || "Industrial Insulation"} in ${location}`;

  return {
    location,

    title: geoKeyword,

    description: `High-performance ${geoKeyword} for industrial systems in ${location}, including valves, pumps, turbines, compressors, piping systems, and energy infrastructure.`,

    context: {
      countrySlug: country.slug,
      citySlug: city?.slug || city?.name || null,
    },
  };
}
// /home/shahrukh-eng/marketing-proj/src/lib/seo/engine/country/countryRelatedCitiesEngine.js
// /home/shahrukh-eng/marketing-proj/src/lib/seo/engine/country/countryRelatedCitiesEngine.js

import { buildUniquenessSeed } from "@/lib/data/shared/uniqueness";
import {
  buildCountryRelatedKeywords,
  buildCityRelatedKeywords,
} from "@/lib/data/shared/keywordPool";

function pick(arr = [], seed = 0, offset = 0) {
  if (!arr.length) return "";
  return arr[Math.abs(seed + offset) % arr.length];
}

const countryIndustryFocus = {
  germany: "manufacturing, automotive, chemical processing, and energy plants",
  france: "energy, refinery, aerospace, and manufacturing facilities",
  "united-kingdom":
    "oil & gas, marine, power generation, and engineering industries",
  italy: "manufacturing, automotive, and industrial engineering plants",
  spain: "energy, refinery, and manufacturing operations",
  netherlands: "chemical, marine, oil & gas, and port-based industries",
  belgium: "chemical processing and industrial manufacturing facilities",
  sweden: "energy, marine, and sustainable manufacturing plants",
  norway: "oil & gas, offshore energy, and marine industries",
  denmark: "wind energy and power system industries",
};

const cityIndustryMap = {
  germany: {
    berlin: "Automation, Manufacturing & Industrial Engineering",
    hamburg: "Marine, Port, Energy & Logistics Industries",
    munich: "Automotive, Precision Manufacturing & Engineering",
    cologne: "Chemical Processing, Utilities & Manufacturing",
    frankfurt: "Industrial Processing, Energy & Engineering Systems",
  },

  france: {
    paris: "Energy Systems, Manufacturing & Industrial Utilities",
    lyon: "Chemical Processing, Textile & Industrial Manufacturing",
    marseille: "Marine, Port, Refinery & Energy Industries",
    toulouse: "Aerospace, Engineering & Manufacturing Facilities",
    nice: "Marine, Industrial Utilities & Processing Systems",
  },

  "united-kingdom": {
    london: "Power Infrastructure, Utilities & Engineering Systems",
    manchester: "Manufacturing, Textile & Industrial Processing",
    birmingham: "Automotive, Metalworking & Manufacturing Industries",
    glasgow: "Marine, Energy & Heavy Engineering Systems",
    liverpool: "Port, Marine, Logistics & Industrial Utilities",
  },

  italy: {
    milan: "Manufacturing, Industrial Engineering & Energy Systems",
    rome: "Utilities, Manufacturing & Industrial Infrastructure",
    turin: "Automotive, Machinery & Industrial Engineering",
    naples: "Marine, Port, Energy & Process Industries",
    bologna: "Manufacturing, Packaging & Industrial Processing",
  },

  spain: {
    madrid: "Manufacturing, Energy & Industrial Utilities",
    barcelona: "Chemical, Manufacturing & Port-Based Industries",
    valencia: "Port, Manufacturing & Food Processing Industries",
    bilbao: "Heavy Industry, Energy & Engineering Systems",
    seville: "Energy, Manufacturing & Industrial Processing",
  },

  netherlands: {
    amsterdam: "Industrial Utilities, Manufacturing & Energy Systems",
    rotterdam: "Port, Marine, Oil & Gas & Chemical Industries",
    utrecht: "Engineering, Utilities & Industrial Systems",
    eindhoven: "Technology Manufacturing & Industrial Engineering",
    groningen: "Energy, Gas & Industrial Operations",
  },

  belgium: {
    brussels: "Industrial Utilities, Manufacturing & Energy Systems",
    antwerp: "Port, Chemical Processing & Refinery Industries",
    ghent: "Manufacturing, Steel & Industrial Processing",
    liege: "Heavy Industry, Engineering & Manufacturing",
    bruges: "Marine, Industrial Utilities & Manufacturing",
  },

  sweden: {
    stockholm: "Energy, Manufacturing & Industrial Utilities",
    gothenburg: "Marine, Automotive & Port Industries",
    malmo: "Manufacturing, Energy & Industrial Processing",
    uppsala: "Pharmaceutical, Utilities & Industrial Systems",
    vasteras: "Energy, Power Systems & Industrial Engineering",
  },

  norway: {
    oslo: "Energy, Utilities & Industrial Infrastructure",
    bergen: "Marine, Offshore & Energy Industries",
    stavanger: "Oil & Gas, Offshore Energy & Process Systems",
    trondheim: "Engineering, Marine & Industrial Technology",
    tromso: "Marine, Cold-Climate Energy & Industrial Systems",
  },

  denmark: {
    copenhagen: "Energy, Utilities & Sustainable Manufacturing",
    aarhus: "Manufacturing, Port & Industrial Processing",
    odense: "Industrial Manufacturing, Engineering & Automation",
    aalborg: "Cement, Energy & Heavy Industrial Systems",
    esbjerg: "Offshore Energy, Wind Power & Port Industries",
  },
};

const descriptionVariants = [
  (company, keyword, city, country) =>
    `${company} supplies ${keyword} for valves, flanges, pumps, turbines, generators, compressors, pipelines, and high-temperature equipment in ${city}, ${country}. These removable insulation jackets help reduce heat loss, improve worker safety, lower energy cost, and support easy maintenance access.`,

  (company, keyword, city, country) =>
    `Industrial plants in ${city}, ${country} use ${keyword} to control surface heat, improve energy efficiency, and protect maintenance teams. ${company} provides custom removable insulation covers for valves, pumps, turbines, exhaust systems, compressors, and process piping.`,

  (company, keyword, city, country) =>
    `${company} supports industries in ${city}, ${country} with ${keyword} designed for high-temperature equipment. These reusable thermal covers reduce heat radiation, improve safety around hot surfaces, and allow fast removal during inspection, shutdown, or maintenance.`,

  (company, keyword, city, country) =>
    `For industrial facilities in ${city}, ${country}, ${company} provides ${keyword} for heat loss reduction, worker protection, and operating cost control. Covers are custom-made for valves, flanges, pipelines, turbines, generators, compressors, and process equipment.`,
];

const labelVariants = [
  "Major Industrial Cities",
  "Industrial Cities We Serve",
  "City-Based Insulation Coverage",
  "Industrial Locations Covered",
];

export function buildRelatedCitiesSeo({ country }) {
  if (!country?.slug || !Array.isArray(country.cities)) return null;

  const seed = buildUniquenessSeed(country.slug, "related-cities");

  const countryKeywords = buildCountryRelatedKeywords(country);
  const countryKeyword =
    pick(countryKeywords, seed, 2) ||
    `industrial insulation jackets in ${country.name}`;

  const industryFocus =
    countryIndustryFocus[country.slug] ||
    country.industries?.join(", ") ||
    "industrial manufacturing and energy systems";

  const cities = country.cities.map((city, index) => {
    const citySeed = buildUniquenessSeed(country.slug, city.name);

    const cityKeywords = buildCityRelatedKeywords(city, country);
    const cityKeyword =
      pick(cityKeywords, citySeed, index) ||
      `industrial insulation jackets in ${city.display}, ${country.name}`;

    const cityIndustry =
      cityIndustryMap?.[country.slug]?.[city.name] || industryFocus;

    const descriptionTemplate = pick(descriptionVariants, citySeed, index);

    return {
      name: city.name,
      display: city.display,
      href: `/removable-insulation-jackets/${country.slug}/${city.name}`,
      industry: cityIndustry,
      description: descriptionTemplate(
        "M. Shahrukh Engineering Works",
        cityKeyword,
        city.display,
        country.name
      ),
    };
  });

  return {
    label: pick(labelVariants, seed, 1),

    title: `${countryKeyword} Across Major Industrial Cities`,

    description: `Explore city-focused removable insulation jacket solutions across ${country.name}. M. Shahrukh Engineering Works supports ${industryFocus} with ${countryKeyword}, custom thermal covers, heat loss reduction systems, worker safety solutions, and reusable maintenance-friendly insulation.`,

    cities,
  };
}
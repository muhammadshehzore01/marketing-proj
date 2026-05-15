// marketing-proj/src/lib/seo/engine/shared/faqEngine.js

import { buildUniquenessSeed } from "@/lib/data/shared/uniqueness";
import {
  buildCountryRelatedKeywords,
  buildCityRelatedKeywords,
} from "@/lib/data/shared/keywordPool";

const defaultFaqs = [
  {
    question: "What are removable insulation jackets?",
    answer:
      "Removable insulation jackets are reusable thermal covers designed for industrial equipment to reduce heat loss, improve energy efficiency, and improve worker safety around high-temperature surfaces.",
  },
  {
    question: "Where are insulation jackets commonly used?",
    answer:
      "These jackets are widely used on valves, flanges, pumps, turbines, compressors, generators, exhaust systems, and pipelines in industrial facilities.",
  },
  {
    question: "Are insulation jackets reusable?",
    answer:
      "Yes, they are specifically designed for easy removal and reinstallation, making maintenance, inspection, and repairs more efficient.",
  },
  {
    question: "Do insulation jackets reduce energy costs?",
    answer:
      "Yes, by minimizing thermal energy loss, insulation jackets improve system efficiency and significantly reduce fuel and operational costs.",
  },
  {
    question: "Can insulation jackets be custom-made?",
    answer:
      "Yes, jackets are custom-manufactured according to equipment dimensions, temperature range, and industrial operating conditions.",
  },
  {
    question: "Which industries use thermal insulation jackets?",
    answer:
      "Power plants, refineries, chemical plants, textile industries, food processing, cement, pharmaceuticals, and manufacturing sectors commonly use them.",
  },
];

function buildGeoFaqs(country, city = null, seed = 0) {
  const keyword = city
    ? buildCityRelatedKeywords(city, country)[0]
    : buildCountryRelatedKeywords(country)[0];

  const location = city
    ? `${city.display}, ${country.name}`
    : country.name;

  return [
    {
      question: `Why are ${keyword} important in ${location}?`,
      answer: `${keyword} are widely used in ${location} to reduce industrial heat loss, improve worker safety, lower operating costs, and support energy efficiency in high-temperature industrial systems.`,
    },
    {
      question: `Which industries in ${location} commonly use removable insulation jackets?`,
      answer: `Industries such as power generation, oil & gas, chemical processing, manufacturing, marine systems, and industrial utilities in ${location} commonly use removable insulation systems.`,
    },
    {
      question: `Can insulation jackets in ${location} be customized for industrial equipment?`,
      answer: `Yes, removable insulation jackets supplied for ${location} are custom-manufactured according to equipment dimensions, operating temperature, maintenance requirements, and industrial applications.`,
    },
    {
      question: `Do thermal insulation jackets improve industrial efficiency in ${location}?`,
      answer: `Yes, insulation jackets significantly improve energy efficiency, reduce fuel consumption, lower maintenance costs, and support industrial safety standards in ${location}.`,
    },
  ];
}

export function buildFaqSeo({ country, city = null }) {
  if (!country?.slug) {
    return {
      label: "FAQ",
      title: "Frequently Asked Questions",
      description:
        "Learn more about our removable thermal insulation jackets, energy saving benefits, industrial applications, and custom solutions.",
      faqs: defaultFaqs,
    };
  }

  const seed = buildUniquenessSeed(country.slug, city?.name || "country");

  return {
    label: city
      ? `FAQ for ${city.display}`
      : `FAQ for ${country.name}`,

    title: city
      ? `Industrial Insulation FAQs for ${city.display}`
      : `Industrial Insulation FAQs for ${country.name}`,

    description: city
      ? `Learn about removable insulation jackets, energy saving systems, worker safety, industrial applications, and custom thermal solutions for industries in ${city.display}, ${country.name}.`
      : `Learn about removable insulation jackets, energy efficiency, industrial thermal protection, and custom insulation solutions for industrial sectors across ${country.name}.`,

    faqs: [...buildGeoFaqs(country, city, seed), ...defaultFaqs].slice(0, 8),
  };
}



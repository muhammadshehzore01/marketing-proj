// /src/lib/seo/engine/rankingBoost.js

const faqTemplates = [
  (place) => `Why are insulation jackets important in ${place}?`,
  (place) => `How do removable insulation systems improve efficiency in ${place}?`,
  (place) => `What industries in ${place} use thermal insulation most?`,
  (place) => `Are insulation jackets cost-effective in ${place}?`,
  (place) => `How much energy savings can insulation provide in ${place}?`,
];

const answerTemplates = [
  (place) =>
    `In ${place}, insulation jackets reduce energy loss and improve system safety in industrial operations.`,

  (place) =>
    `Industries in ${place} use insulation systems to lower operational costs and increase thermal efficiency.`,

  (place) =>
    `Thermal insulation in ${place} helps improve equipment lifespan and reduce maintenance downtime.`,

  (place) =>
    `Most industrial facilities in ${place} rely on insulation to maintain stable operating temperatures.`,
];

function pick(seed, arr) {
  return arr[Math.abs(seed) % arr.length];
}

export function buildFAQ(country, city = null) {
  const place = city?.display || country?.name || "industrial facilities";

  const seed = country.slug.length + (city?.name?.length || 0);

  const faqs = [];

  for (let i = 0; i < 4; i++) {
    faqs.push({
      question: pick(seed + i, faqTemplates)(place),
      answer: pick(seed + i * 2, answerTemplates)(place),
    });
  }

  return faqs;
}
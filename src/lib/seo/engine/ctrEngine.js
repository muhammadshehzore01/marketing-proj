/* =====================================================
   /home/shahrukh-eng/marketing-proj/src/lib/seo/engine/ctrEngine.js
   - Optimized for ranking boost
===================================================== */

const CTR_MODIFIERS = [
  "Best",
  "Top Rated",
  "Industrial Grade",
  "High Temperature",
  "Certified",
  "Advanced",
  "Energy Saving",
];

function pick(arr, seed = 0) {
  return arr[seed % arr.length];
}

/* =====================================================
   🔥 META TITLE OPTIMIZER
===================================================== */
export function buildCTRTitle({ country, city = null, seed = 0 }) {
  const modifier = pick(CTR_MODIFIERS, seed);

  if (city) {
    return `${modifier} Industrial Insulation Jackets in ${city.display}, ${country.name}`;
  }

  return `${modifier} Industrial Insulation Jackets in ${country.name} | Energy Efficiency`;
}

/* =====================================================
   🔥 META DESCRIPTION OPTIMIZER
===================================================== */
export function buildCTRDescription({ country, city = null }) {
  if (city) {
    return `Custom high-temperature insulation jackets in ${city.display}, ${country.name}. Reduce heat loss, improve safety, and boost energy efficiency for industrial systems.`;
  }

  return `Industrial insulation jackets across ${country.name}. Improve energy efficiency, reduce heat loss, and protect industrial equipment.`;
}

/* =====================================================
   🔥 CTR SCORE (FUTURE RANKING SIGNAL)
===================================================== */
export function calculateCTRScore({ hasFAQ, hasInternalLinks }) {
  let score = 50;

  if (hasFAQ) score += 25;
  if (hasInternalLinks) score += 25;

  return Math.min(score, 100);
}
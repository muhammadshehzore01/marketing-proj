/* =====================================================
    marketing-proj/src/lib/seo/engine/rankingBoost.js
   🚀 PHASE 11: GOOGLE RANKING BOOST ENGINE
   - CTR boost
   - FAQ rich results
   - keyword density control
   - SEO structure optimization
===================================================== */

/* =====================================================
   🔥 FAQ GENERATOR (RICH RESULT BOOST)
===================================================== */
export function buildFAQ(country, city = null) {
  const place = city ? city.display : country.name;

  return [
    {
      question: `What is industrial insulation used for in ${place}?`,
      answer: `Industrial insulation in ${place} is used to reduce heat loss, improve energy efficiency, and protect workers from high-temperature equipment.`,
    },
    {
      question: `Do you provide insulation jackets in ${place}?`,
      answer: `Yes, we provide custom removable insulation jackets for valves, turbines, pumps, and generators in ${place}.`,
    },
    {
      question: `Which industries need insulation in ${place}?`,
      answer: `Power plants, oil & gas, chemical processing, manufacturing, and marine industries in ${place} require thermal insulation solutions.`,
    },
  ];
}

/* =====================================================
   🔥 KEYWORD DENSITY CONTROLLER (SEO SAFE)
===================================================== */
export function optimizeKeywordDensity(content, keyword) {
  if (!content || !keyword) return content;

  const words = content.split(" ");
  let count = 0;

  return words
    .map((word) => {
      if (word.toLowerCase().includes(keyword.toLowerCase())) {
        count++;
        if (count > 5) return word.replace(keyword, ""); // prevent spam
      }
      return word;
    })
    .join(" ");
}

/* =====================================================
   🔥 SEO STRUCTURE ENFORCER
===================================================== */
export function enforceSEOStructure(html) {
  if (!html) return html;

  return html
    .replace(/<h1>/g, '<h1 class="seo-h1">')
    .replace(/<h2>/g, '<h2 class="seo-h2">')
    .replace(/<p>/g, '<p class="seo-p">');
}

/* =====================================================
   🔥 PAGE AUTHORITY SCORE (FOR FUTURE SITEMAP BOOST)
===================================================== */
export function calculatePageScore({ hasFAQ, hasInternalLinks, hasSchema }) {
  let score = 0;

  if (hasFAQ) score += 30;
  if (hasInternalLinks) score += 30;
  if (hasSchema) score += 40;

  return score; // used later in sitemap priority boost
}
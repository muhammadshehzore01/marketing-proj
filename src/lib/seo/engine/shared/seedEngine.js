// marketing-proj/src/lib/seo/engine/shared/seedEngine.js
// marketing-proj/src/lib/seo/engine/shared/seedEngine.js

/* =====================================================
🔥 SEO SEED ENGINE (CLEAN + NO CIRCULAR DEPENDENCY)
===================================================== */

/**
 * Build deterministic numeric seed from slug + type
 */
export function buildUniquenessSeed(slug, type = "default") {
  if (!slug) return 0;

  const base = `${slug}-${type}`;

  let seed = 0;

  for (let i = 0; i < base.length; i++) {
    seed = (seed * 31 + base.charCodeAt(i)) % 100000;
  }

  return Math.abs(seed);
}

/**
 * Keyword pool (SEO variation system)
 */
const keywordPool = [
  "advanced",
  "industrial",
  "thermal",
  "energy-efficient",
  "high-performance",
  "next-gen",
  "automated",
  "precision",
  "smart",
  "optimized",
];

/**
 * Rotate keyword based on seed
 */
export function getRotatedKeyword(seed = 0) {
  if (!Array.isArray(keywordPool) || keywordPool.length === 0) {
    return "industrial";
  }

  return keywordPool[seed % keywordPool.length];
}

/**
 * Main SEO seed generator (SAFE OUTPUT)
 */
export function getSeoSeed(slug, type = "default") {
  const seed = buildUniquenessSeed(slug, type);
  const keyword = getRotatedKeyword(seed);

  return {
    seed,
    keyword,
  };
}
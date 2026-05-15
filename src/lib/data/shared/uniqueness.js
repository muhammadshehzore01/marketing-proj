// /home/shahrukh-eng/marketing-proj/src/lib/data/shared/uniqueness.js
// =====================================================
// 🌍 IMPROVED UNIQUENESS SEED ENGINE (STABLE + SCALABLE)
// =====================================================

/**
 * Creates a strong deterministic seed for SEO variation
 * - stable (same input = same output)
 * - highly varied across city/country
 * - safe for production SEO systems
 */

export function buildUniquenessSeed(countrySlug, citySlug = "") {
  const country = countrySlug || "unknown";
  const city = citySlug || "global";

  // 🔥 Add multiple entropy layers (VERY IMPORTANT)
  const str = `${country}-${city}-${city.length}-${country.length}`;

  let hash = 0;

  // 🔥 stronger deterministic hash (better spread than your current one)
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);

    hash = (hash << 5) - hash + char;

    // force 32-bit integer behavior
    hash = hash & hash;
  }

  // 🔥 normalize into positive large range
  const normalized = Math.abs(hash);

  // 🔥 spread factor (prevents clustering across similar cities)
  const spread = (normalized * 9301 + 49297) % 233280;

  return spread;
}
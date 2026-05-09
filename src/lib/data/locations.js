// =====================================================
// ✅ ACTIVE LOCATIONS (ONLY THESE WILL RENDER)
// /home/shahrukh-eng/marketing-proj/src/lib/data/locations.js
// =====================================================
// =====================================================
// 🌍 SINGLE SOURCE OF TRUTH (EUROPE SEO SYSTEM)
// =====================================================

import { europeCountries } from "./europeCountries";

/**
 * Convert array → object map
 * {
 *   germany: {...},
 *   france: {...}
 * }
 */
export const ACTIVE_LOCATIONS = europeCountries.reduce((acc, country) => {
  acc[country.slug] = {
    slug: country.slug,
    name: country.name,
    industries: country.industries || [],
    cities: country.cities || [],

    // SEO defaults (auto-safe fallback)
    metaTitle: `${country.name} Industrial Insulation Jackets | MSEW`,
    metaDescription: `High-quality industrial insulation jackets in ${country.name} for valves, turbines, pumps & energy systems.`,
  };
 
  return acc;
}, {});

/**
 * MAIN EXPORT USED EVERYWHERE IN YOUR APP
 */
export const locations = ACTIVE_LOCATIONS;

/**
 * Optional debug export (safe)
 */
export const ALL_LOCATIONS = ACTIVE_LOCATIONS;
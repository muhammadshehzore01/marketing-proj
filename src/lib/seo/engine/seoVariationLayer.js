/* =====================================================
🌍 SEO VARIATION LAYER (CLEAN ARCHITECTURE v2)
marketing-proj/src/lib/seo/engine/seoVariationLayer.js
=====/* =====================================================
🌍 SEO VARIATION LAYER (CLEAN ARCHITECTURE v2 
===================================================== */

/* =====================================================
🔹 1. STATIC COUNTRY + CITY INTELLIGENCE
===================================================== */
export { countryNarratives } from "../../data/countries/countryNarratives";
export { cityNarratives } from "../../data/cities/cityNarratives";

/* =====================================================
🔹 2. SEO CONTENT BUILDERS (AUTO + CUSTOM HYBRID)
===================================================== */
export {
  customCountryOverviews,
  generateCountryOverview,
} from "../../data/countries/countryOverviews";

export {
  generateCityOverview,
} from "../../data/cities/cityOverviews";

/* =====================================================
🔹 3. SEO TITLES (HUMAN CONTROLLED LAYER)
===================================================== */
export { customCityTitles } from "../../data/cities/cityTitles";

/* =====================================================
🔹 4. SEMANTIC KEYWORDS ENGINE
===================================================== */
export {
  keywordPool,
  getRotatedKeyword,
} from "../../data/shared/keywordPool";

/* =====================================================
🔹 5. UNIQUENESS ENGINE (SEO DIVERSITY CORE)
===================================================== */
export {
  buildUniquenessSeed,
} from "../../data/shared/uniqueness";

/* =====================================================
🔥 FUTURE EXTENSION HOOKS (IMPORTANT)
===================================================== */

/*
export {
  industryGraph,
  keywordClusters,
  smartReplace
} from "../../data/shared/semanticEngine";
*/
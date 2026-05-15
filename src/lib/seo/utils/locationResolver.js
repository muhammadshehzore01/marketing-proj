// /home/shahrukh-eng/marketing-proj/src/lib/seo/utils/locationResolver.js


import { ACTIVE_LOCATIONS } from "@/lib/data/locations";

/* =====================================================
   SAFE COUNTRY RESOLVER (CRASH PROOF)
===================================================== */
export function getCountryBySlug(slug) {
  if (!slug) return null;

  const key = slug.toLowerCase().trim();

  return (
    ACTIVE_LOCATIONS[key] ||
    Object.values(ACTIVE_LOCATIONS).find(
      (c) => c.slug?.toLowerCase() === key
    ) ||
    null
  );
}




export function getCityBySlug(country, citySlug) {
  if (!country || !citySlug) return null;

  const key = citySlug.toLowerCase().trim();

  return (
    country.cities?.find(
      (c) =>
        c.name?.toLowerCase() === key ||
        c.slug?.toLowerCase() === key
    ) || null
  );
}
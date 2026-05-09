// /home/shahrukh-eng/marketing-proj/src/lib/data/shared/uniqueness.js
export function buildUniquenessSeed(countrySlug, citySlug = "") {

  let hash = 0;

  const str = `${countrySlug}-${citySlug}`;

  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}
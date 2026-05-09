// /home/shahrukh-eng/marketing-proj/src/lib/seo/engine/country/countryTitleEngine.js

export const countryTitlePatterns = [
  (k, c) => `${k} solutions for industrial systems in ${c}`,
  (k, c) => `Industrial systems in ${c} powered by ${k}`,
  (k, c) => `${c} industrial sector with advanced ${k}`,
  (k, c) => `${k} technology transforming industries in ${c}`,
  (k, c) => `Next-gen ${k} applications across ${c} industries`,
];

export function generateCountryTitle(keyword, country, seed) {
  return countryTitlePatterns[seed % countryTitlePatterns.length](
    keyword,
    country.name
  );
}
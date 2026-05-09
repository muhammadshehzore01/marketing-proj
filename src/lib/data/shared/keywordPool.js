// /home/shahrukh-eng/marketing-proj/src/lib/data/shared/keywordPool.js
export const keywordPool = [
  "removable insulation jackets",
  "industrial thermal protection systems",
  "high temperature insulation solutions",
  "energy saving insulation covers",
  "heat loss reduction systems",
  "valve insulation jackets",
  "turbine insulation systems",
];

export function getRotatedKeyword(seed = 0) {
  return keywordPool[seed % keywordPool.length];
}
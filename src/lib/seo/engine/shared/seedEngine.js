// marketing-proj/src/lib/seo/engine/shared/seedEngine.js
// /src/lib/seo/engine/shared/seedEngine.js

function hashString(str) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}

export function getSeoSeed(input = "", type = "global") {
  const timeFactor = 1
  const typeFactor =
    type === "city" ? 17 :
    type === "country" ? 31 :
    type === "hero" ? 47 : 11;

  const base = `${input}-${type}-${timeFactor}`;

  const hash = hashString(base);

  return {
    seed: (hash * typeFactor) % 100000,
    keyword: generateKeyword(hash),
  };
}

/* ================= KEYWORD VARIATION ================= */

const keywordPool = [
  "thermal insulation",
  "removable insulation jackets",
  "industrial heat protection",
  "energy efficiency systems",
  "high temperature insulation",
  "valve insulation solutions",
];

function generateKeyword(hash) {
  return keywordPool[hash % keywordPool.length];
}
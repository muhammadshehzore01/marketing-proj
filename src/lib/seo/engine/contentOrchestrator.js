// /src/lib/seo/engine/contentOrchestrator.js


/* =====================================================
🔥 SEO CONTENT ORCHESTRATOR (STEP 10 FIX CORE)
Stops duplicate content + controls all engines
===================================================== */

import { generateCountryEnterprise } from "./semanticContentEngine";
import { generateCityEnterprise } from "./semanticContentEngine";
import { getSeoSeed } from "./shared/seedEngine";

/* ================= GLOBAL CONTENT LOCK ================= */

function hashKey(str = "") {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/* =====================================================
🔥 COUNTRY ORCHESTRATION (SINGLE SOURCE OF TRUTH)
===================================================== */

export function buildCountryContent(country) {
  const { seed, keyword } = getSeoSeed(
    `country-orchestrator-${country.slug}`,
    "country"
  );

  const semantic = generateCountryEnterprise({
    country,
    seed,
  });

  const uniqueKey = hashKey(country.slug + seed);

  return {
    uniqueKey,

    intro: `${country.name} is a key industrial hub with advanced manufacturing and energy systems.`,

    semantic,

    seed,
    keyword,
  };
}

/* =====================================================
🔥 CITY ORCHESTRATION (NO COUNTRY DUPLICATION)
===================================================== */

export function buildCityContent(city, country) {
  const { seed, keyword } = getSeoSeed(
    `city-orchestrator-${city.name}-${country.slug}`,
    "city"
  );

  const semantic = generateCityEnterprise({
    city,
    country,
    seed,
  });

  const uniqueKey = hashKey(city.name + country.slug + seed);

  return {
    uniqueKey,

    intro: `${city.display} plays a vital role in ${country.name}'s industrial ecosystem.`,

    semantic,

    seed,
    keyword,
  };
}

/* =====================================================
🔥 DUPLICATE GUARD (VERY IMPORTANT)
===================================================== */

export function isDuplicate(a, b) {
  if (!a || !b) return false;

  const similarity =
    a.split(" ").filter((w) => b.includes(w)).length / a.split(" ").length;

  return similarity > 0.65; // 65% overlap = duplicate
}

/* =====================================================
🔥 FINAL CONTENT MERGER (SAFE OUTPUT)
===================================================== */

export function mergeSeoContent(base, semantic) {
  const cleanBase = base?.trim() || "";
  const cleanSemantic = semantic?.trim() || "";

  if (isDuplicate(cleanBase, cleanSemantic)) {
    return cleanBase; // remove duplicate content
  }

  return `${cleanBase}\n\n${cleanSemantic}`;
}
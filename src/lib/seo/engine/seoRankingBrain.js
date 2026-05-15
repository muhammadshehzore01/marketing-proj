// marketing-proj/src/lib/seo/engine/seoRankingBrain.js


/* =====================================================
   🧠 SEO RANKING BRAIN ROUTER (STEP 7 CORE)
   Controls global SEO power distribution
===================================================== */

import {
  getPageAuthorityScore,
  getKeywordIntentBoost,
  calculateInternalLinkScore,
} from "./seoRankingLayer";

/* =====================================================
   🔥 PAGE TYPE DETECTOR
===================================================== */

function detectPageType({ city, country, service }) {
  if (service) return "service";
  if (city) return "city";
  if (country) return "country";
  return "blog";
}

/* =====================================================
   🔥 MAIN RANKING BRAIN
===================================================== */

export function getSeoBrainSignals({
  city,
  country,
  service,
  keyword = "",
}) {
  const type = detectPageType({ city, country, service });

  const authority = getPageAuthorityScore({ city, country, service });
  const intentBoost = getKeywordIntentBoost(keyword);

  const depth =
    type === "city" ? 2 : type === "country" ? 1 : service ? 3 : 4;

  /* =====================================================
     🔥 LINK POWER CALCULATION
  ===================================================== */

  const linkPower = calculateInternalLinkScore({
    cityLinks: country?.cities || [],
    serviceLinks: service ? [service] : [],
    productLinks: [],
    authorityBoost: authority * intentBoost,
  });

  /* =====================================================
     🔥 FINAL BRAIN SCORE (0–100)
  ===================================================== */

  let brainScore =
    authority * 0.4 + linkPower * 0.4 + intentBoost * 10;

  brainScore = Math.min(100, Math.max(0, brainScore));

  /* =====================================================
     🔥 BOOST LEVEL CLASSIFICATION
  ===================================================== */

  let level = "LOW";

  if (brainScore >= 75) level = "HIGH";
  else if (brainScore >= 50) level = "MEDIUM";

  return {
    type,
    score: Number(brainScore.toFixed(2)),
    level,

    authority,
    intentBoost,
    linkPower,

    depth,

    /* =====================================================
       🔥 ACTION SIGNALS FOR OTHER SYSTEMS
    ===================================================== */

    signals: {
      allowHeavyInternalLinks: brainScore > 60,
      allowFooterLinks: brainScore > 70,
      allowFAQBoost: brainScore > 55,
      allowSchemaBoost: brainScore > 65,
    },
  };
}
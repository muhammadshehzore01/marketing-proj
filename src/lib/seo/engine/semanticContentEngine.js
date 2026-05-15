/* =====================================================
🔥 LEVEL 4 ENTERPRISE SEO ENGINE (SEMANTIC + SCALABLE)
marketing-proj/src/lib/seo/engine/semanticContentEngine.js
===================================================== */

/* =====================================================
   🔹 CORE PICKER (IMPROVED ENTROPY SEED)
===================================================== */
function pick(seed, arr, offset = 0) {
  const safeSeed = Math.abs(seed * 9301 + offset * 49297) % 233280;
  return arr[safeSeed % arr.length];
}

/* =====================================================
   🔥 INDUSTRY KNOWLEDGE GRAPH
===================================================== */
const industryGraph = {
  manufacturing: {
    equipment: ["industrial pipelines", "press machines", "heat exchangers"],
    risk: ["thermal overload", "energy leakage", "production heat loss"],
  },
  automotive: {
    equipment: ["assembly systems", "thermal chambers", "engine testing units"],
    risk: ["high engine heat loss", "unstable thermal zones"],
  },
  energy: {
    equipment: ["turbines", "boilers", "power generators"],
    risk: ["energy dissipation", "high-temperature stress"],
  },
  chemical: {
    equipment: ["reactors", "distillation units", "processing lines"],
    risk: ["chemical heat instability", "continuous thermal reaction loss"],
  },
};

/* =====================================================
   🔥 KEYWORD CLUSTERS
===================================================== */
const keywordClusters = {
  insulation: [
    "insulation jacket",
    "thermal cover",
    "heat shield",
    "lagging system",
  ],
  efficiency: [
    "energy efficiency",
    "thermal efficiency",
    "operational efficiency",
  ],
  loss: ["heat loss", "energy loss", "thermal loss"],
};

/* =====================================================
   🔥 SMART REPLACE (SAFE + CONTROLLED)
===================================================== */
function smartReplace(text, seed) {
  if (!text) return "";

  // only replace when word boundary exists
  return text
    .replace(/\binsulation\b/g, pick(seed, keywordClusters.insulation, 1))
    .replace(/\befficiency\b/g, pick(seed, keywordClusters.efficiency, 2))
    .replace(/\bheat loss\b/g, pick(seed, keywordClusters.loss, 3));
}

/* =====================================================
   🔥 FALLBACK
===================================================== */
const fallback = {
  equipment: "industrial systems",
  risk: "thermal inefficiency in operations",
};

/* =====================================================
   🔥 INTRO
===================================================== */
function intro(city, country, industry) {
  return `${city} in ${country} is a strategically important hub for the ${industry} sector, supporting large-scale industrial operations and energy systems.`;
}

/* =====================================================
   🔥 TECHNICAL
===================================================== */
function technical(city, industryData, seed) {
  const equipment = pick(seed + city.length, industryData.equipment);

  return `Industrial systems such as ${equipment} operate under extreme thermal conditions requiring advanced heat management solutions.`;
}

/* =====================================================
   🔥 RISK (IMPROVED VARIATION)
===================================================== */
function risk(city, industryData, cityRisk, seed) {
  const r =
    cityRisk ||
    pick(seed + city.length * 3, industryData.risk);

  return `A major challenge in ${city} industries is ${r}, which directly impacts operational efficiency and system reliability.`;
}

/* =====================================================
   🔥 SOLUTION
===================================================== */
function solution(city) {
  return `Removable insulation jackets are widely implemented in ${city} to reduce thermal loss and improve system stability.`;
}

/* =====================================================
   🔥 CTA (VARIATION FIXED)
===================================================== */
function cta(city, seed) {
  const variants = [
    `Custom-engineered insulation solutions are available for industrial applications in ${city}, designed for high-temperature environments.`,
    `We provide advanced thermal insulation systems in ${city} for maximum efficiency and safety.`,
    `Industrial-grade insulation jackets in ${city} ensure long-term thermal performance and energy savings.`,
  ];

  return pick(seed, variants, 4);
}

/* =====================================================
   🔥 INDUSTRY RESOLVER (FIXED LOGIC)
===================================================== */
function getIndustryData(country, city) {
  const key =
    country?.industries?.[0] ||
    "manufacturing";

  return (
    industryGraph[key] ||
    industryGraph.manufacturing
  );
}

/* =====================================================
   🔥 CITY GENERATOR (FIXED CORE)
===================================================== */
export function generateCityEnterprise({
  city,
  country,
  seed,
  cityNarratives = {},
}) {
  if (!city || !country) return "";

  const industryKey =
    country.industries?.[0] || "manufacturing";

  const industryData = getIndustryData(country, city);

  const cityRisk = cityNarratives?.[city.name]?.problem;

  const baseIntro = intro(city.display, country.name, industryKey);

  const tech = technical(city.display, industryData, seed);
  const riskText = risk(city.display, industryData, cityRisk, seed);
  const sol = solution(city.display);
  const ctaText = cta(city.display, seed);

  const final = {
    intro: smartReplace(baseIntro, seed),
    tech: smartReplace(tech, seed),
    risk: smartReplace(riskText, seed),
    solution: smartReplace(sol, seed),
    cta: smartReplace(ctaText, seed),
  };

  return [
    final.intro,
    final.tech,
    final.risk,
    final.solution,
    final.cta,
  ].join(" ");
}

/* =====================================================
   🔥 COUNTRY GENERATOR (FIXED)
===================================================== */
export function generateCountryEnterprise({ country, seed }) {
  const industry =
    country?.industries?.[0] ||
    "industrial manufacturing";

  return [
    `${country.name} is a major European hub for ${industry}, supporting large-scale energy and manufacturing systems.`,
    `Industrial operations across ${country.name} face challenges related to thermal efficiency and energy optimization.`,
    `Advanced insulation technologies are widely adopted to improve performance and reduce energy loss.`,
  ]
    .map((t) => smartReplace(t, seed))
    .join(" ");
}

export {
  smartReplace,
  industryGraph,
};
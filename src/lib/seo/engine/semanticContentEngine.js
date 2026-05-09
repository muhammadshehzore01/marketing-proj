/* =====================================================
🔥 LEVEL 4 ENTERPRISE SEO ENGINE (SEMANTIC + SCALABLE)
marketing-proj/src/lib/seo/engine/semanticContentEngine.js
===================================================== */
/* =====================================================
🔥 LEVEL 4 ENTERPRISE SEO ENGINE (SEMANTIC + SCALABLE)
===================================================== */

/* =====================================================
   🔹 CORE PICKER (IMPROVED WEIGHTED VARIATION)
===================================================== */
function pick(seed, arr) {
  const index = Math.abs(Math.floor(Math.sin(seed) * 10000)) % arr.length;
  return arr[index];
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
  insulation: ["insulation jacket", "thermal cover", "heat shield", "lagging system"],
  efficiency: ["energy efficiency", "thermal efficiency", "operational efficiency"],
  loss: ["heat loss", "energy loss", "thermal loss"],
};

/* =====================================================
   🔥 SMART REPLACE (FIXED GLOBAL + RELIABLE)
===================================================== */
function smartReplace(text, seed) {
  return text
    .replace(/insulation/g, pick(seed, keywordClusters.insulation))
    .replace(/efficiency/g, pick(seed + 1, keywordClusters.efficiency))
    .replace(/heat loss/g, pick(seed + 2, keywordClusters.loss));
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
function technical(city, industryData) {
  const equipment = pick(city.length, industryData.equipment);
  return `Industrial systems such as ${equipment} operate under extreme thermal conditions requiring advanced heat management solutions.`;
}

/* =====================================================
   🔥 RISK (FIXED + CITY INTELLIGENCE SUPPORT)
===================================================== */
function risk(city, industryData, cityRisk) {
  const r = cityRisk || pick(city.length + 3, industryData.risk);
  return `A major challenge in ${city} industries is ${r}, which directly impacts operational efficiency and system reliability.`;
}

/* =====================================================
   🔥 SOLUTION
===================================================== */
function solution(city) {
  return `Removable insulation jackets are widely implemented in ${city} to reduce thermal loss and improve system stability.`;
}

/* =====================================================
   🔥 CTA (NOW VARIATION ENABLED)
===================================================== */
function cta(city, seed) {
  const variants = [
    `Custom-engineered insulation solutions are available for industrial applications in ${city}, designed for high-temperature environments.`,
    `We provide advanced thermal insulation systems in ${city} for maximum efficiency and safety.`,
    `Industrial-grade insulation jackets in ${city} ensure long-term thermal performance and energy savings.`,
  ];

  return pick(seed, variants);
}

/* =====================================================
   🔥 CITY INTELLIGENCE RESOLVER
===================================================== */
function getIndustryData(country) {
  return industryGraph[country.industries?.[0]] || {
    equipment: [fallback.equipment],
    risk: [fallback.risk],
  };
}

/* =====================================================
   🔥 CITY GENERATOR (FIXED + CITY NARRATIVE SUPPORT)
===================================================== */
export function generateCityEnterprise({
  city,
  country,
  seed,
  cityNarratives = {},
}) {
  const industryKey = country.industries?.[0] || "manufacturing";
  const industryData = industryGraph[industryKey] || industryGraph.manufacturing;

  const cityRisk = cityNarratives?.[city.name]?.problem;

  const base = {
    intro: intro(city.display, country.name, industryKey),
    tech: technical(city.display, industryData),
    risk: risk(city.display, industryData, cityRisk),
    solution: solution(city.display),
    cta: cta(city.display, seed),
  };

  const final = {
    intro: smartReplace(base.intro, seed),
    tech: smartReplace(base.tech, seed),
    risk: smartReplace(base.risk, seed),
    solution: smartReplace(base.solution, seed),
    cta: smartReplace(base.cta, seed),
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
   🔥 COUNTRY GENERATOR
===================================================== */
export function generateCountryEnterprise({ country, seed }) {
  const industry = country.industries?.[0] || "industrial manufacturing";

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
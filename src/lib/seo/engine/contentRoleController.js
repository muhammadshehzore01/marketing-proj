// src/lib/seo/engine/contentRoleController.js

/* =====================================================
🔥 CONTENT ROLE CONTROLLER (STEP 9 FIX)
Prevents SEO repetition across sections
===================================================== */

function tokenize(text = "") {
  return text.toLowerCase().split(" ").filter(Boolean);
}

function overlapScore(a, b) {
  const setA = new Set(tokenize(a));
  const setB = new Set(tokenize(b));

  let match = 0;
  setB.forEach((w) => {
    if (setA.has(w)) match++;
  });

  return match;
}

/* =====================================================
🔥 CLEAN ROLE SEPARATION
===================================================== */
export function buildContentRoles({
  hero = "",
  intro = "",
  overview = "",
  semantic = "",
}) {
  return {
    hero,
    intro: reduceOverlap(hero, intro),
    overview: reduceOverlap(intro, overview),
    semantic: reduceOverlap(overview, semantic),
  };
}

/* =====================================================
🔥 CORE CLEANER (IMPORTANT)
===================================================== */
function reduceOverlap(source, target) {
  if (!target) return "";

  const sourceWords = tokenize(source);

  return target
    .split(" ")
    .filter((word) => !sourceWords.includes(word.toLowerCase()))
    .join(" ");
}
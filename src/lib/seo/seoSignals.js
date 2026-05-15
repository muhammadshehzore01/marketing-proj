import { getSeoBrainSignals } from "./engine/seoRankingBrain";
import { getIndexPriority } from "./engine/seoRankingLayer";

/* =====================================================
   🚀 SINGLE SOURCE SEO SIGNAL ENGINE (FIXED)
===================================================== */

export function buildSeoSignals(type = "city", depth = 1, context = {}) {
  const brain = getSeoBrainSignals(context || {});

  const basePriority = getIndexPriority({ type, depth });

  const finalPriority = Math.min(
    0.95,
    Math.max(0.4, (brain.score || 50) / 100)
  );

  return {
    index: "true",
    follow: "true",

    // 🔥 HYBRID PRIORITY (STATIC + AI BRAIN)
    priority: Number(((basePriority + finalPriority) / 2).toFixed(2)),

    changefreq:
      type === "country"
        ? brain.level === "HIGH"
          ? "weekly"
          : "monthly"
        : type === "city"
        ? brain.level === "HIGH"
          ? "daily"
          : "weekly"
        : "monthly",
  };
}
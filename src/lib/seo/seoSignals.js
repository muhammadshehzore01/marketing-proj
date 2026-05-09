/* =====================================================
   🚀 SEO SIGNALS BRIDGE (STEP 9 FINAL ALIGNMENT LAYER)
   /home/shahrukh-eng/marketing-proj/src/lib/seo/seoSignals.js
   SINGLE SOURCE OF TRUTH FOR SITEMAP + INDEXING
===================================================== */

import { getIndexPriority } from "./engine/seoRankingLayer";

/* =====================================================
   🔥 SEO SIGNAL BUILDER (SMART + CONSISTENT)
===================================================== */
export function buildSeoSignals(type = "city", depth = 1) {
  return {
    index: "true",
    follow: "true",

    // 🔥 NOW POWERED BY RANKING ENGINE (NO HARDCODE)
    priority: getIndexPriority({ type, depth }),

    changefreq:
      type === "country"
        ? "weekly"
        : type === "city"
        ? "weekly"
        : "monthly",
  };
}
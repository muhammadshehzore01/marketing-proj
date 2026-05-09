// /home/shahrukh-eng/marketing-proj/src/lib/seo/ranking/pageScore.js
export function calculatePageScore({
  hasFAQ,
  hasSchema,
  internalLinksCount,
  contentLength,
}) {
  let score = 0;

  if (hasFAQ) score += 25;
  if (hasSchema) score += 25;
  if (internalLinksCount > 5) score += 20;
  if (contentLength > 1500) score += 30;

  return Math.min(score, 100);
}
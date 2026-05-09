// /home/shahrukh-eng/marketing-proj/src/lib/seo/engine/shared/cleanText.js

export function cleanText(text) {
  if (!text) return "";
  return text.replace(/<[^>]*>/g, "").trim();
}
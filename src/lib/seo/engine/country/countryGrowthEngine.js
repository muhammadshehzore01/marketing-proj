// /home/shahrukh-eng/marketing-proj/src/lib/seo/engine/country/countryGrowthEngine.js


export function generateCountryGrowthSection(country, keyword) {

  const growthMap = {
    germany: "advanced automotive manufacturing and precision engineering industries",
    france: "nuclear energy, aerospace and refinery systems",
    italy: "industrial machinery and automotive production sectors",
    spain: "renewable energy and heavy industrial systems",
    netherlands: "chemical processing and marine logistics infrastructure",
    belgium: "high-density chemical and manufacturing hubs",
    sweden: "green energy and sustainable manufacturing systems",
    norway: "oil, gas and offshore energy infrastructure",
    denmark: "wind energy and power generation systems",
  };

  const base =
    growthMap[country.slug] ||
    "diverse industrial manufacturing and energy systems";

  return {
    title: `Industrial Growth in ${country.name}`,

    subtitle:
      `Industrial growth and thermal efficiency across ${country.name} manufacturing ecosystem`,

    content: [
      `${country.name} has a rapidly evolving industrial base driven by ${base}.`,
      `The demand for ${keyword} insulation systems is increasing due to energy efficiency regulations and operational safety requirements.`,
      `Modern industries in ${country.name} are adopting advanced thermal insulation solutions to reduce energy loss and improve long-term performance.`,
    ],
  };
}
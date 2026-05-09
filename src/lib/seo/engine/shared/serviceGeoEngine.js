
export function getServiceGeoContent(city, country) {
  const place = city?.display || country?.name || "your region";

  const industryMap = {
    germany: "automotive and precision engineering industries",
    france: "energy and refinery systems",
    italy: "manufacturing and industrial automation",
    spain: "renewable energy and heavy industries",
    netherlands: "chemical and marine industries",
    belgium: "industrial production and processing plants",
    sweden: "green energy and sustainable industries",
    norway: "oil, gas and offshore systems",
    denmark: "wind energy and power generation",
  };

  const cityMap = {
    berlin: "industrial automation and energy systems",
    hamburg: "maritime engineering and port industries",
    munich: "automotive engineering and high-tech manufacturing",
    frankfurt: "chemical and refinery infrastructure",
    cologne: "industrial chemical processing systems",
  };

  const keywords = [
    "removable insulation jackets",
    "thermal insulation covers",
    "valve insulation systems",
    "industrial heat protection solutions",
  ];

  const baseIndustry =
    industryMap[country?.slug] ||
    "industrial manufacturing and energy systems";

  const cityIndustry =
    cityMap[city?.name] || baseIndustry;

  const keyword =
    keywords[(city?.name?.length || 0) % keywords.length];

  return {
    title: `Industrial Insulation Solutions in ${place}`,

    description: `High-performance ${keyword} in ${place} for ${cityIndustry}. Designed to reduce heat loss, improve safety, and optimize industrial energy efficiency.`,

    extraText: `${place} is experiencing growing demand for advanced ${keyword} across ${cityIndustry}.`,
  };
}
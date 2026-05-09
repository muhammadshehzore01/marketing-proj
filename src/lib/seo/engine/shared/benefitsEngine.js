// marketing-proj/src/lib/seo/engine/shared/benefitsEngine.js

export function generateBenefits(location, keyword, type = "country") {
  const name =
    location?.display ||
    location?.name ||
    "industrial facilities";

  const countryBenefits = {
    germany: [
      "precision manufacturing",
      "automotive production",
      "energy-intensive machinery",
    ],
    france: [
      "refinery systems",
      "nuclear facilities",
      "industrial processing",
    ],
    italy: [
      "manufacturing equipment",
      "industrial automation",
      "thermal processing",
    ],
    spain: [
      "renewable energy plants",
      "industrial systems",
      "heavy production units",
    ],
    netherlands: [
      "chemical processing",
      "marine engineering",
      "port industries",
    ],
    belgium: [
      "chemical plants",
      "industrial production",
      "energy systems",
    ],
    sweden: [
      "green manufacturing",
      "advanced engineering",
      "energy optimization",
    ],
    norway: [
      "offshore systems",
      "oil and gas operations",
      "marine facilities",
    ],
    denmark: [
      "wind power facilities",
      "energy plants",
      "industrial equipment",
    ],
  };

  const slug = location?.slug || "";
  const sectors =
    countryBenefits[slug] || [
      "industrial systems",
      "high-temperature equipment",
      "manufacturing facilities",
    ];

  return [
    {
      title: "Thermal Energy Efficiency",
      desc: `${keyword} improve thermal efficiency across ${name} industrial systems and reduce unnecessary heat loss.`,
    },

    {
      title: "Lower Operating Costs",
      desc: `Companies in ${name} reduce fuel consumption and long-term energy costs using advanced insulation solutions.`,
    },

    {
      title: "Improved Worker Safety",
      desc: `Protect teams from high-temperature exposure in ${sectors[0]} and related industrial environments.`,
    },

    {
      title: "Faster Maintenance Access",
      desc: `Removable insulation jackets allow quick servicing without damaging equipment insulation.`,
    },

    {
      title: "Reusable Long-Life Design",
      desc: `Durable reusable insulation systems built for demanding ${sectors[1]} operations.`,
    },

    {
      title: "Custom Engineered Fit",
      desc: `Tailored insulation jackets for valves, turbines, pumps, and compressors used in ${sectors[2]}.`,
    },
  ];
}
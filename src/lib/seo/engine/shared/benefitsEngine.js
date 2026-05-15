// marketing-proj/src/lib/seo/engine/shared/benefitsEngine.js
const baseBenefits = [
  {
    title: "Heat Loss Reduction",
    text: "Reduce exposed surface heat from industrial equipment and improve thermal efficiency.",
  },
  {
    title: "Worker Safety",
    text: "Protect operators and maintenance teams from burn risks around high-temperature surfaces.",
  },
  {
    title: "Energy Cost Saving",
    text: "Lower fuel and energy consumption by retaining heat inside the process system.",
  },
  {
    title: "Easy Maintenance Access",
    text: "Remove and reinstall insulation jackets during inspection without damaging the cover.",
  },
  {
    title: "Reusable Design",
    text: "Use the same insulation cover repeatedly during shutdowns, servicing, and maintenance cycles.",
  },
  {
    title: "Equipment Protection",
    text: "Support stable operation and protect nearby components from radiant heat exposure.",
  },
];

function pick(seed, arr) {
  return arr[Math.abs(seed) % arr.length];
}

export function generateBenefits(entity, keyword = "", type = "global") {
  const seedBase =
    entity?.slug?.length ||
    entity?.name?.length ||
    entity?.display?.length ||
    1;

  const location =
    entity?.display ||
    entity?.name ||
    "industrial facilities";

  const context =
    type === "city"
      ? `in ${location}`
      : type === "country"
      ? `across ${location}`
      : "in industrial environments";

  const selected = [];

  for (let i = 0; i < 4; i++) {
    const benefit = pick(seedBase + i, baseBenefits);

    selected.push(
      `${benefit.title}: ${benefit.text} This helps ${keyword || "thermal insulation systems"} deliver stronger performance ${context}.`
    );
  }

  return selected;
}
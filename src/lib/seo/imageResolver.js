// marketing-proj/src/lib/seo/imageResolver.js

export function getHeroImage({ slides = [], country, city }) {
  if (!slides.length) return null;

  const countryName =
  country?.name?.toLowerCase() ||
  country?.slug?.toLowerCase();
  const countrySlug = country?.slug?.toLowerCase();
  const cityName =
  city?.display?.toLowerCase() ||
  city?.name?.toLowerCase();
  const cityDisplay = city?.display?.toLowerCase();

  // 1️⃣ City exact match (highest priority)
  let match = slides.find((s) => {
    const t = s.title?.toLowerCase() || "";
    return (
      t.includes(cityName) ||
      t.includes(cityDisplay)
    );
  });

  // 2️⃣ Country match
  if (!match) {
    match = slides.find((s) => {
      const t = s.title?.toLowerCase() || "";
      return (
        t.includes(countryName) ||
        t.includes(countrySlug)
      );
    });
  }

  // 3️⃣ fallback
  if (!match) match = slides[0];

  return match?.image || null;
}
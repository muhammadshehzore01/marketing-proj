// /home/shahrukh-eng/marketing-proj/src/lib/seo/internalMesh.js
export function buildSeoMesh(country, city) {
  return {
    countryUrl: `/removable-insulation-jackets/${country.slug}`,
    cityUrl: `/removable-insulation-jackets/${country.slug}/${city.name}`,

    relatedProducts: [
      "/products/valve-insulation-cover",
      "/products/generator-insulation-cover",
      "/products/thermal-insulation-cover",
    ],

    relatedServices: [
      "/services/industrial-insulation",
      "/services/energy-efficiency-audit",
    ],
  };
}
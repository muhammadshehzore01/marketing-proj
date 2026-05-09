/* =====================================================
    /home/shahrukh-eng/marketing-proj/src/lib/seo/schema/geoSchema.js
   🔥 GEO SEO SCHEMA SYSTEM
   - Country + City structured data
   - Local SEO + Industrial SEO boost
===================================================== */

/* =====================================================
   🔹 COUNTRY SCHEMA
===================================================== */
export function countrySchema(country) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `Industrial Insulation Jackets in ${country.name}`,
    url: `https://mshahrukhengineeringworks.com/removable-insulation-jackets/${country.slug}`,
    description: `Industrial insulation solutions across ${country.name} for valves, turbines, pumps, generators, and industrial systems.`,
    areaServed: country.name,
    serviceType: "Industrial Thermal Insulation",
  };
}

/* =====================================================
   🔹 CITY SCHEMA
===================================================== */
export function citySchema(city, country) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Industrial Insulation in ${city.display}`,
    url: `https://mshahrukhengineeringworks.com/removable-insulation-jackets/${country.slug}/${city.name}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.display,
      addressCountry: country.name,
    },
    areaServed: `${city.display}, ${country.name}`,
    description: `High-temperature removable insulation jackets for industrial equipment in ${city.display}.`,
    serviceType: "Thermal Insulation Solutions",
  };
}
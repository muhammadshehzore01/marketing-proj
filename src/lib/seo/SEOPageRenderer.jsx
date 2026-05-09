// /home/shahrukh-eng/marketing-proj/src/lib/seo/SEOPageRenderer.jsx
import Link from "next/link";

/* =====================================================
   🔥 SEO PAGE RENDERER (PHASE 5 CORE SYSTEM)
   - Single source rendering for ALL country/city pages
   - Prevents duplication + injection chaos
===================================================== */

export default function SEOPageRenderer({
  type, // "country" | "city"
  country,
  city,
  html,
}) {
  const countrySlug = country?.slug;

  const otherCities = (country?.cities || []).filter(
    (c) => c.name !== city?.name
  );

  return (
    <div className="seo-page">

      {/* =====================================================
          🔥 HERO / TITLE SECTION
      ===================================================== */}
      <section className="py-6">
        <h1 className="text-3xl font-bold">
          {type === "city"
            ? `Industrial Insulation Jackets in ${city?.display}, ${country?.name}`
            : `Industrial Insulation Jackets in ${country?.name}`}
        </h1>

        <p className="mt-3 text-gray-600">
          High-temperature removable insulation solutions for valves, turbines,
          pumps, generators, and industrial equipment.
        </p>
      </section>

      {/* =====================================================
          🔥 MAIN SEO CONTENT (ENGINE OUTPUT ONLY)
      ===================================================== */}
      <section className="prose max-w-5xl">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>

      {/* =====================================================
          🔥 COUNTRY LEVEL EXTRA SECTION
      ===================================================== */}
      {type === "country" && country?.cities?.length && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            Industrial Cities in {country.name}
          </h2>

          <p className="mt-2 text-gray-600">
            We provide insulation solutions across all major industrial cities
            in {country.name}, supporting energy, manufacturing, chemical and
            marine industries.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {country.cities.map((c) => (
              <Link
                key={c.name}
                href={`/removable-insulation-jackets/${countrySlug}/${c.name}`}
                className="p-4 border rounded-lg hover:shadow-md transition"
              >
                <h3 className="font-semibold">{c.display}</h3>
                <p className="text-sm text-gray-600">
                  Industrial insulation in {c.display}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* =====================================================
          🔥 CITY LEVEL "OTHER CITIES" SECTION
      ===================================================== */}
      {type === "city" && otherCities.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">
            We Also Serve Other Cities in {country.name}
          </h2>

          <div className="grid md:grid-cols-3 gap-3 mt-6">
            {otherCities.map((c) => (
              <Link
                key={c.name}
                href={`/removable-insulation-jackets/${countrySlug}/${c.name}`}
                className="text-blue-600 hover:underline"
              >
                {c.display}
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href={`/removable-insulation-jackets/${countrySlug}`}
              className="text-blue-700 font-medium underline"
            >
              ← View all cities in {country.name}
            </Link>
          </div>
        </section>
      )}

      {/* =====================================================
          🔥 INDUSTRIES BLOCK (GLOBAL SEO BOOST)
      ===================================================== */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">
          Industries We Serve
        </h2>

        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>Power generation plants</li>
          <li>Oil & gas refineries</li>
          <li>Chemical processing units</li>
          <li>Marine & offshore systems</li>
          <li>Manufacturing industries</li>
          <li>HVAC & energy systems</li>
        </ul>
      </section>

      {/* =====================================================
          🔥 CTA SECTION
      ===================================================== */}
      <section className="mt-12 p-6 border rounded-xl bg-gray-50">
        <h2 className="text-xl font-semibold">
          Need Custom Insulation Solution?
        </h2>

        <p className="mt-2 text-gray-600">
          We design and manufacture custom removable insulation jackets based on
          your equipment size, temperature, and industrial environment.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-4 px-5 py-2 bg-black text-white rounded-md"
        >
          Get Quote
        </Link>
      </section>

    </div>
  );
}
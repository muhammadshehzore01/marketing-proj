import Link from "next/link";

export const metadata = {
  title:
    "Industrial Insulation Jackets in New Orleans Louisiana | Offshore Energy & Refinery Solutions USA",
  description:
    "Custom removable insulation jackets for industrial equipment in New Orleans Louisiana. Designed for offshore oil & gas, refineries, LNG infrastructure, and marine industrial systems.",
  keywords: [
    "industrial insulation New Orleans Louisiana",
    "offshore oil and gas insulation jackets USA",
    "refinery insulation covers Louisiana Gulf Coast",
    "marine pipeline insulation systems USA",
    "valve insulation jackets offshore platforms",
    "thermal insulation industrial energy Gulf Coast",
  ],
};

export default function NewOrleansPage() {
  return (
    <main className="w-full bg-gray-900 text-white">

      {/* HERO */}
      <section className="bg-gray-900 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Industrial Insulation Jackets in New Orleans, Louisiana
            </h1>

            <p className="mt-6 text-lg text-white">
              High-performance removable insulation jackets for offshore oil & gas platforms, refineries, LNG systems, and marine industrial infrastructure in New Orleans and the Gulf Coast region.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold">
                Request a Quote
              </button>
              <button className="border border-white px-6 py-3 rounded-lg">
                Custom Design Inquiry
              </button>
            </div>

            <p className="mt-6 text-sm text-white">
              ✔ Offshore Energy Focus &nbsp; ✔ Marine Industrial Systems &nbsp; ✔ Refinery Applications &nbsp; ✔ USA Gulf Coast Supply
            </p>
          </div>

          <div>
            <img
              src="/images/new-orleans-offshore.jpg"
              alt="industrial insulation jackets new orleans offshore oil gas refinery marine systems"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6 text-white">
            Offshore & Gulf Coast Industrial Insulation Solutions
          </h2>

          <p className="mb-4 text-white">
            New Orleans plays a critical role in the United States offshore oil & gas industry, serving as a logistics and operational hub for Gulf Coast refineries, marine platforms, and energy infrastructure systems.
          </p>

          <p className="text-white">
            Our removable insulation jackets for industrial equipment in New Orleans are engineered for offshore platforms, pipelines, valves, turbines, and refinery systems exposed to harsh marine and high-temperature environments.
          </p>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10 text-white">
            Industries We Serve in New Orleans Louisiana
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Offshore Oil & Gas Platforms",
              "Refinery Operations",
              "LNG Infrastructure",
              "Marine Energy Systems",
              "Pipeline Networks",
              "Petrochemical Facilities",
              "Industrial Port Systems",
              "Energy Logistics Hubs",
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 p-5 rounded-lg shadow text-white">
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Industrial Insulation Applications in New Orleans
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Offshore Valve Insulation Jackets",
              "Marine Pipeline Insulation Covers",
              "Refinery Heat Shield Systems",
              "LNG Equipment Insulation Jackets",
              "Turbine Thermal Protection Covers",
              "Industrial Pump Insulation Systems",
            ].map((item, i) => (
              <div key={i} className="border border-white p-6 rounded-xl text-white">
                <h3 className="font-semibold text-white">{item}</h3>
                <p className="text-sm mt-2 text-white">
                  High-performance insulation solution designed for offshore and Gulf Coast industrial environments.
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROBLEM SOLUTION */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Industrial Challenges in New Orleans
            </h2>

            <ul className="space-y-3 text-white">
              <li>• Harsh offshore marine environments</li>
              <li>• Corrosion and heat loss in pipelines</li>
              <li>• Continuous refinery operations</li>
              <li>• Energy inefficiency in offshore systems</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Our Solution
            </h2>

            <p className="text-white">
              Our New Orleans insulation jackets are designed for offshore and marine energy systems, reducing heat loss, improving safety, and ensuring reliable performance in Gulf Coast industrial environments.
            </p>
          </div>

        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Why Gulf Coast Industries Choose Us
            </h2>

            <ul className="space-y-3 text-white">
              <li>✔ Offshore oil & gas expertise</li>
              <li>✔ Marine-grade insulation materials</li>
              <li>✔ Custom fabrication for harsh environments</li>
              <li>✔ High-temperature resistance systems</li>
              <li>✔ Removable industrial insulation design</li>
            </ul>
          </div>

          <div>
            <img
              src="/images/new-orleans-product.jpg"
              alt="industrial insulation jackets new orleans offshore refinery marine usa"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10 text-white">
            Related Industrial Insulation Products
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <Link href="/usa/products/valve-insulation-cover">
              <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition text-white">
                Valve Insulation Cover
              </div>
            </Link>

            <Link href="/usa/products/generator-insulation-jacket">
              <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition text-white">
                Generator Insulation Jacket
              </div>
            </Link>

            <Link href="/usa/products/extruder-machine-thermal-insulation-cover">
              <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition text-white">
                Extruder Machine Insulation
              </div>
            </Link>

            <Link href="/usa/products/pump-insulation-jacket">
              <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition text-white">
                Pump Insulation Jacket
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8 text-white">
            Other Industrial Cities in USA
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-white">

            <Link href="/usa/houston">Houston</Link>
            <Link href="/usa/chicago">Chicago</Link>
            <Link href="/usa/los-angeles">Los Angeles</Link>
            <Link href="/usa/corpus-christi">Corpus Christi</Link>

          </div>

        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-gray-900 py-16 px-6 md:px-16 text-center">

        <h2 className="text-3xl font-bold mb-10 text-white">
          Offshore Industrial Performance Results
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-white">

          <div>
            <h3 className="text-3xl font-bold">90%</h3>
            <p>Heat Loss Reduction</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Offshore</h3>
            <p>Energy Optimization</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Safe</h3>
            <p>Marine Operations</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Fast</h3>
            <p>ROI Improvement</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 px-6 md:px-16 text-center">

        <h2 className="text-4xl font-bold mb-6 text-white">
          Get Offshore Insulation Solutions in New Orleans
        </h2>

        <p className="mb-8 text-white">
          Contact us for custom removable insulation jackets for offshore platforms, refineries, and marine industrial systems in New Orleans Louisiana.
        </p>

        <button className="bg-orange-500 px-8 py-4 rounded-lg text-lg">
          Request a Quote
        </button>

      </section>

    </main>
  );
}
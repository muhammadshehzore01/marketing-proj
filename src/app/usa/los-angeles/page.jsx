import Link from "next/link";

export const metadata = {
  title:
    "Industrial Insulation Jackets in Los Angeles California | Refinery & Energy Efficiency Solutions USA",
  description:
    "Custom removable insulation jackets for industrial equipment in Los Angeles California. Designed for refineries, power plants, and chemical processing facilities with strict energy efficiency requirements.",
  keywords: [
    "industrial insulation Los Angeles California",
    "refinery insulation jackets California USA",
    "valve insulation covers Los Angeles",
    "energy efficiency insulation California plants",
    "industrial thermal insulation Los Angeles refineries",
    "pipeline insulation systems California USA",
  ],
};

export default function LosAngelesPage() {
  return (
    <main className="w-full bg-gray-900 text-white">

      {/* HERO */}
      <section className="bg-gray-900 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Industrial Insulation Jackets in Los Angeles, California
            </h1>

            <p className="mt-6 text-lg text-white">
              High-performance removable insulation jackets for refineries, power plants, and industrial facilities in Los Angeles. Designed to meet strict California energy efficiency and environmental standards.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold">
                Request a Quote
              </button>
              <button className="border border-white px-6 py-3 rounded-lg">
                Custom Design
              </button>
            </div>

            <p className="mt-6 text-sm text-white">
              ✔ California Compliance Focus &nbsp; ✔ Energy Efficiency Systems &nbsp; ✔ Refinery Applications &nbsp; ✔ USA Industrial Supply
            </p>
          </div>

          <div>
            <img
              src="/images/los-angeles-refinery.jpg"
              alt="industrial insulation jackets los angeles refinery california energy plants"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6 text-white">
            Industrial Energy Efficiency Insulation for California Facilities
          </h2>

          <p className="mb-4 text-white">
            Los Angeles is one of the most regulated industrial regions in the United States, where energy efficiency and emission control are critical requirements for refineries and industrial plants.
          </p>

          <p className="text-white">
            Our removable insulation jackets for industrial equipment in Los Angeles help reduce heat loss, improve energy efficiency, and support compliance with California environmental standards in refineries, chemical plants, and power generation facilities.
          </p>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10 text-white">
            Industries We Serve in Los Angeles California
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Oil Refineries",
              "Power Generation Plants",
              "Chemical Processing",
              "Petrochemical Facilities",
              "Marine Fuel Systems",
              "Industrial Utilities",
              "Energy Infrastructure",
              "Manufacturing Plants",
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
            Industrial Insulation Applications in Los Angeles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Refinery Valve Insulation Jackets",
              "Pipeline Thermal Insulation Systems",
              "Turbine Insulation Covers",
              "Exhaust Heat Shield Jackets",
              "Generator Insulation Systems",
              "Pump & Compressor Insulation",
            ].map((item, i) => (
              <div key={i} className="border border-white p-6 rounded-xl text-white">
                <h3 className="font-semibold text-white">{item}</h3>
                <p className="text-sm mt-2 text-white">
                  High-performance insulation solution designed for California industrial compliance and energy efficiency.
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
              Industrial Challenges in Los Angeles
            </h2>

            <ul className="space-y-3 text-white">
              <li>• Strict environmental regulations</li>
              <li>• High energy efficiency requirements</li>
              <li>• Aging refinery infrastructure</li>
              <li>• Heat loss in continuous operations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Our Solution
            </h2>

            <p className="text-white">
              Our Los Angeles industrial insulation jackets are engineered to reduce thermal energy loss, improve operational efficiency, and help facilities meet strict California energy compliance standards.
            </p>
          </div>

        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Why Los Angeles Industries Choose Us
            </h2>

            <ul className="space-y-3 text-white">
              <li>✔ Energy efficiency focused insulation design</li>
              <li>✔ California compliance oriented solutions</li>
              <li>✔ Custom fabrication for refinery equipment</li>
              <li>✔ High temperature resistance materials</li>
              <li>✔ Removable industrial insulation systems</li>
            </ul>
          </div>

          <div>
            <img
              src="/images/los-angeles-product.jpg"
              alt="industrial insulation jackets california refinery los angeles energy efficiency"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-gray-900 py-16 px-6 md:px-16 text-center">

        <h2 className="text-3xl font-bold mb-10 text-white">
          Energy Efficiency Performance Results
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-white">

          <div>
            <h3 className="text-3xl font-bold">90%</h3>
            <p>Heat Loss Reduction</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Energy</h3>
            <p>Efficiency Improvement</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Clean</h3>
            <p>Compliance Support</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Fast</h3>
            <p>ROI for Plants</p>
          </div>

        </div>

      </section>

      {/* PRODUCTS */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8 text-white">
            Related Insulation Products
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <Link href="/usa/products/valve-insulation-cover" className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition text-white">
              Valve Insulation Cover
            </Link>

            <Link href="/usa/products/generator-insulation-jacket" className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition text-white">
              Generator Insulation Jacket
            </Link>

            <Link href="/usa/products/extruder-machine-thermal-insulation-cover" className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition text-white">
              Extruder Machine Cover
            </Link>

          </div>

        </div>
      </section>

      {/* CITIES */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8 text-white">
            Other USA Industrial Cities
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-sm text-white">

            <Link href="/usa/houston">Houston</Link>
            <Link href="/usa/chicago">Chicago</Link>
            <Link href="/usa/baton-rouge">Baton Rouge</Link>
            <Link href="/usa/corpus-christi">Corpus Christi</Link>

          </div>

          <div className="mt-6">
            <Link href="/usa" className="text-orange-500 font-semibold hover:underline">
              ← Back to USA Overview
            </Link>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 px-6 md:px-16 text-center">

        <h2 className="text-4xl font-bold mb-6 text-white">
          Get Industrial Insulation Solutions in Los Angeles
        </h2>

        <p className="mb-8 text-white">
          Contact us for custom removable insulation jackets for refineries, power plants, and industrial facilities in Los Angeles California.
        </p>

        <button className="bg-orange-500 px-8 py-4 rounded-lg text-lg">
          Request a Quote
        </button>

      </section>

    </main>
  );
}
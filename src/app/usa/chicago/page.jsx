import Link from "next/link";

export const metadata = {
  title:
    "Industrial Insulation Jackets in Chicago Illinois | Manufacturing & Retrofit Thermal Solutions USA",
  description:
    "Custom removable insulation jackets for industrial equipment in Chicago Illinois. Designed for manufacturing plants, chemical processing, food industries, and power generation facilities.",
  keywords: [
    "industrial insulation Chicago Illinois",
    "manufacturing insulation jackets USA",
    "valve insulation covers Chicago",
    "retrofit insulation solutions industrial USA",
    "thermal insulation for factories Chicago",
    "pipeline insulation systems Illinois USA",
  ],
};

export default function ChicagoPage() {
  return (
    <main className="w-full bg-gray-900 text-white">

      {/* HERO */}
      <section className="bg-gray-900 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Industrial Insulation Jackets in Chicago, Illinois
            </h1>

            <p className="mt-6 text-lg text-white">
              High-performance removable insulation jackets for manufacturing plants, chemical industries, food processing facilities, and power generation systems in Chicago. Designed for energy efficiency and industrial retrofit applications.
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
              ✔ Manufacturing Focus &nbsp; ✔ Retrofit Solutions &nbsp; ✔ Industrial Efficiency &nbsp; ✔ USA Supply
            </p>
          </div>

          <div>
            <img
              src="/images/chicago-industrial.jpg"
              alt="industrial insulation jackets chicago manufacturing plants valves pipelines"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6 text-white">
            Industrial Retrofit Insulation Solutions for Chicago Manufacturing Sector
          </h2>

          <p className="mb-4 text-white">
            Chicago is one of the largest industrial and manufacturing hubs in the United States, with strong demand across food processing, chemical plants, heavy machinery, and industrial production systems.
          </p>

          <p className="text-white">
            Our removable insulation jackets for industrial equipment in Chicago are designed to improve energy efficiency, reduce heat loss, and provide easy maintenance access for valves, pipelines, turbines, and factory equipment.
          </p>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10 text-white">
            Industries We Serve in Chicago Illinois
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Manufacturing Plants",
              "Chemical Processing",
              "Food & Beverage Industry",
              "Pharmaceutical Facilities",
              "Power Generation",
              "Steel & Heavy Industry",
              "Industrial Warehouses",
              "Utility Systems",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-white"
              >
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
            Industrial Insulation Applications in Chicago
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Valve Insulation Jackets Chicago",
              "Pipeline Thermal Covers for Factories",
              "Turbine Insulation Systems",
              "Exhaust Heat Shield Jackets",
              "Pump & Compressor Insulation",
              "Industrial Machine Insulation Covers",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-white p-6 rounded-xl hover:shadow-md transition text-white"
              >
                <h3 className="font-semibold text-white">{item}</h3>
                <p className="text-sm mt-2 text-white">
                  Custom industrial insulation solution designed for manufacturing and retrofit applications in Chicago.
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
              Industrial Challenges in Chicago
            </h2>

            <ul className="space-y-3 text-white">
              <li>• Aging industrial infrastructure</li>
              <li>• High energy consumption in factories</li>
              <li>• Heat loss in continuous production systems</li>
              <li>• Maintenance downtime in manufacturing lines</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Our Solution
            </h2>

            <p className="text-white">
              Our Chicago industrial insulation jackets provide efficient thermal protection for manufacturing and industrial systems, reducing energy loss and improving operational performance across retrofit and new installations.
            </p>
          </div>

        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8 text-white">
            Related Industrial Products
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              ["Valve Insulation Cover", "/usa/products/valve-insulation-cover"],
              ["Generator Insulation Jacket", "/usa/products/generator-insulation-jacket"],
              ["Extruder Machine Insulation", "/usa/products/extruder-machine-thermal-insulation-cover"],
              ["Pump Insulation Jacket", "/usa/products/pump-insulation-jacket"],
            ].map(([name, url], i) => (
              <Link key={i} href={url}>
                <div className="bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-white">
                  <p className="font-semibold text-white">{name}</p>
                  <p className="text-xs mt-2 text-white">
                    Industrial thermal insulation solution
                  </p>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* OTHER CITIES */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8 text-white">
            Other Industrial Cities in USA
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              ["Houston", "/usa/houston"],
              ["Baton Rouge", "/usa/baton-rouge"],
              ["Atlanta", "/usa/atlanta"],
              ["Los Angeles", "/usa/los-angeles"],
            ].map(([name, url], i) => (
              <Link key={i} href={url}>
                <div className="border border-white p-4 rounded-xl bg-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-white">
                  <p className="font-medium text-white">{name}</p>
                  <p className="text-xs mt-1 text-white">
                    Industrial insulation solutions
                  </p>
                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Why Chicago Industries Choose Our Insulation
            </h2>

            <ul className="space-y-3 text-white">
              <li>✔ Designed for manufacturing environments</li>
              <li>✔ Retrofit-friendly insulation systems</li>
              <li>✔ High temperature resistance materials</li>
              <li>✔ Removable & reusable jackets</li>
              <li>✔ Reduce operational energy costs</li>
            </ul>
          </div>

          <div>
            <img
              src="/images/chicago-product.jpg"
              alt="industrial insulation jackets chicago manufacturing retrofit systems"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-gray-900 py-16 px-6 md:px-16 text-center">

        <h2 className="text-3xl font-bold mb-10 text-white">
          Industrial Performance Results
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-white">

          <div>
            <h3 className="text-3xl font-bold">90%</h3>
            <p>Heat Loss Reduction</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Energy</h3>
            <p>Efficiency Gain</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Safe</h3>
            <p>Working Conditions</p>
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
          Get Industrial Insulation Solutions in Chicago
        </h2>

        <p className="mb-8 text-white">
          Contact us for custom removable insulation jackets for manufacturing plants, chemical facilities, and industrial systems in Chicago Illinois.
        </p>

        <button className="bg-orange-500 px-8 py-4 rounded-lg text-lg">
          Request a Quote
        </button>

      </section>

    </main>
  );
}
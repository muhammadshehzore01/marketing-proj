import Link from "next/link";

export const metadata = {
  title:
    "Industrial Insulation Jackets in Pittsburgh Pennsylvania | Power & Industrial Energy Solutions USA",
  description:
    "Custom removable insulation jackets for industrial equipment in Pittsburgh Pennsylvania. Designed for power plants, steel industry, chemical processing, and energy transition systems.",
  keywords: [
    "industrial insulation Pittsburgh Pennsylvania",
    "power plant insulation jackets USA",
    "steel industry insulation covers Pittsburgh",
    "valve insulation jackets industrial USA",
    "thermal insulation energy plants Pennsylvania",
    "pipeline insulation systems USA industrial",
  ],
};

export default function PittsburghPage() {
  return (
    <main className="w-full text-white">

      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Industrial Insulation Jackets in Pittsburgh, Pennsylvania
            </h1>

            <p className="mt-6 text-lg text-white">
              High-performance removable insulation jackets for power plants, steel manufacturing, chemical processing, and industrial energy systems in Pittsburgh. Built for efficiency, durability, and thermal control.
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
              ✔ Power Generation Focus &nbsp; ✔ Steel Industry Applications &nbsp; ✔ Energy Efficiency &nbsp; ✔ USA Industrial Supply
            </p>
          </div>

          <div>
            <img
              src="/images/pittsburgh-industrial.jpg"
              alt="industrial insulation jackets pittsburgh power plants steel industry usa"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6 text-white">
            Industrial Energy & Power Sector Insulation Solutions for Pittsburgh
          </h2>

          <p className="mb-4 text-white">
            Pittsburgh has a strong industrial legacy built around steel manufacturing, power generation, chemical processing, and heavy industrial systems that require advanced thermal insulation solutions.
          </p>

          <p className="text-white">
            Our removable insulation jackets for industrial equipment in Pittsburgh are designed for valves, turbines, pipelines, boilers, and compressors operating in high-temperature energy environments.
          </p>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10 text-white">
            Industries We Serve in Pittsburgh Pennsylvania
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Power Generation Plants",
              "Steel Manufacturing",
              "Chemical Processing",
              "Industrial Energy Systems",
              "Petrochemical Facilities",
              "Boiler & Steam Systems",
              "Heavy Machinery Plants",
              "Utility Infrastructure",
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 p-5 rounded-lg text-white">
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
            Industrial Insulation Applications in Pittsburgh
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Power Plant Valve Insulation Jackets",
              "Steel Plant Furnace Insulation Covers",
              "Boiler Thermal Insulation Systems",
              "Turbine Heat Protection Jackets",
              "Pipeline Energy Insulation Systems",
              "Industrial Pump & Compressor Covers",
            ].map((item, i) => (
              <div key={i} className="border p-6 rounded-xl bg-gray-800 text-white">
                <h3 className="font-semibold text-white">{item}</h3>
                <p className="text-sm mt-2 text-white">
                  High-temperature industrial insulation solution designed for power and steel industries in Pittsburgh.
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
              Industrial Challenges in Pittsburgh
            </h2>

            <ul className="space-y-3 text-white">
              <li>• High energy consumption in power plants</li>
              <li>• Heat loss in steel production systems</li>
              <li>• Aging industrial infrastructure</li>
              <li>• Continuous heavy-duty operations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Our Solution
            </h2>

            <p className="text-white">
              Our Pittsburgh insulation jackets provide reliable thermal protection for high-energy industrial systems, reducing heat loss and improving efficiency in steel, power, and chemical industries.
            </p>
          </div>

        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Why Pittsburgh Industries Choose Us
            </h2>

            <ul className="space-y-3 text-white">
              <li>✔ Power & steel industry specialization</li>
              <li>✔ High-temperature insulation engineering</li>
              <li>✔ Custom industrial fabrication</li>
              <li>✔ Removable insulation systems</li>
              <li>✔ Energy efficiency optimization</li>
            </ul>
          </div>

          <div>
            <img
              src="/images/pittsburgh-product.jpg"
              alt="industrial insulation jackets pittsburgh steel power plants usa"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-16 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Industrial Performance Benefits
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-3xl font-bold">90%</h3>
            <p>Heat Loss Reduction</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Energy</h3>
            <p>Efficiency Gain</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Stable</h3>
            <p>Industrial Operations</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Fast</h3>
            <p>ROI Improvement</p>
          </div>

        </div>

      </section>

      {/* RELATED PRODUCTS */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8 text-white">
            Related Insulation Products
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <Link href="/usa/products/valve-insulation-cover">
              <div className="bg-gray-800 p-5 rounded-lg text-white">
                Valve Insulation Cover
              </div>
            </Link>

            <Link href="/usa/products/generator-insulation-jacket">
              <div className="bg-gray-800 p-5 rounded-lg text-white">
                Generator Insulation Jacket
              </div>
            </Link>

            <Link href="/usa/products/pump-insulation-jacket">
              <div className="bg-gray-800 p-5 rounded-lg text-white">
                Pump Insulation Jacket
              </div>
            </Link>

            <Link href="/usa/products/extruder-machine-thermal-insulation-cover">
              <div className="bg-gray-800 p-5 rounded-lg text-white">
                Extruder Machine Insulation
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* OTHER CITIES */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8 text-white">
            Other Industrial Cities in USA
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-white">

            <Link href="/usa/houston">Houston</Link>
            <Link href="/usa/chicago">Chicago</Link>
            <Link href="/usa/corpus-christi">Corpus Christi</Link>
            <Link href="/usa/baton-rouge">Baton Rouge</Link>
            <Link href="/usa/new-orleans">New Orleans</Link>
            <Link href="/usa/newark">Newark</Link>
            <Link href="/usa/los-angeles">Los Angeles</Link>
            <Link href="/usa/atlanta">Atlanta</Link>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20 px-6 md:px-16 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Get Industrial Insulation Solutions in Pittsburgh
        </h2>

        <p className="mb-8">
          Contact us for custom removable insulation jackets for power plants, steel factories, and industrial systems in Pittsburgh Pennsylvania.
        </p>

        <button className="bg-orange-500 px-8 py-4 rounded-lg text-lg">
          Request a Quote
        </button>

      </section>

    </main>
  );
}
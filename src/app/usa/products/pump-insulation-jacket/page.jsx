export const metadata = {
  title:
    "Pump Insulation Jacket USA | High Temperature Removable Industrial Pump Thermal Cover",
  description:
    "Custom pump insulation jackets in USA for refineries, chemical plants, power stations and industrial facilities. High temperature removable insulation covers for energy efficiency and safety.",
  keywords: [
    "pump insulation jacket USA",
    "industrial pump insulation cover",
    "high temperature pump thermal insulation USA",
    "refinery pump insulation Houston",
    "chemical plant pump insulation jacket",
    "energy saving pump insulation cover USA",
  ],
};

export default function PumpInsulationJacketPage() {
  return (
    <main className="w-full text-gray-800">

      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Pump Insulation Jacket USA
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              High-temperature removable insulation jackets designed for industrial pumps used in refineries, chemical plants, LNG terminals, and power generation facilities across the United States.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold">
                Request a Quote
              </button>
              <button className="border border-white px-6 py-3 rounded-lg">
                WhatsApp Us
              </button>
            </div>

            <div className="mt-6 text-sm text-gray-400">
              ✔ USA Industrial Use &nbsp; ✔ High Temperature Protection &nbsp; ✔ Custom Fit &nbsp; ✔ Energy Saving
            </div>
          </div>

          <div>
            <img
              src="/images/pump-insulation.jpg"
              alt="industrial pump insulation jacket USA refinery chemical plant thermal cover"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Industrial Pump Thermal Insulation Solution
          </h2>

          <p className="mb-4">
            Pump insulation jackets are designed to reduce heat loss and improve energy efficiency in industrial pumping systems operating under high temperature conditions.
          </p>

          <p>
            These removable insulation covers are widely used in USA refineries, chemical processing plants, and power generation systems to improve safety and performance.
          </p>

        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-10">
            Industrial Applications in USA
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Oil & Gas Refineries (Houston, Baton Rouge)",
              "Chemical Processing Plants (Newark, Chicago)",
              "LNG Terminals (Corpus Christi)",
              "Power Generation Facilities (Atlanta)",
              "Industrial Water Pump Systems",
              "Manufacturing & Utility Plants",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold">{item}</h3>
                <p className="text-sm mt-2">
                  High temperature pump insulation for industrial energy efficiency.
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Key Features of Pump Insulation Jacket
            </h2>

            <ul className="space-y-3">
              <li>✔ High temperature resistant insulation layers</li>
              <li>✔ Custom fit for all pump sizes</li>
              <li>✔ Removable and reusable design</li>
              <li>✔ Reduces heat loss and energy waste</li>
              <li>✔ Improves pump efficiency</li>
              <li>✔ Industrial grade durability</li>
            </ul>
          </div>

          <div>
            <img
              src="/images/pump-feature.jpg"
              alt="industrial pump insulation jacket features USA"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-16 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Benefits for Industrial Pump Systems
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-3xl font-bold">90%</h3>
            <p>Heat Loss Reduction</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Lower</h3>
            <p>Energy Costs</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Safe</h3>
            <p>Industrial Operation</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Fast</h3>
            <p>ROI Return</p>
          </div>

        </div>

      </section>

      {/* USA CITIES */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10">
            Installed Across Major USA Industrial Cities
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Houston Refinery Systems",
              "Chicago Chemical Plants",
              "Newark Industrial Facilities",
              "Los Angeles Energy Systems",
              "Atlanta Power Plants",
              "Baton Rouge Oil Refineries",
            ].map((city, i) => (
              <div key={i} className="border p-5 rounded-lg">
                {city}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-800 text-white py-20 px-6 md:px-16 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Get Pump Insulation Jackets in USA
        </h2>

        <p className="mb-8">
          Contact us for custom high temperature pump insulation solutions for industrial applications across the United States.
        </p>

        <button className="bg-orange-500 px-8 py-4 rounded-lg text-lg">
          Request a Quote
        </button>

      </section>

    </main>
  );
}
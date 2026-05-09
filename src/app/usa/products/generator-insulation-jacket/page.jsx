export const metadata = {
  title:
    "Generator Insulation Jacket USA | High Temperature Thermal Cover for Industrial Generators",
  description:
    "Custom generator insulation jackets in USA for power plants, industrial facilities, and energy systems. High temperature removable insulation covers for better efficiency and safety.",
  keywords: [
    "generator insulation jacket USA",
    "industrial generator insulation cover",
    "thermal insulation for generators USA",
    "power plant generator insulation blanket",
    "engine insulation jacket USA",
    "energy saving generator insulation cover",
  ],
};

export default function GeneratorInsulationJacketPage() {
  return (
    <main className="w-full text-gray-800">

      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Generator Insulation Jacket USA
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              High-temperature removable insulation jackets designed for industrial generators used in power plants, manufacturing facilities, LNG terminals, and energy systems across the USA.
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
              ✔ USA Industrial Use &nbsp; ✔ High Temperature Protection &nbsp; ✔ Energy Saving &nbsp; ✔ Custom Fit Design
            </div>
          </div>

          <div>
            <img
              src="/images/generator-insulation.jpg"
              alt="generator insulation jacket USA industrial power plant cover"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Industrial Generator Thermal Insulation Solution
          </h2>

          <p className="mb-4">
            The generator insulation jacket is a high-performance thermal cover designed to reduce heat loss, improve energy efficiency, and protect industrial generator systems from extreme operating temperatures.
          </p>

          <p>
            These jackets are widely used in power generation plants, industrial facilities, and energy infrastructure projects across the United States.
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
              "Power Plants (Chicago, Atlanta)",
              "Oil & Gas Facilities (Houston, Baton Rouge)",
              "LNG Terminals (Corpus Christi)",
              "Manufacturing Industries (USA Wide)",
              "Emergency Power Generators",
              "Industrial Energy Systems",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold">{item}</h3>
                <p className="text-sm mt-2">
                  High temperature insulation solution for generator systems.
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
              Key Features of Generator Insulation Jacket
            </h2>

            <ul className="space-y-3">
              <li>✔ High temperature resistant insulation layers</li>
              <li>✔ Custom fit for all generator sizes</li>
              <li>✔ Removable and reusable design</li>
              <li>✔ Reduces heat loss and energy waste</li>
              <li>✔ Industrial grade durability</li>
              <li>✔ Easy maintenance access</li>
            </ul>
          </div>

          <div>
            <img
              src="/images/generator-feature.jpg"
              alt="industrial generator insulation jacket USA features"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-16 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Benefits for Industrial Generators
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-3xl font-bold">90%</h3>
            <p>Heat Loss Reduction</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Lower</h3>
            <p>Fuel Consumption</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Safe</h3>
            <p>Equipment Operation</p>
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
            Installed & Used Across USA Industrial Cities
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Houston Power & Energy Plants",
              "Chicago Industrial Generators",
              "Newark Manufacturing Units",
              "Los Angeles Energy Systems",
              "Atlanta Power Infrastructure",
              "Baton Rouge Refinery Generators",
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
          Get Generator Insulation Jackets in USA
        </h2>

        <p className="mb-8">
          Contact us for custom high temperature generator insulation solutions for industrial and power generation systems across the United States.
        </p>

        <button className="bg-orange-500 px-8 py-4 rounded-lg text-lg">
          Request a Quote
        </button>

      </section>

    </main>
  );
}
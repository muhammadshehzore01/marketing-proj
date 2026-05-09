export const metadata = {
  title:
    "Extruder Machine Thermal Insulation Cover USA | High Temperature Industrial Insulation Jacket",
  description:
    "Custom extruder machine insulation covers in USA for plastic, rubber and manufacturing industries. High temperature removable thermal insulation jackets for energy efficiency and safety.",
  keywords: [
    "extruder machine insulation cover USA",
    "industrial extruder thermal insulation jacket",
    "plastic machine insulation cover USA",
    "manufacturing heat insulation extruder machine",
    "high temperature insulation for extruder machines",
    "energy saving industrial machine insulation USA",
  ],
};

export default function ExtruderInsulationCoverPage() {
  return (
    <main className="w-full text-gray-800">

      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Extruder Machine Thermal Insulation Cover USA
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              High-performance removable insulation covers designed for industrial extruder machines used in plastic, rubber, and manufacturing industries across the United States.
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
              ✔ USA Manufacturing Industry &nbsp; ✔ High Temperature Protection &nbsp; ✔ Energy Saving &nbsp; ✔ Custom Fit Design
            </div>
          </div>

          <div>
            <img
              src="/images/extruder-insulation.jpg"
              alt="extruder machine insulation cover USA industrial plastic machine thermal jacket"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Industrial Extruder Machine Heat Insulation Solution
          </h2>

          <p className="mb-4">
            Extruder machines generate extremely high temperatures during plastic and rubber processing. Our thermal insulation covers are designed to reduce heat loss, improve energy efficiency, and enhance operator safety.
          </p>

          <p>
            These removable insulation jackets are widely used in manufacturing industries across the USA to control heat and improve production efficiency.
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
              "Plastic Manufacturing Plants (Chicago, Atlanta)",
              "Rubber Processing Industries (Houston, Newark)",
              "Polymer Production Units (USA Wide)",
              "Industrial Extrusion Systems",
              "Chemical Additive Processing",
              "Heavy Manufacturing Facilities",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold">{item}</h3>
                <p className="text-sm mt-2">
                  High temperature insulation for extruder machines and processing systems.
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
              Key Features of Extruder Insulation Cover
            </h2>

            <ul className="space-y-3">
              <li>✔ High temperature resistant insulation layers</li>
              <li>✔ Custom designed for extruder machines</li>
              <li>✔ Removable and reusable system</li>
              <li>✔ Reduces energy consumption</li>
              <li>✔ Improves machine efficiency</li>
              <li>✔ Industrial grade durability</li>
            </ul>
          </div>

          <div>
            <img
              src="/images/extruder-feature.jpg"
              alt="industrial extruder machine insulation cover USA features"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-16 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Benefits for Manufacturing Industry
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-3xl font-bold">85%</h3>
            <p>Heat Loss Reduction</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Lower</h3>
            <p>Energy Consumption</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Safe</h3>
            <p>Machine Operation</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Fast</h3>
            <p>ROI Return</p>
          </div>

        </div>

      </section>

      {/* USA INDUSTRY USAGE */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10">
            Used in Major USA Manufacturing Cities
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Chicago Manufacturing Plants",
              "Houston Industrial Units",
              "Newark Plastic Industries",
              "Atlanta Production Facilities",
              "Los Angeles Manufacturing Sector",
              "Baton Rouge Industrial Plants",
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
          Get Extruder Machine Insulation Covers in USA
        </h2>

        <p className="mb-8">
          Contact us for custom high temperature extruder machine insulation jackets for plastic, rubber and manufacturing industries across the United States.
        </p>

        <button className="bg-orange-500 px-8 py-4 rounded-lg text-lg">
          Request a Quote
        </button>

      </section>

    </main>
  );
}
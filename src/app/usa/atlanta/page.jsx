import Link from "next/link";

export const metadata = {
  title:
    "Industrial Insulation Jackets in Atlanta Georgia | Manufacturing & Energy Infrastructure Solutions USA",
  description:
    "Custom removable insulation jackets for industrial equipment in Atlanta Georgia. Designed for manufacturing plants, logistics hubs, power systems, and industrial energy infrastructure.",
  keywords: [
    "industrial insulation Atlanta Georgia",
    "manufacturing insulation jackets USA",
    "valve insulation covers Atlanta industrial",
    "pipeline insulation systems Georgia USA",
    "energy infrastructure insulation Atlanta",
    "thermal insulation industrial equipment USA",
  ],
};

export default function AtlantaPage() {
  return (
    <main className="w-full bg-[#0b1220] text-white">

      {/* HERO */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Industrial Insulation Jackets in Atlanta, Georgia
            </h1>

            <p className="mt-6 text-lg text-white">
              High-performance removable insulation jackets for manufacturing plants, logistics hubs, power systems, and industrial energy infrastructure in Atlanta. Designed for efficiency, safety, and long-term performance.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold">
                Request a Quote
              </button>
              <button className="border border-white px-6 py-3 rounded-lg text-white">
                Custom Design Inquiry
              </button>
            </div>

            <p className="mt-6 text-sm text-white">
              ✔ Manufacturing Focus &nbsp; ✔ Logistics Infrastructure &nbsp; ✔ Energy Efficiency &nbsp; ✔ USA Industrial Supply
            </p>
          </div>

          <div>
            <img
              src="/img/atlanta-industrial.webp"
              alt="industrial insulation jackets atlanta manufacturing logistics energy systems usa"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6 text-white">
            Industrial Energy & Manufacturing Insulation Solutions for Atlanta
          </h2>

          <p className="mb-4 text-white">
            Atlanta is one of the fastest-growing industrial and logistics hubs in the United States, serving as a major center for manufacturing distribution, energy infrastructure, and utility systems across the Southeast.
          </p>

          <p className="text-white">
            Our removable insulation jackets for industrial equipment in Atlanta are engineered for valves, pipelines, turbines, compressors, and industrial systems requiring efficient thermal control and energy savings.
          </p>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10 text-white">
            Industries We Serve in Atlanta Georgia
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Manufacturing Plants",
              "Logistics & Distribution Centers",
              "Energy Infrastructure Systems",
              "Utility Power Plants",
              "Food Processing Facilities",
              "Industrial Warehouses",
              "Chemical Processing",
              "Heavy Equipment Facilities",
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-white/10 text-white"
              >
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-10 text-white">
            Industrial Insulation Applications in Atlanta
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Valve Insulation Jackets Atlanta",
              "Pipeline Thermal Covers for Industry",
              "Turbine Insulation Systems",
              "Industrial Pump Insulation Jackets",
              "Compressor Heat Protection Covers",
              "Energy System Insulation Solutions",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-white/10 p-6 rounded-xl"
              >
                <h3 className="font-semibold text-white">{item}</h3>
                <p className="text-sm mt-2 text-white">
                  Custom industrial insulation solution designed for manufacturing and energy systems in Atlanta.
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROBLEM SOLUTION */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Industrial Challenges in Atlanta
            </h2>

            <ul className="space-y-3 text-white">
              <li>• High energy consumption in industrial systems</li>
              <li>• Heat loss in manufacturing operations</li>
              <li>• Growing demand for logistics efficiency</li>
              <li>• Aging industrial infrastructure</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Our Solution
            </h2>

            <p className="text-white">
              Our Atlanta insulation jackets provide reliable thermal protection for industrial and energy systems, helping reduce heat loss, improve efficiency, and support large-scale manufacturing and logistics operations.
            </p>
          </div>

        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Related Insulation Products
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              ["Valve Insulation Cover", "/usa/products/valve-insulation-cover"],
              ["Generator Insulation Jacket", "/usa/products/generator-insulation-jacket"],
              ["Extruder Machine Insulation", "/usa/products/extruder-machine-thermal-insulation-cover"],
              ["Pump Insulation Jacket", "/usa/products/pump-insulation-jacket"],
            ].map(([name, url], i) => (
              <Link key={i} href={url}>
                <div className="border border-white/10 p-5 rounded-xl text-center">
                  <p className="font-semibold text-white">{name}</p>
                  <p className="text-xs text-white mt-2">
                    Industrial insulation solution
                  </p>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* OTHER CITIES */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8 text-white">
            Other Industrial Cities in USA
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              ["Houston", "/usa/houston"],
              ["Chicago", "/usa/chicago"],
              ["Newark", "/usa/newark"],
              ["Los Angeles", "/usa/los-angeles"],
            ].map(([name, url], i) => (
              <Link key={i} href={url}>
                <div className="border border-white/10 p-4 rounded-xl text-white">
                  <p className="font-medium">{name}</p>
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
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Why Atlanta Industries Choose Us
            </h2>

            <ul className="space-y-3 text-white">
              <li>✔ Manufacturing & logistics expertise</li>
              <li>✔ Energy efficiency focused insulation</li>
              <li>✔ Custom industrial fabrication</li>
              <li>✔ Removable insulation systems</li>
              <li>✔ Cost reduction in energy loss</li>
            </ul>
          </div>

          <div>
            <img
              src="/img/atlanta-product.webp"
              width={500}
              height={800}
              alt="industrial insulation jackets atlanta logistics manufacturing usa energy systems"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* RESULTS */}
      <section className="py-16 px-6 md:px-16 text-center">

        <h2 className="text-3xl font-bold mb-10 text-white">
          Industrial Performance Benefits
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
            <p>Industrial Operations</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Fast</h3>
            <p>ROI Improvement</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-16 text-center">

        <h2 className="text-4xl font-bold mb-6 text-white">
          Get Industrial Insulation Solutions in Atlanta
        </h2>

        <p className="mb-8 text-white">
          Contact us for custom removable insulation jackets for manufacturing plants, logistics hubs, and industrial energy systems in Atlanta Georgia.
        </p>

        <button className="bg-orange-500 px-8 py-4 rounded-lg text-lg">
          Request a Quote
        </button>

      </section>

    </main>
  );
}
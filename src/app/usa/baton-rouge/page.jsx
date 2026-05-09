import Link from "next/link";

export const metadata = {
  title:
    "Industrial Insulation Jackets in Baton Rouge Louisiana | Refinery & Chemical Plant Thermal Solutions",
  description:
    "Custom removable insulation jackets for industrial equipment in Baton Rouge Louisiana. Designed for refineries, chemical plants, LNG facilities, and power generation systems.",
  keywords: [
    "industrial insulation Baton Rouge",
    "refinery insulation jackets Louisiana",
    "chemical plant insulation covers Baton Rouge",
    "valve insulation jackets refinery USA",
    "pipeline insulation Louisiana industrial",
    "thermal insulation jackets petrochemical plants",
  ],
};

export default function BatonRougePage() {
  return (
    <main className="w-full bg-gray-900 text-white">

      {/* HERO */}
      <section className="bg-gray-900 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Industrial Insulation Jackets in Baton Rouge, Louisiana
            </h1>

            <p className="mt-6 text-lg text-white">
              High-temperature removable insulation jackets for refineries, chemical processing plants, LNG facilities, and industrial energy systems in Baton Rouge. Designed to reduce heat loss, improve efficiency, and enhance safety.
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
              ✔ Refinery Solutions &nbsp; ✔ Chemical Plant Insulation &nbsp; ✔ High Temperature Resistant &nbsp; ✔ USA Industrial Supply
            </p>
          </div>

          <div>
            <img
              src="/images/baton-rouge-refinery.jpg"
              alt="industrial insulation jackets baton rouge refinery chemical plant"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6 text-white">
            Industrial Thermal Insulation Solutions for Baton Rouge Energy Sector
          </h2>

          <p className="mb-4 text-white">
            Baton Rouge is one of the most important refinery and chemical processing hubs in the United States, hosting large-scale petrochemical complexes and continuous industrial operations that require reliable thermal insulation systems.
          </p>

          <p className="text-white">
            Our removable insulation jackets for industrial equipment in Baton Rouge are engineered for valves, pipelines, turbines, heat exchangers, and exhaust systems operating under extreme temperatures.
          </p>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10 text-white">
            Industries We Serve in Baton Rouge Louisiana
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Oil Refineries",
              "Chemical Plants",
              "Petrochemical Complexes",
              "LNG Facilities",
              "Power Plants",
              "Industrial Processing Units",
              "Pipeline Infrastructure",
              "Energy Production Facilities",
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
            Industrial Insulation Applications in Baton Rouge
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Refinery Valve Insulation Jackets",
              "Chemical Plant Pipeline Covers",
              "Turbine Thermal Insulation Systems",
              "Exhaust & Heat Shield Covers",
              "Pump & Compressor Insulation",
              "Industrial Generator Jackets",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-white p-6 rounded-xl hover:shadow-md transition text-white"
              >
                <h3 className="font-semibold text-white">{item}</h3>
                <p className="text-sm mt-2 text-white">
                  Custom high temperature insulation solution designed for Baton Rouge industrial facilities.
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
              Industrial Challenges in Baton Rouge
            </h2>

            <ul className="space-y-3 text-white">
              <li>• Continuous refinery heat loss</li>
              <li>• Chemical plant safety risks</li>
              <li>• High energy consumption systems</li>
              <li>• Maintenance downtime in production units</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Our Solution
            </h2>

            <p className="text-white">
              Our Baton Rouge industrial insulation jackets provide reliable thermal protection for high-temperature equipment, reducing energy loss and improving operational efficiency across refinery and chemical plant environments.
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
              ["Atlanta", "/usa/atlanta"],
              ["Chicago", "/usa/chicago"],
              ["Newark", "/usa/newark"],
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
              Why Baton Rouge Industries Choose Us
            </h2>

            <ul className="space-y-3 text-white">
              <li>✔ Custom engineered insulation jackets</li>
              <li>✔ High temperature industrial materials</li>
              <li>✔ Removable and reusable design</li>
              <li>✔ Improve energy efficiency in refineries</li>
              <li>✔ Reduce operational costs</li>
            </ul>
          </div>

          <div>
            <img
              src="/images/baton-rouge-product.jpg"
              alt="industrial insulation jackets baton rouge chemical refinery"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-gray-900 py-16 px-6 md:px-16 text-center">

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
            <p>Efficiency Improvement</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Safe</h3>
            <p>Work Environment</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Fast</h3>
            <p>ROI for Plants</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 px-6 md:px-16 text-center">

        <h2 className="text-4xl font-bold mb-6 text-white">
          Get Custom Insulation for Baton Rouge Facilities
        </h2>

        <p className="mb-8 text-white">
          Contact us for high-performance removable insulation jackets for refineries, chemical plants, and industrial equipment in Baton Rouge Louisiana.
        </p>

        <button className="bg-orange-500 px-8 py-4 rounded-lg text-lg">
          Request a Quote
        </button>

      </section>

    </main>
  );
}
import Link from "next/link";

export const metadata = {
  title:
    "Industrial Insulation Jackets in Houston Texas | Refinery & LNG Thermal Solutions",
  description:
    "Custom removable insulation jackets for industrial equipment in Houston Texas. Designed for oil refineries, LNG terminals, petrochemical plants, and power generation facilities.",
  keywords: [
    "industrial insulation Houston Texas",
    "refinery insulation jackets Houston",
    "LNG insulation solutions Houston",
    "valve insulation covers Houston",
    "pipeline insulation Houston Texas",
    "turbine insulation jackets Houston",
  ],
};

export default function HoustonPage() {
  return (
    <main className="w-full bg-gray-900 text-white">

      {/* HERO SECTION */}
      <section className="bg-gray-900 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Industrial Insulation Jackets in Houston, Texas
            </h1>

            <p className="mt-6 text-lg text-white">
              Custom removable insulation jackets for industrial equipment in Houston refineries, LNG terminals, and petrochemical plants. Designed to reduce heat loss, improve energy efficiency, and ensure safe operations in high-temperature environments.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                Request a Quote
              </button>
              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                Get Custom Design
              </button>
            </div>

            <p className="mt-6 text-sm text-white">
              ✔ Houston Refinery Solutions &nbsp; ✔ LNG & Petrochemical Industry &nbsp; ✔ High Temperature Resistant &nbsp; ✔ Custom Manufacturing
            </p>
          </div>

          <div>
            <img
              src="/images/houston-refinery.jpg"
              alt="industrial insulation jackets houston refinery pipelines valves"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6 text-white">
            Industrial Insulation Solutions for Houston Energy Sector
          </h2>

          <p className="mb-4 text-white">
            Houston, Texas is the largest industrial energy hub in the United States, home to massive oil refineries, LNG export terminals, and petrochemical facilities. These industries operate under extreme thermal conditions where energy efficiency and equipment safety are critical.
          </p>

          <p className="text-white">
            Our removable insulation jackets for industrial equipment in Houston are engineered for valves, pipelines, turbines, pumps, and exhaust systems to minimize heat loss and improve operational efficiency across continuous processing plants.
          </p>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10 text-white">
            Industries We Serve in Houston Texas
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Oil & Gas Refineries",
              "LNG Terminals",
              "Petrochemical Plants",
              "Pipeline Networks",
              "Power Generation",
              "Chemical Processing",
              "Industrial Manufacturing",
              "Energy Facilities",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer text-white"
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
            Insulation Applications in Houston Industrial Facilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Valve Insulation Jackets Houston",
              "Pipeline Thermal Insulation Covers",
              "Turbine Insulation Systems",
              "Exhaust & Heat Shield Covers",
              "Generator Insulation Jackets",
              "Pump & Compressor Insulation",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-white p-6 rounded-xl hover:shadow-md transition cursor-pointer text-white"
              >
                <h3 className="font-semibold text-white">{item}</h3>
                <p className="text-sm mt-2 text-white">
                  High temperature removable insulation solution designed for Houston industrial operations.
                </p>
              </div>
            ))}

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
              ["/usa/products/valve-insulation-cover", "Valve Insulation Cover"],
              ["/usa/products/generator-insulation-jacket", "Generator Insulation Jacket"],
              ["/usa/products/extruder-machine-thermal-insulation-cover", "Extruder Machine Insulation"],
              ["/usa/products/pump-insulation-jacket", "Pump Insulation Jacket"],
            ].map(([url, name], i) => (
              <Link key={i} href={url}>
                <div className="bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer text-white">
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
              ["/usa/baton-rouge", "Baton Rouge"],
              ["/usa/corpus-christi", "Corpus Christi"],
              ["/usa/chicago", "Chicago"],
              ["/usa/los-angeles", "Los Angeles"],
            ].map(([url, name], i) => (
              <Link key={i} href={url}>
                <div className="border border-white p-4 rounded-xl bg-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer text-white">
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

      {/* PROBLEM SOLUTION */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Industrial Challenges in Houston
            </h2>
            <ul className="space-y-3 text-white">
              <li>• Extreme heat loss in refinery operations</li>
              <li>• High energy consumption in LNG plants</li>
              <li>• Worker safety risks from hot surfaces</li>
              <li>• Maintenance downtime costs</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Our Solution
            </h2>
            <p className="text-white">
              Our Houston industrial insulation jackets are designed to provide long-term thermal efficiency, reduce operational costs, and ensure safe working conditions in high-temperature environments such as refineries and petrochemical plants.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Why Houston Industries Choose Our Insulation Jackets
            </h2>

            <ul className="space-y-3 text-white">
              <li>✔ Custom-fit industrial insulation design</li>
              <li>✔ High temperature resistance materials</li>
              <li>✔ Removable & reusable system</li>
              <li>✔ Reduce heat loss in pipelines and valves</li>
              <li>✔ Improve refinery energy efficiency</li>
            </ul>
          </div>

          <div>
            <img
              src="/images/houston-product.jpg"
              alt="industrial insulation jackets houston texas refinery valves turbines"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-gray-900 py-16 px-6 md:px-16 text-center">

        <h2 className="text-3xl font-bold mb-10 text-white">
          Proven Results in Industrial Applications
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
            <p>Working Environment</p>
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
          Get Custom Industrial Insulation in Houston Today
        </h2>

        <p className="mb-8 text-white">
          Contact us for high-performance removable insulation jackets for refineries, LNG terminals, and industrial plants in Houston Texas.
        </p>

        <button className="bg-orange-500 px-8 py-4 rounded-lg text-lg">
          Request a Quote
        </button>

      </section>

    </main>
  );
}
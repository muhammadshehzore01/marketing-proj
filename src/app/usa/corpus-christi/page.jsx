import Link from "next/link";

export const metadata = {
  title:
    "Industrial Insulation Jackets in Corpus Christi Texas | LNG & Pipeline Thermal Solutions USA",
  description:
    "Custom removable insulation jackets for LNG terminals, pipelines, and refinery equipment in Corpus Christi Texas. Improve energy efficiency and safety in industrial operations.",
  keywords: [
    "industrial insulation Corpus Christi Texas",
    "LNG insulation jackets Corpus Christi",
    "pipeline insulation Texas Gulf Coast",
    "refinery insulation covers Corpus Christi",
    "valve insulation jackets LNG terminals USA",
    "thermal insulation industrial equipment Texas",
  ],
};

export default function CorpusChristiPage() {
  return (
    <main className="w-full bg-gray-900 text-white">

      {/* HERO */}
      <section className="bg-gray-900 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Industrial Insulation Jackets in Corpus Christi, Texas
            </h1>

            <p className="mt-6 text-lg text-white">
              High-performance removable insulation jackets for LNG terminals, oil refineries, and pipeline infrastructure in Corpus Christi. Designed for extreme industrial environments on the Texas Gulf Coast.
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
              ✔ LNG Export Focus &nbsp; ✔ Pipeline Insulation &nbsp; ✔ Refinery Applications &nbsp; ✔ USA Industrial Supply
            </p>
          </div>

          <div>
            <img
              src="/images/corpus-christi-lng.jpg"
              alt="industrial insulation jackets corpus christi lng pipelines refinery texas"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6 text-white">
            LNG & Energy Infrastructure Insulation Solutions for Corpus Christi
          </h2>

          <p className="mb-4 text-white">
            Corpus Christi is one of the fastest-growing LNG export and energy infrastructure hubs in the United States. The region contains large-scale pipeline systems, storage terminals, and refinery operations that require advanced thermal insulation solutions.
          </p>

          <p className="text-white">
            Our removable insulation jackets for industrial equipment in Corpus Christi are engineered for valves, LNG pipelines, turbines, compressors, and exhaust systems operating under high thermal stress conditions.
          </p>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10 text-white">
            Industries We Serve in Corpus Christi Texas
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "LNG Export Terminals",
              "Oil Refineries",
              "Pipeline Infrastructure",
              "Gas Processing Plants",
              "Petrochemical Facilities",
              "Energy Storage Systems",
              "Marine Fuel Systems",
              "Industrial Utilities",
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
            Industrial Insulation Applications in Corpus Christi
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "LNG Pipeline Insulation Jackets",
              "Refinery Valve Insulation Covers",
              "Gas Compressor Insulation Systems",
              "Turbine Thermal Protection Jackets",
              "Exhaust Heat Shield Covers",
              "Industrial Pump Insulation",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-white p-6 rounded-xl hover:shadow-md transition text-white"
              >
                <h3 className="font-semibold text-white">{item}</h3>
                <p className="text-sm mt-2 text-white">
                  Custom engineered insulation solution for high-temperature LNG and refinery operations in Corpus Christi.
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
              Industrial Challenges in Corpus Christi
            </h2>

            <ul className="space-y-3 text-white">
              <li>• High temperature LNG processing systems</li>
              <li>• Continuous pipeline heat loss</li>
              <li>• Marine export terminal exposure</li>
              <li>• Energy inefficiency in large-scale systems</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Our Solution
            </h2>

            <p className="text-white">
              Our Corpus Christi insulation jackets are designed for LNG and pipeline infrastructure, helping reduce heat loss, improve safety, and enhance operational efficiency in large-scale energy export facilities.
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
              ["/usa/products/valve-insulation-cover", "Valve Insulation Cover"],
              ["/usa/products/generator-insulation-jacket", "Generator Insulation Jacket"],
              ["/usa/products/extruder-machine-thermal-insulation-cover", "Extruder Machine Insulation"],
              ["/usa/products/pump-insulation-jacket", "Pump Insulation Jacket"],
            ].map(([url, name], i) => (
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
              ["/usa/houston", "Houston"],
              ["/usa/baton-rouge", "Baton Rouge"],
              ["/usa/chicago", "Chicago"],
              ["/usa/los-angeles", "Los Angeles"],
            ].map(([url, name], i) => (
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
              Why Corpus Christi Energy Sector Chooses Us
            </h2>

            <ul className="space-y-3 text-white">
              <li>✔ LNG-focused insulation engineering</li>
              <li>✔ High-performance thermal materials</li>
              <li>✔ Custom fabrication for pipelines & valves</li>
              <li>✔ Removable industrial design</li>
              <li>✔ Energy efficiency optimization</li>
            </ul>
          </div>

          <div>
            <img
              src="/images/corpus-product.jpg"
              alt="lng insulation jackets corpus christi texas industrial pipelines"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-gray-900 py-16 px-6 md:px-16 text-center">

        <h2 className="text-3xl font-bold mb-10 text-white">
          Performance Benefits in LNG & Refinery Systems
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-white">

          <div>
            <h3 className="text-3xl font-bold">90%</h3>
            <p>Heat Loss Reduction</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">LNG</h3>
            <p>Optimized Systems</p>
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
      <section className="bg-gray-900 py-20 px-6 md:px-16 text-center">

        <h2 className="text-4xl font-bold mb-6 text-white">
          Get Custom LNG Insulation Solutions in Corpus Christi
        </h2>

        <p className="mb-8 text-white">
          Contact us for high-performance removable insulation jackets for LNG terminals, pipelines, and refinery systems in Corpus Christi Texas.
        </p>

        <button className="bg-orange-500 px-8 py-4 rounded-lg text-lg">
          Request a Quote
        </button>

      </section>

    </main>
  );
}
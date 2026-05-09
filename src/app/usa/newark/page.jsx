import Link from "next/link";

export const metadata = {
  title:
    "Industrial Insulation Jackets in Newark New Jersey | Pharmaceutical & Chemical Plant Thermal Solutions USA",
  description:
    "Custom removable insulation jackets for industrial equipment in Newark New Jersey. Designed for pharmaceutical plants, chemical industries, storage terminals, and utility systems.",
  keywords: [
    "industrial insulation Newark New Jersey",
    "pharmaceutical plant insulation jackets USA",
    "chemical plant insulation Newark",
    "valve insulation covers New Jersey industrial",
    "pipeline insulation systems USA East Coast",
    "thermal insulation jackets pharma industry",
  ],
};

export default function NewarkPage() {
  return (
    <main className="w-full bg-gray-900 text-white">

      {/* HERO */}
      <section className="bg-gray-900 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Industrial Insulation Jackets in Newark, New Jersey
            </h1>

            <p className="mt-6 text-lg text-white">
              High-performance removable insulation jackets for pharmaceutical plants, chemical processing facilities, storage terminals, and utility systems in Newark and the New Jersey industrial corridor.
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
              ✔ Pharma Industry Focus &nbsp; ✔ Chemical Plant Compliance &nbsp; ✔ High Precision Insulation &nbsp; ✔ USA Supply Chain
            </p>
          </div>

          <div>
            <img
              src="/images/newark-industrial.jpg"
              alt="industrial insulation jackets newark pharma chemical plants pipelines usa"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6 text-white">
            Pharmaceutical & Chemical Industry Insulation Solutions for Newark NJ
          </h2>

          <p className="mb-4 text-white">
            Newark, New Jersey is a major industrial hub on the U.S. East Coast, known for its pharmaceutical manufacturing, chemical processing plants, and regulated industrial facilities that require precise thermal management systems.
          </p>

          <p className="text-white">
            Our removable insulation jackets for industrial equipment in Newark are engineered for valves, pipelines, reactors, and processing systems where temperature stability and compliance are critical.
          </p>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10 text-white">
            Industries We Serve in Newark New Jersey
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Pharmaceutical Manufacturing",
              "Chemical Processing Plants",
              "Industrial Storage Terminals",
              "Utility & Energy Systems",
              "Petrochemical Facilities",
              "Research & Production Labs",
              "Pipeline Infrastructure",
              "Industrial Utilities",
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
            Industrial Insulation Applications in Newark
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Pharma Reactor Insulation Jackets",
              "Chemical Pipeline Insulation Covers",
              "Valve Insulation Systems Newark",
              "Storage Tank Thermal Covers",
              "Pump & Compressor Insulation",
              "Utility System Heat Protection",
            ].map((item, i) => (
              <div key={i} className="border border-white p-6 rounded-xl text-white">
                <h3 className="font-semibold text-white">{item}</h3>
                <p className="text-sm mt-2 text-white">
                  Precision-engineered insulation solution for regulated pharmaceutical and chemical industries in Newark.
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
              Industrial Challenges in Newark
            </h2>

            <ul className="space-y-3 text-white">
              <li>• Strict pharmaceutical compliance requirements</li>
              <li>• Temperature-sensitive chemical processes</li>
              <li>• Energy loss in continuous systems</li>
              <li>• High maintenance regulations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Our Solution
            </h2>

            <p className="text-white">
              Our Newark insulation jackets are designed for high-precision industries where temperature control, safety, and regulatory compliance are critical for operational success.
            </p>
          </div>

        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Why Newark Industries Choose Us
            </h2>

            <ul className="space-y-3 text-white">
              <li>✔ High-precision insulation engineering</li>
              <li>✔ Pharmaceutical-grade compliance focus</li>
              <li>✔ Chemical plant safety standards</li>
              <li>✔ Custom fabrication for complex systems</li>
              <li>✔ Removable industrial insulation design</li>
            </ul>
          </div>

          <div>
            <img
              src="/images/newark-product.jpg"
              alt="industrial insulation jackets newark pharmaceutical chemical industry usa"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10 text-white">
            Related Industrial Insulation Products
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <Link href="/usa/products/valve-insulation-cover">
              <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition text-white">
                Valve Insulation Cover
              </div>
            </Link>

            <Link href="/usa/products/generator-insulation-jacket">
              <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition text-white">
                Generator Insulation Jacket
              </div>
            </Link>

            <Link href="/usa/products/extruder-machine-thermal-insulation-cover">
              <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition text-white">
                Extruder Machine Insulation
              </div>
            </Link>

            <Link href="/usa/products/pump-insulation-jacket">
              <div className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition text-white">
                Pump Insulation Jacket
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="bg-gray-900 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8 text-white">
            Other Industrial Cities in USA
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-white">

            <Link href="/usa/houston">Houston</Link>
            <Link href="/usa/chicago">Chicago</Link>
            <Link href="/usa/los-angeles">Los Angeles</Link>
            <Link href="/usa/new-orleans">New Orleans</Link>

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
            <h3 className="text-3xl font-bold">Safe</h3>
            <p>Compliance Support</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Stable</h3>
            <p>Process Temperature</p>
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
          Get Pharmaceutical & Chemical Insulation in Newark
        </h2>

        <p className="mb-8 text-white">
          Contact us for custom removable insulation jackets for pharmaceutical plants, chemical facilities, and industrial systems in Newark New Jersey.
        </p>

        <button className="bg-orange-500 px-8 py-4 rounded-lg text-lg">
          Request a Quote
        </button>

      </section>

    </main>
  );
}
import Link from "next/link";

export const metadata = {
  title:
    "Valve Insulation Cover USA | High Temperature Removable Insulation Jacket for Industrial Valves",
  description:
    "Custom valve insulation covers in USA for refineries, LNG plants, power stations and chemical industries. High temperature removable insulation jackets designed for energy efficiency and safety.",
  keywords: [
    "valve insulation cover USA",
    "removable valve insulation jacket",
    "industrial valve insulation blanket USA",
    "refinery valve insulation Houston",
    "high temperature valve insulation cover",
    "energy saving valve insulation jacket",
  ],
};

export default function ValveInsulationCoverPage() {
  return (
    <main className="w-full text-gray-800">

      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Valve Insulation Cover USA
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              High-temperature removable insulation jackets designed for industrial valves used in refineries, LNG terminals, chemical plants, and power generation facilities across the United States.
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
              ✔ USA Industrial Supply &nbsp; ✔ High Temperature Resistant &nbsp; ✔ Custom Made &nbsp; ✔ Removable Design
            </div>
          </div>

          <div>
            <img
              src="/images/valve-insulation-cover.jpg"
              alt="valve insulation cover USA refinery industrial jacket"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Industrial Valve Insulation Cover for Energy Efficiency
          </h2>

          <p className="mb-4">
            The valve insulation cover is a high-performance removable thermal insulation jacket designed to reduce heat loss and improve energy efficiency in industrial systems. It is widely used in oil refineries, LNG terminals, power plants, and chemical processing industries across the USA.
          </p>

          <p>
            These insulation jackets are custom manufactured to fit different valve sizes and operating temperatures, ensuring maximum protection and easy maintenance access.
          </p>

        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-10">
            Industrial Applications in the USA
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Oil & Gas Refineries (Houston, Baton Rouge)",
              "LNG Terminals (Corpus Christi, Gulf Coast)",
              "Power Plants (Chicago, Atlanta)",
              "Chemical Processing Plants (Newark, New Jersey)",
              "Manufacturing Facilities (USA Wide)",
              "Pipeline & Energy Systems",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-semibold">{item}</h3>
                <p className="text-sm mt-2">
                  Designed for high temperature industrial valve insulation applications.
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
              Key Features of Valve Insulation Cover
            </h2>

            <ul className="space-y-3">
              <li>✔ High temperature resistant insulation materials</li>
              <li>✔ Removable and reusable design</li>
              <li>✔ Custom fit for all valve sizes</li>
              <li>✔ Energy saving and heat loss reduction</li>
              <li>✔ Industrial grade durability</li>
              <li>✔ Easy installation and maintenance access</li>
            </ul>
          </div>

          <div>
            <img
              src="/images/valve-feature.jpg"
              alt="industrial valve insulation jacket features USA"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-16 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Benefits for Industrial Facilities
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
            <p>Work Environment</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Fast</h3>
            <p>ROI Improvement</p>
          </div>

        </div>

      </section>

      {/* USA CITIES */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-10">
            Where This Product Is Used in USA
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            {[
              "Houston Texas Refineries",
              "Chicago Industrial Plants",
              "Newark Chemical Industry",
              "Los Angeles Energy Systems",
              "Baton Rouge Refineries",
              "Atlanta Manufacturing Units",
            ].map((city, i) => (
              <div key={i} className="border p-5 rounded-lg">
                {city}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* NEW SECTION ADDED */}
      <section className="py-16 px-6 md:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8">
            Used in Major USA Cities
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <Link href="/usa/houston">Houston</Link>
            <Link href="/usa/chicago">Chicago</Link>
            <Link href="/usa/newark">Newark</Link>
            <Link href="/usa/los-angeles">Los Angeles</Link>

          </div>

        </div>
      </section>

      <div className="text-center mt-10">
        <Link href="/usa" className="underline">
          View All USA Industrial Insulation Solutions
        </Link>
      </div>

      {/* CTA */}
      <section className="bg-gray-800 text-white py-20 px-6 md:px-16 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Get Custom Valve Insulation Covers in USA
        </h2>

        <p className="mb-8">
          Contact us for custom made high temperature valve insulation jackets for industrial applications across the United States.
        </p>

        <button className="bg-orange-500 px-8 py-4 rounded-lg text-lg">
          Request a Quote
        </button>

      </section>

    </main>
  );
}
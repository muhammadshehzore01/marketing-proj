import ServicesSection from "@/components/ServicesSection";
import Link from "next/link";

export const metadata = {
  title:
    "Removable Insulation Jackets USA | Industrial Thermal Covers for Valves, Pipelines & Refineries",
  description:
    "Custom removable insulation jackets in the USA for valves, pipelines, turbines, and industrial equipment. Used in refineries, LNG terminals, and power plants for energy efficiency.",
  keywords: [
    "removable insulation jackets USA",
    "industrial insulation covers USA",
    "valve insulation jackets USA",
    "pipeline insulation USA",
    "refinery insulation solutions USA",
    "LNG insulation jackets pipelines",
    "turbine insulation blankets USA",
    "thermal insulation for industrial equipment USA",
    "industrial energy saving insulation USA",
  ],
};

export default function USAPage() {
 const cities = [
  {
    name: "Houston Texas",
    url: "/usa/houston",
    subtitle:
      "Industrial insulation jackets for refineries, LNG terminals, and power plants in Houston Texas to improve energy efficiency and safety.",
  },
  {
    name: "Baton Rouge Louisiana",
    url: "/usa/baton-rouge",
    subtitle:
      "Removable insulation solutions for chemical plants, refineries, and industrial equipment in Baton Rouge Louisiana.",
  },
  {
    name: "Corpus Christi Texas",
    url: "/usa/corpus-christi",
    subtitle:
      "High-temperature insulation jackets for oil & gas, petrochemical, and refinery industries in Corpus Christi Texas.",
  },
  {
    name: "Los Angeles California",
    url: "/usa/los-angeles",
    subtitle:
      "Custom insulation covers for industrial systems in Los Angeles California used in refineries and manufacturing plants.",
  },
  {
    name: "Chicago Illinois",
    url: "/usa/chicago",
    subtitle:
      "Durable thermal insulation jackets for industrial valves, pipelines, and heavy machinery in Chicago Illinois.",
  },
  {
    name: "Newark New Jersey",
    url: "/usa/newark",
    subtitle:
      "Energy-saving insulation solutions for chemical and industrial plants in Newark New Jersey.",
  },
  {
    name: "New Orleans Louisiana",
    url: "/usa/new-orleans",
    subtitle:
      "Industrial insulation jackets for offshore, refinery, and energy sector equipment in New Orleans Louisiana.",
  },
  {
    name: "Pittsburgh Pennsylvania",
    url: "/usa/pittsburgh",
    subtitle:
      "Heavy-duty insulation covers for steel plants, turbines, and industrial systems in Pittsburgh Pennsylvania.",
  },
  {
    name: "Atlanta Georgia",
    url: "/usa/atlanta",
    subtitle:
      "Custom removable insulation jackets for manufacturing and energy industries in Atlanta Georgia.",
  },
];

  const products = [
  {
    name: "Valve Insulation Cover",
    slug: "valve-insulation-cover",
    subtitle:
      "Custom-engineered removable insulation covers for industrial valves, designed to reduce heat loss, improve efficiency, and ensure safe maintenance in USA facilities.",
  },
  {
    name: "Generator Insulation Jacket",
    slug: "generator-insulation-jacket",
    subtitle:
      "High-performance insulation jackets for industrial generators, built to minimize energy loss and provide safe, removable thermal protection across USA operations.",
  },
  {
    name: "Extruder Machine Insulation",
    slug: "extruder-machine-insulation",
    subtitle:
      "Precision-fit insulation solutions for extruder machines, helping maintain process temperatures, boost efficiency, and enhance operator safety in USA industries.",
  },
  {
    name: "Pump Insulation Jacket",
    slug: "pump-insulation-jacket",
    subtitle:
      "Durable removable insulation jackets for industrial pumps, offering effective heat retention, energy savings, and easy maintenance access in USA environments.",
  },
];

  return (
    <main className="w-full bg-[#0b1220] text-white">

      {/* HERO */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Removable Insulation Jackets USA for Industrial Valves, Pipelines & Refineries
            </h1>

            <p className="mt-6 text-lg">
              We manufacture and export high-temperature removable insulation jackets in the USA for industrial equipment including valves, pipelines, turbines, exhaust systems, and generators. Our thermal insulation covers are widely used in oil & gas refineries, LNG terminals, power plants, and chemical processing industries to reduce heat loss, improve energy efficiency, and ensure worker safety.
            </p>

            <div className="mt-8 flex gap-4">
              <Link href="https://wa.me/923052646312">
                <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold">
                  Chat Now
                </button>
              </Link>

              <Link href="/products">
                <button className="border border-white px-6 py-3 rounded-lg">
                  View All Products
                </button>
              </Link>
            </div>

            <div className="mt-6 text-sm">
              ✔ USA Industrial Applications ✔ High Temperature Resistant ✔ Custom Built ✔ Export Ready ✔ Energy Saving Solutions
            </div>
          </div>

          <div>
            <img
              src="/img/usa-industrial-insulation.jpg"
              alt="removable insulation jackets USA valves pipelines refineries LNG plants thermal insulation covers"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            High-Performance Thermal Insulation Solutions for U.S. Industries
          </h2>

          <p className="mb-4">
            Industrial facilities across the United States require advanced thermal insulation systems to reduce heat loss, improve energy efficiency, and maintain safe operating environments. Our removable insulation jackets are designed specifically for high-temperature industrial applications.
          </p>

          <p>
            These insulation covers are widely used on valves, flanges, pipelines, turbines, compressors, exhaust systems, and generators in oil refineries, LNG terminals, chemical plants, and power generation facilities across the USA.
          </p>
        </div>
      </section>

      <ServicesSection />

      {/* PRODUCTS */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our Industrial Insulation Products in the USA
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {products.map((product, i) => (
              <Link key={i} href={`/usa/products/${product.slug}`}>
                <div className="border border-white/20 p-6 rounded-2xl hover:border-orange-400 transition">
                  <h3 className="font-semibold text-lg">
                    {product.name}
                  </h3>
                  <p className="text-sm mt-2">
                  {product.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
<section className="py-16 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10">
      Industrial Equipment Insulation Applications in the USA
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Valve Insulation Jackets for Oil Refineries USA",
          subtitle:
            "Custom valve insulation jackets designed for oil refineries in the USA to reduce heat loss, improve safety, and enhance energy efficiency.",
        },
        {
          title: "Flange Insulation Covers for Industrial Pipelines USA",
          subtitle:
            "High-performance flange insulation covers for industrial pipelines across USA, ensuring thermal protection and energy savings.",
        },
        {
          title: "Turbine Insulation Systems for Power Plants USA",
          subtitle:
            "Advanced turbine insulation systems for power plants in the USA to maintain temperature stability and improve efficiency.",
        },
        {
          title: "Exhaust & Bellows Thermal Insulation Covers USA",
          subtitle:
            "Durable exhaust and bellows insulation covers designed for high-temperature industrial environments in the USA.",
        },
        {
          title: "Generator Insulation Jackets for Energy Plants USA",
          subtitle:
            "Energy-efficient generator insulation jackets used in power and energy plants across the USA for heat retention and safety.",
        },
        {
          title: "Pumps and Compressors Insulation Systems USA",
          subtitle:
            "Industrial insulation systems for pumps and compressors in USA factories to reduce energy loss and improve performance.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-6 rounded-xl border border-white/10"
        >
          <h3 className="font-semibold">{item.title}</h3>

          <p className="mt-2 text-sm">{item.subtitle}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* INDUSTRIES */}
<section className="py-16 px-6 md:px-16">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-10">
      Industries We Serve in the USA
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          title: "Oil & Gas Refineries USA",
          subtitle:
            "High-temperature insulation jackets for refinery pipelines, valves, and process equipment to improve efficiency and safety.",
        },
        {
          title: "LNG Export Terminals USA",
          subtitle:
            "Thermal insulation solutions designed for LNG terminals to minimize energy loss and maintain stable operating temperatures.",
        },
        {
          title: "Petrochemical Plants USA",
          subtitle:
            "Industrial insulation covers for petrochemical systems to enhance heat retention and reduce operational energy costs.",
        },
        {
          title: "Power Generation Facilities USA",
          subtitle:
            "Advanced insulation jackets for turbines, boilers, and generators in power plants across the USA.",
        },
        {
          title: "Chemical Processing Plants USA",
          subtitle:
            "Durable insulation systems for chemical processing equipment ensuring safety, efficiency, and thermal control.",
        },
        {
          title: "Manufacturing Industries USA",
          subtitle:
            "Custom removable insulation solutions for industrial machines to reduce heat loss and improve production efficiency.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-8 rounded-2xl border border-white/10"
        >
          <h3 className="font-semibold">{item.title}</h3>

          <p className="mt-2 text-sm">{item.subtitle}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CITIES */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Major Industrial Cities We Serve in the United States
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {cities.map((city, i) => (
              <a
                key={i}
                href={city.url}
                className="p-5 rounded-lg border border-white/10 hover:border-orange-400 transition"
              >
                <h3 className="font-semibold">{city.name}</h3>
                <p className="text-sm mt-2">
                 {city.subtitle}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Our Insulation Jackets Are Ideal for U.S. Industries
            </h2>

            <ul className="space-y-3">
              <li>✔ Custom-fit insulation for valves, pipelines, and turbines</li>
              <li>✔ Designed for high temperature industrial environments</li>
              <li>✔ Removable and reusable insulation system</li>
              <li>✔ Reduce heat loss and improve energy efficiency</li>
              <li>✔ Increase safety by covering hot surfaces</li>
            </ul>
          </div>

          <div>
            <img
              src="/img/Insulation-jacket-manufacturer.webp"
              width={300}
              height={400}
              alt="industrial insulation jackets USA energy saving thermal covers valves pipelines"
              className="rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions – USA Industrial Insulation Jackets
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold">
                What are removable insulation jackets used for?
              </h3>
              <p className="text-sm mt-2">
                Removable insulation jackets are used on valves, pipelines, turbines, and industrial equipment to reduce heat loss, improve energy efficiency, and enhance worker safety.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Do you supply insulation jackets in the USA?
              </h3>
              <p className="text-sm mt-2">
                Yes, we export custom-made thermal insulation jackets to industrial clients across the United States including refineries, LNG terminals, and power plants.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Which industries use insulation jackets?
              </h3>
              <p className="text-sm mt-2">
                Oil & gas, petrochemical plants, power generation, LNG terminals, and manufacturing industries widely use insulation jackets for energy saving and safety.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Get Industrial Insulation Solutions for Your Facility in the USA
        </h2>

        <p className="mb-8">
          Contact us today for custom removable insulation jackets for valves, pipelines, turbines, and high-temperature industrial systems across the United States.
        </p>

        <Link href="/get-quote">
          <button className="bg-orange-500 px-8 py-4 rounded-lg text-lg">
            Request a Quote
          </button>
        </Link>
      </section>

    </main>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function Intro2() {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* SEO + Strong Heading */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
            Industrial High-Temperature Insulation Jackets for Energy Efficiency
          </h2>

          {/* Problem Statement */}
          <p className="mt-6 text-gray-700 leading-relaxed">
            Industrial plants lose significant energy through uninsulated valves, flanges, pipelines, and equipment. This results in higher fuel costs, safety risks, and heat wastage.
          </p>

          {/* Solution */}
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our removable insulation jackets are engineered to reduce heat loss, improve energy efficiency, and provide safe working environments in high-temperature industrial systems.
          </p>

          {/* Applications */}
          <p className="mt-4 text-gray-700 leading-relaxed">
            Used in power plants, refineries, chemical industries, cement plants, textile mills, and marine systems for valves, turbines, compressors, generators, and exhaust systems.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            
            <Link
              href="/get-quote"
              className="bg-black text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-gray-800 transition"
            >
              Get Free Quote
            </Link>

            <a
              href="https://wa.me/923052646312"
              target="_blank"
              className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-green-600 transition"
            >
              WhatsApp Inquiry
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <Image
            src="/img/insulation-jacket.jpg"
            alt="Industrial Thermal Insulation Jacket"
            width={600}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />

          {/* Optional Badge */}
          <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-4 py-2 rounded-lg">
            Custom Manufactured in Pakistan
          </div>
        </div>

      </div>
    </section>
  );
}
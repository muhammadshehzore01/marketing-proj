import Link from "next/link";

const industries = [
  {
    title: "Power Generation",
    description:
      "Custom insulation jackets for generators, turbines, boilers, and exhaust systems.",
    href: "/industries/power-generation",
    image: "/images/industries/power-generation-industry-insulation-jackets.webp",
  },
  {
    title: "Oil & Gas / Refineries",
    description:
      "Thermal insulation solutions for pipelines, valves, compressors, and heat exchangers.",
    href: "/industries/oil-gas-refineries",
    image: "/images/industries/oil-gas-refineries-insulation-jackets.webp",
  },
  {
    title: "Textile Industry",
    description:
      "Reusable insulation jackets for boilers, steam lines, and dyeing machinery.",
    href: "/industries/textile-industry",
    image: "/images/industries/textile-industry-insulation-jackets.webp",
  },
  {
    title: "Plastic & Polymer",
    description:
      "Energy-saving insulation covers for extruders, molding machines, and barrel heaters.",
    href: "/industries/plastic-polymer-industry",
    image: "/images/industries/plastic-polymer-insulation-jackets.webp",
  },
  {
    title: "Food Processing",
    description:
      "Heat retention systems for boilers, ovens, dryers, and steam equipment.",
    href: "/industries/food-processing-industry",
    image: "/images/industries/food-processing-insulation-jackets.webp",
  },
  {
    title: "Marine & Shipping",
    description:
      "High-temperature removable covers for ship engines, exhausts, and generators.",
    href: "/industries/marine-shipping",
    image: "/images/industries/marine-shipping-insulation-jackets.webp",
  },
];

export default function IndustryCardsSection() {
  return (
    <section className="relative py-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Industries We Serve
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Industrial Removable Insulation Jacket Solutions
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-8">
            Explore custom-designed thermal insulation jackets for major
            industries where heat loss reduction, worker safety, and maintenance
            efficiency are essential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className={`h-full ${
                index % 2 === 0 ? "xl:mt-10" : "xl:mt-0"
              }`}
            >
              <Link
                href={industry.href}
                className="group relative flex h-[500px] w-full rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

                <div className="relative z-10 flex flex-col justify-end h-full w-full p-8">
                  <div className="min-h-[72px] flex items-end">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {industry.title}
                    </h3>
                  </div>

                  <div className="mt-4 min-h-[96px]">
                    <p className="text-gray-200 leading-7 text-base">
                      {industry.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <span className="inline-flex items-center text-orange-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Explore Industry
                      <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center rounded-2xl bg-orange-600 px-8 py-4 text-white font-semibold hover:bg-orange-700 transition"
          >
            View All Industries
          </Link>
        </div>
      </div>
    </section>
  );
}
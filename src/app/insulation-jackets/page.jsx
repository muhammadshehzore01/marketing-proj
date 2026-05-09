import Image from "next/image";
export const metadata = {
  title: "Removable Insulation Jackets | M. Shahrukh Engineering Works",
  description:
    "High-temperature removable insulation jackets for valves, pipes, turbines, and industrial equipment. Reduce heat loss and improve efficiency.",
};

export default function InsulationJacketsPage() {
  return (
    <div className="w-full">

      {/* 🔴 HERO SECTION */}
      <section className="py-24 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-manrope">
          Removable Insulation Jackets
        </h1>
        <p className="mt-4 max-w-2xl mx-auto opacity-80">
          High-performance, reusable insulation solutions designed for industrial equipment,
          piping systems, and high-temperature applications.
        </p>
      </section>

      {/* 🧩 OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl font-bold font-manrope">
            Industrial Thermal Insulation Solutions
          </h2>

          <p className="mt-4 opacity-80">
            Our removable insulation jackets are engineered to reduce heat loss,
            improve energy efficiency, and ensure worker safety in demanding
            industrial environments such as power plants, refineries, and factories.
          </p>

          <ul className="mt-6 space-y-2">
            <li>✔ Reduce Heat Loss</li>
            <li>✔ Improve Energy Efficiency</li>
            <li>✔ Removable & Reusable</li>
            <li>✔ Custom Fit for Any Equipment</li>
            <li>✔ Maintenance Friendly</li>
          </ul>
        </div>

        <img
          src="/img/insulation-main.jpg"
          alt="Industrial insulation jacket"
            width={400}
            height={300}
          className="rounded-2xl shadow-lg"
        />
      </section>

      {/* 🧱 MATERIAL SECTION */}
      <section className="py-16 px-6 bg-black/5">
        <div className="max-w-7xl mx-auto text-center">
          
          <h2 className="text-3xl font-bold font-manrope">
            Material Construction
          </h2>

          <p className="mt-4 max-w-2xl mx-auto opacity-80">
            Our insulation jackets are built using high-quality multi-layer materials,
            selected based on temperature, environment, and application requirements.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            {/* OUTER */}
            <div className="p-6 rounded-xl border">
              <h3 className="font-semibold text-lg">Outer & Inner Layer</h3>
              <ul className="mt-3 text-sm opacity-80 space-y-1 text-left">
                <li>• Silicon Coated Fiberglass Fabric</li>
                <li>• PU Coated Fiberglass Fabric</li>
                <li>• Aluminum Laminated Fiberglass</li>
                <li>• Ceramic Fiber Cloth</li>
                <li>• Fiberglass Cloth</li>
              </ul>
            </div>

            {/* INSULATION */}
            <div className="p-6 rounded-xl border">
              <h3 className="font-semibold text-lg">Insulation Core</h3>
              <ul className="mt-3 text-sm opacity-80 space-y-1 text-left">
                <li>• Glass Wool</li>
                <li>• Rock Wool</li>
                <li>• Ceramic Wool</li>
                <li>• Ceramic Paper</li>
              </ul>
            </div>

            {/* CLOSURE */}
            <div className="p-6 rounded-xl border">
              <h3 className="font-semibold text-lg">Closure System</h3>
              <ul className="mt-3 text-sm opacity-80 space-y-1 text-left">
                <li>• Velcro (Hook & Loop)</li>
                <li>• Belt System</li>
                <li>• Stainless Steel Springs</li>
                <li>• Stainless Steel Hooks</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ⚙️ APPLICATIONS */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold font-manrope">
            Applications
          </h2>

          <p className="mt-4 max-w-2xl mx-auto opacity-80">
            Suitable for a wide range of industrial equipment and systems where heat
            retention and safety are critical.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            {[
              "Valves & Flanges",
              "Pipes & Elbows",
              "Turbines & Generators",
              "Pumps & Compressors",
              "Exhaust Systems",
              "Plastic & Moulding Machines",
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border">
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 🧩 MODULAR SYSTEM */}
      <section className="py-16 px-6 bg-black/5">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold font-manrope">
            Complete Modular Insulation System
          </h2>

          <p className="mt-4 max-w-2xl mx-auto opacity-80">
            Our insulation jackets are designed as a modular system that can be
            combined to cover complete piping networks and complex equipment layouts.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            {[
              "Straight Sections",
              "Elbows",
              "Valves",
              "Flanges",
              "Tees",
              "Custom Equipment Covers",
            ].map((item, i) => (
              <div key={i} className="p-5 border rounded-lg">
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 📊 FEATURES */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold font-manrope">
            Features & Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            {[
              "Reduce Heat Loss",
              "Improve Energy Efficiency",
              "Reusable & Removable Design",
              "Enhance Worker Safety",
              "Custom Made Solutions",
              "Long Service Life",
            ].map((item, i) => (
              <div key={i} className="p-6 border rounded-xl">
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 📦 READY STOCK */}
      <section className="py-16 px-6 bg-black/5 text-center">
        <h2 className="text-3xl font-bold font-manrope">
          Ready Stock Available
        </h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold">Caterpillar Models</h3>
            <ul className="mt-3 text-sm opacity-80 space-y-1">
              <li>G3516-A</li>
              <li>G3516-B</li>
              <li>G3516-C</li>
              <li>G3520-C</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold">Jenbacher Models</h3>
            <ul className="mt-3 text-sm opacity-80 space-y-1">
              <li>JGS320</li>
              <li>JGS420</li>
              <li>JGS616</li>
              <li>JGS620</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 📞 CTA */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold font-manrope">
          Get a Custom Insulation Solution
        </h2>

        <p className="mt-4 opacity-80">
          Contact us today to improve energy efficiency and reduce heat loss in your facility.
        </p>

        <a
          href="https://wa.me/923052646312"
          className="inline-block mt-6 px-6 py-3 border rounded-lg hover:bg-black hover:text-white transition"
        >
          Contact on WhatsApp
        </a>
      </section>

    </div>
  );
}
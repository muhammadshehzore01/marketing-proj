// import Image from "next/image";

// export default function IntroSection() {
//   return (
//     <section className="py-16 px-6 md:px-16 bg-transparent">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
           
//         {/* LEFT CONTENT */}
//         <div>
//           <span className="inline-block mb-4 text-sm font-semibold text-orange-500 uppercase tracking-wide">
//             Industrial Energy Saving Solutions
//           </span>

//           <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
//             High-Temperature Removable Insulation Jackets
//           </h2>

//           <p className="text-gray-300 leading-relaxed mb-5">
//             {/* Our removable insulation jackets are engineered to reduce heat loss,
//             improve industrial energy efficiency, and enhance worker safety by
//             covering high-temperature equipment surfaces. */}
//           </p>

//           <p className="text-gray-400 leading-relaxed mb-8">
//             Designed for power plants, refineries, chemical industries, and
//             manufacturing systems, these reusable jackets lower operating costs
//             while simplifying maintenance access.
//           </p>

//           {/* BENEFITS */}
//           <div className="grid sm:grid-cols-2 gap-4 mb-8">
//             {[
//               "Reduce heat loss",
//               "Improve energy efficiency",
//               "Reusable & removable",
//               "Worker safety protection",
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-3 text-gray-300 font-medium"
//               >
//                 <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
//                 {item}
//               </div>
//             ))}
//           </div>

//           {/* APPLICATIONS */}
//           <div className="mb-8">
//             <h3 className="text-lg font-semibold text-white mb-3">
//               Applications
//             </h3>

//             <p className="text-gray-400 leading-relaxed">
//               Ideal for valves, flanges, pumps, turbines, compressors,
//               generators, exhaust systems, pipelines, and industrial machinery.
//             </p>
//           </div>

//           <a
//             href="learn-more"
//             className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
//           >
//             Learn More About Our Insulation Jackets.
//           </a>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative">
//           <div className="relative overflow-hidden rounded-2xl shadow-2xl">
//             <Image
//               src="/img/insulation-jacket.jpg"
//               alt="High-temperature removable insulation jacket"
//               width={700}
//               height={500}
//               className="w-full h-auto object-contain"
//               priority
//               unoptimized
//               quality={75}
//               sizes="(max-width: 768px) 100vw, 50vw"
//             />
//           </div>

//           {/* ENERGY SAVING CARD */}
//           <div className="mt-6 bg-black/60 backdrop-blur-md rounded-xl shadow-xl p-5 border border-white/10">
//             <h3 className="text-lg font-bold text-white">
//               Energy-Saving Performance
//             </h3>
//             <p className="text-sm text-gray-300 mt-2">
//               Supports reduced thermal energy loss, lower fuel consumption, and
//               long-term operational savings.
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


// marketing-proj/src/components/IntroSection.jsx

import Image from "next/image";

export default function IntroSection({ seoData = null }) {
  return (
    <section className="py-16 px-6 md:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 text-sm font-semibold text-orange-500 uppercase tracking-wide">
            {seoData?.label || "Industrial Energy Saving Solutions"}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            {seoData?.heading || "High-Temperature Removable Insulation Jackets"}
          </h2>

          <p className="text-gray-300 leading-relaxed mb-5">
            {seoData?.paragraph1 ||
              "Our removable insulation jackets are engineered to reduce heat loss, improve industrial energy efficiency, and enhance worker safety by covering high-temperature equipment surfaces."}
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            {seoData?.paragraph2 ||
              "Designed for power plants, refineries, chemical industries, and manufacturing systems, these reusable jackets lower operating costs while simplifying maintenance access."}
          </p>

          {/* BENEFITS */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {(seoData?.benefits || [
              "Reduce heat loss",
              "Improve energy efficiency",
              "Reusable & removable",
              "Worker safety protection",
            ]).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-300 font-medium"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                {item}
              </div>
            ))}
          </div>

          {/* APPLICATIONS */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-3">
              Applications
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {seoData?.applications ||
                "Ideal for valves, flanges, pumps, turbines, compressors, generators, exhaust systems, pipelines, and industrial machinery."}
            </p>
          </div>

          <a
            href="/learn-more"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
          >
            Learn More About Our Insulation Jackets
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={seoData?.image || "/img/insulation-jacket.jpg"}
              alt={
                seoData?.heading ||
                "High-temperature removable insulation jacket"
              }
              width={700}
              height={500}
              className="w-full h-auto object-contain"
              priority
              unoptimized
              quality={75}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* ENERGY SAVING CARD */}
          <div className="mt-6 bg-black/60 backdrop-blur-md rounded-xl shadow-xl p-5 border border-white/10">
            <h3 className="text-lg font-bold text-white">
              {seoData?.cardTitle || "Energy-Saving Performance"}
            </h3>

            <p className="text-sm text-gray-300 mt-2">
              {seoData?.cardText ||
                "Supports reduced thermal energy loss, lower fuel consumption, and long-term operational savings."}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
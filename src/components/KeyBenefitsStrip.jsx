// import {
//   Zap,
//   DollarSign,
//   ShieldCheck,
//   Wrench,
//   RefreshCw,
//   Settings2,
// } from "lucide-react";
  
// export default function KeyBenefitsStrip() {
//   const benefits = [
//     {
//       icon: Zap,
//       title: "Energy Saving",
//       desc: "Reduces heat loss and improves plant efficiency",
//       color: "text-yellow-400",
//     },
//     {
//       icon: DollarSign,
//       title: "Cost Reduction",
//       desc: "Lowers fuel consumption and operating cost",
//       color: "text-green-400",
//     },
//     {
//       icon: ShieldCheck,
//       title: "Worker Safety",
//       desc: "Prevents burn hazards from hot surfaces",
//       color: "text-red-400",
//     },
//     {
//       icon: Wrench,
//       title: "Easy Maintenance",
//       desc: "Quick removal without damaging equipment",
//       color: "text-blue-400",
//     },
//     {
//       icon: RefreshCw,
//       title: "Reusable Design",
//       desc: "Durable and reusable insulation solution",
//       color: "text-cyan-400",
//     },
//     {
//       icon: Settings2,
//       title: "Custom Engineering",
//       desc: "Designed for valves, turbines & compressors",
//       color: "text-purple-400",
//     },
//   ];

//   return (
//     <section className="w-full text-white py-16 px-6">
      
//       {/* Header */}
//       <header className="max-w-7xl mx-auto text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold">
//           Why Industries Choose Our Insulation
//         </h2>

//         <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
//           Engineered for maximum energy efficiency, safety, and long-term industrial ROI
//         </p>
//       </header>

//       {/* Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//         {benefits.map((item, index) => {
//           const Icon = item.icon;

//           return (
//             <article
//               key={index}
//               aria-label={item.title}
//               className="bg-white/5 border border-gray-800 rounded-2xl p-6 sm:p-8 min-h-[180px] flex flex-col items-center justify-center text-center transition-transform duration-200 hover:bg-white/10 hover:-translate-y-1"
//             >
//               {/* Icon (lightweight rendering) */}
//               <Icon
//                 className={`${item.color} mb-4 w-6 h-6`}
//                 aria-hidden="true"
//               />

//               <h3 className="text-sm md:text-base font-semibold mb-2">
//                 {item.title}
//               </h3>

//               <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
//                 {item.desc}
//               </p>
//             </article>
//           );
//         })}

//       </div>
//     </section>
//   );
// }


// /home/shahrukh-eng/marketing-proj/src/components/KeyBenefitsStrip.jsx
import {
  Zap,
  DollarSign,
  ShieldCheck,
  Wrench,
  RefreshCw,
  Settings2,
} from "lucide-react";

import { getSeoSeed } from "@/lib/seo/engine/shared/seedEngine";

/* ================= BASE POOLS ================= */

const iconPool = [
  Zap,
  DollarSign,
  ShieldCheck,
  Wrench,
  RefreshCw,
  Settings2,
];

const titlePool = [
  "Energy Saving",
  "Cost Reduction",
  "Worker Safety",
  "Easy Maintenance",
  "Reusable Design",
  "Custom Engineering",
];

const descPool = [
  "Improves industrial efficiency in high-temperature environments",
  "Reduces operational energy consumption across systems",
  "Enhances safety for workers and equipment handling",
  "Allows quick maintenance and reduced downtime",
  "Provides durable reusable insulation systems",
  "Engineered for valves, pumps, boilers and turbines",
];

/* ================= COMPONENT ================= */

export default function KeyBenefitsStrip({ country, city }) {
  const { seed } = getSeoSeed(
    `${country?.slug || "global"}-${city?.name || "all"}`,
    "benefits"
  );

  const locationName =
    city?.display || country?.name || "Industrial Facilities";

  const sectionTitles = [
    "Why Industries Choose Our Insulation",
    "Key Industrial Benefits",
    "Thermal Efficiency Advantages",
    "Performance & Energy Optimization",
    "Industrial Energy & Safety Gains",
  ];

  const sectionTitle =
    sectionTitles[Math.abs(seed) % sectionTitles.length];

  /* ================= FIXED UNIQUE ITEM GENERATION ================= */

  const items = Array.from({ length: 6 }).map((_, i) => {
    const iconIndex = (seed + i) % iconPool.length;
    const titleIndex = (seed * 2 + i) % titlePool.length;
    const descIndex = (seed * 3 + i) % descPool.length;

    return {
      icon: iconPool[iconIndex],
      title: titlePool[titleIndex],
      desc: `${descPool[descIndex]} in ${locationName}`,
    };
  });

  return (
    <section className="w-full text-white py-16 px-6">

      {/* HEADER */}
      <header className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          {sectionTitle}
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Engineered for maximum energy efficiency, safety, and ROI in{" "}
          {locationName}.
        </p>
      </header>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={index}
              className="bg-white/5 border border-gray-800 rounded-2xl p-6 sm:p-8 min-h-[180px] flex flex-col items-center justify-center text-center transition-transform duration-200 hover:bg-white/10 hover:-translate-y-1"
            >
              <Icon className="text-white mb-4 w-6 h-6" />

              <h3 className="text-sm md:text-base font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </article>
          );
        })}

      </div>
    </section>
  );
}
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


"use client";

import {
  Zap,
  DollarSign,
  ShieldCheck,
  Wrench,
  RefreshCw,
  Settings2,
} from "lucide-react";

/*
seoData can come like:
<KeyBenefitsStrip seoData={data} />
*/

export default function KeyBenefitsStrip({ seoData = null }) {
  const isSEOPage = Boolean(seoData);

  const defaultBenefits = [
    {
      icon: Zap,
      title: "Energy Saving",
      desc: "Reduces heat loss and improves plant efficiency.",
      color: "text-yellow-400",
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      desc: "Lowers fuel consumption and operating cost.",
      color: "text-green-400",
    },
    {
      icon: ShieldCheck,
      title: "Worker Safety",
      desc: "Prevents burn hazards from hot surfaces.",
      color: "text-red-400",
    },
    {
      icon: Wrench,
      title: "Easy Maintenance",
      desc: "Quick removal without damaging equipment.",
      color: "text-blue-400",
    },
    {
      icon: RefreshCw,
      title: "Reusable Design",
      desc: "Durable and reusable insulation solution.",
      color: "text-cyan-400",
    },
    {
      icon: Settings2,
      title: "Custom Engineering",
      desc: "Designed for valves, turbines & compressors.",
      color: "text-purple-400",
    },
  ];

  const seoBenefits = [
    {
      icon: Zap,
      title:
        seoData?.benefits?.[0]?.title ||
        "Thermal Energy Efficiency",
      desc:
        seoData?.benefits?.[0]?.desc ||
        `Reduce thermal loss with removable insulation jackets in ${
          seoData?.city?.display ||
          seoData?.country?.name ||
          "industrial facilities"
        }.`,
      color: "text-yellow-400",
    },
    {
      icon: DollarSign,
      title:
        seoData?.benefits?.[1]?.title ||
        "Lower Operating Costs",
      desc:
        seoData?.benefits?.[1]?.desc ||
        "Improve industrial efficiency and reduce fuel consumption.",
      color: "text-green-400",
    },
    {
      icon: ShieldCheck,
      title:
        seoData?.benefits?.[2]?.title ||
        "Improved Workplace Safety",
      desc:
        seoData?.benefits?.[2]?.desc ||
        "Protect workers from high-temperature equipment surfaces.",
      color: "text-red-400",
    },
    {
      icon: Wrench,
      title:
        seoData?.benefits?.[3]?.title ||
        "Fast Maintenance Access",
      desc:
        seoData?.benefits?.[3]?.desc ||
        "Easy removable insulation for quick servicing.",
      color: "text-blue-400",
    },
    {
      icon: RefreshCw,
      title:
        seoData?.benefits?.[4]?.title ||
        "Reusable Jacket Design",
      desc:
        seoData?.benefits?.[4]?.desc ||
        "Long-life removable insulation systems.",
      color: "text-cyan-400",
    },
    {
      icon: Settings2,
      title:
        seoData?.benefits?.[5]?.title ||
        "Custom Industrial Fit",
      desc:
        seoData?.benefits?.[5]?.desc ||
        "Engineered for valves, turbines, pumps, compressors and pipelines.",
      color: "text-purple-400",
    },
  ];

  const benefits = isSEOPage
    ? seoBenefits
    : defaultBenefits;

  const heading = isSEOPage
    ? `Why Industries in ${
        seoData?.city?.display ||
        seoData?.country?.name ||
        "Your Region"
      } Choose Our Insulation`
    : "Why Industries Choose Our Insulation";

  const subtitle = isSEOPage
    ? `High-performance removable insulation jackets designed for industrial systems in ${
        seoData?.city?.display ||
        seoData?.country?.name ||
        "global markets"
      }.`
    : "Engineered for maximum energy efficiency, safety, and long-term industrial ROI.";

  return (
    <section className="w-full text-white py-16 px-6">
      {/* Header */}
      <header className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          {heading}
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      </header>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={index}
              aria-label={item.title}
              className="bg-white/5 border border-gray-800 rounded-2xl p-6 sm:p-8 min-h-[180px] flex flex-col items-center justify-center text-center transition-transform duration-200 hover:bg-white/10 hover:-translate-y-1"
            >
              <Icon
                className={`${item.color} mb-4 w-6 h-6`}
                aria-hidden="true"
              />

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
// "use client";

// import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";
 
// const faqs = [
//   {
//     question: "What are removable insulation jackets?",
//     answer:
//       "Removable insulation jackets are reusable thermal covers designed for industrial equipment to reduce heat loss, improve energy efficiency, and improve worker safety around high-temperature surfaces.",
//   },
//   {
//     question: "Where are insulation jackets commonly used?",
//     answer:
//       "These jackets are widely used on valves, flanges, pumps, turbines, compressors, generators, exhaust systems, and pipelines in industrial facilities.",
//   },
//   {
//     question: "Are insulation jackets reusable?",
//     answer:
//       "Yes, they are specifically designed for easy removal and reinstallation, making maintenance, inspection, and repairs more efficient.",
//   },
//   {
//     question: "Do insulation jackets reduce energy costs?",
//     answer:
//       "Yes, by minimizing thermal energy loss, insulation jackets improve system efficiency and significantly reduce fuel and operational costs.",
//   },
//   {
//     question: "Can insulation jackets be custom-made?",
//     answer:
//       "Yes, jackets are custom-manufactured according to equipment dimensions, temperature range, and industrial operating conditions.",
//   },
//   {
//     question: "Which industries use thermal insulation jackets?",
//     answer:
//       "Power plants, refineries, chemical plants, textile industries, food processing, cement, pharmaceuticals, and manufacturing sectors commonly use them.",
//   },
// ];

// export default function FAQSection() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="py-20 px-6 md:px-16 bg-transparent">
//       <div className="max-w-4xl mx-auto text-center">
//         {/* HEADER */}
//         <div className="mb-12">
//           <span className="text-sm font-semibold uppercase tracking-widest text-orange-600">
//             FAQ
//           </span>

//           <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B1220]">
//             Frequently Asked Questions
//           </h2>

//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Learn more about our removable thermal insulation jackets, energy
//             saving benefits, industrial applications, and custom solutions.
//           </p>
//         </div>

//         {/* FAQ LIST */}
//         <div className="space-y-4 text-left">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="border border-gray-200 rounded-2xl backdrop-blur-sm"
//             >
//               {/* QUESTION */}
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full flex items-center justify-between p-5 md:p-6 text-left"
//               >
//                 <span className="font-semibold text-lg text-[#0B1220]">
//                   {faq.question}
//                 </span>

//                 <ChevronDown
//                   className={`w-5 h-5 text-orange-600 transition-transform duration-300 ${
//                     activeIndex === index ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {/* ANSWER */}
//               <div
//                 className={`overflow-hidden transition-all duration-300 ${
//                   activeIndex === index
//                     ? "max-h-96 pb-6 px-6"
//                     : "max-h-0 px-6"
//                 }`}
//               >
//                 <p className="text-gray-600 leading-relaxed">
//                   {faq.answer}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection({
  label = "FAQ",
  title = "Frequently Asked Questions",
  description = "Learn more about our removable thermal insulation jackets, energy saving benefits, industrial applications, and custom solutions.",
  seoContent = null,
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = seoContent?.faqs || [];

  const finalLabel = seoContent?.label || label;
  const finalTitle = seoContent?.title || title;
  const finalDescription = seoContent?.description || description;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-600">
            {finalLabel}
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B1220]">
            {finalTitle}
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {finalDescription}
          </p>
        </div>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
              >
                <span className="font-semibold text-lg text-[#0B1220]">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-orange-600 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-96 pb-6 px-6"
                    : "max-h-0 px-6"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
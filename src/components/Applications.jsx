// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const applications = [
//   {
//     title: "Exhaust Insulation Jackets",
//     subtitle:
//       "High-temperature insulation for exhaust systems, turbochargers, and silencers.",
//     slug: "manifoldr-exhaust-system-insulation-cover-jackets",
//     image:
//       "https://mshahrukhengineeringworks.com/media/services/hero/WhatsApp_Image_2025-10-03_at_3.59.41_PM.jpeg",
//   },
//   {
//     title: "Valve Insulation Jackets",
//     subtitle:
//       "Thermal protection for valves in steam and hot oil systems.",
//     slug: "valves-insulation-covers-jacket-karachi-pakistan",
//     image: "https://mshahrukhengineeringworks.com/media/services/hero/valve-cover.webp",
//   },
//   {
//     title: "Extruder Insulation Covers",
//     subtitle:
//       "Removable insulation for heater and modulor joints.",
//     slug: "plastic-extruder-molding-machines-insulation-pak",
//     image: "https://mshahrukhengineeringworks.com/media/services/hero/whatsapp-image-2024-05-22-at-15334-pm-68da54dd9f7d0.webp",
//   },
//   {
//     title: "Boiler & Steam Insulation",
//     subtitle:
//       "Insulation for boilers, steam lines, and pressure systems.",
//     slug: "boiler-furnace-insulation-covers-lahore",
//     image: "https://mshahrukhengineeringworks.com/media/services/hero/heat-exchanger_Insulation.webp",
//   },
//   {
//     title: "Turbine Insulation Systems",
//     subtitle:
//       "High-performance insulation jackets for turbines.",
//     slug: "turbine-compressor-insulation",
//     image: "https://mshahrukhengineeringworks.com/media/services/hero/turbine_insulation_1_8ThSB9F.jpeg",
//   },
// ];

// const Applications = () => {
//   return (
//     <section className="py-16 px-6 md:px-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <h2 className="text-3xl font-bold text-center">
//           High-Temperature Insulation Applications
//         </h2>

//         <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto mb-12">
//           Custom removable thermal insulation jackets designed for industrial
//           equipment to reduce heat loss, improve efficiency, and increase safety.
//         </p>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">

//           {applications.map((item, index) => (
//             <Link
//               key={index}
//               href={`/services/${item.slug}`}
//               className="block"
//             >
//               <div className="text-center p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer">

//                 {/* Image (INCREASED SIZE) */}
//                 <div className="flex justify-center mb-4">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     width={120}
//                     height={120}
//                     className="rounded-full object-cover border"
//                   />
//                 </div>

//                 {/* Title */}
//                 <h3 className="font-bold text-sm leading-tight text-gray-900">
//                   {item.title}
//                 </h3>

//                 {/* Subtitle */}
//                 <p className="mt-3 text-xs text-gray-600">
//                   {item.subtitle}
//                 </p>

//               </div>
//             </Link>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Applications;


// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { getImageUrl } from "@/lib/api";
// // import { useGeo } from "@/context/GeoContext";

// // /* =========================================
// //    HELPERS
// // ========================================= */

// // function stripHtml(html) {
// //   if (!html) return "";
// //   return html.replace(/<[^>]+>/g, " ");
// // }

// // function safeText(v, fallback) {
// //   const t = typeof v === "string" ? v.trim() : "";
// //   return t ? t : fallback;
// // }

// // /* =========================================
// //    FETCH PRODUCTS
// // ========================================= */

// // async function fetchProducts() {
// //   const base = process.env.NEXT_PUBLIC_API_URL;

// //   if (!base) return [];

// //   try {
// //     const res = await fetch(`${base}/products/`, {
// //       headers: {
// //         Accept: "application/json",
// //       },
// //       next: { revalidate: 3600 },
// //     });

// //     if (!res.ok) return [];

// //     const data = await res.json();
// //     return Array.isArray(data) ? data : [];
// //   } catch {
// //     return [];
// //   }
// // }

// // /* =========================================
// //    MAIN COMPONENT
// // ========================================= */

// // const Applications = () => {
// //   const { country, city, isGeo } = useGeo();

// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     let alive = true;

// //     async function load() {
// //       setLoading(true);

// //       const data = await fetchProducts();

// //       if (!alive) return;

// //       setProducts(data.slice(0, 12)); // 12 cards
// //       setLoading(false);
// //     }

// //     load();

// //     return () => {
// //       alive = false;
// //     };
// //   }, []);

// //   return (
// //     <section className="py-16 px-6 md:px-16">
// //       <div className="max-w-7xl mx-auto">

// //         {/* Heading */}
// //         <h2 className="text-3xl font-bold text-center mb-12">
// //           High-Temperature Insulation Applications
// //         </h2>

// //         {/* Loading */}
// //         {loading ? (
// //           <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
// //             {Array.from({ length: 10 }).map((_, i) => (
// //               <div
// //                 key={i}
// //                 className="h-56 rounded-xl bg-gray-100 animate-pulse"
// //               />
// //             ))}
// //           </div>
// //         ) : products.length === 0 ? (
// //           <p className="text-center text-gray-500">
// //             No products available.
// //           </p>
// //         ) : (

// //           /* 5 Cards Row */
// //           <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
// //             {products.map((item, index) => {
// //               const title = safeText(
// //                 item?.name,
// //                 "Industrial Insulation Jacket"
// //               );

// //               const subtitle = safeText(
// //                 stripHtml(item?.description),
// //                 "High temperature removable insulation solution."
// //               );

// //               const image =
// //                 getImageUrl(item?.hero_image || item?.image) ||
// //                 "/placeholder-product.jpg";

// //               const slug = item?.slug || "";

// //               const href =
// //                 isGeo && country
// //                   ? city
// //                     ? `/removable-insulation-jackets/${country.slug}/${city.name}/products/${slug}`
// //                     : `/removable-insulation-jackets/${country.slug}/products/${slug}`
// //                   : `/products/${slug}`;

// //               return (
// //                 <Link
// //                   key={index}
// //                   href={href}
// //                   className="text-center p-4 rounded-xl border border-gray-200 hover:shadow-lg transition block"
// //                 >
// //                   {/* Circle Image */}
// //                   <div className="flex justify-center mb-3">
// //                     <div className="relative w-20 h-20 rounded-full overflow-hidden border">
// //                       <Image
// //                         src={image}
// //                         alt={title}
// //                         fill
// //                         className="object-cover"
// //                       />
// //                     </div>
// //                   </div>

// //                   {/* Title */}
// //                   <h3 className="font-bold text-sm leading-tight">
// //                     {title}
// //                   </h3>

// //                   {/* Subtitle */}
// //                   <p className="mt-2 text-xs text-gray-600 line-clamp-3">
// //                     {subtitle}
// //                   </p>
// //                 </Link>
// //               );
// //             })}
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Applications;


import React from "react";
import Link from "next/link";
import Image from "next/image";

const applications = [
  {
    title: "Exhaust Insulation Jackets",
    subtitle:
      "High-temperature insulation for exhaust systems, turbochargers, and silencers.",
    slug: "manifoldr-exhaust-system-insulation-cover-jackets",
    image:
      "https://mshahrukhengineeringworks.com/media/services/hero/WhatsApp_Image_2025-10-03_at_3.59.41_PM.jpeg",
  },
  {
    title: "Valve Insulation Jackets",
    subtitle:
      "Thermal protection for valves in steam and hot oil systems.",
    slug: "valves-insulation-covers-jacket-karachi-pakistan",
    image:
      "https://mshahrukhengineeringworks.com/media/services/hero/valve-cover.webp",
  },
  {
    title: "Extruder Insulation Covers",
    subtitle: "Removable insulation for heater and modular joints.",
    slug: "plastic-extruder-molding-machines-insulation-pak",
    image:
      "https://mshahrukhengineeringworks.com/media/services/hero/whatsapp-image-2024-05-22-at-15334-pm-68da54dd9f7d0.webp",
  },
  {
    title: "Boiler & Steam Insulation",
    subtitle: "Insulation for boilers, steam lines, and pressure systems.",
    slug: "boiler-furnace-insulation-covers-lahore",
    image:
      "https://mshahrukhengineeringworks.com/media/services/hero/heat-exchanger_Insulation.webp",
  },
  {
    title: "Turbine Insulation Systems",
    subtitle: "High-performance insulation jackets for turbines.",
    slug: "turbine-compressor-insulation",
    image:
      "https://mshahrukhengineeringworks.com/media/services/hero/turbine_insulation_1_8ThSB9F.jpeg",
  },
];

const Applications = () => {
  return (
    <section className="section bg-primary">
      <div className="container">

        {/* Heading (GLOBAL h2 gradient automatically applied) */}
        <h2 className="text-center w-full">
          High-Temperature Insulation Applications
        </h2>

        <p className="text-center max-w-2xl mx-auto mt-4 mb-14 text-secondary">
          Custom removable thermal insulation jackets designed for industrial
          equipment to reduce heat loss, improve efficiency, and increase safety.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">

          {applications.map((item, index) => (
            <Link
              key={index}
              href={`/services/${item.slug}`}
              className="glass-card p-6 text-center group"
            >
              {/* Image */}
              <div className="flex justify-center mb-5">
                <div className="w-28 h-28 rounded-full overflow-hidden border border-white/10 shadow-md group-hover:scale-105 transition">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-primary group-hover:text-accent transition">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="mt-3 text-xs text-muted leading-relaxed">
                {item.subtitle}
              </p>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Applications;
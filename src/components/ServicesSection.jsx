// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useGeo } from "@/context/GeoContext";
// import { getImageUrl } from "@/lib/api";
 
// /* =====================================================
//    STRIP HTML
// ===================================================== */
// function stripHtml(html) {
//   if (!html) return "";
//   return html.replace(/<[^>]+>/g, "");
// }

// /* =====================================================
//    GEO TITLE
// ===================================================== */
// function getGeoTitle(city, country) {
//   const place = city?.display || country?.name || "Your Region";
//   return `Industrial Insulation Services in ${place} | Energy Saving Jackets`;
// }

// /* =====================================================
//    GEO DESCRIPTION
// ===================================================== */
// function getGeoDesc(city, country) {
//   const place = city?.display || country?.name || "your region";
//   return `Industrial insulation solutions in ${place}. Custom jackets for valves, turbines, pumps & compressors to reduce heat loss and energy cost.`;
// }

// /* =====================================================
//    SKELETON
// ===================================================== */
// function MiniSkeletonRow() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl glass-card">
//       <div className="h-44 md:h-56 bg-gray-200/20 animate-pulse" />
//       <div className="p-5 md:p-8 space-y-3">
//         <div className="h-5 w-2/3 bg-gray-200/20 animate-pulse rounded" />
//         <div className="h-4 w-full bg-gray-200/20 animate-pulse rounded" />
//         <div className="h-4 w-4/5 bg-gray-200/20 animate-pulse rounded" />
//         <div className="h-10 w-32 bg-gray-200/20 animate-pulse rounded-xl mt-4" />
//       </div>
//     </div>
//   );
// }

// /* =====================================================
//    MAIN COMPONENT
// ===================================================== */
// export default function ServicesSection() {
//   const { city, country, isGeo } = useGeo();

//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   /* =====================================================
//      FETCH SERVICES
//   ===================================================== */
//   useEffect(() => {
//     const controller = new AbortController();

//     (async () => {
//       try {
//         setLoading(true);

//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/services/`,
//           {
//             headers: { Accept: "application/json" },
//             signal: controller.signal,
//           }
//         );

//         if (!res.ok) {
//           setServices([]);
//           return;
//         }

//         const data = await res.json();

//         const excluded = new Set([
//           "Metallic Expansion Bellows Manufacturer in Pakistan",
//           "Rubber Expansion Bellows in Pakistan",
//         ]);

//         const filtered = (Array.isArray(data) ? data : [])
//           .filter((s) => s?.show_in_homepage_hero === true)
//           .filter((s) => !excluded.has(s?.name))
//           .slice(0, 2); // Homepage only required items

//         setServices(filtered);
//       } catch (err) {
//         if (err.name !== "AbortError") {
//           console.error("Services fetch error:", err);
//         }
//       } finally {
//         setLoading(false);
//       }
//     })();

//     return () => {
//       controller.abort();
//     };
//   }, []);

//   if (!loading && services.length === 0) return null;

//   /* =====================================================
//      JSON-LD
//   ===================================================== */
//   const structuredData =
//     services.length > 0
//       ? {
//           "@context": "https://schema.org",
//           "@type": "ItemList",
//           itemListElement: services.map((service, idx) => ({
//             "@type": "Service",
//             position: idx + 1,
//             name: service?.name,
//             description: service?.tagline,
//             url: `https://mshahrukhengineeringworks.com/services/${service?.slug}`,
//             image: service?.image ? getImageUrl(service.image) : "",
//           })),
//         }
//       : null;

//   return (
//     <section>
//       {structuredData && (
//         <script
//           id="services-schema"
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(structuredData),
//           }}
//         />
//       )}

//       <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
//         {/* HEADER */}
//         <div className="text-center">
//           <h2 className="text-base md:text-2xl font-bold text-center md:whitespace-nowrap">
//             Industrial Insulation Solutions
//           </h2>

//           <p className="mx-auto mt-3 max-w-3xl text-sm md:text-base text-gray-600">
//             {isGeo
//               ? getGeoDesc(city, country)
//               : "Custom-engineered insulation jackets designed to reduce energy loss and improve safety."}
//           </p>
//         </div>

//         {/* SERVICES */}
//         <div className="mt-10 space-y-6 md:space-y-10 max-w-5xl mx-auto">
//           {loading ? (
//             <>
//               <MiniSkeletonRow />
//               <MiniSkeletonRow />
//             </>
//           ) : (
//             services.map((service) => {
//               const title = service?.name;
//               const desc = stripHtml(service?.tagline || "");

//               const imgSrc = service?.image
//                 ? getImageUrl(service.image)
//                 : "/placeholder.jpg";

//               return (
//                 <div
//                   key={service.slug}
//                   className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl glass-card"
//                 >
//                   {/* IMAGE */}
//                   <div className="relative h-full min-h-[180px] md:min-h-[220px]">
//                     <Image
//                       src={imgSrc}
//                       alt={title}
//                       fill
//                       sizes="(max-width: 768px) 100vw, 50vw"
//                       className="object-cover"
//                       loading="lazy"
//                       quality={75}
//                     />
//                   </div>

//                   {/* CONTENT */}
//                   <div className="p-5 md:p-8 text-left">
//                     <h3 className="text-lg md:text-2xl font-bold">
//                       {title}
//                     </h3>

//                     <p className="mt-2 text-sm text-gray-600 line-clamp-3">
//                       {desc}
//                     </p>

//                     <div className="mt-5">
//                       <Link
//                         href={`/services/${service.slug}`}
//                         className="btn-primary"
//                       >
//                         Learn More →
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-12">
//           <Link href="/services" className="btn-primary">
//             View All Services
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useGeo } from "@/context/GeoContext";
import { getImageUrl } from "@/lib/api";

/* =====================================================
   STRIP HTML
===================================================== */
function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "");
}

/* =====================================================
   GEO CONTENT ENGINE
===================================================== */
function getGeoServicesContent(city, country) {
  const place = city?.display || country?.name || "your region";

  return {
    title: `Industrial Insulation Solutions in ${place}`,
    description: `Custom-engineered insulation jackets in ${place} designed to reduce heat loss, improve safety, and optimize industrial energy efficiency.`,
    cta: `View Industrial Solutions in ${place}`,
  };
}

/* =====================================================
   SKELETON
===================================================== */
function MiniSkeletonRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl glass-card">
      <div className="h-44 md:h-56 bg-gray-200/20 animate-pulse" />
      <div className="p-5 md:p-8 space-y-3">
        <div className="h-5 w-2/3 bg-gray-200/20 animate-pulse rounded" />
        <div className="h-4 w-full bg-gray-200/20 animate-pulse rounded" />
        <div className="h-4 w-4/5 bg-gray-200/20 animate-pulse rounded" />
        <div className="h-10 w-32 bg-gray-200/20 animate-pulse rounded-xl mt-4" />
      </div>
    </div>
  );
}

/* =====================================================
   MAIN COMPONENT
===================================================== */
export default function ServicesSection() {
  const { city, country, isGeo } = useGeo();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const geoContent = isGeo
    ? getGeoServicesContent(city, country)
    : null;

  /* =====================================================
     FETCH SERVICES
  ===================================================== */
  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/services/`,
          {
            headers: { Accept: "application/json" },
            signal: controller.signal,
          }
        );

        if (!res.ok) {
          setServices([]);
          return;
        }

        const data = await res.json();

        const excluded = new Set([
          "Metallic Expansion Bellows Manufacturer in Pakistan",
          "Rubber Expansion Bellows in Pakistan",
        ]);

        const filtered = (Array.isArray(data) ? data : [])
          .filter((s) => s?.show_in_homepage_hero === true)
          .filter((s) => !excluded.has(s?.name))
          .slice(0, 2);

        setServices(filtered);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Services fetch error:", err);
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, []);

  if (!loading && services.length === 0) return null;

  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-base md:text-2xl font-bold">
            {geoContent?.title || "Industrial Insulation Solutions"}
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm md:text-base text-gray-600">
            {geoContent?.description ||
              "Custom-engineered insulation jackets designed to reduce energy loss and improve safety."}
          </p>
        </div>

        {/* SERVICES */}
        <div className="mt-10 space-y-6 md:space-y-10 max-w-5xl mx-auto">
          {loading ? (
            <>
              <MiniSkeletonRow />
              <MiniSkeletonRow />
            </>
          ) : (
            services.map((service) => {
              const title = service?.name;
              const desc = stripHtml(service?.tagline || "");

              const imgSrc = service?.image
                ? getImageUrl(service.image)
                : "/placeholder.jpg";

              return (
                <div
                  key={service.slug}
                  className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl glass-card"
                >
                  {/* IMAGE */}
                  <div className="relative h-full min-h-[180px] md:min-h-[220px]">
                    <Image
                      src={imgSrc}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                      quality={75}
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 md:p-8 text-left">
                    <h3 className="text-lg md:text-2xl font-bold">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                      {desc}
                    </p>

                    <div className="mt-5">
                      <Link
                        href={`/services/${service.slug}`}
                        className="btn-primary"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            {geoContent?.cta || "View All Services"}
          </Link>
        </div>

      </div>
    </section>
  );
}
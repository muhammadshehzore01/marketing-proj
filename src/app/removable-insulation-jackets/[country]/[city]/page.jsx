// import Link from "next/link";
// import { notFound } from "next/navigation";
// import Script from "next/script";

// import { ACTIVE_LOCATIONS as locations } from "@/lib/data/locations";
// import { europeSeoEngine } from "@/lib/seo/engine/europeSeoEngine";
// import { breadcrumbSchema } from "@/lib/seo/schema/structuredData";

// /* ================= UI ================= */
// import HeroSlider from "@/components/HeroSlider";
// import ServicesSection from "@/components/ServicesSection";
// import ProductsSection from "@/components/Products";
// import AboutMSEW from "@/components/AboutMSEW";
// import HomePageContact from "@/components/HomePageContact";
// import PartnersSection from "@/components/PartnersSection";

// /* ================= SEO ================= */
// import SeoSection from "@/components/seo/SeoSection";
// import SeoCard from "@/components/seo/SeoCard";
// import SeoGrid from "@/components/seo/SeoGrid";
// import SeoFAQ from "@/components/seo/SeoFAQ";
// import SeoBadge from "@/components/seo/SeoBadge";
// import SeoTitle from "@/components/seo/SeoTitle";

// /* ================= CUSTOM ================= */
// import Intro from "@/components/Intro";

// export const dynamic = "force-static";

// /* =====================================================
//    🔥 METADATA
// ===================================================== */
// export async function generateMetadata({ params }) {
//   const country = locations?.[params.country];
//   if (!country) return {};

//   const city = country.cities?.find((c) => c.name === params.city);
//   if (!city) return {};

//   const meta = europeSeoEngine.metaCity(city, country);

//   const canonical =
//     `https://mshahrukhengineeringworks.com/removable-insulation-jackets/${country.slug}/${city.name}`;

//   return {
//     title: meta.title,
//     description: meta.description,
//     alternates: { canonical },
//   };
// }

// /* =====================================================
//    🚀 CITY PAGE
// ===================================================== */
// export default function CityPage({ params }) {
//   const country = locations?.[params.country];
//   if (!country) return notFound();

//   const city = country.cities?.find((c) => c.name === params.city);
//   if (!city) return notFound();

//   const data = europeSeoEngine.generateCity(
//     params.country,
//     params.city
//   );

//   if (!data) return notFound();

//   /* ================= SAFE NORMALIZATION ================= */
//   const benefits = Array.isArray(data.benefits)
//     ? data.benefits
//     : [];

//   const technical = data.technical || {
//     title: "Technical Requirements",
//     content: [],
//   };

//   const overviewContent = Array.isArray(data.overview?.content)
//     ? data.overview.content
//     : [data.overview?.content || ""];

//   /* ================= SCHEMA ================= */
//   const schema = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     name: data.title,
//     url: `https://mshahrukhengineeringworks.com/removable-insulation-jackets/${country.slug}/${city.name}`,
//     breadcrumb: breadcrumbSchema({ country, city }),
//     mainEntity: data.faq?.map((f) => ({
//       "@type": "Question",
//       name: f.question,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: f.answer,
//       },
//     })),
//   };

//   return (
//     <main className="pb-20">

//       {/* ================= SCHEMA ================= */}
//       <Script
//         id="city-schema"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(schema),
//         }}
//       />

//       {/* ================= HERO ================= */}
//       <HeroSlider seoData={data.hero} />

//       {/* ================= BADGE ================= */}
//       <div className="container mt-6">
//         <SeoBadge>
//           {city.display} Industrial Ecosystem
//         </SeoBadge>
//       </div>

//       {/* ================= INTRO ================= */}
//       <Intro
//         title={data.overview?.title || ""}
//         content={overviewContent.join(" ")}
//         image={`/img/cities/${city.name}.jpg`}
//       />

//       {/* ================= INFRA ================= */}
//       <SeoSection>
//         <SeoTitle>
//           Industrial Infrastructure in {city.display}
//         </SeoTitle>

//         <SeoCard>
//           {city.display} plays a key role in {country.name}'s
//           industrial ecosystem with strong focus on efficiency
//           and thermal optimization systems.
//         </SeoCard>
//       </SeoSection>

//       {/* ================= TECHNICAL ================= */}
//       <SeoSection>
//         <SeoTitle>{technical.title}</SeoTitle>

//         <SeoGrid>
//           {technical.content.map((item, i) => (
//             <SeoCard key={i}>{item}</SeoCard>
//           ))}
//         </SeoGrid>
//       </SeoSection>

//       {/* ================= DEMAND ================= */}
//       <SeoSection>
//         <SeoTitle>Industrial Demand</SeoTitle>
//         <SeoCard>{data.demand}</SeoCard>
//       </SeoSection>

//       {/* ================= USE CASES ================= */}
//       <SeoSection>
//         <SeoTitle>Use Cases</SeoTitle>

//         <SeoGrid>
//           {data.useCases?.map((item, i) => (
//             <SeoCard key={i}>{item}</SeoCard>
//           ))}
//         </SeoGrid>
//       </SeoSection>

//       {/* ================= BENEFITS ================= */}
//       <SeoSection>
//         <SeoTitle>Benefits</SeoTitle>

//         <SeoGrid>
//           {benefits.map((item, i) => (
//             <SeoCard key={i}>{item}</SeoCard>
//           ))}
//         </SeoGrid>
//       </SeoSection>

//       {/* ================= COMPLIANCE ================= */}
//       <SeoSection>
//         <SeoTitle>Compliance</SeoTitle>
//         <SeoCard>{data.compliance}</SeoCard>
//       </SeoSection>
 
//       {/* ================= EXPORT ================= */}
//       <SeoSection>
//         <SeoTitle>Export</SeoTitle>
//         <SeoCard>{data.export}</SeoCard>
//       </SeoSection>

//       {/* ================= FAQ ================= */}
//       <SeoSection>
//         <SeoTitle>FAQ</SeoTitle>
//         <SeoFAQ data={data.faq || []} />
//       </SeoSection>

//     </main>
//   );
// }
// "use client";

// import Image from "next/image";
// import Link from "next/link";

// const exportCountries = [
//   { name: "UAE", flag: "/img/flags/uae.webp", href: "/export/uae" },
//   { name: "Saudi Arabia", flag: "/img/flags/saudi-arabia.webp", href: "/export/saudi-arabia" },
//   { name: "Qatar", flag: "/img/flags/qatar.webp", href: "/export/qatar" },
//   { name: "Oman", flag: "/img/flags/oman.webp", href: "/export/oman" },
//   { name: "Germany", flag: "/img/flags/germany.webp", href: "/export/germany" },
//   { name: "UK", flag: "/img/flags/uk.webp", href: "/export/uk" },
//   { name: "USA", flag: "/img/flags/usa.webp", href: "/export/usa" },
// ];

// export default function ExportCountries() {
//   return (
//     <section className="section bg-primary overflow-hidden">
//       <div className="container">
//         <div
//           style={{
//             maxWidth: "52rem",
//             margin: "0 auto 3.5rem",
//             textAlign: "center",
//           }}
//         >
//           <p
//             style={{
//               color: "var(--accent)",
//               fontWeight: 800,
//               marginBottom: "0.75rem",
//             }}
//           >
//             Global Export Markets
//           </p>

//           <h2>Countries We Export To</h2>

//           <p>
//             We manufacture and export removable insulation jackets, thermal
//             covers, and heat shields for industrial equipment worldwide.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8">
//           {exportCountries.map((country, index) => (
//             <Link
//               key={country.name}
//               href={country.href}
//               style={{
//                 textAlign: "center",
//                 textDecoration: "none",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <div
//                 style={{
//                   display: "inline-block",
//                   animation: `waveFlag 3s ease-in-out infinite`,
//                   animationDelay: `${index * 0.18}s`,
//                   transformOrigin: "left center",
//                   transition: "transform 0.35s ease",
//                 }}
//               >
//                 <Image
//                   src={country.flag}
//                   alt={`${country.name} flag`}
//                   width={110}
//                   height={110}
//                   style={{
//                     borderRadius: "50%",
//                     objectFit: "cover",
//                     boxShadow: "var(--shadow-md)",
//                     border: "2px solid var(--border)",
//                   }}
//                 />
//               </div>

//               <h3
//                 style={{
//                   fontSize: "1rem",
//                   marginTop: "1rem",
//                   marginBottom: 0,
//                 }}
//               >
//                 {country.name}
//               </h3>
//             </Link>
//           ))}
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes waveFlag {
//           0% {
//             transform: perspective(420px) rotateY(0deg);
//           }
//           25% {
//             transform: perspective(420px) rotateY(-10deg);
//           }
//           50% {
//             transform: perspective(420px) rotateY(10deg);
//           }
//           75% {
//             transform: perspective(420px) rotateY(-6deg);
//           }
//           100% {
//             transform: perspective(420px) rotateY(0deg);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import Link from "next/link";

const defaultExportCountries = [
  { name: "UAE", flag: "/img/flags/uae.webp", href: "/export/uae" },
  { name: "Saudi Arabia", flag: "/img/flags/saudi-arabia.webp", href: "/export/saudi-arabia" },
  { name: "Qatar", flag: "/img/flags/qatar.webp", href: "/export/qatar" },
  { name: "Oman", flag: "/img/flags/oman.webp", href: "/export/oman" },
  { name: "Germany", flag: "/img/flags/germany.webp", href: "/export/germany" },
  { name: "UK", flag: "/img/flags/uk.webp", href: "/export/uk" },
  { name: "USA", flag: "/img/flags/usa.webp", href: "/export/usa" },
];

export default function ExportCountries({
  label = "Global Export Markets",
  title = "Countries We Export To",
  description = "We manufacture and export removable insulation jackets, thermal covers, and heat shields for industrial equipment worldwide.",
  seoContent = null,
}) {
  const finalLabel = seoContent?.label || label;
  const finalTitle = seoContent?.title || title;
  const finalDescription = seoContent?.description || description;

  const countries =
    seoContent?.featuredCountries?.length > 0
      ? seoContent.featuredCountries
      : defaultExportCountries;

  return (
    <section className="section bg-primary overflow-hidden">
      <div className="container">
        <div
          style={{
            maxWidth: "52rem",
            margin: "0 auto 3.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "var(--accent)",
              fontWeight: 800,
              marginBottom: "0.75rem",
            }}
          >
            {finalLabel}
          </p>

          <h2>{finalTitle}</h2>

          <p>{finalDescription}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8">
          {countries.map((country, index) => (
            <Link
              key={country.name}
              href={country.href}
              style={{
                textAlign: "center",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  animation: `waveFlag 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.18}s`,
                  transformOrigin: "left center",
                  transition: "transform 0.35s ease",
                }}
              >
                <Image
                  src={country.flag}
                  alt={`${country.name} flag`}
                  width={110}
                  height={110}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    boxShadow: "var(--shadow-md)",
                    border: "2px solid var(--border)",
                  }}
                />
              </div>

              <h3
                style={{
                  fontSize: "1rem",
                  marginTop: "1rem",
                  marginBottom: 0,
                }}
              >
                {country.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes waveFlag {
          0% {
            transform: perspective(420px) rotateY(0deg);
          }
          25% {
            transform: perspective(420px) rotateY(-10deg);
          }
          50% {
            transform: perspective(420px) rotateY(10deg);
          }
          75% {
            transform: perspective(420px) rotateY(-6deg);
          }
          100% {
            transform: perspective(420px) rotateY(0deg);
          }
        }
      `}</style>
    </section>
  );
}
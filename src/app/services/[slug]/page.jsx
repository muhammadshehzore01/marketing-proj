// // app/services/[slug]/page.jsx
// import Script from "next/script";
// import { notFound } from "next/navigation";
// import ServiceDetailClient from "./ServiceDetailClient";
// import { ACTIVE_LOCATIONS } from "@/lib/data/locations";
// import { buildGeoServiceSeo } from "@/lib/seo/engine/shared/serviceGeoEngine";

// export const dynamic = "force-dynamic";

// const SITE_URL = "https://www.mshahrukhengineeringworks.com";

// async function getService(slug) {
//   if (!slug) return null;

//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/services/${slug}/`,
//       { cache: "no-store" }
//     );

//     if (!res.ok) return null;
//     return res.json();
//   } catch (error) {
//     console.error("Service fetch error:", error);
//     return null;
//   }
// }

// function cleanText(value, fallback = "") {
//   if (typeof value !== "string") return fallback;
//   return value.replace(/\s+/g, " ").trim() || fallback;
// }

// function getServiceImage(service) {
//   return (
//     service?.image_url ||
//     service?.hero_image_url ||
//     service?.image?.url ||
//     service?.hero_image?.url ||
//     `${SITE_URL}/og-service.jpg`
//   );
// }

// export async function generateMetadata({ params }) {
//   const slug = params?.slug;
//   const service = await getService(slug);

//   const fallbackTitle =
//     "Industrial Service | MSEW - Thermal Insulation & Expansion Solutions";
//   const fallbackDesc =
//     "Industrial thermal insulation and expansion solutions in Pakistan and export projects. Contact MSEW for quotation and technical support.";

//   if (!service) {
//     return {
//       title: fallbackTitle,
//       description: fallbackDesc,
//       robots: { index: false, follow: true },
//     };
//   }

//   const name = service?.name || service?.title || "Industrial Service";

//   const tagline = cleanText(
//     service?.tagline ||
//       service?.short_description ||
//       service?.meta_description ||
//       service?.description,
//     fallbackDesc
//   );

//   const title = `${name} | Manufacturer & Supplier in Pakistan | MSEW`;
//   const description = tagline.slice(0, 160) || fallbackDesc;
//   const canonical = `${SITE_URL}/services/${slug}`;
//   const ogImage = getServiceImage(service);

//   return {
//     title,
//     description,
//     alternates: {
//       canonical,
//     },
//     openGraph: {
//       title,
//       description,
//       url: canonical,
//       type: "article",
//       images: [
//         {
//           url: ogImage,
//           width: 1200,
//           height: 630,
//           alt: name,
//         },
//       ],
//     },
//     robots: {
//       index: true,
//       follow: true,
//     },
//   };
// }

// export default async function ServiceDetailPage({ params }) {
//   const slug = params?.slug;
//   const service = await getService(slug);

//   if (!service) return notFound();

//   const name = service?.name || service?.title || "Service";

//   const desc = cleanText(
//     service?.tagline ||
//       service?.short_description ||
//       service?.meta_description ||
//       service?.description,
//     "Industrial thermal insulation and expansion solutions."
//   );

//   const canonical = `${SITE_URL}/services/${slug}`;
//   const image = getServiceImage(service);

//   const serviceSchema = {
//     "@context": "https://schema.org",
//     "@type": "Service",
//     name,
//     description: desc,
//     provider: {
//       "@type": "Organization",
//       name: "M. Shahrukh Engineering Works (MSEW)",
//       url: SITE_URL,
//       telephone: "+92 305 2646312",
//       address: {
//         "@type": "PostalAddress",
//         streetAddress:
//           "Building 55-C, Shop # 01, 15 commercial street, DHA Phase 2 Ext.",
//         addressLocality: "Karachi",
//         addressRegion: "Sindh",
//         addressCountry: "PK",
//       },
//     },
//     areaServed: [
//       {
//         "@type": "Country",
//         name: "Pakistan",
//       },
//       {
//         "@type": "Country",
//         name: "Worldwide",
//       },
//     ],
//     serviceType: name,
//     url: canonical,
//     image,
//   };

//   const breadcrumbSchema = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         name: "Home",
//         item: `${SITE_URL}/`,
//       },
//       {
//         "@type": "ListItem",
//         position: 2,
//         name: "Services",
//         item: `${SITE_URL}/services`,
//       },
//       {
//         "@type": "ListItem",
//         position: 3,
//         name,
//         item: canonical,
//       },
//     ],
//   };

//   return (
//     <>
//       <Script
//         id="msew-service-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(serviceSchema),
//         }}
//       />

//       <Script
//         id="msew-breadcrumbs-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(breadcrumbSchema),
//         }}
//       />

//       <ServiceDetailClient service={service} />
//     </>
//   );
// }




// app/services/[slug]/page.jsx
import Script from "next/script";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import { ACTIVE_LOCATIONS } from "@/lib/data/locations";
import { buildGeoServiceSeo } from "@/lib/seo/engine/shared/serviceGeoEngine";

export const dynamic = "force-dynamic";

const SITE_URL = "https://mshahrukhengineeringworks.com";

async function getService(slug) {
  if (!slug) return null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/services/${slug}/`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Service fetch error:", error);
    return null;
  }
}

function cleanText(value, fallback = "") {
  if (typeof value !== "string") return fallback;
  return value.replace(/\s+/g, " ").trim() || fallback;
}

function getServiceImage(service) {
  return (
    service?.image_url ||
    service?.hero_image_url ||
    service?.image?.url ||
    service?.hero_image?.url ||
    `${SITE_URL}/og-service.jpg`
  );
}

function detectGeo(slug) {
  if (!slug) return { country: null, city: null };

  let foundCountry = null;
  let foundCity = null;

  for (const country of Object.values(ACTIVE_LOCATIONS)) {
    if (slug.includes(country.slug)) {
      foundCountry = country;

      const city = country.cities?.find((c) =>
        slug.includes(
          String(c.name)
            .toLowerCase()
            .replace(/\s+/g, "-")
        )
      );

      if (city) foundCity = city;
      break;
    }
  }

  return {
    country: foundCountry,
    city: foundCity,
  };
}

export async function generateMetadata({ params }) {
  const slug = params?.slug;
  const service = await getService(slug);

  const fallbackTitle =
    "Industrial Service | MSEW - Thermal Insulation & Expansion Solutions";
  const fallbackDesc =
    "Industrial thermal insulation and expansion solutions in Pakistan and export projects. Contact MSEW for quotation and technical support.";

  if (!service) {
    return {
      title: fallbackTitle,
      description: fallbackDesc,
      robots: { index: false, follow: true },
    };
  }

  const name = service?.name || service?.title || "Industrial Service";

  const tagline = cleanText(
    service?.tagline ||
      service?.short_description ||
      service?.meta_description ||
      service?.description,
    fallbackDesc
  );

  const title = `${name} | Manufacturer & Supplier in Pakistan | MSEW`;
  const description = tagline.slice(0, 160) || fallbackDesc;
  const canonical = `${SITE_URL}/services/${slug}`;
  const ogImage = getServiceImage(service);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: name,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const slug = params?.slug;
  const service = await getService(slug);

  if (!service) return notFound();

  const name = service?.name || service?.title || "Service";

  const desc = cleanText(
    service?.tagline ||
      service?.short_description ||
      service?.meta_description ||
      service?.description,
    "Industrial thermal insulation and expansion solutions."
  );

  const canonical = `${SITE_URL}/services/${slug}`;
  const image = getServiceImage(service);

  const { country, city } = detectGeo(slug);
  const isGeoPage = Boolean(country || city);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description: desc,
    provider: {
      "@type": "Organization",
      name: "M. Shahrukh Engineering Works (MSEW)",
      url: SITE_URL,
      telephone: "+92 305 2646312",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Building 55-C, Shop # 01, 15 commercial street, DHA Phase 2 Ext.",
        addressLocality: "Karachi",
        addressRegion: "Sindh",
        addressCountry: "PK",
      },
    },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "Worldwide" },
    ],
    serviceType: name,
    url: canonical,
    image,
  };

  const geoSeo = isGeoPage
    ? buildGeoServiceSeo(city, country, city ? "city" : "country")
    : null;

  const geoSchema = isGeoPage
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description: geoSeo?.description || desc,
        url: canonical,
        areaServed: country
          ? { "@type": "Country", name: country.name }
          : undefined,
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name,
        item: canonical,
      },
    ],
  };

  return (
    <>
      <Script
        id="msew-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {geoSchema && (
        <Script
          id="msew-geo-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(geoSchema),
          }}
        />
      )}

      <Script
        id="msew-breadcrumbs-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <ServiceDetailClient
        service={service}
        country={country || null}
        city={city || null}
      />
    </>
  );
}
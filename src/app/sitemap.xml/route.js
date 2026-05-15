// // /home/shahrukh-eng/marketing-proj/src/app/sitemap.xml/route.js
// import { NextResponse } from "next/server";
// import { ACTIVE_LOCATIONS as locations } from "@/lib/data/locations";

// export const runtime = "nodejs";

// const BASE_URL = "https://mshahrukhengineeringworks.com";

// /* =====================================================
//    🔥 XML ESCAPER (SEO SAFE)
// ===================================================== */
// function escapeXml(str) {
//   return String(str)
//     .replaceAll("&", "&amp;")
//     .replaceAll("<", "&lt;")
//     .replaceAll(">", "&gt;")
//     .replaceAll('"', "&quot;")
//     .replaceAll("'", "&apos;");
// }

// /* =====================================================
//    🔥 SAFE DATE HANDLER
// ===================================================== */
// function toISO(dateLike) {
//   try {
//     const d = dateLike ? new Date(dateLike) : new Date();
//     if (Number.isNaN(d.getTime())) return new Date().toISOString();
//     return d.toISOString();
//   } catch {
//     return new Date().toISOString();
//   }
// }

// /* =====================================================
//    🔥 SLUGIFY (URL SAFE)
// ===================================================== */
// function slugify(str) {
//   return String(str)
//     .toLowerCase()
//     .trim()
//     .replace(/\s+/g, "-")
//     .replace(/[^\w\-]+/g, "")
//     .replace(/\-\-+/g, "-");
// }

// /* =====================================================
//    🔥 NORMALIZER (API SAFE)
// ===================================================== */
// const normalize = (x) => {
//   if (Array.isArray(x)) return x;
//   if (x?.results) return x.results;
//   if (x?.data) return x.data;
//   return [];
// };

// /* =====================================================
//    🔥 URL ENTRY BUILDER
// ===================================================== */
// function urlEntry({ loc, lastmod, changefreq, priority }) {
//   return `
//   <url>
//     <loc>${escapeXml(loc)}</loc>
//     ${lastmod ? `<lastmod>${escapeXml(lastmod)}</lastmod>` : ""}
//     ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ""}
//     ${priority ? `<priority>${priority}</priority>` : ""}
//   </url>`;
// }

// /* =====================================================
//    🔥 SAFE FETCH (CMS READY)
// ===================================================== */
// async function safeFetch(url) {
//   try {
//     const res = await fetch(url, { cache: "no-store" });
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     return await res.json();
//   } catch (err) {
//     console.error("Sitemap fetch error:", url, err);
//     return {};
//   }
// }

// /* =====================================================
//    🚀 MAIN SITEMAP GENERATOR
// ===================================================== */
// export async function GET() {
//   const urls = [];

//   /* =====================================================
//      🔹 STATIC PAGES
//   ===================================================== */
//   urls.push(
//     { loc: `${BASE_URL}/`, changefreq: "weekly", priority: "1.0" },
//     { loc: `${BASE_URL}/products`, changefreq: "weekly", priority: "0.9" },
//     { loc: `${BASE_URL}/services`, changefreq: "weekly", priority: "0.9" },
//     { loc: `${BASE_URL}/blogs`, changefreq: "weekly", priority: "0.8" },
//     { loc: `${BASE_URL}/about`, changefreq: "yearly", priority: "0.6" },
//     { loc: `${BASE_URL}/contact`, changefreq: "yearly", priority: "0.6" }
//   );

//   /* =====================================================
//      🔹 CMS CONTENT (SAFE DYNAMIC)
//   ===================================================== */
//   const [servicesRes, productsRes, blogsRes] = await Promise.all([
//     safeFetch(`${BASE_URL}/api/services/`),
//     safeFetch(`${BASE_URL}/api/products/`),
//     safeFetch(`${BASE_URL}/api/blogs/`),
//   ]);

//   const services = normalize(servicesRes);
//   const products = normalize(productsRes);
//   const blogs = normalize(blogsRes);

//   /* =====================================================
//      🔹 SERVICES
//   ===================================================== */
//   for (const item of services) {
//     if (!item?.slug) continue;

//     urls.push({
//       loc: `${BASE_URL}/services/${item.slug}`,
//       lastmod: toISO(item.updated_at || item.created_at),
//       changefreq: "monthly",
//       priority: "0.8",
//     });
//   }

//   /* =====================================================
//      🔹 PRODUCTS
//   ===================================================== */
//   for (const item of products) {
//     if (!item?.slug) continue;

//     urls.push({
//       loc: `${BASE_URL}/products/${item.slug}`,
//       lastmod: toISO(item.updated_at || item.created_at),
//       changefreq: "monthly",
//       priority: "0.8",
//     });
//   }

//   /* =====================================================
//      🔹 BLOGS
//   ===================================================== */
//   for (const item of blogs) {
//     if (!item?.slug) continue;

//     urls.push({
//       loc: `${BASE_URL}/blogs/${item.slug}`,
//       lastmod: toISO(item.updated_at || item.created_at),
//       changefreq: "monthly",
//       priority: "0.7",
//     });
//   }

//   /* =====================================================
//      🌍 GEO SEO PAGES (COUNTRY + CITY)
//   ===================================================== */
//   for (const countryKey of Object.keys(locations)) {
//     const country = locations[countryKey];
//     if (!country?.slug) continue;

//     /* -------------------------
//        COUNTRY PAGE
//     -------------------------- */
//     urls.push({
//       loc: `${BASE_URL}/removable-insulation-jackets/${country.slug}`,
//       lastmod: toISO(),
//       changefreq: "weekly",
//       priority: "0.95",
//     });

//     /* -------------------------
//        CITY PAGES
//     -------------------------- */
//     for (const city of country.cities || []) {
//       const citySlug = slugify(city.name);

//       urls.push({
//         loc: `${BASE_URL}/removable-insulation-jackets/${country.slug}/${citySlug}`,
//         lastmod: toISO(),
//         changefreq: "weekly",
//         priority: "0.85",
//       });
//     }
//   }

//   /* =====================================================
//      🔥 FINAL XML OUTPUT
//   ===================================================== */
//   const xml = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// ${urls.map(urlEntry).join("\n")}
// </urlset>`;

//   return new NextResponse(xml, {
//     status: 200,
//     headers: {
//       "Content-Type": "application/xml; charset=utf-8",
//       "Cache-Control": "no-store",
//     },
//   });
// }





import { NextResponse } from "next/server";
import { ACTIVE_LOCATIONS as locations } from "@/lib/data/locations";
import { industries } from "@/lib/data/industries";
import { applications } from "@/lib/data/applications";

export const runtime = "nodejs";

const BASE_URL = "https://mshahrukhengineeringworks.com";

function escapeXml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toISO(dateLike) {
  try {
    const d = dateLike ? new Date(dateLike) : new Date();
    if (Number.isNaN(d.getTime())) return new Date().toISOString();
    return d.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

function slugify(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

const normalize = (x) => {
  if (Array.isArray(x)) return x;
  if (x?.results) return x.results;
  if (x?.data) return x.data;
  return [];
};

function urlEntry({ loc, lastmod, changefreq, priority }) {
  return `
  <url>
    <loc>${escapeXml(loc)}</loc>
    ${lastmod ? `<lastmod>${escapeXml(lastmod)}</lastmod>` : ""}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ""}
    ${priority ? `<priority>${priority}</priority>` : ""}
  </url>`;
}

async function safeFetch(url) {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return {};
    return await res.json();
  } catch {
    return {};
  }
}

export async function GET() {
  const urls = [];

  urls.push(
    { loc: `${BASE_URL}/`, changefreq: "weekly", priority: "1.0" },
    { loc: `${BASE_URL}/products`, changefreq: "weekly", priority: "0.9" },
    { loc: `${BASE_URL}/services`, changefreq: "weekly", priority: "0.9" },
    { loc: `${BASE_URL}/applications`, changefreq: "weekly", priority: "0.9" },
    { loc: `${BASE_URL}/industries`, changefreq: "weekly", priority: "0.9" },
    { loc: `${BASE_URL}/blogs`, changefreq: "weekly", priority: "0.8" },
    { loc: `${BASE_URL}/get-quote`, changefreq: "monthly", priority: "0.8" },
    { loc: `${BASE_URL}/about`, changefreq: "yearly", priority: "0.6" },
    { loc: `${BASE_URL}/contact`, changefreq: "yearly", priority: "0.6" }
  );

  for (const item of applications || []) {
    if (!item?.slug) continue;

    urls.push({
      loc: `${BASE_URL}/applications/${item.slug}`,
      lastmod: toISO(),
      changefreq: "monthly",
      priority: "0.85",
    });
  }

  for (const item of industries || []) {
    if (!item?.slug) continue;

    urls.push({
      loc: `${BASE_URL}/industries/${item.slug}`,
      lastmod: toISO(),
      changefreq: "monthly",
      priority: "0.85",
    });
  }

  const [servicesRes, productsRes, blogsRes] = await Promise.all([
    safeFetch(`${BASE_URL}/api/services/`),
    safeFetch(`${BASE_URL}/api/products/`),
    safeFetch(`${BASE_URL}/api/blogs/`),
  ]);

  const services = normalize(servicesRes);
  const products = normalize(productsRes);
  const blogs = normalize(blogsRes);

  for (const item of services) {
    if (!item?.slug) continue;

    urls.push({
      loc: `${BASE_URL}/services/${item.slug}`,
      lastmod: toISO(item.updated_at || item.created_at),
      changefreq: "monthly",
      priority: "0.8",
    });
  }

  for (const item of products) {
    if (!item?.slug) continue;

    urls.push({
      loc: `${BASE_URL}/products/${item.slug}`,
      lastmod: toISO(item.updated_at || item.created_at),
      changefreq: "monthly",
      priority: "0.8",
    });
  }

  for (const item of blogs) {
    if (!item?.slug) continue;

    urls.push({
      loc: `${BASE_URL}/blogs/${item.slug}`,
      lastmod: toISO(item.updated_at || item.created_at),
      changefreq: "monthly",
      priority: "0.7",
    });
  }

  for (const countryKey of Object.keys(locations)) {
    const country = locations[countryKey];
    if (!country?.slug) continue;

    urls.push({
      loc: `${BASE_URL}/removable-insulation-jackets/${country.slug}`,
      lastmod: toISO(),
      changefreq: "weekly",
      priority: "0.95",
    });

    for (const city of country.cities || []) {
      const citySlug = slugify(city.name);

      urls.push({
        loc: `${BASE_URL}/removable-insulation-jackets/${country.slug}/${citySlug}`,
        lastmod: toISO(),
        changefreq: "weekly",
        priority: "0.85",
      });
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(urlEntry).join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
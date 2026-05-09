import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/api";
import ProductsClient from "./ProductsClient";

// ✅ App Router SEO (International targeting)
export const metadata = {
  title:
    "Industrial Insulation Products | Removable Jackets, Covers & Heat Shields | MSEW",
  description:
    "Explore high-temperature removable insulation jackets, valve insulation covers, turbocharger blankets and exhaust insulation systems for industrial equipment. Manufactured by MSEW and supplied worldwide.",
  keywords: [
    "industrial insulation products",
    "removable insulation jackets",
    "removable thermal insulation covers",
    "valve insulation covers",
    "turbocharger blanket",
    "exhaust insulation blanket",
    "heat shields manufacturer",
    "industrial thermal insulation",
    "removable insulation covers",
  ],
  alternates: {
    canonical: "https://mshahrukhengineeringworks.com/products",
  },
  openGraph: {
    title: "Industrial Insulation Products | MSEW",
    description:
      "High-temperature removable insulation jackets, covers & heat shields for generators, turbines, valves & exhaust systems. Manufactured by MSEW and supplied worldwide.",
    url: "https://mshahrukhengineeringworks.com/products",
    siteName: "MSEW",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://mshahrukhengineeringworks.com/img/Insulation-jacket-manufacturer.webp",
        width: 1200,
        height: 630,
        alt: "Industrial Insulation Products by MSEW",
      },
    ],
  },
};

// Helpers
function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function safeText(v, fallback) {
  const t = typeof v === "string" ? v.trim() : "";
  return t ? t : fallback;
}

// ✅ Fetch products from API (fast + cached) — backend untouched
async function getProducts() {
  const base = process.env.NEXT_PUBLIC_API_URL;
  if (!base) return [];

  try {
    const res = await fetch(`${base}/products/`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/json" },
    });

    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  const SITE_URL = "https://mshahrukhengineeringworks.com";
  const OG_IMAGE = `${SITE_URL}/img/Insulation-jacket-manufacturer.webp`;

  // ✅ Schema: Product listing page
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industrial Insulation Products by MSEW",
    description:
      "High-temperature removable insulation jackets, covers and heat shields for industrial equipment.",
    url: `${SITE_URL}/products`,
    itemListElement: (products || []).slice(0, 40).map((product, index) => {
      const name = safeText(product?.name, "Industrial Insulation Product");
      const slug = product?.slug || "";
      const url = `${SITE_URL}/products/${slug}`;
      const image =
        getImageUrl(product?.hero_image) ||
        getImageUrl(product?.image) ||
        OG_IMAGE;

      const description = safeText(
        product?.meta_description ||
          product?.tagline ||
          stripHtml(product?.description),
        "High-temperature removable insulation solution for industrial equipment."
      );

      return {
        "@type": "Product",
        position: index + 1,
        name,
        image,
        description,
        url,
        brand: {
          "@type": "Brand",
          name: "MSEW",
        },
        manufacturer: {
          "@type": "Organization",
          name: "M. Shahrukh Engineering Works",
          url: SITE_URL,
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "PKR",
          url,
          seller: {
            "@type": "Organization",
            name: "M. Shahrukh Engineering Works",
            url: SITE_URL,
          },
        },
      };
    }),
  };

  // ✅ FAQ Schema for product page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What industrial insulation products does MSEW manufacture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MSEW manufactures high-temperature removable insulation jackets, valve insulation covers, exhaust insulation blankets, turbocharger blankets, heat shields and custom thermal insulation covers for industrial equipment.",
        },
      },
      {
        "@type": "Question",
        name: "Are the insulation jackets removable and reusable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, MSEW insulation jackets are removable and reusable, making maintenance easier while helping reduce heat loss and improve worker safety.",
        },
      },
      {
        "@type": "Question",
        name: "Which equipment can be covered with removable insulation jackets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common applications include valves, flanges, pumps, turbines, generators, exhaust systems, turbochargers, compressors and custom industrial machinery.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide custom insulation covers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, MSEW provides custom insulation covers based on equipment size, shape, operating temperature and site requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Do you supply insulation products outside Pakistan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, MSEW supplies industrial insulation products in Pakistan and also supports worldwide export requirements.",
        },
      },
    ],
  };

  const cards = (products || []).map((p, index) => {
    const imageUrl =
      getImageUrl(p?.hero_image) || getImageUrl(p?.image) || OG_IMAGE;

    const desc = safeText(
      p?.meta_description || p?.tagline || stripHtml(p?.description),
      "High-temperature removable insulation solution for industrial equipment."
    );

    const category = safeText(p?.category || p?.type || "", "");

    return {
      key: p?.slug || String(index),
      name: safeText(p?.name, "Product"),
      slug: p?.slug || "",
      desc,
      category,
      imageUrl,
    };
  });

  return (
    <>
      <script
        id="products-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <script
        id="products-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen">
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(0,168,232,0.18), transparent 55%), radial-gradient(ellipse at bottom, rgba(11,95,255,0.14), transparent 55%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,37,64,0.88), rgba(10,37,64,0.70), rgba(10,37,64,0.92))",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 lg:pt-20 pb-10 sm:pb-12">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm"
                  style={{
                    border: "1px solid var(--border)",
                    background: "rgba(255,255,255,0.05)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      background: "var(--accent)",
                      boxShadow: "0 0 12px rgba(0,168,232,0.55)",
                    }}
                  />
                  High-Temperature • Removable • Reusable
                </div>

                <h1 className="mt-5">
                  Industrial Removable Insulation Jackets, Covers & Heat Shields
                </h1>

                <p className="mt-4 max-w-2xl">
                  <strong style={{ color: "var(--text-primary)" }}>
                    M. Shahrukh Engineering Works (MSEW)
                  </strong>{" "}
                  manufactures high-temperature removable insulation solutions
                  for valves, flanges, pumps, turbines, generators, exhaust
                  systems, and custom machinery. Reduce heat loss, improve energy
                  efficiency, and enhance worker safety.
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/contact" className="btn-primary">
                    Request a Quote
                  </Link>

                  <Link href="/contact" className="btn-secondary">
                    Schedule a Site Visit
                  </Link>

                  <Link href="/services" className="btn-secondary">
                    Explore Services
                  </Link>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { t: "Energy Saving", d: "Reduce heat loss & fuel cost." },
                    { t: "Fast Maintenance", d: "Remove/reinstall in minutes." },
                    { t: "Worker Safety", d: "Lower surface temperature." },
                  ].map((b) => (
                    <div key={b.t} className="glass-card p-4 rounded-2xl">
                      <div
                        style={{
                          color: "var(--text-primary)",
                          fontWeight: 700,
                        }}
                      >
                        {b.t}
                      </div>
                      <div
                        style={{ color: "var(--text-secondary)" }}
                        className="text-sm mt-1"
                      >
                        {b.d}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-2xl">
                  <div className="relative aspect-[08/12]">
                    <Image
                      src={OG_IMAGE}
                      alt="Industrial insulation jackets and covers by MSEW"
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.18), transparent)",
                    }}
                  />

                  <div className="absolute bottom-0 p-5">
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Used in power plants, refineries, chemical & manufacturing
                      facilities.
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Pakistan & worldwide export support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mt-10 sm:mt-12"
              style={{ borderTop: "1px solid var(--border)" }}
            />
          </div>
        </section>

        <main style={{ background: "var(--background-primary)" }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <ProductsClient initialProducts={cards} />

            <section className="mt-14 sm:mt-16">
              <div className="glass-card p-6 sm:p-8 rounded-3xl">
                <h2 style={{ color: "var(--text-primary)" }}>
                  Serving Pakistan & Worldwide
                </h2>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <p>
                    📍 Pakistan industrial cities: Karachi, Lahore, Faisalabad,
                    Multan, Hub and more.
                  </p>
                  <p>
                    🌍 Export supply for power plants, refineries, chemical
                    units and manufacturing industries across Middle East, Asia,
                    Africa & Europe.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-10 sm:mt-12">
              <h2 className="text-center" style={{ color: "var(--text-primary)" }}>
                Applications
              </h2>

              <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "Generators, exhaust & turbo systems",
                  "Turbines & compressors",
                  "Valves, flanges & pumps",
                  "Plastic extruder & molding machines",
                  "Power plants, refineries & chemical units",
                  "Custom industrial machinery",
                ].map((t) => (
                  <li key={t} className="glass-card px-4 py-3 rounded-2xl">
                    ⚡ <span style={{ color: "var(--text-secondary)" }}>{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12 sm:mt-14">
              <div
                className="relative overflow-hidden rounded-3xl border p-7 sm:p-10"
                style={{
                  borderColor: "rgba(0,168,232,0.22)",
                  background:
                    "linear-gradient(135deg, rgba(0,168,232,0.10), rgba(11,95,255,0.08), rgba(255,255,255,0.02))",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at top, rgba(0,168,232,0.14), transparent 55%)",
                  }}
                />

                <div className="relative text-center">
                  <h2 style={{ color: "var(--text-primary)" }}>
                    Need a Custom Insulation Solution?
                  </h2>
                  <p className="mt-3 max-w-2xl mx-auto">
                    Share equipment size & temperature range — we’ll recommend
                    the right removable insulation jacket or cover for your
                    application.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                    <Link href="/contact" className="btn-primary">
                      Request a Quote
                    </Link>
                    <Link href="/services" className="btn-secondary">
                      Explore Services
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
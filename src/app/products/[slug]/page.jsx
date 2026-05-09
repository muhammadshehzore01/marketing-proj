// src/app/products/[slug]/page.jsx

import ProductDetailClient from "./ProductDetailClient";
import { getImageUrl } from "@/lib/api";

const SITE_URL = "https://mshahrukhengineeringworks.com";
const PLACEHOLDER_IMAGE = `${SITE_URL}/placeholder.png`;

function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function safeText(value, fallback = "") {
  const text = typeof value === "string" ? value.trim() : "";
  return text || fallback;
}

// Safe fetch for single product
async function getProduct(slug) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  if (!API_URL) throw new Error("NEXT_PUBLIC_API_URL is not defined!");

  const res = await fetch(`${API_URL}/products/${slug}/`, {
    next: { revalidate: 3600 },
    headers: { Accept: "application/json" },
  });

  if (!res.ok) throw new Error(`Failed to fetch product: ${res.status}`);
  return res.json();
}

// Safe fetch for more products
async function getMoreProducts(slug) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  if (!API_URL) return [];

  try {
    const res = await fetch(`${API_URL}/products/`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/json" },
    });

    if (!res.ok) return [];

    const all = await res.json();
    return Array.isArray(all)
      ? all.filter((p) => p.slug !== slug).slice(0, 3)
      : [];
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const product = await getProduct(slug);

    const title = safeText(
      product?.meta_title || product?.name,
      "Industrial Insulation Product | MSEW"
    );

    const description = safeText(
      product?.meta_description ||
        product?.tagline ||
        stripHtml(product?.description),
      "High-temperature removable insulation product manufactured by MSEW for industrial equipment."
    );

    const image =
      getImageUrl(product?.hero_image) ||
      getImageUrl(product?.image) ||
      PLACEHOLDER_IMAGE;

    const canonical = `${SITE_URL}/products/${slug}`;

    return {
      title,
      description,
      alternates: {
        canonical,
      },
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: "MSEW",
        locale: "en_PK",
        type: "website",
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: safeText(product?.name, "Industrial insulation product by MSEW"),
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  } catch {
    return {
      title: "Product Not Found | MSEW",
      description:
        "The requested industrial insulation product could not be found.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;

  let product = null;
  let moreProducts = [];

  try {
    product = await getProduct(slug);
    moreProducts = await getMoreProducts(slug);
  } catch {
    product = null;
  }

  if (!product) {
    return (
      <div className="text-center py-20 text-red-500 text-xl">
        Product not found.
      </div>
    );
  }

  const productName = safeText(product?.name, "Industrial Insulation Product");

  const productDescription = safeText(
    product?.meta_description ||
      product?.description_text ||
      product?.tagline ||
      stripHtml(product?.description),
    "High-temperature removable insulation solution for industrial equipment."
  );

  const productImage =
    getImageUrl(product?.hero_image) ||
    getImageUrl(product?.image) ||
    PLACEHOLDER_IMAGE;

  const productUrl = `${SITE_URL}/products/${product?.slug || slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    image: productImage,
    description: productDescription,
    sku: product?.slug || slug,
    category: safeText(
      product?.category || product?.type,
      "Industrial Thermal Insulation"
    ),
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
      url: productUrl,
      priceCurrency: "PKR",
      availability:
        product?.in_stock === false
          ? "https://schema.org/OutOfStock"
          : "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "M. Shahrukh Engineering Works",
        url: SITE_URL,
      },
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Pakistan",
      },
      {
        "@type": "Place",
        name: "Worldwide",
      },
    ],
  };

  return (
    <>
      <script
        id="product-detail-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ProductDetailClient
        product={{
          ...product,
          hero_image: product.hero_image || "/placeholder.png",
        }}
        moreProducts={moreProducts}
      />
    </>
  );
}
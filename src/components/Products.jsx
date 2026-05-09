"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/api";
import { useGeo } from "@/context/GeoContext";

/* ================= HELPERS ================= */

function safeText(v, fallback) {
  const t = typeof v === "string" ? v.trim() : "";
  return t ? t : fallback;
}

/* ================= GEO ================= */

function getGeoTitle(city, country) {
  const place = city?.display || country?.name;

  return place
    ? `Industrial Insulation Products in ${place}`
    : "Industrial Insulation Products";
}

function getGeoDesc(city, country) {
  const place = city?.display || country?.name;

  return place
    ? `High-quality removable insulation jackets in ${place} for valves turbines pumps and generators`
    : "High-performance removable insulation jackets for industrial valves turbines pumps and generators";
}

/* ================= API ================= */

async function fetchProducts(signal) {
  const base = process.env.NEXT_PUBLIC_API_URL;
  if (!base) return [];

  try {
    const res = await fetch(`${base}/products/`, {
      headers: { Accept: "application/json" },
      signal,
    });

    if (!res.ok) return [];

    const data = await res.json();
    if (!Array.isArray(data)) return [];

    const featuredSlugs = [
      "valve-insulation-covers-jackets",
      "exhaust-bellow-expansion-joint-insulation-cover-re",
      "caterpillar-g3520c-generator-insulation-jacket-kar",
    ];

    return featuredSlugs
      .map((slug) => data.find((product) => product.slug === slug))
      .filter(Boolean);
  } catch {
    return [];
  }
}

/* ================= CARD ================= */

function ProductCard({ product, isGeo, country, city }) {
  const slug = product?.slug || "";
  const name = safeText(product?.name, "Industrial Insulation Jacket");

  const imgSrc =
    getImageUrl(product?.hero_image || product?.image) ||
    "/placeholder-product.jpg";

  const href =
    isGeo && country
      ? city
        ? `/removable-insulation-jackets/${country.slug}/${city.name}/products/${slug}`
        : `/removable-insulation-jackets/${country.slug}/products/${slug}`
      : `/products/${slug}`;

  return (
    <Link
      href={href}
      className="w-full h-full block glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative w-full h-[340px]">
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="object-contain p-6 hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
          quality={75}
        />
      </div>

      <div className="p-5 text-center">
        <h3 className="text-base sm:text-lg font-semibold whitespace-normal break-words leading-snug">
          {name}
        </h3>
      </div>
    </Link>
  );
}

/* ================= MAIN ================= */

export default function ProductsSection() {
  const { country, city, isGeo } = useGeo();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setLoading(true);

      const data = await fetchProducts(controller.signal);

      setProducts(data);
      setLoading(false);
    }

    load();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section className="section py-16">
      <div className="container text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
          {getGeoTitle(city, country)}
        </h2>

        <p className="mt-3 text-sm sm:text-base text-gray-600 whitespace-nowrap">
          {getGeoDesc(city, country)}
        </p>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {loading
          ? Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-[420px] animate-pulse bg-white/10 rounded-2xl"
                />
              ))
          : products.map((p, i) => (
              <ProductCard
                key={p._id || i}
                product={p}
                isGeo={isGeo}
                country={country}
                city={city}
              />
            ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/products" className="btn-primary">
          View All Products
        </Link>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/api";

/* =====================================================
   PRODUCT CARD
===================================================== */

function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:shadow-lg transition"
    >
      {/* IMAGE */}
      <div className="relative h-52 bg-white/5">
        <Image
          src={getImageUrl(product.image)}
          alt={product.name}
          fill
          className="object-contain group-hover:scale-105 transition"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">

        <h3 className="text-lg font-bold">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {product.description?.replace(/<[^>]+>/g, "")}
        </p>

        {/* CTA */}
        <div className="mt-4 flex justify-between items-center">

          <span className="text-green-600 font-semibold text-sm">
            Get Quote →
          </span>

          <span className="text-xs opacity-60">
            Industrial Grade
          </span>

        </div>

      </div>
    </Link>
  );
}

/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function FeaturedProductsGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/`);
        const data = await res.json();

        if (!active) return;

        setProducts(Array.isArray(data) ? data.slice(0, 6) : []);
      } catch {
        setProducts([]);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="py-16 px-6 md:px-16">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold">
          Industrial Insulation Products
        </h2>

        <p className="mt-4 text-gray-600">
          High-performance removable insulation jackets for valves, turbines, pumps & generators designed for energy saving and safety.
        </p>

      </div>

      {/* GRID */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {loading ? (
          <>
            <div className="h-64 bg-white/10 animate-pulse rounded-2xl" />
            <div className="h-64 bg-white/10 animate-pulse rounded-2xl" />
            <div className="h-64 bg-white/10 animate-pulse rounded-2xl" />
          </>
        ) : (
          products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))
        )}

      </div>

      {/* CTA */}
      <div className="text-center mt-12">

        <Link
          href="/get-quote"
          className="bg-black text-white px-6 py-3 rounded-xl font-semibold inline-block hover:bg-gray-800 transition"
        >
          Get Industrial Quote
        </Link>

        <p className="mt-3 text-sm text-gray-500">
          Custom manufacturing • Fast response • Export available
        </p>

      </div>

    </section>
  );
}
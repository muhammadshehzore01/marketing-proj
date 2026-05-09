"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function uniqueNonEmpty(arr) {
  return Array.from(new Set((arr || []).filter(Boolean))).sort();
}

export default function ProductsClient({ initialProducts = [] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const categories = useMemo(
    () => uniqueNonEmpty(initialProducts.map((p) => p.category?.trim())),
    [initialProducts]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return initialProducts.filter((p) => {
      const productCategory = (p.category || "").trim();

      const matchesCategory =
        category === "all" ? true : productCategory === category;

      const blob = `${p.name} ${p.desc} ${productCategory}`.toLowerCase();
      const matchesQuery = q ? blob.includes(q) : true;

      return matchesCategory && matchesQuery;
    });
  }, [initialProducts, query, category]);

  return (
    <section>
      {/* Sticky filter bar */}
      <div
        className="sticky top-0 z-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 backdrop-blur border-b"
        style={{
          background: "rgba(10, 37, 64, 0.78)",
          borderColor: "var(--border)",
        }}
      >
        <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">
          <div>
            <h2 style={{ color: "var(--text-primary)" }}>
              Industrial Insulation Products (Removable Jackets & Covers)
            </h2>

            <p
              className="text-sm mt-1"
              style={{ color: "var(--text-secondary)" }}
            >
              Browse removable insulation jackets, valve insulation covers,
              turbocharger blankets, exhaust insulation blankets, and heat
              shields for industrial equipment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="w-full sm:w-72">
              <label className="sr-only" htmlFor="product-search">
                Search products
              </label>

              <input
                id="product-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products…"
                aria-label="Search products"
              />
            </div>

            <div className="w-full sm:w-60">
              <label className="sr-only" htmlFor="product-category">
                Category
              </label>

              <select
                id="product-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                aria-label="Filter by category"
              >
                <option value="all">All categories</option>

                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <Link href="/contact" className="btn-primary whitespace-nowrap">
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filtered.length === 0 ? (
        <div
          className="mt-10 text-center"
          style={{ color: "var(--text-muted)" }}
        >
          No products found.
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, index) => {
            const productHref = p.slug
              ? `/products/${p.slug}`
              : "/contact";

            return (
              <article
                key={p.key}
                className="glass-card group overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.imageUrl}
                    alt={p.name}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.15), transparent)",
                    }}
                  />

                  {p.category ? (
                    <div className="absolute top-3 left-3">
                      <span
                        className="text-xs rounded-full px-3 py-1"
                        style={{
                          background: "rgba(0,0,0,0.38)",
                          border: "1px solid var(--border)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {p.category}
                      </span>
                    </div>
                  ) : null}
                </div>

                <div className="p-5 sm:p-6">
                  <h3 style={{ color: "var(--text-primary)" }}>{p.name}</h3>

                  <p className="mt-2 text-sm leading-relaxed line-clamp-3">
                    {p.desc}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <Link
                      href={productHref}
                      className="font-semibold transition rounded-md"
                      style={{ color: "var(--accent)" }}
                    >
                      View Details →
                    </Link>

                    <Link href="/contact" className="btn-secondary">
                      Request Quote
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
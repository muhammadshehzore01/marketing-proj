import Link from "next/link";
import Image from "next/image";
import { industries } from "@/lib/data/industries";

export const metadata = {
  title: "Industries We Serve | M. Shahrukh Engineering Works",
  description:
    "Removable insulation jackets for power plants, oil and gas, petrochemical, fertilizer, cement, steel, textile, food processing, pharmaceutical, marine, and utility industries.",
};

export default function IndustriesPage() {
  return (
    <main>
      <section className="section bg-primary">
        <div className="container">
          <p
            className="mb-4"
            style={{
              color: "var(--accent)",
              fontWeight: 800,
            }}
          >
            Industries We Serve
          </p>

          <h1>Removable Insulation Jackets for Industrial Plants</h1>

          <p className="max-w-3xl">
            We design and manufacture high-temperature removable insulation
            covers for industries that need energy saving, worker safety, heat
            loss reduction, and easy maintenance access.
          </p>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="overflow-hidden no-underline block"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  loading={index < 3 ? "eager" : "lazy"}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3
                  style={{
                    fontSize: "clamp(1.05rem, 1.4vw, 1.35rem)",
                    marginBottom: "0.85rem",
                  }}
                >
                  {industry.title}
                </h3>

                <p
                  className="mb-4"
                  style={{
                    fontSize: "0.95rem",
                  }}
                >
                  {industry.description}
                </p>

                <span
                  style={{
                    color: "var(--accent)",
                    fontWeight: 800,
                  }}
                >
                  View Industry Solution →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
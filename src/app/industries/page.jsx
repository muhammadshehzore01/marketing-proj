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
      <section
        className="section relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,15,25,0.75), rgba(10,15,25,0.75)), url('/img/industries/industries-insulation-hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container relative z-10">
          <p
            className="mb-4"
            style={{
              color: "var(--accent)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Industries We Serve
          </p>

          <h1
            style={{
              color: "#ffffff",
              maxWidth: "900px",
            }}
          >
            Removable Insulation Jackets for Industrial Plants
          </h1>

          <p
            className="max-w-3xl"
            style={{
              color: "rgba(255,255,255,0.92)",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
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
                transition: "all 0.3s ease",
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={industry.detailImage}
                  alt={industry.pageTitle}
                  fill
                  loading={index < 3 ? "eager" : "lazy"}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <p
                  style={{
                    color: "var(--accent)",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {industry.slug.replace(/-/g, " ")}
                </p>

                <h3
                  style={{
                    fontSize: "clamp(1.05rem, 1.4vw, 1.35rem)",
                    marginBottom: "0.85rem",
                    lineHeight: 1.4,
                  }}
                >
                  {industry.pageTitle}
                </h3>

                <p
                  className="mb-4"
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
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
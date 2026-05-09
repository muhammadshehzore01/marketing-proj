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
          <p className="mb-4" style={{ color: "var(--accent)", fontWeight: 800 }}>
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
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="glass-card overflow-hidden no-underline"
            >
              <div className="relative h-56">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3>{industry.title}</h3>

                <p className="mb-4">{industry.description}</p>

                <span style={{ color: "var(--accent)", fontWeight: 800 }}>
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
import Image from "next/image";

export default function IndustryOverview({ industry }) {
  return (
    <section className="section bg-secondary">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p
            className="mb-4"
            style={{
              color: "var(--accent)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Industry Operational Requirement
          </p>

          <h2>{industry.pageTitle}</h2>

          <div className="prose max-w-none mt-6">
            <p>{industry.overview}</p>
            <p>{industry.industryNeed}</p>
          </div>
        </div>

        <div className="glass-card relative h-[340px] md:h-[420px] overflow-hidden">
          <Image
            src={industry.detailImage}
            alt={`${industry.pageTitle} technical application`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
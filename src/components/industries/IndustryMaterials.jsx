export default function IndustryMaterials({ industry }) {
  return (
    <section className="section bg-secondary">
      <div className="container">
        <div className="max-w-4xl">
          <p
            className="mb-4"
            style={{
              color: "var(--accent)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Material Specification
          </p>

          <h2>Industrial Fabric, Insulation Core & Closure Systems</h2>

          <p className="mt-6">
            Material selection is based on surface temperature, indoor or
            outdoor service, vibration, chemical exposure, maintenance access,
            and required insulation life.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <div className="glass-card p-8">
            <h3>Custom Material Engineering</h3>

            <p>
              We do not use one standard material for every project. Each cover
              is engineered according to the equipment temperature, plant
              environment, handling frequency, and installation method.
            </p>
          </div>

          <div className="space-y-5">
            {industry.materials.map((item, index) => (
              <div
                key={index}
                className="border-b pb-5"
                style={{ borderColor: "var(--border)" }}
              >
                <h4 style={{ color: "var(--text-primary)" }}>
                  {String(index + 1).padStart(2, "0")}. {item}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
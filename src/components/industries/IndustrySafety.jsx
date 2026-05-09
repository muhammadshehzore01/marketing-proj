export default function IndustrySafety({ industry }) {
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
            Worker Safety & Thermal Protection
          </p>

          <h2>Surface Temperature Reduction for Safer Industrial Operations</h2>

          <p className="mt-6">
            High-temperature industrial equipment can expose operators,
            maintenance teams, and nearby workers to burn hazards and radiant
            heat. Proper thermal insulation systems improve safety while also
            supporting operational efficiency.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div className="space-y-5">
            {industry.safetyBenefits.map((item, index) => (
              <div
                key={index}
                className="border-b pb-5"
                style={{ borderColor: "var(--border)" }}
              >
                <p style={{ margin: 0 }}>
                  <strong style={{ color: "var(--text-primary)" }}>
                    {String(index + 1).padStart(2, "0")}.{" "}
                  </strong>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="glass-card p-8">
            <h3>Safety + Operational Compliance Advantage</h3>

            <p>
              Reducing exposed hot surfaces can improve safety standards,
              support maintenance teams, and reduce direct contact risk near
              process equipment, valves, pumps, flanges, and exhaust systems.
            </p>

            <p>
              Thermal insulation systems also help improve plant discipline by
              ensuring equipment remains properly insulated after service work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
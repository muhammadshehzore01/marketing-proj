export default function IndustryManufacturingProcess({ industry }) {
  return (
    <section className="section bg-primary">
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
            Custom Engineering & Manufacturing Process
          </p>

          <h2>From Site Measurement to Final Fabrication</h2>

          <p className="mt-6">
            Every removable insulation system is engineered according to actual
            equipment dimensions, temperature range, maintenance access points,
            and plant operating conditions.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {industry.manufacturingProcess.map((step, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[90px_1fr] gap-6 border-b pb-6"
              style={{ borderColor: "var(--border)" }}
            >
              <div>
                <h3
                  style={{
                    color: "var(--accent)",
                    marginBottom: 0,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </h3>
              </div>

              <div>
                <p style={{ margin: 0 }}>{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
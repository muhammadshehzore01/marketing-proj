export default function IndustryTemperatureRanges({ industry }) {
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
            Temperature Range Engineering
          </p>

          <h2>Material Selection by Operating Temperature</h2>

          <p className="mt-6">
            Correct insulation performance depends on temperature, exposure,
            vibration, maintenance frequency, and equipment geometry. We select
            material combinations according to actual working conditions.
          </p>
        </div>

        <div className="mt-10 overflow-hidden glass-card">
          <div
            className="grid md:grid-cols-[0.7fr_1.2fr_1.1fr] gap-0 border-b p-5"
            style={{ borderColor: "var(--border)" }}
          >
            <h4>Temperature</h4>
            <h4>Typical Use</h4>
            <h4>Recommended Material</h4>
          </div>

          {industry.temperatureRanges.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[0.7fr_1.2fr_1.1fr] gap-4 border-b p-5"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                style={{
                  color: "var(--text-primary)",
                  fontWeight: 800,
                  margin: 0,
                }}
              >
                {item.range}
              </p>

              <p style={{ margin: 0 }}>{item.use}</p>

              <p style={{ margin: 0 }}>{item.material}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function IndustryExportSupply({ industry }) {
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
            Export Supply Capability
          </p>

          <h2>Industrial Thermal Insulation Supply for International Markets</h2>

          <p className="mt-6">
            We support industrial clients, contractors, OEM buyers, EPC
            companies, and maintenance teams with custom thermal insulation
            solutions for local and international projects.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <div className="glass-card p-8">
            <h3>Export Support Includes</h3>

            <ul className="mt-6 space-y-4">
              <li>Bulk manufacturing capability</li>
              <li>Industrial export packaging</li>
              <li>Custom fabrication for project requirements</li>
              <li>International shipping support</li>
              <li>Documentation assistance</li>
            </ul>
          </div>

          <div>
            <h3>Active Target Markets</h3>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {industry.exportMarkets.map((market, index) => (
                <div
                  key={index}
                  className="border-b pb-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p style={{ margin: 0 }}>{market}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
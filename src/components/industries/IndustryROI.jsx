export default function IndustryROI({ industry }) {
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
            ROI & Energy Savings
          </p>

          <h2>How Insulation Covers Help Reduce Operating Cost</h2>

          <p className="mt-6">
            Removable insulation systems are not only a safety product. They can
            reduce heat loss, lower fuel or electricity waste, reduce repeated
            insulation replacement, and improve maintenance efficiency.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3>Commercial Benefits for Plant Owners</h3>

            <div className="mt-6 space-y-5">
              {industry.roiBenefits.map((item, index) => (
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
          </div>

          <div className="glass-card p-8">
            <h3>Why ROI Improves</h3>

            <p>
              Traditional insulation often gets removed during maintenance and
              is not reused properly. A removable jacket can be opened,
              reinstalled, and reused multiple times, reducing labor, material
              waste, heat loss, and downtime.
            </p>

            <p>
              For high-temperature equipment, even small areas of exposed hot
              surface can waste energy continuously. Covering valves, flanges,
              pumps, exhaust systems, and steam equipment helps improve total
              plant efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
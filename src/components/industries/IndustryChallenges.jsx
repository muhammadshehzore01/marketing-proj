export default function IndustryChallenges({ industry }) {
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
            Thermal Loss, Maintenance & Safety Problems
          </p>

          <h2>Operational Challenges in This Industry</h2>

          <p className="mt-6">
            Industrial heat loss is not only an energy problem. It affects
            maintenance speed, operator safety, equipment access, insulation
            replacement cost, and long-term plant efficiency.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <div className="glass-card p-8">
            <h3>Why Fixed Insulation Often Fails</h3>

            <p>
              Traditional fixed insulation is difficult to remove and often gets
              damaged during inspection or repair. Once removed, it may not be
              reinstalled properly, leaving valves, flanges, pumps, and hot
              surfaces exposed.
            </p>
          </div>

          <div className="space-y-5">
            {industry.operationalChallenges.map((item, index) => (
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
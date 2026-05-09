export default function IndustryBenefits({ industry }) {
  return (
    <section className="section bg-secondary">
      <div className="container">
        <h2>Problems We Solve</h2>

        <p className="max-w-3xl mb-10">
          Industrial plants lose valuable energy through exposed hot surfaces.
          Our removable insulation jackets reduce heat loss, improve worker
          safety, and lower operating cost.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {industry.problems.map((item, index) => (
            <div key={index} className="glass-card p-6">
              <h3>Challenge {index + 1}</h3>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2>Key Benefits</h2>

          <div className="grid md:grid-cols-4 gap-6 mt-8">
            {industry.benefits.map((item, index) => (
              <div key={index} className="glass-card p-6">
                <p style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
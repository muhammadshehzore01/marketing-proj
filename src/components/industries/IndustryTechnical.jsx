export default function IndustryTechnical({ industry }) {
  return (
    <section className="section bg-secondary">
      <div className="container">
        <h2>Technical Features</h2>

        <p className="max-w-3xl mb-10">
          Each insulation jacket is custom manufactured according to equipment
          shape, operating temperature, maintenance access, and site condition.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {industry.technicalFeatures.map((item, index) => (
            <div key={index} className="glass-card p-6">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
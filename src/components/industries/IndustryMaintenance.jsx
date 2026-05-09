export default function IndustryMaintenance({ industry }) {
  return (
    <section className="section bg-secondary">
      <div className="container">
        <div className="glass-card p-8 md:p-12">
          <h2>Maintenance Access Advantage</h2>

          <p className="max-w-4xl">{industry.maintenance}</p>
        </div>
      </div>
    </section>
  );
}
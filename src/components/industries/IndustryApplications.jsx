export default function IndustryApplications({ industry }) {
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
            Equipment-Specific Applications
          </p>

          <h2>Where Our Thermal Insulation Systems Are Used</h2>

          <p className="mt-6">
            Each industry has different equipment, access points, temperature
            zones, and maintenance requirements. Our insulation systems are
            custom designed according to equipment shape, operating temperature,
            and site conditions.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-5">
          {industry.equipmentApplications.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 border-b pb-5"
              style={{ borderColor: "var(--border)" }}
            >
              <span
                style={{
                  color: "var(--accent)",
                  fontWeight: 800,
                  minWidth: "2rem",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <p style={{ margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
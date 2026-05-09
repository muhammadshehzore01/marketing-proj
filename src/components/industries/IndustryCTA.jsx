export default function IndustryCTA({ industry }) {
  return (
    <section className="section bg-secondary">
      <div className="container">
        <div className="glass-card p-10 md:p-16 text-center">
          <p
            className="mb-4"
            style={{
              color: "var(--accent)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Request Technical Quotation
          </p>

          <h2>Need Custom Industrial Thermal Insulation Solutions?</h2>

          <p className="max-w-4xl mx-auto mt-6 mb-10">
            {industry.ctaText}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/923052646312" className="btn-primary">
              WhatsApp RFQ
            </a>

            <a href="mailto:hellomsew@gmail.com" className="btn-secondary">
              Email Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
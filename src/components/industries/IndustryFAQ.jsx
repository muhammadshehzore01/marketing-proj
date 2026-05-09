export default function IndustryFAQ({ industry }) {
  return (
    <section className="section bg-primary">
      <div className="container max-w-5xl">
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
            Technical FAQ
          </p>

          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="mt-10 space-y-8">
          {industry.faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b pb-8"
              style={{ borderColor: "var(--border)" }}
            >
              <h3>{faq.question}</h3>
              <p className="mt-4">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
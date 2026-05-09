// /home/shahrukh-eng/marketing-proj/src/app/removable-insulation-jackets/[country]/FAQSection.jsx
export function FAQSection({ faq = [] }) {
  return (
    <section className="mb-10">
      <h2>Frequently Asked Questions</h2>

      {faq.map((f, i) => (
        <div key={i}>
          <h3>{f.question}</h3>
          <p>{f.answer}</p>
        </div>
      ))}
    </section>
  );
}
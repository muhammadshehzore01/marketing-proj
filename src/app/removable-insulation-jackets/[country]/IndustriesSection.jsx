// /home/shahrukh-eng/marketing-proj/src/app/removable-insulation-jackets/[country]/IndustriesSection.jsx

export function IndustriesSection({ industries }) {
  return (
    <section className="mb-10">
      <h2>Key Industries</h2>
      <ul>
        {industries.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </section>
  );
}
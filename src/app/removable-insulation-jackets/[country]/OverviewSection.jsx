// /home/shahrukh-eng/marketing-proj/src/app/removable-insulation-jackets/[country]/OverviewSection.jsx

export function OverviewSection({ title, content }) {
  if (!Array.isArray(content)) return null;

  return (
    <section className="py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-6">
          {title}
        </h2>

        {/* CONTENT */}
        <div className="space-y-4">
          {content.map((text, i) => (
            <p
              key={i}
              className="text-gray-700 leading-relaxed"
            >
              {text}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
}
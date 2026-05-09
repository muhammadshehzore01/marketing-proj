export default function ApplicationPage({ data }) {
  return (
    <main className="bg-transparent text-gray-900">
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-orange-600 uppercase">
          Industrial Thermal Insulation Solution
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
          {data.headline}
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-3xl">
          {data.description}
        </p>

        <a
          href="https://wa.me/923052646312"
          className="inline-block mt-8 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Get Quotation on WhatsApp
        </a>
      </section>

      <section className="px-6 py-16 bg-transparent">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold">Problem</h2>
            <p className="mt-4 text-gray-700">{data.problem}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Solution</h2>
            <p className="mt-4 text-gray-700">{data.solution}</p>
          </div>
        </div>
      </section>

      <Section title="Key Benefits" items={data.benefits} />
      <Section title="Applications" items={data.applications} />
      <Section title="Technical Features" items={data.features} />

      <section className="px-6 py-20 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold">
          Need Custom Removable Insulation Jackets?
        </h2>
        <p className="mt-4 text-gray-300">
          Send equipment size, temperature, and photos for a fast quotation.
        </p>
        <a
          href="https://wa.me/923052646312"
          className="inline-block mt-8 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Request Price Now
        </a>
      </section>
    </main>
  );
}

function Section({ title, items }) {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">{title}</h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item}
              className="border rounded-xl p-6 shadow-sm bg-white"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
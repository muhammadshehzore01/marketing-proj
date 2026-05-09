// /home/shahrukh-eng/marketing-proj/src/components/seo/SeoFAQ.jsx
export default function SeoFAQ({ data = [] }) {
  return (
    <div className="space-y-4">
      {data.map((item, i) => (
        <details
          key={i}
          className="rounded-xl border border-white/10 bg-white/5 p-4"
        >
          <summary className="cursor-pointer text-white font-medium">
            {item.question}
          </summary>
          <p className="mt-2 text-gray-300 text-sm">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
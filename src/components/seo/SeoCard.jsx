// /home/shahrukh-eng/marketing-proj/src/components/seo/SeoCard.jsx
export default function SeoCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 shadow-lg backdrop-blur-xl">
      {title && (
        <h3 className="text-lg font-semibold text-white mb-3">
          {title}
        </h3>
      )}
      <div className="text-gray-300 leading-relaxed text-sm">
        {children}
      </div>
    </div>
  );
}
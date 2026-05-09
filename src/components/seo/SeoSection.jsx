// /home/shahrukh-eng/marketing-proj/src/components/seo/SeoSection.jsx
export default function SeoSection({ title, children }) {
  return (
    <section className="space-y-4 my-10">
      <h2 className="text-2xl font-bold text-white tracking-wide">
        {title}
      </h2>
      {children}
    </section>
  );
}
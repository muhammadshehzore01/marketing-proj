// /home/shahrukh-eng/marketing-proj/src/components/seo/SeoGrid.jsx
export default function SeoGrid({ children }) {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {children}
    </div>
  );
}
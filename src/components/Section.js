export default function Section({ children, className = "" }) {
  return (
    <section className={`w-full py-4 md:py-6 ${className}`}>
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        {children}
      </div>
    </section>
  );
}
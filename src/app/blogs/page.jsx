// marketing-proj/src/app/blogs/page.jsx
import BlogCard from "./BlogCard";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const baseUrl = apiUrl?.replace("/api", "") || "";

export const metadata = {
  title: "Blogs | M. Shahrukh Engineering Works",
  description:
    "Latest blogs on removable insulation jackets, thermal insulation covers, energy saving and industrial heat loss reduction solutions.",
};

export default async function BlogListPage() {
  const res = await fetch(`${apiUrl}/blogs/`, { cache: "no-store" });

  if (!res.ok) {
    return (
      <section className="section bg-primary">
        <div className="container">
          <div className="glass-card p-8 text-center">
            <h1>Our Latest Blogs</h1>
            <p className="mt-2 muted">No blogs found.</p>
          </div>
        </div>
      </section>
    );
  }

  const blogs = await res.json();

  return (
    <section className="section bg-primary">
      <div className="container">
        <header className="text-center mb-12">
          <h1>Our Latest Blogs</h1>
          <p className="mt-3">
            Insights on heat loss reduction, energy efficiency, and high-temperature insulation
            solutions for industrial equipment.
          </p>
        </header>

        {Array.isArray(blogs) && blogs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.slug} blog={blog} index={index} baseUrl={baseUrl} />
            ))}
          </div>
        ) : (
          <div className="glass-card p-8 text-center">
            <p className="muted">No blogs available right now.</p>
          </div>
        )}
      </div>
    </section>
  );
}
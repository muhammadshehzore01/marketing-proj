// src/app/blogs/[slug]/page.jsx
import BlogDetail from "./BlogDetail";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
const baseUrl = apiUrl.replace("/api", "");

const buildImageUrl = (img) => {
  if (!img) return "";
  return img.startsWith("http") ? img : `${baseUrl}${img}`;
};

// SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = params;

  const res = await fetch(`${apiUrl}/blogs/${slug}/`, { cache: "no-store" });
  if (!res.ok) {
    return {
      title: "Blog Not Found",
      description: "Blog not found",
      robots: { index: false, follow: false },
    };
  }

  const blog = await res.json();
  const title = blog?.meta_title || blog?.title || "Blog";
  const description = blog?.meta_description || blog?.excerpt || "";
  const ogImage = buildImageUrl(blog?.image);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: ogImage ? [{ url: ogImage, alt: blog?.title || "Blog image" }] : [],
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

// Blog Detail Page
export default async function BlogDetailPage({ params }) {
  const { slug } = params;

  const res = await fetch(`${apiUrl}/blogs/${slug}/`, { cache: "no-store" });
  if (!res.ok) {
    return (
      <section className="section bg-primary">
        <div className="container">
          <div className="glass-card p-8 text-center">
            <h1>Blog not found</h1>
            <p className="mt-3 muted">The blog you are looking for does not exist or may have been removed.</p>
          </div>
        </div>
      </section>
    );
  }

  const blog = await res.json();

  // keep your existing behavior: ensure absolute image URL
  if (blog?.image && !blog.image.startsWith("http")) {
    blog.image = `${baseUrl}${blog.image}`;
  }

  return <BlogDetail blog={blog} />;
}
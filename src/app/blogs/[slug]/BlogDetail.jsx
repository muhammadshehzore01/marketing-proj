// marketing-proj/src/app/blogs/[slug]/BlogDetail.jsx
"use client";

import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

export default function BlogDetail({ blog }) {
  const published =
    blog?.created_at &&
    new Date(blog.created_at).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <section className="section bg-primary">
      <div className="container">
        <article className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blogs" },
              { label: blog?.title || "Detail" },
            ]}
          />

          {/* Title */}
          <motion.header
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-6"
          >
            <h1>{blog?.title}</h1>
          </motion.header>

          {/* Cover Image */}
          {blog?.image && (
            <motion.div
              className="glass-card overflow-hidden mt-8"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img
                src={blog.image}
                alt={blog?.title || "Blog cover"}
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </motion.div>
          )}

          {/* Blog Content */}
          <motion.div
            className="glass-card p-6 md:p-8 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
            />
          </motion.div>

          {/* Published Date */}
          {published && (
            <motion.footer
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              <div className="glass-card p-4">
                <small className="muted">Published on {published}</small>
              </div>
            </motion.footer>
          )}
        </article>
      </div>
    </section>
  );
}
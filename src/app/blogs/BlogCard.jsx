// components/BlogCard.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog, index, baseUrl }) {
  const imageSrc = blog?.image
    ? blog.image.startsWith("http")
      ? blog.image
      : `${baseUrl}${blog.image}`
    : null;

  return (
    <motion.article
      className="glass-card overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
    >
      <div className="relative h-56 w-full overflow-hidden">
        {imageSrc ? (
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.45 }}
          >
            <Image
              src={imageSrc}
              alt={blog?.title || "Blog image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={index < 3}
            />
          </motion.div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="muted">No image</p>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="mb-2" style={{ fontSize: "1.25rem" }}>
          {blog?.title}
        </h2>

        <p className="flex-grow line-clamp-4">
          {blog?.excerpt || blog?.summary || "Read insights and practical tips in this post."}
        </p>

        <div className="mt-6">
          <Link href={`/blogs/${blog.slug}`} className="btn-secondary">
            Read More →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
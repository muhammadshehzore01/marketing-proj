// /home/shahrukh-eng/marketing-proj/src/components/seo/SeoTitle.jsx
import React from "react";

const SeoTitle = ({
  children,
  as = "h2",
  subtitle,
  align = "left",
  className = "",
}) => {
  const Tag = as;

  return (
    <div
      className={`mb-6 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <Tag
        className={`text-3xl md:text-4xl font-bold leading-tight 
        bg-gradient-to-r from-blue-500 to-cyan-400 
        bg-clip-text text-transparent ${className}`}
      >
        {children}
      </Tag>

      {subtitle && (
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto md:mx-0">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SeoTitle;
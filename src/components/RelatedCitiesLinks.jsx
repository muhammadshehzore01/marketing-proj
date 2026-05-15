// /home/shahrukh-eng/marketing-proj/src/components/RelatedCitiesLinks.jsx

import React from "react";
import Link from "next/link";
import { Factory, ArrowRight } from "lucide-react";

export default function RelatedCitiesLinks({
  seoContent = null,
  label = "Major Industrial Cities",
  title = "Industrial Insulation Solutions Across This Region",
  description = "City-focused removable insulation jacket solutions for industrial zones, power plants, refineries, chemical plants, manufacturing facilities, and high-temperature equipment.",
}) {
  const finalLabel = seoContent?.label || label;
  const finalTitle = seoContent?.title || title;
  const finalDescription = seoContent?.description || description;
  const cities = seoContent?.cities || [];

  if (!cities.length) return null;

  return (
    <section className="py-20 px-6 md:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-600">
          {finalLabel}
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B1220]">
          {finalTitle}
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {finalDescription}
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {cities.map((item, index) => (
            <Link
              key={`${item.name}-${index}`}
              href={item.href}
              className="group rounded-2xl border border-gray-200 p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                    <Factory className="w-6 h-6 text-orange-600" />
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-[#0B1220]">
                      {item.display}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {item.industry}
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
              </div>

              <p className="mt-5 text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { industries } from "@/lib/data/industries";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function IndustriesLinks({
  label = "Industries We Serve",
  title = "Industrial Thermal Insulation Solutions for Multiple Industries",
  description = "We manufacture removable thermal insulation covers for industrial equipment operating in high-temperature environments including power plants, oil & gas facilities, petrochemical plants, fertilizer plants, textile mills, marine systems, and industrial utility applications.",
  buttonText = "View All Industries",
  seoContent = null,
}) {
  const finalLabel = seoContent?.label || label;
  const finalTitle = seoContent?.title || title;
  const finalDescription = seoContent?.description || description;
  const finalButtonText = seoContent?.buttonText || buttonText;

  const sourceIndustries =
    seoContent?.featuredIndustries?.length > 0
      ? seoContent.featuredIndustries
      : industries;

  return (
    <section className="section bg-secondary overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-4xl">
            <p
              className="mb-4"
              style={{
                color: "var(--accent)",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {finalLabel}
            </p>

            <h2>{finalTitle}</h2>

            <p className="mt-6">{finalDescription}</p>

            {seoContent?.ctaText && (
              <p
                className="mt-4"
                style={{
                  color: "var(--accent)",
                  fontWeight: 700,
                }}
              >
                {seoContent.ctaText}
              </p>
            )}
          </div>

          <Link
            href="/industries"
            className="btn-primary"
            aria-label={`${finalButtonText} for industrial insulation applications`}
          >
            {finalButtonText}
          </Link>
        </div>

        <div className="mt-14">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            loop={false}
            speed={700}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            allowTouchMove={true}
            watchSlidesProgress={false}
            slidesPerView={1.15}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="industries-swiper"
          >
            {sourceIndustries.map((industry, index) => (
              <SwiperSlide key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="glass-card overflow-hidden no-underline group h-full block"
                  aria-label={`Explore ${industry.pageTitle} for industrial insulation applications`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={industry.detailImage}
                      alt={industry.heroTitle || industry.pageTitle}
                      fill
                      loading={index < 4 ? "eager" : "lazy"}
                      priority={index < 2}
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <h3
                      style={{
                        fontSize: "clamp(1.05rem, 1.3vw, 1.35rem)",
                        marginBottom: "0.85rem",
                      }}
                    >
                      {industry.pageTitle}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {industry.description}
                    </p>

                    <span
                      className="mt-5 inline-block"
                      style={{
                        color: "var(--accent)",
                        fontWeight: 800,
                      }}
                    >
                      Explore Industry →
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { industries } from "@/lib/data/industries";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function IndustriesLinks() {
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
              Industries We Serve
            </p>

            <h2>
              Industrial Thermal Insulation Solutions for Multiple Industries
            </h2>

            <p className="mt-6">
              We manufacture removable thermal insulation covers for industrial
              equipment operating in high-temperature environments including
              power plants, oil & gas facilities, petrochemical plants,
              fertilizer plants, textile mills, marine systems, and industrial
              utility applications.
            </p>
          </div>

          <Link href="/industries" className="btn-primary">
            View All Industries
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
            {industries.map((industry, index) => (
              <SwiperSlide key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="glass-card overflow-hidden no-underline group h-full block"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.heroTitle}
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
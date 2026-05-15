"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { applications } from "@/lib/data/applications";

/* ================================================== */
/* Shuffle Applications For Random Display */
/* ================================================== */
function shuffleArray(array) {
  const copied = [...array];

  for (let i = copied.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }

  return copied;
}

/* ================================================== */
/* Application Links Slider Component */
/* Default content remains active unless seoContent exists */
/* ================================================== */
export default function ApplicationLinks({
  title = "Explore Our Applications",
  description = "Custom removable insulation jackets for valves, flanges, pumps, turbines, generators, compressors, plastic extruders, and industrial piping systems engineered for energy efficiency, worker safety, and lower operating cost.",
  buttonText = "View All Applications",
  seoContent = null,
}) {
  const finalTitle = seoContent?.title || title;
  const finalDescription = seoContent?.description || description;
  const finalButtonText = seoContent?.buttonText || buttonText;

  const sourceApplications =
    seoContent?.featuredApplications?.length > 0
      ? seoContent.featuredApplications
      : applications;

  const shuffledApplications = useMemo(() => {
    return shuffleArray(sourceApplications);
  }, [sourceApplications]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    if (!shuffledApplications.length) return;

    const interval = setInterval(() => {
      setIsSliding(true);

      setTimeout(() => {
        setActiveIndex((prev) => {
          return (prev + 1) % shuffledApplications.length;
        });

        setIsSliding(false);
      }, 700);
    }, 4000);

    return () => clearInterval(interval);
  }, [shuffledApplications.length]);

  const activeCard = shuffledApplications[activeIndex];

  if (!activeCard) return null;

  return (
    <section className="section bg-secondary">
      <div className="container">
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "1.5rem",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          <div>
            <h2>{finalTitle}</h2>

            <p
              style={{
                maxWidth: "900px",
                marginTop: "0.75rem",
              }}
            >
              {finalDescription}
            </p>

            {seoContent?.ctaText && (
              <p
                style={{
                  maxWidth: "850px",
                  marginTop: "0.75rem",
                  color: "var(--accent)",
                  fontWeight: 700,
                }}
              >
                {seoContent.ctaText}
              </p>
            )}
          </div>

          <Link href="/applications" className="btn-primary">
            {finalButtonText}
          </Link>
        </div>

        {/* SLIDER WRAPPER */}
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Link
            key={activeCard.slug}
            href={`/applications/${activeCard.slug}`}
            className="glass-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.35fr) minmax(320px, 0.65fr)",
              alignItems: "stretch",
              minHeight: "480px",
              transform: isSliding
                ? "translateX(-115%) scale(0.96)"
                : "translateX(0) scale(1)",
              opacity: isSliding ? 0 : 1,
              transition:
                "transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.7s ease",
            }}
          >
            {/* IMAGE SIDE */}
            <div
              style={{
                width: "100%",
                height: "100%",
                minHeight: "480px",
                overflow: "hidden",
                background: "rgba(255,255,255,0.03)",
                position: "relative",
              }}
            >
              <img
                src={activeCard.image.replace("/images/", "/img/")}
                alt={activeCard.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "480px",
                  objectFit: "contain",
                  objectPosition: "center center",
                  display: "block",
                  background: "#0a2540",
                }}
              />
            </div>

            {/* CONTENT SIDE */}
            <div
              style={{
                padding: "clamp(1.75rem, 3vw, 2.25rem)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "var(--accent)",
                  fontWeight: 800,
                  marginBottom: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Featured Industrial Application
              </p>

              <h3>{activeCard.title}</h3>

              <p
                style={{
                  marginTop: "1rem",
                  maxWidth: "700px",
                }}
              >
                {activeCard.description}
              </p>

              {activeCard.benefits && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "0.85rem",
                    marginTop: "1.75rem",
                  }}
                >
                  {activeCard.benefits.slice(0, 4).map((benefit) => (
                    <div
                      key={benefit}
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-sm)",
                        padding: "0.9rem",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: "1rem",
                          marginBottom: 0,
                        }}
                      >
                        {benefit}
                      </h4>
                    </div>
                  ))}
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  marginTop: "2rem",
                }}
              >
                <span
                  style={{
                    color: "var(--accent)",
                    fontWeight: 800,
                  }}
                >
                  View Application →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* INDICATORS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.65rem",
            marginTop: "1.75rem",
            flexWrap: "wrap",
          }}
        >
          {shuffledApplications.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`View application ${index + 1}`}
              style={{
                width: activeIndex === index ? "32px" : "10px",
                height: "10px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                background:
                  activeIndex === index
                    ? "var(--accent)"
                    : "rgba(255,255,255,0.18)",
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
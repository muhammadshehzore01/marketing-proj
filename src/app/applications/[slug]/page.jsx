import Link from "next/link";
import { applications, getApplicationBySlug } from "@/lib/data/applications";
import { notFound } from "next/navigation";

const sharedImages = [
  "/img/applications/shared-problem.webp",
  "/img/applications/shared-solution.webp",
  "/img/applications/shared-applications.webp",
  "/img/applications/shared-technical.webp",
];

export function generateStaticParams() {
  return applications.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }) {
  const application = getApplicationBySlug(params.slug);

  if (!application) {
    return {
      title: "Application Not Found",
    };
  }

  return {
    title: `${application.title} | Removable Thermal Insulation Covers`,
    description: application.description,
  };
}

export default function ApplicationDetailPage({ params }) {
  const application = getApplicationBySlug(params.slug);

  if (!application) {
    notFound();
  }

  return (
    <main className="bg-primary">
      <section className="section">
        <div className="container">
          <div
            className="glass-card animate-fadeIn"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              alignItems: "center",
              padding: "3rem",
            }}
          >
            <div>
              <p style={{ color: "var(--accent)", fontWeight: 800 }}>
                Industrial Application
              </p>

              <h1>{application.title}</h1>

              <p style={{ marginTop: "1rem" }}>{application.description}</p>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  marginTop: "2rem",
                }}
              >
                <Link href="/contact" className="btn-primary">
                  Request Quotation
                </Link>

                <a
                  href="https://wa.me/923052646312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>

            <ApplicationImage
              src={application.image.replace("/images/", "/img/")}
              alt={application.title}
              minHeight="320px"
            />
          </div>
        </div>
      </section>

      {application.sections.map((section, index) => {
        const imageRight = index % 2 === 0;
        const sectionImage = sharedImages[index] || sharedImages[0];

        return (
          <section
            key={section.heading}
            className={`section ${index % 2 === 0 ? "bg-secondary" : ""}`}
          >
            <div className="container">
              <div
                className="glass-card"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "2rem",
                  alignItems: "center",
                  padding: "2rem",
                }}
              >
                {!imageRight && (
                  <ApplicationImage
                    src={sectionImage}
                    alt={section.heading}
                    minHeight="330px"
                  />
                )}

                <div>
                  <h2>{section.heading}</h2>

                  <p style={{ marginTop: "1rem" }}>{section.text}</p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(220px, 1fr))",
                      gap: "1rem",
                      marginTop: "1.5rem",
                    }}
                  >
                    {section.points.map((point) => (
                      <div
                        key={point}
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid var(--border)",
                          borderRadius: "var(--radius-sm)",
                          padding: "1rem",
                        }}
                      >
                        <h4>{point}</h4>
                      </div>
                    ))}
                  </div>
                </div>

                {imageRight && (
                  <ApplicationImage
                    src={sectionImage}
                    alt={section.heading}
                    minHeight="330px"
                  />
                )}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section bg-secondary">
        <div className="container">
          <h2>Technical Material Options</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
              marginTop: "2rem",
            }}
          >
            {[
              {
                title: "Outer / Inner Layers",
                text: "Silicon coated fiberglass, PU coated fiberglass, aluminum laminated fiberglass, ceramic fiber cloth, and fiberglass cloth.",
              },
              {
                title: "Insulation Core",
                text: "Glass wool, rock wool, ceramic wool, or ceramic paper selected according to operating temperature and application.",
              },
              {
                title: "Closure System",
                text: "Velcro, belt system, stainless steel hooks, stainless steel springs, or custom fastening arrangement.",
              },
              {
                title: "Custom Engineering",
                text: "Designed according to equipment dimensions, shape, access points, temperature, and maintenance requirement.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card"
                style={{ padding: "1.5rem" }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Industries Using {application.title}</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            {[
              "Power Plants",
              "Oil & Gas",
              "Petrochemical",
              "Chemical Plants",
              "Textile Mills",
              "Cement Plants",
              "Steel Industry",
              "Food Processing",
              "Plastic Industry",
              "Marine & Shipping",
            ].map((industry) => (
              <div
                key={industry}
                className="glass-card"
                style={{ padding: "1.25rem" }}
              >
                <h4>{industry}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container">
          <div className="glass-card" style={{ padding: "2.5rem" }}>
            <h2>Request Custom {application.title}</h2>

            <p>
              Share your equipment photos, dimensions, operating temperature,
              quantity, and site requirement. M. Shahrukh Engineering Works can
              design and manufacture custom removable insulation covers for your
              industrial application.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginTop: "2rem",
              }}
            >
              <Link href="/contact" className="btn-primary">
                Request Quote
              </Link>

              <a
                href="https://wa.me/923052646312"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Send Details on WhatsApp
              </a>

              <a href="mailto:hellomsew@gmail.com" className="btn-secondary">
                Email Drawing / Photos
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ApplicationImage({ src, alt, minHeight = "330px" }) {
  return (
    <div
      style={{
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        border: "1px solid var(--border)",
        minHeight,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          minHeight,
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}
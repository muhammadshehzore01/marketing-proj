import Link from "next/link";
import { applications } from "@/lib/data/applications";
import Industries from "@/components/Industries";
import KeyBenefitsStrip from "@/components/KeyBenefitsStrip";

export const metadata = {
  title: "Industrial Applications of Removable Insulation Jackets",
  description:
    "Explore removable insulation jackets for valves, flanges, pumps, turbines, generators, compressors, plastic extruders, and industrial piping systems.",
  alternates: {
    canonical: "https://mshahrukhengineeringworks.com/applications",
  },
};

export default function ApplicationsPage() {
  return (
    <main className="bg-primary">
      <section
        className="section"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,15,25,0.78), rgba(10,15,25,0.78)), url('/img/applications/applications-removable-insulation-hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div
            className="animate-fadeIn"
            style={{
              minHeight: "580px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "clamp(2rem, 5vw, 4rem) 0",
            }}
          >
            <div
              style={{
                maxWidth: "950px",
              }}
            >
              <p
                style={{
                  color: "var(--accent)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "1rem",
                }}
              >
                Industrial Thermal Insulation Applications
              </p>

              <h1
                style={{
                  color: "#ffffff",
                  marginBottom: "1.5rem",
                  maxWidth: "950px",
                  marginInline: "auto",
                }}
              >
                Removable Insulation Jackets for Industrial Equipment
              </h1>

              <p
                style={{
                  maxWidth: "850px",
                  margin: "0 auto",
                  color: "rgba(255,255,255,0.92)",
                  lineHeight: 1.9,
                  fontSize: "1.08rem",
                }}
              >
                Custom-engineered removable insulation jackets for valves,
                flanges, pumps, turbines, generators, compressors, plastic
                extruders, and industrial piping systems designed to lower fuel
                cost, improve maintenance efficiency, enhance worker safety, and
                reduce thermal energy loss across industrial operations.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginTop: "2.5rem",
                }}
              >
                <Link href="/contact" className="btn-primary">
                  Request Quick Quotation
                </Link>

                <a
                  href="https://wa.me/923052646312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp Technical Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container">
          <h2>Applications by Equipment</h2>

          <p style={{ maxWidth: "900px" }}>
            Select the equipment type below to explore technical solutions,
            insulation benefits, and industrial applications designed
            specifically for your operational requirements.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginTop: "2.5rem",
            }}
          >
            {applications.map((item) => {
              const imageSrc = item.image.replace("/images/", "/img/");

              return (
                <Link
                  key={item.slug}
                  href={`/applications/${item.slug}`}
                  className="glass-card"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "210px",
                      overflow: "hidden",
                      borderBottom: "1px solid var(--border)",
                      background: "var(--background-primary)",
                    }}
                  >
                    <img
                      src={imageSrc}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                      }}
                    />
                  </div>

                  <div style={{ padding: "1.4rem", flexGrow: 1 }}>
                    <p style={{ color: "var(--accent)", fontWeight: 800 }}>
                      {item.shortTitle}
                    </p>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <span
                      style={{
                        color: "var(--accent)",
                        fontWeight: 800,
                        display: "inline-block",
                        marginTop: "1rem",
                      }}
                    >
                      View Application →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Industrial Problem → Custom Thermal Solution</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <div className="glass-card" style={{ padding: "1.5rem" }}>
              <h3>Industrial Problem</h3>

              <ul>
                <li>High heat loss from exposed equipment</li>
                <li>Increased fuel and electricity costs</li>
                <li>Unsafe high-temperature surfaces</li>
                <li>Frequent insulation damage during maintenance</li>
                <li>Reduced process efficiency</li>
                <li>Excessive radiant heat in work areas</li>
              </ul>
            </div>

            <div className="glass-card" style={{ padding: "1.5rem" }}>
              <h3>Our Solution</h3>

              <ul>
                <li>Custom removable insulation jackets</li>
                <li>Reusable thermal covers</li>
                <li>Fast installation and removal</li>
                <li>Maintenance-friendly access</li>
                <li>Improved worker safety</li>
                <li>Long-term energy savings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Industries />

      <KeyBenefitsStrip />

      <section className="section bg-secondary">
        <div className="container">
          <div
            className="glass-card"
            style={{ padding: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            <h2>Need Custom Insulation Covers?</h2>

            <p>
              Send your equipment dimensions, operating temperature, photos, or
              technical drawings. Our engineering team will design custom
              removable insulation jackets optimized for your industrial
              application.
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
                Get Custom Quote
              </Link>

              <a href="mailto:hellomsew@gmail.com" className="btn-secondary">
                Email Technical Details
              </a>

              <a
                href="https://wa.me/923052646312"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
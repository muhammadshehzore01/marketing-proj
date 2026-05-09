import Image from "next/image";

export default function IndustryHero({ industry }) {
  return (
    <section className="section bg-primary">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fadeIn">
          <p
            className="mb-4"
            style={{
              color: "var(--accent)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Industrial Energy Saving Insulation Systems
          </p>

          <h1>{industry.heroTitle}</h1>

          <p className="max-w-3xl mb-6">{industry.heroSubtitle}</p>

          <p className="max-w-3xl mb-8">{industry.description}</p>

          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/923052646312" className="btn-primary">
              Request Technical Quote
            </a>

            <a href="mailto:hellomsew@gmail.com" className="btn-secondary">
              Send RFQ by Email
            </a>
          </div>
        </div>

        <div className="glass-card relative h-[360px] md:h-[460px] overflow-hidden">
          <Image
            src={industry.image}
            alt={industry.heroTitle}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
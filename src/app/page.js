import dynamic from "next/dynamic";
import Section from "@/components/Section";

// Critical above-the-fold
import HeroSlider from "@/components/HeroSlider";
import IntroSection from "@/components/IntroSection";
import KeyBenefitsStrip from "@/components/KeyBenefitsStrip";
import ServicesSection from "@/components/ServicesSection";

// Below-the-fold lazy loaded
const ProductsSection = dynamic(() => import("@/components/Products"));
const ApplicationLinks = dynamic(() => import("@/components/ApplicationLinks"));
const IndustriesLinks = dynamic(() => import("@/components/IndustriesLinks"));
const MaterialConstruction = dynamic(() =>
  import("@/components/MaterialConstruction")
);
const AboutMSEW = dynamic(() => import("@/components/AboutMSEW"));
const PakistanIndustrialCityPages = dynamic(() =>
  import("@/components/industrialCityPages")
);
const HomePageContact = dynamic(() => import("@/components/HomePageContact"));
const PartnersSection = dynamic(() => import("@/components/PartnersSection"));
const FAQSection = dynamic(() => import("@/components/faqsection"));

export const metadata = {
  title:
    "Removable Insulation Jackets Pakistan | Valve, Exhaust & Turbine Covers",
  description:
    "High-temperature removable insulation jackets for industrial equipment. Reduce heat loss, improve efficiency & safety. Custom solutions available.",
  keywords: [
    "removable insulation jackets",
    "industrial insulation covers",
    "valve insulation jackets",
    "turbine insulation covers",
    "generator insulation jackets",
    "exhaust insulation blankets",
    "Pakistan insulation manufacturer",
    "MSEW insulation solutions",
  ],
  alternates: {
    canonical: "https://mshahrukhengineeringworks.com/",
  },
  openGraph: {
    title: "Removable Insulation Jackets Pakistan | MSEW",
    description:
      "Industrial thermal insulation jackets for valves, pumps, turbines & exhaust systems.",
    url: "https://mshahrukhengineeringworks.com",
    siteName: "MSEW",
    locale: "en_PK",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "M. Shahrukh Engineering Works",
      url: "https://mshahrukhengineeringworks.com",
      logo: "https://mshahrukhengineeringworks.com/img/logo.png",
      description:
        "Manufacturer of high-temperature removable insulation jackets for industrial equipment.",
      sameAs: ["https://facebook.com/m.shahrukhengineering"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+923052646312",
        contactType: "customer service",
        areaServed: "PK",
        availableLanguage: ["English", "Urdu"],
      },
    },
    {
      "@type": "LocalBusiness",
      name: "M. Shahrukh Engineering Works",
      image: "https://mshahrukhengineeringworks.com/img/logo.png",
      url: "https://mshahrukhengineeringworks.com",
      telephone: "+923052646312",
      email: "hellomsew@gmail.com",
      priceRange: "$$",
      openingHours: "Mo-Sa 09:00-18:00",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot #55-C, 15th Commercial St, DHA Phase-2",
        addressLocality: "Karachi",
        addressRegion: "Sindh",
        postalCode: "75500",
        addressCountry: "PK",
      },
    },
    {
      "@type": "Product",
      name: "High-Temperature Removable Insulation Jackets",
      image:
        "https://mshahrukhengineeringworks.com/img/Insulation-jacket-manufacturer.webp",
      description:
        "Custom removable insulation jackets for valves, turbines, pumps, generators, exhaust systems, and industrial equipment to reduce heat loss and improve energy efficiency.",
      brand: {
        "@type": "Brand",
        name: "MSEW",
      },
      manufacturer: {
        "@type": "Organization",
        name: "M. Shahrukh Engineering Works",
      },
      category: "Industrial Thermal Insulation",
      offers: {
        "@type": "Offer",
        priceCurrency: "PKR",
        availability: "https://schema.org/InStock",
        url: "https://mshahrukhengineeringworks.com",
        seller: {
          "@type": "Organization",
          name: "M. Shahrukh Engineering Works",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What temperature can insulation jackets handle?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our insulation jackets are designed for high-temperature industrial applications and can be customized based on required temperature ranges.",
          },
        },
        {
          "@type": "Question",
          name: "Are insulation jackets removable and reusable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all jackets are fully removable and reusable, allowing easy maintenance access.",
          },
        },
        {
          "@type": "Question",
          name: "Which industries use insulation jackets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Used in power plants, refineries, chemical industries, textile mills, and manufacturing facilities.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide custom sizes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all insulation jackets are custom-made based on equipment size and requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How do insulation jackets save energy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They reduce heat loss from hot surfaces, lowering fuel consumption and improving efficiency.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h1 className="sr-only">
        Industrial Removable Insulation Jackets for Valves, Pumps, Turbines &
        Exhaust Systems in Pakistan
      </h1>

      <section className="hp-hero">
        <HeroSlider />
      </section>

      <IntroSection />

      <Section>
        <KeyBenefitsStrip />
      </Section>

      <Section>
        <ServicesSection />
      </Section>

      <Section>
        <ProductsSection />
      </Section>

      <Section>
        <MaterialConstruction />
      </Section>

      <Section>
        <ApplicationLinks />
      </Section>

      <Section>
        <IndustriesLinks />
      </Section>

      <Section>
        <AboutMSEW />
      </Section>

      <Section>
        <PakistanIndustrialCityPages />
      </Section>

      <Section>
        <HomePageContact />
      </Section>

      <Section>
        <PartnersSection />
      </Section>

      <Section>
        <FAQSection />
      </Section>
    </main>
  );
}
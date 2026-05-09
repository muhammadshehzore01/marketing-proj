// app/services/page.jsx
import Script from "next/script";
import ServicesClient from "./ServicesClient";

export const metadata = {
  title:
    "Services Pakistan | Removable Insulation Jackets & Expansion Bellows | MSEW",
  description:
    "MSEW provides removable insulation jackets, metallic expansion bellows, site measurement & installation support, rubber expansion bellows and thermal insulation material in Pakistan. Export support available worldwide.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title:
      "Services Pakistan | Removable Insulation Jackets & Expansion Bellows | MSEW",
    description:
      "Core services include removable insulation jackets manufacturer in Pakistan, metallic expansion bellows manufacturer in Pakistan, and site measurement & installation support. Other services include rubber expansion bellows and thermal insulation material.",
    url: "https://mshahrukhengineeringworks.com/services",
    type: "website",
    images: [
      {
        url: "https://mshahrukhengineeringworks.com/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "MSEW industrial insulation and expansion bellows services",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const servicesPageData = {
  hero: {
    badge: "Industrial Services in Pakistan",
    title: "Industrial Insulation Jackets & Expansion Bellows Services",
    description:
      "M. Shahrukh Engineering Works provides custom removable insulation jackets, metallic expansion bellows, site measurement support, rubber expansion bellows and thermal insulation material for industrial plants across Pakistan and export projects worldwide.",
    primaryCta: "Get Quote",
    secondaryCta: "WhatsApp Us",
  },

  coreServices: [
    {
      title: "Removable Insulation Jackets Manufacturer in Pakistan",
      description:
        "Custom high-temperature removable insulation jackets for valves, flanges, pumps, turbines, generators, exhaust bellows and other industrial hot surfaces.",
      points: [
        "Reduce heat loss",
        "Improve energy efficiency",
        "Removable and reusable",
        "Easy maintenance access",
        "Worker safety protection",
      ],
    },
    {
      title: "Metallic Expansion Bellows Manufacturer in Pakistan",
      description:
        "Custom metallic expansion bellows for exhaust systems, pipelines and industrial equipment where thermal movement, vibration and alignment compensation are required.",
      points: [
        "Custom sizes available",
        "Suitable for high-temperature applications",
        "Helps absorb movement and vibration",
        "Industrial-grade fabrication",
      ],
    },
    {
      title: "Site Measurement & Installation Support",
      description:
        "On-site measurement and installation support for accurate fitting, better performance and smooth maintenance access.",
      points: [
        "Site visit support",
        "Equipment measurement",
        "Custom fitting guidance",
        "Installation support across Pakistan",
      ],
    },
  ],

  otherServices: [
    {
      title: "Rubber Expansion Bellows in Pakistan",
      description:
        "Rubber expansion bellows and expansion joints for pipelines, utilities and industrial systems requiring vibration isolation and movement compensation.",
    },
    {
      title: "Thermal Insulation Material",
      description:
        "Industrial thermal insulation material supply including rockwool, ceramic wool and related insulation materials depending on project requirement.",
    },
  ],

  readyStock: {
    title: "Ready Stock Available",
    description:
      "Ready-made insulation jackets are available for selected Caterpillar and Jenbacher generator models.",
    models: {
      Caterpillar: ["G3516-A", "G3516-B", "G3516-C", "G3520-C"],
      Jenbacher: ["JGS320", "JGS420", "JGS616", "JGS620"],
    },
  },

  sectionsOrder:
    "Hero → 5 Services → Why Choose Us → Applications → Ready Stock → Industries → Process → Benefits → Gallery → FAQ → Contact CTA",
};

export default function ServicesPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "M. Shahrukh Engineering Works (MSEW)",
    image: "https://mshahrukhengineeringworks.com/logo.png",
    "@id": "https://mshahrukhengineeringworks.com",
    url: "https://mshahrukhengineeringworks.com",
    telephone: "+92 305 2646312",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Building 55-C, Shop # 01, 15 commerical street, DHA Phase 2 Ext.",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    description:
      "Manufacturer in Pakistan of removable high-temperature insulation jackets and metallic expansion bellows, with site measurement and installation support. Also supplies rubber expansion bellows and thermal insulation materials for industrial projects in Pakistan and export markets.",

    areaServed: [
      { "@type": "City", name: "Karachi" },
      { "@type": "City", name: "Lahore" },
      { "@type": "City", name: "Faisalabad" },
      { "@type": "City", name: "Islamabad" },
      { "@type": "City", name: "Multan" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Hub" },
      { "@type": "City", name: "Port Qasim" },
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "Worldwide" },
    ],

    serviceType: [
      "Removable Insulation Jackets Manufacturer in Pakistan",
      "Metallic Expansion Bellows Manufacturer in Pakistan",
      "Site Measurement & Installation Support",
      "Rubber Expansion Bellows in Pakistan",
      "Thermal Insulation Material",
    ],

    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Removable Insulation Jackets Manufacturer in Pakistan",
          description:
            "Custom removable high-temperature insulation jackets for industrial valves, flanges, pumps, turbines, generators, exhaust bellows and other hot surfaces.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Metallic Expansion Bellows Manufacturer in Pakistan",
          description:
            "Custom metallic expansion bellows for industrial exhaust systems, pipelines and equipment requiring movement and vibration compensation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Site Measurement & Installation Support",
          description:
            "Site measurement and installation support for accurate fitting of insulation jackets and industrial insulation solutions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rubber Expansion Bellows in Pakistan",
          description:
            "Rubber expansion bellows and joints for pipelines, utilities and industrial applications.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Thermal Insulation Material",
          description:
            "Supply of industrial thermal insulation materials including rockwool, ceramic wool and related materials.",
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are your core services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our core services are removable insulation jackets manufacturing in Pakistan, metallic expansion bellows manufacturing in Pakistan, and site measurement and installation support.",
        },
      },
      {
        "@type": "Question",
        name: "What other services do you provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Other services include rubber expansion bellows in Pakistan and thermal insulation material supply.",
        },
      },
      {
        "@type": "Question",
        name: "What equipment can you cover with removable insulation jackets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common applications include valves, flanges, pumps, turbines, generators, exhaust bellows, steam lines, heat exchangers and custom machinery hot surfaces.",
        },
      },
      {
        "@type": "Question",
        name: "Do you manufacture metallic expansion bellows in Pakistan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We manufacture custom metallic expansion bellows for thermal movement, vibration control and misalignment compensation in piping and exhaust systems.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide site measurement and installation support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide site measurement and installation support across Pakistan, and export project support on request.",
        },
      },
      {
        "@type": "Question",
        name: "Which generator insulation jackets are available in ready stock?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ready stock is available for Caterpillar G3516-A, G3516-B, G3516-C, G3520-C and Jenbacher JGS320, JGS420, JGS616, JGS620 models.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="msew-localbusiness"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <Script
        id="msew-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ServicesClient pageData={servicesPageData} />
    </>
  );
}
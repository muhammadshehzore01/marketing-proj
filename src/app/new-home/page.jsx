import AboutMSEW from '@/components/AboutMSEW'
import ApplicationLinks from '@/components/ApplicationLinks'
import Applications from '@/components/Applications'
import FAQSection from '@/components/faqsection'
import HeroSlider from '@/components/HeroSlider'
import HomePageContact from '@/components/HomePageContact'
import PakistanIndustrialCityPages from '@/components/industrialCityPages'
import Industries from '@/components/Industries'
import IndustryCardsSection from '@/components/IndustryCardsSection'
import IntroSection from '@/components/IntroSection'
import MaterialConstruction from '@/components/MaterialConstruction'
import PartnersSection from '@/components/PartnersSection'
import ProductsSection from '@/components/Products'
import React from 'react'

function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "M. Shahrukh Engineering Works",
        "url": "https://mshahrukhengineeringworks.com",
        "logo": "https://mshahrukhengineeringworks.com/img/logo.png",
        "description": "Manufacturer of high-temperature removable insulation jackets for industrial equipment.",
        "sameAs": [
          "https://facebook.com/m.shahrukhengineering"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+923052646312",
          "contactType": "customer service",
          "areaServed": "PK",
          "availableLanguage": ["English", "Urdu"]
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "M. Shahrukh Engineering Works",
        "image": "https://mshahrukhengineeringworks.com/img/logo.png",
        "url": "https://mshahrukhengineeringworks.com",
        "telephone": "+923052646312",
        "email": "hellomsew@gmail.com",
        "priceRange": "$$",
        "openingHours": "Mo-Sa 09:00-18:00",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot #55-C, 15th Commercial St, DHA Phase-2",
          "addressLocality": "Karachi",
          "addressRegion": "Sindh",
          "postalCode": "75500",
          "addressCountry": "PK"
        }
      },
      {
        "@type": "Product",
        "name": "High-Temperature Removable Insulation Jackets",
        "image": "https://mshahrukhengineeringworks.com/img/Insulation-jacket-manufacturer.webp",
        "description": "Custom removable insulation jackets for valves, turbines, pumps, generators, exhaust systems, and industrial equipment to reduce heat loss and improve energy efficiency.",
        "brand": {
          "@type": "Brand",
          "name": "MSEW"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "M. Shahrukh Engineering Works"
        },
        "category": "Industrial Thermal Insulation",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "PKR",
          "price": "0",
          "availability": "https://schema.org/InStock",
          "url": "https://mshahrukhengineeringworks.com",
          "seller": {
            "@type": "Organization",
            "name": "M. Shahrukh Engineering Works"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What temperature can insulation jackets handle?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our insulation jackets are designed for high-temperature industrial applications and can be customized based on required temperature ranges."
            }
          },
          {
            "@type": "Question",
            "name": "Are insulation jackets removable and reusable?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all jackets are fully removable and reusable, allowing easy maintenance access."
            }
          },
          {
            "@type": "Question",
            "name": "Which industries use insulation jackets?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Used in power plants, refineries, chemical industries, textile mills, and manufacturing facilities."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide custom sizes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all insulation jackets are custom-made based on equipment size and requirements."
            }
          },
          {
            "@type": "Question",
            "name": "How do insulation jackets save energy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "They reduce heat loss from hot surfaces, lowering fuel consumption and improving efficiency."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h1 className="sr-only">
        High-Temperature Removable Insulation Jackets for Industrial Equipment
      </h1>

      <ApplicationLinks/>
      <HeroSlider />
      <IndustryCardsSection/>
      <IntroSection />
      <ProductsSection />
      <MaterialConstruction />
      <Applications />
      <AboutMSEW />
      <PakistanIndustrialCityPages />
      <HomePageContact />
      <Industries />
      <PartnersSection />
      <FAQSection />
    </>
  )
}

export default Home
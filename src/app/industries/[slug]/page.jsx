import { notFound } from "next/navigation";
import { industries } from "@/lib/data/industries";

import IndustryHero from "@/components/industries/IndustryHero";
import IndustryOverview from "@/components/industries/IndustryOverview";
import IndustryChallenges from "@/components/industries/IndustryChallenges";
import IndustryApplications from "@/components/industries/IndustryApplications";
import IndustryTemperatureRanges from "@/components/industries/IndustryTemperatureRanges";
import IndustryMaterials from "@/components/industries/IndustryMaterials";
import IndustryROI from "@/components/industries/IndustryROI";
import IndustrySafety from "@/components/industries/IndustrySafety";
import IndustryManufacturingProcess from "@/components/industries/IndustryManufacturingProcess";
import IndustryExportSupply from "@/components/industries/IndustryExportSupply";
import IndustryFAQ from "@/components/industries/IndustryFAQ";
import IndustryCTA from "@/components/industries/IndustryCTA";

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export function generateMetadata({ params }) {
  const industry = industries.find((item) => item.slug === params.slug);

  if (!industry) return {};

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: {
      canonical: `https://mshahrukhengineeringworks.com/industries/${industry.slug}`
    },
  };
}

export default function IndustryPage({ params }) {
  const industry = industries.find((item) => item.slug === params.slug);

  if (!industry) {
    notFound();
  }

  return (
    <main>
      <IndustryHero industry={industry} />
      <IndustryOverview industry={industry} />
      <IndustryChallenges industry={industry} />
      <IndustryApplications industry={industry} />
      <IndustryTemperatureRanges industry={industry} />
      <IndustryMaterials industry={industry} />
      <IndustryROI industry={industry} />
      <IndustrySafety industry={industry} />
      <IndustryManufacturingProcess industry={industry} />
      <IndustryExportSupply industry={industry} />
      <IndustryFAQ industry={industry} />
      <IndustryCTA industry={industry} />
    </main>
  );
}
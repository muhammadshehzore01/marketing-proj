"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";

export default function SEOHead({ title, description, image }) {
  const siteName = "M. Shahrukh Engineering Works";
  const baseUrl = "https://mshahrukhengineeringworks.com";
  const pathname = usePathname();
  const fullUrl = `${baseUrl}${pathname || ""}`;
  const defaultImage = `${baseUrl}/img/Insulation-jacket-manufacturer.webp`;

  const metaTitle = title ? `${title} | ${siteName}` : siteName;
  const metaDescription =
    description ||
    "High-temperature removable insulation jackets for industrial equipment — energy-saving, durable & reusable.";

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />

      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Head>
  );
}
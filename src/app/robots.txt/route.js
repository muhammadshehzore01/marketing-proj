import { NextResponse } from "next/server";

const BASE_URL = "https://mshahrukhengineeringworks.com";

export const runtime = "nodejs";

export async function GET() {
  const robots = `
User-agent: *
Allow: /

# 🚀 Important SEO pages
Allow: /removable-insulation-jackets/
Allow: /products/
Allow: /services/
Allow: /blogs/

# 🚫 Block internal/private routes
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /private/

# 🔥 Sitemap location
Sitemap: ${BASE_URL}/sitemap.xml

# 🔥 Crawl delay (optional, safe for SEO)
Crawl-delay: 1
`;

  return new NextResponse(robots.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
// /home/shahrukh-eng/marketing-proj/next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mshahrukhengineeringworks.com",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "mshahrukhengineeringworks.com",
        pathname: "/**",
      },
    ],
  },

  experimental: {
    optimizeCss: true,
    forceSwcTransforms: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  async rewrites() {
    return [
      { source: "/sitemap.xml", destination: "/sitemap.xml" },
      { source: "/robots.txt", destination: "/robots.txt" },

      { source: "/api/:path*", destination: "http://127.0.0.1:8000/api/:path*" },
      { source: "/media/:path*", destination: "http://127.0.0.1:8000/media/:path*" },
    ];
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mshahrukhengineeringworks.com" }],
        destination: "https://mshahrukhengineeringworks.com/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [{ key: "Cache-Control", value: "no-store" }],
      },
      {
        source: "/api/:path*",
        headers: [{ key: "Cache-Control", value: "no-store" }],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: '<https://mshahrukhengineeringworks.com/>; rel="canonical"',
          },
          { key: "X-Robots-Tag", value: "index, follow" },
          {
            key: "Sitemap",
            value: "https://mshahrukhengineeringworks.com/sitemap.xml",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
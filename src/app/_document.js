import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Viewport for mobile & responsive scaling */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Preconnect to speed up DNS & font requests */}
        <link
          rel="preconnect"
          href="https://mshahrukhengineeringworks.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* ✅ Preload CSS to reduce render-blocking */}
        <link
          rel="preload"
          href="/_next/static/css/6e2f7bd180.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link
          rel="preload"
          href="/_next/static/css/e5d1744ed76cb479.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link
          rel="preload"
          href="/_next/static/css/45d4f6442d75f756.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />

        {/* ✅ Fallback if JS disabled */}
        <noscript>
          <link rel="stylesheet" href="/_next/static/css/6e2f7bd180.css" />
          <link rel="stylesheet" href="/_next/static/css/e5d1744ed76cb479.css" />
          <link rel="stylesheet" href="/_next/static/css/45d4f6442d75f756.css" />
        </noscript>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// /home/shahrukh-eng/marketing-proj/src/app/layout.js
import "./globals.css";
import ClientLayoutWrapper from "./ClientWrapper";
import AnalyticsLoader from "./AnalyticsLoader";
import { GeoProvider } from "@/context/GeoContext";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-primary",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={manrope.variable}
    >
      <head>
        {/* Google verification */}
        <meta
          name="google-site-verification"
          content="6lWuHk94ealDgOLC4eFM42rI4mXUl93-fzkqEZpXs0U"
        />
      </head>

      <body className={manrope.className}>
        {/* Delayed analytics */}
        <AnalyticsLoader />

        {/* Main App */}
        <GeoProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </GeoProvider>
      </body>
    </html>
  );
} 
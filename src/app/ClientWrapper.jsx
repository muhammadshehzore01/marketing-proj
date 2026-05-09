"use client";

import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* =====================================================
   🔥 LAZY LOAD WHATSAPP (SAFE SSR)
===================================================== */
const WhatsAppButton = dynamic(
  () => import("@/components/WhatsAppButton"),
  { ssr: false }
);

const GA_MEASUREMENT_ID = "G-FZXFRK9EBY";

/* =====================================================
   🚀 CLIENT LAYOUT WRAPPER
===================================================== */
export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname() || "/";

  /* =====================================================
     🔥 ROUTE STATE (SAFE + CLEAN)
  ====================================================== */
  const route = useMemo(() => {
    const hideLayout =
      pathname.startsWith("/login") ||
      pathname.startsWith("/admin");

    const isGeoRoute =
      pathname.includes("/removable-insulation-jackets");

    return {
      hideLayout,
      isGeoRoute,
    };
  }, [pathname]);

  const { hideLayout } = route;

  /* =====================================================
     🔥 GA TRACKING (SAFE FOR SSR + CLIENT HYDRATION)
  ====================================================== */
  useEffect(() => {
    if (hideLayout) return;
    if (typeof window === "undefined") return;

    try {
      // GA already loaded
      if (typeof window.gtag === "function") {
        window.gtag("config", GA_MEASUREMENT_ID, {
          page_path: pathname,
        });
      } else {
        // fallback queue (prevents crash)
        window.__pendingPagePath = pathname;
      }
    } catch (err) {
      console.error("GA tracking error:", err);
    }
  }, [pathname, hideLayout]);

  /* =====================================================
     🔥 SAFE RENDER LAYOUT
  ====================================================== */
  return (
    <>
      {/* NAVBAR */}
      {!hideLayout && <Navbar />}

      {/* MAIN CONTENT */}
      <main
        className="min-h-screen"
        style={{
          paddingTop: hideLayout ? 0 : "var(--nav-offset)",
          background: "var(--background-primary)",
          color: "var(--text-primary)",
        }}
      >
        {children}
      </main>

      {/* FOOTER */}
      {!hideLayout && <Footer />}

      {/* WHATSAPP FLOAT BUTTON */}
      {!hideLayout && <WhatsAppButton />}
    </>
  );
}
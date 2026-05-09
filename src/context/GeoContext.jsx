"use client";

import { createContext, useContext, useMemo } from "react";
import { usePathname } from "next/navigation";
import { ACTIVE_LOCATIONS as locations } from "@/lib/data/locations";

/* =====================================================
   🔥 SAFE DEFAULT CONTEXT (IMPORTANT FIX)
===================================================== */
const GeoContext = createContext({
  country: null,
  city: null,
  isGeo: false,
  level: "home",
});

/* =====================================================
   🔥 NORMALIZER
===================================================== */
function normalize(str) {
  return (str || "").toLowerCase().trim();
}

/* =====================================================
   🚀 GEO PROVIDER (SSR SAFE + BUILD SAFE)
===================================================== */
export function GeoProvider({ children }) {
  const pathname = usePathname() || "/";

  const geo = useMemo(() => {
    // safety guard (prevents build crash)
    if (!pathname || typeof pathname !== "string") {
      return {
        country: null,
        city: null,
        isGeo: false,
        level: "home",
      };
    }

    const parts = pathname.split("/").filter(Boolean);

    const base = parts?.[0];
    const countrySlug = parts?.[1];
    const citySlug = parts?.[2];

    // ❌ not geo route
    if (base !== "removable-insulation-jackets" || !countrySlug) {
      return {
        country: null,
        city: null,
        isGeo: false,
        level: "home",
      };
    }

    const country = locations?.[countrySlug] || null;

    if (!country) {
      return {
        country: null,
        city: null,
        isGeo: false,
        level: "home",
      };
    }

    let city = null;

    if (citySlug && Array.isArray(country.cities)) {
      city =
        country.cities.find(
          (c) => normalize(c?.name) === normalize(citySlug)
        ) || null;
    }

    return {
      country,
      city,
      isGeo: true,
      level: city ? "city" : "country",
    };
  }, [pathname]);

  return (
    <GeoContext.Provider value={geo}>
      {children}
    </GeoContext.Provider>
  );
}

/* =====================================================
   🔥 SAFE HOOK (NO NULL CRASH EVER)
===================================================== */
export function useGeo() {
  const context = useContext(GeoContext);

  // extra safety layer (prevents SSR edge crash)
  if (!context) {
    return {
      country: null,
      city: null,
      isGeo: false,
      level: "home",
    };
  }

  return context;
}
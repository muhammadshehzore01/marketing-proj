"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

// Google Analytics ID
const GA_MEASUREMENT_ID = "G-FZXFRK9EBY";

/**
 * Loads GA4 only after user interaction OR after a delay.
 * This keeps GTM/GA away from initial LCP render.
 */
export default function AnalyticsLoader() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;

    let loaded = false;

    const trigger = () => {
      if (loaded) return;
      loaded = true;
      setShouldLoad(true);
    };

    const events = ["scroll", "click", "touchstart", "keydown"];
    const opts = { passive: true, once: true };

    events.forEach((evt) => window.addEventListener(evt, trigger, opts));

    const timer = window.setTimeout(trigger, 6000);

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, trigger, opts));
      window.clearTimeout(timer);
    };
  }, [shouldLoad]);

  if (!shouldLoad) return null;

  return (
    <>
      <Script
        id="ga-script"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />

      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname
            });

            if (window.__pendingPagePath) {
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.__pendingPagePath
              });
              window.__pendingPagePath = null;
            }
          `,
        }}
      />
    </>
  );
}
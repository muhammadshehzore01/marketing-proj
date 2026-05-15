// // /home/shahrukh-eng/marketing-proj/src/app/services/[slug]/ServiceDetailClient.jsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ArrowUp, CheckCircle2, Phone } from "lucide-react";
// import { useState, useEffect, useMemo, useCallback, useRef } from "react";
// import { getImageUrl } from "@/lib/api";

// function Prose({ html }) {
//   if (!html) return null;
//   return (
//     <div
//       className="prose prose-lg max-w-none"
//       style={{ color: "var(--text-secondary)" }}
//       dangerouslySetInnerHTML={{ __html: html }}
//     />
//   );
// }

// function Card({ children, className = "" }) {
//   return (
//     <div
//       className={`rounded-3xl ${className}`}
//       style={{
//         border: "1px solid var(--border)",
//         background: "rgba(255,255,255,0.04)",
//         boxShadow: "0 18px 50px rgba(0,0,0,0.18)",
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// export default function ServiceDetailClient({ service: initialService }) {
//   const [service, setService] = useState(initialService);
//   const [showScroll, setShowScroll] = useState(false);
//   const [clientFetchError, setClientFetchError] = useState(null);
//   const [broken, setBroken] = useState({});

//   const name = service?.name || service?.title || "Industrial Service";
//   const tagline = service?.tagline || "";

//   const heroImage = service?.hero_image ? getImageUrl(service.hero_image) : null;
//   const galleryImages = Array.isArray(service?.gallery_images)
//     ? service.gallery_images
//     : [];

//   const slugRef = useRef(initialService?.slug);

//   useEffect(() => {
//     slugRef.current = initialService?.slug;
//   }, [initialService?.slug]);

//   useEffect(() => {
//     let ticking = false;

//     const onScroll = () => {
//       if (ticking) return;

//       ticking = true;
//       requestAnimationFrame(() => {
//         setShowScroll(window.scrollY > 420);
//         ticking = false;
//       });
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll();

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollToTop = useCallback(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   const whatsappHref = useMemo(() => {
//     const phone = "923052646312";
//     const msg = encodeURIComponent(
//       `Hello MSEW, I need a quotation for: ${name}. Please guide me on required details (dimensions, temperature, location).`
//     );

//     return `https://wa.me/${phone}?text=${msg}`;
//   }, [name]);

//   const gKey = useCallback((item, idx) => item?.id ?? item?.image ?? idx, []);

//   const gSrc = useCallback(
//     (item, idx) => {
//       const k = gKey(item, idx);
//       if (broken[k]) return "/placeholder-service.jpg";
//       return getImageUrl(item?.image) || "/placeholder-service.jpg";
//     },
//     [broken, gKey]
//   );

//   useEffect(() => {
//     const slug = initialService?.slug;
//     if (!slug || galleryImages.length > 0) return;

//     const controller = new AbortController();

//     async function fetchFreshService() {
//       try {
//         setClientFetchError(null);

//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/services/${slug}/`,
//           {
//             cache: "no-store",
//             headers: { "Cache-Control": "no-cache, no-store" },
//             signal: controller.signal,
//           }
//         );

//         if (!res.ok) throw new Error(`Client fetch failed: ${res.status}`);

//         const fresh = await res.json();

//         if (slugRef.current === slug) {
//           setService(fresh);
//         }
//       } catch (e) {
//         if (controller.signal.aborted) return;
//         setClientFetchError(e?.message || "Failed to fetch.");
//       }
//     }

//     fetchFreshService();

//     return () => controller.abort();
//   }, [initialService?.slug, galleryImages.length]);

//   return (
//     <section className="min-h-screen">
//       {/* HERO */}
//       <div
//         className="relative overflow-hidden"
//         style={{
//           borderBottom: "1px solid var(--border)",
//           background: "var(--background-secondary)",
//         }}
//       >
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(800px 400px at 20% 10%, rgba(0,168,232,0.22), transparent 60%), radial-gradient(700px 400px at 90% 0%, rgba(255,255,255,0.10), transparent 55%)",
//           }}
//           aria-hidden="true"
//         />

//         <div className="container relative py-10 sm:py-14">
//           <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-center">
//             <div className="lg:col-span-7">
//               <motion.h1
//                 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
//                 style={{ color: "var(--text-primary)" }}
//                 initial={{ opacity: 0, y: 22 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7 }}
//               >
//                 {name}
//               </motion.h1>

//               {tagline ? (
//                 <motion.p
//                   className="mt-4 max-w-2xl text-sm sm:text-base"
//                   style={{ color: "var(--text-secondary)" }}
//                   initial={{ opacity: 0, y: 18 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.1 }}
//                 >
//                   {tagline}
//                 </motion.p>
//               ) : null}

//               <div className="mt-6 flex flex-col sm:flex-row gap-3">
//                 <Link href="/get-quote" className="btn-primary w-full sm:w-auto">
//                   Request Quote
//                 </Link>

//                 <a
//                   href={whatsappHref}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="btn-secondary w-full sm:w-auto"
//                 >
//                   <span className="inline-flex items-center gap-2">
//                     <Phone className="h-4 w-4" />
//                     WhatsApp Technical Team
//                   </span>
//                 </a>
//               </div>
//             </div>

//             <div className="lg:col-span-5">
//               <Card className="p-3 sm:p-4">
//                 <div
//                   className="relative overflow-hidden rounded-2xl"
//                   style={{ background: "rgba(255,255,255,0.03)" }}
//                 >
//                   <div className="relative h-56 sm:h-64 md:h-72">
//                     {heroImage ? (
//                       <Image
//                         src={heroImage}
//                         alt={`${name} - service`}
//                         fill
//                         className="object-cover"
//                         priority
//                         sizes="(max-width: 1024px) 100vw, 40vw"
//                         quality={85}
//                       />
//                     ) : (
//                       <div
//                         className="h-full w-full"
//                         aria-hidden="true"
//                         style={{ background: "rgba(255,255,255,0.05)" }}
//                       />
//                     )}

//                     <div
//                       className="absolute inset-0"
//                       style={{
//                         background:
//                           "linear-gradient(135deg, rgba(0,168,232,0.18), rgba(0,0,0,0.15), rgba(0,0,0,0.35))",
//                       }}
//                       aria-hidden="true"
//                     />
//                   </div>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* BODY */}
//       <div className="section">
//         <div className="container">
//           <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
//             <div className="lg:col-span-8 space-y-8">
//               <Card className="p-6 sm:p-10">
//                 <Prose html={service?.content} />
//               </Card>

//               {clientFetchError ? (
//                 <Card className="p-6 sm:p-10">
//                   <p
//                     className="text-xs"
//                     style={{ color: "rgba(255,149,0,0.95)" }}
//                   >
//                     Fetch error: {clientFetchError}
//                   </p>
//                 </Card>
//               ) : null}
//             </div>

//             <aside className="lg:col-span-4 lg:sticky lg:top-20 lg:self-start space-y-4">
//               <Card className="p-6">
//                 <div className="flex items-start justify-between gap-3">
//                   <div>
//                     <h3
//                       className="text-base font-extrabold"
//                       style={{ color: "var(--text-primary)" }}
//                     >
//                       Quick inquiry
//                     </h3>

//                     <p
//                       className="mt-2 text-sm"
//                       style={{ color: "var(--text-secondary)" }}
//                     >
//                       Fast quote ke liye basics share kar dein.
//                     </p>
//                   </div>

//                   <span
//                     className="rounded-full px-3 py-1 text-xs font-semibold"
//                     style={{
//                       border: "1px solid var(--border)",
//                       background: "rgba(0,168,232,0.10)",
//                       color: "var(--text-primary)",
//                     }}
//                   >
//                     Response fast
//                   </span>
//                 </div>

//                 <div className="mt-4 space-y-3">
//                   <a
//                     href={whatsappHref}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="btn-primary w-full"
//                   >
//                     <span className="inline-flex items-center gap-2">
//                       <Phone className="h-4 w-4" />
//                       WhatsApp Now
//                     </span>
//                   </a>

//                   <Link href="/get-quote" className="btn-secondary w-full">
//                     Request Quote →
//                   </Link>
//                 </div>

//                 <div
//                   className="mt-5 rounded-2xl p-4"
//                   style={{
//                     border: "1px solid var(--border)",
//                     background: "rgba(255,255,255,0.04)",
//                   }}
//                 >
//                   <p
//                     className="text-xs font-bold"
//                     style={{ color: "var(--text-primary)" }}
//                   >
//                     Share these 4 things:
//                   </p>

//                   <ul
//                     className="mt-2 space-y-2 text-sm"
//                     style={{ color: "var(--text-secondary)" }}
//                   >
//                     <li className="flex gap-2">
//                       <CheckCircle2
//                         className="h-4 w-4 mt-0.5"
//                         style={{ color: "var(--accent)" }}
//                       />
//                       Equipment type (valve / flange / exhaust / etc.)
//                     </li>

//                     <li className="flex gap-2">
//                       <CheckCircle2
//                         className="h-4 w-4 mt-0.5"
//                         style={{ color: "var(--accent)" }}
//                       />
//                       Dimensions (OD/length/height)
//                     </li>

//                     <li className="flex gap-2">
//                       <CheckCircle2
//                         className="h-4 w-4 mt-0.5"
//                         style={{ color: "var(--accent)" }}
//                       />
//                       Operating temperature range
//                     </li>

//                     <li className="flex gap-2">
//                       <CheckCircle2
//                         className="h-4 w-4 mt-0.5"
//                         style={{ color: "var(--accent)" }}
//                       />
//                       Location & environment (indoor/outdoor)
//                     </li>
//                   </ul>
//                 </div>

//                 <div
//                   className="mt-5 rounded-2xl p-4"
//                   style={{
//                     border: "1px solid var(--border)",
//                     background: "rgba(255,255,255,0.04)",
//                   }}
//                 >
//                   <p
//                     className="text-xs font-bold"
//                     style={{ color: "var(--text-primary)" }}
//                   >
//                     Best for:
//                   </p>

//                   <p
//                     className="mt-2 text-sm"
//                     style={{ color: "var(--text-secondary)" }}
//                   >
//                     Power plants • Refineries • Chemical • Textile • Plastic
//                   </p>
//                 </div>
//               </Card>

//               <Card className="p-6">
//                 <h3
//                   className="text-base font-extrabold"
//                   style={{ color: "var(--text-primary)" }}
//                 >
//                   Need instant guidance?
//                 </h3>

//                 <p
//                   className="mt-2 text-sm"
//                   style={{ color: "var(--text-secondary)" }}
//                 >
//                   Send 2–3 photos on WhatsApp. Hum sizing + material recommend
//                   kar dein ge.
//                 </p>

//                 <a
//                   href={whatsappHref}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="btn-secondary w-full mt-4"
//                 >
//                   <span className="inline-flex items-center gap-2">
//                     <Phone className="h-4 w-4" />
//                     WhatsApp Photos
//                   </span>
//                 </a>
//               </Card>

//               {galleryImages.length > 0 ? (
//                 <Card className="p-6">
//                   <h3
//                     className="text-base font-extrabold mb-4"
//                     style={{ color: "var(--text-primary)" }}
//                   >
//                     Project Gallery
//                   </h3>

//                   <div className="grid gap-4">
//                     {galleryImages.map((it, idx) => {
//                       const k = gKey(it, idx);

//                       return (
//                         <figure
//                           key={k}
//                           className="relative overflow-hidden rounded-2xl"
//                           style={{
//                             border: "1px solid var(--border)",
//                             background: "rgba(255,255,255,0.04)",
//                           }}
//                         >
//                           <div className="relative h-52">
//                             <Image
//                               src={gSrc(it, idx)}
//                               alt={
//                                 it?.caption || `${name} reference ${idx + 1}`
//                               }
//                               fill
//                               className="object-cover transition-transform duration-500 hover:scale-[1.05]"
//                               sizes="(max-width: 1024px) 100vw, 30vw"
//                               quality={82}
//                               loading="lazy"
//                               onError={() =>
//                                 setBroken((p) => ({ ...p, [k]: true }))
//                               }
//                             />
//                           </div>

//                           {it?.caption ? (
//                             <figcaption
//                               className="p-3 text-xs"
//                               style={{ color: "var(--text-secondary)" }}
//                             >
//                               {it.caption}
//                             </figcaption>
//                           ) : null}
//                         </figure>
//                       );
//                     })}
//                   </div>
//                 </Card>
//               ) : null}
//             </aside>
//           </div>
//         </div>
//       </div>

//       <motion.button
//         onClick={scrollToTop}
//         className="fixed bottom-6 right-6 z-50 rounded-full p-3 sm:p-4 shadow-xl"
//         style={{
//           background: "rgba(255,255,255,0.10)",
//           border: "1px solid var(--border)",
//           color: "var(--text-primary)",
//         }}
//         initial={{ opacity: 0, scale: 0 }}
//         animate={
//           showScroll ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
//         }
//         transition={{ duration: 0.35 }}
//         aria-label="Scroll to top"
//       >
//         <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
//       </motion.button>
//     </section>
//   );
// }



// /home/shahrukh-eng/marketing-proj/src/app/services/[slug]/ServiceDetailClient.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, CheckCircle2, Phone } from "lucide-react";
import { useState, useEffect, useMemo, useCallback } from "react";
import { getImageUrl } from "@/lib/api";

/* ================= UI HELPERS ================= */

function Prose({ html }) {
  if (!html) return null;
  return (
    <div
      className="prose prose-lg max-w-none"
      style={{ color: "var(--text-secondary)" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl ${className}`}
      style={{
        border: "1px solid var(--border)",
        background: "rgba(255,255,255,0.04)",
        boxShadow: "0 18px 50px rgba(0,0,0,0.18)",
      }}
    >
      {children}
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function ServiceDetailClient({ service: initialService }) {
  const [service] = useState(initialService); // 🔒 LOCKED (no override allowed)
  const [showScroll, setShowScroll] = useState(false);
  const [broken, setBroken] = useState({});

  const name = service?.name || service?.title || "Industrial Service";
  const tagline = service?.tagline || "";

  const heroImage = service?.hero_image
    ? getImageUrl(service.hero_image)
    : null;

  const galleryImages = Array.isArray(service?.gallery_images)
    ? service.gallery_images
    : [];

  /* ================= SCROLL BUTTON ================= */

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 420);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  /* ================= WHATSAPP ================= */

  const whatsappHref = useMemo(() => {
    const phone = "923052646312";
    const msg = encodeURIComponent(
      `Hello MSEW, I need a quotation for: ${name}. Please guide me on required details (dimensions, temperature, location).`
    );

    return `https://wa.me/${phone}?text=${msg}`;
  }, [name]);

  /* ================= GALLERY HELPERS ================= */

  const gKey = useCallback((item, idx) => item?.id ?? item?.image ?? idx, []);

  const gSrc = useCallback(
    (item) => {
      const src = getImageUrl(item?.image);
      return src || "/placeholder-service.jpg";
    },
    []
  );

  /* ================= UI ================= */

  return (
    <section className="min-h-screen">
      {/* HERO */}
      <div
        className="relative overflow-hidden"
        style={{
          borderBottom: "1px solid var(--border)",
          background: "var(--background-secondary)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(800px 400px at 20% 10%, rgba(0,168,232,0.22), transparent 60%), radial-gradient(700px 400px at 90% 0%, rgba(255,255,255,0.10), transparent 55%)",
          }}
        />

        <div className="container relative py-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-center">

            {/* LEFT */}
            <div className="lg:col-span-7">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
                style={{ color: "var(--text-primary)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {name}
              </motion.h1>

              {tagline && (
                <p
                  className="mt-4 max-w-2xl text-sm sm:text-base"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {tagline}
                </p>
              )}

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href="/get-quote" className="btn-primary w-full sm:w-auto">
                  Request Quote
                </Link>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary w-full sm:w-auto"
                >
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-5">
              <Card className="p-4">
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden">
                  {heroImage ? (
                    <Image
                      src={heroImage}
                      alt={name}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="h-full w-full bg-white/5" />
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="section">
        <div className="container grid lg:grid-cols-12 gap-10">

          {/* CONTENT */}
          <div className="lg:col-span-8 space-y-8">
            <Card className="p-6 sm:p-10">
              <Prose html={service?.content} />
            </Card>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 space-y-4">

            <Card className="p-6">
              <h3 className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>
                Quick Inquiry
              </h3>

              <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                Get fast quotation support.
              </p>

              <a href={whatsappHref} className="btn-primary w-full mt-4">
                WhatsApp Now
              </a>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold">Best For</h3>
              <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                Power plants • Refineries • Chemical • Industrial Units
              </p>
            </Card>

            {/* GALLERY */}
            {galleryImages.length > 0 && (
              <Card className="p-6">
                <h3 className="font-bold mb-4">Gallery</h3>

                <div className="space-y-4">
                  {galleryImages.map((img, idx) => (
                    <div key={gKey(img, idx)} className="relative h-48 rounded-xl overflow-hidden">
                      <Image
                        src={gSrc(img)}
                        alt="service image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </aside>
        </div>
      </div>

      {/* SCROLL TOP */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full shadow-xl"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid var(--border)",
          }}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </section>
  );
}
// "use client";

// import { useEffect, useState, useMemo } from "react";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import Link from "next/link";
// import { getImageUrl } from "@/lib/api";
// import { getHeroImage } from "@/lib/seo/imageResolver";
 
// const ChevronLeft = dynamic(
//   () => import("lucide-react").then((mod) => mod.ChevronLeft),
//   { ssr: false }
// );

// const ChevronRight = dynamic(
//   () => import("lucide-react").then((mod) => mod.ChevronRight),
//   { ssr: false }
// );

// const AUTOPLAY = 5000;

// function Dot({ active }) {
//   return (
//     <span
//       className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
//         active ? "bg-white scale-125" : "bg-white/40"
//       }`}
//     />
//   );
// }

// export default function HeroSlider({ seoData = null }) {
//   const [slides, setSlides] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [paused, setPaused] = useState(false);

//   const isSEOPage = Boolean(seoData);

//   useEffect(() => {
//     if (isSEOPage) return;

//     let ignore = false;

//     async function loadSlides() {
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/hero-slides/`
//         );

//         if (!res.ok) return;

//         const data = await res.json();
//         if (ignore) return;

//         const list = Array.isArray(data) ? data : [];

//         setSlides(
//           list.map((slide, i) => ({
//             id: slide.id || i,
//             title: slide.title,
//             subtitle: slide.subtitle,
//             image: getImageUrl(slide.image),
//           }))
//         );
//       } catch {}
//     }

//     loadSlides();

//     return () => {
//       ignore = true;
//     };
//   }, [isSEOPage]);

//   useEffect(() => {
//     if (!slides.length || isSEOPage || paused) return;

//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, AUTOPLAY);

//     return () => clearInterval(interval);
//   }, [slides.length, paused, isSEOPage]);

//   const activeSlide = slides[index];

//   const fallbackImage = "/img/Insulation-jacket-manufacturer.webp";
//   const fallbackTitle = "Industrial Insulation Solutions";

//   const image = useMemo(() => {
//     if (isSEOPage) {
//       return getHeroImage({
//         slides,
//         country: seoData?.country,
//         city: seoData?.city,
//       });
//     }

//     return activeSlide?.image || fallbackImage;
//   }, [isSEOPage, slides, seoData, activeSlide]);

//   const title = isSEOPage
//     ? seoData?.title
//     : activeSlide?.title || fallbackTitle;

//   const subtitle = isSEOPage
//     ? seoData?.overview?.content?.[0] || seoData?.demand || ""
//     : activeSlide?.subtitle || "";

//   return (
//     <section className="relative overflow-hidden text-white">
//       <div
//         className="relative h-[520px] sm:h-[560px] md:h-auto md:aspect-[21/9]"
//         onMouseEnter={() => setPaused(true)}
//         onMouseLeave={() => setPaused(false)}
//       >
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover"
//           priority
//           fetchPriority="high"
//           preload
//           sizes="100vw"
//           quality={65}
//         />

//         <div className="absolute inset-0 bg-black/40" />

//         <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
//           <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>

//           {subtitle && (
//             <p className="mt-4 max-w-2xl text-white/80">{subtitle}</p>
//           )}

//           {!isSEOPage && (
//             <div className="mt-6 flex gap-4">
//               <Link
//                 href="/get-quote"
//                 className="bg-white text-black px-5 py-3 rounded-xl font-semibold"
//               >
//                 Get Quote
//               </Link>

//               <Link
//                 href="/products"
//                 className="border border-white px-5 py-3 rounded-xl"
//               >
//                 Products
//               </Link>
//             </div>
//           )}
//         </div>

//         {!isSEOPage && slides.length > 1 && (
//           <>
//             <div className="absolute bottom-6 w-full flex justify-center gap-2">
//               {slides.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setIndex(i)}
//                   aria-label={`Go to slide ${i + 1}`}
//                 >
//                   <Dot active={i === index} />
//                 </button>
//               ))}
//             </div>

//             <button
//               onClick={() =>
//                 setIndex((prev) => (prev - 1 + slides.length) % slides.length)
//               }
//               className="absolute left-4 top-1/2 -translate-y-1/2"
//               aria-label="Previous slide"
//             >
//               <ChevronLeft />
//             </button>

//             <button
//               onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
//               className="absolute right-4 top-1/2 -translate-y-1/2"
//               aria-label="Next slide"
//             >
//               <ChevronRight />
//             </button>
//           </>
//         )}
//       </div>
//     </section>
//   );
// }

// marketing-proj/src/components/HeroSlider.jsx
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { getImageUrl } from "@/lib/api";
import { getHeroImage } from "@/lib/seo/imageResolver";

const ChevronLeft = dynamic(
  () => import("lucide-react").then((mod) => mod.ChevronLeft),
  { ssr: false }
);

const ChevronRight = dynamic(
  () => import("lucide-react").then((mod) => mod.ChevronRight),
  { ssr: false }
);

const AUTOPLAY = 5000;

function Dot({ active }) {
  return (
    <span
      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
        active ? "bg-white scale-125" : "bg-white/40"
      }`}
    />
  );
}

export default function HeroSlider({ seoData = null }) {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const isSEOPage = Boolean(seoData);

  /* ================= LOAD HOMEPAGE SLIDES ================= */
  useEffect(() => {
    if (isSEOPage) return;

    let ignore = false;

    async function loadSlides() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/hero-slides/`
        );

        if (!res.ok) return;

        const data = await res.json();
        if (ignore) return;

        const list = Array.isArray(data) ? data : [];

        setSlides(
          list.map((slide, i) => ({
            id: slide.id || i,
            title: slide.title,
            subtitle: slide.subtitle,
            image: getImageUrl(slide.image),
          }))
        );
      } catch {}
    }

    loadSlides();

    return () => {
      ignore = true;
    };
  }, [isSEOPage]);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    if (!slides.length || isSEOPage || paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY);

    return () => clearInterval(interval);
  }, [slides.length, paused, isSEOPage]);

  const activeSlide = slides[index];

  const fallbackImage = "/img/Insulation-jacket-manufacturer.webp";
  const fallbackTitle = "Industrial Insulation Solutions";

  /* =====================================================
     🔥 FIX 1: REMOVE GEO OVERRIDE COMPLETELY
  ===================================================== */

  const title = isSEOPage
    ? seoData?.title || fallbackTitle
    : activeSlide?.title || fallbackTitle;

  const subtitle = isSEOPage
    ? seoData?.overview?.content?.[0] || ""
    : activeSlide?.subtitle || "";

  /* =====================================================
     🔥 FIX 2: FIX IMAGE LOGIC
  ===================================================== */
  const image = isSEOPage
    ? getHeroImage({
        slides,
        country: seoData?.country,
        city: seoData?.city,
      }) || fallbackImage
    : activeSlide?.image || fallbackImage;

  return (
    <section className="relative overflow-hidden text-white">
      <div
        className="relative h-[520px] sm:h-[560px] md:h-auto md:aspect-[21/9]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={70}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
          <h1 className="text-3xl md:text-6xl font-bold">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 max-w-2xl text-white/80">
              {subtitle}
            </p>
          )}

          {!isSEOPage && (
            <div className="mt-6 flex gap-4">
              <Link
                href="/get-quote"
                className="bg-white text-black px-5 py-3 rounded-xl font-semibold"
              >
                Get Quote
              </Link>

              <Link
                href="/products"
                className="border border-white px-5 py-3 rounded-xl"
              >
                Products
              </Link>
            </div>
          )}
        </div>

        {!isSEOPage && slides.length > 1 && (
          <>
            <div className="absolute bottom-6 w-full flex justify-center gap-2">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)}>
                  <Dot active={i === index} />
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setIndex((prev) => (prev - 1 + slides.length) % slides.length)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() =>
                setIndex((prev) => (prev + 1) % slides.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <ChevronRight />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
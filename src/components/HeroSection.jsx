"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
       
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img/Insulation-jacket-manufacturer.webp"
          alt="Industrial Insulation Jackets Pakistan"
          fill
          className="object-cover opacity-60"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-24 md:py-36">
        
        {/* Headline */}
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          High-Temperature Removable Insulation Jackets
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
          Reduce heat loss • Save fuel cost • Improve worker safety • Increase industrial efficiency
        </p>

        {/* Trust Line */}
        <p className="mt-4 text-sm md:text-base text-white/70">
          Pakistan Manufacturer | Exporting Worldwide | Custom Engineering Solutions
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          
          <Link
            href="/get-quote"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold text-center hover:bg-gray-200 transition"
          >
            Get Instant Quote
          </Link>

          <a
            href="https://wa.me/923052646312"
            target="_blank"
            className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-green-600 transition"
          >
            WhatsApp Engineer
          </a>

          <Link
            href="/products"
            className="border border-white px-6 py-3 rounded-xl text-center hover:bg-white hover:text-black transition"
          >
            View Products
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-white/80">
          <div>✓ High Temperature Resistant</div>
          <div>✓ Energy Saving Solution</div>
          <div>✓ Custom Manufacturing</div>
          <div>✓ Export Quality Packaging</div>
        </div>
      </div>
    </section>
  );
}





// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState, useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const AUTOPLAY_INTERVAL = 4000;

// export default function HeroSection() {
//   const [slides, setSlides] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const intervalRef = useRef(null);

//   // Fetch Hero Slides from Backend
//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/hero-slides/`)
//       .then((res) => res.json())
//       .then((data) => {
//         const formatted = Array.isArray(data) ? data : [];
//         setSlides(formatted);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch hero slides:", err);
//         // Fallback Slide
//         setSlides([{
//           id: 1,
//           title: "High-Temperature Removable Insulation Jackets",
//           subtitle: "Reduce energy loss by up to 40%. Save fuel cost. Protect your workforce. Boost efficiency.",
//           image: "/img/hero-insulation-jacket-desktop.webp",
//           button_text: "Get Instant Quote",
//           button_link: "/get-quote"
//         }]);
//       });
//   }, []);

//   // Auto Play Logic
//   useEffect(() => {
//     if (slides.length <= 1) return;

//     intervalRef.current = setInterval(() => {
//       if (!isPaused) {
//         setCurrentIndex((prev) => (prev + 1) % slides.length);
//       }
//     }, AUTOPLAY_INTERVAL);

//     return () => clearInterval(intervalRef.current);
//   }, [slides.length, isPaused]);

//   const activeSlide = slides[currentIndex] || {};

//   const getImageSrc = (imgPath) => {
//     if (!imgPath) return "/img/hero-insulation-jacket-desktop.webp";
//     return imgPath.startsWith("http") ? imgPath : `/img/${imgPath}`;
//   };

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           className="absolute inset-0"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           {/* Background Image */}
//           <Image
//             src={getImageSrc(activeSlide.image)}
//             alt={activeSlide.title || "Insulation Jackets Manufacturer Pakistan"}
//             fill
//             className="object-cover"
//             priority
//             quality={85}
//             sizes="100vw"
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40" />
//           <div className="absolute inset-0 bg-[radial-gradient(at_center,#000000aa_30%,transparent)]" />

//           {/* Content */}
//           <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
//             <div className="max-w-4xl">
              
//               {/* Animated Title */}
//               <motion.h1
//                 initial={{ opacity: 0, y: 60 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.9, ease: "easeOut" }}
//                 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter"
//               >
//                 {activeSlide.title}
//               </motion.h1>

//               {/* Animated Subtitle */}
//               <motion.p
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//                 className="mt-6 text-xl md:text-2xl text-white/90 max-w-2xl"
//               >
//                 {activeSlide.subtitle}
//               </motion.p>

//               {/* CTA Buttons */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7 }}
//                 className="mt-10 flex flex-col sm:flex-row gap-4"
//               >
//                 <Link
//                   href={activeSlide.button_link || "/get-quote"}
//                   className="bg-white hover:bg-orange-500 hover:text-white text-black px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 group"
//                 >
//                   {activeSlide.button_text || "Get Instant Quote"}
//                   <span className="group-hover:translate-x-1 transition">→</span>
//                 </Link>

//                 <a
//                   href="https://wa.me/923052646312"
//                   target="_blank"
//                   className="bg-green-600 hover:bg-green-500 px-8 py-4 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-3"
//                 >
//                   💬 WhatsApp Our Engineer Now
//                 </a>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Dots Navigation */}
//       {slides.length > 1 && (
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
//           {slides.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentIndex(idx)}
//               className={`h-3 w-3 rounded-full transition-all duration-300 ${
//                 idx === currentIndex ? "bg-white scale-125" : "bg-white/40"
//               }`}
//               aria-label={`Go to slide ${idx + 1}`}
//             />
//           ))}
//         </div>
//       )}

//       {/* Arrow Navigation */}
//       {slides.length > 1 && (
//         <>
//           <button
//             onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
//             className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 p-3 rounded-full transition-all"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft size={28} />
//           </button>

//           <button
//             onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
//             className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 p-3 rounded-full transition-all"
//             aria-label="Next slide"
//           >
//             <ChevronRight size={28} />
//           </button>
//         </>
//       )}

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/60 text-xs tracking-widest">
//         SCROLL TO EXPLORE
//         <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/40 to-transparent mt-2" />
//       </div>
//     </section>
//   );
// }
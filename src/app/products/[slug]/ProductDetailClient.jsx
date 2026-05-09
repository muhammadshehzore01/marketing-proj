// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import ProductQuote from "@/components/ProductQuote";
// import { getImageUrl } from "@/lib/api";
// import { useEffect, useRef, useState } from "react";
// import { ChevronRight } from "lucide-react";
 
// export default function ProductDetailClient({ product, moreProducts }) {
//   const galleryImages = Array.isArray(product.gallery_images) ? product.gallery_images : [];
//   const displayImages = galleryImages.map((item) => ({
//     src: getImageUrl(item.image || item),
//     alt: item.caption || `${product.name} - gallery image`,
//     caption: item.caption || null,
//   }));

//   const sliderRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide gallery
//   useEffect(() => {
//     if (displayImages.length <= 1) return;
//     const interval = setInterval(
//       () => setCurrentIndex((prev) => (prev + 1) % displayImages.length),
//       5000
//     );
//     return () => clearInterval(interval);
//   }, [displayImages.length]);

//   // Smooth scroll to active slide
//   useEffect(() => {
//     if (sliderRef.current) {
//       const slideWidth = sliderRef.current.offsetWidth;
//       sliderRef.current.scrollTo({ left: currentIndex * slideWidth, behavior: "smooth" });
//     }
//   }, [currentIndex]);

//   return (
//     <div
//       className="min-h-screen"
//       style={{
//         background: "var(--background-primary)",
//         color: "var(--text-primary)",
//         paddingTop: "var(--nav-offset)",
//       }}
//     >
//       {/* ROW 1: Slider + Title */}
//       <section className="container mx-auto px-6 py-10 md:py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
//           {/* Slider */}
//           <div
//             className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-3xl shadow-2xl order-1 lg:order-none"
//             style={{
//               background: "var(--surface)",
//               border: "1px solid var(--border)",
//             }}
//           >
//             {displayImages.length > 0 ? (
//               <div
//                 ref={sliderRef}
//                 className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
//               >
//                 {displayImages.map((img, idx) => (
//                   <div key={idx} className="w-full h-full flex-shrink-0 snap-center relative">
//                     <Image
//                       src={img.src}
//                       alt={img.alt}
//                       fill
//                       className="object-contain p-4 sm:p-6 md:p-8"
//                       priority={idx === 0}
//                       sizes="(max-width: 1024px) 100vw, 50vw"
//                       quality={85}
//                       loading={idx === 0 ? "eager" : "lazy"}
//                     />
//                     {img.caption && (
//                       <div className="absolute bottom-6 left-4 right-4 md:left-8 md:right-8 bg-black/65 backdrop-blur-md text-white px-5 py-3 rounded-lg text-center text-sm md:text-base font-medium shadow-lg">
//                         {img.caption}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div
//                 className="w-full h-full flex items-center justify-center"
//                 style={{ background: "var(--surface)" }}
//               >
//                 <div className="text-center px-6">
//                   <h2
//                     className="text-3xl md:text-5xl font-bold font-poppins"
//                     style={{ color: "var(--text-primary)" }}
//                   >
//                     Gallery Coming Soon
//                   </h2>
//                   <p
//                     className="mt-4 text-lg md:text-xl"
//                     style={{ color: "var(--text-secondary)" }}
//                   >
//                     High-quality product images will be added shortly.
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Title + Tagline */}
//           <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-none space-y-6 lg:space-y-8">
//             <motion.h1
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins"
//               style={{ color: "var(--text-primary)" }}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               {product.name}
//             </motion.h1>

//             {product.tagline && (
//               <motion.p
//                 className="text-lg sm:text-xl md:text-2xl max-w-3xl"
//                 style={{ color: "var(--text-secondary)" }}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//               >
//                 {product.tagline}
//               </motion.p>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ROW 2: Description */}
//       <section className="container mx-auto px-6 py-10 md:py-12">
//         <motion.div
//           className="rounded-3xl p-8 md:p-12 shadow-lg prose prose-lg max-w-none mx-auto"
//           style={{
//             background: "var(--surface)",
//             border: "1px solid var(--border)",
//             color: "var(--text-secondary)",
//           }}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           {product?.description ? (
//             <div dangerouslySetInnerHTML={{ __html: product.description }} />
//           ) : (
//             <p style={{ textAlign: "center", color: "var(--text-muted)", fontStyle: "italic" }}>
//               No description available.
//             </p>
//           )}
//         </motion.div>
//       </section>

//       {/* ROW 3: Quote + Hero */}
//       <section className="container mx-auto px-6 py-12 md:py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
//           {/* Quote Form */}
//           <motion.div
//             className="rounded-3xl p-8 md:p-10 shadow-2xl order-2 lg:order-1"
//             style={{
//               background: "var(--background-secondary)",
//               border: "1px solid var(--border)",
//               color: "var(--text-primary)",
//             }}
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2
//               className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left font-poppins"
//               style={{ color: "var(--text-primary)" }}
//             >
//               Ready for a Custom Quote?
//             </h2>

//             <ProductQuote productTitle={product.name} serviceName={null} />

//             <div className="mt-8 text-center lg:text-left">
//               <Link href="/get-quote">
//                 <motion.button
//                   className="inline-flex items-center px-8 py-4 font-bold text-lg rounded-xl shadow-lg transition transform hover:scale-105"
//                   style={{
//                     background: "var(--accent)",
//                     color: "#062033",
//                   }}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Get Quote Now <ChevronRight className="ml-2" />
//                 </motion.button>
//               </Link>
//             </div>
//           </motion.div>

//           {/* Hero Image */}
//           <motion.div
//             className="relative mx-auto w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-2xl order-1 lg:order-2"
//             style={{
//               background: "var(--surface)",
//               border: "8px solid rgba(255,255,255,0.10)",
//             }}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.9 }}
//           >
//             <Image
//               src={getImageUrl(product.hero_image || "/placeholder.png")}
//               alt={`${product.name} - hero`}
//               fill
//               className="object-contain p-6"
//               sizes="(max-width: 1024px) 80vw, 40vw"
//               quality={85}
//               priority
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* More Products */}
//       {moreProducts.length > 0 && (
//         <section
//           className="container mx-auto px-6 py-24"
//           style={{ background: "var(--background-secondary)" }}
//         >
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins"
//             style={{ color: "var(--text-primary)" }}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             Explore More Products
//           </motion.h2>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {moreProducts.map((p, index) => {
//               const moreImg = getImageUrl(p.hero_image) || "/placeholder.png";
//               return (
//                 <motion.div
//                   key={p.slug}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
//                   style={{
//                     background: "var(--surface)",
//                     border: "1px solid var(--border)",
//                   }}
//                 >
//                   <div className="relative h-60" style={{ background: "rgba(255,255,255,0.04)" }}>
//                     <Image src={moreImg} alt={p.name} fill className="object-contain p-4" />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold mb-2 font-poppins" style={{ color: "var(--text-primary)" }}>
//                       {p.name}
//                     </h3>
//                     <p className="text-sm line-clamp-2 mb-4" style={{ color: "var(--text-secondary)" }}>
//                       {p.meta_description || p.tagline || "High quality engineering solution"}
//                     </p>
//                     <Link
//                       href={`/products/${p.slug}`}
//                       className="font-semibold transition inline-flex items-center"
//                       style={{ color: "var(--accent)" }}
//                     >
//                       View Details <ChevronRight className="ml-1" />
//                     </Link>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }




"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import ProductQuote from "@/components/ProductQuote";
import { getImageUrl } from "@/lib/api";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronRight, Home } from "lucide-react";

export default function ProductDetailClient({ product, moreProducts = [] }) {
  const galleryImages = Array.isArray(product.gallery_images)
    ? product.gallery_images
    : [];

  const displayImages = useMemo(
    () =>
      galleryImages.map((item) => ({
        src: getImageUrl(item.image || item),
        alt:
          item.caption ||
          `${product.name} removable insulation jacket by MSEW`,
        caption: item.caption || null,
      })),
    [galleryImages, product.name]
  );

  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide gallery
  useEffect(() => {
    if (displayImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [displayImages.length]);

  // Smooth scroll to active slide
  useEffect(() => {
    if (!sliderRef.current) return;

    const slideWidth = sliderRef.current.offsetWidth;
    sliderRef.current.scrollTo({
      left: currentIndex * slideWidth,
      behavior: "smooth",
    });
  }, [currentIndex]);

  const heroImage = getImageUrl(product.hero_image || "/placeholder.png");

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--background-primary)",
        color: "var(--text-primary)",
        paddingTop: "var(--nav-offset)",
      }}
    >
      {/* Breadcrumb */}
      <nav
        className="container mx-auto px-6 pt-6 text-sm"
        aria-label="Breadcrumb"
      >
        <ol
          className="flex flex-wrap items-center gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:underline"
              style={{ color: "var(--accent)" }}
            >
              <Home size={15} />
              Home
            </Link>
          </li>

          <li>/</li>

          <li>
            <Link
              href="/products"
              className="hover:underline"
              style={{ color: "var(--accent)" }}
            >
              Products
            </Link>
          </li>

          <li>/</li>

          <li aria-current="page" className="line-clamp-1">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* ROW 1: Slider + Title */}
      <section className="container mx-auto px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Slider */}
          <div
            className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-3xl shadow-2xl order-1 lg:order-none"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            {displayImages.length > 0 ? (
              <div
                ref={sliderRef}
                className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
              >
                {displayImages.map((img, idx) => (
                  <div
                    key={`${img.src}-${idx}`}
                    className="w-full h-full flex-shrink-0 snap-center relative"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain p-4 sm:p-6 md:p-8"
                      priority={idx === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={85}
                      loading={idx === 0 ? "eager" : "lazy"}
                    />

                    {img.caption && (
                      <div className="absolute bottom-6 left-4 right-4 md:left-8 md:right-8 bg-black/65 backdrop-blur-md text-white px-5 py-3 rounded-lg text-center text-sm md:text-base font-medium shadow-lg">
                        {img.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "var(--surface)" }}
              >
                <div className="text-center px-6">
                  <h2
                    className="text-3xl md:text-5xl font-bold font-poppins"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Gallery Coming Soon
                  </h2>
                  <p
                    className="mt-4 text-lg md:text-xl"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    High-quality product images will be added shortly.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Title + Tagline */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-none space-y-6 lg:space-y-8">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins"
              style={{ color: "var(--text-primary)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {product.name}
            </motion.h1>

            {product.tagline && (
              <motion.p
                className="text-lg sm:text-xl md:text-2xl max-w-3xl"
                style={{ color: "var(--text-secondary)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {product.tagline}
              </motion.p>
            )}

            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl">
              {[
                "Custom Made",
                "Pakistan Supply",
                "Worldwide Export",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl px-4 py-3 text-center font-semibold"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">
                Request Quote
              </Link>
              <Link href="/products" className="btn-secondary">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Supporting Heading */}
      <section className="container mx-auto px-6 pb-2">
        <h2 className="sr-only">
          {product.name} for industrial thermal insulation, heat loss reduction
          and worker safety
        </h2>
      </section>

      {/* ROW 2: Description */}
      <section className="container mx-auto px-6 py-10 md:py-12">
        <motion.div
          className="rounded-3xl p-8 md:p-12 shadow-lg prose prose-lg max-w-none mx-auto"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--text-secondary)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {product?.description ? (
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          ) : (
            <p
              style={{
                textAlign: "center",
                color: "var(--text-muted)",
                fontStyle: "italic",
              }}
            >
              No description available.
            </p>
          )}
        </motion.div>
      </section>
      

      {/* ROW 3: Quote + Hero */}
      <section className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Quote Form */}
          <motion.div
            className="rounded-3xl p-8 md:p-10 shadow-2xl order-2 lg:order-1"
            style={{
              background: "var(--background-secondary)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left font-poppins"
              style={{ color: "var(--text-primary)" }}
            >
              Ready for a Custom Quote?
            </h2>

            <ProductQuote productTitle={product.name} serviceName={null} />

            <div className="mt-8 text-center lg:text-left">
              <Link href="/get-quote">
                <motion.button
                  className="inline-flex items-center px-8 py-4 font-bold text-lg rounded-xl shadow-lg transition transform hover:scale-105"
                  style={{
                    background: "var(--accent)",
                    color: "#062033",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Quote Now <ChevronRight className="ml-2" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative mx-auto w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-2xl order-1 lg:order-2"
            style={{
              background: "var(--surface)",
              border: "8px solid rgba(255,255,255,0.10)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <Image
              src={heroImage}
              alt={`${product.name} removable insulation jacket by MSEW`}
              fill
              className="object-contain p-6"
              sizes="(max-width: 1024px) 80vw, 40vw"
              quality={85}
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* More Products */}
      {moreProducts.length > 0 && (
        <section
          className="container mx-auto px-6 py-24"
          style={{ background: "var(--background-secondary)" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins"
            style={{ color: "var(--text-primary)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Explore More Products
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {moreProducts.map((p, index) => {
              const moreImg = getImageUrl(p.hero_image || "/placeholder.png");
              const productHref = p.slug ? `/products/${p.slug}` : "/products";

              return (
                <motion.article
                  key={p.slug || `${p.name}-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="relative h-60"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <Image
                      src={moreImg}
                      alt={`${p.name} industrial insulation product by MSEW`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-6">
                    <h3
                      className="text-xl font-semibold mb-2 font-poppins"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {p.name}
                    </h3>

                    <p
                      className="text-sm line-clamp-2 mb-4"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {p.meta_description ||
                        p.tagline ||
                        "High quality industrial insulation solution by MSEW."}
                    </p>

                    <Link
                      href={productHref}
                      className="font-semibold transition inline-flex items-center"
                      style={{ color: "var(--accent)" }}
                    >
                      View Details <ChevronRight className="ml-1" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
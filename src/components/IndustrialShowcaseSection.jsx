"use client";

import { useState } from "react";
import { motion } from "framer-motion";
 
const productSlides = [
  {
    name: "Valve Insulation Jacket",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Flange Cover",
    image:
      "https://images.unsplash.com/photo-1581091870627-3f5f5b4f2a20?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pump Jacket",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e8a2f8f3d3f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Turbine Cover",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Compressor Jacket",
    image:
      "https://images.unsplash.com/photo-1581093588401-16b3b4d3b3b3?auto=format&fit=crop&w=900&q=80",
  },
];

const applicationSlides = [
  {
    name: "Power Plant",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Oil & Gas Refinery",
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6d0a6a1b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Chemical Industry",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cement Plant",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d42c5d9f5f0?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Steel Industry",
    image:
      "https://images.unsplash.com/photo-1581090700337-6c8e0b5b2c1a?auto=format&fit=crop&w=900&q=80",
  },
];

function SliderCard({ title, subtitle, slides, direction, buttonText }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -120 : 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white shadow-xl rounded-2xl p-5 w-full max-w-md"
    >
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500 mt-1">{subtitle}</p>

      {/* Slider */}
      <div className="relative mt-4">
        <img
          src={slides[index].image}
          alt={slides[index].name}
          className="w-full h-56 object-cover rounded-xl"
        />

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
        >
          ›
        </button>
      </div>

      {/* Name */}
      <p className="text-center mt-3 font-semibold text-gray-700">
        {slides[index].name}
      </p>

      {/* CTA */}
      <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold">
        {buttonText}
      </button>
    </motion.div>
  );
}

export default function IndustrialShowcaseSection() {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 justify-center items-stretch">

        {/* Product Card */}
        <SliderCard
          title="Industrial Insulation Product"
          subtitle="High-temperature removable insulation solutions"
          slides={productSlides}
          direction="left"
          buttonText="View All Products"
        />

        {/* Application Card */}
        <SliderCard
          title="Industrial Insulation Application"
          subtitle="Energy efficiency across heavy industries"
          slides={applicationSlides}
          direction="right"
          buttonText="View All Applications"
        />

      </div>
    </section>
  );
}
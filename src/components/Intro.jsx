import React from "react";
import Image from "next/image";

const Intro = ({
  title,
  content,
  image,
}) => {
  return (
    <section className="py-20 px-6 md:px-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220] mb-6 leading-tight">
            {title}
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {content}
          </p>

          <div>
            <a
              href="/Learn-more"
              className="inline-block bg-[#0B1220] text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-[#132338] transition"
            >
              Learn More About Our Insulation
            </a>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="w-full h-auto rounded-2xl shadow-xl"
            loading="lazy"
            unoptimized
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-black/10 to-transparent"></div>

        </div>

      </div>

    </section>
  );
};

export default Intro;
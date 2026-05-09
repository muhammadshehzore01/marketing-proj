// components/Industries.jsx
// import React from "react";

// const industries = [
//   {
//     title: "Oil & Gas Refineries",
//     subtitle:
//       "High-temperature insulation jackets for refinery pipelines, valves, and process equipment to improve efficiency and safety.",
//     bg: "https://plus.unsplash.com/premium_photo-1682144333631-eac578433ea1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
//   },
//   {
//     title: "LNG Export Terminals",
//     subtitle:
//       "Thermal insulation solutions designed for LNG terminals to minimize energy loss and maintain stable operating temperatures.",
//     bg: "https://images.unsplash.com/photo-1712304256003-726d6d1e625d?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0",
//   },
//   {
//     title: "Petrochemical Plants",
//     subtitle:
//       "Industrial insulation covers for petrochemical systems to enhance heat retention and reduce operational energy costs.",
//     bg: "https://images.unsplash.com/photo-1768564206500-5cddb1fea679?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0",
//   },
//   {
//     title: "Power Generation Facilities",
//     subtitle:
//       "Advanced insulation jackets for turbines, boilers, and generators in power plants.",
//     bg: "https://images.unsplash.com/photo-1707498633827-936bb448b513?q=80&w=850&auto=format&fit=crop&ixlib=rb-4.1.0",
//   },
//   {
//     title: "Chemical Processing Plants",
//     subtitle:
//       "Durable insulation systems for chemical processing equipment ensuring safety, efficiency, and thermal control.",
//     bg: "https://plus.unsplash.com/premium_photo-1661956660871-2cd646709c90?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0",
//   },
//   {
//     title: "Manufacturing Industries",
//     subtitle:
//       "Custom removable insulation solutions for industrial machines to reduce heat loss and improve production efficiency.",
//     bg: "https://plus.unsplash.com/premium_photo-1661883301669-d86c4430f718?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
//   },
// ];

// const Industries = () => {
//   return (
//     <section className="section bg-primary">
//       <div className="container text-center">

//         {/* Heading (global gradient h2 already applied) */}
//         <h2>Industries We Serve</h2>

//         <div className="grid md:grid-cols-3 gap-6 mt-12">

//           {industries.map((item, i) => (
//             <div
//               key={i}
//               className="glass-card p-8 relative overflow-hidden group"
//               style={{
//                 backgroundImage: `url(${item.bg})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition"></div>

//               {/* Content */}
//               <div className="relative z-10 text-left">
//                 <h3 className="text-white font-bold">
//                   {item.title}
//                 </h3>

//                 <p className="mt-2 text-sm text-white/80">
//                   {item.subtitle}
//                 </p>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Industries;


import React from "react";

const industries = [
  {
    title: "Oil & Gas Refineries",
    subtitle:
      "High-temperature insulation jackets for refinery pipelines, valves, and process equipment to improve efficiency and safety.",
    bg: "https://plus.unsplash.com/premium_photo-1682144333631-eac578433ea1?q=80&w=870&auto=format&fit=crop",
  },
  {
    title: "LNG Export Terminals",
    subtitle:
      "Thermal insulation solutions designed for LNG terminals to minimize energy loss and maintain stable operating temperatures.",
    bg: "https://images.unsplash.com/photo-1712304256003-726d6d1e625d?q=80&w=878&auto=format&fit=crop",
  },
  {
    title: "Petrochemical Plants",
    subtitle:
      "Industrial insulation covers for petrochemical systems to enhance heat retention and reduce operational energy costs.",
    bg: "https://images.unsplash.com/photo-1768564206500-5cddb1fea679?q=80&w=1032&auto=format&fit=crop",
  },
  {
    title: "Power Generation Facilities",
    subtitle:
      "Advanced insulation jackets for turbines, boilers, and generators in power plants.",
    bg: "https://images.unsplash.com/photo-1707498633827-936bb448b513?q=80&w=850&auto=format&fit=crop",
  },
  {
    title: "Chemical Processing Plants",
    subtitle:
      "Durable insulation systems for chemical processing equipment ensuring safety, efficiency, and thermal control.",
    bg: "https://plus.unsplash.com/premium_photo-1661956660871-2cd646709c90?q=80&w=871&auto=format&fit=crop",
  },
  {
    title: "Manufacturing Industries",
    subtitle:
      "Custom removable insulation solutions for industrial machines to reduce heat loss and improve production efficiency.",
    bg: "https://plus.unsplash.com/premium_photo-1661883301669-d86c4430f718?q=80&w=870&auto=format&fit=crop",
  },
];

const Industries = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold">
          Industries We Serve
        </h2>

        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {industries.map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl p-8 text-left group shadow-lg min-h-[260px]"
              style={{
                backgroundImage: `url(${item.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition" />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-white font-bold text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-white/80">
                  {item.subtitle}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Industries;
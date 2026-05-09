// import React from "react";

// const MaterialConstruction = () => {
//   return (
//     <section className="py-16 px-6 bg-black/5">
//       <div className="max-w-7xl mx-auto text-center">
        
//         <h2 className="text-3xl font-bold font-manrope">
//           Material Construction
//         </h2>

//         <p className="mt-4 max-w-2xl mx-auto opacity-80">
//           Our insulation jackets are built using high-quality multi-layer materials,
//           selected based on temperature, environment, and application requirements.
//         </p>

//         <div className="grid md:grid-cols-3 gap-8 mt-10">

//           {/* OUTER & INNER */}
//           <div className="p-6 rounded-xl border">
//             <h3 className="font-semibold text-lg">Outer & Inner Layer</h3>
//             <ul className="mt-3 text-sm opacity-80 space-y-1 text-left">
//               <li>• Silicon Coated Fiberglass Fabric</li>
//               <li>• PU Coated Fiberglass Fabric</li>
//               <li>• Aluminum Laminated Fiberglass</li>
//               <li>• Ceramic Fiber Cloth</li>
//               <li>• Fiberglass Cloth</li>
//             </ul>
//           </div>

//           {/* INSULATION CORE */}
//           <div className="p-6 rounded-xl border">
//             <h3 className="font-semibold text-lg">Insulation Core</h3>
//             <ul className="mt-3 text-sm opacity-80 space-y-1 text-left">
//               <li>• Glass Wool</li>
//               <li>• Rock Wool</li>
//               <li>• Ceramic Wool</li>
//               <li>• Ceramic Paper</li>
//             </ul>
//           </div>

//           {/* CLOSURE SYSTEM */}
//           <div className="p-6 rounded-xl border">
//             <h3 className="font-semibold text-lg">Closure System</h3>
//             <ul className="mt-3 text-sm opacity-80 space-y-1 text-left">
//               <li>• Velcro (Hook & Loop)</li>
//               <li>• Belt System</li>
//               <li>• Stainless Steel Springs</li>
//               <li>• Stainless Steel Hooks</li>
//             </ul>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default MaterialConstruction;





import React from "react";

const MaterialConstruction = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Material Construction
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-text-secondary">
            Our insulation jackets are built using high-quality multi-layer materials, 
            selected based on temperature, environment, and application requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           
          {/* OUTER & INNER LAYER */}
          <div className="glass-card p-8 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-3xl border border-accent/20">
                🛡️
              </div>
              <h3 className="text-2xl font-bold text-white">Outer & Inner Layer</h3>
            </div>
            
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                Silicon Coated Fiberglass Fabric
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                PU Coated Fiberglass Fabric
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                Aluminum Laminated Fiberglass
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                Ceramic Fiber Cloth
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                Fiberglass Cloth
              </li>
            </ul>
          </div>

          {/* INSULATION CORE */}
          <div className="glass-card p-8 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-3xl border border-accent/20">
                🔥
              </div>
              <h3 className="text-2xl font-bold text-white">Insulation Core</h3>
            </div>
            
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                Glass Wool
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                Rock Wool
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                Ceramic Wool
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                Ceramic Paper
              </li>
            </ul>
          </div>

          {/* CLOSURE SYSTEM */}
          <div className="glass-card p-8 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-3xl border border-accent/20">
                🔒
              </div>
              <h3 className="text-2xl font-bold text-white">Closure System</h3>
            </div>
            
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                Velcro (Hook & Loop)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                Belt System
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                Stainless Steel Springs
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                Stainless Steel Hooks
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MaterialConstruction;
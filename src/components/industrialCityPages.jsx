import React from "react";
import Link from "next/link";
import { Factory, ArrowRight } from "lucide-react";

const industrialCityPages = [
  { city: "Karachi", industry: "Power Plants, Refineries & Chemical Industries", href: "/pakistan/karachi" },
  { city: "Lahore", industry: "Manufacturing, Textile & Food Processing", href: "/pakistan/lahore" },
  { city: "Faisalabad", industry: "Textile Mills, Steam Lines & Boilers", href: "/pakistan/faisalabad" },
  { city: "Sialkot", industry: "Manufacturing & Export Industries", href: "/pakistan/sialkot" },
  { city: "Multan", industry: "Power, Textile & Process Industries", href: "/pakistan/multan" },
  { city: "Hyderabad", industry: "Industrial Plants & Processing Units", href: "/pakistan/hyderabad" },
  { city: "Gujranwala", industry: "Metal, Foundry & Manufacturing Units", href: "/pakistan/gujranwala" },
  { city: "Hub", industry: "Cement, Power & Heavy Industries", href: "/pakistan/hub" },
  { city: "Nooriabad", industry: "Industrial Estate & Manufacturing Plants", href: "/pakistan/nooriabad" },
  { city: "Port Qasim", industry: "Refineries, Power & Port Industries", href: "/pakistan/port-qasim" },
  { city: "Sheikhupura", industry: "Textile, Chemical & Manufacturing Units", href: "/pakistan/sheikhupura" },
  { city: "Kotri", industry: "Industrial Area & Process Plants", href: "/pakistan/kotri" },
];

export default function PakistanIndustrialCityPages() {
  return (
    <section className="py-20 px-6 md:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-600">
          Major Industrial Cities
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B1220]">
          Industrial Insulation Solutions Across Pakistan
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          City-focused removable insulation jacket solutions for Pakistan’s
          major industrial zones, power plants, refineries, textile mills,
          chemical plants, cement plants, and manufacturing facilities.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {industrialCityPages.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group rounded-2xl border border-gray-200 p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                    <Factory className="w-6 h-6 text-orange-600" />
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-[#0B1220]">
                      {item.city}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {item.industry}
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
              </div>

              <p className="mt-5 text-sm text-gray-600 leading-relaxed">
                Custom thermal insulation jackets for valves, flanges,
                pipelines, pumps, turbines, generators, and high-temperature
                equipment in {item.city}.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
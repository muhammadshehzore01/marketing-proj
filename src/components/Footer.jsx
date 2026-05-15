"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchServices } from "@/lib/api";
import { MapPin, Phone, Facebook, Linkedin, Instagram, Mail } from "lucide-react";

const FOOTER_SERVICES_LIMIT = 5;

const fallbackServices = [
  {
    name: "Metallic Expansion Bellows Manufacturer in Pakistan",
    slug: "metallic-expansion-bellows-manufacturer-pakistan",
  },
  {
    name: "Removable Insulation Jackets Manufacturer in Pakistan",
    slug: "removable-insulation-jackets-manufacturer-pakistan",
  },
  {
    name: "Rubber Expansion Bellows in Pakistan",
    slug: "rubber-expansion-bellows-pakistan",
  },
  {
    name: "Site Measurement & Installation Support",
    slug: "site-measurement-installation-support",
  },
  {
    name: "Thermal Insulation Material Supply",
    slug: "thermal-insulation-material-supply",
  },
];

export default function Footer() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices()
      .then((data) => {
        const footerServices = Array.isArray(data)
          ? data.filter((s) => s?.show_in_footer === true && s?.slug)
          : [];
        setServices(footerServices);
      })
      .catch(() => {
        setServices([]);
      });
  }, []);

  const topFooterServices = useMemo(() => {
    const dynamicServices = services
      .slice()
      .sort((a, b) => String(a?.name || "").localeCompare(String(b?.name || "")))
      .slice(0, FOOTER_SERVICES_LIMIT);

    return dynamicServices.length ? dynamicServices : fallbackServices;
  }, [services]);

  return (
    <footer
      className="border-t"
      style={{
        background: "var(--background-primary)",
        color: "var(--text-primary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/img/logo.webp"
              alt="MSEW Logo"
              width={315}
              height={210}
              sizes="(max-width: 640px) 140px, 180px"
              unoptimized
              className="h-auto w-[140px] sm:w-[160px] md:w-[180px] rounded-full"
            />
            <div>
              <div className="text-lg font-semibold">MSEW</div>
              <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Industrial Insulation Solutions
              </div>
            </div>
          </div>

          <p className="text-sm mt-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            High-temperature removable insulation jackets for valves, flanges, pumps,
            turbines, generators, and industrial equipment — engineered to reduce heat loss,
            improve energy efficiency, and enhance workplace safety.
          </p>

          {/* Social */}
          <div className="flex items-center gap-3 mt-5">
            {[
              {
                href: "https://www.facebook.com/m.shahrukhengineering",
                label: "Facebook",
                Icon: Facebook,
              },
              {
                href: "https://www.linkedin.com/in/m-shahrukh-khan-550068a3",
                label: "LinkedIn",
                Icon: Linkedin,
              },
              {
                href: "https://www.instagram.com/industrialinsulationjacket.pk/",
                label: "Instagram",
                Icon: Instagram,
              },
            ].map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="p-2 rounded-lg transition"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
            Quick Links
          </h3>
          <div className="space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Products", "/products"],
              ["Applications", "/applications"],
              ["Industries", "/industries"],
              ["Blogs", "/blogs"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="block transition"
                style={{ color: "var(--text-secondary)" }}
              >
                <span className="hover:text-[var(--accent)]">{label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
            Services
          </h3>
          <div className="space-y-2 text-sm">
            {topFooterServices.map((srv) => (
              <Link
                key={srv.slug}
                href={`/services/${srv.slug}`}
                className="block transition"
                style={{ color: "var(--text-secondary)" }}
              >
                <span className="hover:text-[var(--accent)]">{srv.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
            Contact
          </h3>

          <div className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
            <div className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5" style={{ color: "var(--accent)" }} />
              <span>Plot #55-C, 15th Commercial Street, DHA Phase-2 Extension, Karachi, Pakistan</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={18} style={{ color: "var(--accent)" }} />
              <span>+92 305 2646312</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={18} style={{ color: "var(--accent)" }} />
              <span>hellomsew@gmail.com</span>
            </div>

            <Link href="/get-quote" className="btn-primary w-full mt-2 text-center block">
              Get Quick Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <span style={{ color: "var(--text-secondary)" }}>
            © {new Date().getFullYear()} M. Shahrukh Engineering Works (MSEW). All rights reserved.
          </span>
          <span style={{ color: "var(--text-secondary)" }}>
            mshahrukhengineeringworks.com
          </span>
        </div>
      </div>
    </footer>
  );
}

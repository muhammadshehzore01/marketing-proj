// app/services/ServicesClient.jsx
"use client";

import { useEffect, useMemo, useState, useDeferredValue } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  RefreshCcw,
  ShieldCheck,
  Factory,
  Globe2,
  Thermometer,
  CheckCircle2,
  PackageCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { getImageUrl } from "@/lib/api";

const CORE_SERVICE_SLUGS = [
  "removable-insulation-jackets-manufacturer",
  "metallic-expansion-bellows-manufacturer",
  "site-measurement-installation-support",
];

const OTHER_SERVICE_SLUGS = [
  "rubber-expansion-bellows-pakistan",
  "thermal-insulation-materials-rockwool-ceramic-wool",
];

const MAIN_SERVICE_SLUGS = new Set([
  ...CORE_SERVICE_SLUGS,
  ...OTHER_SERVICE_SLUGS,
]);

function SkeletonCard() {
  return (
    <div className="glass-card overflow-hidden rounded-2xl">
      <div
        className="relative h-48 w-full"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.03), rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
          }}
        />
      </div>

      <div className="p-6 space-y-4">
        <div
          className="h-5 w-2/3 animate-pulse rounded-md"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />

        <div className="space-y-2">
          <div
            className="h-4 w-full animate-pulse rounded-md"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
          <div
            className="h-4 w-5/6 animate-pulse rounded-md"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
        </div>

        <div className="pt-2">
          <div
            className="h-10 w-36 animate-pulse rounded-xl"
            style={{ background: "rgba(0,168,232,0.18)" }}
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service, reduceMotion, index, badge = "Core Service" }) {
  const title = service?.name || service?.title || "Service";
  const desc =
    service?.tagline ||
    service?.description ||
    "Energy-saving industrial solution for your plant.";

  const initialImg = getImageUrl(service?.image) || "/placeholder-service.jpg";
  const [imgSrc, setImgSrc] = useState(initialImg);

  useEffect(() => {
    setImgSrc(initialImg);
  }, [initialImg]);

  const CardInner = (
    <article className="glass-card group relative overflow-hidden rounded-2xl focus-within:shadow-lg">
      <div
        className="relative h-48 w-full"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <Image
          src={imgSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.05]"
          quality={85}
          onError={() => setImgSrc("/placeholder-service.jpg")}
          priority={index < 2}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.12), transparent)",
          }}
        />

        <div className="absolute left-4 top-4">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold backdrop-blur"
            style={{
              border: "1px solid var(--border)",
              background: "rgba(0,0,0,0.35)",
              color: "var(--text-secondary)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            {badge}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3
          className="text-[17px] font-extrabold leading-snug line-clamp-2"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed line-clamp-3">{desc}</p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <Link href={`/services/${service?.slug}`} className="btn-primary">
            View Details{" "}
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>

          <span
            className="text-xs font-semibold"
            style={{ color: "var(--text-muted)" }}
          >
            Quick view
          </span>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 opacity-0 transition group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,168,232,0.85), transparent, rgba(0,168,232,0.85))",
        }}
      />
    </article>
  );

  if (reduceMotion) return <div>{CardInner}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.25) }}
    >
      {CardInner}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="text-center">
      {eyebrow ? (
        <p
          className="mx-auto inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
          style={{
            border: "1px solid rgba(0,168,232,0.25)",
            background: "rgba(0,168,232,0.12)",
            color: "var(--text-primary)",
          }}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-4">{title}</h2>

      {desc ? (
        <p className="mx-auto mt-3 max-w-3xl text-sm sm:text-base">{desc}</p>
      ) : null}
    </div>
  );
}

export default function ServicesClient() {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const deferredSearch = useDeferredValue(searchTerm);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const reduceMotion = useReducedMotion();

  const WHY_CHOOSE_US = useMemo(
    () => [
      {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "Custom Industrial Solutions",
        desc: "Every jacket and bellow is selected or manufactured according to equipment size, temperature and application.",
      },
      {
        icon: <Thermometer className="h-5 w-5" />,
        title: "High-Temperature Focus",
        desc: "Built for hot surfaces, exhaust systems, steam lines and demanding industrial environments.",
      },
      {
        icon: <RefreshCcw className="h-5 w-5" />,
        title: "Maintenance Friendly",
        desc: "Removable and reusable insulation jackets help reduce downtime during inspection and maintenance.",
      },
      {
        icon: <Globe2 className="h-5 w-5" />,
        title: "Pakistan + Export Support",
        desc: "Serving industrial clients across Pakistan with support for international export projects.",
      },
    ],
    []
  );

  const READY_STOCK = useMemo(
    () => ({
      Caterpillar: ["G3516-A", "G3516-B", "G3516-C", "G3520-C"],
      Jenbacher: ["JGS320", "JGS420", "JGS616", "JGS620"],
    }),
    []
  );

  const INDUSTRIES = useMemo(
    () => [
      "Power Plants & Captive Power",
      "Oil & Gas Refineries",
      "Petrochemical & Chemical Plants",
      "Fertilizer & Process Industry",
      "Textile & Dyeing Units",
      "Plastic Extrusion & Moulding",
      "Cement Plants",
      "Steel & Heavy Engineering",
      "HVAC & Utilities",
      "Marine & Shipyards",
    ],
    []
  );

  const FAQS = useMemo(
    () => [
      {
        q: "What are your core services?",
        a: "Our core services are removable insulation jackets manufacturing in Pakistan, metallic expansion bellows manufacturing in Pakistan, and site measurement & installation support.",
      },
      {
        q: "What other services do you provide?",
        a: "Other services include rubber expansion bellows in Pakistan and thermal insulation material supply.",
      },
      {
        q: "What equipment can you cover with removable insulation jackets?",
        a: "Common applications include valves, flanges, pumps, turbines, generators, exhaust systems, steam lines, heat exchangers and custom machinery hot surfaces.",
      },
      {
        q: "Do you manufacture metallic expansion bellows in Pakistan?",
        a: "Yes. We fabricate metallic expansion bellows for thermal movement, vibration and misalignment in piping and exhaust systems. Custom sizes are available.",
      },
      {
        q: "Do you supply thermal insulation materials?",
        a: "Yes. We supply industrial thermal insulation materials such as rockwool and ceramic wool. Availability depends on specifications and order quantity.",
      },
      {
        q: "Do you supply rubber expansion bellows in Pakistan?",
        a: "Yes. We supply rubber expansion bellows and expansion joints for vibration isolation, movement compensation and noise reduction in pipelines and utilities.",
      },
      {
        q: "Do you provide site measurement and installation support?",
        a: "Yes. We offer site measurement and installation guidance across Pakistan, and export project support on request.",
      },
      {
        q: "Do you export your products internationally?",
        a: "Yes. We support export orders with packing and documentation. Share your country, application and temperature range for a quick quotation.",
      },
    ],
    []
  );

  async function loadServices(signal) {
    setError("");
    setLoading(true);

    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/services/`;
      const res = await fetch(url, { cache: "no-store", signal });
      if (!res.ok) throw new Error(`Fetch failed (${res.status})`);

      const data = await res.json();
      setServices(Array.isArray(data) ? data : []);
    } catch (err) {
      if (err?.name === "AbortError") return;
      console.error("Error fetching services:", err);
      setServices([]);
      setError("Couldn’t load services. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    loadServices(controller.signal);
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mainServices = useMemo(() => {
    if (!Array.isArray(services)) return [];

    return services
      .filter((s) => s?.slug && MAIN_SERVICE_SLUGS.has(s.slug))
      .sort((a, b) => {
        const aCoreIndex = CORE_SERVICE_SLUGS.indexOf(a.slug);
        const bCoreIndex = CORE_SERVICE_SLUGS.indexOf(b.slug);
        const aOtherIndex = OTHER_SERVICE_SLUGS.indexOf(a.slug);
        const bOtherIndex = OTHER_SERVICE_SLUGS.indexOf(b.slug);

        const aIndex = aCoreIndex !== -1 ? aCoreIndex : 100 + aOtherIndex;
        const bIndex = bCoreIndex !== -1 ? bCoreIndex : 100 + bOtherIndex;

        return aIndex - bIndex;
      });
  }, [services]);

  const filteredServices = useMemo(() => {
    const term = deferredSearch.trim().toLowerCase();
    if (!term) return mainServices;

    return mainServices.filter((s) => {
      const name = (s?.name || s?.title || "").toLowerCase();
      const tagline = (s?.tagline || "").toLowerCase();
      const desc = (s?.description || "").toLowerCase();
      return (
        name.includes(term) || tagline.includes(term) || desc.includes(term)
      );
    });
  }, [deferredSearch, mainServices]);

  const coreServices = useMemo(
    () =>
      filteredServices.filter((service) =>
        CORE_SERVICE_SLUGS.includes(service?.slug)
      ),
    [filteredServices]
  );

  const otherServices = useMemo(
    () =>
      filteredServices.filter((service) =>
        OTHER_SERVICE_SLUGS.includes(service?.slug)
      ),
    [filteredServices]
  );

  const galleryServices = useMemo(
    () => mainServices.filter((service) => service?.image).slice(0, 6),
    [mainServices]
  );

  return (
    <section className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] min-h-[280px] sm:min-h-[340px]">
          <Image
            src="/img/services.webp"
            alt="MSEW Services background"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover z-0"
          />
          <div
            className="absolute inset-0 z-10"
            style={{ background: "rgba(0,0,0,0.55)" }}
          />

          <div className="relative z-20 p-8 sm:p-10 text-center">
            <p
              className="mx-auto inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,0.10)",
                color: "var(--text-primary)",
              }}
            >
              MSEW • Industrial Thermal Insulation & Expansion Solutions
            </p>

            <h1 className="mt-4">
              Removable Insulation Jackets & Expansion Bellows for Industrial
              Plants
            </h1>

            <p
              className="mx-auto mt-4 max-w-3xl text-sm sm:text-base"
              style={{ color: "rgba(255,255,255,0.90)" }}
            >
              Manufacturer in Pakistan for high-temperature removable insulation
              jackets and metallic expansion bellows, with site measurement &
              installation support, rubber expansion bellows and thermal
              insulation material supply.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/get-quote"
                className="btn-primary w-full max-w-xs sm:w-auto"
              >
                Request a Quote
              </Link>

              <Link
                href="/contact"
                className="btn-secondary w-full max-w-xs sm:w-auto"
              >
                Talk to Technical Team →
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                "Reduce heat loss",
                "Improve safety",
                "Removable & reusable",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold"
                  style={{
                    border: "1px solid var(--border)",
                    background: "rgba(255,255,255,0.10)",
                    color: "var(--text-primary)",
                  }}
                >
                  <CheckCircle2
                    className="h-4 w-4"
                    style={{ color: "var(--accent)" }}
                  />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div
          className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-xl px-4 py-3"
          style={{
            border: "1px solid var(--border)",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <Search size={18} style={{ color: "var(--text-secondary)" }} />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search services…"
            aria-label="Search services"
            style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
              padding: 0,
            }}
          />
          {searchTerm ? (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="rounded-md px-2 py-1 text-xs font-semibold"
              style={{
                color: "var(--text-secondary)",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid var(--border)",
              }}
            >
              Clear
            </button>
          ) : null}
        </div>

        {/* ERROR */}
        {error ? (
          <div
            className="mx-auto mt-6 max-w-xl rounded-xl p-4 text-sm"
            style={{
              border: "1px solid rgba(255, 149, 0, 0.35)",
              background: "rgba(255, 149, 0, 0.10)",
              color: "var(--text-primary)",
            }}
          >
            <div className="flex items-center justify-between gap-3">
              <p style={{ color: "var(--text-secondary)" }}>{error}</p>
              <button
                type="button"
                onClick={() => {
                  const controller = new AbortController();
                  loadServices(controller.signal);
                }}
                className="btn-secondary"
              >
                <span className="inline-flex items-center gap-2">
                  <RefreshCcw size={14} /> Retry
                </span>
              </button>
            </div>
          </div>
        ) : null}

        {/* 5 SERVICES */}
        <div className="mt-12">
          <SectionTitle
            eyebrow="5 Services"
            title="Our industrial services"
            desc="Three core services and two supporting services for industrial insulation, expansion and thermal protection requirements."
          />

          {loading ? (
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : filteredServices.length ? (
            <>
              {coreServices.length ? (
                <div className="mt-10">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <h3
                      className="text-lg font-extrabold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Core Services
                    </h3>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        border: "1px solid rgba(0,168,232,0.25)",
                        background: "rgba(0,168,232,0.10)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Main manufacturing & support
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {coreServices.map((service, i) => (
                      <ServiceCard
                        key={service.slug}
                        service={service}
                        reduceMotion={reduceMotion}
                        index={i}
                        badge="Core Service"
                      />
                    ))}
                  </div>
                </div>
              ) : null}

              {otherServices.length ? (
                <div className="mt-12">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <h3
                      className="text-lg font-extrabold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Other Services
                    </h3>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        border: "1px solid var(--border)",
                        background: "rgba(255,255,255,0.04)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Supporting solutions
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {otherServices.map((service, i) => (
                      <ServiceCard
                        key={service.slug}
                        service={service}
                        reduceMotion={reduceMotion}
                        index={i + coreServices.length}
                        badge="Other Service"
                      />
                    ))}
                  </div>
                </div>
              ) : null}
            </>
          ) : (
            <div className="col-span-full glass-card mt-10 p-8 text-center rounded-2xl">
              <p
                className="text-base font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                No services found.
              </p>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Try a different keyword or clear the search.
              </p>
              {searchTerm ? (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="btn-primary mt-4"
                >
                  Clear Search
                </button>
              ) : null}
            </div>
          )}
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-16 glass-card p-8 sm:p-10 rounded-3xl">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="Trusted industrial manufacturer & supplier in Pakistan"
            desc="We focus on custom fit, high-temperature performance, easy maintenance and long-term industrial reliability."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6"
                style={{
                  border: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-2xl"
                  style={{
                    border: "1px solid var(--border)",
                    background: "rgba(0,168,232,0.10)",
                    color: "var(--text-primary)",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  className="mt-4 text-sm font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-2 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* READY STOCK */}
        <div className="mt-16 glass-card p-8 sm:p-10 rounded-3xl">
          <SectionTitle
            eyebrow="Ready Stock"
            title="Ready-made generator insulation jackets available"
            desc="Fast supply available for selected Caterpillar and Jenbacher generator models."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {Object.entries(READY_STOCK).map(([brand, models]) => (
              <div
                key={brand}
                className="rounded-2xl p-6"
                style={{
                  border: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <div className="flex items-center gap-2">
                  <PackageCheck
                    className="h-5 w-5"
                    style={{ color: "var(--text-secondary)" }}
                  />
                  <h3
                    className="text-base font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {brand} Models
                  </h3>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {models.map((model) => (
                    <div
                      key={model}
                      className="rounded-xl px-4 py-3 text-sm font-semibold"
                      style={{
                        border: "1px solid var(--border)",
                        background: "rgba(255,255,255,0.04)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {model}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INDUSTRIES */}
        <div className="mt-16 glass-card p-8 sm:p-10 rounded-3xl">
          <SectionTitle
            eyebrow="Industries"
            title="Industries we serve"
            desc="Built for demanding environments where heat loss, safety and thermal movement matter."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((item) => (
              <div
                key={item}
                className="rounded-2xl p-4 flex items-start gap-3"
                style={{
                  border: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <Factory
                  className="mt-0.5 h-5 w-5"
                  style={{ color: "var(--text-secondary)" }}
                />
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* GALLERY */}
        {galleryServices.length ? (
          <div className="mt-16 glass-card p-8 sm:p-10 rounded-3xl">
            <SectionTitle
              eyebrow="Gallery"
              title="Service & product photos"
              desc="A quick look at our industrial service categories and product applications."
            />

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {galleryServices.map((service, index) => {
                const title = service?.name || service?.title || "Service";
                const img =
                  getImageUrl(service?.image) || "/placeholder-service.jpg";

                return (
                  <Link
                    href={`/services/${service?.slug}`}
                    key={service.slug}
                    className="group relative block overflow-hidden rounded-2xl"
                    style={{
                      border: "1px solid var(--border)",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <div className="relative h-56 w-full">
                      <Image
                        src={img}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.05]"
                        quality={85}
                        priority={index < 2}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.10), transparent)",
                        }}
                      />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p
                        className="text-sm font-extrabold"
                        style={{ color: "white" }}
                      >
                        {title}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* FAQ */}
        <div className="mt-16 glass-card p-8 sm:p-10 rounded-3xl">
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently asked questions"
            desc="Quick answers for procurement and maintenance teams."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl p-5"
                style={{
                  border: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <summary
                  className="cursor-pointer list-none text-sm font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span className="flex items-start gap-3">
                    <span
                      className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                      style={{
                        background: "rgba(0,168,232,0.18)",
                        border: "1px solid rgba(0,168,232,0.25)",
                        color: "var(--text-primary)",
                      }}
                    >
                      ?
                    </span>
                    {f.q}
                  </span>
                </summary>
                <p
                  className="mt-3 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-16 glass-card p-8 sm:p-10 rounded-3xl text-center">
          <h2 style={{ color: "var(--text-primary)" }}>
            Need a quotation or site visit?
          </h2>
          <p
            className="mx-auto mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            Share equipment details, size, temperature range and location. Our
            team will suggest the suitable insulation jacket, expansion bellow
            or thermal insulation solution.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary w-full max-w-xs sm:w-auto"
            >
              Contact Us
            </Link>

            <Link
              href="/get-quote"
              className="btn-secondary w-full max-w-xs sm:w-auto"
            >
              Get Quote →
            </Link>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { k: "FAST RESPONSE", v: "Send details & get a technical reply" },
              { k: "EXPORT READY", v: "Packing & documentation support" },
              {
                k: "PLANT FRIENDLY",
                v: "Removable, reusable & maintenance safe",
              },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-2xl p-4 text-left"
                style={{
                  border: "1px solid var(--border)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <p
                  className="text-xs font-bold"
                  style={{ color: "var(--text-muted)" }}
                >
                  {x.k}
                </p>
                <p
                  className="mt-1 text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {x.v}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* INTERNAL LINKS */}
        <div
          className="mt-10 text-center text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          Explore:{" "}
          <Link
            className="font-semibold hover:underline"
            style={{ color: "var(--text-primary)" }}
            href="/blogs"
          >
            Projects
          </Link>{" "}
          •{" "}
          <Link
            className="font-semibold hover:underline"
            style={{ color: "var(--text-primary)" }}
            href="/about"
          >
            About
          </Link>{" "}
          •{" "}
          <Link
            className="font-semibold hover:underline"
            style={{ color: "var(--text-primary)" }}
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
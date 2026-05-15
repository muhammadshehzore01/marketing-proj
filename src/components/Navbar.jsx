"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const SERVICES_CACHE_KEY = "msew_nav_services_v3";
const SERVICES_CACHE_TTL_MS = 1000 * 60 * 15;
const SERVICES_LIMIT = 5;

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

function readCache() {
  try {
    const raw = sessionStorage.getItem(SERVICES_CACHE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (!parsed?.ts || !Array.isArray(parsed.data)) return null;
    if (Date.now() - parsed.ts > SERVICES_CACHE_TTL_MS) return null;

    return parsed.data;
  } catch {
    return null;
  }
}

function saveCache(data) {
  try {
    sessionStorage.setItem(
      SERVICES_CACHE_KEY,
      JSON.stringify({ ts: Date.now(), data })
    );
  } catch {}
}

export default function Navbar() {
  const apiBase = process.env.NEXT_PUBLIC_API_URL;

  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [servicesLoaded, setServicesLoaded] = useState(false);

  const desktopDropdownRef = useRef(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDesktopServicesOpen(false);
        setMobileServicesOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onDown = (e) => {
      if (!desktopDropdownRef.current) return;

      if (!desktopDropdownRef.current.contains(e.target)) {
        setDesktopServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  useEffect(() => {
    const shouldLoad = desktopServicesOpen || mobileServicesOpen;
    if (!shouldLoad) return;
    if (!apiBase) return;

    const cached = readCache();
    if (cached && services.length === 0) {
      setServices(cached);
    }

    if (servicesLoaded) return;

    const controller = new AbortController();

    async function fetchServices() {
      try {
        const res = await fetch(`${apiBase}/services/`, {
          signal: controller.signal,
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch services");

        const data = await res.json();
        if (!Array.isArray(data)) return;

        setServices(data);
        saveCache(data);
        setServicesLoaded(true);
      } catch (err) {
        if (err?.name !== "AbortError") console.error(err);
      }
    }

    fetchServices();

    return () => controller.abort();
  }, [
    desktopServicesOpen,
    mobileServicesOpen,
    apiBase,
    services.length,
    servicesLoaded,
  ]);

  const navServicesTop5 = useMemo(() => {
    const nav = services
      .filter((s) => s?.show_in_nav === true && s?.slug)
      .sort((a, b) => {
        const ao = Number.isFinite(a?.nav_order) ? a.nav_order : 9999;
        const bo = Number.isFinite(b?.nav_order) ? b.nav_order : 9999;

        if (ao !== bo) return ao - bo;

        return String(a?.name || "").localeCompare(String(b?.name || ""));
      })
      .slice(0, SERVICES_LIMIT);

    return nav.length ? nav : fallbackServices;
  }, [services]);

  const closeAll = () => {
    setMenuOpen(false);
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
  };

  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Applications", href: "/applications" },
    { label: "Industries", href: "/industries" },
    { label: "Products", href: "/products" },
    { label: "Blogs", href: "/blogs" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[9999] backdrop-blur-xl border-b border-[var(--border)] shadow-lg"
      style={{
        background: "rgba(10, 37, 64, 0.78)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={closeAll}
            aria-label="MSEW Home"
          >
            <div className="relative">
              <Image
                src="/img/logo.webp"
                alt="MSEW industrial insulation jackets and expansion bellows manufacturer logo"
                width={180}
                height={60}
                priority
                unoptimized
                className="rounded-full ring-0 ring-[var(--accent)]/30 group-hover:ring-[var(--accent)]/60 transition-all duration-300"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-7 text-[var(--text-primary)] font-medium">
            <Link href="/" className="hover:text-[var(--accent)]">
              Home
            </Link>

            <div ref={desktopDropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setDesktopServicesOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={desktopServicesOpen}
                className="flex items-center gap-1 hover:text-[var(--accent)]"
              >
                Services
                <ChevronDown
                  size={16}
                  className={
                    desktopServicesOpen
                      ? "rotate-180 transition"
                      : "transition"
                  }
                />
              </button>

              <AnimatePresence>
                {desktopServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full mt-3 w-80 border border-[var(--border)] rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-xl"
                    style={{
                      background: "rgba(10, 37, 64, 0.94)",
                    }}
                  >
                    <div className="py-2">
                      {navServicesTop5.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block px-5 py-3 hover:bg-[var(--surface-elevated)] hover:text-[var(--accent)] transition text-[var(--text-primary)] text-sm"
                          onClick={closeAll}
                        >
                          {service.name}
                        </Link>
                      ))}

                      <div className="border-t border-[var(--border)] mt-2 pt-2">
                        <Link
                          href="/services"
                          className="block px-5 py-3 hover:bg-[var(--surface-elevated)] hover:text-[var(--accent)] transition text-[var(--accent)] text-sm font-semibold"
                          onClick={closeAll}
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {mainLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[var(--accent)]"
                onClick={closeAll}
              >
                {link.label}
              </Link>
            ))}

            <Link href="/get-quote" onClick={closeAll} className="btn-primary">
              Get Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 text-[var(--text-primary)]"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              aria-label="Close menu"
              className="fixed inset-0 bg-black/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAll}
            />

            <motion.div
              className="fixed top-0 right-0 h-dvh w-[86%] max-w-sm border-l border-[var(--border)] shadow-2xl md:hidden z-[10000] backdrop-blur-xl"
              style={{
                background: "rgba(10, 37, 64, 0.94)",
              }}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-[var(--border)]">
                <span className="font-semibold text-[var(--text-primary)]">
                  Menu
                </span>
                <button
                  onClick={closeAll}
                  className="p-2 text-[var(--text-primary)]"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-5 space-y-2 text-[var(--text-primary)]">
                <Link href="/" onClick={closeAll} className="block py-2">
                  Home
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between py-2"
                  aria-expanded={mobileServicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={18}
                    className={
                      mobileServicesOpen
                        ? "rotate-180 transition"
                        : "transition"
                    }
                  />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="overflow-hidden rounded-lg border border-[var(--border)]"
                    >
                      <div className="py-2">
                        {navServicesTop5.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={closeAll}
                            className="block px-4 py-3 text-sm hover:bg-[var(--surface-elevated)] transition"
                          >
                            {service.name}
                          </Link>
                        ))}

                        <div className="border-t border-[var(--border)] mt-2 pt-2">
                          <Link
                            href="/services"
                            onClick={closeAll}
                            className="block px-4 py-3 text-sm font-semibold text-[var(--accent)] hover:bg-[var(--surface-elevated)] transition"
                          >
                            View All Services
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {mainLinks.slice(1).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeAll}
                    className="block py-2"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/get-quote"
                  onClick={closeAll}
                  className="btn-primary w-full text-center block mt-4"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const SERVICES_CACHE_KEY = "msew_nav_services_v3";
const SERVICES_CACHE_TTL_MS = 1000 * 60 * 15; // 15 minutes
const SERVICES_LIMIT = 5;

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

  // Lock body scroll when mobile menu open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  // ESC closes all
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

  // Close desktop dropdown on outside click
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

  // Lazy-load services only when dropdown/accordion opens
  useEffect(() => {
    const shouldLoad = desktopServicesOpen || mobileServicesOpen;
    if (!shouldLoad) return;
    if (!apiBase) return;

    const cached = readCache();
    if (cached && services.length === 0) setServices(cached);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desktopServicesOpen, mobileServicesOpen, apiBase]);

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

    return nav;
  }, [services]);

  const closeAll = () => {
    setMenuOpen(false);
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[9999] backdrop-blur-xl border-b border-[var(--border)] shadow-lg"
      style={{
        background: "rgba(10, 37, 64, 0.78)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={closeAll}
          >
            <div className="relative">
              <Image
                src="/img/logo.webp"
                alt="MSEW Logo"
                width={180}
                height={60}
                priority
                unoptimized
                className="rounded-full ring-0 ring-[var(--accent)]/30 group-hover:ring-[var(--accent)]/60 transition-all duration-300"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] hidden sm:block" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-9 text-[var(--text-primary)] font-medium">
            <Link href="/" className="hover:text-[var(--accent)]">
              Home
            </Link>

            {/* Services (CLICK based) */}
            <div ref={desktopDropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setDesktopServicesOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={desktopServicesOpen}
                className="flex items-center gap-1 hover:text-[var(--accent)]"
              >
                Services{" "}
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
                    className="absolute left-0 top-full mt-3 w-72 border border-[var(--border)] rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-xl"
                    style={{
                      background: "rgba(10, 37, 64, 0.92)",
                    }}
                  >
                    <div className="py-2">
                      {navServicesTop5.length === 0 ? (
                        <div className="px-5 py-4 text-sm opacity-80 text-[var(--text-primary)]">
                          Loading...
                        </div>
                      ) : (
                        navServicesTop5.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block px-5 py-3 hover:bg-[var(--surface-elevated)] hover:text-[var(--accent)] transition text-[var(--text-primary)]"
                            onClick={closeAll}
                          >
                            {service.name}
                          </Link>
                        ))
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/products" className="hover:text-[var(--accent)]">
              Products
            </Link>
            <Link href="/contact" className="hover:text-[var(--accent)]">
              Contact Us
            </Link>
            <Link href="/about" className="hover:text-[var(--accent)]">
              About Us
            </Link>

            {/* ✅ Theme-consistent CTA */}
            <Link href="/get-quote" onClick={closeAll} className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile toggle */}
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

      {/* Mobile Panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              aria-label="Close menu"
              className="fixed inset-0 bg-black/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAll}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-dvh w-[86%] max-w-sm border-l border-[var(--border)] shadow-2xl md:hidden z-[10000] backdrop-blur-xl"
              style={{
                background: "rgba(10, 37, 64, 0.92)",
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

                {/* Services Accordion */}
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
                      mobileServicesOpen ? "rotate-180 transition" : "transition"
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
                        {navServicesTop5.length === 0 ? (
                          <div className="px-4 py-3 text-sm opacity-80">
                            Loading...
                          </div>
                        ) : (
                          navServicesTop5.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              onClick={closeAll}
                              className="block px-4 py-3 text-sm hover:bg-[var(--surface-elevated)] transition"
                            >
                              {s.name}
                            </Link>
                          ))
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  href="/products"
                  onClick={closeAll}
                  className="block py-2"
                >
                  Products
                </Link>
                <Link
                  href="/contact"
                  onClick={closeAll}
                  className="block py-2"
                >
                  Contact Us
                </Link>
                <Link href="/about" onClick={closeAll} className="block py-2">
                  About Us
                </Link>

                {/* ✅ Theme-consistent CTA */}
                <Link
                  href="/get-quote"
                  onClick={closeAll}
                  className="btn-primary w-full"
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
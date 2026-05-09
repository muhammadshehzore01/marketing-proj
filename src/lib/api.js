import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

/* =====================================================
   ✅ SAFE FETCH SERVICES (FIXED)
===================================================== */
export async function fetchServices() {
  try {
    const res = await fetch(`${API_URL}/services/`, {
      cache: "no-store",
    });

    if (!res.ok) return [];

    const data = await res.json();

    return Array.isArray(data)
      ? data.map((s, index) => ({
          id: s.id ?? index,
          slug: s.slug,
          name: s.name,
          ...s,
        }))
      : [];
  } catch (err) {
    console.error("Error fetching services:", err);
    return [];
  }
}

/* =====================================================
   SERVICE DETAIL
===================================================== */
export async function fetchServiceDetail(slug) {
  const res = await fetch(`${API_URL}/services/${slug}/`);

  if (!res.ok) throw new Error("Failed to fetch service detail");

  return res.json();
}

/* =====================================================
   PROJECTS
===================================================== */
export async function fetchProjects() {
  const res = await fetch(`${API_URL}/projects/`);

  if (!res.ok) throw new Error("Failed to fetch projects");

  return res.json();
}

/* =====================================================
   HERO SLIDES
===================================================== */
export async function fetchHeroSlides() {
  const res = await fetch(`${API_URL}/hero-slides/`);

  if (!res.ok) throw new Error("Failed to fetch hero slides");

  return res.json();
}

/* =====================================================
   QUOTATION
===================================================== */
export async function createQuotation(data) {
  const res = await fetch(`${API_URL}/quotes/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create quotation");

  return res.json();
}

/* =====================================================
   AXIOS INSTANCE (FIXED SSR SAFE AUTH)
===================================================== */
export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

/* =====================================================
   IMAGE HANDLER (SEO OPTIMIZED)
===================================================== */
export function getImageUrl(path) {
  if (!path) return "/img/default-insulation.jpg";

  // full URL
  if (/^https?:\/\//i.test(path)) return path;

  // backend media
  if (path.startsWith("media/") || path.startsWith("/media/")) {
    const base =
      process.env.NEXT_PUBLIC_MEDIA_URL?.replace(/\/+$/, "") ||
      "https://mshahrukhengineeringworks.com";

    const cleanPath = path.replace(/^\/+/, "");
    return `${base}/${cleanPath}`;
  }

  // frontend images
  const cleanPath = path.replace(/^\/+/, "");

  return cleanPath.startsWith("img/")
    ? `/${cleanPath}`
    : `/img/${cleanPath}`;
}

/* =====================================================
   🔥 SEO SLUG CLEANER (NEW ADDITION)
   (IMPORTANT FOR GEO PAGES + SEO URLs)
===================================================== */
export function cleanSlug(text) {
  if (!text) return "";

  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
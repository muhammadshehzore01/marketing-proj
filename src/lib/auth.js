export const API_BASE = process.env.NEXT_PUBLIC_API_URL + "/accounts";

export const getToken = (key) => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(key) || sessionStorage.getItem(key);
};

export const setToken = (key, value, remember = true) => {
  if (typeof window === "undefined") return;
  if (remember) localStorage.setItem(key, value);
  else sessionStorage.setItem(key, value);
};

export const removeTokens = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  sessionStorage.removeItem("access");
  sessionStorage.removeItem("refresh");
};

export const getStoredRemember = () => {
  return true;
};

export const logout = async () => {
  const refresh = getToken("refresh");
  try {
    await fetch(`${API_BASE}/logout/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh }),
    });
  } catch (err) {
    console.error("Logout failed:", err);
  } finally {
    removeTokens();
  }
};

export async function getValidAdminToken() {
  let access = getToken("access");
  const refresh = getToken("refresh");

  if (!access) return null;

  try {
    const { exp, is_admin } = JSON.parse(atob(access.split(".")[1]));

    if (!is_admin) return null;

    if (exp * 1000 < Date.now()) {
      const res = await fetch(
        `${API_BASE.replace("/accounts", "")}/token/refresh/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        access = data.access;
        setToken("access", access, true);
      } else {
        removeTokens();
        return null;
      }
    }
    return access;
  } catch (err) {
    console.error("❌ Invalid token", err);
    return null;
  }
}

export async function refreshTokenIfNeeded() {
  let access = getToken("access");
  const refresh = getToken("refresh");

  if (!access) return null;

  try {
    const payload = JSON.parse(atob(access.split(".")[1]));
    const { exp } = payload;

    if (exp * 1000 < Date.now()) {
      if (!refresh) {
        removeTokens();
        return null;
      }

      const res = await fetch(`${API_BASE.replace("/accounts", "")}/token/refresh/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh }),
      });

      if (!res.ok) {
        removeTokens();
        return null;
      }

      const data = await res.json();
      access = data.access;
      setToken("access", access, true);
    }

    return access;
  } catch (err) {
    removeTokens();
    return null;
  }
}

export function isAdminAuthenticated() {
  const access = getToken("access");
  if (!access) return false;

  try {
    const { exp, is_admin } = JSON.parse(atob(access.split(".")[1]));
    if (exp * 1000 < Date.now()) return false;
    return is_admin === true;
  } catch (err) {
    return false;
  }
}

if (typeof window !== "undefined") {
}

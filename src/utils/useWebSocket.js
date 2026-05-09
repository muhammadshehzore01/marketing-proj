"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { getToken, refreshTokenIfNeeded } from "@/lib/auth";
import { jwtDecode } from "jwt-decode";

// ----- Singleton Admin WS -----
let adminSocket = null;
let adminConnected = false;
let adminReconnectRef = null;
let adminReconnectAttempts = 0;
let adminTokenCache = null;

// ----- Singleton User WS -----
let userSocket = null;
let userConnected = false;
let userReconnectRef = null;
let userReconnectAttempts = 0;

export default function useWebSocket(username, onMessage) {
  const socketRef = useRef(null);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState(null);

  const maxRetries = 10;
  const baseDelay = 2000;
  const backendHost = process.env.NEXT_PUBLIC_WS_HOST || "127.0.0.1:8000";

  const getValidAdminToken = useCallback(async () => {
    let token = getToken("access");
    if (!token) return null;

    try {
      const { exp } = jwtDecode(token);
      if (!exp || Date.now() / 1000 >= exp - 30) {
        token = await refreshTokenIfNeeded();
      }
    } catch (e) {
      console.warn("JWT decode failed:", e);
    }
    return token;
  }, []);

  const connect = useCallback(
    async (cachedToken = null) => {
      if (!username) return;

      if (
        (username === "admin" && adminSocket?.readyState === WebSocket.OPEN) ||
        (username !== "admin" && userSocket?.readyState === WebSocket.OPEN)
      ) {
        return;
      }

      let token = cachedToken;
      if (username === "admin" && !token) {
        token = await getValidAdminToken();
        if (!token) return;
        adminTokenCache = token;
      }

      const protocol =
        typeof window !== "undefined" &&
        window.location.protocol === "https:"
          ? "wss"
          : "ws";
      const baseUrl = `${protocol}://${backendHost}/ws/chat/`;

      const url =
        username === "admin"
          ? `${baseUrl}admin/?token=${encodeURIComponent(token)}`
          : `${baseUrl}user/${encodeURIComponent(username)}/`;

      const ws = new WebSocket(url);

      if (username === "admin") adminSocket = ws;
      else userSocket = ws;

      socketRef.current = ws;

      ws.onopen = () => {
        setConnected(true);
        setError(null);

        const sessionRoom = localStorage.getItem("chat_room");
        if (sessionRoom) {
          ws.send(
            JSON.stringify({
              type: "join_room",
              room: sessionRoom,
              sender: username,
            })
          );
        }

        if (username === "admin") {
          adminConnected = true;
          adminReconnectAttempts = 0;
          if (adminReconnectRef) clearTimeout(adminReconnectRef);

          setTimeout(() => {
            if (ws.readyState === WebSocket.OPEN) {
              ws.send(JSON.stringify({ type: "fetch_pending_messages" }));
            }
          }, 50);
        } else {
          userConnected = true;
          userReconnectAttempts = 0;
          if (userReconnectRef) clearTimeout(userReconnectRef);
        }
      };

      ws.onmessage = (ev) => {
        try {
          const data = JSON.parse(ev.data);
          onMessage?.(data);
        } catch (e) {
          console.error("WS parse error:", e);
        }
      };

      ws.onclose = async (e) => {
        setConnected(false);

        if (username === "admin") adminSocket = null;
        else userSocket = null;

        if (e.code === 1000) return;

        const attempts =
          username === "admin"
            ? adminReconnectAttempts
            : userReconnectAttempts;

        if (attempts < maxRetries) {
          const delay = baseDelay * Math.pow(2, attempts);

          const timer = setTimeout(async () => {
            const newToken =
              username === "admin" ? await getValidAdminToken() : null;

            if (username === "admin") {
              adminReconnectAttempts += 1;
              connect(newToken);
              adminReconnectRef = null;
            } else {
              userReconnectAttempts += 1;
              connect(newToken);
              userReconnectRef = null;
            }
          }, delay);

          if (username === "admin") adminReconnectRef = timer;
          else userReconnectRef = timer;
        } else {
          setError("Connection lost. Please refresh the page.");
        }
      };

      ws.onerror = (err) => {
        console.error("WS error:", err);
      };
    },
    [username, onMessage, getValidAdminToken]
  );

  useEffect(() => {
    const init = async () => {
      if (username === "admin") {
        if (adminSocket) {
          socketRef.current = adminSocket;
          setConnected(adminConnected);
        } else {
          const token = await getValidAdminToken();
          if (token) connect(token);
        }
      } else {
        if (userSocket) {
          socketRef.current = userSocket;
          setConnected(userConnected);
        } else {
          connect();
        }
      }
    };

    init();

    return () => {
      const ws = socketRef.current;
      if (ws) ws.close();
    };
  }, [username, connect, getValidAdminToken]);

  const sendMessage = (message) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(message));
    } else {
      console.warn("WS not connected, cannot send message.");
    }
  };

  return { connected, sendMessage, error };
}

// ✅ Load remote script
if (typeof window !== "undefined") {
}

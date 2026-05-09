"use client";

import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { Send, Image as ImageIcon, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const WS_BASE = process.env.NEXT_PUBLIC_WS_BASE || "ws://127.0.0.1:8000";
const MEDIA_BASE = process.env.NEXT_PUBLIC_MEDIA_BASE || "http://127.0.0.1:8000/media/";

export default function AdminChat({ adminName }) {
  const [ws, setWs] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [messages, setMessages] = useState([]); // {user, text, attachment, fromAdmin, timestamp}
  const [selectedUser, setSelectedUser] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [attachment, setAttachment] = useState(null);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages update
  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const socket = new WebSocket(`${WS_BASE}/ws/admin/${adminName}/`);
    setWs(socket);

    socket.onopen = () => console.log("Admin WS connected");
    socket.onclose = () => console.log("Admin WS disconnected");

    socket.onmessage = (e) => {
      const data = JSON.parse(e.data);

      switch (data.type) {
        case "online_users":
          setOnlineUsers(data.users);
          break;
        case "admin_list":
          // optional: handle multiple admins
          break;
        case "user_message":
          setMessages((prev) => [...prev, { ...data, fromAdmin: false }]);
          break;
        case "user_joined":
          // optional: handle notification
          break;
        default:
          break;
      }
    };

    return () => socket.close();
  }, [adminName]);

  const sendMessage = () => {
    if (!selectedUser || (!messageText.trim() && !attachment)) return;

    let payload = { action: "reply", to: selectedUser, message: messageText };

    if (attachment) {
      payload.attachment = attachment;
    }

    ws.send(JSON.stringify(payload));

    // Show sent message in admin chat
    setMessages((prev) => [
      ...prev,
      {
        user: selectedUser,
        message: messageText,
        attachment,
        fromAdmin: true,
        timestamp: new Date().toISOString(),
      },
    ]);

    setMessageText("");
    setAttachment(null);
  };

  const handleAttachment = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setAttachment(reader.result);
    reader.readAsDataURL(file);
  };

  const handleLogout = () => {
    ws.close();
    // optionally redirect or update UI
    alert("Logged out");
  };

  return (
    <div className="flex h-full">
      {/* Users List */}
      <div className="w-1/4 border-r border-gray-300 p-2 overflow-y-auto">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold">Online Users</h2>
          <Button variant="destructive" size="sm" onClick={handleLogout}>
            <LogOut className="mr-1 h-4 w-4" /> Logout
          </Button>
        </div>
        {onlineUsers.map((u) => (
          <div
            key={u.username}
            className={clsx(
              "p-2 cursor-pointer rounded hover:bg-gray-200",
              selectedUser === u.username && "bg-gray-300 font-bold"
            )}
            onClick={() => setSelectedUser(u.username)}
          >
            {u.username} <span className="text-xs text-gray-500">({u.country})</span>
          </div>
        ))}
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col p-2">
        <div className="flex-1 overflow-y-auto border p-2 rounded bg-gray-50">
          {messages
            .filter((m) => m.user === selectedUser)
            .map((m, idx) => (
              <div
                key={idx}
                className={clsx(
                  "mb-2 p-1 rounded max-w-xs",
                  m.fromAdmin ? "bg-blue-200 self-end" : "bg-gray-200 self-start"
                )}
              >
                <div className="text-sm">{m.message}</div>
                {m.attachment && (
                  <img
                    src={m.attachment.startsWith("data:") ? m.attachment : MEDIA_BASE + m.attachment}
                    alt="attachment"
                    className="mt-1 max-w-full rounded"
                  />
                )}
                <div className="text-xs text-gray-500 mt-0.5">{new Date(m.timestamp).toLocaleTimeString()}</div>
              </div>
            ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        {selectedUser && (
          <div className="flex mt-2 items-center gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border rounded p-2"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <input type="file" accept="image/*" onChange={handleAttachment} className="hidden" id="attachFile" />
            <label htmlFor="attachFile">
              <Button size="sm" variant="outline">
                <ImageIcon className="h-4 w-4" />
              </Button>
            </label>
            <Button size="sm" onClick={sendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        )}
        {!selectedUser && <div className="text-center text-gray-500 mt-4">Select a user to start chat</div>}
      </div>
    </div>
  );
}

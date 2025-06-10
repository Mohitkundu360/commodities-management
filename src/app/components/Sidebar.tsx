"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const { role, user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <motion.aside
      initial={{ width: 0 }}
      animate={{ width: isOpen ? 240 : 64 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 shadow-md min-h-screen overflow-hidden relative"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
        className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 text-lg"
      >
        {isOpen ? "◀" : "▶"}
      </button>

      <div className="mt-14 space-y-6">
        {user && (
          <div className={`text-sm ${isOpen ? "" : "sr-only"}`}>
            <p>{user.email}</p>
            <p className="italic text-xs">{role}</p>
          </div>
        )}

        <nav className="space-y-3 text-sm">
          {role === "Manager" && (
            <>
              <Link href="/dashboard" className="block hover:underline">
                {isOpen ? "📊 Dashboard" : "📊"}
              </Link>
              <Link href="/products" className="block hover:underline">
                {isOpen ? "📦 Products" : "📦"}
              </Link>
            </>
          )}

          {role === "Store Keeper" && (
            <Link href="/products" className="block hover:underline">
              {isOpen ? "📦 Products" : "📦"}
            </Link>
          )}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-8 text-red-500 hover:underline text-sm"
        >
          {isOpen ? "🚪 Logout" : "🚪"}
        </button>
      </div>
    </motion.aside>
  );
}

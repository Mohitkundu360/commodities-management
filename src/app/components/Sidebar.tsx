"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

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
      className="bg-white dark:bg-gray-800 p-4 shadow-md min-h-screen overflow-hidden relative"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 text-sm"
      >
        {isOpen ? "◀" : "▶"}
      </button>

      <div className="mt-10">
        {isOpen && (
          <div className="mb-6 text-sm text-gray-600 dark:text-gray-300">
            <p>{user?.email}</p>
            <p className="italic text-xs">{role}</p>
          </div>
        )}

        <nav className="space-y-4">
          {role === "Manager" && (
            <>
              <a href="/dashboard" className="block text-gray-700 dark:text-gray-200 hover:underline">
                {isOpen ? "Dashboard" : "📊"}
              </a>
              <a href="/products" className="block text-gray-700 dark:text-gray-200 hover:underline">
                {isOpen ? "Products" : "📦"}
              </a>
            </>
          )}
          {role === "Store Keeper" && (
            <a href="/products" className="block text-gray-700 dark:text-gray-200 hover:underline">
              {isOpen ? "Products" : "📦"}
            </a>
          )}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-10 text-red-500 hover:underline text-sm"
        >
          {isOpen ? "Logout" : "🚪"}
        </button>
      </div>
    </motion.aside>
  );
}

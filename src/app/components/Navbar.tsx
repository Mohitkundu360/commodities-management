"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle"; // ✅ import reusable toggle

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between p-4 border-b bg-white dark:bg-gray-800">
      <Link href="/" className="text-lg font-semibold text-gray-800 dark:text-white">
        Slooze
      </Link>
      <div className="flex items-center gap-4">
        {user && (
          <>
            <Link href="/products" className="text-sm text-blue-600 dark:text-blue-300">
              Products
            </Link>
            {user.role === "manager" && (
              <Link href="/dashboard" className="text-sm text-blue-600 dark:text-blue-300">
                Dashboard
              </Link>
            )}
            <button onClick={logout} className="text-sm text-red-500">
              Logout
            </button>
          </>
        )}
        <ThemeToggle /> {/* ✅ Theme toggle button here */}
      </div>
    </nav>
  );
}

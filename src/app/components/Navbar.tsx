"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <nav className="flex items-center justify-between p-4 border-b bg-white dark:bg-gray-800">
      <Link href="/" className="text-lg font-semibold">
        Slooze
      </Link>
      <div className="flex items-center gap-4">
        {user && (
          <>
            <Link href="/products">Products</Link>
            {user.role === "manager" && <Link href="/dashboard">Dashboard</Link>}
            <button onClick={logout} className="text-sm text-red-500">
              Logout
            </button>
          </>
        )}
        <button onClick={toggleTheme} className="text-sm">
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </nav>
  );
}
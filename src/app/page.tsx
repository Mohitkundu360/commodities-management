"use client";

import Link from "next/link";
import DarkModeToggle from "./components/DarkModeToggle";
import { motion } from "framer-motion";
import { FiShield, FiLayers, FiZap } from "react-icons/fi";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* Navigation Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold">Slooze</h1>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#features" className="hover:underline">
            Features
          </Link>
          <Link href="#testimonials" className="hover:underline">
            Testimonials
          </Link>
          <Link href="/login" className="hover:underline text-blue-600 dark:text-blue-400">
            Login
          </Link>
        </nav>
        <DarkModeToggle />
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center justify-center text-center px-6 py-20"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Smarter Commodities Management
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-8">
          Manage your stock, track activity, and make decisions with ease.
        </p>

        {/* Animated Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold transition"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid gap-10 md:grid-cols-3 px-6 py-16 border-t border-gray-200 dark:border-gray-700"
      >
        <FeatureItem
          icon={<FiShield className="text-blue-600 dark:text-blue-400 w-8 h-8 mb-2" />}
          title="Role-Based Access"
          description="Dashboards built for managers and storekeepers with proper access rules."
        />
        <FeatureItem
          icon={<FiZap className="text-blue-600 dark:text-blue-400 w-8 h-8 mb-2" />}
          title="Realtime Updates"
          description="Inventory and stock levels update live as you manage your operations."
        />
        <FeatureItem
          icon={<FiLayers className="text-blue-600 dark:text-blue-400 w-8 h-8 mb-2" />}
          title="Secure & Fast"
          description="Secure login and backend APIs with blazing-fast UI."
        />
      </motion.section>

      {/* Logo/Testimonials Section */}
      <motion.section
        id="testimonials"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-6 py-16 border-t border-gray-200 dark:border-gray-700 text-center"
      >
        <h3 className="text-2xl font-bold mb-6">Trusted by teams like yours</h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {["Acme Inc", "FarmStock", "StorePro", "AgroBase", "NextWare"].map((name) => (
            <span key={name} className="text-gray-600 dark:text-gray-400 text-lg font-medium">
              {name}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6 border-t border-gray-200 dark:border-gray-700">
        &copy; {new Date().getFullYear()} Slooze Inc. All rights reserved.
      </footer>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center px-4">
      {icon}
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
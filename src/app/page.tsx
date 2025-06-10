// src/app/page.tsx
"use client"; // ensure this is a client component

import DarkModeToggle from "./components/DarkModeToggle"; // adjust if needed

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <main className="flex flex-col">
        {/* Header */}
        <header className="p-8 border-b border-gray-300 dark:border-gray-700">
          <DarkModeToggle />
          <h1 className="text-4xl font-extrabold mt-4">Welcome to Your Tailwind App</h1>
          <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-xl">
            This is a simple demo showing Tailwind CSS integration with Next.js.
          </p>
        </header>

        {/* Content Section */}
        <section className="flex-grow flex flex-col items-center justify-center px-8">
          <h2 className="text-3xl font-semibold mb-4">Tailwind CSS is working!</h2>
          <p className="max-w-lg text-center text-gray-600 dark:text-gray-300 mb-8">
            You can now build beautiful, responsive UIs with ease using Tailwind's utility classes.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-medium transition">
            Get Started
          </button>
        </section>

        {/* Footer */}
        <footer className="p-6 border-t border-gray-300 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

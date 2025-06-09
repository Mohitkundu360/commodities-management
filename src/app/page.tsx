// src/app/page.tsx

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand text-white flex flex-col">
      {/* Header */}
      <header className="p-8 border-b border-blue-700">
        <h1 className="text-4xl font-extrabold">Welcome to Your Tailwind App</h1>
        <p className="mt-2 text-blue-300 max-w-xl">
          This is a simple demo showing Tailwind CSS integration with Next.js.
        </p>
      </header>

      {/* Content Section */}
      <section className="flex-grow flex flex-col items-center justify-center px-8">
        <h2 className="text-3xl font-semibold mb-4">Tailwind CSS is working!</h2>
        <p className="max-w-lg text-center text-blue-200 mb-8">
          You can now build beautiful, responsive UIs with ease using Tailwind's utility classes.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-medium transition">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="p-6 border-t border-blue-700 text-center text-blue-300 text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </main>
  );
}

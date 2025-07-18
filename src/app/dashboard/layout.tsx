// app/dashboard/layout.tsx
"use client";

import Sidebar from "../components/Sidebar";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
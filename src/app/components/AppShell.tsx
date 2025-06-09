"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
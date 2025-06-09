"use client";

import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id;

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold mb-2">Product Detail</h1>
      <p className="text-gray-700 dark:text-gray-300">Showing details for product ID: {id}</p>
    </main>
  );
}

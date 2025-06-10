"use client";

import ProtectedRoute from "../components/ProtectedRoute";

export default function ProductsPage() {
  return (
    <ProtectedRoute allowedRoles={["Manager", "Store Keeper"]}>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Product List</h1>
        {/* Map products here */}
      </div>
    </ProtectedRoute>
  );
}
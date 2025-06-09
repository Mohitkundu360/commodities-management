"use client";

export default function AddProductPage() {
  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Add New Product</h1>
      {/* Replace with your add product form */}
      <form className="space-y-4">
        <input type="text" placeholder="Product Name" className="w-full p-2 border rounded" />
        <input type="number" placeholder="Quantity" className="w-full p-2 border rounded" />
        <button className="bg-green-600 text-white py-2 px-4 rounded">Add Product</button>
      </form>
    </main>
  );
}
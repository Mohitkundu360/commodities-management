"use client";

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded p-4 bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p>Quantity: {product.quantity}</p>
      <p>Price: ₹{product.price}</p>
    </div>
  );
}
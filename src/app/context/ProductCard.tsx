// components/ProductCard.tsx
"use client";

import React from "react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  onEdit?: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  quantity,
  price,
  onEdit,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 transition hover:shadow-md">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{name}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{description}</p>
      <div className="flex justify-between items-center text-sm text-gray-700 dark:text-gray-300">
        <span>Qty: {quantity}</span>
        <span>₹{price.toFixed(2)}</span>
      </div>
      {onEdit && (
        <button
          onClick={() => onEdit(id)}
          className="mt-4 w-full py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700 text-sm"
        >
          Edit Product
        </button>
      )}
    </div>
  );
};

export default ProductCard;

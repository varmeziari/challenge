"use client";

import { useCart } from "@/context/CartContext";
import { CartItemType } from "@/types/Cart";
import React from "react";

type Props = {
  item: CartItemType;
  index: number;
};

export default function CartCard({ item, index }: Props) {
  const { RemoveProduct } = useCart();

  return (
    <div className="my-1 bg-blue-200 rounded-xl p-6 flex flex-row gap-8 items-center justify-start shadow-lg">
      <h1 className="text-2xl">{index + 1}</h1>

      <img
        src={item.product.imageUrl}
        alt={item.product.name}
        className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 shadow-md"
      />
      <h1 className="text-2xl">{item.product.name}</h1>
      <div className="flex flex-col border border-red-700 p-3">
        <p className="border-b border-red-700">Fee ($)</p>
        <p className="text-center">{item.product.price}</p>
      </div>
      <div className="flex flex-col border border-red-700 p-3">
        <p className="border-b border-red-700">Quantity</p>
        <p className="text-center">{item.quantity}</p>
      </div>
      <div className="flex flex-col border border-red-700 p-3">
        <p className="border-b border-red-700">Total Price ($)</p>
        <p className="text-center">{item.quantity * item.product.price}</p>
      </div>
      <button>
        <img
          src="/del.svg"
          alt=""
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 shadow-md"
          onClick={() => RemoveProduct(item.product.id)}
        />
      </button>
    </div>
  );
}

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
    <div className="flex flex-col sm:flex-row sm:justify-between shadow-lg w-[90vw] sm:w-[75vw] px-5 py-4 items-start sm:items-center mt-5 space-y-4 sm:space-y-0">
      <div className="flex flex-col lg:flex-row items-center gap-4 w-full sm:w-[35%] pl-0 sm:pl-6">
        <img
          src={item.product.imageUrl}
          alt={item.product.name}
          className="w-[100px] h-[57px] object-scale-down shadow-md"
        />
        <h1 className="text-lg sm:text-2xl text-center lg:text-left">
          {item.product.name}
        </h1>
      </div>
      <div className="w-full sm:w-[20%] text-center sm:text-left pl-0 sm:pl-6">
        ${item.product.price}
      </div>
      <div className="w-full sm:w-[20%] text-center sm:text-left pl-0 sm:pl-6">
        {item.quantity}
      </div>
      <div className="w-full sm:w-[20%] text-center sm:text-left pl-0 sm:pl-6">
        ${item.quantity * item.product.price}
      </div>
      <div className="w-full sm:w-[5%] flex justify-center">
        <button>
          <img
            src="/del.svg"
            alt="Remove"
            className="w-9 h-9"
            onClick={() => RemoveProduct(item.product.id)}
          />
        </button>
      </div>
    </div>
  );
}

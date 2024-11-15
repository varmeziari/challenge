"use client";
import { useCart } from "@/context/CartContext";
import { ProductType } from "@/types/Product";
import React, { useState } from "react";

interface ProductProps {
  key: number;
  product: ProductType;
}

export default function ProductCard({ product }: ProductProps) {
  const [quan, setQuan] = useState(1);

  const { cart, Add2Cart, RemoveProduct } = useCart();
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg boder border-slate-300 p-6">
      <div className="flex justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600">
          {product.category} / {product.subcategory}
        </p>
        <p className="text-xl font-bold text-gray-800 mt-2">
          ${product.price.toFixed(2)}
        </p>

        {cart.some((item) => item.product.id === product.id) ? (
          <div
            className="bg-yellow-100 mt-4 p-4 flex flex-row justify-between cursor-pointer hover:bg-yellow-300 select-none"
            onClick={() => RemoveProduct(product.id)}
          >
            <p>Remove from Cart</p>
            <img src="/remove1.svg" alt="" width={28} />
          </div>
        ) : (
          <div className="bg-gray-200 mt-4 p-4 flex flex-row justify-between  hover:bg-gray-400 select-none">
            <div className="flex flex-row flex-start">
              <img
                src="/minus.svg"
                alt=""
                width={28}
                onClick={() => {
                  if (quan > 1) setQuan(quan - 1);
                }}
                className="cursor-pointer"
              />
              <p className="border-2 border-black rounded-full px-3 py-1">
                {quan}
              </p>
              <img
                src="/plus.svg"
                alt=""
                width={28}
                onClick={() => {
                  if (quan < 9) setQuan(quan + 1);
                }}
                className="cursor-pointer"
              />
            </div>
            <div className="flex flex-row flex-start items-center">
              <img
                src="/add1.svg"
                alt=""
                width={28}
                onClick={() => Add2Cart(product, quan)}
                className="cursor-pointer"
              />
              <p className="ml-2">${(product.price * quan).toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

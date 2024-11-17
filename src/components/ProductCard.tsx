"use client";
import { useCart } from "@/context/CartContext";
import { ProductType } from "@/types/Product";
import React, { useState } from "react";

interface ProductProps {
  key: number;
  product: ProductType;
}

export default function ProductCard({ product }: ProductProps) {
  const { cart, UpdateCart } = useCart();

  const [quan, setQuan] = useState(
    cart.find((cartItem) => cartItem.product.id === product.id)?.quantity || 0
  );

  const TotalPrice = quan * product.price;
  const bgClassName = TotalPrice === 0 ? "bg-gray-300" : "bg-red-400";

  return (
    <div className="w-[266px] h-[312px] bg-white shadow-lg rounded-[20px] p-[5px] flex flex-col items-start ">
      <div className="w-[256px] h-[145px]">
        <img
          src={product.imageUrl}
          alt=""
          className="rounded-[20px] object-scale-down w-[256px] h-[145px]"
        />
      </div>
      <div className="p-2">
        <p className="text-lg font-semibold text-gray-800">{product.name}</p>
        <p className="text-sm text-gray-600">
          {product.category} / {product.subcategory}
        </p>

        <p className="text-red-500 text-lg font-semibold">${product.price}</p>
      </div>
      <div className="w-full flex p-2 justify-between">
        <div className="rounded-lg flex bg-gray-400 items-center h-8">
          <button className="w-8 h-8  ">
            <p
              className="font-bold"
              onClick={() => {
                if (quan > 0) {
                  UpdateCart(product, -1);
                  setQuan(quan - 1);
                }
              }}
            >
              -
            </p>
          </button>
          <div className=" border-x-2 w-10 h-8 border-gray-600 text-center flex flex-col justify-center ">
            {quan}
          </div>
          <button className="w-8">
            <p
              className="font-bold"
              onClick={() => {
                UpdateCart(product, 1);
                setQuan(quan + 1);
              }}
            >
              +
            </p>
          </button>
        </div>
        <div
          className={`text-white w-24 flex justify-end rounded-lg items-center ${bgClassName}`}
        >
          ${TotalPrice}
        </div>
      </div>
    </div>
  );
}

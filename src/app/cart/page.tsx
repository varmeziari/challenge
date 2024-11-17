"use client";

import { useCart } from "@/context/CartContext";
import CartCard from "../../components/CartCard";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Cart() {
  const { cart, selected } = useCart();

  const router = useRouter();

  useEffect(() => {
    if (selected === 0) {
      router.push("/");
    }
  }, [selected, router]);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="flex items-center justify-start min-h-screen flex-col pt-20 bg-gray-50">
      <h1 className="text-4xl text-center my-8">Your Shopping Cart</h1>

      {/* <div className="flex justify-between shadow-lg w-[75vw] p-5 bg-white">
        <div className="w-[35%] pl-6">Poduct</div>
        <div className="w-[20%]  pl-6">Price</div>
        <div className="w-[20%]  pl-6">Quantity</div>
        <div className="w-[20%]  pl-6">Subtotal</div>
        <div className="w-[5%] ">Remove</div>
      </div> */}
      <div className="flex flex-col sm:flex-row sm:justify-between shadow-lg w-[90vw] sm:w-[75vw] p-5 bg-white space-y-4 sm:space-y-0">
        <div className="w-full sm:w-[35%] pl-0 sm:pl-6 text-center sm:text-left">
          Product
        </div>
        <div className="w-full sm:w-[20%] pl-0 sm:pl-6 text-center sm:text-left">
          Price
        </div>
        <div className="w-full sm:w-[20%] pl-0 sm:pl-6 text-center sm:text-left">
          Quantity
        </div>
        <div className="w-full sm:w-[20%] pl-0 sm:pl-6 text-center sm:text-left">
          Subtotal
        </div>
        <div className="w-full sm:w-[5%] text-center sm:text-left">Remove</div>
      </div>

      {cart.map((item, index) => (
        <div key={index}>
          <CartCard item={item} index={index} />
        </div>
      ))}

      <div className="w-[75vw] bg-blue-50 flex justify-around p-6 text-2xl font-bold  mt-5 shadow-lg">
        <p>Total Items: {selected}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

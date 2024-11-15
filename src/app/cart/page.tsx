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
    <div className="flex items-center justify-start min-h-screen flex-col pt-20">
      <h1 className="text-4xl text-center my-8">Your Shopping Cart</h1>
      {cart.map((item, index) => (
        <div className="boder border-red-700">
          <CartCard item={item} index={index} />
        </div>
      ))}
      <div className="mt-5 bg-blue-50 w-full flex justify-center p-6 gap-10 text-2xl font-bold">
        <p>Total Items: {selected}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
}

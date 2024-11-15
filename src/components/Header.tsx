"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const { selected } = useCart();

  const [mobileMenu, setMobileMenu] = useState(false);
  const Menu = [
    { title: "Home", link: "/" },
    { title: "Products", link: "/products" },
    { title: "Sellers", link: "/sellers" },
    { title: "Shopping Cart", link: "/cart", img: "/cart.svg" },
  ];
  return (
    <nav className="flex items-center justify-between p-4 bg-red-100 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="text-lg font-semibold">
        <h2>Main Menu</h2>
      </div>

      <div className="hidden sm:flex space-x-4 justify-end items-center">
        {Menu.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className="text-gray-700 hover:text-blue-600"
          >
            {item.img ? (
              <button
                type="button"
                className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white  rounded-lg hover:border-blue-600 hover:border-2 "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-5 h-5 object-contain"
                />
                {selected > 0 && (
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                    {selected}
                  </div>
                )}
              </button>
            ) : (
              item.title
            )}
          </Link>
        ))}
      </div>

      <div className="sm:hidden">
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {mobileMenu && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-md sm:hidden">
          <div className="flex flex-col items-center p-4 space-y-2">
            {Menu.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="w-full text-center text-gray-700 hover:text-blue-600 hover:bg-red-200"
                onClick={() => setMobileMenu(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

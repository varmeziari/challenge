"use client";

import { CartItemType } from "@/types/Cart";
import { ProductType } from "@/types/Product";
import { createContext, useContext, useState, useEffect } from "react";

type cartContextType = {
  selected: number;
  cart: CartItemType[];
  UpdateCart: (product: ProductType, quan: number) => void;
  RemoveProduct: (id: number) => void;
};

const cartContextDefaultValues: cartContextType = {
  selected: 0,
  cart: [],
  UpdateCart: (product: ProductType, quan: number) => {},
  RemoveProduct: (id: number) => {},
};

const CartContext = createContext<cartContextType>(cartContextDefaultValues);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // console.log("in CartProvider...");
  const [cart, setCart] = useState<CartItemType[]>(() => {
    console.log("in loading carts...");
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [selected, setSelected] = useState(() => {
    // console.log("in loading selected...");
    const savedSelected = localStorage.getItem("selected");
    return savedSelected ? parseInt(savedSelected) : 0;
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("selected", selected.toString());
    // console.log("Saving to localStorage:", cart);
  }, [cart]);

  const UpdateCart = (product: ProductType, quan: number) => {
    setCart((prevCart) => {
      const existIndex = prevCart.findIndex(
        (item) => item.product.id === product.id
      );

      if (existIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existIndex] = {
          ...updatedCart[existIndex],
          quantity: updatedCart[existIndex].quantity + quan,
        };
        return updatedCart;
      } else {
        return [...prevCart, { product: product, quantity: 1 }];
      }
    });
    setSelected(selected + quan);
  };
  const RemoveProduct = (pid: number) => {
    const Selected2Remove = cart.find((item) => item.product.id === pid) || {
      product: null,
      quantity: 0,
    };
    setCart(cart.filter((item) => item.product.id !== pid));
    setSelected(selected - Selected2Remove.quantity);
  };
  return (
    <CartContext.Provider value={{ selected, cart, UpdateCart, RemoveProduct }}>
      {children}
    </CartContext.Provider>
  );
};

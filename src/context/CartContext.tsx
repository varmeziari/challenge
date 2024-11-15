"use client";

import { CartItemType } from "@/types/Cart";
import { ProductType } from "@/types/Product";
import { createContext, useContext, useState } from "react";

type cartContextType = {
  selected: number;
  cart: CartItemType[];
  Add2Cart: (product: ProductType, quan: number) => void;
  RemoveProduct: (id: number) => void;
};

const cartContextDefaultValues: cartContextType = {
  selected: 0,
  cart: [],
  Add2Cart: (product: ProductType, quan: number) => {},
  RemoveProduct: (id: number) => {},
};

const CartContext = createContext<cartContextType>(cartContextDefaultValues);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [selected, setSelected] = useState(0);

  // const ToggleProduct = (pid: number, quan: number) => {
  //   const item = cart.find((product) => product.id === pid);

  //   if (item) {
  //     setCart(cart.filter((item) => item.id !== pid));
  //     setSelected(selected - item.quantity);
  //   } else {
  //     setCart((prevCart) => [...prevCart, { id: pid, quantity: quan }]);
  //     setSelected(selected + quan);
  //   }
  // };
  const Add2Cart = (product: ProductType, quan: number) => {
    setCart((prevCart) => [...prevCart, { product: product, quantity: quan }]);
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
    <CartContext.Provider value={{ selected, cart, Add2Cart, RemoveProduct }}>
      {children}
    </CartContext.Provider>
  );
};

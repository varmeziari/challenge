import React, { ReactNode } from "react";
import dynamic from "next/dynamic";

const CartProvider = dynamic(
  () => import("./CartContext").then((mod) => mod.CartProvider),
  {
    ssr: false,
  }
);

interface Props {
  children: ReactNode;
}

const DynamicCartProvider: React.FC<Props> = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default DynamicCartProvider;

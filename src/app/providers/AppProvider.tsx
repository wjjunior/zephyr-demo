import React from "react";
import { CartProvider } from "../../features/shopping-cart/model/cart-context";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

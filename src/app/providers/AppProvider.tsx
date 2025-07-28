import React from "react";
import { CartProvider } from "../../features/shopping-cart/model/cart-context";
import { ProductSearchProvider } from "../../shared/hooks";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <CartProvider>
      <ProductSearchProvider>{children}</ProductSearchProvider>
    </CartProvider>
  );
};

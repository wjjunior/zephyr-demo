import React, { createContext, useContext, ReactNode } from "react";
import { useProductSearch } from "./useProductSearch";

interface ProductSearchContextType {
  filteredProducts: ReturnType<typeof useProductSearch>["filteredProducts"];
  loading: ReturnType<typeof useProductSearch>["loading"];
  handleSearch: ReturnType<typeof useProductSearch>["handleSearch"];
}

const ProductSearchContext = createContext<
  ProductSearchContextType | undefined
>(undefined);

interface ProductSearchProviderProps {
  children: ReactNode;
}

export const ProductSearchProvider: React.FC<ProductSearchProviderProps> = ({
  children,
}) => {
  const searchState = useProductSearch();

  return (
    <ProductSearchContext.Provider value={searchState}>
      {children}
    </ProductSearchContext.Provider>
  );
};

export const useProductSearchContext = (): ProductSearchContextType => {
  const context = useContext(ProductSearchContext);
  if (context === undefined) {
    throw new Error(
      "useProductSearchContext must be used within a ProductSearchProvider"
    );
  }
  return context;
};

import { useState, useCallback } from "react";
import { Product, ProductCategory } from "../lib/types";
import { mockProducts } from "../lib/mock-data";

interface UseProductSearchReturn {
  filteredProducts: Product[];
  loading: boolean;
  handleSearch: (
    query: string,
    category: ProductCategory | "all",
    organicOnly: boolean
  ) => void;
}

export const useProductSearch = (): UseProductSearchReturn => {
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(mockProducts);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(
    (
      query: string,
      category: ProductCategory | "all",
      organicOnly: boolean
    ) => {
      setLoading(true);

      setTimeout(() => {
        let filtered = mockProducts;

        if (query.trim()) {
          filtered = filtered.filter(
            (product) =>
              product.name.toLowerCase().includes(query.toLowerCase()) ||
              product.description.toLowerCase().includes(query.toLowerCase())
          );
        }

        if (category !== "all") {
          filtered = filtered.filter(
            (product) => product.category === category
          );
        }

        if (organicOnly) {
          filtered = filtered.filter((product) => product.organic);
        }

        setFilteredProducts(filtered);
        setLoading(false);
      }, 500);
    },
    []
  );

  return {
    filteredProducts,
    loading,
    handleSearch,
  };
};

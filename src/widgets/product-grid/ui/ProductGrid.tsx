import React from "react";
import { Product } from "../../../shared/lib/types";
import { ProductCard } from "../../product-card/ui/ProductCard";

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading = false,
}) => {
  const skeletonKeys = [
    "skeleton-1",
    "skeleton-2",
    "skeleton-3",
    "skeleton-4",
    "skeleton-5",
    "skeleton-6",
    "skeleton-7",
    "skeleton-8",
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skeletonKeys.map((key) => (
          <div
            key={key}
            className="bg-white rounded-lg shadow-md border border-gray-200 animate-pulse"
          >
            <div className="h-48 bg-gray-200 rounded-t-lg"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🌾</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Nenhum produto encontrado
        </h3>
        <p className="text-gray-600">
          Tente ajustar os filtros de busca ou volte mais tarde.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

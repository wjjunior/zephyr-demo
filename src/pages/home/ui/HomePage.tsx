import React from "react";
import { Header } from "../../../widgets/header/ui/Header";
import { ProductSearch } from "../../../features/product-search/ui/ProductSearch";
import { ProductGrid } from "../../../widgets/product-grid/ui/ProductGrid";
import { Features } from "../../../widgets/features";
import { useProductSearchContext } from "../../../shared/hooks";

export const HomePage: React.FC = () => {
  const { filteredProducts, loading } = useProductSearchContext();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🌾 Connecting Farmers and Consumers
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Buy fresh agricultural products directly from local farmers.
            Guaranteed quality, fair prices and fast delivery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Partner Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Organic Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                1000+
              </div>
              <div className="text-gray-600">Satisfied Customers</div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <ProductSearch />
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Products
            </h2>
            <p className="text-gray-600">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <ProductGrid products={filteredProducts} loading={loading} />
        </div>

        <Features />
      </main>
    </div>
  );
};

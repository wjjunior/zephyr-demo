import React, { useState } from "react";
import { ProductCategory } from "../../../shared/lib/types";
import { categories } from "../../../shared/lib/mock-data";
import { Button } from "../../../shared/ui/Button";
import { Input } from "../../../shared/ui/Input";

interface ProductSearchProps {
  onSearch: (
    query: string,
    category: ProductCategory | "all",
    organicOnly: boolean
  ) => void;
  loading?: boolean;
}

export const ProductSearch: React.FC<ProductSearchProps> = ({
  onSearch,
  loading = false,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    ProductCategory | "all"
  >("all");
  const [organicOnly, setOrganicOnly] = useState(false);

  const handleSearch = () => {
    onSearch(searchQuery, selectedCategory, organicOnly);
  };

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setOrganicOnly(false);
    onSearch("", "all", false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Search Products
      </h2>

      <div className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Enter product name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1"
          />
          <Button onClick={handleSearch} disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </Button>
        </div>
        <div id="category-filter">
          <label
            htmlFor="category-filter"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Category
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`p-2 rounded-lg border text-sm font-medium transition-colors ${
                selectedCategory === "all"
                  ? "bg-green-100 border-green-500 text-green-700"
                  : "bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              🌾 All
            </button>
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`p-2 rounded-lg border text-sm font-medium transition-colors ${
                  selectedCategory === category.value
                    ? "bg-green-100 border-green-500 text-green-700"
                    : "bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.icon} {category.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="organic-only"
            checked={organicOnly}
            onChange={(e) => setOrganicOnly(e.target.checked)}
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label
            htmlFor="organic-only"
            className="ml-2 block text-sm text-gray-900"
          >
            Organic products only
          </label>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleSearch} disabled={loading} className="flex-1">
            {loading ? "Searching..." : "Apply Filters"}
          </Button>
          <Button variant="secondary" onClick={handleReset} disabled={loading}>
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

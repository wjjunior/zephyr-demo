import React, { useState } from "react";
import { Product } from "../../../shared/lib/types";
import { Button } from "../../../shared/ui/Button";
import { Card } from "../../../shared/ui/Card";
import { useCart } from "../../../features/shopping-cart/model/cart-context";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem, getItemQuantity } = useCart();
  const cartQuantity = getItemQuantity(product.id);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.organic && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Organic
          </div>
        )}
        <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded-full text-sm font-medium">
          ⭐ {product.rating} ({product.reviews})
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-green-600">
            {formatPrice(product.price)}
          </span>
          <span className="text-sm text-gray-500">per {product.unit}</span>
        </div>

        <div className="text-sm text-gray-600 mb-3">
          <p>🌾 {product.farmer.name}</p>
          <p>📍 {product.farmer.location}</p>
          <p>
            📦 Stock: {product.stock} {product.unit}
          </p>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <label
            htmlFor="quantity-select"
            className="text-sm font-medium text-gray-700"
          >
            Quantity:
          </label>
          <select
            id="quantity-select"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <Button
          onClick={handleAddToCart}
          className="w-full"
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? "Out of stock" : "Add to cart"}
        </Button>

        {cartQuantity > 0 && (
          <p className="text-sm text-green-600 mt-2 text-center">
            {cartQuantity} in cart
          </p>
        )}
      </div>
    </Card>
  );
};

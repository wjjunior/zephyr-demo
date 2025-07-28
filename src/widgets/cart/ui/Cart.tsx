import React, { useState } from "react";
import { Button } from "../../../shared/ui/Button";
import { useCart } from "../../../features/shopping-cart/model/cart-context";
import {
  CartIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "../../../shared/ui/icons";

export const Cart: React.FC = () => {
  const { state, removeItem, updateQuantity } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const handleCartClick = () => {
    setIsOpen(!isOpen);
  };

  const handleRemoveItem = (productId: string) => {
    removeItem(productId);
  };

  const handleIncrementQuantity = (
    productId: string,
    currentQuantity: number
  ) => {
    updateQuantity(productId, currentQuantity + 1);
  };

  const handleDecrementQuantity = (
    productId: string,
    currentQuantity: number
  ) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    } else {
      removeItem(productId);
    }
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center space-x-2"
        onClick={handleCartClick}
      >
        <CartIcon className="h-5 w-5" />
        <span>Cart</span>
        {state.items.length > 0 && (
          <span className="bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {state.items.length}
          </span>
        )}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50">
          <h3 className="font-semibold text-gray-900 mb-2">
            Cart ({state.items.length} items)
          </h3>

          {state.items.length === 0 ? (
            <div className="text-center py-8">
              <CartIcon className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">Your cart is empty</p>
              <p className="text-xs text-gray-400">
                Add some products to get started
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-2 mb-3 max-h-48 overflow-y-auto">
                {state.items.slice(0, 3).map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center justify-between text-sm p-2 hover:bg-gray-50 rounded"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="truncate font-medium">
                          {item.product.name}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {formatPrice(item.product.price)} each
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-2">
                      <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
                        <button
                          onClick={() =>
                            handleDecrementQuantity(
                              item.product.id,
                              item.quantity
                            )
                          }
                          className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded transition-colors"
                          title="Decrease quantity"
                        >
                          <MinusIcon className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-gray-700">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleIncrementQuantity(
                              item.product.id,
                              item.quantity
                            )
                          }
                          className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded transition-colors"
                          title="Increase quantity"
                        >
                          <PlusIcon className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-medium text-sm min-w-[60px] text-right">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>

                      <button
                        onClick={() => handleRemoveItem(item.product.id)}
                        className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
                        title="Remove item"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
                {state.items.length > 3 && (
                  <p className="text-xs text-gray-500 text-center py-2 border-t">
                    +{state.items.length - 3} more items
                  </p>
                )}
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>{formatPrice(state.total)}</span>
                </div>
                <Button className="w-full mt-2" size="sm">
                  View cart
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

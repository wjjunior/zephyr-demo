import React, { useState } from "react";
import { Button } from "../../../shared/ui/Button";
import { useCart } from "../../../features/shopping-cart/model/cart-context";

export const Header: React.FC = () => {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl mr-2">🌾</div>
            <h1 className="text-xl font-bold text-green-600">AgroMarket</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/catalog"
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Products
            </a>
            <a
              href="/farmers"
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Farmers
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Cart */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                  />
                </svg>
                <span>Cart</span>
                {state.items.length > 0 && (
                  <span className="bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.items.length}
                  </span>
                )}
              </Button>

              {state.items.length > 0 && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Cart ({state.items.length} items)
                  </h3>
                  <div className="space-y-2 mb-3">
                    {state.items.slice(0, 3).map((item) => (
                      <div
                        key={item.product.id}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="truncate">{item.product.name}</span>
                        <span className="font-medium">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                    {state.items.length > 3 && (
                      <p className="text-xs text-gray-500">
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
                </div>
              )}
            </div>

            <div className="hidden sm:block">
              <Button variant="secondary" size="sm">
                Login
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <a
                href="/"
                className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="/catalog"
                className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Products
              </a>
              <a
                href="/farmers"
                className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Farmers
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <div className="pt-4">
                <Button variant="secondary" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

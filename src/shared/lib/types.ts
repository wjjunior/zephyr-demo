export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  farmer: {
    id: string;
    name: string;
    location: string;
  };
  stock: number;
  unit: string;
  rating: number;
  reviews: number;
  organic: boolean;
  harvestDate: string;
}

export type ProductCategory =
  | "vegetables"
  | "fruits"
  | "grains"
  | "herbs"
  | "dairy"
  | "eggs"
  | "honey"
  | "other";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: "pending" | "confirmed" | "shipped" | "delivered";
  createdAt: string;
  deliveryAddress: string;
}

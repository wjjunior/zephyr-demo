import { Product, ProductCategory } from "./types";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Organic Tomatoes",
    description:
      "Fresh tomatoes grown without pesticides, harvested the morning of delivery.",
    price: 8.5,
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop",
    category: "vegetables",
    farmer: {
      id: "f1",
      name: "Green Farm",
      location: "São Paulo, SP",
    },
    stock: 50,
    unit: "kg",
    rating: 4.8,
    reviews: 127,
    organic: true,
    harvestDate: "2024-01-15",
  },
  {
    id: "2",
    name: "Fuji Apples",
    description:
      "Sweet and crunchy apples, perfect for fresh consumption or recipes.",
    price: 12.9,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop",
    category: "fruits",
    farmer: {
      id: "f2",
      name: "Santa Clara Orchard",
      location: "Rio Grande do Sul, RS",
    },
    stock: 30,
    unit: "kg",
    rating: 4.6,
    reviews: 89,
    organic: false,
    harvestDate: "2024-01-10",
  },
  {
    id: "3",
    name: "Curly Lettuce",
    description: "Fresh and crispy lettuce, perfect for salads and sandwiches.",
    price: 3.5,
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop",
    category: "vegetables",
    farmer: {
      id: "f3",
      name: "Urban Garden",
      location: "Minas Gerais, MG",
    },
    stock: 25,
    unit: "unit",
    rating: 4.7,
    reviews: 156,
    organic: true,
    harvestDate: "2024-01-14",
  },
  {
    id: "4",
    name: "Free-Range Eggs",
    description:
      "Fresh eggs from free-range chickens, with more colorful and flavorful yolks.",
    price: 15.9,
    image:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop",
    category: "eggs",
    farmer: {
      id: "f4",
      name: "Egg Farm",
      location: "Goiás, GO",
    },
    stock: 100,
    unit: "dozen",
    rating: 4.9,
    reviews: 203,
    organic: true,
    harvestDate: "2024-01-15",
  },
  {
    id: "5",
    name: "Fresh Minas Cheese",
    description:
      "Traditional fresh Minas cheese, made with pasture-raised cow's milk.",
    price: 22.5,
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=300&fit=crop",
    category: "dairy",
    farmer: {
      id: "f5",
      name: "Artisanal Cheese Factory",
      location: "Minas Gerais, MG",
    },
    stock: 15,
    unit: "kg",
    rating: 4.8,
    reviews: 178,
    organic: false,
    harvestDate: "2024-01-12",
  },
  {
    id: "6",
    name: "Pure Honey",
    description:
      "Natural honey extracted from wildflowers, without added sugars.",
    price: 28.9,
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop",
    category: "honey",
    farmer: {
      id: "f6",
      name: "São João Apiary",
      location: "Santa Catarina, SC",
    },
    stock: 20,
    unit: "kg",
    rating: 4.9,
    reviews: 234,
    organic: true,
    harvestDate: "2024-01-08",
  },
  {
    id: "7",
    name: "Organic Brown Rice",
    description:
      "Brown rice grown without pesticides, rich in fiber and nutrients.",
    price: 18.5,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
    category: "grains",
    farmer: {
      id: "f7",
      name: "Golden Rice Farm",
      location: "Rio Grande do Sul, RS",
    },
    stock: 40,
    unit: "kg",
    rating: 4.5,
    reviews: 95,
    organic: true,
    harvestDate: "2024-01-05",
  },
  {
    id: "8",
    name: "Fresh Basil",
    description: "Freshly harvested basil, perfect for sauces and seasonings.",
    price: 5.9,
    image:
      "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=400&h=300&fit=crop",
    category: "herbs",
    farmer: {
      id: "f8",
      name: "Aromatic Garden",
      location: "São Paulo, SP",
    },
    stock: 35,
    unit: "bunch",
    rating: 4.7,
    reviews: 142,
    organic: true,
    harvestDate: "2024-01-15",
  },
];

export const categories: {
  value: ProductCategory;
  label: string;
  icon: string;
}[] = [
  { value: "vegetables", label: "Vegetables", icon: "🥬" },
  { value: "fruits", label: "Fruits", icon: "🍎" },
  { value: "grains", label: "Grains", icon: "🌾" },
  { value: "herbs", label: "Herbs", icon: "🌿" },
  { value: "dairy", label: "Dairy", icon: "🥛" },
  { value: "eggs", label: "Eggs", icon: "🥚" },
  { value: "honey", label: "Honey", icon: "🍯" },
  { value: "other", label: "Others", icon: "📦" },
];

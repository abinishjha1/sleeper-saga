
export type ProductType = {
  id: number;
  name: string;
  price: number;
  category: "shoes" | "slippers";
  subCategory: string;
  image: string;
  images: string[];
  sizes: number[];
  colors: string[];
  description: string;
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
};

export const products: ProductType[] = [
  {
    id: 1,
    name: "Urban Runner",
    price: 119.99,
    category: "shoes",
    subCategory: "running",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "White", "Grey"],
    description: "Lightweight running shoes perfect for urban environments. Features responsive cushioning and breathable upper material.",
    featured: true,
    bestSeller: true
  },
  {
    id: 2,
    name: "Comfort Walker",
    price: 89.99,
    category: "shoes",
    subCategory: "casual",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [7, 8, 9, 10, 11],
    colors: ["Brown", "Black", "Tan"],
    description: "Comfortable walking shoes designed for all-day wear. Features cushioned insole and durable outsole.",
    bestSeller: true
  },
  {
    id: 3,
    name: "Elegant Loafer",
    price: 149.99,
    category: "shoes",
    subCategory: "formal",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [8, 9, 10, 11, 12],
    colors: ["Black", "Brown"],
    description: "Classic loafer design with modern comfort features. Perfect for formal occasions or office wear."
  },
  {
    id: 4,
    name: "Cozy Home Slipper",
    price: 49.99,
    category: "slippers",
    subCategory: "indoor",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [7, 8, 9, 10, 11],
    colors: ["Grey", "Black", "Navy"],
    description: "Ultra-soft slippers with memory foam insole. Perfect for relaxing at home.",
    featured: true
  },
  {
    id: 5,
    name: "Adventure Hiker",
    price: 159.99,
    category: "shoes",
    subCategory: "hiking",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Brown", "Grey", "Green"],
    description: "Durable hiking boots with waterproof membrane and superior traction. Ready for any trail.",
    newArrival: true
  },
  {
    id: 6,
    name: "Sport Slide",
    price: 39.99,
    category: "slippers",
    subCategory: "outdoor",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "White", "Red"],
    description: "Comfortable slides perfect for post-workout or casual wear."
  },
  {
    id: 7,
    name: "Classic Oxford",
    price: 129.99,
    category: "shoes",
    subCategory: "formal",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [8, 9, 10, 11, 12],
    colors: ["Black", "Brown"],
    description: "Timeless oxford design with premium leather construction. Perfect for formal occasions."
  },
  {
    id: 8,
    name: "Performance Trainer",
    price: 139.99,
    category: "shoes",
    subCategory: "athletic",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black/Red", "White/Blue", "Grey/Orange"],
    description: "Versatile training shoes for various gym activities. Features lateral support and cushioned heel."
  },
  {
    id: 9,
    name: "Luxury Moccasin",
    price: 69.99,
    category: "slippers",
    subCategory: "indoor",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [7, 8, 9, 10, 11],
    colors: ["Chestnut", "Black", "Navy"],
    description: "Premium moccasin slippers with genuine suede exterior and warm lining.",
    featured: true
  },
  {
    id: 10,
    name: "Daily Sneaker",
    price: 79.99,
    category: "shoes",
    subCategory: "casual",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["White", "Black", "Grey", "Navy"],
    description: "Everyday sneakers with clean design and comfortable fit. Perfect for casual outings.",
    bestSeller: true,
    newArrival: true
  },
  {
    id: 11,
    name: "Fleece Bootie",
    price: 59.99,
    category: "slippers",
    subCategory: "indoor",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [6, 7, 8, 9, 10],
    colors: ["Pink", "Grey", "Lavender"],
    description: "Cozy fleece booties with non-slip sole. Perfect for keeping feet warm during cold months.",
    newArrival: true
  },
  {
    id: 12,
    name: "Minimalist Runner",
    price: 109.99,
    category: "shoes",
    subCategory: "running",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "White", "Grey", "Blue"],
    description: "Lightweight minimalist running shoes with zero drop design. For runners seeking natural foot movement."
  }
];

// Utility functions
export const getProductById = (id: number): ProductType | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: ProductType, limit: number = 4): ProductType[] => {
  return products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
};

export const getFeaturedProducts = (limit: number = 4): ProductType[] => {
  return products
    .filter(p => p.featured)
    .slice(0, limit);
};

export const getBestSellers = (limit: number = 4): ProductType[] => {
  return products
    .filter(p => p.bestSeller)
    .slice(0, limit);
};

export const getNewArrivals = (limit: number = 4): ProductType[] => {
  return products
    .filter(p => p.newArrival)
    .slice(0, limit);
};

export const getProductsByCategory = (category: string): ProductType[] => {
  return products.filter(p => p.category === category);
};

export const getProductsBySubCategory = (subCategory: string): ProductType[] => {
  return products.filter(p => p.subCategory === subCategory);
};

export const getCategories = (): string[] => {
  return [...new Set(products.map(p => p.category))];
};

export const getSubCategories = (): string[] => {
  return [...new Set(products.map(p => p.subCategory))];
};

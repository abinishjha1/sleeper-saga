export type ProductType = {
  id: number;
  name: string;
  price: number;
  category: "shoes" | "slippers";
  subCategory: string;
  brand: string;
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
    brand: "Nike",
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
    brand: "New Balance",
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
    brand: "Cole Haan",
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
    brand: "Ugg",
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
    brand: "The North Face",
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
    brand: "Adidas",
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
    brand: "Allen Edmonds",
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
    brand: "Under Armour",
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
    brand: "Minnetonka",
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
    brand: "Converse",
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
    brand: "Sorel",
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
    brand: "New Balance",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black", "White", "Grey", "Blue"],
    description: "Lightweight minimalist running shoes with zero drop design. For runners seeking natural foot movement."
  },
  {
    id: 13,
    name: "Air Max 270",
    price: 149.99,
    category: "shoes",
    subCategory: "running",
    brand: "Nike",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black/Gold", "White/Red", "Blue/White"],
    description: "Featuring Nike's biggest heel Air unit yet, the Air Max 270 delivers visible cushioning under every step.",
    newArrival: true
  },
  {
    id: 14,
    name: "Ultraboost 24",
    price: 179.99,
    category: "shoes",
    subCategory: "running",
    brand: "Adidas",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Core Black", "Cloud White", "Solar Red"],
    description: "Revolutionary running shoes with responsive Boost cushioning and a supportive Primeknit upper.",
    featured: true
  },
  {
    id: 15,
    name: "Classic Leather",
    price: 79.99,
    category: "shoes",
    subCategory: "casual",
    brand: "Reebok",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["White", "Black", "Grey"],
    description: "Timeless leather sneakers with a clean, iconic design perfect for everyday wear.",
    bestSeller: true
  },
  {
    id: 16,
    name: "574 Core",
    price: 89.99,
    category: "shoes",
    subCategory: "casual",
    brand: "New Balance",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Navy", "Grey", "Burgundy"],
    description: "Heritage-inspired casual shoes with ENCAP midsole cushioning technology for all-day comfort."
  },
  {
    id: 17,
    name: "Alpine Boot",
    price: 189.99,
    category: "shoes",
    subCategory: "hiking",
    brand: "Salomon",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Brown/Orange", "Grey/Blue", "Black/Red"],
    description: "High-performance mountain boots with Gore-Tex waterproofing and advanced grip technology.",
    newArrival: true
  },
  {
    id: 18,
    name: "Authentic Canvas",
    price: 59.99,
    category: "shoes",
    subCategory: "casual",
    brand: "Vans",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    colors: ["Black", "White", "Red", "Navy", "Checkerboard"],
    description: "The original and iconic Vans style with a simple low-top, lace-up canvas design.",
    bestSeller: true
  },
  {
    id: 19,
    name: "Suede Platform",
    price: 89.99,
    category: "shoes",
    subCategory: "casual",
    brand: "Puma",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [6, 7, 8, 9, 10],
    colors: ["Black", "Peach", "Purple"],
    description: "Classic suede sneakers with an elevated platform sole for a modern update to a timeless style."
  },
  {
    id: 20,
    name: "Luxury Slip-On",
    price: 79.99,
    category: "slippers",
    subCategory: "indoor",
    brand: "L.L.Bean",
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    sizes: [7, 8, 9, 10, 11],
    colors: ["Tan", "Brown", "Black"],
    description: "Premium shearling-lined slippers with durable soles suitable for indoor and light outdoor use."
  }
];

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

export const getBrands = (): string[] => {
  return [...new Set(products.map(p => p.brand))];
};

export const searchProducts = (query: string = "", filters: { 
  brand?: string, 
  size?: number,
  category?: string,
  subCategory?: string
} = {}): ProductType[] => {
  const normalizedQuery = query.toLowerCase().trim();
  
  return products.filter(product => {
    const matchesQuery = normalizedQuery === "" || 
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.description.toLowerCase().includes(normalizedQuery) ||
      product.brand.toLowerCase().includes(normalizedQuery) ||
      product.category.toLowerCase().includes(normalizedQuery) ||
      product.subCategory.toLowerCase().includes(normalizedQuery);
    
    const matchesBrand = !filters.brand || product.brand === filters.brand;
    
    const matchesSize = !filters.size || product.sizes.includes(filters.size);
    
    const matchesCategory = !filters.category || product.category === filters.category;
    
    const matchesSubCategory = !filters.subCategory || product.subCategory === filters.subCategory;
    
    return matchesQuery && matchesBrand && matchesSize && matchesCategory && matchesSubCategory;
  });
};

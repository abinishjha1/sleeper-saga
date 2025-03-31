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
  },
  {
    id: 21,
    name: "Canvas Lace-Up",
    price: 65.99,
    category: "shoes",
    subCategory: "casual",
    brand: "Fashion",
    image: "public/lovable-uploads/14375785-ad5d-4ba7-8a29-0fd2b9439b6b.png",
    images: ["public/lovable-uploads/14375785-ad5d-4ba7-8a29-0fd2b9439b6b.png"],
    sizes: [7, 8, 9, 10, 11],
    colors: ["Beige", "Grey"],
    description: "Lightweight canvas shoes with tricolor accent stripe. Perfect for casual everyday wear with exceptional comfort.",
    newArrival: true
  },
  {
    id: 22,
    name: "Textured Canvas",
    price: 69.99,
    category: "shoes",
    subCategory: "casual",
    brand: "Fashion",
    image: "public/lovable-uploads/a44998e9-bd4f-4778-a687-2b01ce8c0dd9.png",
    images: ["public/lovable-uploads/a44998e9-bd4f-4778-a687-2b01ce8c0dd9.png"],
    sizes: [7, 8, 9, 10, 11],
    colors: ["Grey"],
    description: "Textured canvas shoes with tricolor accent detail. These versatile shoes offer both style and comfort for everyday wear.",
    bestSeller: true
  },
  {
    id: 23,
    name: "Patent Derby",
    price: 129.99,
    category: "shoes",
    subCategory: "formal",
    brand: "Fashion",
    image: "public/lovable-uploads/86c2caaa-0002-4a07-8dec-8c089f4c62e1.png",
    images: ["public/lovable-uploads/86c2caaa-0002-4a07-8dec-8c089f4c62e1.png"],
    sizes: [8, 9, 10, 11, 12],
    colors: ["Black/White"],
    description: "Stylish patent leather formal shoes with leopard print details. Perfect for making a statement at formal events.",
    featured: true
  },
  {
    id: 24,
    name: "Classic Oxford",
    price: 119.99,
    category: "shoes",
    subCategory: "formal",
    brand: "Fashion",
    image: "public/lovable-uploads/3a2261d8-9310-46a4-ad61-a64117d3010d.png",
    images: ["public/lovable-uploads/3a2261d8-9310-46a4-ad61-a64117d3010d.png"],
    sizes: [8, 9, 10, 11, 12],
    colors: ["Black"],
    description: "Timeless black oxford shoes perfect for business or formal occasions. Features comfort insole and durable outsole.",
    bestSeller: true
  },
  {
    id: 25,
    name: "Urban Sport",
    price: 89.99,
    category: "shoes",
    subCategory: "casual",
    brand: "Fashion",
    image: "public/lovable-uploads/fceb0e4b-bd53-46b8-97cd-df8c7048ec1f.png",
    images: ["public/lovable-uploads/fceb0e4b-bd53-46b8-97cd-df8c7048ec1f.png"],
    sizes: [7, 8, 9, 10, 11],
    colors: ["Brown/Navy"],
    description: "Stylish casual shoes combining canvas and suede materials. Features contrast color blocking and comfortable cushioned sole.",
    newArrival: true
  },
  {
    id: 26,
    name: "Executive Oxford",
    price: 159.99,
    category: "shoes",
    subCategory: "formal",
    brand: "Fashion",
    image: "public/lovable-uploads/8f40dd51-24c5-47ea-83f0-342b29a8f0ca.png",
    images: ["public/lovable-uploads/8f40dd51-24c5-47ea-83f0-342b29a8f0ca.png"],
    sizes: [8, 9, 10, 11, 12],
    colors: ["Black"],
    description: "Premium patent leather formal oxford shoes. Features subtle texture and clean lines for a professional appearance.",
    featured: true
  },
  {
    id: 27,
    name: "Modern Loafer",
    price: 149.99,
    category: "shoes",
    subCategory: "formal",
    brand: "Fashion",
    image: "public/lovable-uploads/2c657444-2540-47b8-bc02-4590663285ab.png",
    images: ["public/lovable-uploads/2c657444-2540-47b8-bc02-4590663285ab.png"],
    sizes: [8, 9, 10, 11, 12],
    colors: ["Black/White"],
    description: "Contemporary slip-on formal shoes with patent leather accents. Combines style with exceptional comfort.",
    newArrival: true
  },
  {
    id: 28,
    name: "Casual Slip-On",
    price: 59.99,
    category: "shoes",
    subCategory: "casual",
    brand: "Fashion",
    image: "public/lovable-uploads/9bbdde3b-9128-4e25-bf9c-3310d420a310.png",
    images: ["public/lovable-uploads/9bbdde3b-9128-4e25-bf9c-3310d420a310.png"],
    sizes: [7, 8, 9, 10, 11],
    colors: ["Black/Grey"],
    description: "Convenient slip-on casual shoes with contrast stitching. Features comfort insole and elastic side panels for easy wear.",
    bestSeller: true
  },
  {
    id: 29,
    name: "Business Derby",
    price: 129.99,
    category: "shoes",
    subCategory: "formal",
    brand: "Fashion",
    image: "public/lovable-uploads/f5072cc8-2305-4194-887f-e3f230c21b41.png",
    images: ["public/lovable-uploads/f5072cc8-2305-4194-887f-e3f230c21b41.png"],
    sizes: [8, 9, 10, 11, 12],
    colors: ["Black"],
    description: "Classic derby-style formal shoes with sleek leather finish. Perfect for business or formal occasions."
  },
  {
    id: 30,
    name: "Urban Runner",
    price: 79.99,
    category: "shoes",
    subCategory: "casual",
    brand: "Fashion",
    image: "public/lovable-uploads/bcb87fc8-06c8-4949-ab4a-50577021d94d.png",
    images: ["public/lovable-uploads/bcb87fc8-06c8-4949-ab4a-50577021d94d.png"],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Black"],
    description: "Sleek casual shoes with reflective details. Features flexible sole and padded collar for all-day comfort."
  },
  {
    id: 31,
    name: "Patent Tuxedo",
    price: 169.99,
    category: "shoes",
    subCategory: "formal",
    brand: "Fashion",
    image: "public/lovable-uploads/d8bf4462-013c-42d2-b1c9-bdb607167782.png",
    images: ["public/lovable-uploads/d8bf4462-013c-42d2-b1c9-bdb607167782.png"],
    sizes: [8, 9, 10, 11, 12],
    colors: ["Black/White"],
    description: "Elegant two-tone formal shoes. Perfect complement to formal attire with patent leather accents."
  },
  {
    id: 32,
    name: "Canvas High-Top",
    price: 69.99,
    category: "shoes",
    subCategory: "casual",
    brand: "Converse",
    image: "public/lovable-uploads/aba4a12b-e8a9-4c23-b59d-2ef2bdfa6019.png",
    images: ["public/lovable-uploads/aba4a12b-e8a9-4c23-b59d-2ef2bdfa6019.png"],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    colors: ["Green"],
    description: "Classic canvas high-top shoes. Timeless design with durable construction and comfortable fit.",
    featured: true
  },
  {
    id: 33,
    name: "Canvas Low-Top",
    price: 59.99,
    category: "shoes",
    subCategory: "casual",
    brand: "Converse",
    image: "public/lovable-uploads/a8f06e32-7201-4401-94ec-6de504785295.png",
    images: ["public/lovable-uploads/a8f06e32-7201-4401-94ec-6de504785295.png"],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    colors: ["Teal"],
    description: "Vibrant low-top canvas shoes. Features classic design with modern color options and all-day comfort.",
    bestSeller: true
  },
  {
    id: 34,
    name: "Sporty Trainer",
    price: 99.99,
    category: "shoes",
    subCategory: "athletic",
    brand: "Fashion",
    image: "public/lovable-uploads/2d01ee97-0830-4f89-8ac6-d36e850a87e1.png",
    images: ["public/lovable-uploads/2d01ee97-0830-4f89-8ac6-d36e850a87e1.png"],
    sizes: [7, 8, 9, 10, 11],
    colors: ["White"],
    description: "Streamlined athletic shoes with racing-inspired design. Features lightweight construction and responsive cushioning.",
    newArrival: true
  },
  {
    id: 35,
    name: "Athletic Stripe",
    price: 89.99,
    category: "shoes",
    subCategory: "athletic",
    brand: "Fashion",
    image: "public/lovable-uploads/dd747584-594d-4ea9-97e6-0ff4b566df96.png",
    images: ["public/lovable-uploads/dd747584-594d-4ea9-97e6-0ff4b566df96.png"],
    sizes: [7, 8, 9, 10, 11],
    colors: ["White/Navy/Red"],
    description: "Stylish athletic shoes with tricolor detail. Features breathable upper and cushioned sole for active lifestyles."
  },
  {
    id: 36,
    name: "Breathable Trainer",
    price: 79.99,
    category: "shoes",
    subCategory: "athletic",
    brand: "Fashion",
    image: "public/lovable-uploads/1f4f3eb6-0455-423d-92bd-3a1b4bd1d774.png",
    images: ["public/lovable-uploads/1f4f3eb6-0455-423d-92bd-3a1b4bd1d774.png"],
    sizes: [7, 8, 9, 10, 11],
    colors: ["Beige/Navy"],
    description: "Lightweight mesh athletic shoes with contrast accents. Perfect for casual sport activities with excellent breathability.",
    bestSeller: true
  },
  {
    id: 37,
    name: "Everyday Casual",
    price: 69.99,
    category: "shoes",
    subCategory: "casual",
    brand: "Fashion",
    image: "public/lovable-uploads/531c4ae7-4e5b-46b3-acd0-745d11b0e899.png",
    images: ["public/lovable-uploads/531c4ae7-4e5b-46b3-acd0-745d11b0e899.png"],
    sizes: [7, 8, 9, 10, 11],
    colors: ["Black/Plaid"],
    description: "Versatile casual shoes with plaid pattern. Features flexible construction and comfortable padded lining.",
    featured: true
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

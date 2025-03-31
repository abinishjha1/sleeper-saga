
import { useState } from "react";
import { ProductType } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GridIcon, LayoutGridIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductGridProps {
  products: ProductType[];
  title?: string;
  showFilters?: boolean;
}

const ProductGrid = ({ products, title, showFilters = false }: ProductGridProps) => {
  const [sortBy, setSortBy] = useState("featured");
  const [viewType, setViewType] = useState("grid");

  // Sort products based on selected option
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        // For "featured", prioritize featured, then bestSeller, then newArrival
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        if (a.bestSeller && !b.bestSeller) return -1;
        if (!a.bestSeller && b.bestSeller) return 1;
        if (a.newArrival && !b.newArrival) return -1;
        if (!a.newArrival && b.newArrival) return 1;
        return 0;
    }
  });

  return (
    <section className="py-10">
      <div className="container-custom">
        {/* Header with title and filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          {title && <h2 className="text-2xl font-bold">{title}</h2>}
          
          {showFilters && (
            <div className="flex flex-wrap items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
              
              <Tabs value={viewType} onValueChange={setViewType} className="hidden sm:block">
                <TabsList className="bg-muted">
                  <TabsTrigger value="grid" className="px-3">
                    <LayoutGridIcon className="h-4 w-4" />
                  </TabsTrigger>
                  <TabsTrigger value="list" className="px-3">
                    <GridIcon className="h-4 w-4" />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          )}
        </div>

        {/* No products message */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No products found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters.</p>
          </div>
        )}

        {/* Products display */}
        {viewType === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedProducts.map((product) => (
              <div 
                key={product.id} 
                className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg bg-background product-card-shadow"
              >
                <div className="sm:w-1/3 aspect-square bg-secondary/30 rounded-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="sm:w-2/3 flex flex-col">
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 capitalize">{product.category} / {product.subCategory}</p>
                  <p className="mt-2 text-sm line-clamp-2">{product.description}</p>
                  <div className="mt-auto flex flex-wrap items-center justify-between pt-4">
                    <p className="font-semibold text-lg">${product.price.toFixed(2)}</p>
                    <div className="flex gap-2 mt-2 sm:mt-0">
                      {product.newArrival && (
                        <Badge variant="secondary" className="bg-primary text-primary-foreground">New</Badge>
                      )}
                      {product.bestSeller && (
                        <Badge variant="secondary" className="bg-brand-800 text-white">Best Seller</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;

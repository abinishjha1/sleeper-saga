
import { useState, useEffect } from "react";
import { ProductType, getBrands } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GridIcon, LayoutGridIcon, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

interface ProductGridProps {
  products: ProductType[];
  title?: string;
  showFilters?: boolean;
}

const ProductGrid = ({ products, title, showFilters = false }: ProductGridProps) => {
  const [sortBy, setSortBy] = useState("featured");
  const [viewType, setViewType] = useState("grid");
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(products);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  
  const brands = getBrands();
  const allSizes = Array.from(new Set(products.flatMap(p => p.sizes))).sort((a, b) => a - b);

  // Apply filters when they change
  useEffect(() => {
    let result = [...products];
    
    // Apply brand filter
    if (selectedBrand) {
      result = result.filter(p => p.brand === selectedBrand);
    }
    
    // Apply size filter
    if (selectedSize) {
      result = result.filter(p => p.sizes.includes(selectedSize));
    }
    
    // Sort products based on selected option
    result.sort((a, b) => {
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
    
    setFilteredProducts(result);
  }, [products, selectedBrand, selectedSize, sortBy]);
  
  const clearFilters = () => {
    setSelectedBrand(null);
    setSelectedSize(null);
  };

  return (
    <section className="py-10">
      <div className="container-custom">
        {/* Header with title and filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-2">
            {title && <h2 className="text-2xl font-bold">{title}</h2>}
            {(selectedBrand || selectedSize) && (
              <div className="flex flex-wrap gap-1 items-center">
                {selectedBrand && (
                  <Badge variant="outline" className="px-2 py-1">
                    {selectedBrand}
                    <button 
                      className="ml-1 hover:text-primary" 
                      onClick={() => setSelectedBrand(null)}
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedSize && (
                  <Badge variant="outline" className="px-2 py-1">
                    Size: {selectedSize}
                    <button 
                      className="ml-1 hover:text-primary" 
                      onClick={() => setSelectedSize(null)}
                    >
                      ×
                    </button>
                  </Badge>
                )}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-7 px-2 text-xs" 
                  onClick={clearFilters}
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>
          
          {showFilters && (
            <div className="flex flex-wrap items-center gap-4">
              {/* Sort Dropdown */}
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
              
              {/* Filter Button (Mobile) */}
              <Sheet>
                <SheetTrigger asChild className="md:inline-flex">
                  <Button variant="outline" size="sm" className="h-10">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Filter Products</SheetTitle>
                  </SheetHeader>
                  
                  <div className="py-4 space-y-6">
                    {/* Brand Filter */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Brand</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {brands.map(brand => (
                          <div key={brand} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={`brand-${brand}`}
                              checked={selectedBrand === brand}
                              onChange={() => {
                                setSelectedBrand(selectedBrand === brand ? null : brand);
                              }}
                              className="rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor={`brand-${brand}`} className="text-sm">
                              {brand}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Size Filter */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Size</h3>
                      <div className="flex flex-wrap gap-2">
                        {allSizes.map(size => (
                          <Button
                            key={size}
                            variant={selectedSize === size ? "default" : "outline"}
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                          >
                            {size}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <SheetFooter className="sm:justify-between">
                    <Button variant="outline" onClick={clearFilters}>
                      Clear All
                    </Button>
                    <SheetClose asChild>
                      <Button>Apply Filters</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
              
              {/* View Type Tabs */}
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
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No products found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters.</p>
          </div>
        )}

        {/* Products display */}
        {viewType === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
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
                  <p className="text-sm font-medium mt-1">{product.brand}</p>
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

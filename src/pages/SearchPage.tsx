
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { searchProducts, ProductType, getBrands } from "@/data/products";

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("q") || "";
  const initialBrand = queryParams.get("brand") || "";
  const initialSize = queryParams.get("size") ? Number(queryParams.get("size")) : null;
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(initialBrand || null);
  const [selectedSize, setSelectedSize] = useState<number | null>(initialSize);
  
  const brands = getBrands();
  
  // Common sizes
  const commonSizes = [6, 7, 8, 9, 10, 11, 12];
  
  useEffect(() => {
    // Update state from URL when location changes
    const queryParams = new URLSearchParams(location.search);
    const urlQuery = queryParams.get("q") || "";
    const urlBrand = queryParams.get("brand") || "";
    const urlSize = queryParams.get("size") ? Number(queryParams.get("size")) : null;
    
    setSearchQuery(urlQuery);
    setSelectedBrand(urlBrand || null);
    setSelectedSize(urlSize);
    
    // Search products
    const filters: { brand?: string; size?: number } = {};
    if (urlBrand) filters.brand = urlBrand;
    if (urlSize) filters.size = urlSize;
    
    const results = searchProducts(urlQuery, filters);
    setSearchResults(results);
  }, [location.search]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateSearchParams();
  };
  
  const updateSearchParams = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (selectedBrand) params.set("brand", selectedBrand);
    if (selectedSize) params.set("size", selectedSize.toString());
    
    navigate({
      pathname: "/search",
      search: params.toString()
    });
  };
  
  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(selectedBrand === brand ? null : brand);
    setTimeout(updateSearchParams, 0);
  };
  
  const handleSizeSelect = (size: number) => {
    setSelectedSize(selectedSize === size ? null : size);
    setTimeout(updateSearchParams, 0);
  };
  
  const clearFilters = () => {
    setSelectedBrand(null);
    setSelectedSize(null);
    
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    
    navigate({
      pathname: "/search",
      search: params.toString()
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-2xl font-bold mb-6">Search Products</h1>
            
            {/* Search Form */}
            <form onSubmit={handleSearch} className="flex gap-2 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for shoes, brands, or styles..."
                  className="pl-10 pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <X className="h-4 w-4 text-muted-foreground" />
                  </button>
                )}
              </div>
              <Button type="submit">Search</Button>
            </form>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Brand</h3>
                <div className="flex flex-wrap gap-2">
                  {brands.map((brand) => (
                    <Button
                      key={brand}
                      variant={selectedBrand === brand ? "default" : "outline"}
                      size="sm"
                      className="text-xs"
                      onClick={() => handleBrandSelect(brand)}
                    >
                      {brand}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2 pl-4 border-l">
                <h3 className="text-sm font-medium">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {commonSizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      size="sm"
                      className="w-8 h-8 p-0"
                      onClick={() => handleSizeSelect(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              
              {(selectedBrand || selectedSize) && (
                <div className="w-full flex justify-end mt-2">
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
            
            {/* Results Summary */}
            <div className="mb-6">
              <p className="text-lg">
                {searchResults.length === 0
                  ? "No results found"
                  : `Found ${searchResults.length} results`}
                {searchQuery && ` for "${searchQuery}"`}
                {selectedBrand && ` in "${selectedBrand}"`}
                {selectedSize && ` size "${selectedSize}"`}
              </p>
            </div>
          </div>
          
          {/* Search Results */}
          <ProductGrid products={searchResults} showFilters={true} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;

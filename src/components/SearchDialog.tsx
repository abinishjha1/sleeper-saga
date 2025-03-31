
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { getBrands, searchProducts, ProductType } from "@/data/products";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  
  const navigate = useNavigate();
  const brands = getBrands();

  // Common sizes
  const commonSizes = [6, 7, 8, 9, 10, 11, 12];

  // Update search results when query or filters change
  useEffect(() => {
    const filters: { brand?: string; size?: number } = {};
    if (selectedBrand) filters.brand = selectedBrand;
    if (selectedSize) filters.size = selectedSize;
    
    const results = searchProducts(searchQuery, filters);
    setSearchResults(results);
  }, [searchQuery, selectedBrand, selectedSize]);

  const handleProductSelect = (productId: number) => {
    navigate(`/product/${productId}`);
    onOpenChange(false);
  };

  const handleReset = () => {
    setSearchQuery("");
    setSelectedBrand(null);
    setSelectedSize(null);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <div className="flex items-center border-b px-3">
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <CommandInput
          value={searchQuery}
          onValueChange={setSearchQuery}
          placeholder="Search for shoes by name, brand, or type..."
          className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        />
        {(searchQuery || selectedBrand || selectedSize) && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleReset}
            className="h-6 w-6"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="flex overflow-x-auto py-2 px-3 border-b gap-2">
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground">Brand</p>
          <div className="flex flex-wrap gap-1">
            {brands.map((brand) => (
              <Button
                key={brand}
                variant={selectedBrand === brand ? "default" : "outline"}
                size="sm"
                className="text-xs h-7"
                onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
              >
                {brand}
              </Button>
            ))}
          </div>
        </div>

        <div className="pl-4 border-l space-y-1">
          <p className="text-xs font-medium text-muted-foreground">Size</p>
          <div className="flex flex-wrap gap-1">
            {commonSizes.map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? "default" : "outline"}
                size="sm"
                className="text-xs h-7 w-7 p-0"
                onClick={() => setSelectedSize(selectedSize === size ? null : size)}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Products">
          {searchResults.slice(0, 10).map((product) => (
            <CommandItem
              key={product.id}
              onSelect={() => handleProductSelect(product.id)}
              className="flex items-center gap-2 py-2"
            >
              <div className="w-10 h-10 bg-secondary/30 rounded-md overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-cover w-full h-full" 
                />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="truncate font-medium">{product.name}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{product.brand}</span>
                  <span>•</span>
                  <span>${product.price}</span>
                  <span>•</span>
                  <span className="capitalize">{product.category}</span>
                </div>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;

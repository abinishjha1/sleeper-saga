
import { Link } from "react-router-dom";
import { ProductType } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add with default size and color
    addItem(product, product.sizes[0], product.colors[0]);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg bg-background product-card-shadow">
        {/* Product Image */}
        <div className="aspect-square relative overflow-hidden bg-secondary/30">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Product badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.newArrival && (
              <Badge variant="secondary" className="bg-primary text-primary-foreground">New</Badge>
            )}
            {product.bestSeller && (
              <Badge variant="secondary" className="bg-brand-800 text-white">Best Seller</Badge>
            )}
          </div>
          
          {/* Action buttons overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex gap-2">
              <Button size="sm" variant="secondary" className="rounded-full" onClick={handleQuickAdd}>
                <ShoppingBag className="h-4 w-4 mr-1" />
                Quick Add
              </Button>
              <Button size="sm" variant="secondary" className="rounded-full" asChild>
                <Link to={`/product/${product.id}`}>
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-medium text-lg truncate">{product.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            <span className="font-medium">{product.brand}</span> • <span className="capitalize">{product.category} / {product.subCategory}</span>
          </p>
          <div className="mt-2 flex items-center justify-between">
            <p className="font-semibold">${product.price.toFixed(2)}</p>
            <div className="flex gap-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div 
                  key={index} 
                  className="h-3 w-3 rounded-full border border-border"
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                ></div>
              ))}
              {product.colors.length > 3 && (
                <div className="text-xs text-muted-foreground">+{product.colors.length - 3}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

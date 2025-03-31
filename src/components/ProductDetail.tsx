
import { useState } from "react";
import { ProductType, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MinusIcon, PlusIcon, ShoppingBag } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ProductDetailProps {
  product: ProductType;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const { addItem, isInCart } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState<string | null>(null);
  
  const relatedProducts = getRelatedProducts(product);

  const handleAddToCart = () => {
    // Validate selections
    if (!selectedSize) {
      setError("Please select a size");
      return;
    }
    if (!selectedColor) {
      setError("Please select a color");
      return;
    }
    
    // Clear any errors
    setError(null);
    
    // Add to cart
    addItem(product, selectedSize, selectedColor);
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="container-custom py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-secondary/30 rounded-lg overflow-hidden">
            <img
              src={product.images[activeImage] || product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`aspect-square border rounded-md overflow-hidden ${
                  activeImage === index ? "ring-2 ring-primary" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {product.newArrival && (
              <Badge variant="secondary" className="bg-primary text-primary-foreground">New Arrival</Badge>
            )}
            {product.bestSeller && (
              <Badge variant="secondary" className="bg-brand-800 text-white">Best Seller</Badge>
            )}
          </div>
          
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg font-medium mt-1">{product.brand}</p>
          <p className="text-2xl font-semibold mt-2">${product.price.toFixed(2)}</p>
          <p className="text-sm text-muted-foreground mt-1 capitalize">{product.category} / {product.subCategory}</p>
          
          <p className="mt-6">{product.description}</p>
          
          {/* Size Selection */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sm">Size</h3>
              <button className="text-sm text-primary">Size Guide</button>
            </div>
            <RadioGroup
              className="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-2"
              value={selectedSize?.toString() || ""}
              onValueChange={(value) => {
                setSelectedSize(Number(value));
                setError(null);
              }}
            >
              {product.sizes.map((size) => (
                <div key={size}>
                  <RadioGroupItem
                    value={size.toString()}
                    id={`size-${size}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`size-${size}`}
                    className="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border border-input bg-background peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          {/* Color Selection */}
          <div className="mt-6">
            <h3 className="font-medium text-sm mb-2">Color</h3>
            <RadioGroup
              className="flex gap-2 mt-2"
              value={selectedColor || ""}
              onValueChange={(value) => {
                setSelectedColor(value);
                setError(null);
              }}
            >
              {product.colors.map((color) => (
                <div key={color}>
                  <RadioGroupItem
                    value={color}
                    id={`color-${color}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`color-${color}`}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-input peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-primary"
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                </div>
              ))}
            </RadioGroup>
          </div>
          
          {/* Quantity and Add to Cart */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-input rounded-md">
              <Button
                variant="ghost"
                size="icon"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
                className="h-10 w-10 rounded-none"
              >
                <MinusIcon className="h-4 w-4" />
              </Button>
              <span className="w-10 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={increaseQuantity}
                className="h-10 w-10 rounded-none"
              >
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
            <Button 
              className="flex-1 btn-hover"
              onClick={handleAddToCart}
              disabled={isInCart(product.id, selectedSize || 0, selectedColor || '')}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              {isInCart(product.id, selectedSize || 0, selectedColor || '') 
                ? "Added to Cart" 
                : "Add to Cart"}
            </Button>
          </div>
          
          {/* Error message */}
          {error && (
            <p className="mt-2 text-sm text-destructive">{error}</p>
          )}
          
          {/* Product details tabs */}
          <div className="mt-10">
            <Tabs defaultValue="details">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
                <TabsTrigger value="returns">Returns</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-4">
                <div className="space-y-2">
                  <div className="grid grid-cols-2 py-1 border-b">
                    <span className="text-muted-foreground">Brand</span>
                    <span>{product.brand}</span>
                  </div>
                  <div className="grid grid-cols-2 py-1 border-b">
                    <span className="text-muted-foreground">Material</span>
                    <span>Premium Synthetic</span>
                  </div>
                  <div className="grid grid-cols-2 py-1 border-b">
                    <span className="text-muted-foreground">Sole</span>
                    <span>Rubber</span>
                  </div>
                  <div className="grid grid-cols-2 py-1 border-b">
                    <span className="text-muted-foreground">Closure</span>
                    <span>Lace-up</span>
                  </div>
                  <div className="grid grid-cols-2 py-1">
                    <span className="text-muted-foreground">Care Instructions</span>
                    <span>Wipe with a clean, dry cloth</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="shipping" className="mt-4">
                <p>Free standard shipping on all orders over $100. Delivery typically takes 3-5 business days.</p>
                <p className="mt-2">Express shipping available for an additional fee.</p>
              </TabsContent>
              <TabsContent value="returns" className="mt-4">
                <p>We accept returns within 30 days of delivery. Items must be unworn and in original packaging.</p>
                <p className="mt-2">See our full return policy for more details.</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <ProductGrid products={relatedProducts} title="You May Also Like" />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;


import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, X } from "lucide-react";
import { Link } from "react-router-dom";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: number;
  color: string;
}

const CartItem = ({ id, name, price, image, quantity, size, color }: CartItemProps) => {
  const { updateItemQuantity, removeItem } = useCart();

  const handleIncrease = () => {
    updateItemQuantity(id, size, color, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateItemQuantity(id, size, color, quantity - 1);
    } else {
      removeItem(id, size, color);
    }
  };

  const handleRemove = () => {
    removeItem(id, size, color);
  };

  return (
    <div className="flex py-6 border-b">
      {/* Product image */}
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </Link>
      </div>

      {/* Product details */}
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium">
            <Link to={`/product/${id}`} className="hover:text-brand-700 transition-colors">
              <h3>{name}</h3>
            </Link>
            <p className="ml-4">${(price * quantity).toFixed(2)}</p>
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            <span className="capitalize">{color}</span> | Size: {size}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          {/* Quantity controls */}
          <div className="flex items-center border border-input rounded-md">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDecrease}
              className="h-8 w-8 rounded-none p-0"
            >
              <MinusIcon className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleIncrease}
              className="h-8 w-8 rounded-none p-0"
            >
              <PlusIcon className="h-3 w-3" />
            </Button>
          </div>
          
          {/* Remove button */}
          <Button variant="ghost" size="sm" onClick={handleRemove} className="text-muted-foreground">
            <X className="h-4 w-4 mr-1" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

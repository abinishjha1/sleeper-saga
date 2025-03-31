import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { ProductType } from "@/data/products";

type CartItem = {
  product: ProductType;
  quantity: number;
  size: number;
  color: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (product: ProductType, size: number, color: string) => void;
  updateItemQuantity: (productId: number, size: number, color: string, quantity: number) => void;
  removeItem: (productId: number, size: number, color: string) => void;
  clearCart: () => void;
  itemCount: number;
  totalPrice: number;
  isInCart: (productId: number, size: number, color: string) => boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load cart from localStorage on initial load
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setItems(parsedCart);
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
      }
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
    
    // Update derived values
    setItemCount(items.reduce((total, item) => total + item.quantity, 0));
    setTotalPrice(
      items.reduce((total, item) => total + item.product.price * item.quantity, 0)
    );
  }, [items]);

  // Check if a product is already in the cart
  const isInCart = (productId: number, size: number, color: string): boolean => {
    return items.some(
      (item) => 
        item.product.id === productId && 
        item.size === size && 
        item.color === color
    );
  };

  // Add item to cart
  const addItem = (product: ProductType, size: number, color: string) => {
    setItems((prevItems) => {
      // Check if item already in cart
      const existingItemIndex = prevItems.findIndex(
        (item) => 
          item.product.id === product.id && 
          item.size === size && 
          item.color === color
      );

      // If item exists, just increase quantity
      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += 1;
        
        toast({
          title: "Cart updated",
          description: `${product.name} quantity increased to ${newItems[existingItemIndex].quantity}`,
        });
        
        return newItems;
      }

      // Otherwise add new item
      toast({
        title: "Added to cart",
        description: `${product.name} added to your cart`,
      });

      return [...prevItems, { product, quantity: 1, size, color }];
    });
  };

  // Update item quantity
  const updateItemQuantity = (productId: number, size: number, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, size, color);
      return;
    }

    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (
          item.product.id === productId && 
          item.size === size && 
          item.color === color
        ) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  // Remove item from cart
  const removeItem = (productId: number, size: number, color: string) => {
    setItems((prevItems) => {
      const itemToRemove = prevItems.find(
        (item) => 
          item.product.id === productId && 
          item.size === size && 
          item.color === color
      );
      
      if (itemToRemove) {
        toast({
          title: "Removed from cart",
          description: `${itemToRemove.product.name} removed from your cart`,
        });
      }
      
      return prevItems.filter(
        (item) => 
          !(item.product.id === productId && item.size === size && item.color === color)
      );
    });
  };

  // Clear the whole cart
  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        updateItemQuantity,
        removeItem,
        clearCart,
        itemCount,
        totalPrice,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

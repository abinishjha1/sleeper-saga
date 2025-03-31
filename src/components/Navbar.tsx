import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingBag, Search, Menu, X, Sparkles } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const mobile = useMobile();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl">
            FootWonder
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-brand-500/50 to-brand-700/50 p-6 no-underline outline-none focus:shadow-md"
                            href="/category/featured"
                          >
                            <div className="mb-2 mt-4 text-lg font-semibold">
                              Featured Products
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Explore our handpicked selection of featured footwear.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/category/shoes"
                          >
                            <div className="text-sm font-medium leading-none">Shoes</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              All footwear for every occasion
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/category/slippers"
                          >
                            <div className="text-sm font-medium leading-none">Slippers</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Comfortable options for home wear
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/category/best-sellers"
                          >
                            <div className="text-sm font-medium leading-none">Best Sellers</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Our most popular products
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/ai-design" className="flex items-center px-4 py-2 text-sm font-medium">
                    <Sparkles className="w-4 h-4 mr-2" />
                    AI Design
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className="flex items-center px-4 py-2 text-sm font-medium">
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact" className="flex items-center px-4 py-2 text-sm font-medium">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link to="/cart">
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {totalItems}
                  </span>
                )}
              </Link>
            </Button>
            
            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader className="mb-4">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4">
                  <Link to="/" className="py-2 hover:text-primary">
                    Home
                  </Link>
                  <Link to="/category/shoes" className="py-2 hover:text-primary">
                    Shoes
                  </Link>
                  <Link to="/category/slippers" className="py-2 hover:text-primary">
                    Slippers
                  </Link>
                  <Link to="/ai-design" className="py-2 hover:text-primary flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    AI Design
                  </Link>
                  <Link to="/about" className="py-2 hover:text-primary">
                    About
                  </Link>
                  <Link to="/contact" className="py-2 hover:text-primary">
                    Contact
                  </Link>
                  <Link to="/cart" className="py-2 hover:text-primary">
                    Cart ({totalItems})
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

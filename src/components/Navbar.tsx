import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Search, Menu, User } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import SearchDialog from "@/components/SearchDialog";
import { useUser, SignInButton, UserButton, useClerk } from "@clerk/clerk-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();
  const mobile = useIsMobile();
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-bold text-2xl">
            FootWonder
          </Link>

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

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>
            
            {isSignedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 p-0 overflow-hidden">
                    <img src={user?.imageUrl} alt={user?.fullName || "User"} className="h-full w-full object-cover" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/cart")}>
                    My Cart
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/orders")}>
                    Orders
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <SignInButton mode="modal">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </SignInButton>
            )}
            
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link to="/cart">
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {itemCount}
                  </span>
                )}
              </Link>
            </Button>
            
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
                  <Button variant="ghost" className="justify-start px-2 -ml-2" onClick={() => {
                    setSearchOpen(true);
                  }}>
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                  <Link to="/" className="py-2 hover:text-primary">
                    Home
                  </Link>
                  <Link to="/category/shoes" className="py-2 hover:text-primary">
                    Shoes
                  </Link>
                  <Link to="/category/slippers" className="py-2 hover:text-primary">
                    Slippers
                  </Link>
                  <Link to="/about" className="py-2 hover:text-primary">
                    About
                  </Link>
                  <Link to="/contact" className="py-2 hover:text-primary">
                    Contact
                  </Link>
                  <Link to="/cart" className="py-2 hover:text-primary">
                    Cart ({itemCount})
                  </Link>
                  {isSignedIn ? (
                    <>
                      <div className="flex items-center space-x-2 py-2">
                        <div className="h-8 w-8 rounded-full overflow-hidden">
                          <img src={user?.imageUrl} alt={user?.fullName || "User"} className="h-full w-full object-cover" />
                        </div>
                        <div className="text-sm font-medium">{user?.fullName}</div>
                      </div>
                      <Link to="/profile" className="py-2 hover:text-primary">
                        My Profile
                      </Link>
                      <Button variant="outline" onClick={() => signOut()}>
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <Button variant="outline" onClick={() => navigate("/sign-in")}>
                      Sign In
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <SearchDialog 
        open={searchOpen} 
        onOpenChange={setSearchOpen} 
      />
    </header>
  );
};

export default Navbar;

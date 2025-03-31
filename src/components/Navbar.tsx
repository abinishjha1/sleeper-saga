
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const { itemCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navbarClasses = isScrolled
    ? "fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-all duration-300"
    : "fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 transition-all duration-300";

  return (
    <header className={navbarClasses}>
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold">SOLE HAVEN</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-brand-800 transition-colors">
              Home
            </Link>
            <Link to="/category/shoes" className="text-sm font-medium hover:text-brand-800 transition-colors">
              Shoes
            </Link>
            <Link to="/category/slippers" className="text-sm font-medium hover:text-brand-800 transition-colors">
              Slippers
            </Link>
            <Link to="/new-arrivals" className="text-sm font-medium hover:text-brand-800 transition-colors">
              New Arrivals
            </Link>
          </nav>

          {/* Search, Cart & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden sm:flex">
                  <Search className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="p-0">
                <div className="container py-8">
                  <div className="flex items-center gap-2 mb-8">
                    <Search className="h-5 w-5 text-muted-foreground" />
                    <Input 
                      placeholder="Search for shoes, slippers..." 
                      className="flex-1 border-0 border-b rounded-none shadow-none focus-visible:ring-0 px-0" 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">Categories</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/category/shoes" className="text-sm text-muted-foreground hover:text-foreground">
                            Shoes
                          </Link>
                        </li>
                        <li>
                          <Link to="/category/slippers" className="text-sm text-muted-foreground hover:text-foreground">
                            Slippers
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Trending</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/new-arrivals" className="text-sm text-muted-foreground hover:text-foreground">
                            New Arrivals
                          </Link>
                        </li>
                        <li>
                          <Link to="/best-sellers" className="text-sm text-muted-foreground hover:text-foreground">
                            Best Sellers
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium hover:text-brand-800 transition-colors py-2">
                Home
              </Link>
              <Link to="/category/shoes" className="text-sm font-medium hover:text-brand-800 transition-colors py-2">
                Shoes
              </Link>
              <Link to="/category/slippers" className="text-sm font-medium hover:text-brand-800 transition-colors py-2">
                Slippers
              </Link>
              <Link to="/new-arrivals" className="text-sm font-medium hover:text-brand-800 transition-colors py-2">
                New Arrivals
              </Link>
              <div className="pt-2">
                <Input 
                  placeholder="Search for shoes, slippers..." 
                  className="w-full"
                  prefix={<Search className="h-4 w-4 text-muted-foreground" />}
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

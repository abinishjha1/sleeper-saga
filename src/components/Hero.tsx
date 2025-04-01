
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 overflow-hidden bg-gradient-to-r from-brand-100 to-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-primary">Stylist</span> <span className="text-brand-700">Comfort</span> & <span className="text-brand-700">Style</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Discover our premium collection of shoes and slippers designed for comfort and crafted for style.
            </p>
            <div className="mt-8 space-x-4 flex flex-wrap gap-4">
              <Button asChild size="lg" className="btn-hover bg-gradient-to-r from-brand-600 to-brand-800 text-white">
                <Link to="/category/shoes">
                  Shop Shoes <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-hover border-brand-600 text-brand-800 hover:bg-brand-100">
                <Link to="/category/slippers">
                  Shop Slippers
                </Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div>
                <p className="text-3xl font-bold text-brand-800">150+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <p className="text-3xl font-bold text-brand-800">10k+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <p className="text-3xl font-bold text-brand-800">25+</p>
                <p className="text-sm text-muted-foreground">Awards</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[350px] md:h-[450px] w-full bg-secondary rounded-xl overflow-hidden animate-fade-in shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/aba4a12b-e8a9-4c23-b59d-2ef2bdfa6019.png" 
                  alt="Featured product" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 via-background/50 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white">Featured Collection</h3>
                  <p className="text-sm text-white/80 mt-1">Summer 2023</p>
                </div>
              </div>
            </div>
            {/* Decorative elements with updated colors */}
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-brand-400 -z-10"></div>
            <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-primary/30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

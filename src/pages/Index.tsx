
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  getFeaturedProducts, 
  getBestSellers, 
  getNewArrivals, 
  getProductsByCategory 
} from "@/data/products";

const Index = () => {
  const [productTab, setProductTab] = useState("featured");
  
  const featuredProducts = getFeaturedProducts();
  const bestSellers = getBestSellers();
  const newArrivals = getNewArrivals();
  const shoes = getProductsByCategory("shoes").slice(0, 4);
  const slippers = getProductsByCategory("slippers").slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Featured Products */}
        <section className="py-12 bg-secondary/50">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <h2 className="text-3xl font-bold">Our Collection</h2>
              <Tabs value={productTab} onValueChange={setProductTab}>
                <TabsList>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="bestsellers">Best Sellers</TabsTrigger>
                  <TabsTrigger value="new">New Arrivals</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            <TabsContent value="featured" className="mt-6">
              <ProductGrid products={featuredProducts} />
            </TabsContent>
            <TabsContent value="bestsellers" className="mt-6">
              <ProductGrid products={bestSellers} />
            </TabsContent>
            <TabsContent value="new" className="mt-6">
              <ProductGrid products={newArrivals} />
            </TabsContent>
          </div>
        </section>
        
        {/* Categories */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Shop by Category</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Shoes Category */}
              <div className="relative rounded-xl overflow-hidden group">
                <div className="aspect-[4/3] bg-secondary">
                  <img 
                    src="/placeholder.svg" 
                    alt="Shoes Category" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Shoes</h3>
                  <p className="text-white/80 mb-4 max-w-md">
                    Discover our premium collection of shoes designed for every occasion.
                  </p>
                  <a 
                    href="/category/shoes" 
                    className="inline-flex items-center text-white font-medium group-hover:underline"
                  >
                    Shop Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              
              {/* Slippers Category */}
              <div className="relative rounded-xl overflow-hidden group">
                <div className="aspect-[4/3] bg-secondary">
                  <img 
                    src="/placeholder.svg" 
                    alt="Slippers Category" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Slippers</h3>
                  <p className="text-white/80 mb-4 max-w-md">
                    Relax in comfort with our collection of stylish and cozy slippers.
                  </p>
                  <a 
                    href="/category/slippers" 
                    className="inline-flex items-center text-white font-medium group-hover:underline"
                  >
                    Shop Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
              <p className="mb-6">
                Subscribe to our newsletter to receive updates on new arrivals, special offers, and exclusive deals.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 rounded-md border-0 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="px-6 py-2 rounded-md bg-white text-primary font-medium hover:bg-white/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

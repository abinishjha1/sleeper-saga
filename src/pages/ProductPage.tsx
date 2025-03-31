
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "@/data/products";
import { toast } from "@/components/ui/use-toast";
import ProductDetail from "@/components/ProductDetail";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  const productId = parseInt(id || "0");
  const product = getProductById(productId);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      if (!product) {
        toast({
          variant: "destructive",
          title: "Product not found",
          description: "The product you're looking for doesn't exist.",
        });
        navigate("/");
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [product, navigate]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-32 bg-secondary rounded mb-4"></div>
            <div className="h-4 w-48 bg-secondary rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!product) {
    return null; // Will redirect in the useEffect
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <ProductDetail product={product} />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;

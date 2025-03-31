
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const SSOCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // After the SSO callback, redirect to home
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
      <p className="text-center text-muted-foreground">Completing authentication...</p>
    </div>
  );
};

export default SSOCallback;

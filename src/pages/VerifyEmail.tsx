
import { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lock } from "lucide-react";

const VerifyEmail = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [code, setCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const navigate = useNavigate();

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      setIsVerifying(true);
      const result = await signUp.attemptEmailAddressVerification({
        code,
      });
      
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        toast.success("Email verified successfully!");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Verification failed. Please check the code and try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-brand-50 to-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-12">
        <Card className="w-full max-w-md shadow-lg border-brand-100">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-3xl font-bold text-brand-800">Verify your email</CardTitle>
            <CardDescription className="text-muted-foreground">Enter the verification code sent to your email</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleVerify} className="space-y-4">
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Verification code" 
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="pl-10 border-brand-200 focus-visible:ring-brand-500"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-brand-600 to-brand-800 hover:from-brand-700 hover:to-brand-900 text-white shadow-md" 
                disabled={isVerifying}
              >
                {isVerifying ? "Verifying..." : "Verify email"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center space-y-2 pb-6">
            <Button 
              variant="link" 
              className="text-brand-600 hover:text-brand-800"
              onClick={async () => {
                if (!isLoaded) return;
                try {
                  await signUp.prepareEmailAddressVerification({
                    strategy: "email_code",
                  });
                  toast.success("New verification code sent!");
                } catch (error) {
                  console.error(error);
                  toast.error("Failed to resend verification code");
                }
              }}
            >
              Resend code
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default VerifyEmail;

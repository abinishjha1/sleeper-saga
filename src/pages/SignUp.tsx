
import { useState, useEffect } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, LogIn, User, Lock, Eye, EyeOff, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SignUp = () => {
  const { isLoaded, signUp } = useSignUp();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check password match when either password or confirmPassword changes
    if (confirmPassword) {
      setPasswordMatch(password === confirmPassword);
    } else {
      setPasswordMatch(true);
    }
  }, [password, confirmPassword]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);
      const result = await signUp.create({
        firstName,
        lastName,
        emailAddress: email,
        password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      toast.success("Account created! Please check your email for verification.");
      navigate("/sign-in");
    } catch (error) {
      console.error(error);
      toast.error("Sign up failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const signUpWithSocial = async (provider: "oauth_google" | "oauth_facebook") => {
    if (!isLoaded) return;
    
    try {
      const result = await signUp.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/",
      });
      console.log(result);
    } catch (error) {
      console.error(error);
      toast.error(`Failed to sign up with ${provider === "oauth_google" ? "Google" : "Facebook"}`);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-brand-50 to-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
          <div className="hidden md:flex flex-col justify-center items-center">
            <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/photo-1581091226825-a6a2a5aee158.jpg" 
                alt="Sign up" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-800/40 to-transparent flex flex-col justify-end p-8">
                <h2 className="text-3xl font-bold text-white mb-2">Join Our Community</h2>
                <p className="text-white/90">Create an account to access exclusive offers and track your orders.</p>
              </div>
            </div>
          </div>
          
          <Card className="w-full shadow-lg border-brand-100">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-3xl font-bold text-brand-800">Create an account</CardTitle>
              <CardDescription className="text-muted-foreground">Enter your details to get started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-brand-700">First name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                      <Input 
                        id="firstName" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="pl-10 border-brand-200 focus-visible:ring-brand-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-brand-700">Last name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                      <Input 
                        id="lastName" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="pl-10 border-brand-200 focus-visible:ring-brand-500"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-brand-700">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 border-brand-200 focus-visible:ring-brand-500"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-brand-700">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 border-brand-200 focus-visible:ring-brand-500"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? 
                        <EyeOff className="h-4 w-4 text-muted-foreground" /> : 
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      }
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-brand-700">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input 
                      id="confirmPassword" 
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`pl-10 border-brand-200 focus-visible:ring-brand-500 ${!passwordMatch ? "border-red-500" : ""}`}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                      onClick={toggleShowConfirmPassword}
                    >
                      {showConfirmPassword ? 
                        <EyeOff className="h-4 w-4 text-muted-foreground" /> : 
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      }
                    </Button>
                  </div>
                  {!passwordMatch && (
                    <div className="flex items-center text-red-500 text-xs mt-1">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Passwords do not match
                    </div>
                  )}
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-brand-600 to-brand-800 hover:from-brand-700 hover:to-brand-900 text-white shadow-md" 
                  disabled={isLoading || !passwordMatch}
                >
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
              </form>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-brand-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">or continue with</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => signUpWithSocial("oauth_google")} 
                  type="button"
                  className="border-brand-200 hover:bg-brand-50"
                >
                  <Mail className="mr-2 h-4 w-4 text-brand-600" />
                  Google
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => signUpWithSocial("oauth_facebook")} 
                  type="button"
                  className="border-brand-200 hover:bg-brand-50"
                >
                  <LogIn className="mr-2 h-4 w-4 text-brand-600" />
                  Facebook
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center space-y-2 pb-6">
              <div className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-brand-600 hover:text-brand-800" 
                  onClick={() => navigate("/sign-in")}
                >
                  Sign in
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;

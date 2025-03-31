
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Download, RefreshCw } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const AiImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [stylePreset, setStylePreset] = useState("shoes");
  const [creativity, setCreativity] = useState(70);
  const [generationHistory, setGenerationHistory] = useState<string[]>([]);

  // Example style presets for shoe images
  const stylePresets = [
    { id: "shoes", name: "Realistic Shoes" },
    { id: "sneakers", name: "Trendy Sneakers" },
    { id: "formal", name: "Formal Shoes" },
    { id: "slippers", name: "Comfortable Slippers" },
    { id: "boots", name: "Stylish Boots" },
    { id: "concept", name: "Concept Design" },
  ];

  // Examples of prompts to help users get started
  const examplePrompts = [
    "A sleek white and blue running shoe with dynamic design",
    "Elegant black leather formal shoe with subtle stitching",
    "Cozy home slippers in soft grey fleece material",
    "Futuristic neon sneakers with holographic details",
    "Rustic brown hiking boots with rugged soles",
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt first");
      return;
    }

    setIsGenerating(true);
    setGeneratedImage(null);

    try {
      // In a real implementation, this would call an AI image generation API
      // For now, we're simulating the API call with a timeout and placeholder image
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Using placeholder images for demo
      setGeneratedImage("/placeholder.svg");
      
      // Add to history
      setGenerationHistory(prev => [prompt, ...prev.slice(0, 4)]);
      
      toast.success("Image generated successfully!");
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("Failed to generate image. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (!generatedImage) return;
    
    // In a real implementation, this would download the actual generated image
    const link = document.createElement("a");
    link.href = generatedImage;
    link.download = `ai-shoe-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Image downloaded");
  };

  const handleSelectExample = (example: string) => {
    setPrompt(example);
  };

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">AI Shoe Image Generator</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Panel */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Create Your Shoe</CardTitle>
            <CardDescription>
              Describe the shoe you want to generate
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder="Describe the shoe you want to generate in detail..." 
              className="min-h-[120px]"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Style Preset
              </label>
              <Select value={stylePreset} onValueChange={setStylePreset}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a style" />
                </SelectTrigger>
                <SelectContent>
                  {stylePresets.map((style) => (
                    <SelectItem key={style.id} value={style.id}>
                      {style.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Creativity: {creativity}%
              </label>
              <Slider 
                value={[creativity]} 
                onValueChange={(values) => setCreativity(values[0])} 
                min={0} 
                max={100} 
                step={5}
              />
            </div>
            
            <Button 
              onClick={handleGenerate} 
              disabled={isGenerating || !prompt.trim()} 
              className="w-full"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Image"
              )}
            </Button>
          </CardContent>
          <CardFooter className="flex-col items-start">
            <p className="text-sm font-medium mb-2">Example Prompts:</p>
            <div className="flex flex-wrap gap-2">
              {examplePrompts.map((example, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="cursor-pointer hover:bg-secondary/80"
                  onClick={() => handleSelectExample(example)}
                >
                  {example.length > 20 ? example.substring(0, 20) + "..." : example}
                </Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
        
        {/* Result Panel */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Generated Image</CardTitle>
            <CardDescription>
              Your AI-generated shoe will appear here
            </CardDescription>
          </CardHeader>
          <CardContent className="min-h-[400px] flex items-center justify-center bg-secondary/30 rounded-md relative">
            {isGenerating ? (
              <div className="flex flex-col items-center">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="mt-4 text-muted-foreground">Creating your shoe design...</p>
              </div>
            ) : generatedImage ? (
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src={generatedImage} 
                  alt="AI Generated Shoe" 
                  className="max-w-full max-h-[400px] object-contain"
                />
              </div>
            ) : (
              <div className="text-center p-6">
                <p className="text-muted-foreground">Your generated shoe image will appear here</p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => setGeneratedImage(null)}
              disabled={!generatedImage || isGenerating}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Clear
            </Button>
            <Button 
              onClick={handleDownload}
              disabled={!generatedImage || isGenerating}
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {generationHistory.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Your Recent Generations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {generationHistory.map((historyPrompt, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square bg-secondary/30">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Generated shoe ${index + 1}`}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <CardContent className="p-3">
                  <p className="text-sm truncate" title={historyPrompt}>
                    {historyPrompt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AiImageGenerator;

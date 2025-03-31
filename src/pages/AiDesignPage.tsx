
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AiImageGenerator from "@/components/AiImageGenerator";

const AiDesignPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <AiImageGenerator />
      </main>
      <Footer />
    </div>
  );
};

export default AiDesignPage;

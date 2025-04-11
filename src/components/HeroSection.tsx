
import { Button } from "@/components/ui/button";
import ProductImage from "@/public/lovable-uploads/12a44488-37c6-432a-82f6-fb7172122d95.png";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-noizify-light to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient">Convert Noise</span> into <br />
              Sustainable Energy
            </h1>
            <p className="text-lg text-gray-700 md:text-xl max-w-lg">
              Noizify transforms ambient sound into usable electrical energy using advanced piezoelectric technology, making clean energy accessible anywhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-noizify-primary hover:bg-noizify-primary/90 text-lg py-6 px-8">
                Get Started
              </Button>
              <Button variant="outline" className="border-noizify-primary text-noizify-primary hover:bg-noizify-primary/10 text-lg py-6 px-8">
                How It Works
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 pt-4">
              <div>
                <p className="text-3xl font-bold text-noizify-primary">85%</p>
                <p className="text-gray-600">Energy Efficiency</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-noizify-secondary">3 hrs</p>
                <p className="text-gray-600">Device Charging</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-noizify-accent">30dB</p>
                <p className="text-gray-600">Noise Reduction</p>
              </div>
            </div>
          </div>
          
          {/* Right Product Image */}
          <div className="relative flex justify-center items-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl transform transition-all hover:scale-105">
              <img 
                src={ProductImage} 
                alt="Noizify Sound Energy Converter" 
                className="w-full h-auto object-cover"
                onError={(e) => console.error('Image load error:', e)}
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-noizify-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-12 -left-12 w-16 h-16 bg-noizify-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

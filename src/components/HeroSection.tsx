
import { Button } from "@/components/ui/button";

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
          
          {/* Right Animation */}
          <div className="relative">
            <div className="bg-white shadow-xl rounded-2xl p-8 relative z-10 animate-float">
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-r from-noizify-primary/10 to-noizify-secondary/10 rounded-lg flex justify-center items-center">
                <div className="flex items-center h-full justify-around">
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <div 
                      key={num}
                      className="h-16 md:h-24 w-2 bg-noizify-primary rounded-full mx-1"
                      style={{ 
                        animation: `wave ${1 + num * 0.1}s ease-in-out infinite`,
                        animationDelay: `${num * 0.1}s`,
                        backgroundColor: num % 2 ? '#0EA5E9' : '#8B5CF6'
                      }}
                    />
                  ))}
                </div>
                <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="relative w-24 h-24 bg-gradient-to-r from-noizify-primary to-noizify-secondary rounded-full flex items-center justify-center">
                    <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                      <div className="text-noizify-primary font-bold text-sm">NOIZIFY</div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-noizify-accent rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-bold text-gray-800">Sound Energy Conversion</h3>
                <p className="text-gray-600 text-sm mt-1">Transforming environmental noise into clean energy</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 -right-12 w-24 h-24 bg-noizify-accent/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 -left-8 w-16 h-16 bg-noizify-primary/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-noizify-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

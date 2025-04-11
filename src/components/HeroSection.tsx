
import { Button } from "@/components/ui/button";
import ProductImage from "@/public/lovable-uploads/9790a408-f5d3-410b-88a7-582f2373273e.png";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  // Simple mouse parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setRotation({
      x: y * 0.01,
      y: x * 0.01
    });
  };

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
          
          {/* Right Product Image with 3D Effects */}
          <div 
            className="relative flex justify-center items-center perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setRotation({ x: 0, y: 0 })}
          >
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger asChild>
                <div 
                  className="relative w-full max-w-md group cursor-pointer transition-all duration-300"
                  style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* 3D Shadow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-black/20 blur-xl transform translate-y-4 scale-[0.95] opacity-50 group-hover:opacity-70 transition-all duration-300" 
                    style={{ transform: 'translateZ(-30px)' }}
                  ></div>
                  
                  {/* Product Image with 3D Effect */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 group-hover:scale-105"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    <img 
                      src={ProductImage} 
                      alt="Noizify Sound Energy Converter" 
                      className="w-full h-auto object-cover"
                      onError={(e) => console.error('Image load error:', e)}
                    />
                    
                    {/* Highlights */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Reflection/Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transform: 'translateZ(25px)' }}
                  ></div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-white/90 backdrop-blur-sm border-noizify-primary/20">
                <h4 className="text-lg font-semibold">Noizify Device</h4>
                <p className="text-sm text-gray-600">Our flagship energy converter transforms ambient sound waves into clean electrical power.</p>
              </HoverCardContent>
            </HoverCard>
            
            {/* Enhanced Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-noizify-accent/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-12 -left-12 w-16 h-16 bg-noizify-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/3 -left-8 w-8 h-8 bg-noizify-secondary/20 rounded-full blur-lg animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/4 -right-6 w-10 h-10 bg-noizify-green/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

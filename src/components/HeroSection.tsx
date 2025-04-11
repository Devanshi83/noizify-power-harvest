import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const HeroSection = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setRotation({
      x: y * 0.01,
      y: x * 0.01
    });
  };

  const handleImageError = () => {
    console.error('Image failed to load, using fallback');
    setImageError(true);
  };

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-noizify-light to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient">Democratizing</span> Clean Energy Through <span className="text-noizify-accent">Noise</span>
            </h1>
            <p className="text-lg text-gray-700 md:text-xl max-w-lg">
              Noizify empowers communities to transform environmental noise pollution into sustainable electrical energy, making clean power accessible to everyone, everywhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-noizify-primary hover:bg-noizify-primary/90 text-lg py-6 px-8">
                Get Started
              </Button>
              <Button variant="outline" className="border-noizify-primary text-noizify-primary hover:bg-noizify-primary/10 text-lg py-6 px-8">
                How It Works
              </Button>
            </div>
            
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
                  <div 
                    className="absolute inset-0 rounded-2xl bg-black/20 blur-xl transform translate-y-4 scale-[0.95] opacity-50 group-hover:opacity-70 transition-all duration-300" 
                    style={{ transform: 'translateZ(-30px)' }}
                  ></div>
                  
                  <div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 group-hover:scale-105"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    {!imageError ? (
                      <img 
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                        alt="Noizify Sound Energy Converter" 
                        className="w-full h-auto object-cover"
                        onError={handleImageError}
                      />
                    ) : (
                      <div className="bg-gray-200 w-full h-64 flex items-center justify-center">
                        <p className="text-gray-500">Noizify Device Image Unavailable</p>
                      </div>
                    )}
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-white/90 backdrop-blur-sm border-noizify-primary/20">
                <h4 className="text-lg font-semibold">Noizify Device</h4>
                <p className="text-sm text-gray-600">Our flagship energy converter transforms ambient sound waves into clean electrical power for communities worldwide.</p>
              </HoverCardContent>
            </HoverCard>
            
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

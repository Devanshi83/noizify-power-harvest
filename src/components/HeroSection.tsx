
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { AudioWaveform, Search, ArrowLeft, ChevronRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

const HeroSection = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [progressValue, setProgressValue] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setRotation({
      x: y * 0.01,
      y: x * 0.01
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValue(75);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: "EchoWattz",
      image: "/lovable-uploads/fcf6e115-985f-4278-be0b-f97b9159b1c0.png",
      description: "A compact, AI-powered gadget that converts noise into electricity. Easily wearable or mountable, it tracks energy collection in real time and syncs with the Noizify app for insights and optimization.",
      efficiency: "89%",
      status: "New"
    },
    {
      id: 2,
      name: "WaveCaptor Pro",
      image: "/placeholder.svg",
      description: "Our premium sound-to-energy solution with extended battery life and enhanced noise absorption capabilities for industrial environments.",
      efficiency: "92%",
      status: "Popular"
    },
    {
      id: 3,
      name: "SonicPower Mini",
      image: "/placeholder.svg",
      description: "The portable solution for on-the-go energy harvesting, perfect for urban commuters and digital nomads.",
      efficiency: "78%",
      status: "Limited"
    }
  ];

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
            <div className="w-full">
              {/* Product Showcase */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl overflow-hidden border border-gray-100">
                {/* Store Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="rounded-full p-0 w-8 h-8">
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <div className="flex items-center">
                      <div className="bg-gray-50 px-3 py-2 rounded-lg">
                        <img 
                          src="https://via.placeholder.com/80x20" 
                          alt="Noizify Logo" 
                          className="h-5" 
                        />
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="rounded-full p-0 w-8 h-8 bg-violet-100 text-violet-500 hover:bg-violet-200">
                    <span className="sr-only">User profile</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </Button>
                </div>

                <h2 className="text-2xl font-bold mb-4">Noizify Store</h2>
                
                {/* Search Bar */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search devices" 
                    className="w-full bg-gray-50 py-2 pl-10 pr-4 rounded-lg border-0 focus:ring-2 focus:ring-noizify-primary/20 text-sm"
                  />
                </div>
                
                {/* Featured Product */}
                <div 
                  className="relative rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-gray-700 to-gray-900" 
                  style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="aspect-square h-full w-full relative">
                    <img 
                      src={products[activeProduct].image} 
                      alt={products[activeProduct].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Product Indicator Dots */}
                <div className="flex justify-center gap-2 mb-4">
                  {products.map((product, index) => (
                    <button 
                      key={product.id} 
                      onClick={() => setActiveProduct(index)}
                      className={`w-2 h-2 rounded-full transition-all ${index === activeProduct ? 'bg-green-500 scale-125' : 'bg-gray-300'}`}
                      aria-label={`View ${product.name}`}
                    />
                  ))}
                </div>

                {/* Product Info */}
                <div className="space-y-2 mb-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{products[activeProduct].name}</h3>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {products[activeProduct].status}
                    </Badge>
                  </div>
                  <p className="text-gray-700 text-sm">{products[activeProduct].description}</p>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-800">
                    {products[activeProduct].efficiency} Efficient
                  </span>
                  <Button variant="ghost" className="text-noizify-primary hover:bg-noizify-primary/5 p-0 h-8">
                    Details <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
            
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

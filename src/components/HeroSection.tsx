
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { AudioWaveform, UserRound, Zap, Battery, Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [progressValue, setProgressValue] = useState(0);
  
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

            {/* User Profile Section */}
            <Card className="mt-6 border border-noizify-primary/20 bg-white/80 backdrop-blur-sm overflow-hidden shadow-lg animate-fade-in">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16 border-2 border-noizify-primary">
                    <AvatarImage src="https://i.pravatar.cc/150" alt="User profile" />
                    <AvatarFallback className="bg-noizify-primary text-white text-xl">JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Jane Doe</h3>
                    <p className="text-sm text-gray-600">Energy Contributor</p>
                    <div className="mt-2">
                      <Progress 
                        value={progressValue} 
                        className="h-2 bg-gray-200"
                        indicatorClassName="bg-gradient-to-r from-noizify-primary to-noizify-secondary" 
                      />
                      <div className="mt-1 flex justify-between text-xs text-gray-600">
                        <span>Energy Level</span>
                        <span>{progressValue}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="flex flex-col items-center justify-center bg-noizify-light rounded-lg p-2">
                    <Zap className="text-noizify-primary h-5 w-5 mb-1" />
                    <p className="font-medium text-sm">12.5 kW</p>
                    <p className="text-xs text-gray-600">Generated</p>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-noizify-light rounded-lg p-2">
                    <Battery className="text-noizify-green h-5 w-5 mb-1" />
                    <p className="font-medium text-sm">84%</p>
                    <p className="text-xs text-gray-600">Efficiency</p>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-noizify-light rounded-lg p-2">
                    <Shield className="text-noizify-secondary h-5 w-5 mb-1" />
                    <p className="font-medium text-sm">9.2</p>
                    <p className="text-xs text-gray-600">Impact Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
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
                    className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 group-hover:scale-105 bg-gradient-to-br from-noizify-primary/10 to-noizify-secondary/10 p-6"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    <div className="flex flex-col items-center justify-center h-64 relative">
                      <AudioWaveform className="text-noizify-primary w-16 h-16 mb-4" />
                      
                      <div className="flex items-end justify-center space-x-1 h-32 w-full">
                        {[...Array(20)].map((_, i) => {
                          const height = Math.sin((i * 0.5) + 1) * 50 + 30;
                          return (
                            <div 
                              key={i}
                              className="w-2 bg-gradient-to-t from-noizify-primary to-noizify-secondary rounded-full"
                              style={{ 
                                height: `${height}%`,
                                animationName: 'wave',
                                animationDuration: '1.5s',
                                animationIterationCount: 'infinite',
                                animationDelay: `${i * 0.05}s`,
                                animationTimingFunction: 'ease-in-out'
                              }}
                            ></div>
                          );
                        })}
                      </div>

                      <div className="mt-6 text-center">
                        <p className="text-noizify-dark font-medium">Noizify Sound Converter</p>
                        <p className="text-sm text-gray-600">Converting Sound to Energy</p>
                      </div>

                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-noizify-primary/5 to-noizify-secondary/5 rounded-2xl"></div>
                    </div>
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

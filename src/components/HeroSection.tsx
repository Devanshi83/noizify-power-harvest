
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-noizify-light to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gradient">Democratizing</span> Clean Energy Through <span className="text-noizify-accent">Noise</span>
          </h1>
          <p className="text-lg text-gray-700 md:text-xl max-w-2xl mx-auto">
            Noizify empowers communities to transform environmental noise pollution into sustainable electrical energy, making clean power accessible to everyone, everywhere.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button className="bg-noizify-primary hover:bg-noizify-primary/90 text-lg py-6 px-8">
              Get Started
            </Button>
            <Button variant="outline" className="border-noizify-primary text-noizify-primary hover:bg-noizify-primary/10 text-lg py-6 px-8">
              How It Works
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 mt-10 pt-4">
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
      </div>
    </section>
  );
};

export default HeroSection;

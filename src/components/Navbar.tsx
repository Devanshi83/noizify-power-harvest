
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="font-bold text-2xl text-noizify-dark">
              <span className="text-gradient">Noizify</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-noizify-primary font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-noizify-primary font-medium">How It Works</a>
            <a href="#benefits" className="text-gray-700 hover:text-noizify-primary font-medium">Benefits</a>
            <a href="#app" className="text-gray-700 hover:text-noizify-primary font-medium">App</a>
            <Button className="bg-noizify-primary hover:bg-noizify-primary/90">Pre-Order Now</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4 flex flex-col">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-noizify-primary font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-700 hover:text-noizify-primary font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="text-gray-700 hover:text-noizify-primary font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#app" 
              className="text-gray-700 hover:text-noizify-primary font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              App
            </a>
            <Button className="bg-noizify-primary hover:bg-noizify-primary/90 w-full">
              Pre-Order Now
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;


import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-noizify-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-gradient">Noizify</span>
            </h3>
            <p className="text-gray-300">
              Transforming noise into clean, sustainable energy for a quieter and greener future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-white">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-white">How It Works</a>
              </li>
              <li>
                <a href="#app" className="text-gray-300 hover:text-white">Mobile App</a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Stay Updated</h4>
            <p className="text-gray-300">Subscribe to our newsletter</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-l outline-none text-gray-800 w-full"
              />
              <button className="bg-noizify-primary px-4 py-2 rounded-r">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Noizify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

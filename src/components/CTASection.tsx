
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-noizify-primary to-noizify-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Noise into Clean Energy?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join our early adopters program and be among the first to experience the 
            revolutionary power of sound energy harvesting with Noizify.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Pre-Order Now</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Input 
                type="text" 
                placeholder="Your Name" 
                className="bg-white/20 border-white/20 text-white placeholder:text-white/60 focus:border-white"
              />
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/20 border-white/20 text-white placeholder:text-white/60 focus:border-white"
              />
            </div>
            
            <Button size="lg" className="w-full bg-white text-noizify-primary hover:bg-white/90">
              Reserve Your Noizify Device
            </Button>
            
            <p className="text-sm text-white/70 mt-4">
              Limited pre-order spots available. Expected shipping Q2 2025.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 mt-12">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>1-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

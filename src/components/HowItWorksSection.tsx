
import { ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Sound Collection",
      description: "Advanced microphones capture ambient sound waves from the environment.",
      color: "from-noizify-primary to-noizify-primary/60"
    },
    {
      number: "02",
      title: "Conversion Process",
      description: "Piezoelectric materials convert sound vibrations into electrical energy.",
      color: "from-noizify-secondary to-noizify-secondary/60"
    },
    {
      number: "03",
      title: "Energy Storage",
      description: "Harvested energy is stored in high-efficiency capacitors for later use.",
      color: "from-noizify-accent to-noizify-accent/60"
    },
    {
      number: "04",
      title: "Power Delivery",
      description: "Stored power is delivered to devices through standard USB connections.",
      color: "from-noizify-green to-noizify-green/60"
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient">Noizify</span> Works
          </h2>
          <p className="text-gray-600 text-lg">
            Our innovative technology transforms ambient noise into clean, usable energy 
            through a simple but powerful four-step process.
          </p>
        </div>
        
        <div className="relative">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`bg-gradient-to-br ${step.color} rounded-xl p-8 h-full`}>
                  <span className="text-5xl font-bold text-white/20">{step.number}</span>
                  <h3 className="text-xl font-bold text-white mt-4 mb-3">{step.title}</h3>
                  <p className="text-white/80">{step.description}</p>
                </div>
                
                {/* Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-white rounded-full p-2 shadow-lg">
                      <ArrowRight className="text-noizify-primary" size={20} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Background Decorations */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-noizify-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-noizify-secondary/5 rounded-full blur-3xl -z-10"></div>
        </div>
        
        {/* Technical Details */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 shadow-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-noizify-primary mr-3"></div>
                  <span className="text-gray-700">Peak Harvesting Capacity: 5W in optimal noise conditions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-noizify-primary mr-3"></div>
                  <span className="text-gray-700">Frequency Response: 20Hz - 20kHz (full audio spectrum)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-noizify-primary mr-3"></div>
                  <span className="text-gray-700">Storage Capacity: 3,000mAh lithium-polymer battery</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-noizify-primary mr-3"></div>
                  <span className="text-gray-700">Noise Reduction: Up to 30dB in immediate vicinity</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-noizify-primary mr-3"></div>
                  <span className="text-gray-700">Connectivity: Bluetooth 5.0 for app integration</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Energy Output Examples</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-noizify-secondary mr-3"></div>
                  <span className="text-gray-700">Smartphone: 2-3 hours of charge from 8 hours of ambient city noise</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-noizify-secondary mr-3"></div>
                  <span className="text-gray-700">Wireless Earbuds: Full charge from 3 hours of busy café noise</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-noizify-secondary mr-3"></div>
                  <span className="text-gray-700">LED Light: 8+ hours of illumination from daily household noise</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-noizify-secondary mr-3"></div>
                  <span className="text-gray-700">IoT Sensors: Continuous power in industrial environments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

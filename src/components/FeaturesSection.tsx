
import { Battery, Volume2, CloudLightning, HeadphonesIcon } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon,
  title,
  description,
  color
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-5`}>
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Volume2,
      title: "Noise Absorption",
      description: "Absorbs ambient noise and reduces sound pollution in your environment by up to 30dB.",
      color: "bg-noizify-primary"
    },
    {
      icon: Battery,
      title: "Energy Conversion",
      description: "Transforms captured sound waves into usable electrical energy to power small devices.",
      color: "bg-noizify-secondary"
    },
    {
      icon: CloudLightning,
      title: "Efficient Storage",
      description: "Advanced capacitors store harvested energy for on-demand use when you need it most.",
      color: "bg-noizify-accent"
    },
    {
      icon: HeadphonesIcon,
      title: "Smart Monitoring",
      description: "Track energy generation and device performance through our companion mobile app.",
      color: "bg-noizify-green"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for <span className="text-gradient">Energy Harvesting</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Noizify combines cutting-edge piezoelectric technology with smart design
            to create a device that solves two problems at once: noise pollution and 
            sustainable energy generation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

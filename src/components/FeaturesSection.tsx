
import { Battery, Volume2, CloudLightning, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeatureCard = ({ 
  icon: Icon,
  title,
  description,
  color,
  visualMetric,
  metricLabel
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  visualMetric: string;
  metricLabel: string;
}) => {
  return (
    <Card className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden">
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-5`}>
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`absolute top-0 left-0 h-full ${color.replace('bg-', 'bg-')}/80 rounded-full`}
              style={{ width: visualMetric }}
            ></div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-600">0</span>
            <span className={`text-sm font-medium ${color.replace('bg-', 'text-')}`}>{metricLabel}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Volume2,
      title: "Noise Absorption",
      description: "Absorbs ambient noise and reduces sound pollution in your environment.",
      color: "bg-noizify-primary",
      visualMetric: "75%",
      metricLabel: "30dB Reduction"
    },
    {
      icon: Battery,
      title: "Energy Conversion",
      description: "Transforms captured sound waves into usable electrical energy.",
      color: "bg-noizify-secondary",
      visualMetric: "85%",
      metricLabel: "85% Efficiency"
    },
    {
      icon: CloudLightning,
      title: "Efficient Storage",
      description: "Advanced capacitors store harvested energy for on-demand use.",
      color: "bg-noizify-accent",
      visualMetric: "90%",
      metricLabel: "24hr Capacity" 
    },
    {
      icon: HeadphonesIcon,
      title: "Smart Monitoring",
      description: "Track energy generation and device performance through our app.",
      color: "bg-noizify-green",
      visualMetric: "65%",
      metricLabel: "Real-time Data"
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

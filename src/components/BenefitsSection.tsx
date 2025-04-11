
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const BenefitCard = ({ 
  title, 
  description, 
  image,
  benefits,
  reversed = false
}: { 
  title: string; 
  description: string; 
  image: string;
  benefits: string[];
  reversed?: boolean;
}) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
      <div className="space-y-6 order-2 lg:order-none">
        <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
        
        <div className="space-y-4 mt-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-3 mt-0.5 bg-noizify-primary/20 rounded-full p-1">
                <Check size={16} className="text-noizify-primary" />
              </div>
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
      
      <Card className={`w-full overflow-hidden rounded-xl shadow-lg order-1 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="aspect-video w-full relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="p-8">
            <img 
              src={image} 
              alt={title} 
              className="rounded-lg max-h-72 w-auto mx-auto object-cover shadow-md"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-noizify-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefits & <span className="text-gradient">Use Cases</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how Noizify can transform noisy environments while providing 
            sustainable power for various applications.
          </p>
        </div>
        
        <div className="space-y-24">
          <BenefitCard
            title="Urban Living Spaces"
            description="Turn the noise pollution of city living into a valuable resource while making your environment more peaceful."
            image="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800"
            benefits={[
              "Quieter apartments near busy streets or construction",
              "Sustainable charging for home devices",
              "Reduced energy bills through passive generation",
              "Contribute to city noise reduction efforts"
            ]}
          />
          
          <BenefitCard
            title="Remote & Rural Areas"
            description="Provide reliable power in areas where electricity infrastructure is limited or unreliable."
            image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800"
            benefits={[
              "Power critical communication devices",
              "Sustainable lighting solutions",
              "Energy independence from centralized grids",
              "Low maintenance power generation"
            ]}
            reversed={true}
          />
          
          <BenefitCard
            title="Industrial Environments"
            description="Convert industrial noise pollution into a valuable resource for powering sensors and equipment."
            image="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800"
            benefits={[
              "Self-powered IoT sensors for monitoring",
              "Reduced workplace noise pollution",
              "Lower operational energy costs",
              "Increased workplace safety and comfort"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

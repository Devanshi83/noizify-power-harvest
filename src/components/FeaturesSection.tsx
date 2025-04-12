
import { Bell, Award, Clock, BarChart3, Battery, Volume2, CloudLightning, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

// Metric card component with animated value
const MetricCard = ({ 
  icon: Icon,
  title,
  value,
  suffix,
  color,
}: {
  icon: React.ElementType;
  title: string;
  value: number;
  suffix?: string;
  color: string;
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < value) {
        setCount(prev => Math.min(prev + Math.ceil(value/20), value));
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [count, value]);
  
  return (
    <Card className="bg-white hover:shadow-xl transition-all duration-300">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center`}>
            <Icon size={20} className="text-white" />
          </div>
          <span className={`text-xl font-bold ${color.replace('bg-', 'text-')}`}>
            {count}{suffix}
          </span>
        </div>
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
      </CardContent>
    </Card>
  );
};

// Feature card with progress bar
const FeatureCard = ({ 
  icon: Icon,
  title,
  description,
  color,
  visualMetric,
  metricLabel,
  progress
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  visualMetric: string;
  metricLabel: string;
  progress: number;
}) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentProgress < progress) {
        setCurrentProgress(prev => Math.min(prev + 2, progress));
      }
    }, 20);
    
    return () => clearTimeout(timer);
  }, [currentProgress, progress]);

  return (
    <Card className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden">
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-5`}>
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Progress 
            value={currentProgress} 
            className={`h-3 bg-gray-100`} 
            indicatorClassName={`${color.replace('bg-', 'bg-')}/80`}
          />
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-600">0</span>
            <span className={`text-sm font-medium ${color.replace('bg-', 'text-')}`}>{metricLabel}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Chart component for the trends section
const SimpleChart = () => {
  return (
    <div className="relative h-32 w-full mt-4">
      {/* Bars for bar chart */}
      <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-2">
        {[35, 45, 25, 55, 65, 40, 60, 75, 50, 85, 70, 90].map((height, i) => (
          <div 
            key={i} 
            className="w-[7%] bg-noizify-primary hover:bg-noizify-accent transition-all duration-300 rounded-t-sm" 
            style={{height: `${height}%`}}
          />
        ))}
      </div>
      {/* Line for trend line */}
      <svg className="absolute top-0 left-0 w-full h-full" style={{overflow: 'visible'}}>
        <path 
          d={`M 10 ${32*0.65} C 40 ${32*0.55}, 80 ${32*0.75}, 100 ${32*0.25} S 150 ${32*0.15}, 200 ${32*0.45} S 250 ${32*0.2}, 300 ${32*0.3}`} 
          fill="none" 
          stroke="#7E69AB" 
          strokeWidth="2"
        />
      </svg>
    </div>
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
      metricLabel: "30dB Reduction",
      progress: 75
    },
    {
      icon: Battery,
      title: "Energy Conversion",
      description: "Transforms captured sound waves into usable electrical energy.",
      color: "bg-noizify-secondary",
      visualMetric: "85%",
      metricLabel: "85% Efficiency",
      progress: 85
    },
    {
      icon: CloudLightning,
      title: "Efficient Storage",
      description: "Advanced capacitors store harvested energy for on-demand use.",
      color: "bg-noizify-accent",
      visualMetric: "90%",
      metricLabel: "24hr Capacity",
      progress: 90 
    },
    {
      icon: HeadphonesIcon,
      title: "Smart Monitoring",
      description: "Track energy generation and device performance through our app.",
      color: "bg-noizify-green",
      visualMetric: "65%",
      metricLabel: "Real-time Data",
      progress: 65
    }
  ];

  const metrics = [
    { 
      icon: Bell, 
      title: "Best Noise Zones", 
      value: 8, 
      suffix: "", 
      color: "bg-blue-100" 
    },
    { 
      icon: Award, 
      title: "Rewards", 
      value: 15, 
      suffix: "", 
      color: "bg-yellow-100" 
    },
    { 
      icon: Clock, 
      title: "Peak Time Alerts", 
      value: 24, 
      suffix: "h", 
      color: "bg-purple-100" 
    },
    { 
      icon: BarChart3, 
      title: "Real-time Tracking", 
      value: 100, 
      suffix: "%", 
      color: "bg-indigo-100" 
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

        {/* Metrics Row - Similar to the reference image */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        <div className="mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Energy Insights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Current Energy Level</h4>
                <div className="bg-gray-50 rounded-lg p-4 relative h-44 overflow-hidden">
                  <div className="flex items-center h-full justify-center">
                    {/* Sound wave visualization */}
                    {[...Array(20)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-1.5 mx-0.5 rounded-full bg-noizify-primary" 
                        style={{
                          height: `${20 + Math.sin(i/2) * 60}%`,
                          animationDelay: `${i * 0.1}s`,
                          animation: 'pulse 1.5s infinite'
                        }}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <p className="text-gray-500 text-sm">Harvested Today</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Weekly Trends</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <SimpleChart />
                  <div className="text-center mt-2">
                    <p className="text-gray-500 text-sm">Energy Efficiency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-6">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Achievements</h3>
          <div className="inline-flex bg-white rounded-full p-2 shadow-md">
            <div className="px-6 py-2 text-center border-r border-gray-200">
              <div className="text-noizify-primary">
                <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-xs mt-1">Home</div>
            </div>
            <div className="px-6 py-2 text-center border-r border-gray-200">
              <div className="text-gray-400">
                <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582a1 1 0 01.646.942V9.5a1 1 0 01-.5.866l-4 2.31a1 1 0 01-1 0l-4-2.31A1 1 0 015 9.5V6.847a1 1 0 01.646-.942L9.5 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-xs mt-1">Insights</div>
            </div>
            <div className="px-6 py-2 text-center">
              <div className="text-gray-400">
                <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                </svg>
              </div>
              <div className="text-xs mt-1">Store</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

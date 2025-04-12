import { Bell, Award, Clock, BarChart3, Battery, Volume2, CloudLightning, HeadphonesIcon, Trophy, Medal, Star, CheckCircle, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"; 

const MetricCard = ({ 
  icon: Icon,
  title,
  value,
  suffix,
  color,
  iconColor,
  iconBackground,
  onClick
}: {
  icon: React.ElementType;
  title: string;
  value: number;
  suffix?: string;
  color: string;
  iconColor: string;
  iconBackground: string;
  onClick?: () => void;
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
    <Card 
      className={`bg-white hover:shadow-xl transition-all duration-300 ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className={`w-10 h-10 rounded-full ${iconBackground} flex items-center justify-center`}>
            <Icon size={20} className={`${iconColor}`} />
          </div>
          <span className={`text-xl font-bold ${color}`}>
            {count}{suffix}
          </span>
        </div>
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
      </CardContent>
    </Card>
  );
};

const FeatureCard = ({ 
  icon: Icon,
  title,
  description,
  color,
  iconBackground,
  iconColor,
  visualMetric,
  metricLabel,
  progress
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  iconBackground: string;
  iconColor: string;
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
        <div className={`w-12 h-12 rounded-lg ${iconBackground} flex items-center justify-center mb-5`}>
          <Icon size={24} className={`${iconColor}`} />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Progress 
            value={currentProgress} 
            className={`h-3 bg-gray-100`} 
            indicatorClassName={`${color}`}
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

const AchievementBadge = ({ 
  icon: Icon, 
  title, 
  level, 
  unlocked, 
  progress,
  color,
  textColor
}: { 
  icon: React.ElementType; 
  title: string; 
  level: number; 
  unlocked: boolean; 
  progress: number;
  color?: string;
  textColor?: string;
}) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, Math.random() * 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`group relative ${animate ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className={`
        rounded-xl p-4 flex flex-col items-center justify-center relative 
        ${!unlocked && color ? color : (unlocked 
          ? 'bg-gradient-to-br from-amber-100 to-amber-50 shadow-md' 
          : 'bg-gray-100'
        )}
        transition-all duration-300
        hover:scale-105
        ${unlocked ? 'hover:shadow-xl hover:shadow-amber-200/50' : ''}
        aspect-square
      `}>
        <div className={`
          absolute inset-0 rounded-xl 
          ${unlocked ? 'bg-amber-500/5' : 'bg-gray-200/50'} 
          ${unlocked && level >= 3 ? 'animate-pulse' : ''}
        `} />
        
        <div className={`
          relative w-14 h-14 rounded-full flex items-center justify-center mb-3
          ${unlocked 
            ? 'bg-gradient-to-br from-amber-400 to-amber-600' 
            : 'bg-gray-300'
          }
          ${unlocked ? 'shadow-lg shadow-amber-200/50' : ''}
        `}>
          <Icon size={28} className={`${unlocked ? 'text-white' : 'text-gray-400'}`} />
          
          {level >= 2 && unlocked && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-indigo-500 text-white text-xs flex items-center justify-center shadow-md">
              {level}
            </span>
          )}
        </div>
        
        <h4 className={`text-sm font-bold ${!unlocked && textColor ? textColor : (unlocked ? 'text-gray-800' : 'text-gray-400')} text-center mb-1`}>
          {title}
        </h4>
        
        {!unlocked && progress > 0 && (
          <>
            <Progress value={progress} className="h-1 w-16 mt-1 bg-gray-200" indicatorClassName="bg-amber-400" />
            <span className="text-xs text-gray-400 mt-1">{progress}%</span>
          </>
        )}

        <div className={`
          absolute -top-1 -right-1
          transition-opacity duration-300
          opacity-0 group-hover:opacity-100
          ${!unlocked ? 'hidden' : ''}
        `}>
          {Array(level).fill(0).map((_, i) => (
            <Star key={i} size={10} fill="#FFD700" stroke="#FFD700" className="inline-block" />
          ))}
        </div>
      </div>
    </div>
  );
};

const SimpleChart = () => {
  return (
    <div className="relative h-32 w-full mt-4">
      <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-2">
        {[35, 45, 25, 55, 65, 40, 60, 75, 50, 85, 70, 90].map((height, i) => (
          <div 
            key={i} 
            className="w-[7%] bg-noizify-primary hover:bg-noizify-accent transition-all duration-300 rounded-t-sm" 
            style={{height: `${height}%`}}
          />
        ))}
      </div>
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
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

  const features = [
    {
      icon: Volume2,
      title: "Noise Absorption",
      description: "Absorbs ambient noise and reduces sound pollution in your environment.",
      color: "bg-noizify-primary",
      iconBackground: "bg-blue-100", 
      iconColor: "text-noizify-primary",
      visualMetric: "75%",
      metricLabel: "30dB Reduction",
      progress: 75
    },
    {
      icon: Battery,
      title: "Energy Conversion",
      description: "Transforms captured sound waves into usable electrical energy.",
      color: "bg-noizify-secondary",
      iconBackground: "bg-purple-100",
      iconColor: "text-noizify-secondary",
      visualMetric: "85%",
      metricLabel: "85% Efficiency",
      progress: 85
    },
    {
      icon: CloudLightning,
      title: "Efficient Storage",
      description: "Advanced capacitors store harvested energy for on-demand use.",
      color: "bg-noizify-accent",
      iconBackground: "bg-orange-100",
      iconColor: "text-noizify-accent",
      visualMetric: "90%",
      metricLabel: "24hr Capacity",
      progress: 90 
    },
    {
      icon: HeadphonesIcon,
      title: "Smart Monitoring",
      description: "Track energy generation and device performance through our app.",
      color: "bg-noizify-green",
      iconBackground: "bg-green-100",
      iconColor: "text-noizify-green",
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
      color: "text-blue-600",
      iconColor: "text-white", 
      iconBackground: "bg-gradient-to-br from-blue-400 to-blue-600" 
    },
    { 
      icon: Award, 
      title: "Rewards", 
      value: 15, 
      suffix: "", 
      color: "text-amber-500",
      iconColor: "text-white", 
      iconBackground: "bg-gradient-to-br from-amber-400 to-amber-600" 
    },
    { 
      icon: Clock, 
      title: "Peak Time Alerts", 
      value: 24, 
      suffix: "h", 
      color: "text-purple-600",
      iconColor: "text-white", 
      iconBackground: "bg-gradient-to-br from-purple-400 to-purple-600",
      onClick: () => setIsAlertDialogOpen(true)
    },
    { 
      icon: BarChart3, 
      title: "Real-time Tracking", 
      value: 100, 
      suffix: "%", 
      color: "text-indigo-600",
      iconColor: "text-white", 
      iconBackground: "bg-gradient-to-br from-indigo-400 to-indigo-600" 
    }
  ];

  const achievements = [
    { 
      icon: Trophy, 
      title: "First Energy", 
      level: 3, 
      unlocked: true, 
      progress: 100 
    },
    { 
      icon: Medal, 
      title: "Efficient Producer", 
      level: 2, 
      unlocked: true, 
      progress: 100 
    },
    { 
      icon: Star, 
      title: "Noise Reducer", 
      level: 3, 
      unlocked: true, 
      progress: 100 
    },
    { 
      icon: CheckCircle, 
      title: "Sustainability Hero", 
      level: 1, 
      unlocked: true, 
      progress: 100 
    },
    { 
      icon: Target, 
      title: "Goal Setter", 
      level: 0, 
      unlocked: false, 
      progress: 65,
      color: "bg-gradient-to-br from-amber-100 to-amber-50",
      textColor: "text-amber-800",
      iconColor: "text-amber-600",
      iconBackground: "bg-amber-100"
    },
    { 
      icon: Award, 
      title: "Master Harvester", 
      level: 0, 
      unlocked: false, 
      progress: 30,
      color: "bg-gradient-to-br from-amber-100 to-amber-50",
      textColor: "text-amber-800",
      iconColor: "text-amber-600",
      iconBackground: "bg-amber-100"
    }
  ];

  const leaderboardUsers = [
    { name: "Alex Johnson", avatar: "", points: 950, badge: "Pioneer" },
    { name: "Maria Garcia", avatar: "", points: 875, badge: "Innovator" },
    { name: "James Wilson", avatar: "", points: 820, badge: "Specialist" },
    { name: "Sarah Chen", avatar: "", points: 795, badge: "Champion" }
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        <Dialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Alert Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Current Status</h3>
                <Alert className="bg-green-50 border-green-200">
                  <AlertTitle className="text-green-700 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Active
                  </AlertTitle>
                  <AlertDescription className="text-green-600">
                    You're receiving peak time alerts for optimal energy generation
                  </AlertDescription>
                </Alert>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Next Peak Time</h3>
                <div className="bg-purple-50 border border-purple-200 rounded-md p-4 flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800">Today, 6 PM - 9 PM</h4>
                    <p className="text-purple-600 text-sm">High noise level expected in your area</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <h3 className="text-lg font-semibold mb-2">Upcoming Peak Times</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center">
                      <div className="w-1 h-8 bg-purple-300 rounded-full mr-3"></div>
                      <span className="text-gray-700">Tomorrow</span>
                    </div>
                    <span className="text-gray-500">7 AM - 9 AM</span>
                  </div>
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center">
                      <div className="w-1 h-8 bg-purple-200 rounded-full mr-3"></div>
                      <span className="text-gray-700">Tomorrow</span>
                    </div>
                    <span className="text-gray-500">5 PM - 8 PM</span>
                  </div>
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center">
                      <div className="w-1 h-8 bg-purple-100 rounded-full mr-3"></div>
                      <span className="text-gray-700">Apr 14</span>
                    </div>
                    <span className="text-gray-500">6 PM - 10 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        
        <div className="mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Energy Insights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Current Energy Level</h4>
                <div className="bg-gray-50 rounded-lg p-4 relative h-44 overflow-hidden">
                  <div className="flex items-center h-full justify-center">
                    {[...Array(20)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-1.5 mx-0.5 rounded-full bg-gradient-to-t from-noizify-primary to-noizify-secondary" 
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

        <div className="mt-24 mb-12">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-2 text-noizify-secondary border-noizify-secondary py-1 px-3">New</Badge>
            <h3 className="text-2xl font-bold mb-3">Your Achievements</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Track your progress and earn rewards as you harness more clean energy and reduce noise pollution in your environment.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100/30 to-amber-50/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100/20 to-purple-50/5 rounded-full -ml-32 -mb-32"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8 relative z-10">
              {achievements.map((achievement, index) => (
                <AchievementBadge key={index} {...achievement} />
              ))}
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-100 relative z-10">
              <h4 className="text-lg font-bold mb-4 flex items-center">
                <Trophy size={18} className="text-amber-500 mr-2" /> Leaderboard
              </h4>
              
              <Carousel className="w-full">
                <CarouselContent>
                  {leaderboardUsers.map((user, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                      <Card className="bg-gradient-to-br from-gray-50 to-white border-0 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-4 flex items-center gap-3">
                          <Avatar className={`border-2 ${index === 0 ? 'border-amber-400' : index === 1 ? 'border-gray-300' : index === 2 ? 'border-amber-700' : 'border-blue-300'}`}>
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback className="bg-gradient-to-br from-noizify-primary/90 to-noizify-secondary/90 text-white">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium">{user.name}</p>
                              <Badge variant="secondary" className="text-xs">{user.badge}</Badge>
                            </div>
                            <div className="flex items-center mt-1">
                              <Star size={12} fill="gold" stroke="none" className="mr-1" />
                              <span className="text-xs text-amber-600 font-semibold">{user.points} pts</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-xl shadow-md overflow-hidden relative">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-bold">Energy Generation Progress</h4>
            <Badge variant="outline" className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-green-200">
              On Track
            </Badge>
          </div>
          
          <div className="relative">
            <div className="h-16 w-full bg-gray-50 rounded-lg relative overflow-hidden">
              {[25, 50, 75].map((milestone) => (
                <div key={milestone} className="absolute top-0 bottom-0 border-r border-dashed border-gray-200" style={{ left: `${milestone}%` }}>
                  <div className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-gray-100 border border-gray-200"></div>
                </div>
              ))}
              
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-noizify-primary to-noizify-secondary rounded-l-lg"
                style={{ width: '68%' }}
              >
                <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-r from-transparent to-white/20"></div>
              </div>
              
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg border-2 border-noizify-accent flex items-center justify-center z-10"
                style={{ left: '68%' }}
              >
                <div className="w-3 h-3 rounded-full bg-noizify-accent"></div>
              </div>
            </div>
            
            <div className="flex justify-between mt-2">
              <span className="text-xs text-gray-500">Start</span>
              <span className="text-xs text-gray-500">Current: 68%</span>
              <span className="text-xs text-gray-500">Goal: 100%</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xl font-bold text-noizify-primary">24 kWh</p>
              <p className="text-xs text-gray-500">Energy Generated</p>
            </div>
            <div>
              <p className="text-xl font-bold text-noizify-secondary">5.2 kWh</p>
              <p className="text-xs text-gray-500">This Week</p>
            </div>
            <div>
              <p className="text-xl font-bold text-noizify-accent">35 kWh</p>
              <p className="text-xs text-gray-500">Target</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

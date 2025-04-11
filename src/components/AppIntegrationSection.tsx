
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AppIntegrationSection = () => {
  return (
    <section id="app" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* App Description */}
          <div className="space-y-6">
            <Badge className="bg-noizify-primary/20 text-noizify-primary hover:bg-noizify-primary/30 px-4 py-1 mb-2">
              Mobile App
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Smart Monitoring with<br/>
              <span className="text-gradient">Noizify App</span>
            </h2>
            
            <p className="text-gray-600 text-lg">
              Track your energy generation, monitor noise reduction levels, and optimize your 
              Noizify device's placement with our intuitive companion app.
            </p>
            
            <div className="space-y-4 pt-3">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-noizify-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="font-bold text-noizify-primary">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Real-Time Analytics</h3>
                  <p className="text-gray-600">Monitor energy production and noise reduction metrics in real-time.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-noizify-secondary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="font-bold text-noizify-secondary">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Smart Alerts</h3>
                  <p className="text-gray-600">Receive notifications when your device is in an optimal noise environment.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-noizify-accent/10 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="font-bold text-noizify-accent">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Device Management</h3>
                  <p className="text-gray-600">Control and optimize multiple Noizify devices from a single interface.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 flex gap-4">
              <Button className="bg-black hover:bg-black/80 text-white">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.8 2.5c.7.8 1.4 1.7 1.8 2.7-.9.3-1.9.5-2.8.5s-1.9-.2-2.8-.5c.4-1 1.1-1.9 1.8-2.7.3-.3.7-.3 1 0zM5.5 6.8c1.3.7 2.9 1.2 4.5 1.2s3.2-.5 4.5-1.2c.7.9 1.3 1.9 1.7 2.9-2 1.1-4 1.8-6.2 1.8s-4.2-.7-6.2-1.8c.4-1 1-2 1.7-2.9zM3 13.4c2.4 1.2 5 1.9 7.7 1.9 2.7 0 5.3-.7 7.7-1.9.2 1.2.3 2.4.3 3.6-2.5 1.9-5.3 3-8 3s-5.5-1.1-8-3c0-1.2.1-2.4.3-3.6z"></path>
                </svg>
                App Store
              </Button>
              <Button className="bg-black hover:bg-black/80 text-white">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3.3 6.9c-.1 0-.2-.1-.3-.1-.1 0-.1.1-.2.1l-2 3.5c-.1.1-.1.3 0 .4l2 3.5c0 .1.1.1.2.1.1 0 .2-.1.3-.1L15.7 10 3.3 6.9zm7.2-4.5c0-.1-.1-.2-.2-.3h-.4L4.5 5.2l8.2 2.4 4.2-4.2-6.4-1zm6.6 4.6l-4 4 4 4 1.9-3.2c.2-.3.3-.7.3-1.1s-.1-.9-.3-1.1l-1.9-2.6zm-6.2 11l6.4-1-4.2-4.2-8.2 2.4 5.4 3.1c.3.2.6-.1.6-.3z"></path>
                </svg>
                Play Store
              </Button>
            </div>
          </div>
          
          {/* App Mockup */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-noizify-primary/10 to-noizify-secondary/10 rounded-2xl p-8 pb-0 overflow-hidden shadow-xl max-w-sm mx-auto">
              {/* App Screen Mockup */}
              <div className="bg-white rounded-lg overflow-hidden shadow-inner border-8 border-gray-800 relative">
                <div className="bg-noizify-dark text-white p-4 flex justify-between items-center">
                  <div>9:41 AM</div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-white/70"></div>
                    <div className="w-3 h-3 rounded-full bg-white/70"></div>
                    <div className="w-3 h-3 rounded-full bg-white/70"></div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50">
                  <div className="text-lg font-bold text-noizify-dark mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    Energy Dashboard
                  </div>
                  
                  <div className="bg-white rounded-lg shadow p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Current Output</span>
                      <span className="text-xs text-noizify-primary font-semibold">LIVE</span>
                    </div>
                    <div className="text-2xl font-bold text-noizify-primary">3.2 W</div>
                    <div className="text-xs text-gray-500">+0.5W from yesterday</div>
                  </div>
                  
                  <div className="flex space-x-2 mb-4">
                    <div className="flex-1 bg-white rounded-lg shadow p-3">
                      <div className="text-xs text-gray-500 mb-1">Daily</div>
                      <div className="text-lg font-semibold">24.8 Wh</div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow p-3">
                      <div className="text-xs text-gray-500 mb-1">Noise Red.</div>
                      <div className="text-lg font-semibold">26 dB</div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow p-4">
                    <div className="text-sm font-semibold mb-3">Energy Trend</div>
                    <div className="flex items-end h-24 space-x-2">
                      {[40, 65, 50, 75, 60, 80, 90].map((height, i) => (
                        <div key={i} className="flex-1">
                          <div 
                            className="bg-gradient-to-t from-noizify-primary to-noizify-secondary rounded-t"
                            style={{ height: `${height}%` }}
                          ></div>
                          <div className="text-xs text-gray-400 text-center mt-1">
                            {['M','T','W','T','F','S','S'][i]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phone Home Button */}
              <div className="flex justify-center mt-4 mb-2">
                <div className="w-16 h-4 bg-gray-800 rounded-full"></div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-12 -right-6 w-16 h-16 bg-noizify-accent/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-24 -left-10 w-20 h-20 bg-noizify-primary/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppIntegrationSection;

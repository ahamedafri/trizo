import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Scissors, Mic, Globe, Palette, Type, Monitor, PenTool, Share2, ArrowRight } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Play,
      title: "YouTube Channel Management",
      description: "Complete channel setup, optimization, and professional video editing that builds subscriber engagement and drives sustainable growth",
    },
    {
      icon: Scissors,
      title: "Short-Form Video Production",
      description: "Captivating Reels, TikToks, and YouTube Shorts that stop the scroll and convert viewers into followers",
    },
    {
      icon: Mic,
      title: "Podcast & Educational Content",
      description: "Professional editing and production for long-form content with multilingual capabilities and cultural sensitivity",
    },
    {
      icon: Palette,
      title: "Brand Identity & Logo Design",
      description: "Distinctive visual identities that reflect your values and create lasting connections with your audience",
    },
    {
      icon: Monitor,
      title: "Website Development",
      description: "Modern, responsive websites on WordPress and Shopify that convert visitors into customers and grow your business",
    },
    {
      icon: Share2,
      title: "Social Media Strategy",
      description: "Comprehensive content creation and strategic planning that amplifies your message across all social platforms",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/50 to-white" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4">
            Our Services
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Crafting Digital Excellence
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            From video content creation to complete digital branding, we deliver modern solutions 
            that help you tell your story with authenticity and reach audiences worldwide.
          </p>
          <Button variant="outline" size="lg" className="rounded-2xl border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 mt-6">
            View All Services
          </Button>
        </div>

        {/* Service Categories */}
        <div className="space-y-16 sm:space-y-20">
          {/* Video Content Services */}
          <div>
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-red-500/10 rounded-full text-sm font-semibold text-primary mb-4">
                Video Content Creation
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Professional video production and editing services that captivate and engage
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.slice(0, 3).map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index}
                    className="group relative p-6 sm:p-8 border-0 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer rounded-2xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative space-y-6 text-center">
                      <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <Icon className="w-8 h-8 text-primary transition-all duration-300" />
                      </div>
                      <h4 className="font-display text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Digital & Design Services */}
          <div>
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-semibold text-blue-600 mb-4">
                Digital & Design Services
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Complete branding and digital presence solutions that make you stand out
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.slice(3, 6).map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index + 3}
                    className="group relative p-6 sm:p-8 border-0 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer rounded-2xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative space-y-6 text-center">
                      <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <Icon className="w-8 h-8 text-blue-600 transition-all duration-300" />
                      </div>
                      <h4 className="font-display text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

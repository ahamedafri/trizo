import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Scissors, Mic, Globe, Palette, Type, Monitor, PenTool, Share2, ArrowRight } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Play,
      title: "YouTube Growth Services",
      description: "Complete YouTube channel management including video editing, thumbnails, SEO optimization, and growth strategies that get you more views and subscribers",
      category: "youtube"
    },
    {
      icon: Monitor,
      title: "Website Development",
      description: "Modern, responsive websites built on WordPress and Shopify that convert visitors into customers and grow your business online",
      category: "websites"
    },
    {
      icon: Globe,
      title: "SEO Optimization",
      description: "Search engine optimization that gets your content and website ranked higher on Google, driving organic traffic and growth",
      category: "seo"
    },
    {
      icon: PenTool,
      title: "YouTube Ads Management & Growth Services",
      description: "Get targeted YouTube Ads that boost your brand awareness, traffic, leads, and sales. With 7+ years of experience in Google Video Ads and YouTube Campaign Management, we help your business reach the right audience at the lowest cost.",
      category: "ads"
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
            Everything You Need to Grow
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We focus on three core services that drive real results: YouTube growth, professional websites, 
            and SEO optimization - everything you need to succeed online.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const getServiceColor = (category) => {
              switch(category) {
                case 'youtube': return 'from-red-500/10 to-primary/20';
                case 'websites': return 'from-blue-500/10 to-purple-500/20';
                case 'seo': return 'from-green-500/10 to-emerald-500/20';
                case 'ads': return 'from-orange-500/10 to-yellow-500/20';
                default: return 'from-primary/10 to-primary/20';
              }
            };
            
            const getIconColor = (category) => {
              switch(category) {
                case 'youtube': return 'text-red-600';
                case 'websites': return 'text-blue-600';
                case 'seo': return 'text-green-600';
                case 'ads': return 'text-orange-600';
                default: return 'text-primary';
              }
            };

            return (
              <Card 
                key={index}
                className="group relative p-8 lg:p-10 border-0 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer rounded-3xl overflow-hidden h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${getServiceColor(service.category)} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`} />
                <div className="relative space-y-6 text-center h-full flex flex-col">
                  <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${getServiceColor(service.category)} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <Icon className={`w-10 h-10 ${getIconColor(service.category)} transition-all duration-300`} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6 rounded-2xl border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

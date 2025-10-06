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
    <section className="py-24 bg-background" id="services">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            From video content creation to complete digital branding, we deliver modern solutions 
            that help you tell your story with authenticity and reach audiences worldwide.
          </p>
          <Button variant="outline" size="lg" className="rounded-full mt-4">
            View All Services
          </Button>
        </div>

        {/* Service Categories */}
        <div className="space-y-12">
          {/* Video Content Services */}
          <div>
            <h3 className="text-2xl font-display font-bold text-center mb-2 text-primary">
              Video Content Creation
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Professional video production and editing services
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {services.slice(0, 3).map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index}
                    className="p-6 border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="space-y-4 text-center">
                      <div className="w-12 h-12 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h4 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
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
            <h3 className="text-2xl font-display font-bold text-center mb-2 text-primary">
              Digital & Design Services
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Complete branding and digital presence solutions
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {services.slice(3, 6).map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index + 3}
                    className="p-6 border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="space-y-4 text-center">
                      <div className="w-12 h-12 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h4 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
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

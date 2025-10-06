import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,87,87,0.1)_0%,transparent_70%)]" />
      
      {/* Decorative Lines */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -rotate-12" />
        <div className="absolute top-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transform rotate-12" />
        <div className="absolute top-60 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -rotate-12" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Google Reviews Badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">Google Reviews</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
            Transform Your Ideas Into{" "}
            <span className="text-primary">Compelling Content</span>
            <br />
            That Drives Real Results
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From YouTube channels to complete brand identities, we create authentic content 
            that connects with global audiences while staying true to your values and vision.
          </p>

          {/* Brand Tagline */}
          <div className="pt-4">
            <p className="text-sm font-medium text-primary/80 tracking-wide uppercase">
              Creative Excellence • Authentic Storytelling • Global Impact
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Start Your Project
            </Button>
          </div>

          {/* Tools Slider */}
          <div className="pt-20">
            <p className="text-base font-medium text-muted-foreground mb-12 text-center">Powered by industry-leading tools</p>
            <div className="relative overflow-hidden bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl md:rounded-3xl py-6 md:py-8 px-4">
              <div className="flex animate-slide-left">
                {/* First set of logos */}
                <div className="flex min-w-full justify-center items-center space-x-3 sm:space-x-4 md:space-x-6">
                  {[
                    { name: 'YouTube Studio', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg', color: '#FF0000' },
                    { name: 'Adobe Premiere', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobepremierepro.svg', color: '#9999FF' },
                    { name: 'After Effects', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobeaftereffects.svg', color: '#9999FF' },
                    { name: 'Canva Pro', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/canva.svg', color: '#00C4CC' },
                    { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/wordpress.svg', color: '#21759B' },
                    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg', color: '#F24E1E' },
                    { name: 'Photoshop', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobephotoshop.svg', color: '#31A8FF' },
                    { name: 'Shopify', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg', color: '#7AB55C' }
                  ].map((tool, index) => (
                    <div 
                      key={index}
                      className="flex-shrink-0 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-md md:shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 md:hover:scale-110 border border-gray-100 md:border-2 md:border-gray-50 backdrop-blur-sm"
                    >
                      <div 
                        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                        style={{ backgroundColor: tool.color, mask: `url(${tool.logo}) no-repeat center`, maskSize: 'contain', WebkitMask: `url(${tool.logo}) no-repeat center`, WebkitMaskSize: 'contain' }}
                      />
                    </div>
                  ))}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex min-w-full justify-center items-center space-x-3 sm:space-x-4 md:space-x-6">
                  {[
                    { name: 'YouTube Studio', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg', color: '#FF0000' },
                    { name: 'Adobe Premiere', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobepremierepro.svg', color: '#9999FF' },
                    { name: 'After Effects', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobeaftereffects.svg', color: '#9999FF' },
                    { name: 'Canva Pro', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/canva.svg', color: '#00C4CC' },
                    { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/wordpress.svg', color: '#21759B' },
                    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg', color: '#F24E1E' },
                    { name: 'Photoshop', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobephotoshop.svg', color: '#31A8FF' },
                    { name: 'Shopify', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg', color: '#7AB55C' }
                  ].map((tool, index) => (
                    <div 
                      key={`duplicate-${index}`}
                      className="flex-shrink-0 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-md md:shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 md:hover:scale-110 border border-gray-100 md:border-2 md:border-gray-50 backdrop-blur-sm"
                    >
                      <div 
                        className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                        style={{ backgroundColor: tool.color, mask: `url(${tool.logo}) no-repeat center`, maskSize: 'contain', WebkitMask: `url(${tool.logo}) no-repeat center`, WebkitMaskSize: 'contain' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

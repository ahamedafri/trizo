import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary/5">
      {/* Modern Gradient Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.08)_0%,transparent_50%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06)_0%,transparent_50%)] opacity-40" />
      
      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -rotate-12 animate-pulse" />
        <div className="absolute top-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform rotate-12" />
        <div className="absolute top-60 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -rotate-12" />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Google Reviews Badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 100}ms`}} />
              ))}
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">5.0 Google Reviews</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight px-4 sm:px-0 text-center">
            <span className="bg-gradient-to-r from-primary via-primary to-red-600 bg-clip-text text-transparent">
              YouTube Growth.
            </span>
            <br className="hidden sm:block" />
            <span className="block sm:inline bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"> Made Simple.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 md:px-0">
            Helping creators get more views, subscribers, and income - no fluff.
          </p>

          {/* Brand Tagline */}
          <div className="pt-4 px-4 sm:px-0">
            <p className="text-xs sm:text-sm font-medium text-primary/80 tracking-wide uppercase">
              YouTube Growth • Website Development • SEO Optimization • YouTube Ads Management
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8 px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto rounded-2xl bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 px-8 py-6 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0 group relative overflow-hidden"
              >
                <span className="relative z-10">Grow My Channel</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto rounded-2xl border-2 border-gray-200 hover:border-primary/50 bg-white/80 backdrop-blur-sm px-6 py-6 text-base font-semibold hover:bg-white transition-all duration-300 hover:scale-105"
              >
                See Our Results
              </Button>
            </div>
          </div>

          {/* Tools Slider */}
          <div className="pt-16 md:pt-20">
            <p className="text-sm md:text-base font-medium text-muted-foreground mb-8 md:mb-12 text-center px-4">Powered by industry-leading tools</p>
            <div className="relative w-full overflow-hidden bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl md:rounded-2xl lg:rounded-3xl py-6 md:py-8">
              <div className="flex animate-slide-left gap-6 md:gap-8 lg:gap-10">
                {/* First set of logos */}
                <div className="flex items-center gap-6 md:gap-8 lg:gap-10 flex-shrink-0">
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
                      className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-sm md:shadow-md lg:shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 md:border-gray-200 backdrop-blur-sm"
                    >
                      <div 
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                        style={{ backgroundColor: tool.color, mask: `url(${tool.logo}) no-repeat center`, maskSize: 'contain', WebkitMask: `url(${tool.logo}) no-repeat center`, WebkitMaskSize: 'contain' }}
                      />
                    </div>
                  ))}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-6 md:gap-8 lg:gap-10 flex-shrink-0">
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
                      className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-sm md:shadow-md lg:shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 md:border-gray-200 backdrop-blur-sm"
                    >
                      <div 
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
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

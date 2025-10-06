import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Enhanced background with gradients and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-blue-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(239,68,68,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.06)_0%,transparent_50%)]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl lg:rounded-[2rem] shadow-2xl border border-gray-100/50 p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
            {/* Card background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 rounded-3xl lg:rounded-[2rem]" />
            
            <div className="relative space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full text-sm font-semibold text-primary">
                <Sparkles className="w-4 h-4" />
                Let's Create Something Amazing
              </div>
              
              {/* Headline */}
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Ready to Transform 
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                  Your Content?
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Join hundreds of creators and businesses who trust Trizo Media to bring their vision to life. 
                Let's create content that not only looks amazing but drives real growth for your brand.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto text-lg px-8 py-6 rounded-2xl bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 border-0 group relative overflow-hidden"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  <span className="relative z-10">Start Your Project Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto text-lg px-8 py-6 rounded-2xl border-2 border-gray-200 hover:border-primary/50 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-105 group"
                >
                  <span>Schedule a Call</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="pt-8 border-t border-gray-200/50">
                <p className="text-sm text-gray-500 mb-4">Trusted by leading brands and creators</p>
                <div className="flex items-center justify-center gap-8 opacity-60">
                  <div className="text-xs font-medium">500+ Videos Created</div>
                  <div className="text-xs font-medium">5.0 Rating</div>
                  <div className="text-xs font-medium">95% Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

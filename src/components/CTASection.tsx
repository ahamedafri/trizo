import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
            Ready to Transform Your Content?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            Join hundreds of creators and businesses who trust Trizo Media to bring their vision to life. 
            Let's create content that not only looks amazing but drives real growth for your brand.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

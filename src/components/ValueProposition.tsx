import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Users } from "lucide-react";

export const ValueProposition = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Why Choose{" "}
            <span className="text-primary">Trizo Media?</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We combine modern creativity with ethical values to deliver content that not only looks great but also drives real results for your brand.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-6 group">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all group-hover:scale-110">
                <Target className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold">Authentic Storytelling</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every piece of content we create tells a meaningful story that resonates with your audience while staying true to your values and mission
              </p>
            </div>

            <div className="space-y-6 group">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all group-hover:scale-110">
                <TrendingUp className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold">Proven Results</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our clients see measurable growth - from increased engagement and subscriber growth to improved conversion rates and global reach
              </p>
            </div>

            <div className="space-y-6 group">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all group-hover:scale-110">
                <Users className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold">Global Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Multilingual capabilities and cultural adaptability help you connect with audiences worldwide while maintaining authenticity
              </p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 mt-8"
          >
            Start Your Video Project
          </Button>
        </div>
      </div>
    </section>
  );
};

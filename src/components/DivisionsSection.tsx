import { Lightbulb, Palette, TrendingUp } from "lucide-react";

export const DivisionsSection = () => {
  const divisions = [
    {
      icon: Lightbulb,
      title: "Trizomedia Labs",
      description: "Build exceptional digital platforms through our UI/UX, Web & Mobile App Design & Development Services.",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: Palette,
      title: "Trizomedia Studios",
      description: "Launch your brand and tell powerful stories through our Brand Identity Development, Animation, 3D & Design Solutions.",
      gradient: "from-accent/10 to-accent/5"
    },
    {
      icon: TrendingUp,
      title: "Trizomedia Digital",
      description: "Attract, engage and convert customers through our Content, Social Media, SEO and Paid Online Ads Solutions.",
      gradient: "from-primary/10 to-primary/5"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-secondary/50 to-background border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-foreground">
                    {division.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {division.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

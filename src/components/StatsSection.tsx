export const StatsSection = () => {
  const stats = [
    { number: "500+", label: "Videos Created" },
    { number: "50+", label: "Happy Clients" },
    { number: "10+", label: "Languages Supported" },
    { number: "95%", label: "Client Retention" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center space-y-2 transform hover:scale-105 transition-transform"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

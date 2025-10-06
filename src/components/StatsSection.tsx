export const StatsSection = () => {
  const stats = [
    { number: "500+", label: "Videos Created" },
    { number: "50+", label: "Happy Clients" },
    { number: "10+", label: "Languages Supported" },
    { number: "95%", label: "Client Retention" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-6">
            Our Impact
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Numbers That Speak Volumes
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative text-center p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl lg:rounded-3xl" />
              <div className="relative space-y-3 sm:space-y-4">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black bg-gradient-to-br from-primary to-red-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

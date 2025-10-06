export const ClientsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Powered by Industry-Leading Tools
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We use the best professional software and platforms to deliver high-quality video content 
            that meets global standards and drives engagement across all platforms.
          </p>
        </div>
        
        {/* Auto-sliding client logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-left">
            {/* First set of logos */}
            <div className="flex min-w-full justify-around items-center space-x-8 md:space-x-12">
              {[
                { name: 'Adobe Premiere', color: 'from-purple-500 to-pink-500', logo: 'Pr' },
                { name: 'After Effects', color: 'from-purple-600 to-blue-500', logo: 'Ae' },
                { name: 'Final Cut Pro', color: 'from-gray-700 to-gray-900', logo: '🎬' },
                { name: 'DaVinci Resolve', color: 'from-red-500 to-orange-500', logo: 'DV' },
                { name: 'YouTube Studio', color: 'from-red-600 to-red-400', logo: '▶️' },
                { name: 'Canva Pro', color: 'from-blue-500 to-purple-500', logo: 'C' },
                { name: 'Photoshop', color: 'from-blue-600 to-blue-800', logo: 'Ps' },
                { name: 'Figma', color: 'from-purple-400 to-pink-400', logo: 'F' }
              ].map((tool, index) => (
                <div 
                  key={index}
                  className={`flex-shrink-0 w-36 h-24 bg-gradient-to-br ${tool.color} rounded-lg flex flex-col items-center justify-center hover:shadow-lg transition-all hover:scale-105 text-white font-semibold text-xs p-2`}
                >
                  <div className="w-10 h-10 mb-1 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-bold text-sm">
                      {tool.logo}
                    </span>
                  </div>
                  <span className="text-center leading-tight text-[10px]">{tool.name}</span>
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex min-w-full justify-around items-center space-x-8 md:space-x-12">
              {[
                { name: 'Adobe Premiere', color: 'from-purple-500 to-pink-500', logo: 'Pr' },
                { name: 'After Effects', color: 'from-purple-600 to-blue-500', logo: 'Ae' },
                { name: 'Final Cut Pro', color: 'from-gray-700 to-gray-900', logo: '🎬' },
                { name: 'DaVinci Resolve', color: 'from-red-500 to-orange-500', logo: 'DV' },
                { name: 'YouTube Studio', color: 'from-red-600 to-red-400', logo: '▶️' },
                { name: 'Canva Pro', color: 'from-blue-500 to-purple-500', logo: 'C' },
                { name: 'Photoshop', color: 'from-blue-600 to-blue-800', logo: 'Ps' },
                { name: 'Figma', color: 'from-purple-400 to-pink-400', logo: 'F' }
              ].map((tool, index) => (
                <div 
                  key={`duplicate-${index}`}
                  className={`flex-shrink-0 w-36 h-24 bg-gradient-to-br ${tool.color} rounded-lg flex flex-col items-center justify-center hover:shadow-lg transition-all hover:scale-105 text-white font-semibold text-xs p-2`}
                >
                  <div className="w-10 h-10 mb-1 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-bold text-sm">
                      {tool.logo}
                    </span>
                  </div>
                  <span className="text-center leading-tight text-[10px]">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

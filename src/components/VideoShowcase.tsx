import { Play } from "lucide-react";

export const VideoShowcase = () => {
  return (
    <section id="work" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-6">
            Sample Work
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            See Our Editing in Action
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Watch this sample of our professional video editing work. This is the quality and style 
            you can expect for your YouTube content.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100/50 overflow-hidden">
            <div className="aspect-video relative">
              <video 
                controls 
                className="w-full h-full object-cover rounded-3xl"
                poster="/placeholder.svg"
              >
                <source src="/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play Button Overlay (for visual appeal when paused) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
              </div>
            </div>
            
            {/* Video Description */}
            <div className="p-6 sm:p-8">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Professional Video Editing Sample
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                This sample showcases our editing style, pacing, and attention to detail. 
                We focus on creating engaging content that keeps viewers watching and drives channel growth.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Professional Editing
                </span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-600 text-sm font-medium rounded-full">
                  Engaging Pacing
                </span>
                <span className="px-3 py-1 bg-green-500/10 text-green-600 text-sm font-medium rounded-full">
                  High Retention
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* YouTube Ads Services Details */}
        <div className="mt-16 sm:mt-20">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 sm:p-12 border border-orange-100">
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                YouTube Ads Management & Growth Services
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Get targeted YouTube Ads that boost your brand awareness, traffic, leads, and sales.
                With 7+ years of experience in Google Video Ads and YouTube Campaign Management, 
                we help your business reach the right audience at the lowest cost.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-6">What We Offer</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Complete YouTube Ads setup & management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Keyword & audience research for precise targeting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Competitor channel targeting to reach your ideal viewers</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-6">Additional Services</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Conversion tracking setup for accurate performance data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Channel optimization & YouTube SEO for organic growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Optional animated video ad creation (extra charge)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Ready to get videos like this for your channel? Let's discuss your project.
          </p>
        </div>
      </div>
    </section>
  );
};
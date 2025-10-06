import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      position: "Educational YouTuber • 250K Subscribers",
      content: "Trizo Media transformed my channel completely. Their editing maintains authenticity while making content visually compelling. My watch time increased 40% and subscriber growth doubled. They truly understand how to connect with diverse audiences."
    },
    {
      name: "Sarah Mitchell",
      position: "Lifestyle Brand • Content Creator",
      content: "The quality and creativity Trizo Media brings is unmatched. Their short-form edits helped me gain 100K followers in 6 months. They respect my values while creating content that performs exceptionally across all platforms."
    },
    {
      name: "Dr. Omar Al-Rashid",
      position: "Online Educator • Best-selling Author",
      content: "Professional podcast editing that maintains educational integrity while engaging global audiences. Trizo Media helped me reach 50+ countries with multilingual support. Their cultural sensitivity is remarkable."
    },
    {
      name: "Maya Patel",
      position: "Business Coach • Entrepreneur",
      content: "From website design to social media content, Trizo Media delivered a complete brand transformation. My conversion rates improved 60% and brand recognition skyrocketed. They're true partners in success."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Trusted by Creators Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped content creators, educators, and businesses achieve their goals 
            through authentic, high-quality video content and digital media solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

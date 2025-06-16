
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Event Manager, TechConf",
      content: "EventzNow transformed how we manage our tech conferences. The payment integration and real-time tracking are game-changers!",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Rajesh Kumar",
      role: "Wedding Planner",
      content: "The call task management feature helped us coordinate with 200+ families effortlessly. Same-day payouts are a blessing!",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Sneha Patel",
      role: "Corporate Trainer",
      content: "Started with the free event, now using Premium for all workshops. The team performance tracking keeps everyone accountable.",
      rating: 5,
      avatar: "SP"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Loved by Event Organizers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how EventzNow helps professionals create memorable events and grow their business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

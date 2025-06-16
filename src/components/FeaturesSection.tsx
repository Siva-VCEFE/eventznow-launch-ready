
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CreditCard, BarChart3, Phone, Users, CheckCircle } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Easy Event Creation",
      description: "Create and manage events from a centralized dashboard with intuitive tools and templates."
    },
    {
      icon: CreditCard,
      title: "Custom Forms & Payment Integration",
      description: "Get online registrations with customizable forms and integrated payment gateway."
    },
    {
      icon: BarChart3,
      title: "Real-time Reports & Insights",
      description: "Track registrations, revenue, and attendee engagement with comprehensive analytics."
    },
    {
      icon: Phone,
      title: "Auto-assigned Call Tasks",
      description: "Initiate customer calls directly from the activity page with automatic task assignment."
    },
    {
      icon: Users,
      title: "Team Performance Tracker",
      description: "Monitor who was invited, track team performance, and follow up on activities."
    },
    {
      icon: CheckCircle,
      title: "Attendee Management",
      description: "Comprehensive attendee engagement and follow-up tools for successful events."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Run Successful Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From creation to execution, EventzNow provides all the tools you need to manage events professionally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

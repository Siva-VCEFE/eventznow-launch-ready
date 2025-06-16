
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, FileText, BarChart, Banknote } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign up & create your first event free",
      description: "Get started with EventzNow and create your first event at no cost to explore our platform."
    },
    {
      icon: FileText,
      title: "Customize form & collect payments",
      description: "Design your registration form and set up payment collection with our integrated gateway."
    },
    {
      icon: BarChart,
      title: "Track attendees, tasks & calls",
      description: "Monitor registrations, manage team tasks, and handle customer calls from one dashboard."
    },
    {
      icon: Banknote,
      title: "Get paid to your account automatically",
      description: "Receive payments directly to your bank account - same day for Premium, 3-5 days for Standard."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How EventzNow Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Launch your events in four simple steps and start collecting registrations immediately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

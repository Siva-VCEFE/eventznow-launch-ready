
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Gift } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free First Event",
      price: "₹0",
      duration: "One-time",
      description: "Perfect to explore EventzNow features",
      icon: Gift,
      features: [
        "Create 1 event for free",
        "Basic registration forms",
        "Up to 50 attendees",
        "Basic analytics",
        "Email support",
        "Standard payout (3-5 days)"
      ],
      cta: "Start Free",
      popular: false,
      buttonClass: "bg-green-600 hover:bg-green-700"
    },
    {
      name: "Standard Plan",
      price: "₹299",
      duration: "per event",
      description: "Great for regular event organizers",
      icon: Check,
      features: [
        "Unlimited events",
        "Custom registration forms",
        "Unlimited attendees",
        "Advanced analytics & reports",
        "Call task management",
        "Team performance tracking",
        "Payout in 3-5 working days",
        "Priority email support"
      ],
      cta: "Choose Standard",
      popular: false,
      buttonClass: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Premium Plan",
      price: "₹599",
      duration: "per event",
      description: "For professional event management",
      icon: Crown,
      features: [
        "Everything in Standard",
        "Same-day payout transfers",
        "Advanced custom branding",
        "Priority phone support",
        "Dedicated account manager",
        "Advanced integrations",
        "Custom reporting",
        "White-label options"
      ],
      cta: "Go Premium",
      popular: true,
      buttonClass: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with your first event free, then choose a plan that fits your needs. 
            All registration fees go directly to your bank account.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-purple-500 border-2 shadow-xl' : 'border shadow-lg'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <plan.icon className="h-6 w-6 text-gray-600" />
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.duration}</span>
                </div>
                <CardDescription className="mt-2 text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full py-3 text-lg ${plan.buttonClass}`}>
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-blue-50 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            💰 How Payouts Work
          </h3>
          <p className="text-gray-600">
            <strong>Premium Plan:</strong> Same-day transfers • <strong>Standard Plan:</strong> 3-5 working days • 
            All registration amounts are transferred directly to your bank account
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;


import { Button } from "@/components/ui/button";
import { ArrowRight, Gift } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm mb-6">
              <Gift className="h-4 w-4" />
              <span>First Event Completely Free</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Launch Your First Event?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of event organizers who trust EventzNow to manage their events professionally. 
              Start free and scale as you grow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              Schedule Demo
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Setup in 5 Minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

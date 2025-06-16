
import { Button } from "@/components/ui/button";
import { Calendar, Users, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                All-in-One Tool to Run Your 
                <span className="text-blue-600"> Events Effortlessly</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Create events, get paid, manage attendees, and track team performance — all in one place.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Create Your First Event Free
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">First Event Free</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">Real-time Registration</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-gray-600">Performance Tracking</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <h3 className="font-semibold text-gray-900">Event Dashboard</h3>
                  <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Live</div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">247</div>
                    <div className="text-sm text-gray-600">Registered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">₹1.2L</div>
                    <div className="text-sm text-gray-600">Revenue</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">89%</div>
                    <div className="text-sm text-gray-600">Attendance</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Registration Progress</span>
                    <span>82%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Clock, MapPin, CheckCircle, ArrowRight, Users } from "lucide-react";
import { packages } from "../data/mock";
import { useToast } from "../hooks/use-toast";

const PackageCard = ({ pkg }) => {
  const { toast } = useToast();

  const handleBookNow = () => {
    toast({
      title: "Booking Initiated!",
      description: `Your booking for ${pkg.title} has been started. We'll contact you shortly.`,
    });
  };

  return (
    <Card className="marketplace-card group">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={pkg.image} 
            alt={pkg.title}
            className="marketplace-card-image h-56 w-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="text-center">
              <Button variant="secondary" className="mb-2">
                View Details
              </Button>
            </div>
          </div>
          <Badge className="absolute top-4 left-4 bg-green-500 text-white">
            Best Value
          </Badge>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="marketplace-card-title flex-1">{pkg.title}</h3>
            <div className="text-right">
              <p className="marketplace-card-price">{pkg.price}</p>
              <p className="body-small text-text-secondary">per person</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4 text-text-secondary" />
              <span className="body-small text-text-secondary">{pkg.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4 text-text-secondary" />
              <span className="body-small text-text-secondary">2-6 people</span>
            </div>
          </div>

          <p className="body-medium text-text-secondary mb-4 line-clamp-2">
            {pkg.description}
          </p>

          <div className="space-y-3 mb-6">
            <h4 className="body-medium font-semibold text-text-primary">What's Included:</h4>
            <div className="space-y-2">
              {pkg.inclusions.slice(0, 3).map((inclusion, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="body-small text-text-secondary">{inclusion}</span>
                </div>
              ))}
              {pkg.inclusions.length > 3 && (
                <p className="body-small text-brand-primary">
                  +{pkg.inclusions.length - 3} more inclusions
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              className="btn-primary flex-1"
              onClick={handleBookNow}
            >
              Book Now
            </Button>
            <Button variant="outline" className="px-4">
              Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Packages = () => {
  const [activeTab, setActiveTab] = useState("all");

  const allPackages = [...packages.india, ...packages.uae];
  const currentPackages = activeTab === "all" ? allPackages :
                         activeTab === "india" ? packages.india :
                         packages.uae;

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="display-large text-text-primary mb-4">
            Travel Packages
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Choose from our expertly crafted travel packages designed to give you the best experiences at unbeatable prices. All packages include accommodations, meals, and guided tours.
          </p>
        </div>

        {/* Special Offers Banner */}
        <div className="mb-8 p-6 bg-gradient-to-r from-brand-primary to-brand-hover rounded-lg text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="heading-2 mb-2">🎉 Limited Time Offer!</h2>
              <p className="body-large">Book any package this month and get 15% off + Free airport transfers</p>
            </div>
            <Button variant="secondary" className="mt-4 md:mt-0">
              Claim Offer
            </Button>
          </div>
        </div>

        {/* Package Categories */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="all">All Packages</TabsTrigger>
            <TabsTrigger value="india">India 🇮🇳</TabsTrigger>
            <TabsTrigger value="uae">UAE 🇦🇪</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="india" className="mt-8">
            <div className="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="heading-4 text-orange-800 mb-2">🇮🇳 India Packages</h3>
              <p className="body-medium text-orange-700">
                Explore incredible India with our comprehensive packages covering heritage, culture, adventure and spirituality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.india.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="uae" className="mt-8">
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="heading-4 text-blue-800 mb-2">🇦🇪 UAE Packages</h3>
              <p className="body-medium text-blue-700">
                Experience luxury and adventure in the UAE with our premium packages featuring world-class attractions and experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.uae.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Why Choose Our Packages */}
        <div className="mt-16 py-12 bg-bg-subtle rounded-lg">
          <div className="text-center mb-8">
            <h2 className="display-medium text-text-primary mb-4">
              Why Choose Our Packages?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-5 text-text-primary mb-2">All-Inclusive</h3>
              <p className="body-small text-text-secondary">
                Everything covered - no hidden costs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-5 text-text-primary mb-2">Expert Guides</h3>
              <p className="body-small text-text-secondary">
                Local experts with deep knowledge
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-5 text-text-primary mb-2">Prime Locations</h3>
              <p className="body-small text-text-secondary">
                Best hotels in ideal locations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-5 text-text-primary mb-2">24/7 Support</h3>
              <p className="body-small text-text-secondary">
                Round-the-clock assistance
              </p>
            </div>
          </div>
        </div>

        {/* Custom Package CTA */}
        <div className="mt-16 text-center">
          <h2 className="display-medium text-text-primary mb-4">
            Need a Custom Package?
          </h2>
          <p className="body-large text-text-secondary mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Let our travel experts create a personalized package just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary" asChild>
              <Link to="/contact">
                Get Custom Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
              Call +91 98765 43210
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
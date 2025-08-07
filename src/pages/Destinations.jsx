import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { destinations } from "../data/mock";

const DestinationCard = ({ destination }) => {
  return (
    <Card className="marketplace-card group">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={destination.image} 
            alt={destination.name}
            className="marketplace-card-image h-64 w-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button variant="secondary" asChild>
              <Link to="/packages">View Packages</Link>
            </Button>
          </div>
          <Badge className="absolute top-4 left-4 bg-white text-text-primary">
            {destination.duration}
          </Badge>
          <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-lg">
            <span className="font-semibold text-brand-primary">{destination.price}</span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="marketplace-card-title flex-1">{destination.name}</h3>
          </div>
          <p className="body-medium text-text-secondary mb-4 line-clamp-2">
            {destination.description}
          </p>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {destination.highlights.map((highlight, index) => (
                <Badge key={index} variant="secondary" className="body-small">
                  {highlight}
                </Badge>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 text-text-secondary">
                <Clock className="w-4 h-4" />
                <span className="body-small">{destination.duration}</span>
              </div>
              <Button size="sm" className="btn-primary">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Destinations = () => {
  const [activeTab, setActiveTab] = useState("all");

  const allDestinations = [...destinations.india, ...destinations.uae];
  const currentDestinations = activeTab === "all" ? allDestinations :
                            activeTab === "india" ? destinations.india :
                            destinations.uae;

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="display-large text-text-primary mb-4">
            Explore Amazing Destinations
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Discover breathtaking destinations across India and UAE. From ancient monuments to modern marvels, pristine beaches to snow-capped mountains - find your perfect getaway.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="all">All Destinations</TabsTrigger>
            <TabsTrigger value="india">India 🇮🇳</TabsTrigger>
            <TabsTrigger value="uae">UAE 🇦🇪</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allDestinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="india" className="mt-8">
            <div className="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="heading-4 text-orange-800 mb-2">🇮🇳 Incredible India</h3>
              <p className="body-medium text-orange-700">
                Explore the land of diverse cultures, ancient heritage, and natural wonders. From the majestic Himalayas to tropical Kerala backwaters.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.india.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="uae" className="mt-8">
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="heading-4 text-blue-800 mb-2">🇦🇪 United Arab Emirates</h3>
              <p className="body-medium text-blue-700">
                Experience the perfect blend of traditional Arabian culture and ultramodern luxury in the heart of the Middle East.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.uae.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Stats Section */}
        <div className="mt-16 py-12 bg-bg-subtle rounded-lg">
          <div className="text-center mb-8">
            <h2 className="display-medium text-text-primary mb-4">
              Why Choose Our Destinations?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-4 text-text-primary mb-2">Expert Curation</h3>
              <p className="body-medium text-text-secondary">
                Each destination is carefully selected and researched by our travel experts
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-4 text-text-primary mb-2">Perfect Timing</h3>
              <p className="body-medium text-text-secondary">
                We plan visits during the best seasons for optimal experiences
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-4 text-text-primary mb-2">Seamless Journey</h3>
              <p className="body-medium text-text-secondary">
                From booking to return, we handle every detail of your trip
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="display-medium text-text-primary mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="body-large text-text-secondary mb-8 max-w-2xl mx-auto">
            Browse our carefully crafted packages or get in touch with our travel experts to plan your perfect trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary" asChild>
              <Link to="/packages">
                View All Packages <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
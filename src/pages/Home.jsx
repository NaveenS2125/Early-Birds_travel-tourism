import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Star, ArrowRight, MapPin, Clock, Users, Award, Globe, Heart } from "lucide-react";
import { destinations, packages, testimonials, tourCategories, companyStats } from "../data/mock";
import HeroSection from "../components/HeroSection";

const CounterAnimation = ({ target, label, icon: Icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const targetNumber = parseInt(target.replace(/[^0-9]/g, ''));
    const increment = targetNumber / 50;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <Card className="marketplace-card text-center p-6">
      <CardContent className="space-y-3">
        <Icon className="w-8 h-8 text-brand-primary mx-auto" />
        <div className="display-small text-brand-primary">
          {target.includes('+') ? `${count}+` : count}
        </div>
        <p className="body-medium text-text-secondary">{label}</p>
      </CardContent>
    </Card>
  );
};

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const featuredDestinations = destinations.india.slice(0, 3).concat(destinations.uae.slice(0, 3));
  const featuredPackages = packages.india.slice(0, 2).concat(packages.uae.slice(0, 2));

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Video/Images */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-bg-subtle">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CounterAnimation 
              target={companyStats.yearsExperience} 
              label="Years of Experience" 
              icon={Award} 
            />
            <CounterAnimation 
              target={companyStats.destinationsCovered} 
              label="Destinations Covered" 
              icon={Globe} 
            />
            <CounterAnimation 
              target={companyStats.happyClients} 
              label="Happy Clients" 
              icon={Users} 
            />
          </div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-16 bg-bg-page">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="display-medium text-text-primary mb-4">
              Special Tour Categories
            </h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Choose from our specialized tour categories designed for every type of traveler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourCategories.map((category) => {
              const IconComponent = category.icon === 'Heart' ? Heart : 
                                 category.icon === 'Users' ? Users :
                                 category.icon === 'Crown' ? Award :
                                 Users;
              return (
                <Card key={category.id} className="marketplace-card group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="marketplace-card-image h-48 w-full"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="secondary" size="sm">
                          View Packages
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <IconComponent className="w-5 h-5 text-brand-primary" />
                        <h3 className="marketplace-card-title">{category.name}</h3>
                      </div>
                      <p className="body-small text-text-secondary mb-3">
                        {category.description}
                      </p>
                      <p className="body-small text-brand-primary font-medium">
                        {category.packages} packages available
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-bg-subtle">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="display-medium text-text-primary mb-4">
              Featured Destinations
            </h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Discover our most popular destinations across India and UAE
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <Card key={destination.id} className="marketplace-card group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="marketplace-card-image h-56 w-full"
                    />
                    <Badge className="absolute top-3 left-3 bg-white text-text-primary">
                      {destination.duration}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="marketplace-card-title">{destination.name}</h3>
                      <p className="marketplace-card-price">{destination.price}</p>
                    </div>
                    <p className="body-medium text-text-secondary mb-4">
                      {destination.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="body-small">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/packages">View Packages</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="btn-primary" asChild>
              <Link to="/destinations">
                View All Destinations <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Top Offers */}
      <section className="py-16 bg-bg-page">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="display-medium text-text-primary mb-4">
              Top Offers
            </h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Don't miss these amazing deals on our most popular packages
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPackages.map((pkg) => (
              <Card key={pkg.id} className="marketplace-card group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="marketplace-card-image h-48 w-full"
                    />
                    <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                      Best Deal
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="marketplace-card-title mb-2">{pkg.title}</h3>
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-text-secondary" />
                        <span className="body-small text-text-secondary">{pkg.duration}</span>
                      </div>
                    </div>
                    <p className="body-small text-text-secondary mb-4 line-clamp-2">
                      {pkg.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="marketplace-card-price">{pkg.price}</p>
                      <Button size="sm" className="btn-primary">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* why Early Birds */}
      <section className="py-16 bg-bg-page">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="display-medium text-text-primary mb-4">
      Why Travel with Early Birds? <span className="text-[#ffafcc]"></span>
    </h2>
    <p className="text-lg text-gray-700 mb-16 max-w-2xl mx-auto">
      We’re not just planning trips we’re crafting unforgettable experiences across India, the UAE, and beyond.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Box 1 */}
      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
        <div className="text-[#ffafcc] text-4xl mb-4">
          ✈️
        </div>
        <h3 className="text-xl font-semibold text-[#3f3d56] mb-2">
          Tailored Travel Experiences
        </h3>
        <p className="text-gray-600">
          Our itineraries blend iconic attractions and offbeat gems, crafted for every type of traveler.
        </p>
      </div>

      {/* Box 2 */}
      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
        <div className="text-[#ffafcc] text-4xl mb-4">
          🌍
        </div>
        <h3 className="text-xl font-semibold text-[#3f3d56] mb-2">
          Destinations Across Borders
        </h3>
        <p className="text-gray-600">
          Explore stunning locations in India, UAE, and beyond handpicked to turn wanderlust into reality.
        </p>
      </div>

      {/* Box 3 */}
      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
        <div className="text-[#ffafcc] text-4xl mb-4">
          📸
        </div>
        <h3 className="text-xl font-semibold text-[#3f3d56] mb-2">
          Memory-Making Moments
        </h3>
        <p className="text-gray-600">
          Every journey becomes a story with us full of joy, culture, and timeless snapshots.
        </p>
      </div>

      {/* Box 4 */}
      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
        <div className="text-[#ffafcc] text-4xl mb-4">
          🏨
        </div>
        <h3 className="text-xl font-semibold text-[#3f3d56] mb-2">
          Comfort + Convenience
        </h3>
        <p className="text-gray-600">
          From boutique stays to smooth transport we handle it all so you can relax and explore.
        </p>
      </div>

      {/* Box 5 */}
      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
        <div className="text-[#ffafcc] text-4xl mb-4">
          🧑‍💼
        </div>
        <h3 className="text-xl font-semibold text-[#3f3d56] mb-2">
          Experienced Tour Experts
        </h3>
        <p className="text-gray-600">
          Friendly, knowledgeable, and always by your side our guides make every trip unforgettable.
        </p>
      </div>

      {/* Box 6 */}
      <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
        <div className="text-[#ffafcc] text-4xl mb-4">
          💰
        </div>
        <h3 className="text-xl font-semibold text-[#3f3d56] mb-2">
          Affordable Luxury
        </h3>
        <p className="text-gray-600">
          Enjoy premium travel experiences without the premium price value-packed adventures await!
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials */}
      <section className="py-16 bg-bg-subtle">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="display-medium text-text-primary mb-4">
              What Our Travelers Say
            </h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Real experiences from real travelers who chose Early Birds
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="marketplace-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="body-medium text-text-primary mb-4 line-clamp-3">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="body-medium font-medium text-text-primary">
                        {testimonial.name}
                      </p>
                      <p className="body-small text-text-secondary">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="btn-primary" asChild>
              <Link to="/reviews">
                Read More Reviews <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-bg-page">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="display-medium text-text-primary mb-4">
              Stay Updated
            </h2>
            <p className="body-large text-text-secondary mb-8">
              Subscribe to our newsletter for exclusive deals and travel inspiration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
              <Button className="btn-primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
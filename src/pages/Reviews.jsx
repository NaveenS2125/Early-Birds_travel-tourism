import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Star, Quote, ThumbsUp, Filter, Calendar, MapPin } from "lucide-react";
import { testimonials } from "../data/mock";

const ReviewCard = ({ review, detailed = false }) => {
  return (
    <Card className="marketplace-card">
      <CardContent className="p-6">
        {/* Header with user info and rating */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img 
              src={review.image} 
              alt={review.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="body-medium font-semibold text-text-primary">{review.name}</h3>
              <p className="body-small text-text-secondary">{review.location}</p>
              {detailed && (
                <div className="flex items-center space-x-2 mt-1">
                  <Calendar className="w-3 h-3 text-text-light" />
                  <span className="body-small text-text-light">{review.date || "March 2024"}</span>
                </div>
              )}
            </div>
          </div>
          <div className="text-right">
            <div className="flex mb-1">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="body-small text-text-secondary">{review.rating}/5</p>
          </div>
        </div>

        {/* Tour badge */}
        <Badge variant="secondary" className="mb-3">
          {review.tour}
        </Badge>

        {/* Review text */}
        <div className="relative mb-4">
          <Quote className="w-4 h-4 text-brand-primary absolute -top-1 -left-1" />
          <p className="body-medium text-text-primary pl-4 italic">
            {review.text}
          </p>
        </div>

        {/* Additional details for detailed view */}
        {detailed && (
          <div className="border-t border-border-light pt-4 mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-text-secondary hover:text-brand-primary transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="body-small">Helpful ({review.helpful || 12})</span>
                </button>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-text-secondary" />
                <span className="body-small text-text-secondary">Verified Travel</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ReviewStats = () => {
  const stats = [
    { rating: 5, count: 847, percentage: 85 },
    { rating: 4, count: 98, percentage: 10 },
    { rating: 3, count: 35, percentage: 3 },
    { rating: 2, count: 15, percentage: 1 },
    { rating: 1, count: 5, percentage: 1 }
  ];

  const totalReviews = stats.reduce((sum, stat) => sum + stat.count, 0);
  const averageRating = (stats.reduce((sum, stat) => sum + (stat.rating * stat.count), 0) / totalReviews).toFixed(1);

  return (
    <Card className="marketplace-card">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <div className="display-small text-brand-primary mb-2">{averageRating}</div>
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="body-medium text-text-secondary">Based on {totalReviews} reviews</p>
        </div>

        <div className="space-y-3">
          {stats.map((stat) => (
            <div key={stat.rating} className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 w-12">
                <span className="body-small text-text-secondary">{stat.rating}</span>
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="flex-1 bg-bg-subtle rounded-full h-2">
                <div 
                  className="bg-brand-primary h-2 rounded-full" 
                  style={{ width: `${stat.percentage}%` }}
                />
              </div>
              <span className="body-small text-text-secondary w-8">{stat.count}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Reviews = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  // Extended testimonials with more variety
  const allReviews = [
    ...testimonials,
    {
      id: 5,
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      text: "The Dubai desert safari was absolutely incredible! The dune bashing was thrilling, and the BBQ dinner under the stars was magical. Our guide was very knowledgeable about the culture.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      tour: "Desert Safari",
      date: "February 2024",
      helpful: 18
    },
    {
      id: 6,
      name: "Lisa Thompson",
      location: "Sydney, Australia",
      rating: 4,
      text: "Himachal trip was good overall. The mountain views were breathtaking and the adventure activities were fun. Only minor issue was the weather, but that's not controllable!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      tour: "Himachal Snow Adventure",
      date: "January 2024",
      helpful: 9
    },
    {
      id: 7,
      name: "David Kumar",
      location: "Toronto, Canada",
      rating: 5,
      text: "Varanasi spiritual tour was life-changing. The Ganga Aarti ceremony was deeply moving, and our guide helped us understand the spiritual significance of everything we saw.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      tour: "Varanasi Spiritual",
      date: "March 2024",
      helpful: 25
    },
    {
      id: 8,
      name: "Emma Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      text: "Abu Dhabi cultural tour exceeded expectations! The Sheikh Zayed Mosque is absolutely stunning, and the Louvre Abu Dhabi was fascinating. Great organization throughout.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      tour: "Abu Dhabi Cultural",
      date: "February 2024",
      helpful: 14
    }
  ];

  const filteredReviews = activeTab === "all" ? allReviews :
                         activeTab === "5star" ? allReviews.filter(r => r.rating === 5) :
                         activeTab === "india" ? allReviews.filter(r => ["Golden Triangle Tour", "Kerala Backwaters", "Goa Beach Paradise", "Varanasi Spiritual", "Himachal Snow Adventure"].includes(r.tour)) :
                         allReviews.filter(r => ["Desert Safari", "Dubai Full Day", "Abu Dhabi Cultural"].includes(r.tour));

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="display-large text-text-primary mb-4">
            Customer Reviews
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Read what our travelers have to say about their experiences with Early Birds. Every review helps us improve and inspires others to embark on their own adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with stats and filters */}
          <div className="space-y-6">
            {/* Review Statistics */}
            <ReviewStats />

            {/* Filters */}
            <Card className="marketplace-card">
              <CardContent className="p-6">
                <h3 className="heading-4 text-text-primary mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter Reviews
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="body-small text-text-secondary mb-2 block">Sort by</label>
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 border border-border-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary body-small"
                    >
                      <option value="recent">Most Recent</option>
                      <option value="helpful">Most Helpful</option>
                      <option value="rating">Highest Rating</option>
                      <option value="oldest">Oldest First</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Write Review CTA */}
            <Card className="marketplace-card bg-brand-primary text-white">
              <CardContent className="p-6 text-center">
                <Star className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="heading-4 text-white mb-2">Share Your Experience</h3>
                <p className="body-small text-white opacity-90 mb-4">
                  Traveled with us? We'd love to hear about your experience!
                </p>
                <Button variant="secondary" className="w-full">
                  Write a Review
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All Reviews</TabsTrigger>
                <TabsTrigger value="5star">5 Star</TabsTrigger>
                <TabsTrigger value="india">India Tours</TabsTrigger>
                <TabsTrigger value="uae">UAE Tours</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-8">
                <div className="space-y-6">
                  {filteredReviews.map((review) => (
                    <ReviewCard key={review.id} review={review} detailed={true} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="5star" className="mt-8">
                <div className="mb-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h3 className="heading-5 text-yellow-800 mb-2">⭐ 5-Star Reviews</h3>
                  <p className="body-medium text-yellow-700">
                    Our highest-rated experiences from satisfied customers who had exceptional trips.
                  </p>
                </div>
                <div className="space-y-6">
                  {filteredReviews.map((review) => (
                    <ReviewCard key={review.id} review={review} detailed={true} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="india" className="mt-8">
                <div className="mb-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h3 className="heading-5 text-orange-800 mb-2">🇮🇳 India Tour Reviews</h3>
                  <p className="body-medium text-orange-700">
                    Reviews from travelers who explored incredible India with us.
                  </p>
                </div>
                <div className="space-y-6">
                  {filteredReviews.map((review) => (
                    <ReviewCard key={review.id} review={review} detailed={true} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="uae" className="mt-8">
                <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="heading-5 text-blue-800 mb-2">🇦🇪 UAE Tour Reviews</h3>
                  <p className="body-medium text-blue-700">
                    Experiences from travelers who discovered the UAE with Early Birds.
                  </p>
                </div>
                <div className="space-y-6">
                  {filteredReviews.map((review) => (
                    <ReviewCard key={review.id} review={review} detailed={true} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button className="btn-primary">
                Load More Reviews
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 py-12 bg-bg-subtle rounded-lg">
          <div className="text-center mb-8">
            <h2 className="display-medium text-text-primary mb-4">
              Why Our Reviews Matter
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-4 text-text-primary mb-2">Verified Reviews</h3>
              <p className="body-medium text-text-secondary">
                All reviews are from verified travelers who booked and completed trips with us
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-4 text-text-primary mb-2">Honest Feedback</h3>
              <p className="body-medium text-text-secondary">
                We publish all reviews - positive and constructive - to help you make informed decisions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-4 text-text-primary mb-2">Real Experiences</h3>
              <p className="body-medium text-text-secondary">
                Every review represents a real travel experience and helps us continuously improve
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Award, Users, Globe, Heart, MapPin, Clock, Star, ArrowRight } from "lucide-react";
import { companyStats } from "../data/mock";

const TeamMember = ({ member }) => {
  return (
    <Card className="marketplace-card text-center">
      <CardContent className="p-6">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="heading-4 text-text-primary mb-1">{member.name}</h3>
        <p className="body-medium text-brand-primary mb-2">{member.role}</p>
        <p className="body-small text-text-secondary mb-4">{member.experience}</p>
        <p className="body-small text-text-secondary">{member.description}</p>
      </CardContent>
    </Card>
  );
};

const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="marketplace-card text-center group">
      <CardContent className="p-8">
        <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="heading-4 text-text-primary mb-3">{title}</h3>
        <p className="body-medium text-text-secondary">{description}</p>
      </CardContent>
    </Card>
  );
};

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      experience: "12+ Years in Travel",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      description: "Passionate about creating unforgettable travel experiences"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Head of Operations",
      experience: "8+ Years Experience",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      description: "Ensures every detail of your journey is perfectly planned"
    },
    {
      id: 3,
      name: "Ahmed Al-Rashid",
      role: "UAE Operations Manager",
      experience: "10+ Years in UAE",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      description: "Local expert with deep knowledge of UAE destinations"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Customer Experience Lead",
      experience: "6+ Years Experience",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      description: "Dedicated to ensuring exceptional customer satisfaction"
    }
  ];

  const companyValues = [
    {
      icon: Heart,
      title: "Passion for Travel",
      description: "We live and breathe travel. Our passion drives us to create extraordinary experiences that exceed expectations."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Every decision we make puts our customers at the center. Your satisfaction and safety are our top priorities."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from planning to execution of your perfect trip."
    },
    {
      icon: Globe,
      title: "Local Expertise",
      description: "Our deep local knowledge and partnerships ensure authentic experiences and insider access to the best destinations."
    }
  ];

  const milestones = [
    { year: "2018", event: "Early Birds Travel founded with a vision to make travel accessible" },
    { year: "2019", event: "Launched India tour packages, served first 100 happy customers" },
    { year: "2020", event: "Expanded to UAE destinations, adapted to new travel protocols" },
    { year: "2021", event: "Introduced luxury and premium tour categories" },
    { year: "2022", event: "Reached 500+ satisfied customers milestone" },
    { year: "2023", event: "Added student group and family-focused packages" },
    { year: "2024", event: "Celebrated 1000+ happy customers and 25+ destinations" },
    { year: "2025", event: "Continuing to innovate and expand our offerings" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src="https://i.imghippo.com/files/idR4827Is.png"
              alt="Early Birds Travel" 
              className="h-16 w-auto"
            />
            <h1 className="display-large text-text-primary">Early Birds</h1>
          </div>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Founded with a passion for creating unforgettable travel experiences, Early Birds Travel & Tours has been helping travelers explore India and UAE like never before.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="marketplace-card text-center p-8">
            <CardContent className="space-y-3">
              <Award className="w-12 h-12 text-brand-primary mx-auto" />
              <div className="display-small text-brand-primary">{companyStats.yearsExperience}</div>
              <p className="body-medium text-text-secondary">Years of Experience</p>
            </CardContent>
          </Card>
          <Card className="marketplace-card text-center p-8">
            <CardContent className="space-y-3">
              <Globe className="w-12 h-12 text-brand-primary mx-auto" />
              <div className="display-small text-brand-primary">{companyStats.destinationsCovered}</div>
              <p className="body-medium text-text-secondary">Destinations Covered</p>
            </CardContent>
          </Card>
          <Card className="marketplace-card text-center p-8">
            <CardContent className="space-y-3">
              <Users className="w-12 h-12 text-brand-primary mx-auto" />
              <div className="display-small text-brand-primary">{companyStats.happyClients}</div>
              <p className="body-medium text-text-secondary">Happy Clients</p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="display-medium text-text-primary mb-6">Our Story</h2>
              <div className="space-y-4">
                <p className="body-large text-text-secondary">
                  Early Birds Travel & Tours was born from a simple belief: everyone deserves to experience the world's most beautiful destinations without the stress of planning every detail.
                </p>
                <p className="body-large text-text-secondary">
                  Founded in 2018 by travel enthusiasts who understand the joy of discovery, we started with a mission to make travel accessible, affordable, and absolutely unforgettable for everyone.
                </p>
                <p className="body-large text-text-secondary">
                  Today, we're proud to be one of the leading travel companies specializing in India and UAE destinations, with a team of experienced professionals who share our passion for creating extraordinary travel experiences.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop" 
                alt="Travel planning"
                className="rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop" 
                alt="Happy travelers"
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16 py-12 bg-bg-subtle rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-2 text-text-primary mb-4">Our Mission</h3>
              <p className="body-large text-text-secondary">
                To provide exceptional travel experiences that create lasting memories, while ensuring the highest standards of safety, comfort, and customer satisfaction for every traveler.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-2 text-text-primary mb-4">Our Vision</h3>
              <p className="body-large text-text-secondary">
                To become the most trusted travel partner for exploring India and UAE, known for our expertise, reliability, and commitment to making dreams come true.
              </p>
            </div>
          </div>
        </section>

        {/* Why Travel with Early Birds */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="display-medium text-text-primary mb-4">
              Why Travel with Early Birds?
            </h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Here's what makes us different and why thousands of travelers choose us for their adventures
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="display-medium text-text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Our experienced team of travel professionals is dedicated to making your journey extraordinary
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Company Timeline */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="display-medium text-text-primary mb-4">
              Our Journey
            </h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted travel partner
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{milestone.year.slice(-2)}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-1">
                      <Badge variant="secondary">{milestone.year}</Badge>
                    </div>
                    <p className="body-medium text-text-primary">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center py-12 bg-bg-page">
          <h2 className="display-medium text-text-primary mb-4">
            Ready to Create Your Story?
          </h2>
          <p className="body-large text-text-secondary mb-8 max-w-2xl mx-auto">
            Join thousands of happy travelers who have trusted us with their adventures. Let's plan your perfect trip together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary" asChild>
              <Link to="/packages">
                Explore Packages <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
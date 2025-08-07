import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { contactInfo } from "../data/mock";
import { useToast } from "../hooks/use-toast";

const ContactCard = ({ icon: Icon, title, content, action }) => {
  return (
    <Card className="marketplace-card text-center group">
      <CardContent className="p-8">
        <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="heading-4 text-text-primary mb-3">{title}</h3>
        <p className="body-medium text-text-secondary mb-4">{content}</p>
        {action && (
          <Button variant="outline" size="sm" onClick={action.onClick}>
            {action.label}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    travelType: 'package'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      travelType: 'package'
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi! I'm interested in your travel packages. My name is ${formData.name || 'interested traveler'}. Can you help me plan my trip?`);
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:${contactInfo.phone}`, '_self');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${contactInfo.email}`, '_self');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="display-large text-text-primary mb-4">
            Get in Touch
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Ready to plan your next adventure? We're here to help you create the perfect travel experience. Reach out to our travel experts today.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <ContactCard
            icon={Phone}
            title="Call Us"
            content={contactInfo.phone}
            action={{
              label: "Call Now",
              onClick: handleCallClick
            }}
          />
          <ContactCard
            icon={Mail}
            title="Email Us"
            content={contactInfo.email}
            action={{
              label: "Send Email",
              onClick: handleEmailClick
            }}
          />
          <ContactCard
            icon={MessageCircle}
            title="WhatsApp"
            content="Quick responses via WhatsApp"
            action={{
              label: "Chat Now",
              onClick: handleWhatsAppClick
            }}
          />
          <ContactCard
            icon={Clock}
            title="Office Hours"
            content={contactInfo.office_hours}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="marketplace-card">
              <CardContent className="p-8">
                <h2 className="heading-2 text-text-primary mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="travelType">Travel Interest</Label>
                      <select
                        id="travelType"
                        name="travelType"
                        value={formData.travelType}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-border-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      >
                        <option value="package">Tour Package</option>
                        <option value="custom">Custom Trip</option>
                        <option value="group">Group Travel</option>
                        <option value="business">Business Travel</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your travel plans, preferences, or any questions you have..."
                      required
                      rows={5}
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Office Information & Map */}
          <div className="space-y-8">
            {/* Office Info */}
            <Card className="marketplace-card">
              <CardContent className="p-8">
                <h3 className="heading-2 text-text-primary mb-6">Visit Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="body-medium font-semibold text-text-primary mb-1">Address</h4>
                      <p className="body-medium text-text-secondary">{contactInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="body-medium font-semibold text-text-primary mb-1">Office Hours</h4>
                      <p className="body-medium text-text-secondary">{contactInfo.office_hours}</p>
                      <p className="body-small text-text-light">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps Embed */}
            <Card className="marketplace-card">
              <CardContent className="p-0">
                <div className="h-64 bg-bg-subtle rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-brand-primary mx-auto mb-3" />
                    <p className="body-medium text-text-secondary">Interactive Map</p>
                    <p className="body-small text-text-light">Click to view on Google Maps</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3"
                      onClick={() => window.open('https://maps.google.com', '_blank')}
                    >
                      Open in Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <Card className="marketplace-card bg-brand-primary text-white">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="heading-3 text-white mb-3">Quick Response Guarantee</h3>
                <p className="body-medium text-white opacity-90 mb-4">
                  We respond to all inquiries within 2 hours during business hours and within 24 hours on weekends.
                </p>
                <Button variant="secondary">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 py-12 bg-bg-subtle rounded-lg">
          <div className="text-center mb-8">
            <h2 className="display-medium text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="heading-4 text-text-primary mb-2">How far in advance should I book?</h4>
              <p className="body-medium text-text-secondary mb-4">
                We recommend booking at least 2-3 weeks in advance for domestic trips and 4-6 weeks for international destinations to get the best rates and availability.
              </p>
            </div>
            <div>
              <h4 className="heading-4 text-text-primary mb-2">Do you offer custom packages?</h4>
              <p className="body-medium text-text-secondary mb-4">
                Absolutely! We specialize in creating personalized itineraries based on your preferences, budget, and travel dates. Contact us for a custom quote.
              </p>
            </div>
            <div>
              <h4 className="heading-4 text-text-primary mb-2">What's included in your packages?</h4>
              <p className="body-medium text-text-secondary mb-4">
                Our packages typically include accommodation, meals, transportation, guided tours, and entrance fees. Specific inclusions vary by package.
              </p>
            </div>
            <div>
              <h4 className="heading-4 text-text-primary mb-2">Is travel insurance recommended?</h4>
              <p className="body-medium text-text-secondary mb-4">
                Yes, we highly recommend travel insurance for all trips. We can help you choose the right coverage for your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
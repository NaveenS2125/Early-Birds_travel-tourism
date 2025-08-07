import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { contactInfo } from "../data/mock";

const Footer = () => {
  return (
    <footer className="bg-bg-subtle py-12">
      <div className="container">
       {/* Main Footer Box */}
<div className="bg-gray-900 rounded-2xl shadow-lg border border-border-light p-8 md:p-12 text-white">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Company Info with New Logo */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="heading-4 text-white font-bold">Early Birds</h3>
                  <p className="body-small text-blue-600 font-medium">Travel and Tours.</p>
                </div>
              </div>
              <p className="body-medium text-text-secondary leading-relaxed">
                Explore India & UAE like never before with our expertly crafted tours and unforgettable experiences.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="heading-5 text-text-primary font-semibold">Quick Links</h4>
              <div className="space-y-3">
                {[
                  { path: "/destinations", label: "Destinations" },
                  { path: "/packages", label: "Packages" },
                  { path: "/gallery", label: "Gallery" },
                  { path: "/about", label: "About Us" },
                  { path: "/reviews", label: "Reviews" }
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-text-secondary hover:text-brand-primary transition-colors body-medium hover:translate-x-1 transform duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tour Categories */}
            <div className="space-y-4">
              <h4 className="heading-5 text-text-primary font-semibold">Tour Categories</h4>
              <div className="space-y-3">
                {[
                  "Honeymoon Tours",
                  "Family Getaways",
                  "Premium Luxury Tours",
                  "Student Group Tours"
                ].map((category) => (
                  <div key={category} className="text-text-secondary body-medium hover:text-brand-primary cursor-pointer transition-colors">
                    {category}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="heading-5 text-text-primary font-semibold">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-brand-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-brand-primary" />
                  </div>
                  <p className="body-small text-text-secondary group-hover:text-text-primary transition-colors">
                    {contactInfo.address}
                  </p>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-brand-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-brand-primary" />
                  </div>
                  <p className="body-small text-text-secondary group-hover:text-text-primary transition-colors">
                    {contactInfo.phone}
                  </p>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-brand-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-brand-primary" />
                  </div>
                  <p className="body-small text-text-secondary group-hover:text-text-primary transition-colors">
                    {contactInfo.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border-light mt-10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="body-small text-text-secondary">
                © 2025 Early Birds Travel & Tours. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link 
                  to="#" 
                  className="body-small text-text-secondary hover:text-brand-primary transition-colors hover:underline"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="#" 
                  className="body-small text-text-secondary hover:text-brand-primary transition-colors hover:underline"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Info Box */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
          <div className="text-center">
            <p className="body-medium text-gray-700 mb-2">
              🌟 <strong>Office Hours:</strong> {contactInfo.office_hours}
            </p>
            <p className="body-small text-gray-600">
              Ready to plan your next adventure? Contact us today for personalized travel experiences!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
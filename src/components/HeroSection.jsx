import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { heroContent } from "../data/mock";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoMode, setIsVideoMode] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState(null);

  const { backgroundImages, backgroundVideos } = heroContent;

  // Auto-slide functionality for images
  useEffect(() => {
    if (!isVideoMode) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVideoMode, backgroundImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const toggleVideoPlayback = () => {
    if (videoRef) {
      if (isVideoPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const currentBackground = isVideoMode ? backgroundVideos[0] : backgroundImages[currentSlide];

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16">
      {/* Background Media */}
      <div className="absolute inset-0">
        {isVideoMode ? (
          <video
            ref={setVideoRef}
            className="w-full h-full object-cover"
            poster={backgroundVideos[0].poster}
            muted
            loop
            playsInline
            onLoadedData={() => {
              if (videoRef) {
                videoRef.play();
                setIsVideoPlaying(true);
              }
            }}
          >
            <source src={backgroundVideos[0].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="relative w-full h-full">
            {backgroundImages.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 text-center text-white hero-content">
          <Badge variant="secondary" className="mb-6 bg-white bg-opacity-20 text-white border-white border-opacity-30">
            Welcome to Early Birds Travel & Tours
          </Badge>
          
          <h1 className="display-large mb-6 max-w-4xl mx-auto text-white">
            {isVideoMode ? backgroundVideos[0].title : currentBackground.title}
          </h1>
          
          <p className="body-large mb-2 max-w-2xl mx-auto text-white text-opacity-90">
            {isVideoMode ? "Experience cinematic journeys through India & UAE" : currentBackground.subtitle}
          </p>
          
          <p className="body-large mb-8 max-w-2xl mx-auto text-white text-opacity-80">
            Discover breathtaking destinations, immerse yourself in rich cultures, and create memories that last a lifetime with our expertly crafted tours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className="btn-primary bg-brand-primary hover:bg-brand-primary/90" asChild>
              <Link to="/packages">
                Explore Packages <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
              <Link to="/destinations">View Destinations</Link>
            </Button>
          </div>

          {/* Media Controls */}
          <div className="flex items-center justify-center space-x-4 hero-controls">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVideoMode(!isVideoMode)}
              className="hero-btn-ghost text-white"
            >
              {isVideoMode ? "View Images" : "Watch Video"}
            </Button>
            
            {isVideoMode && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleVideoPlayback}
                className="hero-btn-ghost text-white"
              >
                {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Image Navigation Controls */}
      {!isVideoMode && (
        <>
          <button
            onClick={prevSlide}
            className="nav-arrow absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="nav-arrow absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        </>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 scroll-indicator">
        <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white bg-opacity-75 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
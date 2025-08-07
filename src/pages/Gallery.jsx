import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Play, Download, Eye } from "lucide-react";
import { galleryImages } from "../data/mock";

const GalleryCard = ({ image, onView }) => {
  return (
    <Card className="marketplace-card group overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={image.url} 
            alt={image.alt}
            className="marketplace-card-image h-64 w-full cursor-pointer"
            onClick={() => onView(image)}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="secondary"
                onClick={() => onView(image)}
              >
                <Eye className="w-4 h-4 mr-1" />
                View
              </Button>
              <Button size="sm" variant="secondary">
                <Download className="w-4 h-4 mr-1" />
                Save
              </Button>
            </div>
          </div>
          <Badge className="absolute top-3 right-3 bg-white text-text-primary capitalize">
            {image.category}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const VideoCard = ({ video }) => {
  return (
    <Card className="marketplace-card group overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="marketplace-card-image h-64 w-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-8 h-8 text-brand-primary ml-1" />
            </div>
          </div>
          <Badge className="absolute top-3 left-3 bg-red-500 text-white">
            Video
          </Badge>
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="text-white font-medium text-sm">{video.title}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Modal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="max-w-4xl max-h-full relative">
        <img 
          src={image.url} 
          alt={image.alt}
          className="max-w-full max-h-full object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70"
        >
          ×
        </button>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-lg font-medium mb-1">{image.alt}</h3>
          <Badge variant="secondary" className="capitalize">
            {image.category}
          </Badge>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("photos");

  const videoGallery = [
    {
      id: 1,
      title: "Dubai Desert Safari Experience",
      thumbnail: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&h=600&fit=crop",
      url: "https://pin.it/uj1Zynwh9",
      duration: "3:24"
    },
    {
      id: 2,
      title: "UAE Adventure Highlights",
      thumbnail: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      url: "https://pin.it/p8eaadQny",
      duration: "4:15"
    },
    {
      id: 3,
      title: "Kerala Backwaters Journey",
      thumbnail: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
      url: "#",
      duration: "2:45"
    },
    {
      id: 4,
      title: "Golden Triangle Tour",
      thumbnail: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
      url: "#",
      duration: "5:30"
    }
  ];

  const categories = ["all", "monuments", "nature", "beaches", "cityscape", "adventure"];

  const filteredImages = activeTab === "photos" 
    ? galleryImages.filter(img => activeTab === "all" || img.category === activeTab)
    : galleryImages;

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="display-large text-text-primary mb-4">
            Travel Gallery
          </h1>
          <p className="body-large text-text-secondary max-w-3xl mx-auto">
            Explore stunning destinations through our lens. From breathtaking landscapes to cultural experiences, get inspired for your next adventure.
          </p>
        </div>

        {/* Gallery Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>

          {/* Photos Tab */}
          <TabsContent value="photos" className="mt-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeTab === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab(category)}
                  className={activeTab === category ? "btn-primary" : ""}
                >
                  {category === "all" ? "All Photos" : category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image) => (
                <GalleryCard 
                  key={image.id} 
                  image={image} 
                  onView={setSelectedImage}
                />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button className="btn-primary">
                Load More Photos
              </Button>
            </div>
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos" className="mt-8">
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="heading-4 text-blue-800 mb-2">🎥 Travel Experience Videos</h3>
              <p className="body-medium text-blue-700">
                Watch real customer experiences and destination highlights to get a taste of what awaits you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoGallery.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="btn-primary">
                View More Videos
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Featured Experience Section */}
        <div className="mt-16 py-12 bg-bg-subtle rounded-lg">
          <div className="text-center mb-8">
            <h2 className="display-medium text-text-primary mb-4">
              Share Your Travel Story
            </h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto mb-8">
              We love seeing our travelers' experiences! Share your photos and videos with us using #EarlyBirdsTravel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">
                Submit Your Photos
              </Button>
              <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
                Tag Us on Instagram
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="display-small text-brand-primary mb-2">500+</div>
            <p className="body-medium text-text-secondary">Photos Captured</p>
          </div>
          <div className="text-center">
            <div className="display-small text-brand-primary mb-2">50+</div>
            <p className="body-medium text-text-secondary">Video Stories</p>
          </div>
          <div className="text-center">
            <div className="display-small text-brand-primary mb-2">25+</div>
            <p className="body-medium text-text-secondary">Destinations Covered</p>
          </div>
          <div className="text-center">
            <div className="display-small text-brand-primary mb-2">1000+</div>
            <p className="body-medium text-text-secondary">Happy Memories</p>
          </div>
        </div>
      </div>

      {/* Modal for viewing images */}
      <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

export default Gallery;
import React, { useState } from "react";
import { X } from "lucide-react";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-brand-primary text-white py-2 px-4 text-center relative">
      <div className="container mx-auto">
        <p className="body-small font-medium">
          🎉 Special Offer: Book your dream vacation now and get 20% off on all UAE packages! 
          <span className="ml-2 underline cursor-pointer hover:no-underline">
            Learn More
          </span>
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-all"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default AnnouncementBanner;
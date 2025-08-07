// Mock data for Early Birds Travel and Tours

export const destinations = {
  india: [
    {
      id: 1,
      name: "Golden Triangle",
      description: "Delhi, Agra & Jaipur - Experience India's iconic heritage cities",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop",
      duration: "7 Days",
      price: "₹25,000",
      highlights: ["Taj Mahal", "Red Fort", "Hawa Mahal"]
    },
    {
      id: 2,
      name: "Kerala Backwaters",
      description: "Serene houseboat experience through emerald canals",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
      duration: "5 Days",
      price: "₹18,000",
      highlights: ["Houseboat Stay", "Spice Gardens", "Kathakali Show"]
    },
    {
      id: 3,
      name: "Himachal Snow Adventure",
      description: "Snow-capped mountains and adventure sports in Manali",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      duration: "6 Days",
      price: "₹22,000",
      highlights: ["Solang Valley", "Rohtang Pass", "Adventure Sports"]
    },
    {
      id: 4,
      name: "Goa Beach Paradise",
      description: "Sun, sand and vibrant nightlife on pristine beaches",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop",
      duration: "4 Days",
      price: "₹15,000",
      highlights: ["Beach Hopping", "Water Sports", "Night Markets"]
    },
    {
      id: 5,
      name: "Spiritual Varanasi",
      description: "Ancient city of temples and sacred Ganges rituals",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400&h=300&fit=crop",
      duration: "3 Days",
      price: "₹12,000",
      highlights: ["Ganga Aarti", "Temple Tours", "Boat Rides"]
    }
  ],
  uae: [
    {
      id: 6,
      name: "Dubai City Explorer",
      description: "Modern marvels and luxury shopping in the city of gold",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
      duration: "4 Days",
      price: "AED 1,200",
      highlights: ["Burj Khalifa", "Dubai Mall", "Gold Souk"]
    },
    {
      id: 7,
      name: "Desert Safari Adventure",
      description: "Thrilling dune bashing and authentic Bedouin experience",
      image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400&h=300&fit=crop",
      duration: "1 Day",
      price: "AED 180",
      highlights: ["Dune Bashing", "Camel Riding", "BBQ Dinner"]
    },
    {
      id: 8,
      name: "Abu Dhabi Cultural",
      description: "Rich heritage and modern architecture in UAE's capital",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      duration: "2 Days",
      price: "AED 600",
      highlights: ["Sheikh Zayed Mosque", "Louvre Abu Dhabi", "Heritage Village"]
    },
    {
      id: 9,
      name: "Sharjah Art & Culture",
      description: "UNESCO heritage sites and vibrant arts scene",
      image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=400&h=300&fit=crop",
      duration: "1 Day",
      price: "AED 200",
      highlights: ["Art Museums", "Heritage Areas", "Traditional Souks"]
    }
  ]
};

export const packages = {
  india: [
    {
      id: 1,
      title: "Golden Triangle Tour",
      price: "₹25,000",
      duration: "7 Days / 6 Nights",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop",
      description: "Complete Delhi-Agra-Jaipur circuit with heritage hotels",
      inclusions: ["4-star hotels", "All meals", "Private transport", "Guide services"]
    },
    {
      id: 2,
      title: "Kerala Backwaters",
      price: "₹18,000",
      duration: "5 Days / 4 Nights",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
      description: "Houseboat stay with traditional Kerala cuisine",
      inclusions: ["Houseboat stay", "All meals", "Transfers", "Sightseeing"]
    },
    {
      id: 3,
      title: "Himachal Snow",
      price: "₹22,000",
      duration: "6 Days / 5 Nights",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "Adventure sports and scenic mountain views",
      inclusions: ["Hill station hotels", "Adventure activities", "All transfers", "Meals"]
    },
    {
      id: 4,
      title: "Goa Party",
      price: "₹15,000",
      duration: "4 Days / 3 Nights",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop",
      description: "Beach resorts with water sports and nightlife",
      inclusions: ["Beach resort", "Water sports", "Airport transfers", "Breakfast"]
    },
    {
      id: 5,
      title: "Varanasi Spiritual",
      price: "₹12,000",
      duration: "3 Days / 2 Nights",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400&h=300&fit=crop",
      description: "Sacred temples and Ganga aarti ceremonies",
      inclusions: ["Heritage hotel", "Temple tours", "Boat rides", "Cultural shows"]
    }
  ],
  uae: [
    {
      id: 6,
      title: "Dubai Full Day",
      price: "AED 1,200",
      duration: "4 Days / 3 Nights",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
      description: "Luxury hotels with city tours and shopping",
      inclusions: ["5-star hotel", "City tours", "Shopping trips", "Airport transfers"]
    },
    {
      id: 7,
      title: "Desert Safari with BBQ",
      price: "AED 180",
      duration: "6 Hours",
      image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400&h=300&fit=crop",
      description: "Dune bashing, camel rides and traditional dinner",
      inclusions: ["Pick & drop", "Dune bashing", "BBQ dinner", "Cultural shows"]
    },
    {
      id: 8,
      title: "Ferrari World Combo",
      price: "AED 800",
      duration: "2 Days / 1 Night",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Theme park thrills with luxury accommodation",
      inclusions: ["Theme park tickets", "4-star hotel", "Transfers", "Breakfast"]
    },
    {
      id: 9,
      title: "Yas Island Family Day",
      price: "AED 600",
      duration: "Full Day",
      image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=400&h=300&fit=crop",
      description: "Family entertainment with theme parks and waterparks",
      inclusions: ["Park tickets", "Lunch", "Transfers", "Guide services"]
    }
  ]
};

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "Incredible Golden Triangle tour! Every detail was perfectly planned. The guide was knowledgeable and the hotels were amazing.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    tour: "Golden Triangle Tour"
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    location: "Dubai, UAE",
    rating: 5,
    text: "Early Birds made our Kerala honeymoon unforgettable. The houseboat experience was magical and romantic.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    tour: "Kerala Backwaters"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    location: "London, UK",
    rating: 5,
    text: "Dubai desert safari exceeded all expectations! Professional service and authentic cultural experience.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    tour: "Desert Safari"
  },
  {
    id: 4,
    name: "Rajesh Patel",
    location: "Ahmedabad, India",
    rating: 4,
    text: "Family trip to Goa was perfectly organized. Kids loved the water sports and we enjoyed the peaceful beaches.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    tour: "Goa Beach Paradise"
  }
];

export const tourCategories = [
  {
    id: 1,
    name: "Honeymoon Tours",
    description: "Romantic getaways for couples",
    icon: "Heart",
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=200&fit=crop",
    packages: 8
  },
  {
    id: 2,
    name: "Family Getaways",
    description: "Fun adventures for the whole family",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=200&fit=crop",
    packages: 12
  },
  {
    id: 3,
    name: "Premium Luxury Tours",
    description: "5-star experiences and exclusive access",
    icon: "Crown",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop",
    packages: 6
  },
  {
    id: 4,
    name: "Student Group Tours",
    description: "Educational and adventure trips for students",
    icon: "GraduationCap",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=300&h=200&fit=crop",
    packages: 10
  }
];

export const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
    alt: "Taj Mahal at sunrise",
    category: "monuments"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
    alt: "Kerala backwaters houseboat",
    category: "nature"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    alt: "Dubai skyline at night",
    category: "cityscape"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&h=600&fit=crop",
    alt: "Desert safari adventure",
    category: "adventure"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Himalayan mountain peaks",
    category: "nature"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
    alt: "Goa beach sunset",
    category: "beaches"
  }
];

export const companyStats = {
  yearsExperience: "7+",
  destinationsCovered: "25+",
  happyClients: "1000+"
};

export const contactInfo = {
  address: "123 Travel Street, Tourism District, Mumbai - 400001, India",
  phone: "+91 98765 43210",
  email: "info@earlybirds.travel",
  whatsapp: "+91 98765 43210",
  office_hours: "Mon - Sat: 9:00 AM - 7:00 PM"
};

// Hero content for dynamic header/hero section
export const heroContent = {
  backgroundVideos: [
    {
      id: 1,
      url: "https://assets.mixkit.co/videos/preview/mixkit-traveling-through-an-arid-road-at-sunset-41519-large.mp4",
      poster: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxpbmRpYXxlbnwwfHx8fDE3NTMyNjAzNjd8MA&ixlib=rb-4.1.0&q=85",
      title: "Discover India's Heritage",
      type: "india"
    },
    {
      id: 2,
      url: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-desert-road-31074-large.mp4",
      poster: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MXwxfHNlYXJjaHwxfHx0cmF2ZWx8ZW58MHx8fHwxNzUzMTU5NzE5fDA&ixlib=rb-4.1.0&q=85",
      title: "Experience UAE Adventures",
      type: "uae"
    }
  ],
  backgroundImages: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxpbmRpYXxlbnwwfHx8fDE3NTMyNjAzNjd8MA&ixlib=rb-4.1.0&q=85",
      title: "Majestic Taj Mahal",
      subtitle: "Experience India's Iconic Wonder",
      type: "india"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxpbmRpYXxlbnwwfHx8fDE3NTMyNjAzNjd8MA&ixlib=rb-4.1.0&q=85",
      title: "Royal Palaces of India",
      subtitle: "Discover Ancient Architecture",
      type: "india"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MXwxfHNlYXJjaHwxfHx0cmF2ZWx8ZW58MHx8fHwxNzUzMTU5NzE5fDA&ixlib=rb-4.1.0&q=85",
      title: "Desert Adventures Await",
      subtitle: "Explore UAE's Golden Landscapes",
      type: "uae"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHx0cmF2ZWx8ZW58MHx8fHwxNzUzMTU5NzE5fDA&ixlib=rb-4.1.0&q=85",
      title: "Journey Beyond Boundaries",
      subtitle: "Your Adventure Begins Here",
      type: "global"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHx0cmF2ZWx8ZW58MHx8fHwxNzUzMTU5NzE5fDA&ixlib=rb-4.1.0&q=85",
      title: "Scenic Mountain Escapes",
      subtitle: "Breathtaking Views Await",
      type: "adventure"
    }
  ]
};
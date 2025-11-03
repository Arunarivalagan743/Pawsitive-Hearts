import React, { useState } from 'react'
import { X, Heart, Camera } from 'lucide-react'

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
      alt: "Happy rescued dog playing",
      category: "Rescue Stories",
      title: "Buddy's First Day"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg",
      alt: "Dog adoption event",
      category: "Events",
      title: "Adoption Drive Success"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
      alt: "Volunteer with rescued dog",
      category: "Volunteers",
      title: "Volunteer Love"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg",
      alt: "Dog training session",
      category: "Training",
      title: "Learning Together"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1586966/pexels-photo-1586966.jpeg",
      alt: "Puppy at rescue center",
      category: "Rescue Stories",
      title: "New Arrival"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",
      alt: "Happy family with adopted dog",
      category: "Success Stories",
      title: "Forever Home Found"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg",
      alt: "Dog medical checkup",
      category: "Medical Care",
      title: "Health First"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg",
      alt: "Multiple rescue dogs",
      category: "Rescue Stories",
      title: "Gang of Rescues"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg",
      alt: "Dog grooming session",
      category: "Services",
      title: "Grooming Day"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg",
      alt: "Community event with dogs",
      category: "Events",
      title: "Community Gathering"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/1938126/pexels-photo-1938126.jpeg",
      alt: "Rescue operation",
      category: "Rescue Stories",
      title: "Rescue Mission"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg",
      alt: "Dog playing in park",
      category: "Success Stories",
      title: "Playing Free"
    }
  ]

  const categories = ["All", "Rescue Stories", "Success Stories", "Events", "Training", "Medical Care", "Services", "Volunteers"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory)

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Moments of joy, hope, and transformation captured through our rescue journey. 
            See the incredible stories behind each rescued dog finding their forever home.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600 text-center">
            Showing {filteredImages.length} of {galleryImages.length} photos
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                <p className="text-white/80 text-xs">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-orange-500 to-teal-500 text-white rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact in Pictures</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Dogs Rescued</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-lg">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">Happy Moments</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Share Your Story</h2>
          <p className="text-xl text-gray-600 mb-8">
            Have you adopted one of our rescue dogs? We'd love to feature your success story in our gallery!
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-flex items-center">
            <Heart className="mr-2 h-5 w-5" />
            Share Your Photos
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
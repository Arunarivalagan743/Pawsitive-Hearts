import React from 'react'
import { Scissors, Heart, GraduationCap, Home, Clock, Star } from 'lucide-react'

export const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Pet Grooming",
      description: "Professional grooming services to keep your dog healthy and looking their best.",
      features: ["Bath & Brush", "Nail Trimming", "Ear Cleaning", "Teeth Cleaning"],
      price: "Starting from ₹800",
      duration: "1-2 hours"
    },
    {
      icon: Heart,
      title: "Dog Walking",
      description: "Daily walks for your furry friend when you're busy or away from home.",
      features: ["30-60 minute walks", "Experienced walkers", "GPS tracking", "Photo updates"],
      price: "₹300 per walk",
      duration: "30-60 minutes"
    },
    {
      icon: GraduationCap,
      title: "Dog Training",
      description: "Professional training sessions to help your dog learn good behavior and commands.",
      features: ["Basic obedience", "Behavioral correction", "Puppy training", "Advanced commands"],
      price: "₹2000 per session",
      duration: "1 hour"
    },
    {
      icon: Home,
      title: "Pet Boarding",
      description: "Safe and comfortable boarding facility for when you need to travel.",
      features: ["24/7 supervision", "Daily exercise", "Medication administration", "Photo updates"],
      price: "₹1200 per night",
      duration: "Overnight stays"
    }
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Dog Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive care services for your beloved companions. From grooming to training, 
            we ensure your dog receives the best possible care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <service.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <Star className="h-4 w-4 text-orange-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-orange-500">{service.price}</span>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-orange-500 to-teal-500 text-white rounded-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experienced Care</h3>
              <p>Our team has years of experience in dog care and training.</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Service</h3>
              <p>We maintain the highest standards of care for all our services.</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
              <p>We offer convenient scheduling to fit your busy lifestyle.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Priya Sharma",
                service: "Dog Training",
                review: "The training sessions were incredible! My dog Rocky learned so much and his behavior improved dramatically.",
                rating: 5
              },
              {
                name: "Rahul Patel",
                service: "Pet Grooming",
                review: "Professional grooming service with great attention to detail. My dog always comes back looking and feeling great!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={`https://images.pexels.com/photos/${index === 0 ? '3844788' : '2379004'}/pexels-photo-${index === 0 ? '3844788' : '2379004'}.jpeg`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.service}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Book a Service?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to schedule an appointment for your furry friend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Call Now: +91 98765 43210
            </button>
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Book Online
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
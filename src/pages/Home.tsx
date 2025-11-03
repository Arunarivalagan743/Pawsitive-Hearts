import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Users, Calendar, Award, ArrowRight } from 'lucide-react'

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-teal-500 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="relative bg-cover bg-center h-96 md:h-[600px]"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-teal-500/80"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-center w-full">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Every Dog Deserves a
                <span className="text-yellow-300"> Loving Home</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Welcome to Dogs of Bombay House - Mumbai's premier dog rescue and rehabilitation center. 
                We're dedicated to saving lives, one tail wag at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/dogs" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Adopt a Dog
                  <Heart className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-white hover:bg-gray-100 text-orange-500 px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Dogs Rescued</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">300+</h3>
              <p className="text-gray-600">Happy Families</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Events Organized</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">5+</h3>
              <p className="text-gray-600">Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dogs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Featured Dogs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These amazing dogs are looking for their forever homes. Could you be their perfect match?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Buddy",
                breed: "Golden Retriever Mix",
                age: "3 years",
                image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",
                personality: ["Friendly", "Energetic", "Loyal"]
              },
              {
                name: "Luna",
                breed: "Labrador Mix",
                age: "2 years",
                image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
                personality: ["Gentle", "Playful", "Smart"]
              },
              {
                name: "Max",
                breed: "German Shepherd Mix",
                age: "4 years",
                image: "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg",
                personality: ["Protective", "Calm", "Loving"]
              }
            ].map((dog, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={dog.image} 
                    alt={dog.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Available
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dog.name}</h3>
                  <p className="text-gray-600 mb-2">{dog.breed} • {dog.age}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dog.personality.map((trait, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {trait}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/dogs/${index + 1}`}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors inline-block text-center"
                  >
                    Meet {dog.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/dogs" 
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-flex items-center"
            >
              View All Dogs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nothing makes us happier than seeing our rescued dogs find their forever homes. 
              Here are some of our favorite success stories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                dogName: "Rocky",
                family: "The Sharma Family",
                story: "Rocky was found injured on the streets of Bandra. After months of rehabilitation, he found his perfect match with the Sharma family. Now he's the happiest dog in Juhu!",
                image: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg"
              },
              {
                dogName: "Bella",
                family: "The Patel Family",
                story: "Bella was a shy rescue who needed extra patience and love. The Patel family provided just that, and now she's a confident, happy dog who loves playing with their kids.",
                image: "https://images.pexels.com/photos/1586966/pexels-photo-1586966.jpeg"
              }
            ].map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={story.image} 
                    alt={story.dogName}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{story.dogName}</h3>
                    <p className="text-gray-600">Adopted by {story.family}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking to adopt, volunteer, or donate, every action helps us save more lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/dogs" 
              className="bg-white hover:bg-gray-100 text-orange-500 px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Adopt Now
              <Heart className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white hover:bg-white hover:text-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Volunteer
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
import React from 'react'
import { Calendar, MapPin, Users, Clock } from 'lucide-react'

export const Events = () => {
  const events = [
    {
      id: 1,
      title: "Dog Adoption Drive",
      date: "2024-12-15",
      time: "10:00 AM - 4:00 PM",
      location: "Carter Road, Bandra",
      description: "Join us for our monthly adoption drive where you can meet our rescued dogs and find your perfect companion.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
      attendees: 25,
      maxAttendees: 50,
      type: "Adoption Event"
    },
    {
      id: 2,
      title: "Free Dog Training Workshop",
      date: "2024-12-20",
      time: "2:00 PM - 5:00 PM",
      location: "Mahim Nature Park",
      description: "Learn basic dog training techniques from our professional trainers. Perfect for new pet owners.",
      image: "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg",
      attendees: 15,
      maxAttendees: 30,
      type: "Workshop"
    },
    {
      id: 3,
      title: "Christmas Charity Walk",
      date: "2024-12-25",
      time: "7:00 AM - 9:00 AM",
      location: "Juhu Beach",
      description: "A fun charity walk with your dogs to raise funds for our rescue operations. Prizes for best costumes!",
      image: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg",
      attendees: 40,
      maxAttendees: 100,
      type: "Charity Event"
    },
    {
      id: 4,
      title: "Pet Photography Session",
      date: "2024-12-30",
      time: "11:00 AM - 3:00 PM",
      location: "Sanjay Gandhi National Park",
      description: "Professional photographers will capture beautiful moments with your pets. All proceeds go to our rescue fund.",
      image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
      attendees: 8,
      maxAttendees: 20,
      type: "Photography"
    }
  ]

  const upcomingEvents = events.filter(event => new Date(event.date) > new Date())

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community events and help make a difference in the lives of rescued dogs. 
            From adoption drives to training workshops, there's something for everyone.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {event.type}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-700">
                    {event.attendees}/{event.maxAttendees} attending
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-4 w-4 mr-2 text-orange-500" />
                    <span>{new Date(event.date).toLocaleDateString('en-IN', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-4 w-4 mr-2 text-orange-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="h-4 w-4 mr-2 text-orange-500" />
                    <span>{event.attendees} people attending</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                    Register Now
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Types */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Types of Events We Host</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Calendar,
                title: "Adoption Drives",
                description: "Monthly events where you can meet our rescued dogs and find your perfect companion."
              },
              {
                icon: Users,
                title: "Training Workshops",
                description: "Learn essential dog training techniques from our professional trainers."
              },
              {
                icon: MapPin,
                title: "Charity Walks",
                description: "Fun community walks that raise funds for our rescue operations."
              },
              {
                icon: Clock,
                title: "Educational Sessions",
                description: "Workshops on dog care, health, and responsible pet ownership."
              }
            ].map((type, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <type.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Recent Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Diwali Adoption Special",
                date: "November 2024",
                image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
                result: "12 dogs found homes"
              },
              {
                title: "Monsoon Care Workshop",
                date: "September 2024",
                image: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg",
                result: "50 pet owners educated"
              },
              {
                title: "Independence Day Charity Run",
                date: "August 2024",
                image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
                result: "₹1,50,000 raised"
              }
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                  <p className="text-sm text-orange-600 font-semibold">{event.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-teal-500 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Host an Event?</h2>
          <p className="text-xl mb-6">
            Partner with us to organize community events that help our rescued dogs find homes.
          </p>
          <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
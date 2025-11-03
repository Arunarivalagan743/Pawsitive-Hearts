import React from 'react'
import { Heart, Users, Shield, Award } from 'lucide-react'

export const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Dogs of Bombay House
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Founded in 2019, Dogs of Bombay House has been Mumbai's leading dog rescue and rehabilitation center. 
            We're dedicated to providing every dog with the love, care, and second chance they deserve.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  To rescue, rehabilitate, and rehome stray and abandoned dogs in Mumbai, while promoting 
                  responsible pet ownership and building a compassionate community that values all life.
                </p>
                <p className="text-gray-700 mb-4">
                  We believe every dog deserves a loving home, proper medical care, and the chance to live 
                  a happy, healthy life. Our comprehensive approach includes rescue operations, medical 
                  treatment, behavioral rehabilitation, and careful matching with forever families.
                </p>
                <p className="text-gray-700">
                  Beyond adoption, we work to educate the community about animal welfare, promote spay/neuter 
                  programs, and advocate for stronger animal protection laws.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg" 
                  alt="Happy rescued dog"
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "We treat every dog with love, kindness, and respect, regardless of their background or condition."
              },
              {
                icon: Users,
                title: "Community",
                description: "We build strong partnerships with adopters, volunteers, and local organizations to create lasting change."
              },
              {
                icon: Shield,
                title: "Protection",
                description: "We advocate for animal rights and work to create a safer environment for all dogs in Mumbai."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We maintain the highest standards in animal care, adoption processes, and community education."
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Priya Sharma",
                role: "Founder & Veterinarian",
                bio: "A passionate veterinarian with over 15 years of experience in animal welfare and rescue operations.",
                image: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg"
              },
              {
                name: "Rahul Patel",
                role: "Operations Manager",
                bio: "Former animal control officer who brings expertise in rescue operations and animal behavior.",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              },
              {
                name: "Anjali Desai",
                role: "Adoption Coordinator",
                bio: "Dedicated to finding perfect matches between dogs and families through careful screening and follow-up.",
                image: "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-500 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-r from-orange-500 to-teal-500 text-white rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Dogs Rescued</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">400+</div>
              <div className="text-lg">Successful Adoptions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">Medical Treatments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-lg">Volunteer Hours/Month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Heart } from 'lucide-react'

export const Dogs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBreed, setSelectedBreed] = useState('')
  const [selectedAge, setSelectedAge] = useState('')
  const [selectedSize, setSelectedSize] = useState('')

  // Mock data - in real app, this would come from Supabase
  const dogs = [
    {
      id: 1,
      name: "Buddy",
      breed: "Golden Retriever Mix",
      age: 3,
      size: "large",
      gender: "male",
      description: "Buddy is a friendly and energetic dog who loves to play fetch and go on long walks.",
      image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",
      personality: ["Friendly", "Energetic", "Loyal"],
      adoptionStatus: "available"
    },
    {
      id: 2,
      name: "Luna",
      breed: "Labrador Mix",
      age: 2,
      size: "medium",
      gender: "female",
      description: "Luna is a gentle and playful dog who gets along well with children and other pets.",
      image: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
      personality: ["Gentle", "Playful", "Smart"],
      adoptionStatus: "available"
    },
    {
      id: 3,
      name: "Max",
      breed: "German Shepherd Mix",
      age: 4,
      size: "large",
      gender: "male",
      description: "Max is a protective and calm dog who would make an excellent guard dog for the right family.",
      image: "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg",
      personality: ["Protective", "Calm", "Loving"],
      adoptionStatus: "available"
    },
    {
      id: 4,
      name: "Bella",
      breed: "Indie Mix",
      age: 1,
      size: "small",
      gender: "female",
      description: "Bella is a young and curious puppy who loves to explore and learn new things.",
      image: "https://images.pexels.com/photos/1586966/pexels-photo-1586966.jpeg",
      personality: ["Curious", "Playful", "Affectionate"],
      adoptionStatus: "available"
    },
    {
      id: 5,
      name: "Charlie",
      breed: "Beagle Mix",
      age: 5,
      size: "medium",
      gender: "male",
      description: "Charlie is a calm and friendly senior dog who enjoys quiet walks and cozy naps.",
      image: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg",
      personality: ["Calm", "Friendly", "Gentle"],
      adoptionStatus: "pending"
    },
    {
      id: 6,
      name: "Daisy",
      breed: "Poodle Mix",
      age: 3,
      size: "small",
      gender: "female",
      description: "Daisy is an intelligent and elegant dog who loves to be pampered and groomed.",
      image: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg",
      personality: ["Intelligent", "Elegant", "Affectionate"],
      adoptionStatus: "available"
    }
  ]

  const filteredDogs = dogs.filter(dog => {
    const matchesSearch = dog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dog.breed.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesBreed = selectedBreed === '' || dog.breed.toLowerCase().includes(selectedBreed.toLowerCase())
    const matchesAge = selectedAge === '' || 
                      (selectedAge === 'puppy' && dog.age < 2) ||
                      (selectedAge === 'adult' && dog.age >= 2 && dog.age <= 7) ||
                      (selectedAge === 'senior' && dog.age > 7)
    const matchesSize = selectedSize === '' || dog.size === selectedSize

    return matchesSearch && matchesBreed && matchesAge && matchesSize
  })

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect Companion
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our available dogs and find your new best friend. Each dog has been carefully rehabilitated 
            and is ready for their forever home.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or breed..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
            >
              <option value="">All Breeds</option>
              <option value="Golden Retriever">Golden Retriever</option>
              <option value="Labrador">Labrador</option>
              <option value="German Shepherd">German Shepherd</option>
              <option value="Beagle">Beagle</option>
              <option value="Poodle">Poodle</option>
              <option value="Indie">Indie</option>
            </select>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={selectedAge}
              onChange={(e) => setSelectedAge(e.target.value)}
            >
              <option value="">All Ages</option>
              <option value="puppy">Puppy (Under 2)</option>
              <option value="adult">Adult (2-7)</option>
              <option value="senior">Senior (7+)</option>
            </select>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">All Sizes</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredDogs.length} of {dogs.length} dogs
          </p>
        </div>

        {/* Dogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDogs.map((dog) => (
            <div key={dog.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={dog.image} 
                  alt={dog.name}
                  className="w-full h-64 object-cover"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                  dog.adoptionStatus === 'available' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-yellow-500 text-white'
                }`}>
                  {dog.adoptionStatus === 'available' ? 'Available' : 'Pending'}
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-700">
                    {dog.age} {dog.age === 1 ? 'year' : 'years'} • {dog.size}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{dog.name}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {dog.gender}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{dog.breed}</p>
                <p className="text-gray-700 mb-4 line-clamp-2">{dog.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {dog.personality.map((trait, i) => (
                    <span key={i} className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                      {trait}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link 
                    to={`/dogs/${dog.id}`}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                  >
                    Meet {dog.name}
                  </Link>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDogs.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No dogs found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or check back later for new arrivals.</p>
          </div>
        )}
      </div>
    </div>
  )
}
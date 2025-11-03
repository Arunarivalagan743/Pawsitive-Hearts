import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Heart, MapPin, Calendar, User, Phone, Mail, ArrowLeft, X } from 'lucide-react'
import { useRazorpay } from '../hooks/useRazorpay'
import { PaymentReceipt } from '../components/PaymentReceipt'

export const DogProfile = () => {
  const { id } = useParams()
  const [showAdoptionForm, setShowAdoptionForm] = useState(false)
  const [showReceipt, setShowReceipt] = useState(false)
  const [receiptData, setReceiptData] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    livingSituation: '',
    experience: '',
    motivation: ''
  })

  const { initiatePaymentFlow, isProcessing, paymentStatus } = useRazorpay(
    (response) => {
      // Payment successful
      console.log('Payment successful:', response)
      
      // Prepare receipt data
      const applicationData = {
        ...formData,
        dogId: dog.id,
        dogName: dog.name,
        dogImage: dog.image,
        paymentId: response.razorpay_payment_id,
        paymentStatus: 'completed',
        amount: 500,
        submittedAt: new Date().toISOString()
      }
      
      setReceiptData({
        paymentData: response,
        applicationData: applicationData
      })
      
      setShowAdoptionForm(false)
      setShowReceipt(true)
      
      // In real app, save to Supabase with payment details
      console.log('Adoption application with payment:', applicationData)
    },
    () => {
      // Payment failed or cancelled
      alert('Payment was cancelled or failed. Please try again.')
    }
  )

  // Mock data - in real app, this would come from Supabase
  const dog = {
    id: 1,
    name: "Buddy",
    breed: "Golden Retriever Mix",
    age: 3,
    size: "large",
    gender: "male",
    description: "Buddy is a friendly and energetic dog who loves to play fetch and go on long walks. He's great with children and other pets, making him the perfect family companion. Buddy was found as a stray in Bandra and has been with us for 3 months, fully recovering from his previous life on the streets.",
    image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",
    gallery: [
      "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",
      "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
      "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg"
    ],
    personality: ["Friendly", "Energetic", "Loyal", "Playful", "Intelligent"],
    adoptionStatus: "available",
    medicalInfo: "Fully vaccinated, neutered, and microchipped. Recent health checkup shows excellent condition.",
    location: "Mumbai, Maharashtra",
    rescueDate: "2024-01-15",
    specialNeeds: "None - Buddy is a healthy and active dog",
    idealHome: "A family with children, preferably with a yard for him to play in. He would do well with other dogs too."
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields')
      return
    }

    // Initiate Razorpay payment
    await initiatePaymentFlow({
      amount: 500, // Adoption fee in INR
      name: 'Pawsitive Hearts',
      description: `Adoption fee for ${dog.name}`,
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        dogId: dog.id,
        dogName: dog.name,
        applicantName: formData.name,
      },
    })
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/dogs" className="inline-flex items-center text-orange-500 hover:text-orange-600">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dogs
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative">
                <img 
                  src={dog.image} 
                  alt={dog.name}
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
                <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold ${
                  dog.adoptionStatus === 'available' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-yellow-500 text-white'
                }`}>
                  {dog.adoptionStatus === 'available' ? 'Available for Adoption' : 'Adoption Pending'}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                {dog.gallery.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${dog.name} ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Dog Details */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{dog.name}</h1>
                  <p className="text-xl text-gray-600">{dog.breed}</p>
                </div>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors">
                  <Heart className="h-6 w-6" />
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Age</p>
                  <p className="font-semibold">{dog.age} years</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <User className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Gender</p>
                  <p className="font-semibold capitalize">{dog.gender}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Size</p>
                  <p className="font-semibold capitalize">{dog.size}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Heart className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-semibold">Mumbai</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">About {dog.name}</h3>
                <p className="text-gray-700 leading-relaxed">{dog.description}</p>
              </div>

              {/* Personality */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personality</h3>
                <div className="flex flex-wrap gap-2">
                  {dog.personality.map((trait, i) => (
                    <span key={i} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Medical Info */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Medical Information</h3>
                <p className="text-gray-700">{dog.medicalInfo}</p>
              </div>

              {/* Ideal Home */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ideal Home</h3>
                <p className="text-gray-700">{dog.idealHome}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Adoption Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Rescue Date</p>
                  <p className="font-semibold">{new Date(dog.rescueDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Special Needs</p>
                  <p className="font-semibold">{dog.specialNeeds}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-semibold">{dog.location}</p>
                </div>
              </div>
            </div>

            {/* Adoption CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-teal-500 text-white rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Ready to Adopt {dog.name}?</h3>
              <p className="mb-4">
                Fill out our adoption application to start the process. We'll contact you within 24 hours.
              </p>
              <button 
                onClick={() => setShowAdoptionForm(true)}
                className="w-full bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Apply to Adopt
              </button>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Questions?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">adopt@dogsofbombayhouse.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Adoption Form Modal */}
      {showAdoptionForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Adoption Application</h2>
                <button 
                  onClick={() => setShowAdoptionForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmitApplication} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <textarea
                    name="address"
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Living Situation</label>
                  <textarea
                    name="livingSituation"
                    required
                    rows={3}
                    placeholder="Tell us about your living situation - apartment, house, yard, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.livingSituation}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience with Dogs</label>
                  <textarea
                    name="experience"
                    required
                    rows={3}
                    placeholder="Tell us about your experience with dogs"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.experience}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to adopt {dog.name}?</label>
                  <textarea
                    name="motivation"
                    required
                    rows={4}
                    placeholder="Tell us why you want to adopt this dog"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.motivation}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? 'Processing...' : 'Pay ₹500 & Submit Application'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAdoptionForm(false)}
                    disabled={isProcessing}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md font-semibold transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                </div>
                
                <p className="text-sm text-gray-600 text-center mt-4">
                  💳 Secure payment powered by Razorpay (Test Mode)
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Payment Receipt */}
      {showReceipt && receiptData && (
        <PaymentReceipt
          paymentData={receiptData.paymentData}
          applicationData={receiptData.applicationData}
          onClose={() => setShowReceipt(false)}
        />
      )}
    </div>
  )
}